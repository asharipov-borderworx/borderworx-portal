import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import { getContactInfo } from '@/utils/contactInfo'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Container Freight Station (CFS) Shipping Services | BorderWorx Logistics',
  description: 'Professional CFS shipping services with consolidation, cross-docking, storage, and customs clearance support. Streamlined Canada-US cargo handling.',
}

export default function CFSShippingPage() {
  const contactInfo = getContactInfo()

  const services = [
    {
      title: "Consolidation and Deconsolidation",
      description: "We specialize in consolidating multiple shipments into a single container for efficient transportation and deconsolidating bulk shipments into smaller, manageable units for distribution.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Cross Docking",
      description: "Our cross-docking services reduce storage time and costs by directly transferring cargo from incoming to outgoing transportation modes.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "Storage Solutions",
      description: "We provide secure storage options for your cargo until it's ready for shipment or pick-up, ensuring its safety and integrity.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Customs Clearance Support",
      description: "Our expert team assists with the customs clearance process, ensuring compliance with all regulations and a smooth transition across borders.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ]

  const benefits = [
    {
      title: "Efficiency and Speed",
      description: "Our CFS services are designed to reduce handling times and speed up the supply chain process, allowing for faster delivery times to your customers.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Cost Savings",
      description: "By consolidating shipments and optimizing transportation routes, we help reduce your shipping costs.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 3V21M15.679 6.63439C14.063 4.2691 7.94541 4.02196 7.94541 8.16745C7.94541 12.3129 16.7524 10.33 16.2439 15.2118C15.8199 19.2823 9.19299 19.3384 7.21094 16.0891" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Flexibility",
      description: "We cater to a range of cargo types and sizes, offering tailored solutions to meet your specific logistics needs.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Security",
      description: "Our secure facilities and stringent handling procedures ensure the safety and integrity of your goods at all times.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ]

  const whyChoose = [
    {
      title: "Industries We Serve",
      description: "Understanding that different industries face unique challenges, we offer specialized CFS solutions tailored to the specific needs of various sectors, including automotive, technology, retail, and more. Our expertise in handling diverse cargo types ensures that your specific requirements are met with precision.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Sustainability Commitment",
      description: "In an era where environmental responsibility is paramount, Borderworx is committed to sustainable logistics practices. Our CFS operations are designed to minimize the environmental impact by optimizing shipment consolidations, reducing unnecessary transportation, and employing eco-friendly practices throughout our processes.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Global Network, Local Expertise",
      description: "Leverage our global logistics network combined with our local expertise in the Canada-U.S. corridor. This unique blend ensures that your shipments benefit from international logistics capabilities while adhering to the specific requirements and regulations of North American trade.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const industries = [
    { name: "Automotive", description: "Specialized handling for automotive parts and components" },
    { name: "Technology", description: "Secure storage and handling of electronics and tech equipment" },
    { name: "Retail", description: "Efficient distribution solutions for retail merchandise" },
    { name: "Manufacturing", description: "Industrial cargo handling and supply chain optimization" }
  ]

  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <HeroSection
        title="Container Freight Station (CFS) Shipping Services"
        description="Streamlined supply chain solutions with efficient and reliable cargo handling across the Canada-U.S. border"
        breadcrumb="CFS Shipping Services"
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                  Professional CFS Solutions
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Borderworx Logistics, our Container Freight Station (CFS) services are designed to streamline
                  your supply chain by offering efficient and reliable handling of your cargo.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our facilities are strategically located to facilitate the quick and seamless movement of goods
                  across the Canada-U.S. border, ensuring that your shipments are processed with speed and precision.
                </p>
              </div>

              <div className="relative">
                <div className="relative max-w-lg mx-auto rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/services/cfsShippingService.png"
                    alt="Container Freight Station Shipping Services - Professional cargo handling"
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

        {/* Services Offered */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
              Services Offered
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mb-6">
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
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
              Key Benefits
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Borderworx */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
              Why Choose Borderworx Logistics for CFS?
            </h2>

            <div className="space-y-12">
              {whyChoose.map((reason, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-secondary">
                        {reason.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {reason.description}
                    </p>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="text-center space-y-12">
                        {index === 0 && (
                          <div className="text-center">
                            <svg className="w-20 h-20 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <h4 className="text-xl font-bold text-secondary mb-4">Industry-Specific Solutions</h4>
                          </div>
                        )}
                        {index === 1 && (
                          <div className="text-center">
                            <svg className="w-20 h-20 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h4 className="text-xl font-bold text-secondary mb-2">Eco-Friendly Operations</h4>
                          </div>
                        )}
                        {index === 2 && (
                          <div className="text-center">
                            <svg className="w-20 h-20 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h4 className="text-xl font-bold text-secondary mb-2">Global Reach</h4>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
              Our CFS Process
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">Cargo Arrival</h3>
                <p className="text-gray-600 text-sm">
                  Secure receipt and inspection of incoming cargo at our strategically located facilities
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">Processing</h3>
                <p className="text-gray-600 text-sm">
                  Consolidation, deconsolidation, or cross-docking based on your specific requirements
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">Customs Clearance</h3>
                <p className="text-gray-600 text-sm">
                  Expert assistance with customs documentation and regulatory compliance
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">Final Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Efficient dispatch to final destination with complete tracking and documentation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding hero-gradient text-white">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Optimize Your Supply Chain with Professional CFS Services
              </h2>
              <p className="text-xl text-orange-100 leading-relaxed mb-8">
                Choosing Borderworx Logistics means partnering with a leader in logistics solutions that are
                tailor-made for the Canada-U.S. trade lane. Our commitment to efficiency, reliability, and
                customer satisfaction makes us the ideal choice for businesses looking to optimize their
                supply chain operations.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <p className="text-orange-100">Secure facility operations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-orange-100">Cargo safety and integrity</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">Fast</div>
                  <p className="text-orange-100">Cross-border processing</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get a Quote
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-orange-200 text-orange-100 px-8 py-4 rounded-lg font-semibold hover:bg-orange-200 hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
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
