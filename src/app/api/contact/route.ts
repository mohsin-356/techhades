import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let name = "";
    let email = "";
    let message = "";
    let services: string[] = [];
    let attachments: { filename: string; content: Buffer; contentType?: string }[] = [];

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      name = String(formData.get("name") || "");
      email = String(formData.get("email") || "");
      message = String(formData.get("message") || "");
      const servicesRaw = String(formData.get("services") || "[]");
      try {
        const parsed = JSON.parse(servicesRaw);
        if (Array.isArray(parsed)) services = parsed.map(String);
      } catch {}
      const files = formData.getAll("attachments") as unknown as File[];
      attachments = await Promise.all(
        (files || []).map(async (f) => {
          const ab = await f.arrayBuffer();
          return {
            filename: (f as any).name || "attachment",
            content: Buffer.from(ab),
            contentType: (f as any).type,
          };
        })
      );
    } else {
      // Fallback: JSON body (no attachments)
      const body = await request.json().catch(() => ({}));
      name = body.name || "";
      email = body.email || "";
      message = body.message || "";
      if (Array.isArray(body.services)) services = body.services.map(String);
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `AlienMatrix <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `${message}\n\nServices: ${services.join(", ")}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${services.length ? `<p><strong>Services:</strong> ${services.join(", ")}</p>` : ""}
        <p>${message}</p>
      `,
      attachments,
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}

