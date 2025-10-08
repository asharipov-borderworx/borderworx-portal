'use client'

import AnimationWrapper from './AnimationWrapper'
import StaggerContainer, { StaggerItem } from './StaggerContainer'

export default function ProfessionalServices() {
  return (
    <section id="professional-services" className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimationWrapper animation="fadeInUp" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Professional Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              With international experience.
            </p>
          </AnimationWrapper>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Experience Stats */}
            <div className="space-y-8">
              <AnimationWrapper animation="fadeInLeft" delay={0.2}>
                <div className="bg-gradient-to-br from-primary to-orange-600 rounded-xl p-8 text-white">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-4xl font-bold mb-2">$3B+</div>
                      <div className="text-orange-100 text-sm">Goods Managed</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">100K+</div>
                      <div className="text-orange-100 text-sm">Customs Clearances</div>
                    </div>
                    <div className="col-span-2 pt-4 border-t border-orange-400">
                      <div className="text-3xl font-bold mb-2">Since 2003</div>
                      <div className="text-orange-100 text-sm">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>

              {/* Locations */}
              <AnimationWrapper animation="fadeInLeft" delay={0.4}>
                <div className="bg-gray-light rounded-xl p-6">
                  <h3 className="text-xl font-bold text-secondary mb-4">Our Locations</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-700">Greater Toronto Area (GTA)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-700">Niagara Falls</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-700">Buffalo</span>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            </div>

            {/* Right Column - Description */}
            <AnimationWrapper animation="fadeInRight" delay={0.3}>
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Since 2003, <strong className="text-primary">Borderworx Logistics</strong> has managed more than 
                    <strong className="text-secondary"> $3 Billion in goods</strong> across the border and more than 
                    <strong className="text-secondary"> 100,000 customs clearances</strong>. We are a 3PL fulfillment 
                    and warehousing company focused on the <strong className="text-primary">Canada–U.S. trade lane</strong> with 
                    locations in the GTA, Niagara Falls and Buffalo.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    We at Borderworx Logistics <strong className="text-primary">pride ourselves in the mastering</strong> of 
                    the most challenging part of a shipment journey which is why we 
                    <strong className="text-secondary"> simplified and fastened this process</strong> making us a 
                    <strong className="text-primary"> reliable organization</strong> for all our current and newest clients.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a
                    href="/services"
                    className="btn-primary text-center"
                  >
                    View Our Services
                  </a>
                  <a
                    href="#contact"
                    className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-center"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </AnimationWrapper>
          </div>

          {/* Bottom Features */}
          <StaggerContainer className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200" staggerDelay={0.15}>
            <StaggerItem className="text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Fast Processing</h3>
              <p className="text-gray-600 text-sm">Simplified and expedited customs clearance processes</p>
            </StaggerItem>

            <StaggerItem className="text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Reliable Service</h3>
              <p className="text-gray-600 text-sm">Trusted by businesses for over 20 years</p>
            </StaggerItem>

            <StaggerItem className="text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Cross-Border Expertise</h3>
              <p className="text-gray-600 text-sm">Specialized in Canada-US trade lane operations</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
