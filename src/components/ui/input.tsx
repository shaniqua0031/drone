'use client'

import * as React from 'react'
import { cn } from '@/lib/cn'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, type, error, label, ...props },
  ref,
) {
  const inputId = props.id || `input-${Math.random()}`

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder:text-gray-400 focus:border-ag-green focus:outline-none focus:ring-2 focus:ring-ag-green focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className,
        )}
        ref={ref}
        id={inputId}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
})
Input.displayName = 'Input'

export { Input }
