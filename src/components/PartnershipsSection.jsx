import { motion } from 'framer-motion'
import { ArrowRight, Cpu, Database, Handshake, Lightbulb } from 'lucide-react'

// Partnership Categories
const partnershipTypes = [
  {
    id: 1,
    title: 'Technology Integration',
    description: 'Embed our sovereign AI agents directly into your software ecosystem to power next-gen features.',
    icon: Cpu
  },
  {
    id: 2,
    title: 'Data Providers',
    description: 'Monetize your high-value proprietary datasets by securely fueling our specialized financial models.',
    icon: Database
  },
  {
    id: 3,
    title: 'Consulting Firms',
    description: 'Partner with us to deliver cutting-edge AI implementation and transformation strategies to your clients.',
    icon: Handshake
  },
  {
    id: 4,
    title: 'Research & Innovation',
    description: 'Co-develop breakthrough solutions and push the boundaries of what is possible in FinTech.',
    icon: Lightbulb
  }
]

function PartnershipsSection() {
  return (
    <section id="partnerships" className="relative py-24 sm:py-32 bg-slate-50 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text & CTA */}
          <div className="text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-[#0B1F33] sm:text-5xl">
                Let’s Build the Future <span className="text-blue-600">Together</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Innovation is a team sport. We believe that the most powerful AI solutions are built through collaboration.
              </p>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Whether you are a data provider, a technology platform, or a strategic consultancy, combining your expertise with our AI engine creates unfair advantages for everyone involved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <a
                href="mailto:partnerships@sagealpha.ai"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:scale-105 active:scale-95"
              >
                Become a Partner
                <ArrowRight className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Grid of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                className="group relative flex flex-col p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <type.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1F33] mb-2 group-hover:text-blue-600 transition-colors">
                  {type.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default PartnershipsSection
