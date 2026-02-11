function FinalCTASection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="border-t border-blue-900/30 bg-gradient-to-br from-[#102A43] via-[#1E3A8A] to-[#0B1F33]"
    >
      <div className="mx-auto max-w-6xl px-4 pt-28 pb-32 md:px-6 lg:px-8 lg:pt-32 lg:pb-40">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="final-cta-heading"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Ready to Design Your AI &amp; Cloud Journey?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">
            Talk to experts who have built, scaled, and delivered enterprise
            systems before.
          </p>
          <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0B1F33] shadow-lg transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F33]"
          >
            Schedule a Conversation
          </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection
