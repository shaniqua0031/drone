import { Badge } from '@/components/ui/badge'
import Accordion from '@/components/ui/accordion'
import { mockFAQ } from '@/data/mock-recommendations'

export const metadata = {
  title: 'FAQ | Drone Agriculture Platform',
  description: 'Frequently asked questions about our drone monitoring services',
}

export default function FAQPage() {
  // Group FAQ by category
  const faqByCategory = mockFAQ.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, typeof mockFAQ>)

  return (
    <div>
      {/* Hero */}
      <section className="gradient-ag text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white">FAQ</Badge>
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-ag-lime">Find answers to common questions about our platform and services.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {Object.entries(faqByCategory).map(([category, items]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{category}</h2>
              <Accordion
                items={items.map((item) => ({
                  id: item.id,
                  title: item.question,
                  content: item.answer,
                }))}
                allowMultiple
              />
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Our team is ready to help. Contact us for personalized assistance.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 text-ag-green font-semibold hover:text-ag-dark">
            Get in Touch →
          </a>
        </div>
      </section>
    </div>
  )
}
