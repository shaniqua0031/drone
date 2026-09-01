'use client'

import * as React from 'react'
import { cn } from '@/lib/cn'
import { ChevronDown } from 'lucide-react'

export interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
}

export interface AccordionProps {
  items: AccordionItem[]
  defaultOpen?: string[]
  allowMultiple?: boolean
}

export function Accordion({ items, defaultOpen = [], allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set(defaultOpen))

  const toggleItem = (id: string) => {
    const newOpen = new Set(openItems)
    if (newOpen.has(id)) {
      newOpen.delete(id)
    } else {
      if (!allowMultiple) {
        newOpen.clear()
      }
      newOpen.add(id)
    }
    setOpenItems(newOpen)
  }

  return (
    <div className="space-y-2 border-t border-gray-200 dark:border-gray-800">
      {items.map((item) => (
        <div key={item.id} className="border-b border-gray-200 dark:border-gray-800">
          <button
            onClick={() => toggleItem(item.id)}
            className="flex w-full items-center justify-between px-4 py-3 text-left font-medium hover:bg-gray-50 dark:hover:bg-gray-900"
          >
            {item.title}
            <ChevronDown
              className={cn('h-5 w-5 transition-transform', openItems.has(item.id) && 'rotate-180')}
            />
          </button>
          {openItems.has(item.id) && (
            <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-800 dark:bg-gray-900">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
