'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ServiceCard from '@/components/ServiceCard'
import AnimationWrapper from '@/components/AnimationWrapper'
import StaggerContainer, { StaggerItem } from '@/components/StaggerContainer'
import { Service } from '@/types/service'

interface ServicesPageClientProps {
  services: Service[]
}

export default function ServicesPageClient({ services }: ServicesPageClientProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as const
      }
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-orange-600 text-white pt-48 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/background-images/servicePage.png"
            alt="Logistics operations background"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        
        <div className="container-max section-padding relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Comprehensive Logistics Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-orange-100 leading-relaxed"
              variants={itemVariants}
            >
              From warehousing to customs brokerage, we provide end-to-end logistics solutions 
              tailored to your business needs across Canada and the United States.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-light">
        <div className="container-max">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-10" staggerDelay={0.1}>
            {services.map((service, index) => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-max text-center">
          <AnimationWrapper animation="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Optimize Your Logistics?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our logistics experts to discuss your specific needs 
              and discover how we can streamline your supply chain operations.
            </p>
            <div className="flex flex-row sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
              >
                Get Free Consultation
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </>
  )
}

