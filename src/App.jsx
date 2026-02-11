import { useEffect, useMemo, useRef, useState } from 'react'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Whitepapers', href: '#whitepapers' },
  { label: 'Careers', href: '#careers' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function useReveal({ rootMargin = '0px 0px -10% 0px', once = true } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        }
      },
      { root: null, threshold: 0.12, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, rootMargin])

  return { ref, isVisible }
}

function Reveal({ children, className = '', delayMs = 0 }) {
  const { ref, isVisible } = useReveal()
  const style = useMemo(
    () => ({ transitionDelay: delayMs ? `${delayMs}ms` : undefined }),
    [delayMs],
  )

  return (
    <div
      ref={ref}
      style={style}
      className={[
        'transition-all duration-700 ease-out will-change-transform',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all ${
        scrolled
          ? 'bg-white/90 backdrop-blur shadow-sm'
          : 'bg-transparent backdrop-blur-0'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <a href="#top" className="flex flex-col items-start gap-1">
          <img
            src="/logo/sagealpha-logo.png"
            alt="SageAlpha"
            className="h-8 w-auto md:h-9"
          />
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-brand-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:opacity-95 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
          >
            Talk to an Expert
          </a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#F0F7FF] to-[#E6F0FA]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,58,138,0.14),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(37,99,235,0.10),_transparent_55%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl space-y-6">
          <p className="text-sm font-semibold tracking-wide text-brand-accent">
            Enterprise AI, Data &amp; Cloud Consulting
          </p>
          <h1
            id="hero-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Building Enterprise-Ready AI, Data &amp; Cloud Solutions
          </h1>
          <p className="text-pretty text-base text-slate-600 sm:text-lg">
          Founder-led consulting and engineering services to assist 
          organizations in implementing, designing, and scaling AI 
          programs using LLMs, Agentic AI, analytics, and cloud platforms.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:opacity-95 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
            >
              Talk to an Expert
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-blue-600 bg-white/70 px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F0F7FF] hover:to-[#E0EEFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
            >
              Explore Our Services
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-10 gap-y-3 text-xs text-slate-500">
            <div>
              <p className="font-semibold text-slate-700">
                Enterprise-grade delivery
              </p>
              <p>Architecture, security, and governance by design</p>
            </div>
            <div>
              <p className="font-semibold text-slate-700">
                Strategy through execution
              </p>
              <p>From roadmap to production systems</p>
            </div>
          </div>
          </div>

          <div aria-hidden="true" className="relative">
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-blue-400 blur-3xl opacity-20" />
            <div className="relative rounded-3xl bg-panel-gradient p-[1px] shadow-soft-lg">
          <div className="relative h-full w-full rounded-[1.4rem] bg-slate-900/95 p-6 sm:p-8">
            <div className="absolute inset-0 rounded-[1.4rem] bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.24),transparent_55%),radial-gradient(circle_at_80%_0,rgba(59,130,246,0.32),transparent_60%)] opacity-80" />
            <div className="relative space-y-6 text-slate-100">
              <p className="text-sm font-semibold text-sky-200">
                Modern Enterprise Architecture
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs sm:text-[0.8rem]">
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-4 backdrop-blur">
                  <p className="text-[0.7rem] font-medium uppercase tracking-wide text-slate-400">
                    AI Layer
                  </p>
                  <p className="mt-1 font-semibold text-slate-50">
                    LLMs &amp; Agentic Systems
                  </p>
                  <p className="mt-2 text-slate-400">
                    Orchestrated agents, RAG, and copilots aligned to processes.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-4 backdrop-blur">
                  <p className="text-[0.7rem] font-medium uppercase tracking-wide text-slate-400">
                    Data Fabric
                  </p>
                  <p className="mt-1 font-semibold text-slate-50">
                    Trusted Analytics Foundation
                  </p>
                  <p className="mt-2 text-slate-400">
                    Governed, discoverable, and analytics-ready data platforms.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-4 backdrop-blur">
                  <p className="text-[0.7rem] font-medium uppercase tracking-wide text-slate-400">
                    Cloud Platform
                  </p>
                  <p className="mt-1 font-semibold text-slate-50">
                    Azure &amp; AWS Native
                  </p>
                  <p className="mt-2 text-slate-400">
                    Secure, compliant, and cost-aware landing zones.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-4 backdrop-blur">
                  <p className="text-[0.7rem] font-medium uppercase tracking-wide text-slate-400">
                    Operating Model
                  </p>
                  <p className="mt-1 font-semibold text-slate-50">
                    Programs that Scale
                  </p>
                  <p className="mt-2 text-slate-400">
                    Ways of working that connect strategy, delivery, and change.
                  </p>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FounderStrip() {
  return (
    <section
      id="about"
      className="relative border-t border-slate-200 bg-gradient-to-b from-[#F8FAFC] to-[#EEF6FF] shadow-[inset_0_1px_0_rgba(15,23,42,0.06)]"
      aria-labelledby="founder-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-center">
            <div className="space-y-5">
              <h2
                id="founder-heading"
                className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
              >
                 25+ Years of Experience. One Clear Vision.
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
             
              SageAlpha is founded by a technology leader with over 25 years 
              of hands-on experience in the fields of data, analytics, cloud,
               and artificial intelligence. Therefore, our mission is to 
               assist businesses in moving beyond the mere experimentation 
               of AI to creating value.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white/60 p-5 shadow-sm backdrop-blur">
              <dl className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
                <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-4 shadow-sm">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                    Experience
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-900">
                    25+ Years
                  </dd>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-4 shadow-sm">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                    Focus
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-900">
                    Enterprise AI &amp; Analytics
                  </dd>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-4 shadow-sm">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                    Cloud
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-900">
                    Azure &amp; AWS Expertise
                  </dd>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-4 shadow-sm">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                    Model
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-900">
                    Consulting to Scale
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ProblemSolutionOutcome() {
  const items = [
    {
      title: 'The Challenge',
      description:
        'Many organizations invest in AI but fail due to lack of strategy, disjointed data, and computing systems that do not scale.',
    },
    {
      title: 'The SageAlpha Approach',
      description:
        'A consulting-centric, execution-driven model that aligns AI initiatives with enterprise objectives and robust architecture.',
    },
    {
      title: 'The Outcome',
      description:
        'Enterprise-ready AI programs that are secure, scalable, and provide measureable impact.',
    },
  ]

  return (
    <section
      aria-labelledby="problem-solution-heading"
      className="bg-gradient-to-b from-[#F9FBFF] to-[#F1F7FF]"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <header className="max-w-2xl">
            <h2
              id="problem-solution-heading"
              className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
            >
              From Problem to Outcomes
            </h2>
            
          </header>

          <div className="relative mt-10">
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 md:block">
              <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            </div>

            <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
              {items.map((item, index) => {
                const isMiddle = index === 1
                return (
                  <Reveal key={item.title} delayMs={index * 90}>
                    <article
                      className={[
                        'relative h-full rounded-2xl border p-6 shadow-sm transition',
                        'hover:-translate-y-1 hover:shadow-lg',
                        isMiddle
                          ? 'border-blue-200 bg-gradient-to-br from-white to-[#F0F7FF] ring-1 ring-blue-100 shadow-[0_18px_45px_rgba(30,58,138,0.10)]'
                          : 'border-slate-200 bg-white/80',
                      ].join(' ')}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p
                          className={[
                            'text-xs font-semibold uppercase tracking-wide',
                            isMiddle ? 'text-brand-accent' : 'text-slate-600',
                          ].join(' ')}
                        >
                          {item.title}
                        </p>
                        <span
                          aria-hidden="true"
                          className="hidden h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-xs font-semibold text-slate-500 md:flex"
                        >
                          {index + 1}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
                        {item.description}
                      </p>

                      {index < items.length - 1 && (
                        <div
                          aria-hidden="true"
                          className="absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block"
                        >
                          <div className="flex items-center">
                            <div className="h-px w-6 bg-gradient-to-r from-slate-300 via-brand-accent/70 to-slate-300" />
                            <div className="ml-1 h-1.5 w-1.5 rotate-45 border-r border-t border-brand-accent/80" />
                          </div>
                        </div>
                      )}
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    {
      title: 'Agentic AI Solutions',
      bullets: [
        'Multi-agent systems',
        'Intelligent automation',
        'Decision orchestration',
      ],
    },
    {
      title: 'AI & Machine Learning Engineering',
      bullets: ['LLM implementation', 'RAG pipelines', 'Custom ML models'],
    },
    {
      title: 'Data & Analytics',
      bullets: ['Data platforms', 'Advanced analytics', 'Business insights'],
    },
    {
      title: 'Cloud Strategy & Migration',
      bullets: [
        'Azure & AWS architecture',
        'Cloud modernization',
        'Cost & performance optimization',
      ],
    },
    {
      title: 'DevOps & Platform Engineering',
      bullets: [
        'CI/CD pipelines',
        'Infrastructure automation',
        'Reliability & scale',
      ],
    },
    {
      title: 'AI Program Consulting',
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
        <Reveal>
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
            {services.map((service, idx) => (
              <Reveal key={service.title} delayMs={idx * 80}>
                <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white hover:to-[#F3F8FF] hover:shadow-lg">
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
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function TechnologySection() {
  return (
    <section
      aria-labelledby="technology-heading"
      className="border-y border-slate-200 bg-gradient-to-b from-[#F8FAFC] to-[#EEF6FF]"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,3fr)] md:items-center">
          <div>
            <h2
              id="technology-heading"
              className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
            >
              Built on Trusted Enterprise Platforms
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              We work with leading cloud and technology ecosystems to deliver
              secure, scalable, and future-ready solutions.
            </p>
          </div>
          <div className="grid gap-4 text-sm sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Cloud
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                Microsoft Azure
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Data, analytics, and AI services on the Microsoft cloud.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Cloud
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                Amazon Web Services
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Secure, resilient architectures on AWS for analytics and AI.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Data &amp; AI
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                Modern AI &amp; Analytics Stacks
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Open and cloud-native tooling for data engineering and AI
                workloads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CaseStudies() {
  const cases = [
    {
      title: 'Enterprise Analytics Modernization',
      bullets: [
        'Scalable analytics foundation',
        'Faster insights and decision-making',
      ],
    },
    {
      title: 'AI-Driven Business Intelligence',
      bullets: ['AI-powered reporting', 'Improved operational efficiency'],
    },
    {
      title: 'Cloud Migration & Optimization',
      bullets: [
        'Cloud strategy and migration',
        'Improved performance and reduced cost',
      ],
    },
  ]

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <header className="max-w-2xl">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-10 w-1 rounded-full bg-gradient-to-b from-[#2563EB] to-[#1E3A8A]" />
              <div>
                <h2
                  id="case-studies-heading"
                  className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
                >
                  Real-World Impact
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Outcomes across industries where AI, data, and cloud are
                  tightly integrated into business operations.
                </p>
              </div>
            </div>
          </header>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {cases.map((item, idx) => (
              <Reveal key={item.title} delayMs={idx * 90}>
                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1E3A8A]" />
                  <h3 className="mt-4 text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-soft" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Whitepapers() {
  const papers = [
    {
      title: 'Enterprise AI Adoption: From Strategy to Scale',
      description:
        'A practical guide to building AI programs that deliver real business outcomes.',
    },
    {
      title:
        'Agentic AI & RAG: Designing Intelligent Systems for the Future',
      description:
        'How modern AI architectures are transforming enterprise decision-making and automation.',
    },
  ]

  return (
    <section
      id="whitepapers"
      aria-labelledby="whitepapers-heading"
      className="bg-gradient-to-b from-[#F8FAFC] to-[#EEF6FF]"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <header className="max-w-2xl">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-10 w-1 rounded-full bg-gradient-to-b from-[#2563EB] to-[#1E3A8A]" />
              <div>
                <h2
                  id="whitepapers-heading"
                  className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
                >
                  Insights from Experience
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Thoughtful, practitioner-led perspectives on building AI,
                  data, and cloud capabilities in complex organizations.
                </p>
              </div>
            </div>
          </header>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {papers.map((paper, idx) => (
              <Reveal key={paper.title} delayMs={idx * 90}>
                <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div>
                    <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1E3A8A]" />
                    <h3 className="mt-4 text-sm font-semibold text-slate-900">
                      {paper.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {paper.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <button className="inline-flex items-center rounded-full border border-blue-600 px-5 py-2 text-xs font-semibold text-blue-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F0F7FF] hover:to-[#E0EEFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50">
                      Download
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Careers() {
  return (
    <section
      id="careers"
      aria-labelledby="careers-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-18">
        <header className="max-w-2xl">
          <h2
            id="careers-heading"
            className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
          >
            Build the Future with SageAlpha
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Join a team that pairs deep engineering with practical consulting to
            solve important problems in AI, data, and cloud.
          </p>
        </header>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="text-sm font-semibold text-slate-900">Careers</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li>AI Engineer</li>
              <li>Machine Learning Engineer</li>
              <li>Data Scientist</li>
              <li>Cloud &amp; Analytics Roles</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="text-sm font-semibold text-slate-900">Internships</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              <li>MERN Stack Intern</li>
              <li>AI / ML Intern (Python, scikit-learn)</li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <button className="inline-flex items-center rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:opacity-95 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50">
            View Open Roles
          </button>
        </div>
      </div>
    </section>
  )
}

function Partnerships() {
  return (
    <section
      id="partnerships"
      aria-labelledby="partnerships-heading"
      className="bg-gradient-to-b from-[#F9FBFF] to-[#F1F7FF]"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8 lg:py-18">
        <header className="max-w-2xl">
          <h2
            id="partnerships-heading"
            className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
          >
            Working Together for Impact
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            We collaborate with technology providers, cloud platforms, and
            enterprise partners to deliver end-to-end AI and cloud solutions.
          </p>
        </header>
        <div className="mt-6">
          <button className="inline-flex items-center rounded-full border border-blue-600 bg-white px-6 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F0F7FF] hover:to-[#E0EEFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="border-t border-blue-900/40 bg-gradient-to-br from-[#0B1F33] via-[#102A43] to-[#0E2235]"
    >
      <div className="mx-auto max-w-6xl px-4 py-28 md:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="final-cta-heading"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Ready to Design Your AI &amp; Cloud Journey?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">
            Talk to experts who have built, scaled, and delivered enterprise
            systems before.
          </p>
          <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0B1F33] shadow-lg transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F33]"
          >
            Schedule a Conversation
          </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactAndFooter() {
  return (
    <footer
      id="contact"
      className="min-h-[320px] bg-gradient-to-b from-[#0B1F33] to-[#0A1725]"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto flex min-h-[320px] max-w-6xl flex-col px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 id="footer-heading" className="text-lg font-semibold text-white">
              SageAlpha
            </h2>
            <p className="max-w-md text-sm text-slate-300">
              Customized AI, Data &amp; Cloud Solutions
            </p>
            <p className="text-sm text-slate-300">
              Email:{' '}
              <a
                href="mailto:info@sagealpha.in"
                className="font-medium text-slate-200 transition hover:text-white"
              >
                info@sagealpha.in
              </a>
            </p>
          </div>

          <div className="md:text-right">
            <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-400 md:justify-end">
              <a href="#services" className="transition hover:text-white">
                Services
              </a>
              <a href="#case-studies" className="transition hover:text-white">
                Case Studies
              </a>
              <a href="#whitepapers" className="transition hover:text-white">
                Whitepapers
              </a>
              <a href="#careers" className="transition hover:text-white">
                Careers
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700/40 pt-6">
          <p className="text-xs text-slate-400">
            © SageAlpha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <FounderStrip />
        <ProblemSolutionOutcome />
        <Services />
        <TechnologySection />
        <CaseStudies />
        <Whitepapers />
        <Careers />
        <Partnerships />
        <FinalCTA />
      </main>
      <ContactAndFooter />
    </div>
  )
}

export default App
