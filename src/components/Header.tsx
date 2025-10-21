'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const hoverTimer = useRef<NodeJS.Timeout | null>(null)
  const hoverResourcesTimer = useRef<NodeJS.Timeout | null>(null)
  const hoverAboutTimer = useRef<NodeJS.Timeout | null>(null)

  const openServices = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    setIsServicesOpen(true)
  }
  const closeServices = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    hoverTimer.current = setTimeout(() => setIsServicesOpen(false), 120)
  }
  const openResources = () => {
    if (hoverResourcesTimer.current) clearTimeout(hoverResourcesTimer.current)
    setIsResourcesOpen(true)
  }
  const closeResources = () => {
    if (hoverResourcesTimer.current) clearTimeout(hoverResourcesTimer.current)
    hoverResourcesTimer.current = setTimeout(() => setIsResourcesOpen(false), 120)
  }
  const openAbout = () => {
    if (hoverAboutTimer.current) clearTimeout(hoverAboutTimer.current)
    setIsAboutOpen(true)
  }
  const closeAbout = () => {
    if (hoverAboutTimer.current) clearTimeout(hoverAboutTimer.current)
    hoverAboutTimer.current = setTimeout(() => setIsAboutOpen(false), 120)
  }

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'About us', href: '/about-us' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed w-full top-0 z-50 h-20 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-transparent'
    }`}>
        <nav className="container-max px-4 sm:px-6 lg:px-8 h-full">
        <div className="h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="BorderWorx Logistics Logo"
                width={200}
                height={72}
                className='w-[190px] h-[80px] -my-3 object-contain'
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-6 ${
                        isScrolled ? 'text-gray-700' : 'text-white'
                      } `}>
            {navigation.map((item) => {
              if (item.name === 'Services') {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={closeServices}
                  >
                    <Link
                      href={item.href}
                      className="relative inline-block hover:text-orange-300 transition-colors duration-300 font-medium nav-underline px-1"
                    >
                      {item.name}
                    </Link>
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[520px] rounded-xl bg-white/70 backdrop-blur-md border border-white/30 shadow-2xl p-4 transition-[opacity,transform] duration-300 ease-out will-change-transform ${
                        isServicesOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
                      }`}
                      onMouseEnter={openServices}
                      onMouseLeave={closeServices}
                    >
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { name: 'Warehousing', href: '/services/warehousing' },
                            { name: 'Warehousing & Distribution', href: '/services/warehousing-distribution' },
                            { name: 'Customs Brokerage – Canada & USA', href: '/services/customs-brokerage' },
                            { name: 'Trade Compliance Consulting', href: '/services/trade-compliance' },
                            { name: 'Section 321 Fulfillment Canada', href: '/services/section-321' },
                            { name: 'Amazon FBM Fulfillment', href: '/services/amazon-fbm' },
                            { name: 'FBA Prep Center', href: '/services/amazon-fba-prep' },
                            { name: 'CFS Shipping Services', href: '/services/cfs-shipping' },
                          ].map((s) => (
                            <Link
                              key={s.name}
                              href={s.href}
                              className="group flex items-center justify-between px-3 py-2 rounded-lg transition-colors"
                            >
                              <span className="text-sm font-medium text-secondary group-hover:text-primary">{s.name}</span>
                              <svg className="w-4 h-4 text-gray-400 group-hover:text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                )
              }
              if (item.name === 'Resources') {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={openResources}
                    onMouseLeave={closeResources}
                  >
                    <Link
                      href={item.href}
                      className="relative inline-block hover:text-orange-300 transition-colors duration-300 font-medium nav-underline px-1"
                    >
                      {item.name}
                    </Link>
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[520px] rounded-xl bg-white/70 backdrop-blur-md border border-white/30 shadow-2xl p-4 transition-[opacity,transform] duration-300 ease-out will-change-transform ${
                        isResourcesOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
                      }`}
                      onMouseEnter={openResources}
                      onMouseLeave={closeResources}
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { name: 'What is Section 321?', href: '/resources/section-321-information' },
                          { name: 'What is a Foreign Trade Zone (FTZ)?', href: '/resources/foreign-trade-zone-ftz-information' },
                          { name: 'What is a Centralized Examination Station (CES)?', href: '/resources/centralized-examination-station-ces-information' },
                          { name: 'What is a CFS?', href: '/resources/container-freight-station-cfs-information' },
                          { name: 'What is CTPAT Certification?', href: '/resources/ctpat-certification-information' },
                          { name: 'UPS Shipment Tracking', href: '/resources/ups-shipment-tracking' },
                        ].map((r) => (
                          <Link
                            key={r.name}
                            href={r.href}
                            className="group flex items-center justify-between px-3 py-2 rounded-lg transition-colors"
                          >
                            <span className="text-sm font-medium text-secondary group-hover:text-primary">{r.name}</span>
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }
              if (item.name === 'About us') {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={openAbout}
                    onMouseLeave={closeAbout}
                  >
                    <Link
                      href={item.href}
                      className="relative inline-block hover:text-orange-300 transition-colors duration-300 font-medium nav-underline px-1"
                    >
                      {item.name}
                    </Link>
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[280px] rounded-xl bg-white/70 backdrop-blur-md border border-white/30 shadow-2xl p-4 transition-[opacity,transform] duration-300 ease-out will-change-transform ${
                        isAboutOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
                      }`}
                      onMouseEnter={openAbout}
                      onMouseLeave={closeAbout}
                    >
                      <div className="flex flex-col gap-2">
                        {[
                          { name: 'About Us', href: '/about-us' },
                          { name: 'Company Passion', href: '/company-passion' },
                        ].map((a) => (
                          <Link
                            key={a.name}
                            href={a.href}
                            className="group flex items-center justify-between px-3 py-2 rounded-lg transition-colors"
                          >
                            <span className="text-sm font-medium text-secondary group-hover:text-primary">{a.name}</span>
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative inline-block hover:text-orange-300 transition-colors duration-300 font-medium nav-underline"
                >
                  {item.name}
                </Link>
              )
            })}
            <Link
              href="/quote"
              className={`btn-primary transition-all duration-300 ${
                isScrolled 
                  ? 'bg-primary text-white hover:bg-primary/90' 
                  : 'bg-white text-primary hover:bg-gray-100'
              }`}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-orange-300'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Full Page Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Full Page Mobile Menu */}
            <div className="fixed inset-0 top-20 bg-white z-50 md:hidden overflow-y-auto">
              <div className="px-4 py-6 space-y-4">
                {/* Main Navigation Items */}
                {navigation.map((item) => {
                  if (item.name === 'Services') {
                    return (
                      <div key={item.name} className="border-b border-gray-100 pb-4">
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="flex items-center justify-between w-full px-3 py-3 ${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-orange-300'} transition-colors duration-300 font-semibold text-lg"
                        >
                          <span>{item.name}</span>
                          <svg
                            className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isMobileServicesOpen && (
                          <div className="pl-6 pr-3 py-2 space-y-2 bg-gray-50 rounded-lg mt-2">
                            {[
                              { name: 'All Services', href: '/services', isMain: true },
                              { name: 'Warehousing', href: '/services/warehousing' },
                              { name: 'Warehousing & Distribution', href: '/services/warehousing-distribution' },
                              { name: 'Customs Brokerage – Canada & USA', href: '/services/customs-brokerage' },
                              { name: 'Trade Compliance Consulting', href: '/services/trade-compliance' },
                              { name: 'Section 321 Fulfillment Canada', href: '/services/section-321' },
                              { name: 'Amazon FBM Fulfillment', href: '/services/amazon-fbm' },
                              { name: 'FBA Prep Center', href: '/services/amazon-fba-prep' },
                              { name: 'CFS Shipping Services', href: '/services/cfs-shipping' },
                            ].map((s) => (
                              <Link
                                key={s.name}
                                href={s.href}
                                className={`block px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-300 text-sm rounded-md hover:bg-white ${s.isMain ? 'font-semibold text-primary border-b border-gray-200 pb-2 mb-2' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {s.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  }
                  
                  if (item.name === 'Resources') {
                    return (
                      <div key={item.name} className="border-b border-gray-100 pb-4">
                        <button
                          onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                          className="flex items-center justify-between w-full px-3 py-3 ${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-orange-300'} transition-colors duration-300 font-semibold text-lg"
                        >
                          <span>{item.name}</span>
                          <svg
                            className={`w-5 h-5 transition-transform ${isMobileResourcesOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isMobileResourcesOpen && (
                          <div className="pl-6 pr-3 py-2 space-y-2 bg-gray-50 rounded-lg mt-2">
                            {[
                              { name: 'All Resources', href: '/resources', isMain: true },
                              { name: 'What is Section 321?', href: '/resources/section-321-information' },
                              { name: 'What is a Foreign Trade Zone (FTZ)?', href: '/resources/foreign-trade-zone-ftz-information' },
                              { name: 'What is a Centralized Examination Station (CES)?', href: '/resources/centralized-examination-station-ces-information' },
                              { name: 'What is a CFS?', href: '/resources/container-freight-station-cfs-information' },
                              { name: 'What is CTPAT Certification?', href: '/resources/ctpat-certification-information' },
                              { name: 'UPS Shipment Tracking', href: '/resources/ups-shipment-tracking' },
                            ].map((r) => (
                              <Link
                                key={r.name}
                                href={r.href}
                                className={`block px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-300 text-sm rounded-md hover:bg-white ${r.isMain ? 'font-semibold text-primary border-b border-gray-200 pb-2 mb-2' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {r.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  }
                  
                  if (item.name === 'About us') {
                    return (
                      <div key={item.name} className="border-b border-gray-100 pb-4">
                        <button
                          onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                          className="flex items-center justify-between w-full px-3 py-3 ${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-orange-300'} transition-colors duration-300 font-semibold text-lg"
                        >
                          <span>{item.name}</span>
                          <svg
                            className={`w-5 h-5 transition-transform ${isMobileAboutOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isMobileAboutOpen && (
                          <div className="pl-6 pr-3 py-2 space-y-2 bg-gray-50 rounded-lg mt-2">
                            {[
                              { name: 'About Us', href: '/about-us', isMain: true },
                              { name: 'Company Passion', href: '/company-passion' },
                            ].map((a) => (
                              <Link
                                key={a.name}
                                href={a.href}
                                className={`block px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-300 text-sm rounded-md hover:bg-white ${a.isMain ? 'font-semibold text-primary border-b border-gray-200 pb-2 mb-2' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {a.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  }
                  
                  return (
                    <div key={item.name} className="border-b border-gray-100 pb-4">
                      <Link
                        href={item.href}
                        className="block px-3 py-3 ${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-orange-300'} transition-colors duration-300 font-semibold text-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </div>
                  )
                })}
                
                {/* CTA Button */}
                <div className="pt-6 border-t border-gray-100">
                  <Link
                    href="/quote"
                    className="btn-primary block text-center py-4 text-lg font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </Link>
                </div>
                
                {/* Contact Info */}
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Contact Info</h3>
                  <div className="space-y-2 px-3">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm">+1 (905)-877-6036</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">mail@borderworx.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  )
}
