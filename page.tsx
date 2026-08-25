import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Pricing } from '@/components/pricing'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Pricing />
      </main>
      <SiteFooter />
    </div>
  )
}
