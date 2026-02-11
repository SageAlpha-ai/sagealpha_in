import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#F0F7FF] to-[#E6F0FA]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,58,138,0.14),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(37,99,235,0.10),_transparent_55%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl space-y-6">
          <p className="text-sm font-semibold tracking-wide text-brand-accent">
            Enterprise AI, Data &amp; Cloud Consulting
          </p>
          <h1
            id="hero-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-[#0B1F33] sm:text-4xl lg:text-5xl"
          >
            Building Enterprise-Ready{" "}
            
            <span className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0EA5A4] bg-clip-text text-transparent">
               AI, Data &amp; Cloud Solutions
            </span>
          </h1>
          <p className="text-pretty text-base text-slate-600 sm:text-lg">
          From strategy to execution, we design and scale AI, data, and cloud solutions that actually deliver results.          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:opacity-95 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
            >
              Talk to an Expert
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border border-blue-600 bg-white/70 px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F0F7FF] hover:to-[#E0EEFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
            >
              Explore Our Services
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-10 gap-y-3 text-xs text-slate-500">
            <div>
              <p className="font-semibold text-slate-700">
                Enterprise-grade delivery
              </p>
              <p>Architecture, security, and governance by design</p>
            </div>
            <div>
              <p className="font-semibold text-slate-700">
                Strategy through execution
              </p>
              <p>From roadmap to production systems</p>
            </div>
          </div>
          </div>

          <div aria-hidden="true" className="relative">
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-blue-400 blur-3xl opacity-20" />
            <div className="relative rounded-3xl bg-panel-gradient p-[1px] shadow-soft-lg">
          <div className="relative h-full w-full rounded-[1.4rem] bg-slate-900/95 p-6 sm:p-8">
            <div className="absolute inset-0 rounded-[1.4rem] bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.24),transparent_55%),radial-gradient(circle_at_80%_0,rgba(59,130,246,0.32),transparent_60%)] opacity-80" />
            <div className="relative space-y-6 text-slate-100">
              <p className="text-sm font-semibold text-sky-200">
                Modern Enterprise Architecture
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs sm:text-[0.8rem]">
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-4 backdrop-blur">
                  <p className="text-[0.7rem] font-medium uppercase tracking-wide text-slate-400">
                    AI Layer
                  </p>
                  <p className="mt-1 font-semibold text-slate-50">
                    LLMs &amp; Agentic Systems
                  </p>
                  <p className="mt-2 text-slate-400">
                    Orchestrated agents, RAG, and copilots aligned to processes.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-4 backdrop-blur">
                  <p className="text-[0.7rem] font-medium uppercase tracking-wide text-slate-400">
                    Data Fabric
                  </p>
                  <p className="mt-1 font-semibold text-slate-50">
                    Trusted Analytics Foundation
                  </p>
                  <p className="mt-2 text-slate-400">
                    Governed, discoverable, and analytics-ready data platforms.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-4 backdrop-blur">
                  <p className="text-[0.7rem] font-medium uppercase tracking-wide text-slate-400">
                    Cloud Platform
                  </p>
                  <p className="mt-1 font-semibold text-slate-50">
                    Azure &amp; AWS Native
                  </p>
                  <p className="mt-2 text-slate-400">
                    Secure, compliant, and cost-aware landing zones.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-4 backdrop-blur">
                  <p className="text-[0.7rem] font-medium uppercase tracking-wide text-slate-400">
                    Operating Model
                  </p>
                  <p className="mt-1 font-semibold text-slate-50">
                    Programs that Scale
                  </p>
                  <p className="mt-2 text-slate-400">
                    Ways of working that connect strategy, delivery, and change.
                  </p>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
