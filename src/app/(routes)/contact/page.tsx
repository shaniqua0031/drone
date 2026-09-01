'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'
import { SERVICE_CATEGORIES } from '@/data/constants'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    farmerName: '',
    email: '',
    phone: '',
    farmName: '',
    serviceRequired: '',
    preferredDate: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setIsLoading(false)
    
    // Reset form
    setTimeout(() => {
      setFormData({
        farmerName: '',
        email: '',
        phone: '',
        farmName: '',
        serviceRequired: '',
        preferredDate: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div>
      {/* Hero */}
      <section className="gradient-ag text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white">Contact</Badge>
          <h1 className="text-5xl font-bold mb-4">Request a Service</h1>
          <p className="text-xl text-ag-lime">Get in touch with our team today</p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Form */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Submit a Request</h2>

              {submitted ? (
                <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">
                    Thank you for your request!
                  </h3>
                  <p className="text-green-800 dark:text-green-200">
                    Our team will contact you within 24 hours to confirm details and schedule your survey.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Farmer Name"
                      name="farmerName"
                      value={formData.farmerName}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 123 456 7890"
                    />
                    <Input
                      label="Farm Name"
                      name="farmName"
                      value={formData.farmName}
                      onChange={handleChange}
                      required
                      placeholder="Your farm name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Select
                      label="Service Required"
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      required
                      options={SERVICE_CATEGORIES.map((cat) => ({
                        value: cat,
                        label: cat,
                      }))}
                      placeholder="Select a service"
                    />
                    <Input
                      label="Preferred Date"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Textarea
                    label="Additional Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your farm and needs..."
                    rows={5}
                  />

                  <Button type="submit" isLoading={isLoading} className="w-full">
                    Submit Request
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="h-6 w-6 text-ag-green flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                    <a href="mailto:info@droneagritech.com" className="text-ag-green hover:text-ag-dark">
                      info@droneagritech.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="h-6 w-6 text-ag-green flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                    <a href="tel:+1555DRONETECH" className="text-ag-green hover:text-ag-dark">
                      +1-555-DRONE-TECH
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-ag-green flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">South Africa</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mt-12">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Why Contact Us?</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex gap-2">
                    <span className="text-ag-green">✓</span>
                    <span>Fast turnaround times</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-ag-green">✓</span>
                    <span>Expert analysis</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-ag-green">✓</span>
                    <span>Affordable pricing</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-ag-green">✓</span>
                    <span>Professional support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
