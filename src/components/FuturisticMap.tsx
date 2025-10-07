'use client'

import { useEffect, useRef } from 'react'

type Marker = {
  lat: number
  lng: number
  title: string
  subtitle?: string
  href?: string
}

interface FuturisticMapProps {
  center: [number, number]
  zoom?: number
  markers: Marker[]
  height?: number
}

// Leaflet (OpenStreetMap) via CDN – free/open source.
export default function FuturisticMap({ center, zoom = 8, markers, height = 480 }: FuturisticMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let map: any
    let cleanup = () => {}

    const init = async () => {
      // CSS
      if (!document.querySelector('#leaflet-css')) {
        const link = document.createElement('link')
        link.id = 'leaflet-css'
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(link)
      }
      // JS
      const loadScript = () => new Promise<void>((resolve, reject) => {
        if ((window as any).L) return resolve()
        const s = document.createElement('script')
        s.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        s.async = true
        s.onload = () => resolve()
        s.onerror = () => reject(new Error('Failed to load Leaflet'))
        document.body.appendChild(s)
      })

      try { await loadScript() } catch { return }
      if (!mapRef.current) return

      const L = (window as any).L
      map = L.map(mapRef.current, { zoomControl: true, attributionControl: false }).setView([center[1], center[0]], zoom)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map)

      // Add markers with pulsing dot and collect bounds
      const bounds = L.latLngBounds([])
      markers.forEach((m) => {
        const html = '<div class="bw-marker"><div class="bw-pulse"></div><div class="bw-dot"></div></div>'
        const icon = L.divIcon({ className: 'bw-marker-wrap', html, iconSize: [18, 18], iconAnchor: [9, 9] })
        const marker = L.marker([m.lat, m.lng], { icon }).addTo(map)
        let popupHtml = `<div class="bw-popup"><div class="bw-title">${m.title}</div>`
        if (m.subtitle) popupHtml += `<div class="bw-sub">${m.subtitle}</div>`
        if (m.href) popupHtml += `<a class="bw-link" href="${m.href}" target="_blank" rel="noopener">Open</a>`
        popupHtml += `</div>`
        marker.bindPopup(popupHtml)
        bounds.extend([m.lat, m.lng])
      })

      // Fit bounds to show all markers; fallback to center if a single marker
      if (markers.length > 1) {
        map.fitBounds(bounds, { padding: [40, 40] })
      } else if (markers.length === 1) {
        map.setView([markers[0].lat, markers[0].lng], zoom)
      }

      cleanup = () => { try { map && map.remove() } catch {} }
    }

    init()
    return () => cleanup()
  }, [center, zoom, markers])

  return (
    <div className="relative">
      <div ref={mapRef} style={{ height }} className="rounded-2xl overflow-hidden shadow-xl" />

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


