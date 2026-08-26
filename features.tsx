'use client'

import { Clock, Globe, Languages, Sparkles, TrendingUp, Wand2 } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const icons = [Wand2, Languages, TrendingUp, Clock, Globe, Sparkles]

export function Features() {
  const { t } = useLanguage()

  return (
    <section id="features" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-accent">{t.features.eyebrow}</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {t.features.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((feature, i) => {
            const Icon = icons[i]
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-accent/50"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-bold">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {feature.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
