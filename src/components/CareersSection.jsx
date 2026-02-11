function CareersSection() {
  return (
    <section
      id="careers"
      aria-labelledby="careers-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-18">
        <header className="max-w-2xl">
          <h2
            id="careers-heading"
            className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
          >
            Build the Future with SageAlpha
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Join a team that pairs deep engineering with practical consulting to
            solve important problems in AI, data, and cloud.
          </p>
        </header>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="text-sm font-semibold text-slate-900">Careers</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li>AI Engineer</li>
              <li>Machine Learning Engineer</li>
              <li>Data Scientist</li>
              <li>Cloud &amp; Analytics Roles</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="text-sm font-semibold text-slate-900">Internships</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li>MERN Stack Intern</li>
              <li>AI / ML Intern (Python, scikit-learn)</li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <button className="inline-flex items-center rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:opacity-95 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50">
            View Open Roles
          </button>
        </div>
      </div>
    </section>
  )
}

export default CareersSection
