import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cairo } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CutGenius — حوّل الفيديوهات الطويلة إلى ريلز رائجة بالذكاء الاصطناعي',
  description:
    'CutGenius خدمة سحابية تعيد استخدام فيديوهاتك الطويلة وتحوّلها تلقائيًا إلى مقاطع قصيرة رائجة لريلز وتيك توك ويوتيوب شورتس مع ترجمة جاهزة.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#140f22',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`dark ${cairo.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
