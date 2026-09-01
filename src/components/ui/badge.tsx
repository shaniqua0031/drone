'use client'

import * as React from 'react'
import { cn } from '@/lib/cn'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info'
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(function Badge(
  { className, variant = 'default', ...props },
  ref,
) {
  const variants = {
    default: 'bg-ag-green text-white',
    secondary: 'bg-ag-light-green text-white',
    destructive: 'bg-red-500 text-white',
    outline: 'border border-ag-green text-ag-green',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    info: 'bg-blue-500 text-white',
  }

  return (
    <div
      ref={ref}
      className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors', variants[variant], className)}
      {...props}
    />
  )
})
Badge.displayName = 'Badge'

export { Badge }
