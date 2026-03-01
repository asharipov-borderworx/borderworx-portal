'use client'

import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Play, X } from 'lucide-react'

export default function BuffaloCultureVideoButton() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Play when modal opens and disable all text tracks
  useEffect(() => {
    if (open && videoRef.current) {
      const video = videoRef.current
      video.currentTime = 0

      // Disable subtitles/captions by default
      for (let i = 0; i < video.textTracks.length; i++) {
        video.textTracks[i].mode = 'disabled'
      }

      video.play()
    }
  }, [open])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const handleClose = () => {
    videoRef.current?.pause()
    setOpen(false)
  }

  const modal = open && (
    <div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      onClick={handleClose}
    >
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
        aria-label="Close video"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <video
        ref={videoRef}
        src="/images/blog/Buffalo-culture.mp4"
        controls
        className="w-full h-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
      >
        <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
          <Play className="w-4 h-4 fill-white" />
        </span>
        Watch Our Story
      </button>

      {mounted && createPortal(modal, document.body)}
    </>
  )
}
