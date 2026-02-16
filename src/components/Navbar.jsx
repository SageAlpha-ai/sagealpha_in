import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Services', href: '#services', isMenu: true },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Whitepapers', href: '#whitepapers' },
  { label: 'Careers', href: '#careers' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'About Us', href: '#about' },
]

const coreServices = [
  { name: 'Agentic AI Solutions', href: '/services#agentic-ai' },
  { name: 'AI & Machine Learning Engineering', href: '/services#ai-ml-engineering' },
  { name: 'Data & Analytics', href: '/services#data-analytics' },
  { name: 'Cloud Strategy & Migration', href: '/services#cloud-strategy' },
  { name: 'DevOps & Platform Engineering', href: '/services#devops-platform' },
  { name: 'AI Program Consulting', href: '/services#ai-program-consulting' },
]

const extendedServices = [
  { name: 'Enterprise AI Strategy', href: '/services' },
  { name: 'Data Modernization', href: '/services' },
  { name: 'Cloud Architecture Advisory', href: '/services' },
  { name: 'AI Governance', href: '/services' },
  { name: 'MLOps & Observability', href: '/services' },
  { name: 'Platform Engineering', href: '/services' },
]

function ServicesMegaMenu({ isOpen, onClose }) {
  const navigate = useNavigate()

  const handleServiceClick = (href) => {
    onClose()
    navigate(href)
  }

  if (!isOpen) return null

  return (
    <div className="absolute left-0 right-0 top-full z-50 border-t border-slate-200 bg-white/98 backdrop-blur-xl shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
      <div className="mx-auto max-w-7xl p-8 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">

          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-4">Core Services</h3>
            <p className="text-slate-600 text-sm mb-6">
              End-to-end capabilities from strategy to production-grade implementation.
            </p>
            <Link
              to="/services"
              onClick={onClose}
              className="text-sm font-medium text-slate-900 hover:text-slate-950 transition-colors flex items-center gap-2"
            >
              View All Services <ChevronDown className="-rotate-90 h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">AI & Data</h3>
            <ul className="space-y-3">
              {coreServices.slice(0, 3).map((service) => (
                <li key={service.name}>
                  <button onClick={() => handleServiceClick(service.href)} className="text-sm text-slate-700 hover:text-slate-900 transition-colors text-left">
                    {service.name}
                  </button>
                </li>
              ))}
              {extendedServices.slice(0, 3).map((service) => (
                <li key={service.name}>
                  <button onClick={() => handleServiceClick(service.href)} className="text-sm text-slate-700 hover:text-slate-900 transition-colors text-left">
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Cloud & Platform</h3>
            <ul className="space-y-3">
              {coreServices.slice(3).map((service) => (
                <li key={service.name}>
                  <button onClick={() => handleServiceClick(service.href)} className="text-sm text-slate-700 hover:text-slate-900 transition-colors text-left">
                    {service.name}
                  </button>
                </li>
              ))}
              {extendedServices.slice(3).map((service) => (
                <li key={service.name}>
                  <button onClick={() => handleServiceClick(service.href)} className="text-sm text-slate-700 hover:text-slate-900 transition-colors text-left">
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2">Enterprise Ready?</h4>
            <p className="text-xs text-slate-600 mb-4">
              See how we helped a F500 retailer scale their AI operations.
            </p>
            <Link to="/case-studies" onClick={onClose} className="text-xs font-semibold text-slate-900 hover:text-slate-1000 transition-colors">
              Read Case Study &rarr;
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsServicesOpen(false)
      }
    }
    if (isServicesOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isServicesOpen])

  return (
    <header
      ref={menuRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || isServicesOpen || isMobileMenuOpen
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200'
        : 'bg-transparent backdrop-blur-none border-b border-transparent'
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#top" className="flex items-center">
            <img src="/logo/sagealpha-logo.png" alt="SageAlpha" className="h-10 w-auto object-contain" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navItems.map((item) => (
            item.isMenu ? (
              <button
                key={item.label}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center gap-1 text-sm font-medium leading-6 transition-colors focus:outline-none ${scrolled || isServicesOpen ? 'text-slate-700 hover:text-blue-600' : 'text-slate-300 hover:text-white'}`}
              >
                {item.label}
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
            ) : (
              <a key={item.label} href={item.href} className={`text-sm font-medium leading-6 transition-colors ${scrolled ? 'text-slate-700 hover:text-blue-600' : 'text-slate-300 hover:text-white'}`}>
                {item.label}
              </a>
            )
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-500 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Talk to an Expert
          </a>
        </div>
      </nav>

      {/* Services Mega Menu */}
      <ServicesMegaMenu isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#top" className="-m-1.5 p-1.5 text-xl font-bold text-white">SageAlpha</a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-slate-300" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-500/10">
              <div className="space-y-2 py-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-slate-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </header>
  )
}

export default Navbar
