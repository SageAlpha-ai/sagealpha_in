import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const industries = [
    {
        title: 'SaaS & Software Platforms',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        id: 1
    },
    {
        title: 'Healthcare & HealthTech',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        id: 2
    },
    {
        title: 'Finance & Insurance',
        image: 'services/s3.jpg',
        id: 3
    },
    {
        title: 'Manufacturing & Operations',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        id: 4
    },
    {
        title: 'Retail & Digital Commerce',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        id: 5
    },
    {
        title: 'Telecom & Connectivity',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        id: 6
    }
]

function IndustriesSection() {
    return (
        <section className="relative py-10 sm:py-32 bg-slate-50 overflow-hidden">
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold tracking-tight text-[#0B1F33] sm:text-5xl"
                    >
                        Industries We Build AI For
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-xl text-blue-600 font-medium"
                    >
                        SageAlpha builds industry-grade systems across:
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {industries.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-64 overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Background Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-between">
                                <h3 className="text-xl font-bold text-white pr-4">
                                    {item.title}
                                </h3>

                                <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 ">
                                    <ArrowRight className="h-5 w-5" />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default IndustriesSection
