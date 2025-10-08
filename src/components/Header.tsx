'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const hoverTimer = useRef<NodeJS.Timeout | null>(null)
  const hoverResourcesTimer = useRef<NodeJS.Timeout | null>(null)

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
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'About us', href: '/about-us' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed w-full top-0 z-50 h-20 shadow-md bg-white">
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
          <div className="hidden md:flex items-center space-x-6">
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
                      className="relative inline-block text-gray-700 hover:text-primary transition-colors duration-300 font-medium nav-underline px-1"
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
                      className="relative inline-block text-gray-700 hover:text-primary transition-colors duration-300 font-medium nav-underline px-1"
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
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative inline-block text-gray-700 hover:text-primary transition-colors duration-300 font-medium nav-underline"
                >
                  {item.name}
                </Link>
              )
            })}
            <Link
              href="/quote"
              className="btn-primary"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white border-t border-gray-100 shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-300 font-medium nav-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/quote"
                  className="btn-primary block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
