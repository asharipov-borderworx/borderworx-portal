'use client'

import Image from 'next/image'
import Link from 'next/link'
import getServiceInfo from '@/utils/serviceInfo'
import ServiceCard from './ServiceCard'
import AnimationWrapper from './AnimationWrapper'
import StaggerContainer, { StaggerItem } from './StaggerContainer'

export default function Services() {
  const featuredServices = getServiceInfo().slice(0,3)
  return (
    <section id="services" className="section-padding bg-gray-light">
      <div className="container-max">
        {/* Section Header */}
        <AnimationWrapper animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Our Logistics Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From freight forwarding to supply chain management, we provide comprehensive
            logistics solutions tailored to your business needs.
          </p>
        </AnimationWrapper>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {featuredServices.map((service, index) => (
            <StaggerItem key={service.id}>
              <ServiceCard index={index} service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Learn More CTA */}
        <AnimationWrapper animation="fadeInUp" delay={0.3} className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-secondary mb-4">
            Explore All Our Services
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our complete range of logistics solutions including Container Freight Station (CFS) services,
            Amazon FBM fulfillment, and specialized trade compliance consulting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
              View All Services
            </Link>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  )
}
