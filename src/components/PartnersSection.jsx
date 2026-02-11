function PartnersSection() {
  return (
    <section
      aria-labelledby="partners-heading"
      className="border-t border-gray-100 bg-gradient-to-b from-white to-[#F5F9FF]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8 lg:py-24">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
          Technology Partners
        </p>
        <h2
          id="partners-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-[#0B1F33] md:text-4xl"
        >
          SageAlpha Partners
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
          We collaborate with leading global cloud platforms to deliver secure,
          scalable, and enterprise-ready AI solutions.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="flex items-center">
            <img
              src="/partners/microsoft.svg"
              alt="Microsoft"
              className="h-10 transition duration-300"
            />
          </div>
          <div className="flex items-center">
            <img
              src="/partners/google_cloud.svg"
              alt="Google Cloud"
              className="h-7 transition duration-300"
            />
          </div>
          <div className="flex items-center">
            <img
              src="/partners/aws.svg"
              alt="Amazon Web Services"
              className="h-10 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
