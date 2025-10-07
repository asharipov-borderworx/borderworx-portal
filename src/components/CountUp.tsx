'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  end: number
  durationMs?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}

// Easing for a smoother finish
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export default function CountUp({
  end,
  durationMs = 1000,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
}: CountUpProps) {
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)
  const containerRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const startTs = performance.now()

            const step = (ts: number) => {
              const elapsed = ts - startTs
              const t = Math.min(1, elapsed / durationMs)
              const eased = easeOutCubic(t)
              const current = end * eased
              setValue(current)
              if (t < 1) requestAnimationFrame(step)
            }

            requestAnimationFrame(step)
          }
        })
      },
      { threshold: 0.25 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [durationMs, end])

  const formatted = value.toFixed(decimals)

  return (
    <span ref={containerRef} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}


