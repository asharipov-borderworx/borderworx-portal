import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Two-column layout: left background image, right content card */}
        <section className="relative">
          <div className="grid lg:grid-cols-2">
            {/* Left: Background image with soft right gradient */}
            <div className="relative min-h-[420px] lg:min-h-[720px]">
              <Image
                src="/images/about-us/agreementBackground.png"
                alt="Agreement background"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="md:absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white to-transparent" />
            </div>

            {/* Right: Refined content card */}
            <div className="relative bg-white">
              <div className="py-16 lg:py-24">
                <div className="container-max section-padding">
                  <div className="max-w-3xl ml-auto">
                    <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-100">
                      <div className="mb-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-secondary">Our company core values</h1>
                        <span className="mt-3 inline-block h-1 w-16 rounded bg-primary" />
                      </div>

                      <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p>
                          Founded in 2003, Dean Wood applied his extensive industry experience working in some of Canada’s
                          largest transportation and customs corporations to start BorderWorx.
                        </p>
                        <p>
                          Today, BorderWorx has managed more than $3.5 billion in goods across the border and more than 250,000
                          customs clearances. BorderWorx has an impressive history of helping companies grow their market share through
                          seamless logistics solutions.
                        </p>
                      </div>

                      <div className="mt-10 flex items-start justify-between gap-6">
                        <div>
                          <p className="text-secondary font-semibold">Dean Wood</p>
                          <p className="text-gray-600">Chief Executive Officer</p>
                        </div>
                        <div className="relative w-56 md:w-72 opacity-90">
                          <Image
                            src="/images/about-us/signature.png"
                            alt="Signature of Dean Wood"
                            width={800}
                            height={220}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


