import ScrollReveal from './ScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { PhoneIcon, ClipboardListIcon, CheckCircleIcon } from './ServiceIcons'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    {
      num: '01',
      icon: PhoneIcon,
      title: t('howItWorks.step1.title'),
      desc: t('howItWorks.step1.desc'),
    },
    {
      num: '02',
      icon: ClipboardListIcon,
      title: t('howItWorks.step2.title'),
      desc: t('howItWorks.step2.desc'),
    },
    {
      num: '03',
      icon: CheckCircleIcon,
      title: t('howItWorks.step3.title'),
      desc: t('howItWorks.step3.desc'),
    },
  ]

  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.tag}>{t('howItWorks.tag')}</span>
            <h2 className={styles.title}>
              {t('howItWorks.titleBefore')}{' '}
              <span className={styles.highlight}>{t('howItWorks.titleHighlight')}</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className={styles.steps}>
          <div className={styles.line} aria-hidden="true" />
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={step.num} delay={i * 0.2} direction="up">
                <div className={styles.step}>
                  <div className={styles.stepNum}>{step.num}</div>
                  <div className={styles.stepIcon}>
                    <Icon className={styles.icon} />
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
