export type Resource = {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
}

export const resources: Resource[] = [
  {
    slug: 'foreign-trade-zone-ftz-information',
    title: 'Foreign Trade Zone (FTZ) Information',
    excerpt: 'Learn how FTZs defer, reduce, or eliminate duties while streamlining customs and improving cash flow.',
    category: 'Compliance',
    readTime: '3 min'
  },
  {
    slug: 'centralized-examination-station-ces-information',
    title: 'Centralized Examination Station (CES) Information',
    excerpt: 'What a CES is, how it accelerates customs inspections, and the advantages of Borderworx as your CES partner.',
    category: 'Operations',
    readTime: '3 min'
  },
  {
    slug: 'container-freight-station-cfs-information',
    title: 'What is a Container Freight Station (CFS)?',
    excerpt: 'Understand how CFS facilities enable efficient LCL consolidation/deconsolidation, lower costs, and faster turnarounds.',
    category: 'Freight',
    readTime: '3 min'
  },
  {
    slug: 'ctpat-certification-information',
    title: 'CTPAT Certification Information',
    excerpt: 'How CTPAT strengthens supply chain security and unlocks fewer inspections and faster processing.',
    category: 'Compliance',
    readTime: '4 min'
  },
  {
    slug: 'ups-shipment-tracking',
    title: 'UPS Shipment Tracking',
    excerpt: 'Track your UPS shipment status in real time and learn what each scan means for your delivery.',
    category: 'Tools',
    readTime: '1 min'
  }
]


