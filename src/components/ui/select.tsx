'use client'

import * as React from 'react'
import { cn } from '@/lib/cn'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string
  label?: string
  options?: { value: string; label: string }[]
  placeholder?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, error, label, options = [], placeholder, children, ...props },
  ref,
) {
  const selectId = props.id || `select-${Math.random()}`

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={selectId} className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
          {label}
        </label>
      )}
      <select
        className={cn(
          'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base focus:border-ag-green focus:outline-none focus:ring-2 focus:ring-ag-green focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-950 dark:text-white',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className,
        )}
        ref={ref}
        id={selectId}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        {children}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
})
Select.displayName = 'Select'

export { Select }
