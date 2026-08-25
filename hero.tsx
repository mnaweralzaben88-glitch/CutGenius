'use client'

import { useRef, useState } from 'react'
import { Link2, Sparkles, Star, UploadCloud, Wand2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

type Mode = 'upload' | 'youtube'

export function Hero() {
  const { t } = useLanguage()
  const [mode, setMode] = useState<Mode>('upload')
  const [dragging, setDragging] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)
  const [url, setUrl] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-20 sm:px-6 sm:pt-24">
      {/* glow backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-1/4 size-[28rem] rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute top-10 left-1/4 size-[24rem] rounded-full bg-accent/25 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
          {t.hero.badge}
        </span>

        <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl">
          {t.hero.titlePrefix}
          <span className="text-gradient">{t.hero.titleHighlight}</span>
          {t.hero.titleSuffix}
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.hero.subtitle}
        </p>
      </div>

      {/* Upload card */}
      <div className="mx-auto mt-10 max-w-xl">
        <div className="rounded-3xl border border-border bg-card/70 p-2 shadow-2xl backdrop-blur-md glow-purple">
          <div className="rounded-[1.35rem] border border-border/60 bg-background/40 p-5 sm:p-6">
            {/* Tabs */}
            <div className="mb-5 grid grid-cols-2 gap-1 rounded-xl bg-secondary/60 p-1">
              <button
                type="button"
                onClick={() => setMode('upload')}
                className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  mode === 'upload'
                    ? 'bg-gradient-to-l from-primary to-accent text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <UploadCloud className="size-4" aria-hidden="true" />
                {t.hero.tabUpload}
              </button>
              <button
                type="button"
                onClick={() => setMode('youtube')}
                className={`flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  mode === 'youtube'
                    ? 'bg-gradient-to-l from-primary to-accent text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Link2 className="size-4" aria-hidden="true" />
                {t.hero.tabYoutube}
              </button>
            </div>

            {mode === 'upload' ? (
              <div
                onDragOver={(e) => {
                  e.preventDefault()
                  setDragging(true)
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                  e.preventDefault()
                  setDragging(false)
                  const f = e.dataTransfer.files?.[0]
                  if (f) setFileName(f.name)
                }}
                onClick={() => inputRef.current?.click()}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click()
                }}
                className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-colors ${
                  dragging ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/60'
                }`}
              >
                <input
                  ref={inputRef}
                  type="file"
                  accept="video/*"
                  className="sr-only"
                  onChange={(e) => {
                    const f = e.target.files?.[0]
                    if (f) setFileName(f.name)
                  }}
                />
                <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <UploadCloud className="size-6" aria-hidden="true" />
                </span>
                <p className="mt-4 text-sm font-semibold">{fileName ?? t.hero.dropText}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.hero.dropFormats}</p>
              </div>
            ) : (
              <div className="rounded-2xl border border-border bg-background/50 p-4">
                <label htmlFor="yt-url" className="text-sm font-semibold">
                  {t.hero.ytLabel}
                </label>
                <div className="mt-3 flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-3">
                  <Link2 className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <input
                    id="yt-url"
                    type="url"
                    dir="ltr"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder={t.hero.ytPlaceholder}
                    className="w-full bg-transparent py-3 text-left text-sm outline-none placeholder:text-muted-foreground"
                  />
                </div>
              </div>
            )}

            <Button
              size="lg"
              className="mt-5 w-full bg-gradient-to-l from-primary to-accent text-base font-bold text-primary-foreground hover:opacity-90"
            >
              <Wand2 className="size-5" aria-hidden="true" />
              {t.hero.cta}
            </Button>

            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
              <Star className="size-3.5 fill-accent text-accent" aria-hidden="true" />
              {t.hero.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
