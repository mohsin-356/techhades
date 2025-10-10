"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("loading");
    setMessage(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });
    if (res.ok) {
      setStatus("success");
      setMessage("Thank you! We'll get back to you shortly.");
      form.reset();
    } else {
      setStatus("error");
      const { error } = await res.json().catch(() => ({ error: "Something went wrong." }));
      setMessage(error || "Something went wrong.");
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-5xl font-[family:var(--font-display)] text-foreground">Contact</h1>
      <p className="mt-4 text-foreground/70 max-w-2xl">
        Let's discuss your project. We typically reply within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-2 gap-4 glass p-6 rounded-xl">
        <div className="md:col-span-1">
          <label className="text-sm text-foreground/70">Name</label>
          <input name="name" className="mt-1 w-full rounded-md bg-foreground/5 border border-foreground/10 px-3 py-2 outline-none focus:border-brand" required />
        </div>
        <div className="md:col-span-1">
          <label className="text-sm text-foreground/70">Email</label>
          <input type="email" name="email" className="mt-1 w-full rounded-md bg-foreground/5 border border-foreground/10 px-3 py-2 outline-none focus:border-brand" required />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-foreground/70">Message</label>
          <textarea name="message" rows={5} className="mt-1 w-full rounded-md bg-foreground/5 border border-foreground/10 px-3 py-2 outline-none focus:border-brand" required />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-5 py-3 rounded-md bg-brand hover:bg-brand-2 transition-colors text-white text-sm font-medium disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {message && (
            <span className={`text-sm ${status === "success" ? "text-emerald-500" : "text-red-500"}`}>{message}</span>
          )}
        </div>
      </form>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-4">
          <div className="text-sm text-foreground/60">Find us</div>
          <iframe
            className="mt-3 w-full h-64 rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509393!2d144.9537363155047!3d-37.81627974201071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjYiUyAxNDTCsDU3JzE0LjQiRQ!5e0!3m2!1sen!2s!4v1689989999999"
            allowFullScreen
          />
        </div>
        <div className="glass rounded-xl p-4">
          <div className="text-sm text-foreground/60">Connect</div>
          <ul className="mt-3 space-y-2 text-sm text-foreground/80">
            <li>Email: hello@example.com</li>
            <li>WhatsApp: +00 000 0000</li>
            <li>Instagram: @techhades</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
