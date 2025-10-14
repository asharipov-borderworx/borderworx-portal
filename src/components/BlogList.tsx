'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import Link from 'next/link'
import BlogImage from '@/components/BlogImage'
import { BlogPostItem } from '@/data/blogPosts'

interface BlogListProps {
  posts: BlogPostItem[]
}

const POSTS_PER_PAGE = 9

// Custom hook for intersection observer
function useIntersectionObserver() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isVisible] as const
}

// Static Blog Post Card Component (no animations to avoid re-animation on filter changes)
function BlogCard({ post }: { post: BlogPostItem }) {
  return (
    <article className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
      <div className="relative h-48 bg-white overflow-hidden">
        <BlogImage
          src={post.thumbnail || '/images/logo.png'}
          alt={post.title}
          fill
          className={`${
            post.thumbnail ? 'object-cover' : 'object-contain p-6'
          } group-hover:scale-105 transition-transform duration-300`}
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full shadow-lg">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-secondary mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
          {post.excerpt}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
          {post.tags && post.tags.length > 3 && (
            <span className="px-2 py-1 text-gray-500 text-xs">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">BW</span>
            </div>
            <div>
              <p className="font-medium text-secondary text-sm">{post.author}</p>
              <p className="text-xs text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="text-primary hover:text-orange-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
          >
            Read
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function BlogList({ posts }: BlogListProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [dateRange, setDateRange] = useState<'all' | 'month' | 'quarter' | 'year'>('all')
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title'>('newest')

  // Animation hooks
  const [filterRef, filterVisible] = useIntersectionObserver()
  const [gridRef, gridVisible] = useIntersectionObserver()
  const [paginationRef, paginationVisible] = useIntersectionObserver()

  // Extract unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    posts.forEach(post => post.tags?.forEach(tag => tags.add(tag)))
    return Array.from(tags).sort()
  }, [posts])

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = posts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => post.tags?.includes(tag))

      // Date range filtering
      const postDate = new Date(post.date)
      const now = new Date()
      let matchesDate = true
      
      if (dateRange === 'month') {
        const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())
        matchesDate = postDate >= monthAgo
      } else if (dateRange === 'quarter') {
        const quarterAgo = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate())
        matchesDate = postDate >= quarterAgo
      } else if (dateRange === 'year') {
        const yearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
        matchesDate = postDate >= yearAgo
      }
      
      return matchesSearch && matchesTags && matchesDate
    })

    // Sorting
    if (sortBy === 'newest') {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (sortBy === 'oldest') {
      filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    } else if (sortBy === 'title') {
      filtered.sort((a, b) => a.title.localeCompare(b.title))
    }

    return filtered
  }, [posts, searchQuery, selectedTags, dateRange, sortBy])

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
    setCurrentPage(1)
  }

  const clearAllFilters = () => {
    setSearchQuery('')
    setSelectedTags([])
    setDateRange('all')
    setSortBy('newest')
    setCurrentPage(1)
  }

  const hasActiveFilters = 
    searchQuery !== '' || 
    selectedTags.length > 0 || 
    dateRange !== 'all' || 
    sortBy !== 'newest'

  return (
    <div className="space-y-8">
      {/* Search and Filter Section */}
      <div 
        ref={filterRef}
        className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-1000 ${
          filterVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="p-6 md:p-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search articles by title, content, or tags..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-700 placeholder-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Advanced Filters Toggle */}
          <div className="flex items-center justify-between pt-0">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 hero-gradient text-white rounded-lg hover:from-orange-600 hover:to-primary transition-all shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <span className="font-medium">Advanced Filters</span>
                <svg
                  className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-red-500 hover:text-red-600 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="font-medium">Clear All</span>
                </button>
              )}
            </div>

            <p className="text-sm text-gray-600">
              <span className="font-semibold text-primary">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'article' : 'articles'}
            </p>
          </div>
        </div>

        {/* Advanced Filters Panel (Collapsible) */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            showFilters ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {/* Tags Filter */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  Tags
                </h4>
                <div className="max-h-48 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                        selectedTags.includes(tag)
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Range Filter */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Date Range
                </h4>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Time' },
                    { value: 'month', label: 'Last Month' },
                    { value: 'quarter', label: 'Last 3 Months' },
                    { value: 'year', label: 'Last Year' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setDateRange(option.value as typeof dateRange)
                        setCurrentPage(1)
                      }}
                      className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                        dateRange === option.value
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort By Filter */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                  </svg>
                  Sort By
                </h4>
                <div className="space-y-2">
                  {[
                    { value: 'newest', label: 'Newest First', icon: '↓' },
                    { value: 'oldest', label: 'Oldest First', icon: '↑' },
                    { value: 'title', label: 'Alphabetical', icon: 'A-Z' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value as typeof sortBy)
                        setCurrentPage(1)
                      }}
                      className={`flex items-center justify-between w-full px-4 py-2 rounded-lg text-sm transition-all ${
                        sortBy === option.value
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                      }`}
                    >
                      <span>{option.label}</span>
                      <span className="text-xs font-mono">{option.icon}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Filters Summary */}
            {hasActiveFilters && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-900 mb-2">Active Filters:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedTags.map((tag) => (
                        <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-xs font-medium text-blue-700 border border-blue-300">
                          Tag: {tag}
                        </span>
                      ))}
                      {dateRange !== 'all' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-xs font-medium text-blue-700 border border-blue-300">
                          Date: {dateRange === 'month' ? 'Last Month' : dateRange === 'quarter' ? 'Last 3 Months' : 'Last Year'}
                        </span>
                      )}
                      {sortBy !== 'newest' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-xs font-medium text-blue-700 border border-blue-300">
                          Sort: {sortBy === 'oldest' ? 'Oldest First' : 'Alphabetical'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      {currentPosts.length > 0 ? (
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            gridVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div 
          ref={gridRef}
          className={`text-center py-16 bg-white rounded-2xl shadow-lg transition-all duration-1000 ${
            gridVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-700 mb-2">No articles found</h3>
          <p className="text-gray-500 mb-6">
            Try adjusting your search or filters to find what you&apos;re looking for.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-6 py-3 hero-gradient text-white rounded-lg hover:from-orange-600 hover:to-primary transition-all shadow-md hover:shadow-lg"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div 
          ref={paginationRef}
          className={`flex justify-center items-center gap-2 pt-8 transition-all duration-1000 ${
            paginationVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-primary hover:text-white shadow-md'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page Numbers */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Show first page, last page, current page, and pages around current
              const showPage =
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)

              if (!showPage) {
                // Show ellipsis
                if (page === currentPage - 2 || page === currentPage + 2) {
                  return (
                    <span key={page} className="px-4 py-2 text-gray-400">
                      ...
                    </span>
                  )
                }
                return null
              }

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    currentPage === page
                      ? 'bg-primary text-white shadow-lg transform scale-110'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  {page}
                </button>
              )
            })}
          </div>

          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-primary hover:text-white shadow-md'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

