import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-10 text-center">
          <h3 className="font-[family:var(--font-display)] text-2xl sm:text-3xl text-foreground mb-4">
            Let’s Build Something Extraordinary
          </h3>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Bring your vision to life with elegant design, powerful engineering, and cinematic animations.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="px-5 py-3 rounded-md bg-brand hover:bg-brand-2 transition-colors text-white text-sm font-medium">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
