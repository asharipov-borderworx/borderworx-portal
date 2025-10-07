import Footer from '@/components/Footer'
import QuoteFormWizard from '@/components/QuoteFormWizard'
import QuoteSlideshow from '@/components/QuoteSlideshow'

export default function QuotePage() {

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
              Request a Quote
              </h1>
              <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
              Tell us about your shipment and we’ll get back with a tailored quote.
              </p>
            </div>
          </div>
        </section>
  
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      {HeroSection()}
      {/* Quote form */}
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container-max section-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Form card */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 animate-[fadeIn_0.8s_ease-out][@keyframes_fadeIn]{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}">
                    <h2 className="text-2xl font-bold text-secondary mb-6">Request a quote</h2>
                    <QuoteFormWizard />
                </div>
              {/* Right column: stack info card + slideshow */}
                <div className="space-y-8">
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 animate-[fadeIn_0.8s_ease-out]
                                    [@keyframes_fadeIn]{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}">
                    <h2 className="text-2xl font-bold text-secondary mb-4">
                        Fast, reliable quotes
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Share a few shipment details and our team will respond promptly with
                        pricing and options tailored to your needs.
                    </p>
                    <ul className="mt-6 space-y-2 text-gray-700 list-disc pl-5">
                        <li>Cross-border expertise (Canada ↔ USA)</li>
                        <li>Flexible warehousing & distribution</li>
                        <li>Customs brokerage and trade compliance</li>
                    </ul>
                    <div className="mt-8">
                        <QuoteSlideshow />
                    </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}

