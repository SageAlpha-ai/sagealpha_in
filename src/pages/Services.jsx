function AbstractPanel({ variant = 'blue' }) {
  const base =
    'relative h-64 w-full overflow-hidden rounded-3xl bg-slate-900/95 p-6 shadow-xl'
  const gradient =
    variant === 'blue'
      ? 'bg-[radial-gradient(circle_at_10%_0,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_90%_80%,rgba(37,99,235,0.4),transparent_60%)]'
      : 'bg-[radial-gradient(circle_at_0_20%,rgba(14,165,233,0.35),transparent_55%),radial-gradient(circle_at_100%_80%,rgba(34,197,94,0.35),transparent_60%)]'

  return (
    <div className={`${base} ${gradient}`}>
      <div className="relative h-full w-full rounded-2xl border border-slate-700/60 bg-slate-900/40 p-4 backdrop-blur">
        <div className="grid h-full grid-cols-3 gap-3 text-[0.7rem] text-slate-200">
          <div className="space-y-3">
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/70 p-3">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-sky-300">
                AI Layer
              </p>
              <p className="mt-1 text-xs text-slate-200">
                Agents, LLMs, and workflows orchestrated across domains.
              </p>
            </div>
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/70 p-3">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-indigo-300">
                Data Fabric
              </p>
              <p className="mt-1 text-xs text-slate-200">
                Governed data serving analytics and AI products.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-20 rounded-xl border border-slate-700/80 bg-gradient-to-br from-sky-500/40 via-indigo-500/40 to-emerald-400/40 p-3">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate-900">
                Signals
              </p>
              <p className="mt-1 text-xs text-slate-900/90">
                Events and telemetry flowing through the platform.
              </p>
            </div>
            <div className="flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-600/70">
              <div className="h-14 w-14 rounded-full border border-sky-400/70 bg-slate-900/40" />
              <div className="mx-2 h-px flex-1 bg-gradient-to-r from-sky-400/60 via-indigo-300/60 to-emerald-300/60" />
              <div className="h-14 w-14 rounded-full border border-emerald-300/70 bg-slate-900/40" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/70 p-3">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate-300">
                Cloud Platform
              </p>
              <p className="mt-1 text-xs text-slate-200">
                Azure and AWS foundations, security, and landing zones.
              </p>
            </div>
            <div className="flex h-20 items-center justify-between rounded-xl border border-slate-700/80 bg-slate-900/70 px-4">
              <div className="space-y-1">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate-300">
                  Reliability
                </p>
                <p className="text-xs text-slate-300">SLOs, tracing, and runbooks.</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-sky-400 to-emerald-400 opacity-75" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ServiceSection({
  id,
  heading,
  label,
  description,
  paragraphs,
  bullets,
  reverse = false,
  panelVariant = 'blue',
}) {
  return (
    <section
      id={id}
      className={`bg-gradient-to-b ${
        reverse ? 'from-[#F9FBFF] to-[#EEF4FF]' : 'from-white to-[#F5F9FF]'
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-24 md:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div
          className={`flex-1 ${
            reverse ? 'lg:order-2' : 'lg:order-1'
          } space-y-4`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            {label}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-[#0B1F33] md:text-3xl">
            {heading}
          </h2>
          <p className="text-sm font-medium text-slate-700 sm:text-base">
            {description}
          </p>
          {paragraphs.map((p) => (
            <p
              key={p.slice(0, 24)}
              className="text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]"
            >
              {p}
            </p>
          ))}
          <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`flex-1 ${
            reverse ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <AbstractPanel variant={panelVariant} />
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F8FAFC] via-[#EFF5FF] to-[#E4F1FF]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-24 md:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <div className="max-w-xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Services
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-[#0B1F33] md:text-4xl lg:text-5xl">
              Our Services
            </h1>
            <p className="text-base text-slate-700 sm:text-lg">
              We help organizations design, build, and scale AI, data, and cloud
              systems that create measurable business impact.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
              At SageAlpha, we combine strategy, architecture, and engineering to
              move enterprises from experimentation to production-ready systems.
              Every engagement is grounded in clear outcomes, proven patterns, and
              pragmatic delivery.
            </p>
          </div>
          <div className="flex-1">
            <AbstractPanel />
          </div>
        </div>
      </section>

      {/* Agentic AI Solutions */}
      <ServiceSection
        id="agentic-ai"
        heading="Agentic AI Solutions"
        label="Service 01"
        description="Intelligent systems that think, adapt, and execute."
        paragraphs={[
          'Agentic AI moves beyond single prompts and static workflows. We design multi-agent systems where specialized agents collaborate, negotiate, and hand off work to deliver outcomes reliably.',
          'Our teams architect these systems so that orchestration, data access, and guardrails are explicit. This ensures that agents behave predictably, can be audited, and integrate cleanly with existing platforms.',
          'We focus on enterprise realities: security, observability, approval flows, and clear hand-offs between humans and AI. The result is automation that you can actually trust in production.',
        ]}
        bullets={[
          'Multi-agent architectures',
          'Intelligent process automation',
          'RAG-integrated agents',
          'Decision orchestration systems',
          'Secure enterprise deployment',
        ]}
        panelVariant="blue"
      />

      {/* AI & Machine Learning Engineering */}
      <ServiceSection
        id="ai-ml-engineering"
        heading="AI & Machine Learning Engineering"
        label="Service 02"
        description="From models to production-ready intelligence."
        paragraphs={[
          'We help you choose the right blend of foundation models, classical ML, and analytics for each use case instead of defaulting to a single technology.',
          'Our engineers design and implement RAG architectures, fine-tune models when there is clear benefit, and build serving layers that can scale while remaining cost aware.',
          'Operational excellence is built in from day one with MLOps practices, monitoring, and feedback loops that keep models aligned with business reality.',
        ]}
        bullets={[
          'LLM implementation',
          'RAG architecture',
          'Custom ML model development',
          'MLOps & monitoring',
          'Production deployment',
        ]}
        reverse
        panelVariant="teal"
      />

      {/* Data & Analytics */}
      <ServiceSection
        id="data-analytics"
        heading="Data & Analytics"
        label="Service 03"
        description="Strong data foundations that power intelligent decisions."
        paragraphs={[
          'We design modern data platforms that make it easier for teams to discover, trust, and use data. This includes ingestion, modeling, cataloging, and access patterns aligned to your operating model.',
          'Governance is treated as an enabler, not a blocker. We help you strike the right balance between control and autonomy so data products can be created safely and quickly.',
          'Analytics experiences are tailored to decision-makers, whether through BI dashboards, semantic layers, or AI-assisted exploration.',
        ]}
        bullets={[
          'Modern data architecture',
          'Analytics platforms',
          'BI dashboards',
          'Data governance frameworks',
          'Insight acceleration',
        ]}
        panelVariant="blue"
      />

      {/* Cloud Strategy & Migration */}
      <ServiceSection
        id="cloud-strategy"
        heading="Cloud Strategy & Migration"
        label="Service 04"
        description="Secure, scalable, and cost-efficient cloud foundations."
        paragraphs={[
          'We work with you to define a clear cloud strategy that aligns with your regulatory landscape, risk appetite, and growth plans.',
          'Our teams design Azure and AWS landing zones, migration waves, and modernization journeys that minimize disruption while improving resilience.',
          'Cost and performance are treated as first-class design concerns, with guardrails and observability built into the platform.',
        ]}
        bullets={[
          'Azure & AWS landing zones',
          'Cloud migration strategy',
          'Infrastructure modernization',
          'Cost & performance optimization',
          'Secure architecture design',
        ]}
        reverse
        panelVariant="teal"
      />

      {/* DevOps & Platform Engineering */}
      <ServiceSection
        id="devops-platform"
        heading="DevOps & Platform Engineering"
        label="Service 05"
        description="Engineering systems that scale with confidence."
        paragraphs={[
          'We build platform capabilities that make shipping reliable software routine rather than exceptional.',
          'Our work spans CI/CD pipelines, infrastructure as code, and golden paths for teams so that security and reliability are baked in.',
          'We also help you define SLOs, incident practices, and observability standards that match the criticality of your services.',
        ]}
        bullets={[
          'CI/CD implementation',
          'Infrastructure automation',
          'Observability & monitoring',
          'Reliability engineering',
          'Platform scalability',
        ]}
        panelVariant="blue"
      />

      {/* AI Program Consulting */}
      <ServiceSection
        id="ai-program-consulting"
        heading="AI Program Consulting"
        label="Service 06"
        description="Strategy, governance, and execution alignment."
        paragraphs={[
          'AI programs succeed when strategy, architecture, and delivery move together. We help you define a clear direction that is grounded in real use cases and measurable outcomes.',
          'Our consultants work with technology and business leaders to shape roadmaps, operating models, and governance that enable responsible adoption at scale.',
          'We stay involved through execution, ensuring that decisions made in slide decks translate into systems that work in production.',
        ]}
        bullets={[
          'AI strategy & roadmap',
          'Enterprise architecture design',
          'Governance frameworks',
          'Risk & compliance advisory',
          'Adoption & scaling support',
        ]}
        reverse
        panelVariant="teal"
      />

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#0B1F33] via-[#102A43] to-[#0A1725]">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center text-slate-50 md:px-6 lg:px-8 lg:py-24">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to Build with Confidence?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Let&apos;s design and scale your AI, data, and cloud initiatives the
            right way. We bring together strategy, architecture, and delivery so
            that programs move from slideware to working systems.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-white px-7 py-2.5 text-sm font-semibold text-[#0B1F33] shadow-lg transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F33]"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
