import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center pt-52 ">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Global Logistics
              <span className="block">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
              Streamline your supply chain with our comprehensive freight forwarding 
              and logistics services. Reliable, efficient, and globally connected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-center"
              >
                Get Started
              </Link>
              <Link
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 text-center"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {/* Stats Cards */}
                <div className="bg-white bg-opacity-20 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">100+</div>
                  <div className="text-orange-100">Global Partners</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">$3 Billion+</div>
                  <div className="text-orange-100">Goods Managed</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-orange-100">Support</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">99%</div>
                  <div className="text-orange-100">On-Time</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white bg-opacity-30 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
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
