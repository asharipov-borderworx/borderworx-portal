import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import ServiceCard from '@/components/ServiceCard'
import getServiceInfo from '@/utils/serviceInfo'

export const metadata: Metadata = {
  title: 'Logistics Services | BorderWorx - Comprehensive Supply Chain Solutions',
  description: 'Comprehensive logistics services including warehousing, customs brokerage, FBA prep, container freight, and fulfillment solutions for Canada and USA.',
  keywords: 'warehousing, distribution, customs brokerage, trade compliance, FBA, Amazon fulfillment, container freight, logistics services',
}

export default function ServicesPage() {
  const services = getServiceInfo()
  return (
    <div className="min-h-screen">
      <Header />
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-orange-600 text-white pt-60  overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Logistics Services
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
              From warehousing to customs brokerage, we provide end-to-end logistics solutions 
              tailored to your business needs across Canada and the United States.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          {/* <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Our Logistics Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of logistics services designed to optimize 
              your supply chain and drive business growth.
            </p>
          </div> */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our logistics experts to discuss your specific needs 
            and discover how we can streamline your supply chain operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
            >
              Get Free Consultation
            </Link>
            <Link
              href="tel:+19058776036"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-secondary transition-all duration-300"
            >
              Call: +1 (905) 877-6036
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}
