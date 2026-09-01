import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Drone Agriculture Platform | Smarter Farming Through Technology',
  description: 'Transform your farm with aerial intelligence, crop monitoring, mapping, and AI-powered agricultural insights powered by drone technology.',
  keywords: 'drone, agriculture, farming, crop monitoring, farm management, AI, precision agriculture',
  authors: [{ name: 'Drone Agriculture Platform' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://droneagritech.com',
    title: 'Drone Agriculture Platform | Smarter Farming',
    description: 'Transform your farm with drone technology and AI insights',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1500382017468-7049fae79e70?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Drone Agriculture',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') document.documentElement.classList.add('dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
