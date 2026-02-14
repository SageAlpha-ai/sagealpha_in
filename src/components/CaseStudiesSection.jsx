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
      className="relative py-24 sm:py-32 border-t border-blue-100/40"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div>
          <header className="max-w-2xl text-left">
            <h2
              id="case-studies-heading"
              className="text-3xl font-semibold tracking-tight text-[#0B1F33] sm:text-4xl"
            >
              Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Impact</span>
            </h2>
            <p className="mt-6 text-base text-slate-600 sm:text-lg leading-relaxed">
              Outcomes across industries where AI, data, and cloud are
              tightly integrated into business operations.
            </p>
          </header>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {cases.map((item) => (
              <article key={item.title} className="relative group rounded-3xl border border-slate-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-200/20 hover:border-blue-200">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:text-white group-hover:bg-blue-600 transition-all duration-300">
                  <div className="h-2 w-2 rounded-full bg-current" />
                </div>

                <h3 className="text-xl font-bold text-[#0B1F33] mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <ul className="space-y-3">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                      {bullet}
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
