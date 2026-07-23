import ScrollReveal from './ScrollReveal'
import AnimatedCounter from './AnimatedCounter'
import { useLanguage } from '../context/LanguageContext'
import styles from './Stats.module.css'

export default function Stats() {
  const { t } = useLanguage()

  const stats = [
    { value: 15, suffix: '+', label: t('stats.experience') },
    { value: 50000, suffix: '+', label: t('stats.passengers') },
    { value: 200, suffix: '+', label: t('stats.airlines') },
    { value: 98, suffix: '%', label: t('stats.satisfaction') },
  ]

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.1} direction="up">
            <div className={styles.card}>
              <div className={styles.number}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
