'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import {
  DEFAULT_LANG,
  type Dictionary,
  type LangCode,
  languages,
  translations,
} from '@/lib/i18n'

type LanguageContextValue = {
  lang: LangCode
  setLang: (lang: LangCode) => void
  dir: 'rtl' | 'ltr'
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'cutgenius-lang'

function applyDocumentAttributes(lang: LangCode) {
  const meta = languages.find((l) => l.code === lang) ?? languages[0]
  const root = document.documentElement
  root.lang = meta.htmlLang
  root.dir = meta.dir
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(DEFAULT_LANG)

  // Restore persisted preference on mount.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as LangCode | null
    if (stored && languages.some((l) => l.code === stored)) {
      setLangState(stored)
      applyDocumentAttributes(stored)
    } else {
      applyDocumentAttributes(DEFAULT_LANG)
    }
  }, [])

  const setLang = (next: LangCode) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
    applyDocumentAttributes(next)
  }

  const dir = languages.find((l) => l.code === lang)?.dir ?? 'ltr'

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
