import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Lightbulb,
    Database,
    Cpu,
    Layers,
    Rocket,
    ShieldCheck,
    ArrowRight,
    ChevronRight
} from 'lucide-react'

const steps = [
    {
        id: 1,
        title: 'AI Opportunity Discovery',
        icon: Lightbulb,
        description: 'We start by understanding your business and where AI can truly help.',
        details: 'Before building anything, we work with your team to understand your goals, challenges, and data. We identify practical AI use cases that can create real impact instead of running experiments with no direction.',
        outcome: 'Clear AI roadmap with defined business impact'
    },
    {
        id: 2,
        title: 'Data & Architecture Foundation',
        icon: Database,
        description: 'Strong foundations lead to successful AI systems.',
        details: 'We organize your data, clean what’s needed, and design a cloud setup that can grow with you. Security and compliance are built in from day one so you can scale confidently.',
        outcome: 'Reliable data setup and scalable cloud architecture'
    },
    {
        id: 3,
        title: 'Model Engineering & LLM Integration',
        icon: Cpu,
        description: 'Choosing the right models and making them work for you.',
        details: 'We select the right AI models for your use case and adapt them to your business needs. Whether it’s using LLMs, RAG systems, or custom workflows, we focus on accuracy, speed, and cost control.',
        outcome: 'Well-performing AI models ready for real use'
    },
    {
        id: 4,
        title: 'System & Product Development',
        icon: Layers,
        description: 'Turning AI into tools your teams can actually use.',
        details: 'We build complete applications around your AI systems so they fit naturally into your existing tools and processes. The goal is simple: make AI useful, not complicated.',
        outcome: 'Practical AI-powered applications integrated into your workflow'
    },
    {
        id: 5,
        title: 'Deployment & MLOps',
        icon: Rocket,
        description: 'Smooth launch and reliable performance.',
        details: 'We deploy your AI solutions in a structured way so updates, improvements, and scaling are easy. Everything is set up to run smoothly without constant manual effort.',
        outcome: 'Stable production systems with automated updates'
    },
    {
        id: 6,
        title: 'Governance, Monitoring & Optimization',
        icon: ShieldCheck,
        description: 'Keeping your AI safe, accurate, and improving over time.',
        details: 'After launch, we continuously monitor performance, accuracy, and usage. We set up guardrails to reduce risk and keep improving the system as your business evolves.',
        outcome: 'Long-term reliability, safety, and continuous improvement'
    }
]


function ExecutionFrameworkSection() {
    const [activeStep, setActiveStep] = useState(steps[0])

    return (
        <section className="relative py-24 sm:py-32 bg-slate-50 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50/50" />
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight text-[#0B1F33] sm:text-4xl"
                    >
                        Our AI Development Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-lg text-slate-600"
                    >
                        Engineered for Predictable, High-Quality Delivery
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Navigation */}
                    <div className="lg:col-span-5 flex flex-col gap-2">
                        {steps.map((step) => (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(step)}
                                className={`group relative flex items-center gap-4 rounded-xl p-4 text-left transition-all duration-300 ${activeStep.id === step.id
                                    ? 'bg-white shadow-lg shadow-blue-900/5 ring-1 ring-blue-100'
                                    : 'hover:bg-white/60 hover:shadow-sm'
                                    }`}
                            >
                                {/* Active Indicator Line */}
                                {activeStep.id === step.id && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-gradient-to-b from-blue-500 to-indigo-600"
                                    />
                                )}

                                <div
                                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${activeStep.id === step.id
                                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                                        : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                                        }`}
                                >
                                    <step.icon className="h-5 w-5" />
                                </div>

                                <div>
                                    <h3 className={`text-base font-semibold transition-colors duration-300 ${activeStep.id === step.id ? 'text-[#0B1F33]' : 'text-slate-600'
                                        }`}>
                                        {step.title}
                                    </h3>
                                </div>

                                <ChevronRight className={`ml-auto h-4 w-4 transition-all duration-300 ${activeStep.id === step.id ? 'text-blue-500 opacity-100' : 'text-slate-400 opacity-0 group-hover:opacity-50'
                                    }`} />
                            </button>
                        ))}
                    </div>

                    {/* Right Content Panel */}
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 md:p-10"
                            >
                                {/* Decorative Abstract Background in Card */}
                                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 blur-3xl opacity-80" />
                                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-emerald-50 to-teal-50 blur-3xl opacity-80" />

                                <div className="relative z-10">
                                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
                                        <span>Step 0{activeStep.id}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#0B1F33] mb-4">
                                        {activeStep.title}
                                    </h3>

                                    <p className="text-lg leading-relaxed text-slate-600 mb-8">
                                        {activeStep.details}
                                    </p>

                                    <div className="mb-8 rounded-xl bg-slate-50 border border-slate-100 p-5">
                                        <p className="text-sm font-semibold uppercase tracking-wide text-slate-400 mb-2">
                                            Key Outcome
                                        </p>
                                        <div className="flex items-center gap-3 text-[#0B1F33] font-medium">
                                            <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                                            {activeStep.outcome}
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href="#contact"
                                            className="group inline-flex items-center gap-2 rounded-lg bg-[#0B1F33] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/10 transition-all hover:bg-blue-900 hover:shadow-blue-900/20"
                                        >
                                            Start a Strategic Consultation
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>

                                {/* Subtle Abstract Element */}
                                <svg
                                    className="absolute right-0 bottom-0 h-48 w-48 text-slate-50 pointer-events-none opacity-50"
                                    viewBox="0 0 200 200"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M45.7,-70.5C58.9,-62.5,69.3,-49.6,75.9,-35.1C82.5,-20.6,85.4,-4.6,82.4,10.3C79.4,25.2,70.6,39.1,59.3,50.3C48,61.5,34.2,70.1,19.3,74.5C4.3,78.9,-11.7,79.1,-26.4,74.4C-41.1,69.7,-54.5,60.1,-64.5,47.7C-74.5,35.3,-81.1,20.1,-80.4,5.3C-79.7,-9.6,-71.7,-24.1,-61.2,-35.8C-50.7,-47.5,-37.7,-56.3,-24.5,-64.3C-11.3,-72.3,2.1,-79.4,15.6,-78.9C29.1,-78.4,42.7,-70.3,45.7,-70.5Z"
                                        transform="translate(100 100)"
                                    />
                                </svg>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExecutionFrameworkSection
