import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            Asistencia Aérea 24/7
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Gestión de Incidencias{' '}
            <span className={styles.gradient}>Aéreas</span>{' '}
            y Logística Corporativa
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            En VIPAX, gestionamos de forma <strong>ágil y eficiente</strong> cualquier asistencia
            a pasajeros antes, durante y después de la operación. Nos encargamos del transporte,
            alojamiento y restauración, ofreciendo una solución integral y eficaz que
            <strong> garantiza bienestar</strong> y minimiza el impacto operativo para la
            aerolínea cumpliendo con el <strong>Reglamento Europeo 261/2004</strong>.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Link href="/contact" className={styles.primaryBtn}>
              Conoce nuestros servicios
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/quienes-somos" className={styles.secondaryBtn}>
              Quiénes somos
            </Link>
          </motion.div>

          <motion.div
            className={styles.trust}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className={styles.trustAvatars}>
              <div className={styles.avatar} style={{ background: 'linear-gradient(135deg, #0b5cff, #4d8bff)' }}>A</div>
              <div className={styles.avatar} style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}>B</div>
              <div className={styles.avatar} style={{ background: 'linear-gradient(135deg, #c9a84c, #e0c774)' }}>C</div>
            </div>
            <span className={styles.trustText}>
              <strong>+200</strong> aerolíneas confían en nosotros
            </span>
          </motion.div>
        </div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className={styles.imageGlow} aria-hidden="true" />
          <img src="/plane.jpg" alt="VIPAX asistencia aérea" className={styles.image} />
          <div className={styles.floatingCard}>
            <div className={styles.floatingIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <div className={styles.floatingTitle}>Resolución inmediata</div>
              <div className={styles.floatingDesc}>Cumplimiento Reglamento UE 261/2004</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
