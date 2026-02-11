import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Whitepapers', href: '#whitepapers' },
  { label: 'Careers', href: '#careers' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
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
  { name: 'AI Governance & Responsible AI', href: '/services' },
  { name: 'MLOps & AI Observability', href: '/services' },
  { name: 'Platform Modernization', href: '/services' },
]

function ServicesMegaMenu({ isOpen, onClose }) {
  const navigate = useNavigate()

  const handleServiceClick = (href) => {
    onClose()
    navigate(href)
  }

  if (!isOpen) return null

  return (
    <div
      className={`absolute left-0 right-0 top-full z-50 border-t border-gray-100 bg-white shadow-xl transition-all duration-200 ease-out ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="mx-auto max-w-6xl px-12 py-16">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/services"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-2xl font-semibold text-[#0B1F33] transition-colors hover:text-blue-600"
          >
            All Services
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <div className="mt-4 h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent" />
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: Core AI Services */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Core AI Services
            </h3>
            <ul className="space-y-3">
              {coreServices.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => handleServiceClick(service.href)}
                    className="group flex items-start text-left text-sm text-gray-700 transition-colors duration-200 hover:text-blue-600"
                  >
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
                    <span>{service.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Extended Capabilities */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Extended Capabilities
            </h3>
            <ul className="space-y-3">
              {extendedServices.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => handleServiceClick(service.href)}
                    className="group flex items-start text-left text-sm text-gray-700 transition-colors duration-200 hover:text-blue-600"
                  >
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
                    <span>{service.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Insight Box */}
          <div className="rounded-xl bg-gradient-to-br from-[#F8FAFC] to-[#EEF6FF] p-8">
            <h3 className="mb-3 text-lg font-semibold text-[#0B1F33]">
              Build with Confidence
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              SageAlpha helps enterprises move from AI ambition to production-ready
              systems with the right architecture, governance, and execution strategy.
            </p>
            <Link
              to="/services"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              Explore All Services
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
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
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Click outside to close mega menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsServicesOpen(false)
      }
    }

    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isServicesOpen])

  return (
    <header
      ref={menuRef}
      className={`fixed inset-x-0 top-0 z-30 transition-all ${
        scrolled
          ? 'bg-white/90 backdrop-blur shadow-sm'
          : 'bg-transparent backdrop-blur-0'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <a href="#top" className="flex flex-col items-start gap-1">
          <img
            src="/logo/sagealpha-logo.png"
            alt="SageAlpha"
            className="h-8 w-auto md:h-9"
          />
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) =>
            item.label === 'Services' ? (
              <button
                key={item.label}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 transition-colors hover:text-brand-accent"
              >
                {item.label}
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-brand-accent"
              >
                {item.label}
              </a>
            ),
          )}
        </div>

        <div className="hidden md:flex">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:opacity-95 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
          >
            Talk to an Expert
          </a>
        </div>
      </nav>

      {/* Services Mega Menu */}
      <ServicesMegaMenu
        isOpen={isServicesOpen}
        onClose={() => setIsServicesOpen(false)}
      />
    </header>
  )
}

export default Navbar
