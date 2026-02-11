function TechnologySection() {
  return (
    <section
      aria-labelledby="technology-heading"
      className="border-y border-slate-200 bg-gradient-to-b from-[#F8FAFC] to-[#EEF6FF]"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,3fr)] md:items-center">
          <div>
            <h2
              id="technology-heading"
              className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
            >
              Built on Trusted Enterprise Platforms
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              We work with leading cloud and technology ecosystems to deliver
              secure, scalable, and future-ready solutions.
            </p>
          </div>
          <div className="grid gap-4 text-sm sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Cloud
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                Microsoft Azure
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Data, analytics, and AI services on the Microsoft cloud.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Cloud
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                Amazon Web Services
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Secure, resilient architectures on AWS for analytics and AI.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Data &amp; AI
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                Modern AI &amp; Analytics Stacks
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Open and cloud-native tooling for data engineering and AI
                workloads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologySection
