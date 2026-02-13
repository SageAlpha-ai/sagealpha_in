import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, Calendar } from 'lucide-react'

function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32 sm:py-40">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950" />

      {/* Animated Particles/Glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Transform</span> Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Join the fleet of forward-thinking enterprises building their future with SageAlpha today.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-2xl shadow-blue-500/20 transition-all hover:bg-blue-50 hover:text-blue-700"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

              {/* Button Glow Effect */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-30 blur group-hover:opacity-60 transition-opacity duration-200" />
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
