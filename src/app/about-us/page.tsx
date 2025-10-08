'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CountUp from '@/components/CountUp'
import AnimationWrapper from '@/components/AnimationWrapper'
import StaggerContainer, { StaggerItem } from '@/components/StaggerContainer'

export default function AboutUsPage() {

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
              <section className="relative bg-gradient-to-r from-primary to-orange-600 text-white pt-72 overflow-hidden">
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
                  About BorderWorx
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-orange-100 leading-relaxed"
                  variants={itemVariants}
                >
                  Two decades of excellence in cross-border logistics, connecting businesses across North America with seamless supply chain solutions.
                </motion.p>
              </motion.div>
            </div>
          </section>
    
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
     

      <main className="flex-grow">
        {/* Hero Section */}
        {HeroSection()}

        {/* Statistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-max section-padding">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.15}>
              <StaggerItem className="text-center">
                <CountUp end={20} suffix="+" className="text-4xl md:text-5xl font-bold text-primary mb-2" />
                <div className="text-gray-600 font-medium">Years Experience</div>
              </StaggerItem>
              <StaggerItem className="text-center">
                <CountUp end={3.5} decimals={1} prefix="$" suffix="B+" className="text-4xl md:text-5xl font-bold text-primary mb-2" />
                <div className="text-gray-600 font-medium">Goods Managed</div>
              </StaggerItem>
              <StaggerItem className="text-center">
                <CountUp end={250} suffix="K+" className="text-4xl md:text-5xl font-bold text-primary mb-2" />
                <div className="text-gray-600 font-medium">Customs Clearances</div>
              </StaggerItem>
              <StaggerItem className="text-center">
                <CountUp end={2} className="text-4xl md:text-5xl font-bold text-primary mb-2" />
                <div className="text-gray-600 font-medium">Countries Served</div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>
        {/* Our Story Section */}
        <section className="relative py-5 overflow-hidden bg-gray-50">
          {/* Ambient background motion (same style as values section) */}
          <div className="container-max section-padding relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Image */}
              <AnimationWrapper animation="fadeInLeft" className="relative">
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about-us/agreementBackground.png"
                    alt="BorderWorx team and operations"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </AnimationWrapper>

              {/* Right: Content */}
              <AnimationWrapper animation="fadeInRight" delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                      Our Story
                    </h2>
                    <div className="w-16 h-1 bg-primary rounded-full mb-8" />
                  </div>

                  <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                    <p>
                      Founded in 2003, BorderWorx began with a vision to revolutionize cross-border logistics. 
                      Our founder, Dean Wood, brought extensive industry experience from working with some of 
                      Canada's largest transportation and customs corporations.
                    </p>
                    <p>
                      Today, BorderWorx stands as a trusted partner for businesses navigating the complexities 
                      of North American trade. We've successfully managed over $3.5 billion in goods across 
                      borders and processed more than 250,000 customs clearances.
                    </p>
                    <p>
                      Our commitment to excellence and innovation has helped countless companies expand their 
                      market reach and optimize their supply chain operations across Canada and the United States.
                    </p>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-max section-padding">
            <AnimationWrapper animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Leadership Team
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-8" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the visionary leader who built BorderWorx from the ground up, 
                bringing decades of industry expertise to every client relationship.
              </p>
            </AnimationWrapper>

            <AnimationWrapper animation="scaleIn" delay={0.3} className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left: Profile Info */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                        Dean Wood
                      </h3>
                      <p className="text-xl text-primary font-semibold mb-4">
                        Chief Executive Officer & Founder
                      </p>
                      <div className="w-12 h-1 bg-primary rounded-full" />
                    </div>

                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        With over two decades of experience in transportation and customs, 
                        Dean founded BorderWorx to provide businesses with the expertise 
                        and reliability they need for successful cross-border operations.
                      </p>
                      <p>
                        His deep understanding of both Canadian and US logistics landscapes 
                        has positioned BorderWorx as a trusted partner for companies 
                        seeking seamless North American trade solutions.
                      </p>
                    </div>
                  </div>

                  {/* Right: Signature */}
                  <div className="flex justify-center md:justify-end">
                    <div className="relative w-80 h-40 rounded-lg p-6 flex items-center justify-center">
                      <Image
                        src="/images/about-us/signature.png"
                        alt="Dean Wood's signature"
                        width={600}
                        height={160}
                        className="w-full h-auto object-contain opacity-90"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden bg-gray-50">
          {/* Ambient background motion */}
          <div className="pointer-events-none absolute -bottom-40 -right-32 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-orange-400/25 via-primary/20 to-orange-400/25 blur-3xl animate-pulse" />

          <div className="container-max section-padding relative">
            <AnimationWrapper animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Our Core Values</h2>
              <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-8" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Design-forward principles with motion—memorable but refined.</p>
            </AnimationWrapper>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-stretch" staggerDelay={0.2}>
              {/* Card 1 */}
              <StaggerItem className="group relative h-full will-change-transform">
                <div className="animated-frame h-full p-[2px] rounded-2xl bg-gradient-to-r from-primary via-orange-500 to-primary bg-[length:200%_200%] will-change-transform">
                  <div className="values-card h-full rounded-2xl p-6 md:p-8 bg-white/80 backdrop-blur-xl border border-white/40 relative overflow-hidden flex flex-col will-change-transform">
                    <span className="shine" />
                    <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-secondary mb-3 text-center">Reliability</h3>
                    <p className="text-gray-700 text-center leading-relaxed text-base md:text-lg break-words">
                      Predictable operations, transparent updates, and delivery you don't need to second-guess.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mt-6 md:mt-auto">
                      <span className="pill">On‑Time</span>
                      <span className="pill">Consistent</span>
                      <span className="pill">Proactive</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* Card 2 */}
              <StaggerItem className="group relative h-full will-change-transform">
                <div className="animated-frame h-full p-[2px] rounded-2xl bg-gradient-to-r from-primary via-orange-500 to-primary bg-[length:200%_200%] will-change-transform">
                  <div className="values-card h-full rounded-2xl p-6 md:p-8 bg-white/80 backdrop-blur-xl border border-white/40 relative overflow-hidden flex flex-col will-change-transform">
                    <span className="shine" />
                    <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-secondary mb-3 text-center">Innovation</h3>
                    <p className="text-gray-700 text-center leading-relaxed text-base md:text-lg break-words">
                      Practical, measurable improvements—from smarter routing to scalable warehousing.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mt-6 md:mt-auto">
                      <span className="pill">Data‑Driven</span>
                      <span className="pill">Pragmatic</span>
                      <span className="pill">Adaptive</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* Card 3 */}
              <StaggerItem className="group relative h-full will-change-transform">
                <div className="animated-frame h-full p-[2px] rounded-2xl bg-gradient-to-r from-primary via-orange-500 to-primary bg-[length:200%_200%] will-change-transform">
                  <div className="values-card h-full rounded-2xl p-6 md:p-8 bg-white/80 backdrop-blur-xl border border-white/40 relative overflow-hidden flex flex-col will-change-transform">
                    <span className="shine" />
                    <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-secondary mb-3 text-center">Partnership</h3>
                    <p className="text-gray-700 text-center leading-relaxed text-base md:text-lg break-words">
                      Long‑term alignment—your milestones shape our roadmap and daily priorities.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mt-6 md:mt-auto">
                      <span className="pill">Transparent</span>
                      <span className="pill">Collaborative</span>
                      <span className="pill">Outcome‑Focused</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container-max section-padding">
            <AnimationWrapper animation="fadeInUp">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Partner with Us?
                </h2>
                <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                  Join the hundreds of companies that trust BorderWorx for their 
                  cross-border logistics needs. Let's discuss how we can help 
                  optimize your supply chain.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="/quote"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </section>
      </main>

      
    </div>
  )
}

// Scoped styles for animated values section (styled-jsx)
// Keeps effects local to this page and avoids touching global CSS
;<style jsx>{`
  .animated-frame {
    animation: borderShift 6s linear infinite;
    background-size: 200% 200%;
    filter: drop-shadow(0 10px 24px rgba(0,0,0,.08));
  }

  .values-card { transition: transform .35s ease, background .35s ease, box-shadow .35s ease; }
  .group:hover .values-card { transform: translateY(-4px); background: rgba(255,255,255,0.9); box-shadow: 0 12px 30px rgba(17,24,39,.10); }

  .shine {
    position: absolute;
    left: -40%;
    top: -20%;
    width: 40%;
    height: 140%;
    transform: rotate(18deg);
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent);
    opacity: 0;
    animation: sheen 2.8s ease-in-out infinite;
  }
  .group:hover .shine { opacity: .9; }

  .pill { @apply px-3 py-1 rounded-full text-xs md:text-sm font-semibold; background: linear-gradient(to right, rgba(255,255,255,.7), rgba(255,255,255,.9)); color: rgb(17,24,39); border: 1px solid rgba(17,24,39,.08); box-shadow: 0 2px 10px rgba(0,0,0,.04); }

  @keyframes borderShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes sheen {
    0%, 100% { transform: translateX(-40%) rotate(18deg); }
    50% { transform: translateX(220%) rotate(18deg); }
  }
`}</style>


