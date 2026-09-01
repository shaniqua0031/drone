'use client'

import Link from 'next/link'
import { Wind, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wind className="h-8 w-8 text-ag-green" />
              <span className="font-bold text-lg text-gray-900 dark:text-white">DroneAg</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Transforming agriculture with drone technology and AI-powered insights for smarter farming decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-ag-green dark:text-gray-400 dark:hover:text-ag-green">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-gray-600 hover:text-ag-green dark:text-gray-400 dark:hover:text-ag-green">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-sm text-gray-600 hover:text-ag-green dark:text-gray-400 dark:hover:text-ag-green">
                  Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-ag-green dark:text-gray-400 dark:hover:text-ag-green">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm text-gray-600 hover:text-ag-green dark:text-gray-400 dark:hover:text-ag-green">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-600 hover:text-ag-green dark:text-gray-400 dark:hover:text-ag-green">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="h-5 w-5 flex-shrink-0 text-ag-green" />
                <span>info@droneagritech.com</span>
              </li>
              <li className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Phone className="h-5 w-5 flex-shrink-0 text-ag-green" />
                <span>+1-555-DRONE-TECH</span>
              </li>
              <li className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5 flex-shrink-0 text-ag-green" />
                <span>South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-ag-green transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-ag-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-ag-green transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-ag-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Drone Agriculture Platform. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
