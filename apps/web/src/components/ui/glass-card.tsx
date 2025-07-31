import * as React from 'react'
import { cn } from '@/utils/cn'

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: 'sm' | 'md' | 'lg' | 'xl'
  opacity?: 'light' | 'medium' | 'heavy'
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, blur = 'md', opacity = 'medium', ...props }, ref) => {
    const blurValue = {
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur-md',
      lg: 'backdrop-blur-lg',
      xl: 'backdrop-blur-xl',
    }[blur]

    const opacityValue = {
      light: 'bg-white/5 dark:bg-black/5',
      medium: 'bg-white/10 dark:bg-black/10',
      heavy: 'bg-white/20 dark:bg-black/20',
    }[opacity]

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border border-white/20 dark:border-white/5 shadow-sm',
          blurValue,
          opacityValue,
          className
        )}
        {...props}
      />
    )
  }
)
GlassCard.displayName = 'GlassCard'

export { GlassCard }
