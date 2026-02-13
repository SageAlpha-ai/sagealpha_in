import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Activity, Database, Cloud, Layers } from 'lucide-react'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full bg-[#020617] opacity-80 z-0" />

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[128px] pointer-events-none"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">

        {/* Left Content */}
        <div className="max-w-2xl text-left">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 backdrop-blur-sm mb-6"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Enterprise AI, Data & Cloud Consulting
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl font-bold tracking-tight text-white sm:text-7xl leading-[1.1]"
          >
            Building Enterprise <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Ready Solutions
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg text-slate-400 leading-relaxed max-w-lg"
          >
            From strategy to execution, we design and scale AI, data, and cloud architectures that deliver measurable business impact.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-500 hover:scale-105 hover:shadow-blue-500/25 ring-offset-2 focus:ring-2 ring-blue-500"
            >
              Talk to an Expert
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-slate-800 hover:border-slate-600"
            >
              Our Services
              <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 flex items-center gap-8 border-t border-slate-800 pt-8"
          >
            <div>
              <p className="text-2xl font-bold text-white">98%</p>
              <p className="text-sm text-slate-500">Success Rate</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-sm text-slate-500">Enterprise Clients</p>
            </div>
          </motion.div>
        </div>

        {/* Right Visual - Glassmorphic Card Stack */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
          className="relative hidden lg:block perspective-1000"
        >
          {/* Main Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 rounded-3xl border border-slate-700/50 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-slate-700/50 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">System Architecture</h3>
                  <p className="text-xs text-slate-400">Live Monitoring</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-500/50"></span>
                <span className="h-2 w-2 rounded-full bg-yellow-500/50"></span>
                <span className="h-2 w-2 rounded-full bg-green-500/50"></span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="group rounded-xl bg-slate-800/50 p-4 transition-colors hover:bg-slate-800/80">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400"><Database size={18} /></div>
                  <div className="flex-1">
                    <div className="h-2 w-24 rounded bg-slate-700 mb-2"></div>
                    <div className="h-1.5 w-16 rounded bg-slate-700/50"></div>
                  </div>
                  <div className="text-xs text-green-400 font-mono">Active</div>
                </div>
              </div>
              <div className="group rounded-xl bg-slate-800/50 p-4 transition-colors hover:bg-slate-800/80">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400"><Cloud size={18} /></div>
                  <div className="flex-1">
                    <div className="h-2 w-32 rounded bg-slate-700 mb-2"></div>
                    <div className="h-1.5 w-20 rounded bg-slate-700/50"></div>
                  </div>
                  <div className="text-xs text-green-400 font-mono">Synced</div>
                </div>
              </div>
              <div className="group rounded-xl bg-slate-800/50 p-4 transition-colors hover:bg-slate-800/80">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400"><Layers size={18} /></div>
                  <div className="flex-1">
                    <div className="h-2 w-28 rounded bg-slate-700 mb-2"></div>
                    <div className="h-1.5 w-12 rounded bg-slate-700/50"></div>
                  </div>
                  <div className="text-xs text-blue-400 font-mono">Deploying</div>
                </div>
              </div>
            </div>

            {/* Floating connecting line */}
            <div className="absolute -right-6 -bottom-6 -z-10 h-64 w-64 rounded-full bg-blue-600/20 blur-[80px]" />
          </motion.div>

          {/* Background Card */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-8 -right-12 z-10 w-full rounded-3xl border border-slate-700/30 bg-slate-800/40 p-6 backdrop-blur-md opacity-60"
          >
            <div className="h-32"></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default HeroSection
