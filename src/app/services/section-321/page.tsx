import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import { getContactInfo } from '@/utils/contactInfo'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Section 321 Fulfillment Canada | BorderWorx Logistics',
  description: 'Duty-free Section 321 fulfillment services in Canada for shipments under $800 to the US. Streamlined cross-border e-commerce solutions.',
}

export default function Section321Page() {
  const contactInfo = getContactInfo()

  const features = [
    {
      title: "Duty-Free Benefits",
      description: "Leverage Section 321 for duty-free entry of shipments valued at $800 or less to the US market",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 3V21M15.679 6.63439C14.063 4.2691 7.94541 4.02196 7.94541 8.16745C7.94541 12.3129 16.7524 10.33 16.2439 15.2118C15.8199 19.2823 9.19299 19.3384 7.21094 16.0891" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Strategic Canadian Location",
      description: "Proximity to major US border crossings enables efficient logistics and swift movement of goods",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    },
    {
      title: "Advanced Technology",
      description: "Sophisticated tracking and management systems ensure compliance with Section 321 requirements",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      title: "Customized Solutions",
      description: "Tailored fulfillment services for bulk shipments and individual e-commerce orders",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    }
  ]

  const advantages = [
    {
      title: "Cost Reduction",
      description: "Significantly reduce customs duties for shipments under $800",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 3V21M15.679 6.63439C14.063 4.2691 7.94541 4.02196 7.94541 8.16745C7.94541 12.3129 16.7524 10.33 16.2439 15.2118C15.8199 19.2823 9.19299 19.3384 7.21094 16.0891" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Faster Delivery",
      description: "Streamlined clearance process ensures quicker delivery times",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    },
    {
      title: "Simplified Process",
      description: "Expedited small shipments with minimal customs complexity",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: "E-commerce Optimization",
      description: "Perfect solution for Canadian businesses targeting US market",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"/>
        </svg>
      )
    }
  ]

  const services = [
    {
      title: "Strategic Location",
      description: "Borderworx's strategic location in Canada plays a pivotal role in its success with Section 321 fulfillment. Proximity to major U.S. border crossings enables the company to efficiently manage logistics, ensuring swift movement of goods into the United States. This geographical advantage is coupled with a deep knowledge of both Canadian and U.S. customs regulations, allowing Borderworx to navigate the complexities of cross-border trade with ease."
    },
    {
      title: "Innovative Warehousing Options",
      description: "Recognizing the crucial role of storage in the supply chain, Borderworx offers expansive and secure warehousing options in Canada, strategically located near major transportation hubs. These facilities are not just storage spaces but advanced logistics centers equipped with the latest technology for inventory management. Borderworx's warehousing solutions are flexible and scalable, catering to varying business demands. Our warehousing enables businesses to store their products in a cost-effective, efficient manner, ensuring that they are perfectly positioned for compliant cross-border shipment under Section 321."
    },
    {
      title: "Technology-Driven Approach",
      description: "Adopting a technology-driven approach, Borderworx offers sophisticated solutions for tracking and managing shipments. This ensures compliance with Section 321 requirements. By utilizing advanced logistics software, Borderworx can optimize routes, manage inventory, and provide real-time updates to their clients, ensuring transparency and efficiency."
    },
    {
      title: "Customized Solutions",
      description: "Understanding that each business has unique needs, Borderworx offers customized fulfillment solutions. Whether it's handling bulk shipments or managing individual e-commerce orders, our team tailors services to meet specific requirements, ensuring that the benefits of Section 321 are fully realized."
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <HeroSection 
        title="Section 321 Fulfillment Canada" 
        description="Duty-free solution for shipments valued under $800 to the US from Canada" 
        breadcrumb="Section 321 Fulfillment" 
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Game-Changing Cross-Border Solution
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Borderworx offers Section 321 fulfillment in Canada for Canadian businesses, a duty-free 
                  solution for shipments valued under $800 to the US from Canada. In the dynamic landscape 
                  of global trade and e-commerce, businesses are continually seeking ways to streamline 
                  operations and reduce costs.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  One pivotal element in this quest is the effective management of cross-border shipments, 
                  particularly between Canada and the United States. Here, Section 321 of the Tariff Act 
                  of 1930 emerges as a game-changer in the fulfillment process, offering a unique opportunity 
                  for companies to optimize their logistics and fulfillment strategies.
                </p>
              </div>
              
              <div className="relative">
                <div className="relative max-w-lg mx-auto rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/services/Section321.png"
                    alt="Section 321 Fulfillment - Cross-border logistics solution"
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

        {/* Key Features */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
              Section 321 Key Features
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
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

        {/* Understanding Section 321 */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-8">
                Understanding Section 321
              </h2>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg mb-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Section 321 is a provision by the United States Customs and Border Protection (CBP) that 
                  allows for the duty-free entry of shipments of goods valued at <strong>$800 or less</strong>. 
                  This regulation, initially established to expedite small shipments, has now become a cornerstone 
                  for e-commerce businesses based in Canada targeting the U.S. market.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  By leveraging Section 321 in fulfillment from Canada, companies can significantly reduce 
                  customs duties, streamline the clearance process, and ensure faster delivery to customers.
                </p>
              </div>

              {/* Advantages Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      {advantage.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-2">{advantage.title}</h3>
                      <p className="text-gray-600 text-sm">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Borderworx Solutions */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-8">
              Borderworx: Pioneering Cross-Border Solutions
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-16">
              At the forefront of maximizing the advantages of Section 321 is Borderworx, a Canada based 
              logistics and fulfillment company. Specializing in cross-border trade, Borderworx has developed 
              an intricate understanding of the nuances of Section 321 and how to apply it effectively for 
              the benefit of their clients.
            </p>
            
            <div className="space-y-12 md:pt-20">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`py-2 sm:py-4 md:py-6 lg:py-8 grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}
                >
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className={`${index % 2 === 0 ? 'lg:order-1' : ''}`}>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="text-center">
                        {index === 0 && (
                          <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </svg>
                        )}
                        {index === 1 && (
                          <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                          </svg>
                        )}
                        {index === 2 && (
                          <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                          </svg>
                        )}
                        {index === 3 && (
                          <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </svg>
                        )}
                        <h4 className="text-lg font-bold text-secondary">{service.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="section-padding hero-gradient text-white">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Maximize Your Section 321 Benefits
              </h2>
              <p className="text-xl text-orange-100 leading-relaxed mb-8">
                Transform your cross-border e-commerce strategy with our Section 321 fulfillment services. 
                Reduce costs, accelerate delivery times, and gain a competitive advantage in the US market.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">$800</div>
                  <p className="text-orange-100">Duty-free threshold per shipment</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">0%</div>
                  <p className="text-orange-100">Customs duties on qualifying shipments</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <p className="text-orange-100">Real-time tracking and updates</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Get Started
                </Link>
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
