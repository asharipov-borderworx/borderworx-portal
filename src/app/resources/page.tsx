import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { resources } from '@/data/resources'

export const metadata = {
  title: 'Resources - BorderWorx Logistics',
  description: 'Guides, checklists, and playbooks to help you ship smarter and stay compliant.'
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      <main className="flex-grow">
        
        <section className="relative bg-gradient-to-r from-primary to-orange-600 text-white pt-48 overflow-hidden">
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
              Resources
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">Practical tools and insights to optimize your cross‑border logistics.
            </p>
          </div>
        </div>
      </section>

        {/* Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container-max section-padding">
            <div className="mb-10 text-center">
              <p className="text-gray-600">Browse our latest guides, checklists, and playbooks</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {resources.map((r) => (
                <article key={r.slug} className="group relative h-full">
                  <div className="h-full rounded-2xl p-[1px] bg-gradient-to-br from-primary/30 via-orange-400/20 to-primary/30 transition-colors duration-300 group-hover:from-primary/50 group-hover:to-orange-500/40">
                    <div className="h-full rounded-2xl bg-white shadow-lg p-6 flex flex-col">
                      <div className="flex items-center justify-between mb-4 text-sm">
                        <span className="px-3 py-1 rounded-full bg-primary text-white">{r.category}</span>
                        <span className="text-gray-500">{r.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary mb-2 leading-snug">{r.title}</h3>
                      <p className="text-gray-600 mb-6 line-clamp-3">{r.excerpt}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <Link
                          href={`/resources/${r.slug}`}
                          className="inline-flex items-center gap-2 text-primary hover:text-orange-600 font-semibold"
                        >
                          Read More
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}


