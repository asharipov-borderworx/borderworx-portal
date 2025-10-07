import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getContactInfo } from '@/utils/contactInfo'
import FuturisticMap from '@/components/FuturisticMap'

export const metadata = {
  title: 'Locations - BorderWorx Logistics',
  description: 'Find BorderWorx office locations in Canada and the United States.'
}

export default function LocationsPage() {
  const info = getContactInfo() as any
  const ca = info?.contact?.address?.Canada
  const us = info?.contact?.address?.USA

  const caQuery = encodeURIComponent(`${ca?.street || ''}, ${ca?.city || ''}, ${ca?.state || ''} ${ca?.zipCode || ''}`)
  const usQuery = encodeURIComponent(`${us?.street || ''}, ${us?.city || ''}, ${us?.state || ''} ${us?.zipCode || ''}`)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative bg-gradient-to-r from-primary to-orange-600 text-white pt-48 overflow-hidden">
          <div className="container-max section-padding relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Locations</h1>
              <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
                Visit our Canada and USA offices. Tap a card or pin to get directions.
              </p>
            </div>
          </div>
        </section>

        {/* Map + Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container-max section-padding">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Cards */}
              <div className="space-y-6 order-2 lg:order-1">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${caQuery}`}
                  target="_blank" rel="noopener noreferrer"
                  className="block bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-secondary mb-2">Canada Office</h3>
                  <p className="text-gray-700 mb-2">{ca?.full}</p>
                  <p className="text-gray-700"><span className="font-semibold">Phone:</span> {ca?.phone}</p>
                  {ca?.fax ? (
                    <p className="text-gray-700"><span className="font-semibold">Fax:</span> {ca?.fax}</p>
                  ) : null}
                  <p className="text-gray-700"><span className="font-semibold">Email:</span> {ca?.email || info?.contact?.email?.primary}</p>
                </a>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${usQuery}`}
                  target="_blank" rel="noopener noreferrer"
                  className="block bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-secondary mb-2">USA Office</h3>
                  <p className="text-gray-700 mb-2">{us?.full}</p>
                  <p className="text-gray-700"><span className="font-semibold">Phone:</span> {us?.phone}</p>
                  {us?.fax ? (
                    <p className="text-gray-700"><span className="font-semibold">Fax:</span> {us?.fax}</p>
                  ) : null}
                  <p className="text-gray-700"><span className="font-semibold">Email:</span> {us?.email || info?.contact?.email?.primary}</p>
                </a>
              </div>

              {/* Map */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <FuturisticMap
                  center={[ -79.2, 43.4 ]}
                  zoom={7}
                  height={520}
                  markers={[
                    { lat: 43.66, lng: -79.65, title: 'Canada Office', subtitle: ca?.full, href: `https://www.google.com/maps/search/?api=1&query=${caQuery}` },
                    { lat: 43.08, lng: -78.88, title: 'USA Office', subtitle: us?.full, href: `https://www.google.com/maps/search/?api=1&query=${usQuery}` },
                  ]}
                />
                <p className="text-sm text-gray-500 mt-3">Tip: Click a pin or card to open the location in Google Maps.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


