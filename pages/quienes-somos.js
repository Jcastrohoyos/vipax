import Head from 'next/head'
import Layout from '../src/components/Layout'
import ScrollReveal from '../src/components/ScrollReveal'
import Link from 'next/link'
import { useLanguage } from '../src/context/LanguageContext'
import { CheckCircleIcon, ShieldIcon, UsersIcon, GlobeIcon } from '../src/components/ServiceIcons'
import styles from './quienes-somos.module.css'

export default function QuienesSomos() {
  const { t } = useLanguage()

  const values = [
    {
      icon: ShieldIcon,
      title: t('about.values.experience.title'),
      desc: t('about.values.experience.desc'),
    },
    {
      icon: UsersIcon,
      title: t('about.values.closeness.title'),
      desc: t('about.values.closeness.desc'),
    },
    {
      icon: GlobeIcon,
      title: t('about.values.network.title'),
      desc: t('about.values.network.desc'),
    },
    {
      icon: CheckCircleIcon,
      title: t('about.values.solutions.title'),
      desc: t('about.values.solutions.desc'),
    },
  ]

  return (
    <Layout fullWidth>
      <Head>
        <title>{t('seo.about.title')}</title>
        <meta name="description" content={t('seo.about.description')} />
      </Head>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <ScrollReveal>
              <span className={styles.tag}>{t('about.tag')}</span>
              <h1 className={styles.title}>
                {t('about.titleBefore')}{' '}
                <span className={styles.highlight}>{t('about.titleHighlight')}</span>
              </h1>
              <p className={styles.subtitle}>
                {t('about.subtitle')}
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
              <ScrollReveal>
                <h2 className={styles.aboutTitle}>
                  {t('about.aboutTitle')}
                </h2>
                <p className={styles.aboutText}>
                  {t('about.aboutText1')}
                </p>
                <p className={styles.aboutText}>
                  {t('about.aboutText2')}
                </p>
              </ScrollReveal>
            </div>
            <div className={styles.aboutImage}>
              <ScrollReveal direction="right">
                <img src="/callcenter.jpg" alt="VIPAX equipo de asistencia" className={styles.image} />
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className={styles.values}>
          <div className={styles.valuesContainer}>
            <ScrollReveal>
              <div className={styles.valuesHeader}>
                <span className={styles.tag}>{t('about.valuesTag')}</span>
                <h2 className={styles.valuesTitle}>
                  {t('about.valuesTitle')}
                </h2>
                <p className={styles.valuesSubtitle}>
                  {t('about.valuesSubtitle')}
                </p>
              </div>
            </ScrollReveal>

            <div className={styles.valuesGrid}>
              {values.map((value, i) => {
                const Icon = value.icon
                return (
                  <ScrollReveal key={value.title} delay={i * 0.12}>
                    <div className={styles.valueCard}>
                      <div className={styles.valueIcon}>
                        <Icon className={styles.icon} />
                      </div>
                      <h3 className={styles.valueTitle}>{value.title}</h3>
                      <p className={styles.valueDesc}>{value.desc}</p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaContainer}>
            <ScrollReveal>
              <h2 className={styles.ctaTitle}>{t('about.ctaTitle')}</h2>
              <p className={styles.ctaDesc}>{t('about.ctaDesc')}</p>
              <Link href="/contact" className={styles.ctaBtn}>
                {t('about.ctaBtn')}
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </Layout>
  )
}
