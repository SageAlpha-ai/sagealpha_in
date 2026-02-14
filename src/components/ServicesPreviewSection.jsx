import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Bot, Brain, BarChart3, Cloud, Terminal, Lightbulb, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Agentic AI Solutions',
    href: '/services#agentic-ai',
    icon: Bot,
    description: 'Autonomous multi-agent systems that execute complex workflows.',
    bullets: ['Multi-agent systems', 'Intelligent automation', 'Decision orchestration'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI & ML Engineering',
    href: '/services#ai-ml-engineering',
    icon: Brain,
    description: 'Production-grade LLM applications and custom model development.',
    bullets: ['LLM implementation', 'RAG pipelines', 'Custom ML models'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Data & Analytics',
    href: '/services#data-analytics',
    icon: BarChart3,
    description: 'Modern data platforms for real-time actionable insights.',
    bullets: ['Data platforms', 'Advanced analytics', 'Business insights'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Cloud Strategy',
    href: '/services#cloud-strategy',
    icon: Cloud,
    description: 'Scalable, secure, and cost-effective cloud architectures.',
    bullets: ['Azure & AWS architecture', 'Cloud modernization', 'Cost optimization'],
    color: 'from-sky-500 to-indigo-500',
  },
  {
    title: 'DevOps & Platform',
    href: '/services#devops-platform',
    icon: Terminal,
    description: 'Automated infrastructure for velocity and reliability.',
    bullets: ['CI/CD pipelines', 'Infrastructure automation', 'Reliability & scale'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'AI Program Consulting',
    href: '/services#ai-program-consulting',
    icon: Lightbulb,
    description: 'Strategic advisory to navigate the AI transformation journey.',
    bullets: ['Vision & roadmap', 'Architecture design', 'Enterprise adoption'],
    color: 'from-amber-500 to-yellow-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

function ServicesPreviewSection() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32 border-t border-blue-100/40">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-[#0B1F33] sm:text-5xl"
          >
            Engineering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Future of Intelligence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            We provide end-to-end expertise across the entire data and AI value chain, helping you build systems that think, learn, and scale.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <Link to={service.href} className="block h-full">
                <div className="relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:ring-blue-500/20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`} />

                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg shadow-blue-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <service.icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1F33] group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-slate-100 pt-6">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-sm text-slate-500">
                        <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreviewSection
