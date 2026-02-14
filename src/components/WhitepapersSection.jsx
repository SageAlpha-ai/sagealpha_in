function WhitepapersSection() {
  const whitepapers = [
    {
      title: 'Building Enterprise-Grade AI Systems',
      description: 'A practical guide to scaling AI from POC to production.',
    },
    {
      title: 'Modern Data Architecture Patterns',
      description: 'Best practices for cloud-native data platforms.',
    },
  ]

  return (
    <section
      id="whitepapers"
      aria-labelledby="whitepapers-heading"
      className="relative overflow-hidden py-24 sm:py-32 border-t border-blue-100/40"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 relative z-10">
        <div>
          <header className="max-w-2xl text-left">
            <h2
              id="whitepapers-heading"
              className="text-3xl font-semibold tracking-tight text-[#0B1F33] sm:text-4xl"
            >
              Thought <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Leadership</span>
            </h2>
            <p className="mt-6 text-base text-slate-600 sm:text-lg leading-relaxed">
              Deep-dive insights on AI, data, and cloud engineering.
            </p>
          </header>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {whitepapers.map((item) => (
              <article
                key={item.title}
                className="group relative rounded-3xl border border-slate-100 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/20 hover:border-blue-200"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-80" />

                <h3 className="text-xl font-bold text-[#0B1F33] mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Download PDF
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhitepapersSection
