function ProblemSolutionSection() {
  const items = [
    {
      title: 'The Challenge',
      description:
        'Many organizations invest in AI but fail due to lack of strategy, disjointed data, and computing systems that do not scale.',
    },
    {
      title: 'The SageAlpha Approach',
      description:
        'A consulting-centric, execution-driven model that aligns AI initiatives with enterprise objectives and robust architecture.',
    },
    {
      title: 'The Outcome',
      description:
        'Enterprise-ready AI programs that are secure, scalable, and provide measureable impact.',
    },
  ]

  return (
    <section
      aria-labelledby="problem-solution-heading"
      className="bg-gradient-to-b from-[#F9FBFF] to-[#F1F7FF]"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8 lg:py-24">
        <div>
          <header className="max-w-2xl">
            <h2
              id="problem-solution-heading"
              className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
            >
              From Problem to Outcomes
            </h2>
            
          </header>

          <div className="relative mt-10">
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 md:block">
              <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            </div>

            <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
              {items.map((item, index) => {
                const isMiddle = index === 1
                return (
                  <article
                    key={item.title}
                      className={[
                        'relative h-full rounded-2xl border p-6 shadow-sm transition',
                        'hover:-translate-y-1 hover:shadow-lg',
                        isMiddle
                          ? 'border-blue-200 bg-gradient-to-br from-white to-[#F0F7FF] ring-1 ring-blue-100 shadow-[0_18px_45px_rgba(30,58,138,0.10)]'
                          : 'border-slate-200 bg-white/80',
                      ].join(' ')}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p
                          className={[
                            'text-xs font-semibold uppercase tracking-wide',
                            isMiddle ? 'text-brand-accent' : 'text-slate-600',
                          ].join(' ')}
                        >
                          {item.title}
                        </p>
                        <span
                          aria-hidden="true"
                          className="hidden h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-xs font-semibold text-slate-500 md:flex"
                        >
                          {index + 1}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
                        {item.description}
                      </p>

                      {index < items.length - 1 && (
                        <div
                          aria-hidden="true"
                          className="absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block"
                        >
                          <div className="flex items-center">
                            <div className="h-px w-6 bg-gradient-to-r from-slate-300 via-brand-accent/70 to-slate-300" />
                            <div className="ml-1 h-1.5 w-1.5 rotate-45 border-r border-t border-brand-accent/80" />
                          </div>
                        </div>
                      )}
                    </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolutionSection
