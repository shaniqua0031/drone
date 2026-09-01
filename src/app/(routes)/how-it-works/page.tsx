import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle, Map, Eye, BarChart3, TrendingUp, Leaf, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'How It Works | Drone Agriculture Platform',
  description: 'Learn how our drone monitoring and analysis process works',
}

const steps = [
  {
    number: 1,
    title: 'Request a Service',
    description: 'Submit a service request through our platform with your farm details.',
    icon: CheckCircle,
    details: [
      'Choose your desired service',
      'Provide farm location and size',
      'Select preferred survey date',
    ],
  },
  {
    number: 2,
    title: 'Plan the Survey',
    description: 'Our team plans the optimal drone flight path for your farm.',
    icon: Map,
    details: [
      'Analyze farm boundaries',
      'Plan flight route',
      'Check weather conditions',
    ],
  },
  {
    number: 3,
    title: 'Drone Flight',
    description: 'Drone collects high-resolution aerial imagery and data.',
    icon: Eye,
    details: [
      'Multi-spectral imaging',
      'GPS mapping',
      'High-resolution photos',
    ],
  },
  {
    number: 4,
    title: 'Data Analysis',
    description: 'Advanced AI algorithms process the collected data.',
    icon: BarChart3,
    details: [
      'Crop health calculation',
      'Problem area detection',
      'Yield estimation',
    ],
  },
  {
    number: 5,
    title: 'Insights Generation',
    description: 'Receive detailed reports and AI-powered recommendations.',
    icon: TrendingUp,
    details: [
      'Actionable recommendations',
      'Visual maps and charts',
      'PDF reports',
    ],
  },
  {
    number: 6,
    title: 'Take Action',
    description: 'Use the insights to improve your farm management.',
    icon: Leaf,
    details: [
      'Optimize irrigation',
      'Targeted pest control',
      'Better crop planning',
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-ag text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white">Process</Badge>
          <h1 className="text-5xl font-bold mb-4">How Our Platform Works</h1>
          <p className="text-xl text-ag-lime max-w-2xl mx-auto">
            From service request to actionable insights in 6 simple steps.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isEven = idx % 2 === 0
              
              return (
                <div key={step.number} className="flex gap-8 items-center">
                  {!isEven && (
                    <div className="flex-1 hidden md:block">
                      <img
                        src={idx === 2 ? 'https://cdn3.saiwa.ai/Blog/farming_drones_for_crop_monitoring_f39ccb69_0f0f_496b_b929_7ad0a4e0756b_0d66da6eb6.jpg' : `https://images.unsplash.com/photo-${
                          idx === 0 ? '1611632622046-7287bba0d87c' :
                          idx === 1 ? '1524661135-423995f22d0b' :
                          idx === 3 ? '1551288049-bebda4e9f71e' :
                          idx === 4 ? '1540575467063-178f50c2fe5e' :
                          '1500382017468-7049fae79e70'
                        }?w=400&h=300&fit=crop`}
                        alt={step.title}
                        className="rounded-lg w-full h-64 object-cover"
                      />
                    </div>
                  )}

                  <div className={`flex-1 ${isEven ? 'md:order-first' : ''}`}>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-ag-lime/20 text-ag-green font-bold text-xl mb-4">
                      {step.number}
                    </div>
                    
                    <div className="flex items-start gap-3 mb-3">
                      <Icon className="h-7 w-7 text-ag-green flex-shrink-0 mt-1" />
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>

                    <ul className="space-y-2">
                      {step.details.map((detail, didx) => (
                        <li key={didx} className="flex gap-2 text-gray-700 dark:text-gray-300">
                          <span className="text-ag-green font-bold">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {isEven && (
                    <div className="flex-1 hidden md:block">
                      <img
                        src={idx === 2 ? 'https://cdn3.saiwa.ai/Blog/farming_drones_for_crop_monitoring_f39ccb69_0f0f_496b_b929_7ad0a4e0756b_0d66da6eb6.jpg' : `https://images.unsplash.com/photo-${
                          idx === 0 ? '1611632622046-7287bba0d87c' :
                          idx === 1 ? '1524661135-423995f22d0b' :
                          idx === 3 ? '1551288049-bebda4e9f71e' :
                          idx === 4 ? '1540575467063-178f50c2fe5e' :
                          '1500382017468-7049fae79e70'
                        }?w=400&h=300&fit=crop`}
                        alt={step.title}
                        className="rounded-lg w-full h-64 object-cover"
                      />
                    </div>
                  )}

                  {idx < steps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center h-12 md:absolute right-1/2 -mb-12">
                      <ArrowRight className="h-6 w-6 text-ag-green rotate-90" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Timeline</Badge>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Turnaround Times
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Survey',
                time: '30-90 minutes',
                description: 'Depending on farm size',
              },
              {
                title: 'Analysis',
                time: '24 hours',
                description: 'AI-powered data processing',
              },
              {
                title: 'Report',
                time: '24-48 hours',
                description: 'Detailed insights and recommendations',
              },
            ].map((timeline, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-950 rounded-lg p-8 border border-gray-200 dark:border-gray-800 text-center">
                <p className="text-3xl font-bold text-ag-green mb-2">{timeline.time}</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{timeline.title}</p>
                <p className="text-gray-600 dark:text-gray-400">{timeline.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-ag text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-ag-lime mb-8">Begin your journey to smarter farming today.</p>
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
