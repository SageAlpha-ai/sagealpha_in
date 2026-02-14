function PartnershipsSection() {
  return (
    <section
      id="partnerships"
      aria-labelledby="partnerships-heading"
      className="relative overflow-hidden py-24 sm:py-32 border-t border-blue-100/40"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 relative z-10">
        <header className="max-w-2xl text-left">
          <h2
            id="partnerships-heading"
            className="text-3xl font-semibold tracking-tight text-[#0B1F33] sm:text-4xl"
          >
            Strategic <span className="">Partnerships</span>
          </h2>
          <p className="mt-6 text-base text-slate-600 sm:text-lg leading-relaxed">
            Interested in partnering with us? Let's explore how we can create
            value together.
          </p>
          <a
            href="mailto:partnerships@sagealpha.ai"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:scale-105"
          >
            Get in Touch
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </header>
      </div>
    </section>
  )
}

export default PartnershipsSection
