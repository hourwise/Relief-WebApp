import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play, Volume2, VolumeX } from 'lucide-react'

export interface ReliefMediaItem {
  type: 'video'
  src: string
  title?: string
  caption?: string
  poster?: string
  externalUrl?: string
}

interface ReliefMediaShowcaseProps {
  items: ReliefMediaItem[]
}

const ReliefMediaShowcase: React.FC<ReliefMediaShowcaseProps> = ({ items }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const item = items[activeIndex]

  useEffect(() => {
    setActiveIndex((index) => Math.min(index, Math.max(items.length - 1, 0)))
  }, [items.length])

  useEffect(() => {
    videoRef.current?.load()
    setIsPlaying(false)
    setIsMuted(true)
  }, [activeIndex])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(mediaQuery.matches)
    update()
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || reducedMotion) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
      } else {
        video.pause()
        setIsPlaying(false)
      }
    }, { threshold: 0.6 })
    observer.observe(video)
    return () => observer.disconnect()
  }, [reducedMotion])

  if (!item) return null

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) void video.play().then(() => setIsPlaying(true))
    else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  const showPrevious = () => setActiveIndex((index) => (index - 1 + items.length) % items.length)
  const showNext = () => setActiveIndex((index) => (index + 1) % items.length)

  return (
    <figure className="card overflow-hidden bg-white p-3 md:p-4">
      <div className="relative overflow-hidden rounded-2xl bg-slate-900">
        <video
          ref={videoRef}
          className="block h-auto max-h-[32rem] w-full object-contain"
          src={item.src}
          poster={item.poster}
          autoPlay={!reducedMotion}
          muted
          playsInline
          loop={items.length === 1}
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          aria-label={item.title || 'Relief video'}
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/75 to-transparent p-4 pt-10">
          {items.length > 1 ? (
            <button type="button" onClick={showPrevious} className="rounded-full bg-white/90 p-2 text-primary-dark focus-visible" aria-label="Previous Relief media">
              <ChevronLeft className="h-5 w-5" />
            </button>
          ) : <span />}
          <button type="button" onClick={togglePlayback} className="rounded-full bg-white/90 p-2 text-primary-dark focus-visible" aria-label={isPlaying ? 'Pause video' : 'Play video'}>
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          <div className="flex items-center gap-3">
            <button type="button" onClick={toggleMute} className="rounded-full bg-white/90 p-2 text-primary-dark focus-visible" aria-label={isMuted ? 'Unmute video' : 'Mute video'}>
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
            {items.length > 1 && <button type="button" onClick={showNext} className="rounded-full bg-white/90 p-2 text-primary-dark focus-visible" aria-label="Next Relief media"><ChevronRight className="h-5 w-5" /></button>}
          </div>
        </div>
      </div>
      {(item.title || item.caption) && (
        <figcaption className="px-2 pb-1 pt-4">
          {item.title && <h3 className="font-semibold text-text-primary">{item.title}</h3>}
          {item.caption && <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.caption}</p>}
        </figcaption>
      )}
    </figure>
  )
}

export default ReliefMediaShowcase
