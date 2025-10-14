import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'

export default function AmazonFBAPrepPage() {
  const whyChooseItems = [
    {
      title: "Expertise in Compliance and Packaging",
      description: "Our team is well-versed in Amazon's constantly evolving compliance and packaging guidelines. With Borderworx, you can rest assured that your products will be prepped according to the latest standards, reducing the risk of delays or rejections.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: "Customized Solutions for Diverse Needs",
      description: "Whether you're a small startup or a large enterprise, we offer customized prep solutions tailored to your specific needs. From labeling to bundling, quality checks, and secure packaging, we handle it all with precision and care.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
        </svg>
      )
    },
    {
      title: "Strategic Locations for Faster Turnaround",
      description: "Located strategically in Canada (Mississauga, GTA) and the United States (Buffalo, Niagara Falls), our facilities enable swift and efficient processing of your shipments. This geographical advantage ensures quicker turnaround times, helping you keep up with the demands of your customers.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    },
    {
      title: "Cutting-Edge Technology for Seamless Operations",
      description: "We leverage the latest technology to streamline every step of the FBA prep process. Our state-of-the-art systems ensure accurate tracking and management of your inventory, providing you with peace of mind and real-time visibility.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
        </svg>
      )
    },
    {
      title: "Sustainable Practices for a Greener Tomorrow",
      description: "At Borderworx, sustainability is at the heart of what we do. We employ eco-friendly packaging options and practices, minimizing the environmental impact of your Amazon FBA shipments.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
        </svg>
      )
    }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Ship your items to our warehouse",
      description: "We receive your items at our prep center and store your shipment in our secure warehouse until the time we process it.",
      image: "/images/services/amazonFBA/firstStep.png",
      imageAlt: "Shipping items to warehouse"
    },
    {
      step: "2", 
      title: "Shipments are processed and items are prepped for FBA",
      description: "We unpack your shipment and label and prep items as needed to meet Amazon's FBA packaging, prep and label guidelines.",
      image: "/images/services/amazonFBA/secondStep.png",
      imageAlt: "Processing and preparing items for FBA"
    },
    {
      step: "3",
      title: "Your prepared items are sent to a Fulfillment by Amazon center",
      description: "Once prepped, your items are ready for FBA and will be sent off for processing at an Amazon fulfillment center.",
      image: "/images/services/amazonFBA/thirdStep.png",
      imageAlt: "Sending prepared items to Amazon fulfillment center"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection
        title="Fulfillment by Amazon (FBA) Prep Center"
        description="Simplifying Your Amazon FBA Preparation Process"
        breadcrumb="Amazon FBA Prep"
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container-max section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
                <p className="text-lg mb-6">
                  The item requirements for Fulfillment by Amazon (FBA) can be a challenge, and you've probably wondered 
                  "Is there an Amazon FBA Prep Center near me?". Let us simplify your business and make use of our Amazon 
                  FBA preparation center services. You can send in entire shipments of items and we can unpack, label and 
                  repack your items for FBA.
                </p>
                <p className="text-lg mb-6">
                  We offer this FBA Prep Service in Canada (Mississauga, GTA) and the United States (Buffalo, Niagara Falls) 
                  and can ship to Amazon Fulfillment centers in both Canada and the United States. Our FBA Prep Centers are 
                  strategically located near the border to expedite the entire process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Borderworx Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-max section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Why Choose Borderworx for Your Amazon FBA Prep Needs?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Borderworx, we understand the complexities of preparing your products for Amazon FBA. Our comprehensive 
                prep services are designed to streamline your fulfillment process, ensuring that your products meet Amazon's 
                stringent requirements while saving you time and money.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseItems.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-lg flex items-center justify-center mr-4 text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-secondary">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container-max section-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our streamlined 3-step process makes Amazon FBA preparation simple and efficient
              </p>
            </div>

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                  {/* Image */}
                  <div className="lg:w-1/2 w-full">
                    <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center mr-6">
                        <span className="text-2xl font-bold text-white">{step.step}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-secondary">{step.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 hero-gradient text-white">
          <div className="container-max section-padding text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Streamline Your Amazon FBA Process?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Partner with Borderworx and let our expert team handle all your Amazon FBA preparation needs. 
              Contact us today to get started!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
              >
                Get Started Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300 inline-flex items-center justify-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}
