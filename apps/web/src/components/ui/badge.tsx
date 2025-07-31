import * as React from 'react'
import { cn } from '@/utils/cn'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'highlight'
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
        {
          'bg-primary text-white': variant === 'default',
          'bg-secondary text-white': variant === 'secondary',
          'border border-input bg-background text-foreground': variant === 'outline',
          'bg-highlight text-white': variant === 'highlight',
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
