import { notFound } from 'next/navigation'
import Blog from '@/components/Blog'
import { blogPosts } from '@/data/blogPosts'

export async function generateStaticParams() {
    return blogPosts.map(p => ({ slug: p.slug }))
}

export default function BlogDynamicPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find(p => p.slug === params.slug)
    if (!post) return notFound()

    const htmlFromBlocks = post.blocks
        .map(block => {
            let inner = ''
            if (block.type === 'text') {
                inner = `<p class=\"text-lg leading-relaxed text-gray-700\">${block.content}</p>`
            } else if (block.type === 'quote') {
                inner = `<blockquote class=\"p-6 bg-gray-50 border-l-4 border-primary rounded-r-lg text-gray-700\"><p class=\"italic\">${block.content}</p></blockquote>`
            } else if (block.type === 'video' && block.provider === 'youtube') {
                inner = `
          <div>
            <div class=\"relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-sm\"> 
              <iframe
                class=\"absolute top-0 left-0 w-full h-full\"
                src=\"https://www.youtube.com/embed/${block.videoId}\"
                title=\"${block.title || 'Video'}\"
                frameborder=\"0\"
                allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"
                allowfullscreen
              />
            </div>
          </div>
        `
             } else if (block.type === 'list') {
                const tag = block.ordered ? 'ol' : 'ul'
                const listItems = block.items
                    .map(i => `<li class=\"mb-1\">${i}</li>`)
                    .join('')
                inner = `<${tag} class=\"pl-6 list-${block.ordered ? 'decimal' : 'disc'} text-gray-700\">${listItems}</${tag}>`
             } else if (block.type === 'image') {
                 inner = `<div class=\"relative mx-auto w-full max-w-3xl h-56 md:h-72 rounded-xl overflow-hidden bg-white\"><img src=\"${block.src}\" alt=\"${block.alt || ''}\" class=\"w-full h-full object-contain p-4\" /></div>`
            } else if (block.type === 'heading') {
                const lvl = Math.max(1, Math.min(6, block.level ?? 3)) // Ensure level is between 1-6, default to 3
                let classes = ''
                
                switch (lvl) {
                    case 1:
                        classes = 'text-4xl font-bold text-secondary mb-4'
                        break
                    case 2:
                        classes = 'text-3xl font-bold text-secondary mb-4'
                        break
                    case 3:
                        classes = 'text-2xl font-semibold text-secondary mb-3'
                        break
                    case 4:
                        classes = 'text-xl font-semibold text-secondary mb-3'
                        break
                    case 5:
                        classes = 'text-lg font-semibold text-secondary mb-2'
                        break
                    case 6:
                        classes = 'text-base font-semibold text-secondary mb-2'
                        break
                    default:
                        classes = 'text-2xl font-semibold text-secondary mb-3'
                }
                
                inner = `<h${lvl} class=\"${classes}\">${block.text}</h${lvl}>`
            }
            if (!inner) return ''
            return `<div class=\"mb-6 md:mb-8\">${inner}</div>`
        })
        .join('')

     const composedPost = {
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        content: htmlFromBlocks,
        author: post.author,
        date: post.date,
        image: post.thumbnail, // Blog component will fallback if undefined
        category: post.category,
        slug: post.slug,
        tags: post.tags,
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-16">
                <Blog post={composedPost as any} showFullContent={true} showBackButton={true} />
            </div>
        </div>
    )
}


