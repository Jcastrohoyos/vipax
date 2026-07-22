import Head from 'next/head'
import Layout from '../src/components/Layout'
import ScrollReveal from '../src/components/ScrollReveal'
import Link from 'next/link'
import { CheckCircleIcon, ShieldIcon, UsersIcon, GlobeIcon } from '../src/components/ServiceIcons'
import styles from './quienes-somos.module.css'

const values = [
  {
    icon: ShieldIcon,
    title: 'Experiencia',
    desc: 'Amplia experiencia en el sector aéreo y hotelero, especialistas en IROPS.',
  },
  {
    icon: UsersIcon,
    title: 'Cercanía',
    desc: 'Relación cercana con las aerolíneas y conocimiento del sector.',
  },
  {
    icon: GlobeIcon,
    title: 'Red de proveedores',
    desc: 'Trabajo con los mejores proveedores para gestionar incidencias de manera rápida y efectiva.',
  },
  {
    icon: CheckCircleIcon,
    title: 'Soluciones ágiles',
    desc: 'Garantizamos soluciones eficientes en alojamiento y transporte, la mejor alternativa para cada situación.',
  },
]

export default function QuienesSomos() {
  return (
    <Layout fullWidth>
      <Head>
        <title>Quiénes somos - VIPAX</title>
        <meta name="description" content="Conoce a VIPAX. Equipo con amplia experiencia en el sector aéreo y hotelero, especialistas en IROPS." />
      </Head>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <ScrollReveal>
              <span className={styles.tag}>Quiénes somos</span>
              <h1 className={styles.title}>
                Bienvenido a{' '}
                <span className={styles.highlight}>VIPAX</span>
              </h1>
              <p className={styles.subtitle}>
                Expertos en asistencia aeroportuaria. Trabajamos para ofrecer un servicio
                de excelencia en la gestión de pasajeros y tripulaciones en aeropuertos.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
              <ScrollReveal>
                <h2 className={styles.aboutTitle}>
                  ¿Quiénes somos en VIPAX?
                </h2>
                <p className={styles.aboutText}>
                  Somos un equipo con <strong>amplia experiencia</strong> en el sector aéreo y
                  hotelero y especialistas en IROPS. Nuestra relación cercana con las aerolíneas
                  y el conocimiento y trabajo con los mejores proveedores nos permite gestionar
                  incidencias de manera rápida y efectiva.
                </p>
                <p className={styles.aboutText}>
                  Garantizamos <strong>soluciones ágiles</strong> y eficientes en alojamiento
                  y transporte, asegurando siempre la mejor alternativa para cada situación.
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
                <span className={styles.tag}>Nuestros valores</span>
                <h2 className={styles.valuesTitle}>
                  ¿Listo para optimizar tu experiencia de cliente?
                </h2>
                <p className={styles.valuesSubtitle}>
                  Descubre cómo nuestros servicios pueden hacer la diferencia en caso de una contingencia.
                  En VIPAX, estamos preparados para atender cada detalle.
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
              <h2 className={styles.ctaTitle}>¿Necesitas nuestros servicios?</h2>
              <p className={styles.ctaDesc}>Contacta con nosotros y descubre cómo podemos ayudarte.</p>
              <Link href="/contact" className={styles.ctaBtn}>
                Contáctanos
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </Layout>
  )
}
