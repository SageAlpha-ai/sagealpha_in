import { motion } from 'framer-motion'
import { Database, Cloud, Brain, ShieldCheck } from 'lucide-react'

function CredibilitySection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-white">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-slate-50/50 -z-10" />
      <div className="absolute right-0 top-0 h-[600px] w-[600px] bg-blue-50/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
             
              About SageAlpha
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-[#0B1F33] sm:text-5xl mb-6">
              25+ Years of Experience.<br />
              <span className="">
                One Clear Vision.
              </span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Founded by a technology leader with over two decades of hands-on expertise, SageAlpha bridges the gap between complex technology and tangible business value.
              </p>
              <p>
                We don't just build systems; we engineer future-proof foundations for Data, Cloud, and AI that allow enterprises to scale with confidence, moving beyond experimentation to real-world impact.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0B1F33] bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                Limitless Scale
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0B1F33] bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
                Purposeful Design
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0B1F33] bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.4)]" />
                Measurable Impact
              </div>
            </div>
          </motion.div>

          {/* Right Visual - Abstract Experience Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Container for the Orb Visual */}
            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">

              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-blue-100/30 rounded-full blur-3xl" />

              {/* Central Core */}
              <div className="relative z-20 h-40 w-40 sm:h-48 sm:w-48 rounded-full bg-white shadow-2xl shadow-blue-900/10 flex flex-col items-center justify-center border border-slate-50 ring-1 ring-slate-100/50">
                <span className="text-4xl sm:text-5xl font-bold text-[#0B1F33] tracking-tight">25+</span>
                <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-widest mt-1">Years</span>
              </div>

              {/* Orbit 1 - Cloud */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[10%] border border-slate-100/60 rounded-full z-10"
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 h-14 w-14 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-50 flex items-center justify-center text-blue-500"
                >
                  <Cloud size={24} />
                </motion.div>
              </motion.div>

              {/* Orbit 2 - Database */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[25%] border border-slate-100/60 rounded-full z-10"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-6 h-14 w-14 bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-50 flex items-center justify-center text-indigo-500"
                >
                  <Database size={24} />
                </motion.div>
              </motion.div>

              {/* Static Orbiting Element - Brain */}
              <div className="absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 z-10 hidden sm:flex h-12 w-12 bg-white rounded-lg shadow-lg border border-slate-50 items-center justify-center text-violet-500">
                <Brain size={20} />
              </div>

              {/* Static Orbiting Element - Security */}
              <div className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 z-10 hidden sm:flex h-12 w-12 bg-white rounded-lg shadow-lg border border-slate-50 items-center justify-center text-emerald-500">
                <ShieldCheck size={20} />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default CredibilitySection
