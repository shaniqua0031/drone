import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ServiceCard } from '@/components/services/service-card'
import { StatCard } from '@/components/dashboard/stats-card'
import { Leaf, Map, BarChart3, Droplets, AlertCircle, Eye, Camera, Sprout, TrendingUp, CheckCircle } from 'lucide-react'
import { mockServices } from '@/data/mock-services'
import { DASHBOARD_STATS_MOCK } from '@/data/constants'

export const metadata = {
  title: 'Home | Drone Agriculture Platform',
  description: 'Transform your farm with aerial intelligence and AI-powered insights',
}

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-ag overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <Badge variant="outline" className="mb-4 bg-white/20 text-white border-white">
                🚁 Precision Agriculture
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Smarter Farming. Powered by Drone Technology.
              </h1>
              <p className="text-xl mb-8 text-ag-lime">
                Transform the way you manage your farm with aerial intelligence, crop monitoring, mapping, and AI-powered agricultural insights.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" variant="secondary" className="text-ag-green">
                    Explore Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ag-green">
                    Request a Service
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-col sm:flex-row gap-6 mt-12 text-sm">
                <div>
                  <p className="font-bold text-2xl">250+</p>
                  <p className="text-white/80">Farms Monitored</p>
                </div>
                <div>
                  <p className="font-bold text-2xl">12.5K+</p>
                  <p className="text-white/80">Hectares Mapped</p>
                </div>
                <div>
                  <p className="font-bold text-2xl">94%</p>
                  <p className="text-white/80">Accuracy Rate</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 md:h-full">
              <img
                src="https://cdn3.saiwa.ai/Blog/farming_drones_for_crop_monitoring_f39ccb69_0f0f_496b_b929_7ad0a4e0756b_0d66da6eb6.jpg"
                alt="Agricultural field being monitored by drone"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-ag-green/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Impact</Badge>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Leading Agriculture Intelligence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Helping farmers and agricultural businesses make better decisions with data-driven insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <StatCard
              title="Total Farms Monitored"
              value={DASHBOARD_STATS_MOCK.totalFarmsMonitored}
              description="Active farm partnerships"
              trend={12}
              icon={<Leaf className="h-5 w-5" />}
              variant="success"
            />
            <StatCard
              title="Hectares Mapped"
              value={`${(DASHBOARD_STATS_MOCK.totalHectaresMapped / 1000).toFixed(1)}K`}
              description="Total coverage area"
              trend={8}
              icon={<Map className="h-5 w-5" />}
              variant="success"
            />
            <StatCard
              title="Average Crop Health"
              value={`${DASHBOARD_STATS_MOCK.averageCropHealth}%`}
              description="Across all monitored farms"
              trend={5}
              icon={<TrendingUp className="h-5 w-5" />}
              variant="success"
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Drone Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From crop monitoring to farm mapping, we provide complete agricultural solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {mockServices.slice(0, 5).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Process</Badge>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How Our Platform Works
            </h2>
          </div>

          <div className="grid md:grid-cols-6 gap-4">
            {[
              { step: 1, title: 'Request', icon: CheckCircle },
              { step: 2, title: 'Plan', icon: Map },
              { step: 3, title: 'Fly', icon: Eye },
              { step: 4, title: 'Analyze', icon: BarChart3 },
              { step: 5, title: 'Insights', icon: TrendingUp },
              { step: 6, title: 'Action', icon: Leaf },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="relative">
                  <div className="bg-white dark:bg-gray-950 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-800 hover:border-ag-green transition-colors">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ag-lime/20 text-ag-green font-bold mb-3">
                      {item.step}
                    </div>
                    <Icon className="h-6 w-6 mx-auto mb-2 text-ag-green" />
                    <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                  </div>
                  {idx < 5 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-ag-green"></div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Features</Badge>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AI-Powered Analysis
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Crop Health Analysis',
                description: 'Real-time monitoring of crop health with AI-powered disease and pest detection.',
                icon: Leaf,
              },
              {
                title: 'Precision Mapping',
                description: 'Detailed orthomosaics and 3D models of your farm for better planning.',
                icon: Map,
              },
              {
                title: 'Data Insights',
                description: 'Actionable recommendations based on farm data and AI analysis.',
                icon: BarChart3,
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="bg-white dark:bg-gray-950 rounded-lg p-8 border border-gray-200 dark:border-gray-800">
                  <div className="rounded-lg p-3 bg-ag-lime/20 w-fit mb-4">
                    <Icon className="h-6 w-6 text-ag-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-ag">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Farm?</h2>
          <p className="text-xl mb-8 text-ag-lime">
            Start monitoring your crops with drone technology and AI-powered insights today.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-ag-green">
              Request a Service Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
