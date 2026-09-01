import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { mockCaseStudies } from '@/data/mock-recommendations'
import { TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Case Studies | Drone Agriculture Platform',
  description: 'See how our platform helped farms improve productivity',
}

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-ag text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white">Success Stories</Badge>
          <h1 className="text-5xl font-bold mb-4">Real Results from Real Farms</h1>
          <p className="text-xl text-ag-lime max-w-2xl mx-auto">
            See how farmers are using our platform to improve productivity and reduce costs.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mockCaseStudies.map((study, idx) => (
              <div key={study.id} className="grid md:grid-cols-2 gap-8 items-center">
                {idx % 2 === 0 && (
                  <div>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="rounded-lg w-full h-96 object-cover shadow-lg"
                    />
                  </div>
                )}

                <div>
                  <Badge className="mb-4">{study.location}</Badge>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{study.title}</h2>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Problem:</h3>
                    <p className="text-gray-600 dark:text-gray-400">{study.problem}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Solution:</h3>
                    <p className="text-gray-600 dark:text-gray-400">{study.solution}</p>
                  </div>

                  <div className="mb-6 space-y-3">
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">Results:</h3>
                    {study.results.map((result, ridx) => (
                      <div key={ridx} className="flex gap-3">
                        <TrendingUp className="h-5 w-5 text-ag-green flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{result.metric}: {result.value}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{result.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button>Request Service</Button>
                  </Link>
                </div>

                {idx % 2 === 1 && (
                  <div>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="rounded-lg w-full h-96 object-cover shadow-lg"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-ag text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-ag-lime mb-8">Let us help you achieve similar results for your farm.</p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-ag-green">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
