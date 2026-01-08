export default function Loading() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="h-5 w-32 rounded bg-white/10 animate-pulse" />

        <div className="mt-10 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="h-7 w-40 rounded-full bg-white/10 animate-pulse" />
            <div className="mt-5 h-12 w-3/4 rounded bg-white/10 animate-pulse" />
            <div className="mt-4 h-6 w-full rounded bg-white/10 animate-pulse" />
            <div className="mt-3 h-6 w-5/6 rounded bg-white/10 animate-pulse" />

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="h-28 rounded-xl border border-white/10 bg-white/5" />
              <div className="h-28 rounded-xl border border-white/10 bg-white/5" />
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-20 rounded-xl border border-white/10 bg-white/5" />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="aspect-[16/11] bg-white/10 animate-pulse" />
            </div>
            <div className="mt-6 h-36 rounded-xl border border-white/10 bg-white/5" />
          </div>
        </div>

        <div className="mt-16">
          <div className="h-9 w-44 rounded bg-white/10 animate-pulse" />
          <div className="mt-6 flex flex-wrap gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-9 w-28 rounded-full bg-white/10 animate-pulse" />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="h-9 w-52 rounded bg-white/10 animate-pulse" />
          <div className="mt-10 space-y-10">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="aspect-video rounded-2xl border border-white/10 bg-white/10 animate-pulse" />
                <div>
                  <div className="h-8 w-2/3 rounded bg-white/10 animate-pulse" />
                  <div className="mt-4 h-5 w-full rounded bg-white/10 animate-pulse" />
                  <div className="mt-3 h-5 w-5/6 rounded bg-white/10 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
