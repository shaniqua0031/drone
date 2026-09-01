import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ServiceCard } from '@/components/services/service-card'
import Link from 'next/link'
import { mockServices } from '@/data/mock-services'

export const metadata = {
  title: 'Services | Drone Agriculture Platform',
  description: 'Explore our comprehensive drone-based agricultural services',
}

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-ag text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white">Services</Badge>
          <h1 className="text-5xl font-bold mb-4">Complete Agricultural Solutions</h1>
          <p className="text-xl text-ag-lime max-w-2xl mx-auto">
            From crop monitoring to farm mapping, we provide comprehensive drone-based services tailored to your farming needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service}
                onRequest={() => {
                  // Navigate to contact form with service pre-selected
                  if (typeof window !== 'undefined') {
                    localStorage.setItem('selectedService', service.name)
                    window.location.href = '/contact'
                  }
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Industry-Leading Technology
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: '94%', desc: 'Detection Accuracy' },
              { title: '24-48h', desc: 'Fast Turnaround' },
              { title: '500+', desc: 'hectares per flight' },
              { title: '99.2%', desc: 'Mapping Precision' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl font-bold text-ag-green mb-2">{stat.title}</p>
                <p className="text-gray-600 dark:text-gray-400">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-ag text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-ag-lime mb-8">Contact us today to request a service for your farm.</p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-ag-green">
              Request Service
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
