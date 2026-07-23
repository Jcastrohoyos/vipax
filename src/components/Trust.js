import ScrollReveal from './ScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import styles from './Trust.module.css'

export default function Trust() {
  const { t } = useLanguage()

  const logos = [
    { name: 'Air Europa', abbr: 'AE' },
    { name: 'Iberia', abbr: 'IB' },
    { name: 'Vueling', abbr: 'VL' },
    { name: 'Ryanair', abbr: 'RY' },
    { name: 'Lufthansa', abbr: 'LH' },
    { name: 'British Airways', abbr: 'BA' },
  ]

  return (
    <section className={styles.trust}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.tag}>{t('trust.tag')}</span>
            <h2 className={styles.title}>
              {t('trust.titleBefore')}{' '}
              <span className={styles.highlight}>{t('trust.titleHighlight')}</span> {t('trust.titleAfter')}
            </h2>
          </div>
        </ScrollReveal>

        <div className={styles.logosGrid}>
          {logos.map((logo, i) => (
            <ScrollReveal key={logo.name} delay={i * 0.08} direction="scale">
              <div className={styles.logoCard}>
                <div className={styles.logoAbbr}>{logo.abbr}</div>
                <div className={styles.logoName}>{logo.name}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <div className={styles.badgeTitle}>{t('trust.badgeTitle')}</div>
              <div className={styles.badgeDesc}>{t('trust.badgeDesc')}</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
