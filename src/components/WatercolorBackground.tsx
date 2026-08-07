import React from 'react'

/**
 * WatercolorBackground component
 * Provides a Ghibli-inspired textured background with soft map lines
 */
const WatercolorBackground: React.FC<{ children?: React.ReactNode; className?: string }> = ({
  children,
  className = ""
}) => {
  return (
    <div className={`relative min-h-screen w-full overflow-hidden bg-background map-lines watercolor-texture ${className}`}>
      {/* Soft gradient blobs for warmth */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[100px] animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-warning/5 blur-[80px] animate-float" style={{ animationDelay: '4s' }} />

      {/* The actual content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default WatercolorBackground
