import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import { getContactInfo } from '@/utils/contactInfo'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Premier Warehousing Solutions | BorderWorx Logistics',
  description: 'Specialized warehousing services across North America with 49,000 sq ft in GTA and 45,000 sq ft in Buffalo. Strategic locations for cross-border logistics.',
}

export default function WarehousingPage() {
  const contactInfo = getContactInfo()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Premier Warehousing Solutions in the USA and Canada"
        description="Optimizing Your Supply Chain with Strategic Warehousing"
        breadcrumb="Warehousing"
      />
      {/* Main Content */}
      <main className="flex-grow">
        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg text-gray-700 leading-relaxed">
                Borderworx is at the forefront of providing specialized warehousing services across North America.
                With state-of-the-art facilities located in the Greater Toronto Area (GTA), Niagara Falls, and Buffalo,
                we offer comprehensive warehousing solutions tailored to meet the diverse needs of your business.
                Our commitment is to streamline your operations, enhance your distribution efficiency, and support
                your growth on both sides of the border.
              </p>
            </div>
          </div>
        </section>

        {/* Warehouse Image */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                Borderworx USA Warehouse
              </h2>
              <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/warehousing.jpg"
                  alt="Borderworx USA Warehouse - Modern logistics facility"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Facilities */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
              Our Facilities
            </h2>

            <div className=" grid lg:grid-cols-2 gap-12">
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
                  Nestled in the heart of the GTA, our Canadian warehouse spans <strong>49,000 square feet</strong>,
                  a testament to our capability to manage inventory of all sizes with unparalleled precision.
                  This facility is designed to support a wide range of industries, ensuring your products are
                  stored, managed, and distributed efficiently and effectively.
                </p>
                <div className="flex items-center text-primary font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Greater Toronto Area (GTA)
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
                  Our US warehouse, located near Buffalo, offers <strong>45,000 square feet</strong> of optimized
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

        {/* Our Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
              Our Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Customized Warehousing Solutions */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Customized Warehousing Solutions</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every business is unique, and so are your warehousing needs. We offer tailored storage solutions
                  that align with your specific requirements, whether you're dealing with perishable goods,
                  electronics, apparel, or any other type of merchandise.
                </p>
              </div>

              {/* Inventory Management */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Inventory Management</h3>
                <p className="text-gray-700 leading-relaxed">
                  With advanced systems in place, we ensure real-time inventory tracking and management.
                  Our team is dedicated to maintaining accuracy and visibility of your stock levels,
                  giving you the peace of mind to focus on growing your business.
                </p>
              </div>

              {/* Flexible Distribution Options */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Flexible Distribution Options</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our strategic locations in Canada and the US enable us to offer flexible and efficient
                  distribution solutions. Whether it's local deliveries or cross-border shipping, we have
                  the resources and network to ensure your products reach their destination on time.
                </p>
              </div>

              {/* Scalable Storage Solutions */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Scalable Storage Solutions</h3>
                <p className="text-gray-700 leading-relaxed">
                  As your business grows, so do your warehousing needs. Our facilities are designed to
                  accommodate scalability, allowing you to expand your storage space without the hassle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Borderworx */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
              Why Choose Borderworx?
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
                  of your business, fill out our warehouse quote form or contact us to get a warehousing quote.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-orange-600 text-white">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Elevate Your Warehousing Strategy?
              </h2>
              <p className="text-xl text-orange-100 leading-relaxed mb-8">
                Contact Borderworx today to get a quote and to learn more about how our warehousing services
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

      <Footer />
      <Chatbot />
    </div>
  )
}
