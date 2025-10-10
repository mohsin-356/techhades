export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3 text-sm text-zinc-300">
        <div>
          <div className="font-[family:var(--font-display)] text-lg mb-3">
            <span className="text-white">Tech</span>
            <span className="text-brand">Hades</span>
          </div>
          <p className="text-zinc-400 max-w-sm">
            We craft intelligent, animated digital experiences. Web, Mobile, AI, Automation, and Smart Dashboards.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-white mb-3">Company</div>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/projects" className="hover:text-white">Projects</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white mb-3">Connect</div>
            <ul className="space-y-2">
              <li><a href="mailto:hello@example.com" className="hover:text-white">Email</a></li>
              <li><a href="#" className="hover:text-white">WhatsApp</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
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
      <div className="py-6 text-center text-xs text-zinc-500">© {new Date().getFullYear()} TechHades. All rights reserved.</div>
    </footer>
  );
}
