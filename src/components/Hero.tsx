'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import TypingAnimation from './TypingAnimation'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.3
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
    <section id="home" className="relative min-h-screen flex items-center pt-20 sm:pt-32 md:pt-40 lg:pt-52">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background-images/bizons-orange.png"
          alt="Logistics operations background"
          fill
          className="object-cover hero-bg-image"
          priority
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Persistent Thought Bubble - Right Side */}
        <div className="absolute inset-0 z-10">
          {/* Main Bubble - Right Side */}
          <motion.div
            className="absolute top-24 sm:top-1/4 md:top-20 lg:top-1/4 right-4 sm:right-8 md:right-12 lg:right-16 transform -translate-y-1/2"
            initial={{ opacity: 0, scale: 0, x: 50, rotate: -10 }}
            animate={{ 
              opacity: 1,
              scale: 1,
              x: 0,
              rotate: 0
            }}
            transition={{ 
              duration: 1.2,
              delay: 2,
              ease: [0.25, 0.4, 0.25, 1]
            }}
          >
            <Link href="/buffalo-culture" className="group cursor-pointer">
              <div className="relative">
                {/* Thought Bubble */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl md:rounded-3xl px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-5 shadow-lg sm:shadow-xl md:shadow-2xl border border-white/20 group-hover:border-white/30 transition-all duration-500 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.08, 
                    rotate: [0, -1, 1, 0],
                    boxShadow: "0 25px 50px rgba(237, 90, 40, 0.25)"
                  }}
                  animate={{ 
                    y: [0, -6, 0],
                    rotate: [0, 0.5, -0.5, 0],
                    boxShadow: [
                      "0 15px 35px rgba(0,0,0,0.1)",
                      "0 20px 45px rgba(237, 90, 40, 0.15)",
                      "0 15px 35px rgba(0,0,0,0.1)"
                    ]
                  }}
                  transition={{ 
                    y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-2 left-2 w-8 h-8 border border-orange-400 rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 border border-orange-300 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-orange-500 rounded-full"></div>
                  </div>
                  
                  <div className="text-center relative z-10">
                    <motion.div 
                      className="text-sm sm:text-lg md:text-lg font-black text-white group-hover:text-orange-300 transition-colors duration-500 mb-1 sm:mb-2 tracking-wide"
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(237, 90, 40, 0)",
                          "0 0 10px rgba(237, 90, 40, 0.3)",
                          "0 0 0px rgba(237, 90, 40, 0)"
                        ]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      We follow Buffalo Culture
                    </motion.div>
                    <motion.div 
                      className="text-xs sm:text-xs md:text-sm font-bold text-orange-200 group-hover:text-orange-300 transition-colors duration-300 uppercase tracking-wider"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.8, 1, 0.8],
                        letterSpacing: ["0.1em", "0.15em", "0.1em"]
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Click to know more!
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Speech Bubble Tail */}
                <motion.div 
                  className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent"
                  animate={{
                    borderRightColor: ["rgba(255,255,255,0.95)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.95)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ borderRightColor: "rgba(255,255,255,0.95)" }}
                />
                
                
                {/* Pulsing Dot */}
                <motion.div
                  className="absolute top-1/2 -left-16 sm:-left-20 md:-left-24 lg:-left-28 transform -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-lg"
                  animate={{ 
                    scale: [1, 1.8, 1],
                    opacity: [0.6, 1, 0.6],
                    rotate: [0, 180, 360],
                    boxShadow: [
                      "0 0 0px rgba(237, 90, 40, 0)",
                      "0 0 15px rgba(237, 90, 40, 0.6)",
                      "0 0 0px rgba(237, 90, 40, 0)"
                    ]
                  }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                />
                
                {/* Additional Pulsing Rings */}
                <motion.div
                  className="absolute top-1/2 -left-16 sm:-left-20 md:-left-24 lg:-left-28 transform -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 border-2 border-orange-400/60 rounded-full"
                  animate={{ 
                    scale: [1, 2.5, 1],
                    opacity: [0.8, 0, 0.8]
                  }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-1/2 -left-16 sm:-left-20 md:-left-24 lg:-left-28 transform -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 border border-orange-300/40 rounded-full"
                  animate={{ 
                    scale: [1, 3, 1],
                    opacity: [0.6, 0, 0.6]
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
                />
              </div>
            </Link>
          </motion.div>

          {/* Floating Particles */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400/60 rounded-full"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: 0.5
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-300/60 rounded-full"
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.4, 1, 0.4],
              scale: [0.3, 1, 0.3]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              delay: 1.5
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-orange-500/60 rounded-full"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
              scale: [0.4, 1, 0.4]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: 2
            }}
          />
        </div>
      </div>
      
      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            className="text-white order-2 lg:order-1"
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
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 leading-relaxed"
              variants={itemVariants}
            >
              <p className="mb-2">Your Trusted Partner for</p>
              <TypingAnimation 
                key="typing-animation"
                words={['Warehousing', 'Transportation', 'Customs Brokerage', 'Trade Compliance', 'Fulfillment Services']}
                finalText="One stop shop for 3PL"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient"
              />
            </motion.div>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              variants={itemVariants}
            >
              <Link
                href="/contact"
                className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-center shadow-lg text-sm sm:text-base"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 text-center text-sm sm:text-base"
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
            transition={{ duration: 0.8, delay: 1.5, ease: [0.25, 0.4, 0.25, 1] as const }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-white/20">
              <motion.div 
                className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 1
                    }
                  }
                }}
              >
                {/* Stats Cards */}
                <motion.div 
                  className="bg-white/20 rounded-xl p-3 sm:p-4 lg:p-6 text-center backdrop-blur-sm border border-white/10"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">100+</div>
                  <div className="text-gray-200 text-xs sm:text-sm lg:text-base">Global Partners</div>
                </motion.div>
                <motion.div 
                  className="bg-white/20 rounded-xl p-3 sm:p-4 lg:p-6 text-center backdrop-blur-sm border border-white/10"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">$3B+</div>
                  <div className="text-gray-200 text-xs sm:text-sm lg:text-base">Goods Managed</div>
                </motion.div>
                <motion.div 
                  className="bg-white/20 rounded-xl p-3 sm:p-4 lg:p-6 text-center backdrop-blur-sm border border-white/10"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">24/7</div>
                  <div className="text-gray-200 text-xs sm:text-sm lg:text-base">Support</div>
                </motion.div>
                <motion.div 
                  className="bg-white/20 rounded-xl p-3 sm:p-4 lg:p-6 text-center backdrop-blur-sm border border-white/10"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">99.9%</div>
                  <div className="text-gray-200 text-xs sm:text-sm lg:text-base">On-Time</div>
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full"
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
              className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/30 rounded-full"
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
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
