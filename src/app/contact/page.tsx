'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import ContactInfoCard from '@/components/ContactInfoCard'
import AnimationWrapper from '@/components/AnimationWrapper'

export default function ContactPage() {

  function HeroSection() {
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
              <section className="relative hero-gradient text-white pt-48 overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/background-images/servicePage.png"
                  alt="Logistics operations background"
                  className="w-full h-full object-cover opacity-20"
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
                  Contact Borderworx
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-orange-100 leading-relaxed"
                  variants={itemVariants}
                >
                  We're here to help. Reach out to our team and we'll get back to you promptly.
                </motion.p>
              </motion.div>
            </div>
          </section>
    
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      {HeroSection()}
      {/* Contact info + form */}
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container-max section-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact info column */}
              <AnimationWrapper animation="fadeInLeft" delay={0.2}>
                <div className="space-y-6">
                  <ContactInfoCard country={"Canada"} />
                  <ContactInfoCard country={"USA"} />
                </div>
              </AnimationWrapper>
              {/* Contact form card */}
              <AnimationWrapper animation="fadeInRight" delay={0.3}>
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-secondary mb-6">Send us a message</h2>
                  <ContactForm />
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}


