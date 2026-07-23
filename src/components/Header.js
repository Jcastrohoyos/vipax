import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import styles from './Header.module.css'

const FlagES = () => (
  <svg viewBox="0 0 60 40" width="24" height="16">
    <rect width="60" height="40" fill="#c60b1e"/>
    <rect y="10" width="60" height="20" fill="#ffc400"/>
  </svg>
)

const FlagEN = () => (
  <svg viewBox="0 0 60 40" width="24" height="16">
    <rect width="60" height="40" fill="#012169"/>
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="6"/>
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="2"/>
    <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="10"/>
    <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
)

const FlagFR = () => (
  <svg viewBox="0 0 60 40" width="24" height="16">
    <rect width="20" height="40" fill="#002395"/>
    <rect x="20" width="20" height="40" fill="#fff"/>
    <rect x="40" width="20" height="40" fill="#ed2939"/>
  </svg>
)

const flags = {
  es: FlagES,
  en: FlagEN,
  fr: FlagFR,
}

const languages = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()
  const { language, changeLanguage, t } = useLanguage()

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/quienes-somos', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/calculator', label: t('nav.calculator') },
    { href: '/contact', label: t('nav.contact') },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setLangOpen(false)
  }, [router.asPath])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langOpen && !e.target.closest(`.${styles.langSelector}`)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [langOpen])

  const CurrentFlag = flags[language]

  return (
    <>
      <motion.header
        className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <img src="/vipax-logo.png" alt="VIPAX" />
          </Link>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${router.asPath === link.href ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <div className={styles.langSelector}>
              <button
                className={styles.langToggle}
                onClick={() => setLangOpen(!langOpen)}
                aria-label="Seleccionar idioma"
              >
                <CurrentFlag />
                <span className={styles.langCode}>{languages.find(l => l.code === language)?.label}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {langOpen && (
                <div className={styles.langDropdown}>
                  {languages.map((lang) => {
                    const FlagComponent = flags[lang.code]
                    return (
                      <button
                        key={lang.code}
                        className={`${styles.langOption} ${language === lang.code ? styles.langActive : ''}`}
                        onClick={() => { changeLanguage(lang.code); setLangOpen(false) }}
                      >
                        <FlagComponent />
                        <span className={styles.langOptionLabel}>
                          <span className={styles.langOptionCode}>{lang.label}</span>
                          <span className={styles.langOptionName}>{lang.name}</span>
                        </span>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={theme === 'light' ? t('theme.toggleDark') : t('theme.toggleLight')}
            >
              {theme === 'light' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

            <Link href="/contact" className={styles.cta}>
              {t('nav.contactCta')}
            </Link>
          </div>

          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className={styles.mobileMenu}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className={styles.mobileInner}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      className={`${styles.mobileLink} ${router.asPath === link.href ? styles.mobileActive : ''}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link href="/contact" className={styles.mobileCta}>
                    {t('nav.contactCta')}
                  </Link>
                </motion.div>
                <motion.div
                  className={styles.mobileLangSelector}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.44 }}
                >
                  {languages.map((lang) => {
                    const FlagComponent = flags[lang.code]
                    return (
                      <button
                        key={lang.code}
                        className={`${styles.mobileLangBtn} ${language === lang.code ? styles.mobileLangActive : ''}`}
                        onClick={() => changeLanguage(lang.code)}
                      >
                        <FlagComponent />
                        <span className={styles.mobileLangInfo}>
                          <span className={styles.mobileLangCode}>{lang.label}</span>
                          <span className={styles.mobileLangName}>{lang.name}</span>
                        </span>
                      </button>
                    )
                  })}
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.48 }}
                >
                  <button
                    className={styles.mobileThemeToggle}
                    onClick={toggleTheme}
                  >
                    {theme === 'light' ? (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                        {t('theme.dark')}
                      </>
                    ) : (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="5" />
                          <line x1="12" y1="1" x2="12" y2="3" />
                          <line x1="12" y1="21" x2="12" y2="23" />
                          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                          <line x1="1" y1="12" x2="3" y2="12" />
                          <line x1="21" y1="12" x2="23" y2="12" />
                          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                        {t('theme.light')}
                      </>
                    )}
                  </button>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
