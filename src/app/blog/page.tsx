import { Metadata } from 'next'
import { blogPosts } from '@/data/blogPosts'
import BlogList from '@/components/BlogList'
import AnimatedHero from '@/components/AnimatedHero'

export const metadata: Metadata = {
    title: 'Blog - BorderWorx Logistics',
    description: 'Stay updated with the latest insights, trends, and news in logistics and cross-border trade.',
}

export default function BlogPage() {
    // Sort posts by date (newest first)
    const sortedPosts = [...blogPosts].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    return (
        <>
            <AnimatedHero />
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

                {/* Blog Posts Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <BlogList posts={sortedPosts} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
