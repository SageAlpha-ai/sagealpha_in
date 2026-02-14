import { motion } from 'framer-motion'
import { AlertCircle, GitMerge, Trophy, ArrowRight } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'The Challenge',
    icon: AlertCircle,
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    description:
      'Organizations invest heavily in AI/Data but often fail due to fragmented strategy, siloed data, and unscalable infrastructure, leading to stalled pilots.',
  },
  {
    id: 2,
    title: 'The SageAlpha Approach',
    icon: GitMerge,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    description:
      'We bring a consulting-first execution model, aligning technical architecture with business goals. We treat AI not as a feature, but as a systemic capability.',
  },
  {
    id: 3,
    title: 'The Outcome',
    icon: Trophy,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    description:
      'Enterprise-grade systems that are secure, governed, and scalable. You get measurable ROI and a future-proof foundation for continuous innovation.',
  },
]

function ProblemSolutionSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 border-t border-blue-100/40">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-[#0B1F33] sm:text-4xl"
          >
            From Friction to <span className="text-blue-600">Flow</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg leading-8 text-slate-600"
          >
            We bridge the gap between ambitious AI concepts and diverse, reliable operational reality.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-12 left-0 w-full hidden lg:block">
            <div className="absolute inset-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-slate-200" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-red-500 via-blue-500 to-emerald-500 origin-left"
            />
          </div>

          <div className="grid gap-12 lg:grid-cols-3 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className={`relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl border-4 border-white ${step.bg} shadow-xl shadow-slate-200/50 transition-transform duration-300 hover:scale-110 hover:rotate-3`}>
                  <step.icon className={`h-10 w-10 ${step.color}`} />
                </div>

                <div className="mt-8 relative z-10 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/40 hover:border-blue-200 transition-colors">
                  <h3 className="text-xl font-bold text-[#0B1F33] mb-3 flex items-center justify-center gap-2">
                    <span className="text-sm font-light text-slate-400 opacity-50">0{step.id}.</span>
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolutionSection
