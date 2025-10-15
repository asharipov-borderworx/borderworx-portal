'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import TypingAnimation from './TypingAnimation'

export default function Hero() {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const
      }
    }
  }

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center pt-20 sm:pt-32 md:pt-40 lg:pt-52">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            className="text-black order-2 lg:order-1"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Global Logistics
              <span className="block">Solutions</span>
            </motion.h1>
            <motion.div 
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-800 leading-relaxed"
              variants={itemVariants}
            >
              <p className="mb-2">Your Trusted Partner for</p>
              <TypingAnimation 
                words={['Warehousing', 'Transportation', 'Customs Brokerage', 'Trade Compliance', 'Fulfillment Services']}
                finalText="One stop shop for 3PL"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-100"
              />
            </motion.div>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              variants={itemVariants}
            >
              <Link
                href="/contact"
                className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300 text-center shadow-lg text-sm sm:text-base"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="border-2 border-black text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 text-center text-sm sm:text-base"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] as const }}
          >
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-black/100">
              <motion.div 
                className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.8
                    }
                  }
                }}
              >
                {/* Stats Cards */}
                <motion.div 
                  className="bg-white bg-opacity-60 rounded-xl p-3 sm:p-4 lg:p-6 text-center backdrop-blur-sm border border-black/5"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-1 sm:mb-2">100+</div>
                  <div className="text-gray-700 text-xs sm:text-sm lg:text-base">Global Partners</div>
                </motion.div>
                <motion.div 
                  className="bg-white bg-opacity-60 rounded-xl p-3 sm:p-4 lg:p-6 text-center backdrop-blur-sm border border-black/5"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-1 sm:mb-2">$3B+</div>
                  <div className="text-gray-700 text-xs sm:text-sm lg:text-base">Goods Managed</div>
                </motion.div>
                <motion.div 
                  className="bg-white bg-opacity-60 rounded-xl p-3 sm:p-4 lg:p-6 text-center backdrop-blur-sm border border-black/5"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-1 sm:mb-2">24/7</div>
                  <div className="text-gray-700 text-xs sm:text-sm lg:text-base">Support</div>
                </motion.div>
                <motion.div 
                  className="bg-white bg-opacity-60 rounded-xl p-3 sm:p-4 lg:p-6 text-center backdrop-blur-sm border border-black/5"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-1 sm:mb-2">99%</div>
                  <div className="text-gray-700 text-xs sm:text-sm lg:text-base">On-Time</div>
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white bg-opacity-20 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white bg-opacity-30 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
