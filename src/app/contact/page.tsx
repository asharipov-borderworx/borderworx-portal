import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import ContactInfoCard from '@/components/ContactInfoCard'

export default function ContactPage() {

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
                Contact Borderworx
                </h1>
                <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
                We're here to help. Reach out to our team and we'll get back to you promptly.
                </p>
              </div>
            </div>
          </section>
    
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {HeroSection()}
      {/* Contact info + form */}
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container-max section-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact info column */}
              <div className="space-y-6">
                <ContactInfoCard country={"Canada"} />
                <ContactInfoCard country={"USA"} />
              </div>
              {/* Contact form card */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 animate-[fadeIn_0.8s_ease-out]
                              [@keyframes_fadeIn]{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}">
                <h2 className="text-2xl font-bold text-secondary mb-6">Send us a message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


