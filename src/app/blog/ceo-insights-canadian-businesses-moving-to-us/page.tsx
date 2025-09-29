import { Metadata } from 'next'
import Blog from '@/components/Blog'
import YouTubeEmbed from '@/components/YouTubeEmbed'

export const metadata: Metadata = {
  title: 'CEO Insights: Canadian Businesses Moving Operations to the US - BorderWorx Blog',
  description: 'Our CEO discusses the growing trend of Canadian businesses relocating their operations to the United States, exploring the logistics challenges and opportunities this presents.',
}

const blogPost = {
  id: '1',
  title: 'CEO Insights: Canadian Businesses Moving Operations to the US',
  excerpt: 'Our CEO discusses the growing trend of Canadian businesses relocating their operations to the United States, exploring the logistics challenges and opportunities this presents.',
  content: `
    <div class="space-y-6">
      <p class="text-xl leading-relaxed text-gray-700">
        In a recent interview, our CEO shared valuable insights about a significant trend we're observing in the logistics industry: Canadian businesses increasingly moving their operations to the United States. This strategic shift is reshaping the cross-border trade landscape and presenting both challenges and opportunities for companies on both sides of the border.
      </p>

      <div class="my-8">
        <h3 class="text-2xl font-semibold text-secondary mb-4">Watch the Full Interview</h3>
          <div class="max-w-4xl mx-auto">
            <div class="relative w-full h-0 pb-[56.25%] overflow-hidden">
              <iframe
                class="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/LPKYrDb640g"
                title="CEO Interview: Canadian Businesses Moving to US"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-secondary mt-8 mb-4">The Migration Trend</h2>
      <p class="text-lg leading-relaxed text-gray-700">
        Over the past few years, we've witnessed a notable increase in Canadian companies establishing or relocating their operations to the United States. This trend is driven by several key factors that are reshaping the business landscape across North America.
      </p>

      
  `,
  author: 'BorderWorx Team',
  date: '2024-01-15',
  readTime: '5 min read',
  image: '/images/blog/ceo-insights.png',
  category: 'Industry Insights',
  slug: 'ceo-insights-canadian-businesses-moving-to-us',
  tags: ['CEO Insights', 'Cross-Border Trade', 'Business Migration', 'Logistics', 'Canada-US Trade']
}

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <Blog post={blogPost} showFullContent={true} showBackButton={true} />
      </div>
    </div>
  )
}
