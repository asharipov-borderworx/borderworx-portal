'use client'

import { useEffect, useRef } from 'react'

type Marker = {
  lat: number
  lng: number
  title: string
  subtitle?: string
  href?: string
}

interface GoogleMapProps {
  center: { lat: number; lng: number }
  zoom?: number
  markers: Marker[]
  height?: number
}

export default function GoogleMap({ center, zoom = 6, markers, height = 520 }: GoogleMapProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let map: google.maps.Map | null = null
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

    const injectScript = () => new Promise<void>((resolve, reject) => {
      if ((window as any).google?.maps) return resolve()
      const s = document.createElement('script')
      s.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=marker`
      s.async = true
      s.onload = () => resolve()
      s.onerror = () => reject(new Error('Failed to load Google Maps'))
      document.body.appendChild(s)
    })

    const init = async () => {
      if (!ref.current || !apiKey) return
      try { await injectScript() } catch { return }
      const g = (window as any).google as typeof google

      map = new g.maps.Map(ref.current, {
        center,
        zoom,
        mapId: 'DEMO_MAP', // uses default style; can be replaced with a custom styled map ID later
        disableDefaultUI: false,
        clickableIcons: true,
      })

      markers.forEach((m) => {
        const marker = new g.maps.marker.AdvancedMarkerElement({
          map: map!,
          position: { lat: m.lat, lng: m.lng },
          title: m.title,
        })
        const info = new g.maps.InfoWindow({
          content: `
            <div style="font-family:inherit;min-width:220px">
              <div style="font-weight:700;color:#111827;margin-bottom:4px">${m.title}</div>
              ${m.subtitle ? `<div style="color:#4b5563;margin-bottom:6px">${m.subtitle}</div>` : ''}
              ${m.href ? `<a href="${m.href}" target="_blank" rel="noopener" style="color:#f97316;font-weight:600">Open in Maps</a>` : ''}
            </div>
          `,
          ariaLabel: m.title,
        })
        marker.addListener('click', () => info.open({ map: map!, anchor: marker }))
      })
    }

    init()
    return () => { map = null }
  }, [center, zoom, markers])

  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    return (
      <div className="h-[520px] rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500">
        Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to enable Google Maps.
      </div>
    )
  }

  return <div ref={ref} style={{ height }} className="rounded-2xl overflow-hidden shadow-xl" />
}




