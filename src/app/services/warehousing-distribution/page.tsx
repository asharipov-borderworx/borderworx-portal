import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import { getContactInfo } from '@/utils/contactInfo'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Warehousing & Distribution Solutions | BorderWorx Logistics',
  description: 'Canada\'s leading 3PL fulfillment service with 100,000+ sqft in GTA and 100,000+ sqft in Buffalo. FTZ and CTPAT certified.',
}

export default function WarehousingDistributionPage() {
  const contactInfo = getContactInfo()

  const services = [
    {
      title: "No Minimums",
      description: "We are here to help you grow your business at any stage and welcome businesses of all sizes.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>
      )
    },
    {
      title: "Co-Pack / Customization",
      description: "We support our clients with kitting, co-packing and customization of products such as heat press, laser engraving and UPC codes.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
        </svg>
      )
    },
    {
      title: "Pick & Pack",
      description: "We provide a hands-off experience and pick your items from our warehouse as they sell and pack them for shipment.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
        </svg>
      )
    },
    {
      title: "Returns",
      description: "Use our warehouse address for your returns and we will consolidate your returns and take care of the rest.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
        </svg>
      )
    },
    {
      title: "Online Warehouse Management System (WMS)",
      description: "Access of your inventory anywhere, worldwide.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      title: "Certified Foreign Trade Zone (FTZ)",
      description: "Reduce your import and export costs by deferring, reducing, or eliminating customs duties.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 3V21M15.679 6.63439C14.063 4.2691 7.94541 4.02196 7.94541 8.16745C7.94541 12.3129 16.7524 10.33 16.2439 15.2118C15.8199 19.2823 9.19299 19.3384 7.21094 16.0891" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Certified Centralized Examination Station (CES)",
      description: "Have ease of mind knowing that we will be the only ones handling your shipments if US Customs and Border Protection requires an examination.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
        </svg>
      )
    },
    {
      title: "Container Freight Station (CFS)",
      description: "Our facilities are ready to receive and unload containerized shipments and process them however your business requires.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
        </svg>
      )
    },
    {
      title: "Amazon FBA Prep Center",
      description: "We can unpack, label, and repack your shipments and get them ready for Amazon FBA.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
        </svg>
      )
    },
    {
      title: "CTPAT Certified",
      description: "Faster clearance at borders to keep your business operating smoothly.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    },
    {
      title: "Foreign Trade Zone & CFS Bonded Facility",
      description: "Foreign Trade Zone & CFS bonded facility in Niagara County, New York.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      )
    },
    {
      title: "Customized Warehousing Solutions",
      description: "Every business is unique, and so are your warehousing needs. We offer tailored storage solutions that align with your specific requirements, whether you're dealing with perishable goods, electronics, apparel, or any other type of merchandise.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Inventory Management",
      description: "With advanced systems in place, we ensure real-time inventory tracking and management. Our team is dedicated to maintaining accuracy and visibility of your stock levels, giving you the peace of mind to focus on growing your business.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Flexible Distribution Options",
      description: "Our strategic locations in Canada and the US enable us to offer flexible and efficient distribution solutions. Whether it's local deliveries or cross-border shipping, we have the resources and network to ensure your products reach their destination on time.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "Scalable Storage Solutions",
      description: "As your business grows, so do your warehousing needs. Our facilities are designed to accommodate scalability, allowing you to expand your storage space without the hassle.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">

      <HeroSection
        title="Warehousing and Distribution Solutions for Every Business"
        description="Canada's leading 3PL fulfillment service in the Greater Toronto Area (GTA), Niagara Falls and Buffalo"
        breadcrumb="Warehousing & Distribution"
        />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg text-gray-700 leading-relaxed">
                Borderworx is at the forefront of providing specialized warehousing and distribution services across North America.
                With state-of-the-art facilities located in the Greater Toronto Area (GTA), Niagara Falls, and Buffalo,
                we offer comprehensive 3PL fulfillment solutions tailored to meet the diverse needs of your business.
                With over 100,000 sqft of warehousing in Canada and an additional 100,000 sqft in the United States, our space is doubling every few years—making us ready to handle the most complex warehousing and distribution challenges to take your business to the next level.
              </p>
            </div>
          </div>
        </section>

        {/* Warehouse Images */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12">
                Our Warehousing & Distribution Facilities
              </h2>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Primary Warehouse */}
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/services/warehousing.jpg"
                    alt="BorderWorx Warehousing Facility - Primary warehouse operations"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white text-xl font-bold">Primary Warehousing Operations</h3>
                    <p className="text-gray-200 text-sm">State-of-the-art storage and handling facilities</p>
                  </div>
                </div>

                {/* Distribution Center */}
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/services/warehousingAndDistribution2.png"
                    alt="BorderWorx Distribution Center - Advanced fulfillment operations"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white text-xl font-bold">Distribution & Fulfillment Center</h3>
                    <p className="text-gray-200 text-sm">Advanced pick, pack, and ship operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Facilities */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
              Our Strategic Locations
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Canada Facility */}
              <div className="relative bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl shadow-lg">
                <div className="absolute inset-0 opacity-5">
                  <Image
                    src="/images/services/canadianFlag.png"
                    alt="Canadian Flag Background"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center mb-6">
                  <h3 className="text-2xl font-bold text-secondary">Canada</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nestled in the heart of the GTA, our Canadian warehouse spans <strong>100,000+ square feet</strong>,
                  a testament to our capability to manage inventory of all sizes with unparalleled precision.
                  This facility is designed to support a wide range of industries, ensuring your products are
                  stored, managed, and distributed efficiently and effectively.
                </p>
                <div className="flex items-center text-primary font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Greater Toronto Area (GTA) & Niagara Falls
                </div>
              </div>

              {/* USA Facility */}
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg">
                <div className="absolute inset-0 opacity-5">
                  <Image
                    src="/images/services/usaFlag.png"
                    alt="USA Flag Background"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center mb-6">
                  <h3 className="text-2xl font-bold text-secondary">United States</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our US warehouse, located near Buffalo, offers <strong>100,000+ square feet</strong> of optimized
                  storage space. This facility is equipped with the latest in warehousing technology, providing
                  secure and reliable solutions for your storage needs. Whether you're looking to expand your
                  reach in the US market or need a dependable partner for cross-border logistics, we're here
                  to facilitate your success.
                </p>
                <div className="flex items-center text-primary font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Buffalo, New York
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
              Comprehensive Warehousing & Distribution Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Why Choose Borderworx */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
              Why Choose BorderWorx?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">Strategic Locations</h3>
                <p className="text-gray-600 text-sm">
                  Our warehouses in the GTA, Niagara Falls, and Buffalo are strategically positioned to
                  maximize your distribution efficiency across North America.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">Expertise and Reliability</h3>
                <p className="text-gray-600 text-sm">
                  With years of experience in warehousing and logistics, our team is equipped to handle
                  even the most complex storage and distribution challenges.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">Commitment to Excellence</h3>
                <p className="text-gray-600 text-sm">
                  We are dedicated to providing high-quality service and support to ensure your business
                  thrives in today's competitive market.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3V21M15.679 6.63439C14.063 4.2691 7.94541 4.02196 7.94541 8.16745C7.94541 12.3129 16.7524 10.33 16.2439 15.2118C15.8199 19.2823 9.19299 19.3384 7.21094 16.0891" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">Competitive Pricing</h3>
                <p className="text-gray-600 text-sm">
                  We pride ourselves in offering the best value service available regardless of the size
                  of your business. Contact us to get a warehousing quote.
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
                Ready to Transform Your Supply Chain?
              </h2>
              <p className="text-xl text-orange-100 leading-relaxed mb-8">
                Contact BorderWorx today to learn more about how our warehousing and distribution services
                can transform your supply chain and take your business to the next level. Whether you're in
                the USA or Canada, we're here to provide the solutions you need for success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Contact Us
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
