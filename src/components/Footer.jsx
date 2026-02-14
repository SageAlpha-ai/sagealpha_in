function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-[#020617] pt-20 pb-10 sm:pt-24 lg:pt-32">
      {/* Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo/sagealpha-logo.png" alt="SageAlpha" className="h-10 w-auto object-contain" />
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400 max-w-sm">
              We build the systems that power the future. Enterprise AI, Data, and Cloud solutions engineering for scale, security, and impact.
            </p>
            <div className="mt-6 flex space-x-6">
              {/* Socials placeholder */}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-5">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
              <ul className="mt-6 space-y-4">
                {['Agentic AI', 'Data Platforms', 'Cloud Native', 'DevOps'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm leading-6 text-slate-400 hover:text-blue-400 transition-colors block relative group">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul className="mt-6 space-y-4">
                {['About', 'Careers', 'Partners', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm leading-6 text-slate-400 hover:text-blue-400 transition-colors relative group inline-block">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
              <ul className="mt-6 space-y-4">
                {['Privacy', 'Terms', 'Security'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm leading-6 text-slate-400 hover:text-blue-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-left sm:col-span-2">
              <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
              <ul className="mt-6 space-y-4 text-sm text-slate-400">
                <li className="leading-relaxed">
                  SNo 8 1A 1B Office No 110, Commerce Center Shiva,<br />
                  Pimpri Waghire, Pune, Pune City, Maharashtra, India, 411017
                </li>
                <li>
                  <a href="mailto:sagealpha.ai@gmail.com" className="hover:text-blue-400 transition-colors">
                    sagealpha.ai@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-slate-500">
            &copy; {new Date().getFullYear()} SageAlpha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
