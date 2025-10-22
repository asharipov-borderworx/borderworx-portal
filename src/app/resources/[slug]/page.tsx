
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { resources } from '@/data/resources'

type Params = { params: { slug: string } }

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }))
}

export default function ResourcePage({ params }: Params) {
  const resource = resources.find((r) => r.slug === params.slug)
  if (!resource) return notFound()

  const headingMap: Record<string, string> = {
    'foreign-trade-zone-ftz-information': 'What is a Foreign Trade Zone (FTZ)?',
    'centralized-examination-station-ces-information': 'What is a Centralized Examination Station (CES)?',
    'container-freight-station-cfs-information': 'What is a Container Freight Station (CFS)?',
    'ctpat-certification-information': 'What is CTPAT Certification?',
    'ups-shipment-tracking': 'UPS Shipment Tracking',
  }
  const sectionHeading = headingMap[resource.slug] || resource.title

  return (
    <div className="min-h-screen flex flex-col bg-white">

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative hero-gradient text-white pt-60 overflow-hidden">
          <div className="container-max section-padding relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                  aria-label="Back to Resources"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Resources
                </Link>
              </div>
              <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{resource.title}</h1>
              <div className="flex items-center justify-center gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-white/20">{resource.category}</span>
                <span className="text-orange-100">{resource.readTime}</span>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section heading under hero */}
        <section className="py-4">
          <div className="container-max section-padding">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center">{sectionHeading}</h2>
          </div>
        </section>

        <section className="">
          <div className="container-max ">
            <div className="max-w-4xl mx-auto">
              {/* Framed content card */}
              <div className="p-[2px] rounded-2xl bg-gradient-to-r from-primary/50 via-orange-400/30 to-primary/50">
                <div className="rounded-2xl bg-white shadow-xl p-6 md:p-8">
                  {/* Engaging highlight strip */}
                  <div className="mb-6 flex flex-wrap items-center gap-2">
                    {(resource.slug === 'foreign-trade-zone-ftz-information') && (
                      <>
                        <span className="px-3 py-1 rounded-full bg-orange-50 text-primary font-semibold text-sm">Defer duties</span>
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm">Faster clearance</span>
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-sm">Cash‑flow boost</span>
                      </>
                    )}
                    {(resource.slug === 'centralized-examination-station-ces-information') && (
                      <>
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm">Predictable release</span>
                        <span className="px-3 py-1 rounded-full bg-orange-50 text-primary font-semibold text-sm">Single handling</span>
                        <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 font-semibold text-sm">Lower risk</span>
                      </>
                    )}
                    {(resource.slug === 'container-freight-station-cfs-information') && (
                      <>
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm">LCL</span>
                        <span className="px-3 py-1 rounded-full bg-orange-50 text-primary font-semibold text-sm">Consolidation</span>
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-sm">Faster turnaround</span>
                      </>
                    )}
                    {(resource.slug === 'ctpat-certification-information') && (
                      <>
                        <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 font-semibold text-sm">Low risk</span>
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm">Fewer inspections</span>
                        <span className="px-3 py-1 rounded-full bg-orange-50 text-primary font-semibold text-sm">Priority processing</span>
                      </>
                    )}
                    {(resource.slug === 'ups-shipment-tracking') && (
                      <>
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm">Real‑time</span>
                        <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 font-semibold text-sm">Notifications</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-50 text-gray-700 font-semibold text-sm">Official tool</span>
                      </>
                    )}
                  </div>
                  <article className="prose prose-lg max-w-none">

                {resource.slug === 'foreign-trade-zone-ftz-information' && (
                  <div>
                    <p>
                      A <strong className="text-secondary">Foreign Trade Zone (FTZ)</strong> is a designated location within a country where merchandise receives the same customs treatment it would if it were outside the commerce of the country. In the United States, these zones were created to encourage international commerce and reduce trade barriers.
                    </p>
                    <p>
                      FTZs offer major advantages such as the <strong className="text-secondary">deferral</strong>, <strong className="text-secondary">reduction</strong>, or even <strong className="text-secondary">elimination of customs duties</strong>. Goods entering an FTZ are not subject to tariffs until they enter the domestic market; re‑exports can be <strong className="text-secondary">fully waived</strong>.
                    </p>
                    <p>
                      Companies also benefit from <strong className="text-secondary">streamlined customs procedures</strong> and faster clearances, improving logistics efficiency—especially for <strong className="text-secondary">time‑sensitive</strong> industries.
                    </p>
                    <p>
                      FTZs also improve <strong className="text-secondary">inventory management</strong>, enabling storage without duties—boosting <strong className="text-secondary">cash flow</strong> and lowering carrying costs.
                    </p>
                  </div>
                )}

                {resource.slug === 'centralized-examination-station-ces-information' && (
                  <div>
                    <p>
                      A <strong className="text-secondary">Centralized Examination Station (CES)</strong> is a designated facility where imported goods are inspected by customs officials. These stations, under CBP supervision, streamline cargo examination while maintaining the flow of legitimate trade.
                    </p>
                    <p>
                      Centralization leads to <strong className="text-secondary">more efficient processing</strong>, reducing time and costs. When shipments are selected for examination, routing to a CES can <strong className="text-secondary">expedite release</strong> for faster, more predictable outcomes.
                    </p>
                    <p>
                      Having Borderworx designated as a Centralized Examination Station (CES) brings a significant edge to your business operations. As a CES, Borderworx becomes a one-stop-shop for the examination of your imported goods, which means you’ll never have to be concerned about your products being handled by multiple parties or companies. This consolidation of services under one roof not only mitigates the risk of miscommunication and product mishandling that can occur when multiple handlers are involved but also ensures that the integrity of your goods is maintained throughout the customs inspection process.
                    </p>
                  </div>
                )}

                {resource.slug === 'container-freight-station-cfs-information' && (
                  <div>
                    <p>
                      A <strong className="text-secondary">Container Freight Station (CFS)</strong> is a logistics facility situated near ports and harbors. It facilitates cargo movement, particularly for shipments not large enough to fill an entire container (<strong className="text-secondary">LCL</strong>). At a CFS, cargo is <strong className="text-secondary">aggregated</strong> for outbound shipments or <strong className="text-secondary">deconsolidated</strong> upon arrival for efficient distribution and storage.
                    </p>
                    <p>
                      These stations play a critical role in global trade by enabling multiple smaller shipments to be <strong className="text-secondary">consolidated</strong> into a single container for export or <strong className="text-secondary">deconsolidated</strong> for distribution. Key operations include <strong className="text-secondary">aggregation</strong> of goods, container <strong className="text-secondary">stuffing / de‑stuffing</strong>, and short‑term storage for both import and export activities.
                    </p>
                    <p>
                      By optimizing the handling and transfer of cargo, CFSs enhance supply chain efficiency and offer a <strong className="text-secondary">cost‑effective</strong> solution for partial loads. They also provide additional services such as <strong className="text-secondary">customs clearance support</strong> to ensure compliance with international trade regulations.
                    </p>
                    <h3>Borderworx: A Strategic Advantage</h3>
                    <p>
                      Borderworx operating a Container Freight Station is a significant advantage for businesses involved in international trade. The presence of a CFS streamlines the logistics process, providing clients with a one-stop solution for their cargo handling needs.
                    </p>
                    <ul className="list-disc pl-6">
                      <li><strong>Streamlined Operations:</strong> Efficient handling and transfer of goods for faster turnaround times.</li>
                      <li><strong>Cost-Effective Solutions:</strong> Shipment consolidation reduces overall shipping costs.</li>
                      <li><strong>Enhanced Security and Compliance:</strong> Operations meet high security and compliance standards.</li>
                      <li><strong>Customized Services:</strong> Tailored handling and value-added services to match client needs.</li>
                      <li><strong>Strategic Location:</strong> Proximity to key ports supports reduced transit times.</li>
                    </ul>
                  </div>
                )}

                {resource.slug === 'ctpat-certification-information' && (
                  <div>
                    <p>
                      In the realm of global trade, <strong className="text-secondary">security</strong> and <strong className="text-secondary">efficiency</strong> are paramount. The <strong className="text-secondary">Customs‑Trade Partnership Against Terrorism (CTPAT)</strong>, a voluntary supply chain security program led by <strong className="text-secondary">U.S. Customs and Border Protection (CBP)</strong>, strengthens international supply chains and improves U.S. border security.
                    </p>
                    <p>
                      CTPAT certification is awarded to companies that demonstrate a <strong className="text-secondary">robust security protocol</strong> within their supply chains. Participants include <strong className="text-secondary">importers</strong>, <strong className="text-secondary">carriers</strong>, <strong className="text-secondary">consolidators</strong>, logistics providers, and manufacturers—showing commitment to protecting against terrorism, smuggling, and other illegal activities.
                    </p>
                    <p>
                      The process involves a comprehensive application and security analysis, implementing measures such as container and <strong className="text-secondary">physical security</strong>, <strong className="text-secondary">personnel vetting</strong>, <strong className="text-secondary">access controls</strong>, and <strong className="text-secondary">security training</strong>.
                    </p>
                    <p>
                      Benefits include <strong className="text-secondary">expedited processing</strong>, <strong className="text-secondary">fewer CBP examinations</strong>, and <strong className="text-secondary">priority</strong> during border delays—translating to time and cost savings.
                    </p>
                    <p>
                      <strong className="text-secondary">Borderworx’s CTPAT status</strong> enhances service delivery—streamlined, secure logistics with <strong className="text-secondary">reduced inspection risk</strong> and <strong className="text-secondary">faster shipping times</strong>.
                    </p>
                  </div>
                )}

                {resource.slug === 'ups-shipment-tracking' && (
                  <div>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
                      Track your UPS shipment to see <strong className="text-secondary">real‑time status</strong>, <strong className="text-secondary">expected delivery windows</strong>, and a detailed <strong className="text-secondary">scan history</strong>. Use the official UPS tracking tool for the most accurate information.
                    </p>
                    <a
                      href="https://www.ups.com/track?loc=en_CA&requester=ST/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-orange-600 transition-colors"
                    >
                      Track with UPS
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                )}

                {/* Fallback for placeholders */}
                {![
                  'foreign-trade-zone-ftz-information',
                  'centralized-examination-station-ces-information',
                  'container-freight-station-cfs-information',
                  'ctpat-certification-information',
                  'ups-shipment-tracking'
                ].includes(resource.slug) && (
                  <div>
                    <p>Full content for this resource is coming soon.</p>
                  </div>
                )}
                  </article>
                </div>
              </div>

              {/* CTA */}
              <div className="my-12 p-6 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-1">Have questions or need help applying this?</h3>
                  <p className="text-gray-600">Talk with our team and we’ll tailor a solution for your operation.</p>
                </div>
                <a href="/contact" className="btn-primary">Contact Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}

// Note: no styled-jsx here to keep this as a Server Component
