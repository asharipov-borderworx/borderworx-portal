import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimationWrapper from '@/components/AnimationWrapper'

export const metadata: Metadata = {
  title: 'Buffalo Culture | Our Core Principles | BorderWorx Logistics',
  description: 'Discover the rich buffalo culture that defines our approach to business, teamwork, and community at BorderWorx Logistics.',
  keywords: 'buffalo culture, teamwork, community, business values, BorderWorx culture, logistics culture',
}

export default function BuffaloCulturePage() {
  const cultureCharacteristics = [
    {
      title: "FORWARD-THINKING LOGISTICS",
      description: "We anticipate supply chain disruptions and market changes before they impact your shipments, ensuring continuous operations.",
      imagePlaceholder: "/images/buffalo-culture/forward-thinking.png"
    },
    {
      title: "TEAM-FIRST LEADERSHIP",
      description: "We build exceptional warehousing and customs teams through genuine mentorship, clear processes, and empowering our people to deliver excellence.",
      imagePlaceholder: "/images/buffalo-culture/authentic-leadership.png"
    },
    {
      title: "PROACTIVE PROBLEM SOLVING",
      description: "We tackle complex customs clearance and distribution challenges immediately, turning potential delays into competitive advantages.",
      imagePlaceholder: "/images/buffalo-culture/proactive-solutions.png"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Same as Home Page */}
      <AnimationWrapper>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/background-images/bizons-orange.png"
              alt="Buffalo Culture Background"
              fill
              className="object-cover hero-bg-image"
              priority
              sizes="100vw"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/30 rounded-full blur-lg animate-pulse delay-2000"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block mb-8">
                <span className="text-orange-300 text-sm font-semibold tracking-wider uppercase">Our Foundation</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight animate-fadeInUp">
                <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                  BUFFALO
                </span>
                <br />
                <span className="text-gray-200 text-4xl md:text-6xl animate-fadeInUp delay-200">CULTURE</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-12 max-w-4xl mx-auto animate-fadeInUp delay-400">
                Where strategic logistics meets fearless innovation. We don't just move freight—we move mountains.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp delay-600">
                <Link href="/about-us" className="group relative px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <span className="relative z-10">Explore Our Story</span>
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
                  Join the Herd
                </Link>
              </div>
            </div>
          </div>
          

        </section>
      </AnimationWrapper>

      {/* Core Principles Section */}
      <AnimationWrapper>
        <section className="py-24 bg-gradient-to-b from-orange-50 to-white relative">
          {/* Background Hexagons */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-orange-400 rotate-45"></div>
            <div className="absolute top-32 right-20 w-24 h-24 border-2 border-orange-500 rotate-12"></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 border-2 border-orange-300 rotate-45"></div>
            <div className="absolute bottom-40 right-1/4 w-28 h-28 border-2 border-orange-400 rotate-12"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Our <span className="text-orange-500">Core</span> Principles
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                These principles guide how we approach cross-border logistics challenges and build lasting partnerships.
              </p>
            </div>
            
            {/* Hexagonal Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {cultureCharacteristics.map((characteristic, index) => (
                <div key={index} className="group relative">
                  {/* Hexagon Shape */}
                  <div className="relative w-full h-80 bg-gradient-to-br from-white to-gray-50 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl border border-orange-200">
                    <div className="absolute inset-2 bg-gradient-to-br from-orange-500/5 to-orange-600/10 rounded-xl"></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      {/* Image */}
                      <div className="relative mb-6">
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={characteristic.imagePlaceholder}
                            alt={characteristic.title}
                            width={80}
                            height={80}
                            className="w-20 h-20 object-contain"
                          />
                        </div>
                      </div>
                      
                      {/* Text */}
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                          {characteristic.title}
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {characteristic.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimationWrapper>

      {/* Buffalo Culture in Action Section */}
      <AnimationWrapper>
        <section className="py-24 bg-gradient-to-br from-orange-50 to-white relative">
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side */}
              <div className="text-gray-900">
                <h2 className="text-4xl md:text-5xl font-black mb-8">
                  Buffalo Culture in <span className="text-orange-500">Action</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">🚛</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Cross-Border Excellence</h3>
                      <p className="text-gray-700">Our customs brokerage teams work seamlessly across Canada-U.S. borders, ensuring fast clearance and minimal delays.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">📦</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Warehousing Innovation</h3>
                      <p className="text-gray-700">Strategic locations in GTA, Niagara Falls, and Buffalo provide optimal distribution networks for efficient supply chain management.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Proactive Solutions</h3>
                      <p className="text-gray-700">We anticipate supply chain challenges and implement solutions before they impact your business operations.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side */}
              <div className="text-gray-900">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white">
                  <h3 className="text-3xl font-black mb-6 text-center">
                    Ready to Join the Herd?
                  </h3>
                  <p className="text-lg text-orange-100 mb-8 text-center leading-relaxed">
                    If you're looking for more than just a logistics provider—if you want to partner with a company that values strategic thinking, authentic leadership, and proactive problem-solving—we'd love to discuss how we can streamline your cross-border operations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="flex-1 bg-white text-orange-600 px-6 py-4 rounded-xl font-bold text-center hover:bg-gray-100 transition-colors duration-300">
                      Contact Us
                    </Link>
                    <Link href="/quote" className="flex-1 border-2 border-white text-white px-6 py-4 rounded-xl font-bold text-center hover:bg-white hover:text-orange-600 transition-all duration-300">
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimationWrapper>

      {/* Quote Section */}
      <AnimationWrapper>
        <section className="py-24 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative">
                {/* Quote Marks */}
                <div className="absolute -top-8 -left-8 text-white text-8xl font-bold opacity-20">"</div>
                <div className="absolute -bottom-8 -right-8 text-white text-8xl font-bold opacity-20">"</div>
                
                <blockquote className="text-3xl md:text-4xl font-bold text-white leading-relaxed mb-8 relative z-10">
                  Buffalo culture represents our commitment to proactive logistics management, strategic customs planning, and fearless problem-solving in cross-border trade.
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-white to-white"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-16 h-1 bg-gradient-to-r from-white to-white"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimationWrapper>
    </main>
  )
}