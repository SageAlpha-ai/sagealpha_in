import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import {
  Brain, Network, ShieldCheck, Database, Cloud,
  TrendingUp, Lock, Cpu, Globe,
  BarChart2, Code2, HeadphonesIcon, ChevronRight,
  Zap, Layers, GitBranch, Eye,
} from 'lucide-react'

/* ─── reusable fade-up wrapper ─── */
function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── SECTION 1: HERO ─── */
function ParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const count = 70
    const dots = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.5,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy
        if (d.x < 0) d.x = canvas.width
        if (d.x > canvas.width) d.x = 0
        if (d.y < 0) d.y = canvas.height
        if (d.y > canvas.height) d.y = 0

        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(2,132,199,0.7)'
        ctx.fill()

        dots.forEach((d2) => {
          const dx = d.x - d2.x, dy = d.y - d2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(d.x, d.y)
            ctx.lineTo(d2.x, d2.y)
            ctx.strokeStyle = `rgba(2,132,199,${0.35 * (1 - dist / 120)})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      <ParticleCanvas />
      <div
        className="absolute inset-0 bg-gradient-radial from-blue-900/25 via-transparent to-transparent"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(219,234,254,0.8) 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[120px] bg-cyan-300/30 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] bg-blue-300/30 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center pt-28 pb-20">
        <FadeUp>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Enterprise AI Infrastructure
          </span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.12] tracking-tight text-slate-900 mb-6 max-w-6xl mx-auto">
            Architecting the Future of Enterprise AI
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              with Autonomous Agent Networks
            </span>
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          {/* <p className="mx-auto max-w-2xl text-lg text-slate-600 leading-relaxed mb-10">
            Design, deploy and orchestrate autonomous AI agents that reason, plan, and execute complex workflows — at enterprise scale.
          </p> */}
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#architecture"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:shadow-blue-300 hover:scale-105"
            >
              Explore Architecture
              <ChevronRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-8 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur-sm transition-all hover:border-cyan-500/60 hover:bg-slate-200"
            >
              Talk to an AI Architect
            </a>
          </div>
        </FadeUp>

        {/* floating metric pills */}
        {/* <div className="mt-20 flex flex-wrap justify-center gap-4">
          {[
            { label: 'Agent Tasks Automated', value: '10M+' },
            { label: 'Enterprise Deployments', value: '120+' },
            { label: 'Avg Latency', value: '118ms' },
            { label: 'Compliance Rate', value: '100%' },
          ].map((m, i) => (
            <FadeUp key={m.label} delay={0.4 + i * 0.07}>
              <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-6 py-3 text-center">
                <div className="text-2xl font-bold text-slate-900">{m.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{m.label}</div>
              </div>
            </FadeUp>
          ))}
        </div> */}
      </div>
    </section>
  );
}

/* ─── SECTION 2: WHAT IS AGENTIC AI ─── */
const agentCapabilities = [
  { icon: Brain, title: 'Plan & Reason', desc: 'Agents autonomously decompose high-level goals into structured sub-tasks with dependency awareness.' },
  { icon: Network, title: 'Coordinate Multi-Agent Networks', desc: 'Orchestrator agents dispatch specialist agents in parallel, managing context and state across the entire workflow.' },
  { icon: Zap, title: 'Execute Complex Workflows', desc: 'Agents call tools, APIs, and data systems, adapting execution paths in real-time based on intermediate results.' },
  { icon: ShieldCheck, title: 'Operate Securely in Enterprise', desc: 'Every agent action is policy-gated, audited, and sandboxed within enterprise compliance boundaries.' },
]

function AgentWorkflowIllustration() {
  const nodes = [
    { id: 'goal', label: 'Goal Input', x: '50%', y: '8%', color: 'from-cyan-500 to-blue-600' },
    { id: 'orch', label: 'Orchestrator', x: '50%', y: '30%', color: 'from-blue-500 to-indigo-600' },
    { id: 'a1', label: 'Agent A', x: '20%', y: '58%', color: 'from-violet-500 to-purple-600' },
    { id: 'a2', label: 'Agent B', x: '50%', y: '58%', color: 'from-violet-500 to-purple-600' },
    { id: 'a3', label: 'Agent C', x: '80%', y: '58%', color: 'from-violet-500 to-purple-600' },
    { id: 'out', label: 'Result', x: '50%', y: '84%', color: 'from-emerald-500 to-teal-600' },
  ]
  return (
    <div className="relative w-full h-80 select-none">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 280" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* goal → orch */}
        <line x1="150" y1="34" x2="150" y2="72" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 3" />
        {/* orch → agents */}
        <line x1="150" y1="92" x2="60" y2="148" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="150" y1="92" x2="150" y2="148" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="150" y1="92" x2="240" y2="148" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 3" />
        {/* agents → result */}
        <line x1="60" y1="168" x2="150" y2="218" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="150" y1="168" x2="150" y2="218" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="240" y1="168" x2="150" y2="218" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 3" />
      </svg>
      {nodes.map((n) => (
        <div
          key={n.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
          style={{ left: n.x, top: n.y }}
        >
          <div className={`rounded-xl bg-gradient-to-br ${n.color} p-px shadow-lg shadow-blue-100`}>
            <div className="rounded-xl bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 whitespace-nowrap">
              {n.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function WhatIsAgenticAI() {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeUp>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#0891b2', letterSpacing: '0.04em', marginBottom: 14 }}>
              Automation : Technology
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: 20 }}>
              What is agentic AI?
            </h2>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#1e293b', lineHeight: 1.7, marginBottom: 16 }}>
              Agentic AI is a form of artificial intelligence (AI) that can make decisions, take autonomous actions, and continually learn from interactions.
            </p>
            <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.75 }}>
              Agentic AI operates through autonomous{' '}
              <span style={{ color: '#2563eb', fontWeight: 600 }}>AI agents</span>{' '}
              designed to perform tasks by interpreting context, making decisions, and executing actions aligned with preset objectives. By bridging the gap between static programming and dynamic adaptability, agentic AI enables the automation of complex workflows at scale.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="rounded-2xl border border-slate-200 bg-white backdrop-blur p-8 shadow-sm">
              <p className="text-xs font-semibold tracking-widest uppercase mb-6">Live Agent Network</p>
              <AgentWorkflowIllustration />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 3: ARCHITECTURE ─── */
function OrchestrationDiagram() {
  const agents = [
    { label: 'Goal Decomposition Agent', bg: '#ffffff', border: '#e2e8f0', color: '#0f172a' },
    { label: 'Coordination Agent', bg: '#ffffff', border: '#e2e8f0', color: '#0f172a' },
    { label: 'Task Dispatcher', bg: '#ffffff', border: '#e2e8f0', color: '#0f172a' },
  ]
  return (
    <div style={{ marginTop: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 14 }}>👤</div>
        <div style={{ flex: 1, borderRadius: 8, border: '1px dashed #cbd5e1', background: '#f8fafc', padding: '7px 12px', fontSize: 11, color: '#64748b' }}>
          What's the optimal multi-step plan for this goal?
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '4px 0 4px 41px' }}>
        <div style={{ width: 1, height: 14, background: '#94a3b8' }} />
        <svg width="10" height="6" viewBox="0 0 10 6"><path d="M5 6L0 0H10Z" fill="#94a3b8" /></svg>
      </div>
      <div style={{ marginLeft: 41, borderRadius: 10, border: '1px solid #e2e8f0', background: '#ffffff', padding: '10px 16px', marginBottom: 4 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#0f172a', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Orchestration Layer</div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ borderRadius: 6, background: '#ffffff', border: '1px solid #e2e8f0', padding: '3px 8px', fontSize: 10, color: '#0f172a', fontWeight: 600 }}>Guided</span>
          <div style={{ flex: 1, height: 4, background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)', borderRadius: 2 }} />
          <span style={{ borderRadius: 6, background: '#ffffff', border: '1px solid #e2e8f0', padding: '3px 8px', fontSize: 10, color: '#0f172a', fontWeight: 600 }}>Autonomous</span>
        </div>
      </div>
      <div style={{ marginLeft: 41, display: 'flex', justifyContent: 'space-around', padding: '0 8px' }}>
        {agents.map((_, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 1, height: 12, background: '#94a3b8' }} />
            <svg width="8" height="5" viewBox="0 0 8 5"><path d="M4 5L0 0H8Z" fill="#94a3b8" /></svg>
          </div>
        ))}
      </div>
      <div style={{ marginLeft: 41, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 4 }}>
        {agents.map(a => (
          <div key={a.label} style={{ borderRadius: 8, border: `1px solid ${a.border}`, background: a.bg, padding: '8px 10px', textAlign: 'center' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: a.color, lineHeight: 1.4 }}>{a.label}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '4px 41px' }}>
        <div style={{ width: 1, height: 12, background: '#94a3b8' }} />
        <svg width="10" height="6" viewBox="0 0 10 6"><path d="M5 6L0 0H10Z" fill="#94a3b8" /></svg>
      </div>
      <div style={{ marginLeft: 41, borderRadius: 10, border: '1px solid #e2e8f0', background: '#f8fafc', padding: '10px 16px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#475569', marginBottom: 6 }}>Enterprise Systems</div>
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap' }}>
          {['Data APIs', 'Cloud Services', 'Knowledge Base', 'Audit Logs'].map(s => (
            <span key={s} style={{ borderRadius: 6, border: '1px solid #e2e8f0', background: '#fff', padding: '2px 8px', fontSize: 9, color: '#64748b', fontWeight: 500 }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function PlatformStackDiagram() {
  const layers = [
    { label: 'Intelligence Modules', icon: Brain, color: '#0f172a', bg: '#ffffff', border: '#e2e8f0', sub: 'Reasoning · Predictive Analytics · NLU' },
    { label: 'Secure Execution Layer', icon: ShieldCheck, color: '#0f172a', bg: '#ffffff', border: '#e2e8f0', sub: 'Policy · Access Control · Audit Logging' },
    { label: 'Data Fabric', icon: Database, color: '#0f172a', bg: '#ffffff', border: '#e2e8f0', sub: 'Lakehouse · Vector DB · Knowledge Graph' },
    { label: 'Cloud Infrastructure', icon: Cloud, color: '#0f172a', bg: '#ffffff', border: '#e2e8f0', sub: 'AWS · Azure · GCP · Kubernetes' },
  ]
  return (
    <div style={{ marginTop: 28 }}>
      <div style={{ textAlign: 'center', marginBottom: 4 }}>
        <div style={{ display: 'inline-block', borderRadius: 8, border: '1px solid #e2e8f0', background: '#ffffff', padding: '8px 20px', fontSize: 12, fontWeight: 700, color: '#0f172a' }}>
          Orchestration Layer
        </div>
      </div>
      {layers.map((l, i) => (
        <div key={l.label}>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', margin: '4px 0' }}>
            <div style={{ width: 1, height: 12, background: '#cbd5e1' }} />
            <svg width="10" height="6" viewBox="0 0 10 6"><path d="M5 6L0 0H10Z" fill="#94a3b8" /></svg>
          </div>
          <div style={{ borderRadius: 10, border: `1.5px solid ${l.border}`, background: l.bg, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: '#fff', border: `1px solid ${l.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <l.icon size={15} color={l.color} />
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#0f172a' }}>{l.label}</div>
              <div style={{ fontSize: 10, color: '#64748b', marginTop: 2 }}>{l.sub}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function Architecture() {
  return (
    <section id="architecture" style={{ padding: '80px 0', background: '#f8fafc', width: '100%' }}>
      <div style={{ width: '100%', padding: '0 40px', boxSizing: 'border-box' }}>
        <FadeUp>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#0891b2', letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 10 }}>System Architecture</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: 40 }}>Layered Intelligence Architecture</h2>
        </FadeUp>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <FadeUp delay={0.08}>
            <div style={{ borderRadius: 18, border: '1px solid #e2e8f0', background: '#ffffff', padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', height: '100%', boxSizing: 'border-box' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>Multi-Agent Orchestration</h3>
              <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7 }}>
                Orchestrate multiple AI agents to collaborate with each other. From simple activities with a single AI agent, through complex workflows with multiple specialized AI agents, while maintaining control and compliance.              </p>
              <OrchestrationDiagram />
            </div>
          </FadeUp>
          <FadeUp delay={0.16}>
            <div style={{ borderRadius: 18, border: '1px solid #e2e8f0', background: '#ffffff', padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', height: '100%', boxSizing: 'border-box' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>Secure Intelligence Platform</h3>
              <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7 }}>
                A full-stack enterprise AI platform combining intelligence, security, and data capabilities, ensuring performance at scale with complete auditability, policy enforcement, and enterprise reliability. to get it from them              </p>
              <PlatformStackDiagram />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 4: CONFIDENCE DASHBOARD ─── */
function AnimatedNumber({ target, suffix = '', decimals = 0 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => setVal(decimals ? v.toFixed(decimals) : Math.round(v)),
    })
    return controls.stop
  }, [inView, target, decimals])
  return <span ref={ref}>{val}{suffix}</span>
}

function GaugeArc({ value, max = 100, color }) {
  const pct = value / max
  const r = 36, cx = 44, cy = 44
  const arc = Math.PI * r * pct
  const total = Math.PI * r
  return (
    <svg viewBox="0 0 88 56" className="w-24 h-16">
      <path d={`M8,44 A36,36 0 0,1 80,44`} fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="7" strokeLinecap="round" />
      <motion.path
        d={`M8,44 A36,36 0 0,1 80,44`}
        fill="none"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${arc} ${total}`}
        initial={{ strokeDasharray: `0 ${total}` }}
        animate={{ strokeDasharray: `${arc} ${total}` }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
      />
    </svg>
  )
}

function MiniSparkline({ color }) {
  const pts = [8, 14, 11, 16, 13, 18, 15, 19, 17, 20]
  const max = Math.max(...pts), min = Math.min(...pts)
  const coords = pts.map((p, i) => `${(i / (pts.length - 1)) * 88},${28 - ((p - min) / (max - min)) * 24}`)
  return (
    <svg viewBox="0 0 88 32" className="w-20 h-8">
      <polyline points={coords.join(' ')} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const dashMetrics = [
  {
    label: 'Confidence Score',
    value: 94, suffix: '%', decimals: 0,
    type: 'gauge', color: '#22d3ee',
    sub: 'High confidence',
  },
  {
    label: 'Policy Compliance',
    value: 100, suffix: '%', decimals: 0,
    type: 'badge', badge: 'PASS', badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-500/30',
    color: '#10b981',
  },
  {
    label: 'Execution Latency',
    value: 118, suffix: 'ms', decimals: 0,
    type: 'sparkline', subLabel: 'avg', color: '#818cf8',
  },
  {
    label: 'Validation Rate',
    value: 99.1, suffix: '%', decimals: 1,
    type: 'bar', color: '#f472b6',
  },
]

function DashboardCard({ m }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur p-5 flex flex-col gap-3">
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{m.label}</span>
      <div className="flex items-end justify-between gap-3">
        <span className="text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
          <AnimatedNumber target={m.value} suffix={m.suffix} decimals={m.decimals} />
          {m.subLabel && <span className="text-xs font-normal text-slate-500 ml-1">{m.subLabel}</span>}
        </span>
        {m.type === 'gauge' && <GaugeArc value={m.value} color={m.color} />}
        {m.type === 'badge' && (
          <span className={`rounded-full border px-3 py-1 text-xs font-bold ${m.badgeColor}`}>
            {m.badge}
          </span>
        )}
        {m.type === 'sparkline' && <MiniSparkline color={m.color} />}
        {m.type === 'bar' && (
          <div className="flex-1 max-w-24 h-1.5 rounded-full bg-slate-200 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: m.color }}
              initial={{ width: 0 }}
              animate={inView ? { width: `${m.value}%` } : {}}
              transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
            />
          </div>
        )}
      </div>
      {m.sub && <p className="text-xs text-slate-500">{m.sub}</p>}
    </div>
  )
}

function ConfidenceDashboard() {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="mb-12">
          <p className="text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-3">System Performance</p>
          <h2 className="text-4xl font-bold text-slate-900">AI Operations Dashboard</h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {dashMetrics.map((m, i) => (
            <FadeUp key={m.label} delay={i * 0.1}>
              <DashboardCard m={m} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 5: INDUSTRY SOLUTIONS ─── */
const industrySolutions = [
  {
    image: '/agentic-ai-industires/finance.jpg', label: 'Finance',
    desc: 'Fraud detection and risk scoring automation.',
  },
  {
    image: '/agentic-ai-industires/cybersecurity.jpg', label: 'Cybersecurity',
    desc: 'Real-time threat intelligence and response.',
  },
  {
    image: '/agentic-ai-industires/customer-service.avif', label: 'Customer Service',
    desc: 'Conversational agents resolving complex queries.',
  },
  {
    image: '/agentic-ai-industires/software.jpg', label: 'Software Engineering',
    desc: 'Automated code generation and PR reviews.',
  },
]

function IndustrySolutionCard({ sol, i }) {
  const [hovered, setHovered] = useState(false)
  return (
    <FadeUp delay={i * 0.1}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative h-full rounded-2xl border border-slate-200 bg-white overflow-hidden cursor-pointer transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col"
      >
        <div className="relative h-48 w-full overflow-hidden bg-slate-100 shrink-0">
          <img
            src={sol.image}
            alt={sol.label}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-1 bg-white">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">{sol.label}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{sol.desc}</p>
        </div>
      </div>
    </FadeUp>
  )
}

function IndustrySolutions() {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="mb-14">
          <p className="text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-3">Domain Solutions</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Built for your industry</h2>
          {/* <p className="text-slate-600 max-w-xl text-sm">Pre-trained domain agents accelerate deployment with industry-specific knowledge baked in.</p> */}
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {industrySolutions.map((sol, i) => <IndustrySolutionCard key={sol.label} sol={sol} i={i} />)}
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 6: WHY SAGEALPHA ─── */
const advantages = [
  { icon: Network, title: 'Multi-Agent Orchestration', desc: 'Coordinate fleets of specialist agents with a hierarchical orchestration engine that handles dependencies, retries, and context propagation.', color: 'text-cyan-400' },
  { icon: Lock, title: 'Enterprise Security', desc: 'Every action passes through policy enforcement, RBAC, and audit logging. SOC 2 Type II ready with full explainability trails.', color: 'text-violet-400' },
  { icon: Layers, title: 'Scalable Architecture', desc: 'Kubernetes-native agent runtime scales from a single workflow to millions of concurrent agent tasks without re-architecting.', color: 'text-blue-400' },
  { icon: Cpu, title: 'Real-Time Reasoning', desc: 'Sub-200ms decision latency powered by optimized inference pipelines and intelligent caching across distributed compute nodes.', color: 'text-emerald-400' },
  { icon: Eye, title: 'Domain-Specific Agents', desc: 'Finance, cybersecurity, customer service, and engineering agents arrive pre-tuned with domain knowledge, cutting deployment time by 60%.', color: 'text-orange-400' },
  { icon: Globe, title: 'Global Cloud Coverage', desc: 'Deploy on AWS, Azure, or GCP with a unified control plane. Multi-region failover and data residency controls are built-in.', color: 'text-pink-400' },
]

function WhySageAlpha() {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="text-left mb-16">
          <p className="text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-3">Why SageAlpha</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">The infrastructure advantage</h2>
          {/* <p className="text-slate-600 max-w-xl mx-auto text-sm">Built by infrastructure engineers who have shipped AI systems at scale for Fortune 500 companies.</p> */}
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {advantages.map((a, i) => (
            <FadeUp key={a.title} delay={i * 0.07}>
              <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-slate-300 hover:bg-white/90 hover:-translate-y-0.5 h-full">
                <a.icon size={24} className={`${a.color} mb-5 transition-transform duration-200 group-hover:scale-110`} />
                <h3 className="text-base font-bold text-slate-900 mb-2">{a.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{a.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 7: CTA ─── */
function EnterprriseCTA() {
  return (
    <section
      id="contact"
      className="py-28 bg-slate-50 relative overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(219,234,254,0.6) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeUp>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-8">
            Enterprise Ready
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
            Deploy Agentic AI Systems
            <br />
            for Your Enterprise
          </h2>
          {/* <p className="text-slate-600 text-base mb-10 max-w-xl mx-auto">
            Start with a discovery session. Our architects will design a multi-agent architecture tailored to your organization's goals and constraints.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:shadow-blue-300 hover:scale-105"
            >
              Launch Demo
              <ChevronRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="mailto:hello@sagealpha.in"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-8 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur-sm transition-all hover:border-cyan-500/60 hover:bg-slate-200"
            >
              Talk to an AI Architect
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── PAGE ASSEMBLY ─── */
export default function AgenticAI() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = "Agentic AI Solutions — SageAlpha";
  }, []);

  return (
    <div className="bg-slate-50 text-slate-700">
      <Hero />
      <WhatIsAgenticAI />
      <Architecture />
      <ConfidenceDashboard />
      <IndustrySolutions />
      <WhySageAlpha />
      <EnterprriseCTA />
    </div>
  );
}

