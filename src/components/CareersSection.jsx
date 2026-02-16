import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight, ChevronDown, Users, Briefcase, Code, Database, Layers, Lightbulb } from 'lucide-react'

const careerPath = [
  {
    title: 'Join as Engineer',
    align: 'left',
    icon: Code,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200'
  },
  {
    title: 'Work on Enterprise Systems',
    align: 'right',
    icon: Database,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200'
  },
  {
    title: 'Step Into Leadership',
    align: 'left',
    icon: Layers,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200'
  },
  {
    title: 'Shape the Bigger Vision',
    align: 'right',
    icon: Lightbulb,
    color: 'text-fuchsia-600',
    bg: 'bg-fuchsia-50',
    border: 'border-fuchsia-200'
  }
]

const openRoles = [
  {
    id: 1,
    title: 'AI/ML Engineer',
    type: 'On-site',
    department: 'Engineering',
    link: '#'
  },
  {
    id: 2,
    title: 'Data Engineer',
    type: 'On-site',
    department: 'Data Infrastructure',
    link: '#'
  }
]

// Animated Arrow Component
const RunningArrow = ({ direction = 'right', color = 'text-slate-400' }) => {
  return (
    <div className={`flex ${direction === 'left' ? 'flex-row-reverse justify-end' : 'flex-row justify-start'} items-center gap-1 ${color}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.3, 1, 0.3], x: [0, 2, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        >
          {direction === 'down' ? (
            <ChevronDown className="w-5 h-5 stroke-[3px]" />
          ) : (
            <ChevronRight className={`w-5 h-5 stroke-[3px] ${direction === 'left' ? 'rotate-180' : ''}`} />
          )}
        </motion.div>
      ))}
    </div>
  )
}

function CareersSection() {
  return (
    <section id="careers" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Content */}
          <div className="flex flex-col">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <div className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">
                Careers at SageAlpha
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-[#0B1F33] sm:text-5xl mb-6">
                Your Journey at SageAlpha
              </h2>
            </motion.div>

            {/* Dynamic Journey Path (Zig-Zag) */}
            <div className="mt-12 mb-16 relative max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col gap-6">
                {careerPath.map((step, index) => (
                  <div key={index} className="flex flex-col">
                    {/* Step Card */}
                    <div className={`flex ${step.align === 'right' && index !== 0 ? 'justify-end' : 'justify-start'}`}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className={`relative z-10 px-6 py-4 rounded-2xl border-2 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-4 ${step.bg} ${step.border} w-fit max-w-[85%]`}
                      >
                        <div className={`p-2 rounded-lg bg-white/60 backdrop-blur-sm ${step.color}`}>
                          <step.icon className="w-5 h-5" />
                        </div>
                        <span className={`font-bold text-lg ${step.color}`}>{step.title}</span>
                      </motion.div>
                    </div>

                    {/* Connector Arrow (Except last item) */}
                    {index !== careerPath.length - 1 && (
                      <div className={`flex py-1 ${step.align === 'right' ? 'justify-start pl-10' : 'justify-end pr-10'} -my-3 z-0 relative`}>
                        <div className={`transform ${step.align === 'left' ? 'translate-x-2 rotate-45' : '-translate-x-2 -rotate-45'}`}>
                          <RunningArrow
                            direction={step.align === 'left' ? 'down' : 'down'}
                            color={step.align === 'left' ? "text-blue-300" : "text-indigo-300"}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-slate-100 mb-12" />

            {/* Open Roles */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B1F33] mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-blue-600" />
                Open Roles
              </h3>

              <div className="space-y-4">
                {openRoles.map((role, index) => (
                  <motion.a
                    key={role.id}
                    href={role.link}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="group flex items-center justify-between p-5 rounded-xl border border-slate-200 bg-white hover:border-blue-600 hover:bg-blue-50/10 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div>
                      <h4 className="font-bold text-[#0B1F33]  transition-colors">
                        {role.title}
                      </h4>
                      <p className="text-sm text-slate-500 mt-1">
                        {role.department} • {role.type}
                      </p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 text-right">
                <a
                  href="#"
                  className="inline-flex items-right justify-right gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 hover:scale-105 active:scale-95 w-full sm:w-auto"
                >
                  View All
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-6 text-sm text-slate-500">
                Don't see a match? <a href="mailto:careers@sagealpha.ai" className="text-blue-600 hover:underline font-medium">Contact us</a>
              </p>
            </div>

          </div>

          {/* Right Column: Image */}
          <div className="relative h-full min-h-[600px] hidden lg:block rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="SageAlpha Team Collaboration"
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />

            {/* Floating Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-8 right-8 p-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 z-20"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-[#0B1F33] font-medium leading-relaxed text-lg">
                    "The ownership culture here is unlike anywhere else. You build it, you launch it."
                  </p>
                  <p className="text-sm text-[#0B1F33] font-medium mt-2 uppercase tracking-wide">
                    — Engineering Team
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CareersSection
