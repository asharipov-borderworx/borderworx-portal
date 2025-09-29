'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ServiceImageProps {
  imageUrl: string
  imageAlt: string
  serviceIndex: number
}

export default function ServiceImage({ imageUrl, imageAlt, serviceIndex }: ServiceImageProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm font-medium">
            {imageUrl.split('/').pop()}
          </p>
          <p className="text-xs text-gray-400 mt-1">Upload image to show here</p>
        </div>
        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          #{serviceIndex + 1}
        </div>
      </div>
    )
  }

  return (
    <div className="h-48 relative overflow-hidden">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={() => setImageError(true)}
      />
      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
        #{serviceIndex + 1}
      </div>
      {/* Overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
    </div>
  )
}
