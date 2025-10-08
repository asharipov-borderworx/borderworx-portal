'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimationWrapper from '@/components/AnimationWrapper'
import StaggerContainer, { StaggerItem } from '@/components/StaggerContainer'
import { Resource } from '@/data/resources'

interface ResourcesPageClientProps {
  resources: Resource[]
}

export default function ResourcesPageClient({ resources }: ResourcesPageClientProps) {
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
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white pt-48 overflow-hidden">
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
              Resources
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-orange-100 leading-relaxed"
              variants={itemVariants}
            >
              Practical tools and insights to optimize your cross‑border logistics.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <AnimationWrapper animation="fadeInUp" className="mb-10 text-center">
            <p className="text-gray-600">Browse our latest guides, checklists, and playbooks</p>
          </AnimationWrapper>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch" staggerDelay={0.15}>
            {resources.map((r) => (
              <StaggerItem key={r.slug}>
                <article className="group relative h-full">
                  <div className="h-full rounded-2xl p-[1px] bg-gradient-to-br from-primary/30 via-orange-400/20 to-primary/30 transition-colors duration-300 group-hover:from-primary/50 group-hover:to-orange-500/40">
                    <div className="h-full rounded-2xl bg-white shadow-lg p-6 flex flex-col">
                      <div className="flex items-center justify-between mb-4 text-sm">
                        <span className="px-3 py-1 rounded-full bg-primary text-white">{r.category}</span>
                        <span className="text-gray-500">{r.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary mb-2 leading-snug">{r.title}</h3>
                      <p className="text-gray-600 mb-6 line-clamp-3">{r.excerpt}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <Link
                          href={`/resources/${r.slug}`}
                          className="inline-flex items-center gap-2 text-primary hover:text-orange-600 font-semibold"
                        >
                          Read More
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  )
}

