export default function About() {
  const features = [
    {
      title: "Global Network",
      description: "Extensive network of partners across 50+ countries"
    },
    {
      title: "Expert Team",
      description: "Experienced logistics professionals with industry expertise"
    },
    {
      title: "Technology Driven",
      description: "Advanced tracking systems and digital logistics solutions"
    },
    {
      title: "Customer Focus",
      description: "Dedicated support and personalized service approach"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              About BorderWorx
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over a decade of experience in global logistics, BorderWorx has established 
              itself as a trusted partner for businesses seeking reliable, efficient, and 
              cost-effective supply chain solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to excellence, combined with cutting-edge technology and 
              a global network of partners, enables us to deliver exceptional results 
              for our clients across diverse industries.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-gradient-to-br from-primary to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              
              {/* Stats */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-orange-100">Years of Experience</span>
                  <span className="text-2xl font-bold">10+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-orange-100">Successful Deliveries</span>
                  <span className="text-2xl font-bold">50K+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-orange-100">Client Satisfaction</span>
                  <span className="text-2xl font-bold">99%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-orange-100">Global Coverage</span>
                  <span className="text-2xl font-bold">50+</span>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="mt-8 p-6 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Our Mission</h4>
                <p className="text-orange-100 text-sm leading-relaxed">
                  To connect businesses globally through innovative logistics solutions 
                  that drive growth and success in the international marketplace.
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary bg-opacity-20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-400 bg-opacity-30 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
