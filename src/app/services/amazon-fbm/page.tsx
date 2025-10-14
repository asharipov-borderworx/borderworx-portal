import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import { getContactInfo } from '@/utils/contactInfo'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Amazon FBM Fulfillment & Strategic Trade Partnerships | BorderWorx Logistics',
  description: 'Strategic trade partnerships and Amazon FBM fulfillment services. Cross-border business development and supply chain consulting for Canadian businesses targeting the US market.',
}

export default function AmazonFBMPage() {
  const contactInfo = getContactInfo()

  const partnerships = [
    {
      title: "Cross-Border Business Development",
      description: "Advocate for cross-border business development between Canada and the US, creating opportunities for growth and expansion.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
        </svg>
      )
    },
    {
      title: "Steering Committee Involvement",
      description: "Active involvement in steering meetings to assess cross-border market impacts related to trade agreements and policy changes.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      )
    },
    {
      title: "Infrastructure Analysis",
      description: "Detailed analysis on infrastructure requirements and reductions, while improving supply chain efficiencies for optimal trade flow.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      )
    },
    {
      title: "Supply Chain Consulting",
      description: "Expert consultant in supply chain design, helping businesses optimize their logistics and fulfillment strategies.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    },
    {
      title: "Stakeholder Engagement",
      description: "Regular meetings with key supply chain stakeholders to assess current impacts to the business community and identify opportunities.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
      )
    }
  ]

  const usAdvantages = [
    {
      title: "Ready Market Access",
      description: "More markets ready to buy Canadian products than any other country",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"/>
        </svg>
      )
    },
    {
      title: "Ease of Access",
      description: "Geographic proximity and established trade relationships provide seamless access",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    },
    {
      title: "Similar Economies",
      description: "Comparable economic structures and business practices facilitate smooth operations",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>
      )
    },
    {
      title: "Lowest Cost of Access",
      description: "Most cost-effective international market entry point for Canadian businesses",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 3V21M15.679 6.63439C14.063 4.2691 7.94541 4.02196 7.94541 8.16745C7.94541 12.3129 16.7524 10.33 16.2439 15.2118C15.8199 19.2823 9.19299 19.3384 7.21094 16.0891" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  const fbmFeatures = [
    {
      title: "Amazon FBM Integration",
      description: "Seamless integration with Amazon's Fulfilled by Merchant program for complete control over your fulfillment process",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
        </svg>
      )
    },
    {
      title: "Cross-Border Expertise",
      description: "Specialized knowledge in Canada-US trade regulations and customs procedures for Amazon marketplace",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      )
    },
    {
      title: "Scalable Solutions",
      description: "Flexible fulfillment solutions that grow with your Amazon business from startup to enterprise level",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
        </svg>
      )
    },
    {
      title: "Real-Time Tracking",
      description: "Advanced tracking and inventory management systems for complete visibility and control",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <HeroSection 
        title="Amazon FBM Fulfillment & Strategic Trade Partnerships" 
        description="Expert fulfillment services and strategic partnerships for cross-border business development" 
        breadcrumb="Amazon FBM Fulfillment" 
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Strategic Trade Partnerships
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Providing strategic trade partnerships for the business and stakeholders community is part 
                  of our mission at Borderworx. We focus on building strong relationships that facilitate 
                  cross-border commerce and drive mutual growth.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our expertise in Amazon FBM fulfillment combined with strategic trade partnerships creates 
                  unparalleled opportunities for Canadian businesses to succeed in the US marketplace.
                </p>
              </div>
              
              <div className="relative">
                <div className="relative max-w-lg mx-auto rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/services/strategicPartnership.png"
                    alt="Strategic Trade Partnerships - Cross-border business development"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Partnerships */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
              Our Strategic Partnership Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerships.map((partnership, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                    {partnership.icon}
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-3">
                    {partnership.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {partnership.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* US Market Focus */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Why We Focus on the USA Market
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We focus on the USA because more markets are ready to buy Canadian products than any other country. 
                The combination of ease of access, similar economies, and lowest cost of access makes the US market 
                the ideal expansion target for Canadian businesses.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {usAdvantages.map((advantage, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amazon FBM Features */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
              Amazon FBM Fulfillment Excellence
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {fbmFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                  Partnership Benefits
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Cross-Border Expertise</h3>
                      <p className="text-gray-600">Deep understanding of Canada-US trade relationships and market dynamics.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Stakeholder Network</h3>
                      <p className="text-gray-600">Access to established network of key supply chain stakeholders and decision makers.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Infrastructure Analysis</h3>
                      <p className="text-gray-600">Detailed assessment and optimization of infrastructure requirements for maximum efficiency.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary to-orange-600 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Expand to the US Market?</h3>
                <p className="text-orange-100 mb-6 leading-relaxed">
                  Partner with us to leverage strategic trade relationships and expert Amazon FBM fulfillment 
                  services. Let us help you navigate the complexities of cross-border commerce and achieve 
                  sustainable growth in the US marketplace.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    Strategic partnership development
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    Amazon FBM fulfillment expertise
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    Cross-border trade consulting
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    Supply chain optimization
                  </li>
                </ul>
                <Link
                  href="#contact"
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
                >
                  Start Your Partnership
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding hero-gradient text-white">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your Cross-Border Business
              </h2>
              <p className="text-xl text-orange-100 leading-relaxed mb-8">
                Combine the power of strategic trade partnerships with expert Amazon FBM fulfillment services. 
                Access the lucrative US market with the lowest cost of entry and highest success potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${contactInfo.contact.address.Canada.phone?.replace('tel:', '')}`}
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Call {contactInfo.contact.address.Canada.phone}
                </a>
                <a 
                  href={`mailto:${contactInfo.contact.email.primary}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Get Partnership Info
                </a>
                <Link 
                  href="/services"
                  className="border-2 border-orange-200 text-orange-100 px-8 py-4 rounded-lg font-semibold hover:bg-orange-200 hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                  </svg>
                  Back to Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      
      <Chatbot />
    </div>
  )
}
