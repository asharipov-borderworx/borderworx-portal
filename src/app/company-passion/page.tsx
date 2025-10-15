'use client'

import { useState, useEffect, useRef } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// Custom hook for intersection observer
function useIntersectionObserver() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isVisible] as const
}

export default function CompanyPassionPage() {
  const [heroRef, heroVisible] = useIntersectionObserver()
  const [aboutRef, aboutVisible] = useIntersectionObserver()
  const [missionRef, missionVisible] = useIntersectionObserver()
  const [passionRef, passionVisible] = useIntersectionObserver()
  const [statsRef, statsVisible] = useIntersectionObserver()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section 
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/company-passion/company-passion.png"
            alt="Children we help in Thailand"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-secondary/70 to-primary/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 
              className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Export Love Around the World!
            </h1>
            <p 
              className={`text-xl md:text-2xl text-white/90 leading-relaxed mb-8 transition-all duration-1000 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              As part of our passion, we have made a positive impact in the world by working closely with Hope Thailand.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Hope Thailand Section */}
      <section 
        ref={aboutRef}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Logo */}
              <div 
                className={`transition-all duration-1000 ${
                  aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <div className="bg-white p-12 rounded-2xl shadow-xl">
                  <Image
                    src="/images/company-passion/hope-thailand.svg"
                    alt="Hope Thailand Logo"
                    width={400}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Content */}
              <div 
                className={`transition-all duration-1000 ${
                  aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <h2 className="text-4xl font-bold text-secondary mb-6">
                  About Hope Thailand
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Hope Thailand is a <strong>faith-based, non-denominational, not-for-profit organization</strong> dedicated to bringing hope to the hopeless in Thailand.
                  </p>
                  <p className="text-lg">
                    All members of the leadership team are volunteers. <strong className="text-primary">100% of your donation</strong> to Hope Thailand goes directly to providing care for the needy.
                  </p>
                  <p className="text-lg">
                    Hope Thailand was envisioned in 2009 by an overwhelming need to provide shelter and care to the displaced Hill Tribe children and refugees along the Thai/Burma border.
                  </p>
                  <p className="text-lg">
                    Hope Thailand&apos;s vision was, and continues to be, to provide a safe and loving home-like setting for these children. This vision, in cooperation with both missionaries and local church leaders, has resulted in the establishment of:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                    <li><strong>2 homes:</strong> Bethel Home and Wang Pa Home</li>
                    <li><strong>4 schools for refugee children:</strong> Tong Luang Church School, Emmanuel Church School, Morning Glory, and Grace Home</li>
                  </ul>
                </div>

                {/* Donate Button */}
                <div className="mt-8">
                  <Link
                    href="https://hopethailand.org/donate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-orange-600 text-white rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-primary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Donate Now
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section 
        ref={missionRef}
        className="py-20 hero-gradient text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
                missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Our Mission
            </h2>
            <p 
              className={`text-2xl md:text-3xl font-semibold mb-8 transition-all duration-1000 ${
                missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Go Further, Reach Higher, Be Better; Change the world!
            </p>
            <p 
              className={`text-xl leading-relaxed transition-all duration-1000 ${
                missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              To further your business by providing world class services, To better each other and most importantly to change the world and make it a better place for us all.
            </p>
          </div>
        </div>
      </section>

      {/* Our Passion Section */}
      <section 
        ref={passionRef}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 
              className={`text-4xl md:text-5xl font-bold text-secondary mb-8 text-center transition-all duration-1000 ${
                passionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Our Passion
            </h2>
            <p 
              className={`text-xl text-gray-700 leading-relaxed text-center mb-12 transition-all duration-1000 ${
                passionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              To share God&apos;s love and our resources to support a lost and forgotten group of people in northern Thailand. Known as the Karen people, we help where we can:
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section 
        ref={statsRef}
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Stat 1 */}
              <div 
                className={`bg-white rounded-2xl p-8 shadow-xl text-center transform hover:-translate-y-2 transition-all duration-500 ${
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0ms' }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-orange-600 rounded-full mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-5xl font-bold text-primary mb-3">350</h3>
                <p className="text-lg text-gray-700">Orphan children in Thailand</p>
              </div>

              {/* Stat 2 */}
              <div 
                className={`bg-white rounded-2xl p-8 shadow-xl text-center transform hover:-translate-y-2 transition-all duration-500 ${
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '150ms' }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-orange-600 rounded-full mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-5xl font-bold text-primary mb-3">600</h3>
                <p className="text-lg text-gray-700">Displaced people, living in a trash dump in Mae Sot Thailand</p>
              </div>

              {/* Stat 3 */}
              <div 
                className={`bg-white rounded-2xl p-8 shadow-xl text-center transform hover:-translate-y-2 transition-all duration-500 ${
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-orange-600 rounded-full mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-5xl font-bold text-primary mb-3">Many</h3>
                <p className="text-lg text-gray-700">Refugees from genocide in Myanmar (Burma), living on the border of Thailand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Your contribution can change lives. Every donation goes directly to providing care, shelter, and hope to those who need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://hopethailand.org/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Donate to Hope Thailand
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

