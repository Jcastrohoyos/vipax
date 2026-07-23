import { createContext, useContext, useState, useEffect } from 'react'
import es from '../i18n/es.json'
import en from '../i18n/en.json'
import fr from '../i18n/fr.json'

const translations = { es, en, fr }
const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es')

  useEffect(() => {
    const saved = localStorage.getItem('vipax-language')
    if (saved && translations[saved]) {
      setLanguage(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('vipax-language', language)
    document.documentElement.lang = language
  }, [language])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
