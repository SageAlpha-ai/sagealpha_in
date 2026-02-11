function WhitepapersSection() {
  const papers = [
    {
      title: 'Enterprise AI Adoption: From Strategy to Scale',
      description:
        'A practical guide to building AI programs that deliver real business outcomes.',
    },
    {
      title:
        'Agentic AI & RAG: Designing Intelligent Systems for the Future',
      description:
        'How modern AI architectures are transforming enterprise decision-making and automation.',
    },
  ]

  return (
    <section
      id="whitepapers"
      aria-labelledby="whitepapers-heading"
      className="bg-gradient-to-b from-[#F8FAFC] to-[#EEF6FF]"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8 lg:py-24">
        <div>
          <header className="max-w-2xl">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-10 w-1 rounded-full bg-gradient-to-b from-[#2563EB] to-[#1E3A8A]" />
              <div>
                <h2
                  id="whitepapers-heading"
                  className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
                >
                  Insights from Experience
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Thoughtful, practitioner-led perspectives on building AI,
                  data, and cloud capabilities in complex organizations.
                </p>
              </div>
            </div>
          </header>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {papers.map((paper) => (
              <article key={paper.title} className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div>
                    <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1E3A8A]" />
                    <h3 className="mt-4 text-sm font-semibold text-slate-900">
                      {paper.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {paper.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <button className="inline-flex items-center rounded-full border border-blue-600 px-5 py-2 text-xs font-semibold text-blue-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F0F7FF] hover:to-[#E0EEFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50">
                      Download
                    </button>
                  </div>
                </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhitepapersSection
