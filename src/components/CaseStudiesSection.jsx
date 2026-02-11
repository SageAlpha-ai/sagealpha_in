function CaseStudiesSection() {
  const cases = [
    {
      title: 'Enterprise Analytics Modernization',
      bullets: [
        'Scalable analytics foundation',
        'Faster insights and decision-making',
      ],
    },
    {
      title: 'AI-Driven Business Intelligence',
      bullets: ['AI-powered reporting', 'Improved operational efficiency'],
    },
    {
      title: 'Cloud Migration & Optimization',
      bullets: [
        'Cloud strategy and migration',
        'Improved performance and reduced cost',
      ],
    },
  ]

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8 lg:py-24">
        <div>
          <header className="max-w-2xl">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-10 w-1 rounded-full bg-gradient-to-b from-[#2563EB] to-[#1E3A8A]" />
              <div>
                <h2
                  id="case-studies-heading"
                  className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
                >
                  Real-World Impact
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Outcomes across industries where AI, data, and cloud are
                  tightly integrated into business operations.
                </p>
              </div>
            </div>
          </header>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {cases.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1E3A8A]" />
                  <h3 className="mt-4 text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-soft" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
