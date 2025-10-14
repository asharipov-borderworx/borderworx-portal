'use client'

import { useState, useEffect, useRef } from 'react'

export default function AnimatedHero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative hero-gradient text-white pt-48 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/background-images/servicePage.png"
          alt="Logistics operations background"
          className="w-full h-full object-cover opacity-15"
        />
      </div>
      
      <div className="container-max section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            BorderWorx Blog
          </h1>
          <p 
            className={`text-xl md:text-2xl text-orange-100 leading-relaxed transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Stay updated with the latest insights, trends, and news in logistics and cross-border trade
          </p>
        </div>
      </div>
    </section>
  )
}
