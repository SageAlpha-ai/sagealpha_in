import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'

function HeroSection() {
  const scrollingText = "Agentic AI • Enterprise LLM • Cloud Architecture • AI Governance • Data Modernization • MLOps • Intelligent Systems • Scalable Platforms • "

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#030B1F]">
      {/* Background Layer 1: Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />

      {/* Background Layer 2: Scrolling Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <motion.div
          className="whitespace-nowrap text-[9vw] font-semibold text-blue-400/20 blur-[2px]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 100,   // Much slower for premium feel
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {scrollingText.repeat(2)}
        </motion.div>
      </div>


      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Enterprise AI.
            <br />
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#22D3EE] bg-clip-text text-transparent">
              Engineered to Scale.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            We help enterprises move from AI experimentation to production-grade intelligence.

          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-4xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-blue-500/40"
            >
              Talk to an Expert
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-4xl border border-slate-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-slate-800/50 hover:border-slate-500"
            >
              Our Services
              <ChevronRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
