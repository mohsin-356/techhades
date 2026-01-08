export default function Footer() {
  return (
    <footer className="relative mt-24 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Glass Container */}
      <div className="relative max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-[rgba(100,103,255,0.25)] bg-[#0B1526] backdrop-blur-xl shadow-[0_0_40px_rgba(100,103,255,0.15)]">

        {/* Decorative ambient glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6467FF]/15 rounded-full blur-[128px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#43B2F9]/10 rounded-full blur-[128px] translate-y-1/2 pointer-events-none" />

        <div className="relative px-8 py-16 md:px-12 md:py-20 grid gap-12 lg:grid-cols-12 text-sm text-[#94A3B8]">

          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <div className="font-display text-2xl font-bold tracking-tight">
              <span className="brand-shift">AlienMatrix</span>
            </div>
            <p className="text-[#94A3B8] text-base leading-relaxed max-w-sm">
              We craft intelligent, animated digital experiences. Web, Mobile, AI, Automation, and Smart Dashboards.
            </p>
            <div className="mt-auto pt-8 text-xs text-[#6B7280] font-medium">
              © {new Date().getFullYear()} AlienMatrix. All rights reserved.
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-6 text-base">Company</h3>
                <ul className="space-y-4">
                  <li><a href="/about" className="hover:text-[#43B2F9] transition-colors duration-200">About</a></li>
                  <li><a href="/projects" className="hover:text-[#43B2F9] transition-colors duration-200">Projects</a></li>
                  <li><a href="/services" className="hover:text-[#43B2F9] transition-colors duration-200">Services</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-6 text-base">Connect</h3>
                <ul className="space-y-4">
                  <li><a href="mailto:hello@example.com" className="hover:text-[#43B2F9] transition-colors duration-200">Email</a></li>
                  <li><a href="#" className="hover:text-[#43B2F9] transition-colors duration-200">WhatsApp</a></li>
                  <li><a href="#" className="hover:text-[#43B2F9] transition-colors duration-200">LinkedIn</a></li>
                </ul>
              </div>
            </div>

            {/* CTA Column */}
            <div className="flex flex-col items-start md:items-end justify-between">
              <div className="w-full md:text-right">
                <p className="text-[#6B7280] mb-4">Ready to start?</p>
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white transition-all bg-gradient-to-r from-[#6467FF] to-[#43B2F9] rounded-full hover:shadow-[0_0_40px_rgba(100,103,255,0.5)] hover:-translate-y-0.5"
                >
                  <span className="relative z-10">Let's Build Something Extraordinary</span>
                </a>
              </div>

              {/* Optional: Social Icons or extra visual element could go here */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
