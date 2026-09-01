'use client'

import * as React from 'react'
import { cn } from '@/lib/cn'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
  label?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, error, label, ...props },
  ref,
) {
  const textareaId = props.id || `textarea-${Math.random()}`

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder:text-gray-400 focus:border-ag-green focus:outline-none focus:ring-2 focus:ring-ag-green focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className,
        )}
        ref={ref}
        id={textareaId}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
