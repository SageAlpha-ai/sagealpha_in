import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, FileText, GraduationCap } from 'lucide-react'

// Case Studies Data based on user request
const caseStudies = [
  {
    id: 1,
    category: 'Cybersecurity & AI',
    title: 'AI Risk Assessment Platform for Enterprise Security Teams',
    description: 'We built an intelligent risk assessment platform that automates security audits, providing real-time visibility into vulnerabilities across large-scale enterprise networks.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Cyber/Code/Matrix look
    icon: ShieldCheck,
    stat: '300% faster audits'
  },
  {
    id: 2,
    category: 'Construction Tech',
    title: 'AI Document Processing for Construction Teams',
    description: 'Developed a custom NLP solution to process complex construction blueprints and contracts, reducing document retrieval time by 50% for field teams.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Architecture/Blueprints
    icon: FileText,
    stat: '50% faster retrieval'
  },
  {
    id: 3,
    category: 'EdTech & AI',
    title: 'AI Tutor Assistant Improves Instructor Efficiency',
    description: 'Created an AI-driven grading and feedback assistant that improved instructor efficiency by 45% and cut student feedback loops to under 40 seconds.',
    image: 'https://images.unsplash.com/photo-1509062522246-37559cc792f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Education/Classroom/Tech
    icon: GraduationCap,
    stat: '45% efficiency gain'
  }
]

function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative py-24 sm:py-32 bg-slate-50 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-[#0B1F33] sm:text-5xl"
          >
            Case Studies: What We’ve Helped Our Clients Build
          </motion.h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-800 shadow-sm backdrop-blur-sm">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <study.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                    {study.stat}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold leading-tight text-[#0B1F33] group-hover:text-blue-700 transition-colors">
                  {study.title}
                </h3>

                <p className="flex-1 text-sm leading-relaxed text-slate-600">
                  {study.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-800 cursor-pointer">
                  Read Case Study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-full scale-x-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform duration-500 group-hover:scale-x-100 origin-left" />
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CaseStudiesSection
