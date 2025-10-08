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
    <section id="home" className="hero-gradient min-h-screen flex items-center pt-52 ">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            className="text-black"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={itemVariants}
            >
              Global Logistics
              <span className="block">Solutions</span>
            </motion.h1>
            <motion.div 
              className="text-xl md:text-2xl mb-8 text-gray-800 leading-relaxed"
              variants={itemVariants}
            >
              <p className="mb-2">Your Trusted Partner for</p>
              <TypingAnimation 
                words={['Warehousing', 'Transportation', 'Customs Brokerage', 'Trade Compliance', 'Fulfillment Services']}
                className="text-2xl md:text-3xl font-semibold text-black"
              />
            </motion.div>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Link
                href="#contact"
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300 text-center shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="#services"
                className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 text-center"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] as const }}
          >
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 border border-black/20">
              <motion.div 
                className="grid grid-cols-2 gap-6"
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
                  className="bg-white bg-opacity-60 rounded-xl p-6 text-center backdrop-blur-sm border border-black/5"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl font-bold text-black mb-2">100+</div>
                  <div className="text-gray-700">Global Partners</div>
                </motion.div>
                <motion.div 
                  className="bg-white bg-opacity-60 rounded-xl p-6 text-center backdrop-blur-sm border border-black/5"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl font-bold text-black mb-2">$3 Billion+</div>
                  <div className="text-gray-700">Goods Managed</div>
                </motion.div>
                <motion.div 
                  className="bg-white bg-opacity-60 rounded-xl p-6 text-center backdrop-blur-sm border border-black/5"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl font-bold text-black mb-2">24/7</div>
                  <div className="text-gray-700">Support</div>
                </motion.div>
                <motion.div 
                  className="bg-white bg-opacity-60 rounded-xl p-6 text-center backdrop-blur-sm border border-black/5"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl font-bold text-black mb-2">99%</div>
                  <div className="text-gray-700">On-Time</div>
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20 bg-white bg-opacity-20 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-white bg-opacity-30 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-black"
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
