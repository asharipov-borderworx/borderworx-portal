'use client'

import { useEffect, useRef } from 'react'

type Marker = {
  lat: number
  lng: number
  title: string
  subtitle?: string
  href?: string
}

interface MapboxMapProps {
  center: [number, number]
  zoom?: number
  height?: number
  markers: Marker[]
}

export default function MapboxMap({ center, zoom = 7, height = 520, markers }: MapboxMapProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let map: any
    let cleanup = () => {}

    const init = async () => {
      // CSS
      if (!document.querySelector('#mapbox-gl-css')) {
        const link = document.createElement('link')
        link.id = 'mapbox-gl-css'
        link.rel = 'stylesheet'
        link.href = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css'
        document.head.appendChild(link)
      }
      // JS
      const loadScript = () => new Promise<void>((resolve, reject) => {
        if ((window as any).mapboxgl) return resolve()
        const s = document.createElement('script')
        s.src = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js'
        s.async = true
        s.onload = () => resolve()
        s.onerror = () => reject(new Error('Failed to load Mapbox GL'))
        document.body.appendChild(s)
      })

      try { await loadScript() } catch { return }
      const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
      if (!token || !ref.current) return

      const mapboxgl = (window as any).mapboxgl
      mapboxgl.accessToken = token

      map = new mapboxgl.Map({
        container: ref.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center,
        zoom,
        cooperativeGestures: true,
        attributionControl: false,
      })

      map.on('load', () => {
        markers.forEach((m) => {
          const el = document.createElement('div')
          el.className = 'bw-marker'
          el.innerHTML = '<div class="bw-pulse"></div><div class="bw-dot"></div>'
          const popup = new mapboxgl.Popup({ offset: 14 }).setHTML(
            `<div class="bw-popup"><div class="bw-title">${m.title}</div>${m.subtitle ? `<div class="bw-sub">${m.subtitle}</div>` : ''}${m.href ? `<a class="bw-link" href="${m.href}" target="_blank" rel="noopener">Open in Maps</a>` : ''}</div>`
          )
          new mapboxgl.Marker(el).setLngLat([m.lng, m.lat]).setPopup(popup).addTo(map)
        })
      })

      cleanup = () => { try { map && map.remove() } catch {} }
    }

    init()
    return () => cleanup()
  }, [center, zoom, markers])

  if (!process.env.NEXT_PUBLIC_MAPBOX_TOKEN) {
    return (
      <div className="h-[520px] rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500">
        Add NEXT_PUBLIC_MAPBOX_TOKEN to enable the interactive map.
      </div>
    )
  }

  return (
    <div className="relative">
      <div ref={ref} style={{ height }} className="rounded-2xl overflow-hidden shadow-xl" />
      <style jsx>{`
        .bw-marker { position: relative; width: 18px; height: 18px; }
        .bw-dot { position: absolute; inset: 3px; border-radius: 9999px; background: #f97316; box-shadow: 0 0 10px rgba(249,115,22,.6); }
        .bw-pulse { position: absolute; inset: 0; border-radius: 9999px; background: rgba(249,115,22,.35); animation: bwpulse 1.8s ease-out infinite; }
        @keyframes bwpulse { 0% { transform: scale(.6); opacity: .9 } 80% { transform: scale(1.6); opacity: 0 } 100% { opacity: 0 } }
        .bw-popup { font-family: inherit; }
        .bw-title { font-weight: 700; color: #111827; }
        .bw-sub { color: #4b5563; font-size: .9rem; margin-top: .15rem; }
        .bw-link { display: inline-block; margin-top: .5rem; color: #f97316; font-weight: 600 }
      `}</style>
    </div>
  )
}




