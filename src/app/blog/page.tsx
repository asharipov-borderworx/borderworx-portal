import { Metadata } from 'next'
import Link from 'next/link'
import BlogImage from '@/components/BlogImage'
import { blogPosts } from '@/data/blogPosts'

export const metadata: Metadata = {
    title: 'Blog - BorderWorx Logistics',
    description: 'Stay updated with the latest insights, trends, and news in logistics and cross-border trade.',
}

// Blog post data structure
// Using centralized data module
function HeroSection() {
    return (
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
                BorderWorx Blog
                </h1>
                <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
                Stay updated with the latest insights, trends, and news in logistics and cross-border trade
                </p>
              </div>
            </div>
          </section>
    
    )
  }
export default function BlogPage() {
    return (
        <>
            {HeroSection()}
            <div className="min-h-screen bg-gray-50">

                {/* Blog Posts Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            {/* Featured Post */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-secondary mb-8">Featured Article</h2>
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    <div className="md:flex">
                                        <div className="md:w-1/2">
                                            <div className="relative h-64 md:h-full bg-gray-100">
                                                <BlogImage
                                                    src="/images/blog/ceo-insights.png"
                                                    alt="CEO discussing business migration"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 p-8">
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                                                    Industry Insights
                                                </span>
                                                
                                            </div>
                                            <h3 className="text-2xl font-bold text-secondary mb-4">
                                                CEO Insights: Canadian Businesses Moving Operations to the US
                                            </h3>
                                            <p className="text-gray-600 mb-6">
                                                Our CEO discusses the growing trend of Canadian businesses relocating their operations to the United States, exploring the logistics challenges and opportunities this presents.
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                                        <span className="text-white font-bold text-sm">BW</span>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-secondary">BorderWorx Team</p>
                                                        <p className="text-sm text-gray-500">January 15, 2024</p>
                                                    </div>
                                                </div>
                                                <Link
                                                    href="/blog/ceo-insights-canadian-businesses-moving-to-us"
                                                    className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* All Posts Grid */}
                            <div>
                                <h2 className="text-3xl font-bold text-secondary mb-8">All Articles</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {blogPosts.map((post) => (
                                        <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                            <div className="relative h-48 bg-white">
                                                <BlogImage
                                                    src={post.thumbnail || '/images/logo.png'}
                                                    alt={post.title}
                                                    fill
                                                    className={post.thumbnail ? 'object-cover' : 'object-contain p-6'}
                                                />
                                            </div>
                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                                                        {post.category}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-bold text-secondary mb-3 line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                <p className="text-gray-600 mb-4 line-clamp-3">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between mt-auto pt-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                                            <span className="text-white font-bold text-xs">BW</span>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-secondary text-sm">{post.author}</p>
                                                            <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                                                        </div>
                                                    </div>
                                                    <Link
                                                        href={`/blog/${post.slug}`}
                                                        className="text-primary hover:text-orange-600 font-medium text-sm"
                                                    >
                                                        Read More →
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter Signup */}
                <section className="bg-primary text-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                            <p className="text-xl opacity-90 mb-8">
                                Subscribe to our newsletter for the latest logistics insights and industry updates.
                            </p>
                            <div className="max-w-md mx-auto flex gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-lg text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                                />
                                <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
