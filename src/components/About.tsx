import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CountUp from '@/components/CountUp'

export default function AboutUsPage() {

  function HeroSection() {
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
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About BorderWorx
                </h1>
                <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
                Two decades of excellence in cross-border logistics, connecting businesses across North America with seamless supply chain solutions.

                </p>
              </div>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <CountUp end={20} suffix="+" className="text-4xl md:text-5xl font-bold text-primary mb-2" />
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <CountUp end={3.5} decimals={1} prefix="$" suffix="B+" className="text-4xl md:text-5xl font-bold text-primary mb-2" />
                <div className="text-gray-600 font-medium">Goods Managed</div>
              </div>
              <div className="text-center">
                <CountUp end={250} suffix="K+" className="text-4xl md:text-5xl font-bold text-primary mb-2" />
                <div className="text-gray-600 font-medium">Customs Clearances</div>
              </div>
              <div className="text-center">
                <CountUp end={2} className="text-4xl md:text-5xl font-bold text-primary mb-2" />
                <div className="text-gray-600 font-medium">Countries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container-max section-padding">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Image */}
              <div className="relative">
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
              </div>

              {/* Right: Content */}
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

                <div className="flex flex-wrap gap-4">
                  <div className="bg-primary text-white px-6 py-3 rounded-full font-semibold">
                    Trusted Partner
                  </div>
                  <div className="bg-orange-100 text-primary px-6 py-3 rounded-full font-semibold">
                    Industry Leader
                  </div>
                  <div className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold">
                    Cross-Border Experts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-max section-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Leadership Team
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-8" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the visionary leader who built BorderWorx from the ground up, 
                bringing decades of industry expertise to every client relationship.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
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
            </div>
          </div>
        </section>

        {/* Values Section - Elevated glass cards with gradient accents */}
        <section className="relative py-24 overflow-hidden">
          {/* Decorative gradient orbs */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-orange-400/20 blur-3xl" />

          <div className="container-max section-padding relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Our Core Values
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-8" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A modern foundation—practical, people-first, and built to scale with our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Value Card 1 */}
              <div className="group relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-orange-400/25 to-primary/30 opacity-0 blur-xl group-hover:opacity-100 transition duration-500" aria-hidden />
                <div className="relative h-full rounded-2xl border border-white/30 bg-white/80 backdrop-blur shadow-xl p-8">
                  <div className="-mt-14 mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-orange-500 text-white grid place-items-center shadow-lg rotate-3 group-hover:rotate-0 transition duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary text-center mb-3">Reliability</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    We design dependable processes and promise clear communication—so deliveries land on time and expectations are met every step of the way.
                  </p>
                  <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                </div>
              </div>

              {/* Value Card 2 */}
              <div className="group relative md:-mt-6 md:mb-6">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-orange-400/25 to-primary/30 opacity-0 blur-xl group-hover:opacity-100 transition duration-500" aria-hidden />
                <div className="relative h-full rounded-2xl border border-white/30 bg-white/80 backdrop-blur shadow-xl p-8">
                  <div className="-mt-14 mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-orange-500 text-white grid place-items-center shadow-lg -rotate-3 group-hover:rotate-0 transition duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary text-center mb-3">Innovation</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    From data-driven routing to flexible warehouse solutions, we embrace practical innovation that reduces cost and increases speed.
                  </p>
                  <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                </div>
              </div>

              {/* Value Card 3 */}
              <div className="group relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-orange-400/25 to-primary/30 opacity-0 blur-xl group-hover:opacity-100 transition duration-500" aria-hidden />
                <div className="relative h-full rounded-2xl border border-white/30 bg-white/80 backdrop-blur shadow-xl p-8">
                  <div className="-mt-14 mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-orange-500 text-white grid place-items-center shadow-lg rotate-1 group-hover:rotate-0 transition duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary text-center mb-3">Partnership</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    We prioritize long-term relationships and proactive support—your goals guide our roadmap, not the other way around.
                  </p>
                  <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container-max section-padding">
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
          </div>
        </section>
      </main>

      
    </div>
  )
}


