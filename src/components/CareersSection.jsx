function CareersSection() {
  return (
    <section
      id="careers"
      aria-labelledby="careers-heading"
      className="relative py-24 sm:py-32 border-t border-blue-100/40"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <header className="max-w-2xl text-left">
          <h2
            id="careers-heading"
            className="text-3xl font-semibold tracking-tight text-[#0B1F33] sm:text-4xl"
          >
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Team</span>
          </h2>
          <p className="mt-6 text-base text-slate-600 sm:text-lg leading-relaxed">
            We're building the future of enterprise AI. If you're passionate
            about solving complex technical challenges, we'd love to hear from
            you.
          </p>
        </header>

        <div className="mt-12 rounded-3xl border border-slate-100 bg-white p-8 shadow-md">
          <h3 className="text-lg font-semibold text-[#0B1F33] mb-6">
            Open Positions
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/50 transition-colors">
              <div>
                <p className="font-semibold text-[#0B1F33]">
                  Senior ML Engineer
                </p>
                <p className="text-sm text-slate-600">Full-time • Remote</p>
              </div>
              <a
                href="#"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Apply →
              </a>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/50 transition-colors">
              <div>
                <p className="font-semibold text-[#0B1F33]">
                  Data Platform Engineer
                </p>
                <p className="text-sm text-slate-600">Full-time • Remote</p>
              </div>
              <a
                href="#"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Apply →
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100">
            <h4 className="text-base font-semibold text-[#0B1F33] mb-4">
              Internship Opportunities
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              We offer internships for students passionate about AI, data
              engineering, and cloud technologies. Reach out to{' '}
              <a
                href="mailto:careers@sagealpha.ai"
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                careers@sagealpha.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareersSection
