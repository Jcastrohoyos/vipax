import Link from 'next/link'
import ScrollReveal from './ScrollReveal'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className={styles.container}>
        <ScrollReveal direction="up">
          <div className={styles.content}>
            <h2 className={styles.title}>
              ¿Necesitas asistencia{' '}
              <span className={styles.highlight}>inmediata</span>?
            </h2>
            <p className={styles.subtitle}>
              En VIPAX estamos preparados para atender cada detalle. Contacta con nuestro
              equipo y recibe solución en minutos. Disponible 24/7.
            </p>
            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryBtn}>
                Conoce nuestros servicios
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <a href="tel:+34647105183" className={styles.phoneBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +34 647 105 183
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
