'use client'

import * as React from 'react'
import { cn } from '@/lib/cn'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = 'default', size = 'default', isLoading = false, children, ...props },
  ref,
) {
  const baseStyles =
    'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    default: 'bg-ag-green hover:bg-ag-dark text-white focus-visible:ring-ag-green',
    destructive: 'bg-red-600 hover:bg-red-700 text-white focus-visible:ring-red-600',
    outline: 'border border-ag-green text-ag-green hover:bg-ag-green hover:text-white focus-visible:ring-ag-green',
    secondary: 'bg-ag-light-green hover:bg-ag-green text-white focus-visible:ring-ag-light-green',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-gray-400',
    link: 'text-ag-green underline-offset-4 hover:underline focus-visible:ring-ag-green',
  }

  const sizes = {
    default: 'h-10 px-4 py-2 text-base',
    sm: 'h-9 rounded-md px-3 text-sm',
    lg: 'h-12 rounded-md px-8 text-lg',
    icon: 'h-10 w-10',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export { Button }
