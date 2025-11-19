import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import { getContactInfo } from '@/utils/contactInfo'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Transportation & Trucking Services | BorderWorx Logistics',
  description: 'Comprehensive freight transportation solutions including small parcel consolidations, LTL, truckload, and international freight services with seamless cross-border delivery.',
}

export default function TransportationPage() {
  const contactInfo = getContactInfo()

  const services = [
    {
      title: "Small Parcel Consolidations",
      description: "Efficient consolidation services that combine multiple small shipments to reduce costs and optimize delivery schedules.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
        </svg>
      )
    },
    {
      title: "LTL Services",
      description: "Less-than-truckload shipping solutions that provide cost-effective transportation for shipments that don't require a full trailer.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      )
    },
    {
      title: "Truckload Services",
      description: "Full truckload shipping for larger shipments requiring dedicated trailers, ensuring faster transit times and enhanced security.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
        </svg>
      )
    },
    {
      title: "International Freight & Drayage",
      description: "Comprehensive international shipping solutions with specialized drayage services for seamless container movement between ports, rail yards, and warehouses.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    }
  ]

  const capabilities = [
    "Real-time shipment tracking and visibility",
    "Temperature-controlled transportation for sensitive cargo",
    "Cross-border expertise with seamless customs coordination",
    "Flexible pickup and delivery scheduling",
    "Expedited and time-critical shipping options",
    "Professional handling of specialized cargo"
  ]

  const benefits = [
    {
      title: "Cost Optimization",
      description: "Strategic consolidation and mode selection to minimize transportation costs while maintaining service quality.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 3V21M15.679 6.63439C14.063 4.2691 7.94541 4.02196 7.94541 8.16745C7.94541 12.3129 16.7524 10.33 16.2439 15.2118C15.8199 19.2823 9.19299 19.3384 7.21094 16.0891" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "bg-green-500"
    },
    {
      title: "Reliable Transit Times",
      description: "99.9% on-time delivery rate with proactive monitoring and contingency planning for uninterrupted service.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      color: "bg-blue-500"
    },
    {
      title: "Comprehensive Coverage",
      description: "Extensive network coverage across North America with specialized international freight capabilities.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      color: "bg-primary"
    }
  ]

  const drayageServices = [
    {
      title: "Port Drayage",
      description: "Efficient container movement from seaports to inland destinations with coordinated scheduling and tracking.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
        </svg>
      ),
      gradient: "from-blue-500 to-blue-600",
      stat: "Major Ports",
      statValue: "All"
    },
    {
      title: "Rail Drayage",
      description: "Seamless intermodal transfers between rail terminals and final delivery locations.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
        </svg>
      ),
      gradient: "from-purple-500 to-purple-600",
      stat: "Intermodal",
      statValue: "Transfer"
    },
    {
      title: "Container Yard Management",
      description: "Professional handling of containers including storage, positioning, and chassis management.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
        </svg>
      ),
      gradient: "from-green-500 to-green-600",
      stat: "Container",
      statValue: "Storage"
    },
    {
      title: "Cross-Border Drayage",
      description: "Specialized cross-border container movement with integrated customs clearance coordination.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      gradient: "from-orange-500 to-red-500",
      stat: "Cross-Border",
      statValue: "Expertise"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <HeroSection
        title="Transportation & Trucking Solutions"
        description="Comprehensive freight transportation services from small parcels to full truckloads, with seamless international delivery"
        breadcrumb="Transportation Services"
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our transportation and trucking services provide flexible, reliable solutions for all your freight needs.
                Whether you're shipping small parcels, partial loads, full truckloads, or managing international freight,
                our comprehensive transportation network ensures your cargo reaches its destination on time and in perfect condition.
                With advanced tracking technology and experienced logistics professionals, we deliver peace of mind with every shipment.
              </p>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
              Complete Transportation Solutions
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
              Our Transportation Capabilities
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Drayage Services Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="container-max relative z-10">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <div className="inline-block mb-4">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Specialized Services
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                International Freight & Drayage Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our specialized drayage services ensure efficient container movement and seamless intermodal coordination,
                bridging the gap between ports, rail terminals, and your final destination.
              </p>
            </div>

            {/* Enhanced Service Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              {drayageServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${service.gradient} p-6 relative`}>
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-white text-opacity-90 text-xs font-medium uppercase tracking-wide">
                          {service.stat}
                        </div>
                        <div className="text-white text-lg font-bold">
                          {service.statValue}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                </div>
              ))}
            </div>

            {/* Enhanced Stats Section */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Port Operations</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-gray-600 font-medium">On-Time Delivery</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-gray-600 font-medium">Routes Covered</div>
              </div>
            </div>

            {/* Enhanced Cross-Border Section */}
            <div className="relative bg-gradient-to-br from-primary via-orange-600 to-red-500 text-white p-10 rounded-2xl max-w-5xl mx-auto overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                  Seamless Cross-Border Expertise
                </h3>
                <p className="text-lg text-orange-100 leading-relaxed text-center max-w-3xl mx-auto mb-6">
                  Our international freight services include integrated customs brokerage coordination, ensuring
                  smooth cross-border movements between Canada and the USA with full compliance and minimal delays.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    Customs Coordination
                  </span>
                  <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    Full Compliance
                  </span>
                  <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    Minimal Delays
                  </span>
                  <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    Real-Time Updates
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
              Why Choose Our Transportation Services?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-secondary mb-6 text-center">
                  Advanced Tracking & Visibility
                </h3>
                <p className="text-gray-700 leading-relaxed text-center mb-6">
                  Stay informed every step of the way with our real-time tracking system. Monitor your shipments,
                  receive automated updates, and maintain complete visibility throughout the transportation process.
                </p>
                <div className="flex justify-center">
                  <div className="inline-flex items-center bg-white px-6 py-3 rounded-lg shadow-sm">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="font-semibold text-secondary">24/7 Shipment Monitoring</span>
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
                Ready to Optimize Your Transportation?
              </h2>
              <p className="text-xl text-orange-100 leading-relaxed mb-8">
                From small parcels to full truckloads, from local deliveries to international freight –
                we have the expertise and infrastructure to handle all your transportation needs efficiently and reliably.
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
