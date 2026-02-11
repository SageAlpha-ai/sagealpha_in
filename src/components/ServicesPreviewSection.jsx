import { Link } from 'react-router-dom'

function ServicesPreviewSection() {
  const services = [
    {
      title: 'Agentic AI Solutions',
      href: '/services#agentic-ai',
      bullets: [
        'Multi-agent systems',
        'Intelligent automation',
        'Decision orchestration',
      ],
    },
    {
      title: 'AI & Machine Learning Engineering',
      href: '/services#ai-ml-engineering',
      bullets: ['LLM implementation', 'RAG pipelines', 'Custom ML models'],
    },
    {
      title: 'Data & Analytics',
      href: '/services#data-analytics',
      bullets: ['Data platforms', 'Advanced analytics', 'Business insights'],
    },
    {
      title: 'Cloud Strategy & Migration',
      href: '/services#cloud-strategy',
      bullets: [
        'Azure & AWS architecture',
        'Cloud modernization',
        'Cost & performance optimization',
      ],
    },
    {
      title: 'DevOps & Platform Engineering',
      href: '/services#devops-platform',
      bullets: [
        'CI/CD pipelines',
        'Infrastructure automation',
        'Reliability & scale',
      ],
    },
    {
      title: 'AI Program Consulting',
      href: '/services#ai-program-consulting',
      bullets: [
        'Vision & roadmap',
        'Architecture design',
        'Enterprise adoption',
      ],
    },
  ]

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8 lg:py-24">
        <div>
          <header className="max-w-2xl">
            <h2
              id="services-heading"
              className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
            >
              What We Do
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Advisory and hands-on engineering across AI, data, and cloud to
              help you move from pilots to production.
            </p>
          </header>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.title} to={service.href} className="block h-full">
                  <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white hover:to-[#F3F8FF] hover:shadow-lg">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(29,161,242,0.14),_transparent_55%)] opacity-0 transition group-hover:opacity-100" />
                    <div className="relative">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {service.title}
                      </h3>
                      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1E3A8A]" />
                      <ul className="mt-4 space-y-2 text-sm text-slate-600">
                        {service.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-soft" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                  </article>
                </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreviewSection
