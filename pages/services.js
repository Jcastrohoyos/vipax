import Head from 'next/head'
import Layout from '../src/components/Layout'
import ScrollReveal from '../src/components/ScrollReveal'
import Link from 'next/link'
import { useLanguage } from '../src/context/LanguageContext'
import { PlaneIcon, HotelIcon, BusIcon, CalendarIcon, CheckCircleIcon, ArrowRightIcon } from '../src/components/ServiceIcons'
import styles from './services.module.css'

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: PlaneIcon,
      title: t('servicesDetail.passengerManagement.title'),
      desc: t('servicesDetail.passengerManagement.desc'),
      features: [
        t('servicesDetail.passengerManagement.f1'),
        t('servicesDetail.passengerManagement.f2'),
        t('servicesDetail.passengerManagement.f3'),
        t('servicesDetail.passengerManagement.f4'),
        t('servicesDetail.passengerManagement.f5'),
        t('servicesDetail.passengerManagement.f6'),
      ],
      color: '#0b5cff',
    },
    {
      icon: HotelIcon,
      title: t('servicesDetail.hotelReservations.title'),
      desc: t('servicesDetail.hotelReservations.desc'),
      features: [
        t('servicesDetail.hotelReservations.f1'),
        t('servicesDetail.hotelReservations.f2'),
        t('servicesDetail.hotelReservations.f3'),
        t('servicesDetail.hotelReservations.f4'),
        t('servicesDetail.hotelReservations.f5'),
        t('servicesDetail.hotelReservations.f6'),
      ],
      color: '#c9a84c',
    },
    {
      icon: BusIcon,
      title: t('servicesDetail.groundTransport.title'),
      desc: t('servicesDetail.groundTransport.desc'),
      features: [
        t('servicesDetail.groundTransport.f1'),
        t('servicesDetail.groundTransport.f2'),
        t('servicesDetail.groundTransport.f3'),
        t('servicesDetail.groundTransport.f4'),
        t('servicesDetail.groundTransport.f5'),
        t('servicesDetail.groundTransport.f6'),
      ],
      color: '#10b981',
    },
    {
      icon: CalendarIcon,
      title: t('servicesDetail.corporateEvents.title'),
      desc: t('servicesDetail.corporateEvents.desc'),
      features: [
        t('servicesDetail.corporateEvents.f1'),
        t('servicesDetail.corporateEvents.f2'),
        t('servicesDetail.corporateEvents.f3'),
        t('servicesDetail.corporateEvents.f4'),
        t('servicesDetail.corporateEvents.f5'),
        t('servicesDetail.corporateEvents.f6'),
      ],
      color: '#8b5cf6',
    },
  ]

  return (
    <Layout fullWidth>
      <Head>
        <title>{t('seo.services.title')}</title>
        <meta name="description" content={t('seo.services.description')} />
      </Head>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <ScrollReveal>
              <span className={styles.tag}>{t('servicesDetail.tag')}</span>
              <h1 className={styles.title}>
                {t('servicesDetail.titleBefore')}{' '}
                <span className={styles.highlight}>{t('servicesDetail.titleHighlight')}</span>{' '}
                {t('servicesDetail.titleAfter')}
              </h1>
              <p className={styles.subtitle}>
                {t('servicesDetail.subtitle')}
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className={styles.servicesList}>
          <div className={styles.servicesContainer}>
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <ScrollReveal key={service.title} delay={i * 0.1}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceContent}>
                      <div className={styles.serviceIcon} style={{ background: `${service.color}10`, color: service.color }}>
                        <Icon className={styles.icon} />
                      </div>
                      <h2 className={styles.serviceTitle}>{service.title}</h2>
                      <p className={styles.serviceDesc}>{service.desc}</p>
                      <ul className={styles.features}>
                        {service.features.map((f) => (
                          <li key={f} className={styles.feature}>
                            <CheckCircleIcon className={styles.checkIcon} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.serviceVisual}>
                      <div className={styles.visualPlaceholder} style={{ background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)` }}>
                        <Icon className={styles.visualIcon} style={{ color: service.color }} />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaContainer}>
            <ScrollReveal>
              <h2 className={styles.ctaTitle}>{t('servicesDetail.ctaTitle')}</h2>
              <p className={styles.ctaDesc}>{t('servicesDetail.ctaDesc')}</p>
              <Link href="/contact" className={styles.ctaBtn}>
                {t('servicesDetail.ctaBtn')}
                <ArrowRightIcon className={styles.ctaBtnIcon} />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </Layout>
  )
}
