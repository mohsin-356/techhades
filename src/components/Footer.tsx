export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3 text-sm text-foreground/80">
        <div>
          <div className="font-[family:var(--font-display)] text-lg mb-3">
            <span className="text-foreground">Tech</span>
            <span className="text-brand">Hades</span>
          </div>
          <p className="text-foreground/70 max-w-sm">
            We craft intelligent, animated digital experiences. Web, Mobile, AI, Automation, and Smart Dashboards.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-foreground mb-3">Company</div>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-foreground">About</a></li>
              <li><a href="/projects" className="hover:text-foreground">Projects</a></li>
              <li><a href="/services" className="hover:text-foreground">Services</a></li>
            </ul>
          </div>
          <div>
            <div className="text-foreground mb-3">Connect</div>
            <ul className="space-y-2">
              <li><a href="mailto:hello@example.com" className="hover:text-foreground">Email</a></li>
              <li><a href="#" className="hover:text-foreground">WhatsApp</a></li>
              <li><a href="#" className="hover:text-foreground">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="md:text-right">
          <a
            href="/contact"
            className="inline-block rounded-full px-5 py-2 bg-brand hover:bg-brand-2 transition-colors text-white text-sm font-medium shadow-[0_0_24px_rgba(109,106,255,0.35)]"
          >
            Let’s Build Something Extraordinary
          </a>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-foreground/60">© {new Date().getFullYear()} TechHades. All rights reserved.</div>
    </footer>
  );
}
