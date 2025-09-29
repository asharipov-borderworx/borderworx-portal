"use client"

import Image from 'next/image'

const partners = [
  { name: 'Amazon', logo: '/images/integrationPartners/amazon.png' },
  { name: 'Cratejoy', logo: '/images/integrationPartners/cratejoy.png' },
  { name: 'eBay', logo: '/images/integrationPartners/ebay.png' },
  { name: 'Etsy', logo: '/images/integrationPartners/etsy.png' },
  { name: 'Office Depot', logo: '/images/integrationPartners/officedepot.png' },
  { name: 'QB Commerce', logo: '/images/integrationPartners/qbcommerce.png' },
  { name: 'Salesforce', logo: '/images/integrationPartners/salesforce.png' },
  { name: 'Shippo', logo: '/images/integrationPartners/shippo.png' },
  { name: 'Shopify', logo: '/images/integrationPartners/shopify.png' },
  { name: 'Squarespace', logo: '/images/integrationPartners/squarespace.png' },
  { name: 'Walmart', logo: '/images/integrationPartners/walmart.png' },
  { name: 'Wayfair', logo: '/images/integrationPartners/wayfair.png' },
  { name: 'Wish', logo: '/images/integrationPartners/wish.png' },
  { name: 'Wix', logo: '/images/integrationPartners/wix.png' },
  { name: 'WooCommerce', logo: '/images/integrationPartners/woo.png' },
]

export default function IntegrationPartners() {
  // Triple the partners array for truly seamless infinite scroll
  const infinitePartners = [...partners, ...partners, ...partners]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Trusted Integration Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We support over 110+ different platforms and marketplaces!
          </p>
        </div>

        {/* Infinite scroll container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-10"></div>
          
          <div className="flex animate-scroll hover:[animation-play-state:paused]">
            {infinitePartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-48 h-24 mx-6 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-600 group"
              >
                <div className="relative w-32 h-16 transition-all duration-300">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 90s linear infinite;
          width: calc(240px * ${partners.length * 3});
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-240px * ${partners.length}));
          }
        }
      `}</style>
    </section>
  )
}
