import { motion } from 'framer-motion'
import Link from 'next/link'
import ScrollReveal from './ScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { PlaneIcon, HotelIcon, BusIcon, CalendarIcon, ArrowRightIcon } from './ServiceIcons'
import styles from './Services.module.css'

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: PlaneIcon,
      title: t('services.passengerManagement.title'),
      desc: t('services.passengerManagement.desc'),
      color: '#0b5cff',
    },
    {
      icon: HotelIcon,
      title: t('services.hotelReservations.title'),
      desc: t('services.hotelReservations.desc'),
      color: '#c9a84c',
    },
    {
      icon: BusIcon,
      title: t('services.groundTransport.title'),
      desc: t('services.groundTransport.desc'),
      color: '#10b981',
    },
    {
      icon: CalendarIcon,
      title: t('services.corporateEvents.title'),
      desc: t('services.corporateEvents.desc'),
      color: '#8b5cf6',
    },
  ]

  return (
    <section className={styles.services} id="servicios">
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.tag}>{t('services.tag')}</span>
            <h2 className={styles.title}>
              {t('services.titleBefore')}{' '}
              <span className={styles.highlight}>{t('services.titleHighlight')}</span>
            </h2>
            <p className={styles.subtitle}>
              {t('services.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={service.title} delay={i * 0.12}>
                <motion.div
                  className={styles.card}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className={styles.iconWrapper} style={{ background: `${service.color}10`, color: service.color }}>
                    <Icon className={styles.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                  <Link href="/contact" className={styles.cardLink}>
                    {t('services.cta')}
                    <ArrowRightIcon className={styles.arrow} />
                  </Link>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
