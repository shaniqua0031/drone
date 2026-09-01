'use client'

import Link from 'next/link'
import { useTheme, useMobile } from '@/hooks'
import { Button } from '@/components/ui/button'
import { Menu, X, Moon, Sun, Wind } from 'lucide-react'
import { useState } from 'react'
import { NAVIGATION_LINKS } from '@/data/constants'

export function Navbar() {
  const { theme, toggleTheme, mounted } = useTheme()
  const { isMobile, mounted: mobileMounted } = useMobile()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  if (!mounted || !mobileMounted) {
    return (
      <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Wind className="h-8 w-8 text-ag-green" />
              <span className="font-bold text-xl hidden sm:inline text-gray-900 dark:text-white">DroneAg</span>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-white hover:text-ag-green">
            <Wind className="h-8 w-8 text-ag-green" />
            <span className="hidden sm:inline">DroneAg</span>
          </Link>

          {!isMobile && (
            <div className="hidden md:flex items-center gap-1">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-ag-green hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-ag-green transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {isMobile ? (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            ) : (
              <Link href="/contact">
                <Button size="sm">Request Service</Button>
              </Link>
            )}
          </div>
        </div>

        {isMobile && mobileMenuOpen && (
          <div className="border-t border-gray-200 dark:border-gray-800 py-2">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-ag-green hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-ag-green"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link href="/contact">
                <Button className="w-full" size="sm">
                  Request Service
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
