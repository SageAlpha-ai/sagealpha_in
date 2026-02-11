function Footer() {
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
                href="mailto:sagealpha.ai@sagealpha.ai"
                className="font-medium text-slate-200 transition hover:text-white"
              >
                sagealpha.ai@sagealpha.ai
              </a>
            </p>
            <p className="max-w-md text-sm text-slate-300">
              SNo 8 1A 1B Office No 110, Commerce Center Shiva, Pimpri Waghire,
              <br />
              Pune, Pune City, Maharashtra, India, 411017
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

export default Footer
