"use client";

import type { Project } from "@/app/projects/data/projectsData";

export default function DownloadPdfButton({ project }: { project: Project }) {
  function escapeHtml(value: string): string {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function printHtmlInPlace(bodyHtml: string) {
    const rootId = "case-study-print-root";

    const existing = document.getElementById(rootId);
    if (existing) existing.remove();

    const styleId = "case-study-print-style";
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) existingStyle.remove();

    const root = document.createElement("div");
    root.id = rootId;
    root.innerHTML = bodyHtml;
    root.style.position = "fixed";
    root.style.inset = "0";
    root.style.zIndex = "2147483647";
    root.style.background = "#ffffff";
    root.style.color = "#0b1220";
    root.style.overflow = "auto";

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      @media print {
        body > *:not(#${rootId}) { display: none !important; }
        #${rootId} { display: block !important; position: static !important; overflow: visible !important; }
      }
    `;

    const prevAfterPrint = window.onafterprint;

    const cleanup = () => {
      try {
        root.remove();
        style.remove();
      } finally {
        window.onafterprint = prevAfterPrint;
      }
    };

    window.onafterprint = () => {
      cleanup();
      if (typeof prevAfterPrint === "function") prevAfterPrint.call(window, null as unknown as Event);
    };

    document.head.appendChild(style);
    document.body.appendChild(root);

    try {
      window.print();
    } finally {
      setTimeout(cleanup, 2000);
    }
  }

  function handleDownload() {
    const titleSafe = escapeHtml(project.title);
    const categorySafe = escapeHtml(project.category);
    const taglineSafe = escapeHtml(project.hero.tagline);
    const briefSafe = escapeHtml(project.hero.brief);
    const problemSafe = escapeHtml(project.hero.problem);
    const solutionSafe = escapeHtml(project.hero.solution);

    const bodyHtml = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; padding:40px; color:#0b1220;">
        <div style="color:#475569;">${categorySafe}</div>
        <h1 style="font-size:28px; margin:0 0 8px;">${titleSafe}</h1>
        <p style="color:#475569; margin:0 0 10px;">${taglineSafe}</p>
        <p style="line-height:1.6; margin:0 0 10px;">${briefSafe}</p>

        <div style="display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px;">
          <div style="border:1px solid #e2e8f0; border-radius:12px; padding:14px;"><div style="color:#475569;">Problem</div><p style="line-height:1.6; margin:8px 0 0;">${problemSafe}</p></div>
          <div style="border:1px solid #e2e8f0; border-radius:12px; padding:14px;"><div style="color:#475569;">Solution</div><p style="line-height:1.6; margin:8px 0 0;">${solutionSafe}</p></div>
        </div>

        <h2 style="font-size:16px; margin:28px 0 10px;">Quick Info</h2>
        <div style="display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px;">
          <div style="border:1px solid #e2e8f0; border-radius:12px; padding:14px;"><div style="color:#475569;">Platform</div><div>${escapeHtml(project.quickInfo.platform)}</div></div>
          <div style="border:1px solid #e2e8f0; border-radius:12px; padding:14px;"><div style="color:#475569;">Type</div><div>${escapeHtml(project.quickInfo.type)}</div></div>
          <div style="border:1px solid #e2e8f0; border-radius:12px; padding:14px;"><div style="color:#475569;">Duration</div><div>${escapeHtml(project.quickInfo.duration)}</div></div>
          <div style="border:1px solid #e2e8f0; border-radius:12px; padding:14px;"><div style="color:#475569;">Process</div><div>${escapeHtml(project.quickInfo.process)}</div></div>
        </div>

        <h2 style="font-size:16px; margin:28px 0 10px;">Tech Stack</h2>
        <p style="line-height:1.6; margin:0 0 10px;">${escapeHtml(project.techStack.map((t) => t.name).join(", "))}</p>

        <h2 style="font-size:16px; margin:28px 0 10px;">Key Features</h2>
        <ul style="margin:8px 0 0 18px;">${project.features
          .map((f) => `<li style=\"margin:6px 0;\"><strong>${escapeHtml(f.title)}:</strong> ${escapeHtml(f.description)}</li>`)
          .join("")}</ul>

        <h2 style="font-size:16px; margin:28px 0 10px;">Challenge</h2>
        <p style="line-height:1.6; margin:0 0 10px;">${escapeHtml(project.details.challenge.description)}</p>
        <ul style="margin:8px 0 0 18px;">${project.details.challenge.requirements
          .map((r) => `<li style=\"margin:6px 0;\">${escapeHtml(r)}</li>`)
          .join("")}</ul>

        <h2 style="font-size:16px; margin:28px 0 10px;">Solution</h2>
        <p style="line-height:1.6; margin:0 0 10px;">${escapeHtml(project.details.solution.overview)}</p>
        <ul style="margin:8px 0 0 18px;">${project.details.solution.technicalApproach
          .map((r) => `<li style=\"margin:6px 0;\">${escapeHtml(r)}</li>`)
          .join("")}</ul>

        <h2 style="font-size:16px; margin:28px 0 10px;">Business Value</h2>
        <div style="display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px;">
          <div style="border:1px solid #e2e8f0; border-radius:12px; padding:14px;"><div style="color:#475569;">Before</div><ul style="margin:8px 0 0 18px;">${project.details.businessValue.before
            .map((i) => `<li style=\"margin:6px 0;\">${escapeHtml(i)}</li>`)
            .join("")}</ul></div>
          <div style="border:1px solid #e2e8f0; border-radius:12px; padding:14px;"><div style="color:#475569;">After</div><ul style="margin:8px 0 0 18px;">${project.details.businessValue.after
            .map((i) => `<li style=\"margin:6px 0;\">${escapeHtml(i)}</li>`)
            .join("")}</ul></div>
        </div>
      </div>
    `;

    printHtmlInPlace(bodyHtml);
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[#383bfe] to-[#06B6D4] text-white font-medium shadow-[0_0_20px_rgba(56,59,254,0.25)]"
    >
      Download Case Study (PDF)
    </button>
  );
}
