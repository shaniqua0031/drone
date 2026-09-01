import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | Drone Agriculture Platform',
  description: 'Learn about our mission to transform agriculture through technology',
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-ag text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white">About Us</Badge>
          <h1 className="text-5xl font-bold mb-4">Our Mission</h1>
          <p className="text-xl text-ag-lime max-w-2xl mx-auto">
            Transforming agriculture through advanced drone technology and AI-powered insights.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Who We Are</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We are a team of agricultural experts, drone pilots, and AI engineers dedicated to bringing precision agriculture to farmers worldwide.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                With over a decade of experience in both agriculture and drone technology, we understand the challenges farmers face and the opportunities that technology can provide.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Our platform combines cutting-edge drone technology with advanced AI to deliver actionable insights that help farmers make better decisions.
              </p>
            </div>
            <div>
              <img
                src="https://cdn3.saiwa.ai/Blog/farming_drones_for_crop_monitoring_f39ccb69_0f0f_496b_b929_7ad0a4e0756b_0d66da6eb6.jpg"
                alt="Team working"
                className="rounded-lg w-full h-96 object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Our Vision',
                description: 'Enable every farmer to harness the power of precision agriculture technology.',
              },
              {
                title: 'Our Values',
                description: 'Innovation, integrity, sustainability, and commitment to farmer success.',
              },
              {
                title: 'Our Impact',
                description: 'Helping farms increase productivity while reducing environmental impact.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Key Statistics</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { number: '250+', label: 'Active Farms' },
                { number: '12.5K+', label: 'Hectares Monitored' },
                { number: '1200+', label: 'Drone Surveys' },
                { number: '94%', label: 'Detection Accuracy' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-4xl font-bold text-ag-green mb-2">{stat.number}</p>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-ag text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Growing Community</h2>
          <p className="text-xl text-ag-lime mb-8">Partner with us to transform your farm.</p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-ag-green">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
