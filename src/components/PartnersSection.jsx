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
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-medium text-blue-600 mb-2 uppercase tracking-widest text-sm"
          >
            Trust
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Powering the Next Generation
          </motion.h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex justify-center col-span-2 sm:col-span-3 lg:col-span-1"
            >
              <img
                className={`${partner.h} w-auto object-contain grayscale opacity-60 transition-all duration-500 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer`}
                src={partner.src}
                alt={partner.name}
                width={158}
                height={48}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
