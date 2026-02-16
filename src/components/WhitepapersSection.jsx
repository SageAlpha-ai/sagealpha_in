import { motion } from 'framer-motion'
import { ArrowRight, Download, Eye, FileText } from 'lucide-react'

const whitepapers = [
  {
    id: 1,
    title: 'Agentic AI in Financial Research',
    category: 'Finance & AI',
    description: 'Discover how autonomous AI agents are revolutionizing equity research, market analysis, and real-time decision making in the financial sector.',
    image: 'whitepapers/w1.jpg',
    readTime: '10 min read',
    link: 'https://drive.google.com/file/d/1IM6RxQXegTYQ-EZ13RhGjlPS6Cc8vd4a/view?usp=sharing'
  },
  {
    id: 2,
    title: 'Precise Financial Prompting',
    category: 'Prompt Engineering',
    description: 'A deep dive into advanced prompting strategies for LLMs to ensure high-accuracy financial output, reducing hallucinations and improving reliability.',
    image: 'whitepapers/w2.jpg',
    readTime: '8 min read'
  }
]

function WhitepapersSection() {
  return (
    <section id="whitepapers" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-[#0B1F33] sm:text-5xl"
          >
            Smart Thinking. Real Results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-blue-600 font-medium"
          >
            Actionable thinking on AI, data, and cloud transformation.
          </motion.p>
        </div>

        {/* Whitepapers Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {whitepapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-blue-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                <img
                  src={paper.image}
                  alt={paper.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-blue-800 shadow-sm backdrop-blur-sm">
                    {paper.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-4">
                  <FileText className="h-4 w-4" />
                  <span>Whitepaper</span>
                  <span>•</span>
                  <span>{paper.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-[#0B1F33] mb-4  transition-colors">
                  {paper.title}
                </h3>

                <p className="flex-1 text-slate-600 leading-relaxed mb-8">
                  {paper.description}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={paper.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-blue-500/20 active:scale-95"
                  >
                    <Eye className="h-4 w-4" />
                    Preview
                  </a>
                  <a
                    href={paper.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300 active:scale-95"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhitepapersSection
