'use client'

import * as React from 'react'
import { cn } from '@/lib/cn'
import { X } from 'lucide-react'

export interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  children: React.ReactNode
  footer?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(function Modal(
  { open, onOpenChange, title, children, footer, size = 'md' },
  ref,
) {
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity dark:bg-gray-900 dark:bg-opacity-75"
          onClick={() => onOpenChange(false)}
        />

        <div
          ref={ref}
          className={cn(
            'relative inline-block transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all dark:bg-gray-950 sm:my-8 sm:w-full',
            sizes[size],
          )}
        >
          {title && (
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
              <button
                onClick={() => onOpenChange(false)}
                className="rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          )}

          <div className="px-4 py-3 sm:p-6">{children}</div>

          {footer && <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-800 dark:bg-gray-900">{footer}</div>}
        </div>
      </div>
    </div>
  )
})

Modal.displayName = 'Modal'

export { Modal }
