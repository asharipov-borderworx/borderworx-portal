import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import { getContactInfo } from '@/utils/contactInfo'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Customs Brokerage Services - Canada & USA | BorderWorx Logistics',
  description: 'Expert customs brokerage services for Canada and USA. CCRA and CBP compliance, electronic releases with PARS/PAPS, and proactive trade compliance management.',
}

export default function CustomsBrokeragePage() {
  const contactInfo = getContactInfo()

  const services = [
    {
      title: "Tariff Classifications",
      description: "Expert guidance on proper classification of goods for accurate duty assessment and compliance.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
        </svg>
      )
    },
    {
      title: "Valuation & Duty Management",
      description: "Accurate customs valuation and optimization of duty reliefs to minimize costs while ensuring compliance.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 3V21M15.679 6.63439C14.063 4.2691 7.94541 4.02196 7.94541 8.16745C7.94541 12.3129 16.7524 10.33 16.2439 15.2118C15.8199 19.2823 9.19299 19.3384 7.21094 16.0891" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Trade Agreement Expertise",
      description: "Navigate complex trade agreements and ensure your business maximizes applicable concessions and exemptions.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: "Proactive Compliance",
      description: "Stay ahead of regulatory changes with our proactive compliance management and risk mitigation strategies.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      )
    }
  ]

  const canadianServices = [
    "Seamless integration process between transportation and brokerage to ensure non-stop flow of goods across border",
    "Single contact for all brokerage and transportation – parallel focus",
    "Complete trade compliance and Canada Border Services Agency (CBSA) compliant",
    "Electronic releases with PARS (Pre-Arrival Review System) and Commercial Driver Registration Program (CDRP) Registered drivers"
  ]

  const usServices = [
    "In-house customs experts at all border warehouses",
    "Transparent clearances for ease of cross-border transfer of goods and optimal distribution in both Canada and the U.S.",
    "On site staff to ensure total compliance and low risk importer status",
    "Electronic releases with PAPS (Pre-Arrival Processing System) and driver registration"
  ]

  const industries = [
    { 
      name: "Manufacturing", 
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z"/>
        </svg>
      )
    },
    { 
      name: "Retail", 
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"/>
        </svg>
      )
    },
    { 
      name: "Technology", 
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    },
    { 
      name: "Automotive", 
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    },
    { 
      name: "Consumer Goods", 
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
        </svg>
      )
    },
    { 
      name: "Specialized Equipment", 
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <HeroSection 
        title="Customs Brokerage Simplified" 
        description="Expert customs brokerage services for seamless cross-border trade between Canada and the USA" 
        breadcrumb="Customs Brokerage" 
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg text-gray-700 leading-relaxed">
                Navigating the complexities of customs brokerage can be a daunting task for businesses engaged in 
                cross-border trade. Our customs brokerage services are designed to simplify this process, ensuring 
                a smooth and hassle-free experience. We provide expert guidance on tariff classifications, valuation, 
                duty reliefs, and the intricacies of trade agreements, ensuring that your business takes full advantage 
                of applicable concessions and exemptions.
              </p>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
              Comprehensive Customs Solutions
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Proactive Compliance Section */}
            <div className="bg-gradient-to-br from-primary to-orange-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Proactive Compliance Management
              </h3>
              <p className="text-lg text-orange-100 leading-relaxed text-center max-w-4xl mx-auto">
                We understand the importance of compliance in today's regulatory environment. Our team stays abreast 
                of the latest changes in customs regulations and trade policies, providing proactive advice to keep 
                your business compliant and ahead of any potential issues. This proactive approach not only minimizes 
                the risk of delays and penalties but also helps maintain your reputation as a reliable trader.
              </p>
            </div>
          </div>
        </section>

        {/* Country-Specific Services */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
              Country-Specific Expertise
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Canadian Services */}
              <div className="relative bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl shadow-lg overflow-hidden">
                {/* Canadian Flag Background */}
                <div className="absolute inset-0 opacity-5">
                  <Image
                    src="/images/services/canadianFlag.png"
                    alt="Canadian Flag Background"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary">Canadian Services</h3>
                  </div>
                
                <ul className="space-y-4">
                  {canadianServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
                
                  <div className="mt-6 p-4 bg-red-200 bg-opacity-50 rounded-lg">
                    <h4 className="font-bold text-secondary mb-2">Key Systems:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">PARS</span>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">CDRP</span>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">CCRA Compliance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* US Services */}
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg overflow-hidden flex flex-end flex-column">
                {/* USA Flag Background */}
                <div className="absolute inset-0 opacity-5">
                  <Image
                    src="/images/services/usaFlag.png"
                    alt="USA Flag Background"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 ">
                  <div className="flex items-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary">U.S. Services</h3>
                  </div>
                
                <ul className="space-y-4">
                  {usServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
                
                  <div className="mt-6 p-4 bg-blue-200 bg-opacity-50 rounded-lg">
                    <h4 className="font-bold text-secondary mb-2">Key Systems:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">PAPS</span>
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">CBP Compliance</span>
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">Low Risk Status</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-8">
              Customized Solutions for Diverse Industries
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
              Recognizing that each industry has unique requirements, we offer customized brokerage solutions 
              tailored to the specific needs of different sectors. Whether you are importing machinery, consumer 
              goods, or specialized equipment, our team has the expertise to ensure that your goods clear customs 
              efficiently and accurately.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-secondary">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="flex flex-row justify-center gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                  Why Choose Our Customs Brokerage Services?
                </h2>
                <div className="space-y-6 flex flex-col">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Fast Processing</h3>
                      <p className="text-gray-600">Electronic releases with PARS/PAPS for rapid customs clearance and minimal delays.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Full Compliance</h3>
                      <p className="text-gray-600">Canadian CBSA and U.S. CBP compliance with proactive regulatory monitoring and risk management</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Strategic Locations</h3>
                      <p className="text-gray-600">On-site customs services at border warehouses for seamless cross-border operations.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding hero-gradient text-white">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Simplify Your Cross-Border Trade Today
              </h2>
              <p className="text-xl text-orange-100 leading-relaxed mb-8">
                Experience hassle-free customs brokerage with our expert team. From tariff classification to 
                compliance management, we handle the complexities so you can focus on what matters most – 
                growing your business across borders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
                <Link href="/quote" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Get a Quote
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
