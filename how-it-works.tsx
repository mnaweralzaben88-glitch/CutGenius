'use client'

import { Download, ScanSearch, Upload } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const icons = [Upload, ScanSearch, Download]

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section id="how-it-works" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-accent">{t.how.eyebrow}</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {t.how.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">{t.how.subtitle}</p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {t.how.steps.map((step, i) => {
            const Icon = icons[i]
            return (
              <li
                key={step.title}
                className="group relative rounded-3xl border border-border bg-card/60 p-7 transition-colors hover:border-primary/50"
              >
                <span className="absolute left-6 top-6 text-5xl font-black text-primary/15 tabular-nums">
                  {`0${i + 1}`}
                </span>
                <span className="relative flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-accent/25 text-primary ring-1 ring-inset ring-border">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{step.desc}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
