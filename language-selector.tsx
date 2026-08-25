'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { languages } from '@/lib/i18n'
import { useLanguage } from '@/components/language-provider'

export function LanguageSelector() {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const selected = languages.find((l) => l.code === lang) ?? languages[0]

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.header.selectLanguage}
        className={cn(
          'flex items-center gap-1.5 rounded-lg border border-border/60 bg-secondary/40 px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground',
          open && 'border-accent/60 text-foreground',
        )}
      >
        <Globe className="size-4 text-accent" aria-hidden="true" />
        <span className="tabular-nums">{selected.code}</span>
        <ChevronDown
          className={cn('size-4 transition-transform duration-200', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.header.availableLanguages}
          className="absolute end-0 top-full z-50 mt-2 w-48 origin-top overflow-hidden rounded-xl border border-border/60 bg-popover/95 p-1 shadow-xl shadow-primary/10 backdrop-blur-xl"
        >
          {languages.map((item) => {
            const isActive = item.code === selected.code
            return (
              <li key={item.code} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(item.code)
                    setOpen(false)
                  }}
                  className={cn(
                    'flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                    isActive
                      ? 'bg-gradient-to-l from-primary/20 to-accent/20 text-foreground'
                      : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground',
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={cn(
                        'w-7 shrink-0 text-start text-xs font-bold tabular-nums',
                        isActive ? 'text-accent' : 'text-muted-foreground/70',
                      )}
                    >
                      {item.code}
                    </span>
                    <span>{item.native}</span>
                  </span>
                  {isActive && <Check className="size-4 text-accent" aria-hidden="true" />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
