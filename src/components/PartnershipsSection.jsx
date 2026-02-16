import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function PartnershipsSection() {
  return (
    <section id="partnerships" className="relative h-[600px] w-full overflow-hidden bg-white">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Blue Triangle/Trapezoid */}
        <div
          className="absolute right-0 top-0 h-full w-[70%] bg-blue-600 transform origin-top-right skew-x-[-20deg] translate-x-32 z-0"
        />

        {/* Lighter Cyan Accent Stripe */}
        <div
          className="absolute right-[20%] top-0 h-full w-[15%] bg-cyan-400 transform origin-top-right skew-x-[-20deg] z-10 opacity-40 mix-blend-screen"
        />

        {/* Additional Decorative Elements */}
        <div
          className="absolute right-[5%] bottom-0 h-1/2 w-[10%] bg-indigo-900/10 transform origin-bottom-right skew-x-[-20deg] z-0"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 h-full flex items-center lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* Left Content */}
          <div className="max-w-xl">
            {/* Small Logo/Label */}
            <div className="flex items-center gap-2 mb-8">
              <span className="text-2xl font-bold tracking-tight text-brand-primary flex items-center gap-1">
                <span className="text-[#0B1F33]">Sage</span>Alpha
              </span>
              <span className="h-4 w-[1px] bg-slate-300 mx-2" />
              <span className="text-sm font-semibold tracking-widest text-slate-500 uppercase">Partner Program</span>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl leading-[1.1] mb-6">
                Built for AI?
                <br />
                <span className="text-slate-900">Now Let’s Scale It!</span>
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-lg font-medium">
                From the team that understands your enterprise stack to the AI architects who know your data. Complete your digital transformation story with SageAlpha.
              </p>

              <a
                href="mailto:partnerships@sagealpha.ai"
                className="inline-flex items-center justify-center rounded-full bg-[#0B1F33] px-8 py-4 text-base font-bold text-white shadow-xl shadow-slate-900/20 transition-all hover:bg-slate-800 hover:scale-105 active:scale-95"
              >
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="relative h-full flex items-end justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 mt-10 lg:mt-0"
            >
              {/* Image of Professional */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                alt="SageAlpha Partner Success"
                className="relative z-10 w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                }}
              />

              {/* Dynamic Element (Abstract Megaphone/Speaker visual) */}
              <div className="absolute -top-10 -right-10 h-32 w-32 bg-yellow-400 rounded-full blur-3xl opacity-60 z-0 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 h-64 w-64 bg-blue-500 rounded-full blur-[100px] opacity-40 -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PartnershipsSection
