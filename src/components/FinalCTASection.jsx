import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40 bg-[#0B1221]">
      {/* Premium Background Layers */}
      <div className="absolute inset-0">
        {/* Deep mesh gradient base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#0B1221] to-[#0B1221]" />

        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent opacity-60" />

        {/* Animated accent orb */}
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Transform</span> Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Join the fleet of forward-thinking enterprises building their future with SageAlpha today.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-500/30 transition-all hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/40"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#schedule"
              className="text-base font-semibold leading-6 text-white hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Schedule a Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTASection
