import BlogImage from './BlogImage'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image?: string
  category: string
  slug: string
  tags?: string[]
}

interface BlogProps {
  post: BlogPost
  showFullContent?: boolean
  showBackButton?: boolean
}

export default function Blog({ post, showFullContent = false, showBackButton = false }: BlogProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <article className="max-w-4xl mx-auto pt-16">
      {/* Back Button */}
      {showBackButton && (
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-orange-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      )}

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
            {post.category}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">BW</span>
            </div>
            <div>
              <p className="font-medium text-secondary">{post.author}</p>
              <p className="text-gray-500">{formatDate(post.date)}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image (only when a thumbnail is provided) */}
      {post.image && (
        <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
          <BlogImage
            src={post.image}
            alt={post.title}
            fill
            className="object-contain"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        {showFullContent ? (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : (
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
        )}
      </div>

      {/* CTA before Tags */}
      <div className="mt-12">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur shadow-sm">
          <div className="absolute inset-0 pointer-events-none opacity-60" aria-hidden="true" />
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">Need help or have questions?</h3>
                  <p className="mt-1 text-gray-700">
                    If you have any questions,{' '}
                    <Link href="/contact" className="text-primary underline decoration-2 underline-offset-4 hover:text-orange-600">
                      contact us!
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-md"
                  aria-label="Contact us"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-secondary mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
