'use client'

import { Scissors } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LanguageSelector } from '@/components/language-selector'
import { useLanguage } from '@/components/language-provider'

export function SiteHeader() {
  const { t } = useLanguage()

  const navLinks = [
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.features, href: '#features' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
            <Scissors className="size-5 text-primary-foreground" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight">CutGenius</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="CutGenius">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSelector />
          <Button
            variant="ghost"
            className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline-flex"
          >
            {t.header.login}
          </Button>
          <Button className="bg-gradient-to-l from-primary to-accent font-semibold text-primary-foreground hover:opacity-90">
            {t.header.startFree}
          </Button>
        </div>
      </div>
    </header>
  )
}
