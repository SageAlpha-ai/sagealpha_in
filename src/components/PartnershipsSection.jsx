function PartnershipsSection() {
  return (
    <section
      id="partnerships"
      aria-labelledby="partnerships-heading"
      className="bg-gradient-to-b from-[#F9FBFF] to-[#F1F7FF]"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-18">
        <header className="max-w-2xl">
          <h2
            id="partnerships-heading"
            className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
          >
            Working Together for Impact
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            We collaborate with technology providers, cloud platforms, and
            enterprise partners to deliver end-to-end AI and cloud solutions.
          </p>
        </header>
        <div className="mt-6">
          <button className="inline-flex items-center rounded-full border border-blue-600 bg-white px-6 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F0F7FF] hover:to-[#E0EEFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50">
            Partner With Us
        </button>
        </div>
      </div>
    </section>
  )
}

export default PartnershipsSection
