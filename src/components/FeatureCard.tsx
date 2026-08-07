import React from 'react'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

/**
 * FeatureCard component with rounded corners and Ghibli-inspired warmth
 */
const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, className = "" }) => {
  return (
    <div className={`card p-8 flex flex-col items-start gap-4 group hover:-translate-y-2 ${className}`}>
      <div className="p-3 rounded-2xl bg-teal-50 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-glow">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeatureCard
