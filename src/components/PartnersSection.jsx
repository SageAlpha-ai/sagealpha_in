import { motion } from 'framer-motion'

const partners = [
  { name: 'Microsoft', src: '/partners/microsoft.svg', h: 'h-10' },
  { name: 'Google Cloud', src: '/partners/google_cloud.svg', h: 'h-7' },
  { name: 'AWS', src: '/partners/aws.svg', h: 'h-10' },
  { name: 'Databricks', src: '/partners/databricks.svg', h: 'h-8' },
  { name: 'Salesforce', src: '/partners/salesforce.svg', h: 'h-10' },
]

function PartnersSection() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-blue-100/40 bg-gradient-to-b from-transparent to-blue-50/30 overflow-hidden">
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .logo-scroll {
          display: flex;
          width: max-content;
          animation: scroll 60s linear infinite;
        }
        .logo-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-medium text-blue-600 mb-4 uppercase tracking-widest text-xs"
          >
            TECHNOLOGY PARTNERS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-[#0B1F33] sm:text-4xl"
          >
            Powering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Next Generation</span>
          </motion.h2>
        </div>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#F7FBFF] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#F7FBFF] to-transparent pointer-events-none" />

        {/* Marquee Container */}
        <div className="logo-scroll">
          {/* First Group */}
          <div className="flex items-center gap-16 px-8">
            {partners.map((partner) => (
              <div
                key={`${partner.name}-1`}
                className="cursor-pointer"
              >
                <img
                  className={`${partner.h} w-auto object-contain`}
                  src={partner.src}
                  alt={partner.name}
                  width={158}
                  height={48}
                />
              </div>
            ))}
          </div>

          {/* Second Group (Duplicate for loop) */}
          <div className="flex items-center gap-16 px-8">
            {partners.map((partner) => (
              <div
                key={`${partner.name}-2`}
                className="cursor-pointer"
              >
                <img
                  className={`${partner.h} w-auto object-contain`}
                  src={partner.src}
                  alt={partner.name}
                  width={158}
                  height={48}
                />
              </div>
            ))}
          </div>
          {/* Third Group (Duplicate for extra smoothness on wide screens if needed) */}
          <div className="flex items-center gap-16 px-8">
            {partners.map((partner) => (
              <div
                key={`${partner.name}-3`}
                className="cursor-pointer"
              >
                <img
                  className={`${partner.h} w-auto object-contain`}
                  src={partner.src}
                  alt={partner.name}
                  width={158}
                  height={48}
                />
              </div>
            ))}
          </div>

          {/* Fourth Group (Duplicate for extra smoothness on wide screens if needed) */}
          <div className="flex items-center gap-16 px-8">
            {partners.map((partner) => (
              <div
                key={`${partner.name}-4`}
                className="cursor-pointer"
              >
                <img
                  className={`${partner.h} w-auto object-contain`}
                  src={partner.src}
                  alt={partner.name}
                  width={158}
                  height={48}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default PartnersSection
