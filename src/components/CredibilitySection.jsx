function CredibilitySection() {
  return (
    <section
      id="about"
      className="relative border-t border-slate-200 bg-gradient-to-b from-[#F8FAFC] to-[#EEF6FF] shadow-[inset_0_1px_0_rgba(15,23,42,0.06)]"
      aria-labelledby="founder-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8 lg:py-24">
        <div>
          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-center">
            <div className="space-y-5">
              <h2
                id="founder-heading"
                className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
              >
                 25+ Years of Experience. One Clear Vision.
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
             
              SageAlpha is founded by a technology leader with over 25 years 
              of hands-on experience in the fields of data, analytics, cloud,
               and artificial intelligence. Therefore, our mission is to 
               assist businesses in moving beyond the mere experimentation 
               of AI to creating value.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white/60 p-5 shadow-sm backdrop-blur">
              <dl className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
                <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-4 shadow-sm">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                    Experience
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-900">
                    25+ Years
                  </dd>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-4 shadow-sm">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                    Focus
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-900">
                    Enterprise AI &amp; Analytics
                  </dd>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-4 shadow-sm">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                    Cloud
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-900">
                    Azure &amp; AWS Expertise
                  </dd>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-4 shadow-sm">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                    Model
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-900">
                    Consulting to Scale
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CredibilitySection
