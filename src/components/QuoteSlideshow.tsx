"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

const IMAGES = [
  '/images/quote/image_1.png',
  '/images/quote/image_2.png',
  '/images/quote/image_3.png',
  '/images/quote/image_4.png',
  '/images/quote/image_5.png',
  '/images/quote/image_6.png',
  '/images/quote/image_7.png'
]

type QuoteSlideshowProps = {
  intervalMs?: number
}

export default function QuoteSlideshow({ intervalMs = 3500 }: QuoteSlideshowProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  return (
    <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-xl">
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={src}
            alt={`Quote image ${i + 1}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {IMAGES.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-4 rounded-full transition-all duration-300 ${i === index ? 'bg-primary w-6' : 'bg-primary/50 w-6'}`}
          />
        ))}
      </div>
    </div>
  )
}

