import Head from 'next/head'
import Layout from '../src/components/Layout'
import ScrollReveal from '../src/components/ScrollReveal'
import Link from 'next/link'
import { PlaneIcon, HotelIcon, BusIcon, CalendarIcon, CheckCircleIcon, ArrowRightIcon } from '../src/components/ServiceIcons'
import styles from './services.module.css'

const services = [
  {
    icon: PlaneIcon,
    title: 'Gestión integral de pasajeros',
    desc: 'Nos especializamos en la atención de pasajeros afectados por cualquier tipo de incidencia operativa. Actuamos de forma inmediata para coordinar alojamiento, transporte y asistencia, garantizando una solución rápida y eficiente.',
    features: [
      'Overbooking',
      'Cancelaciones de vuelos',
      'Pérdidas de conexión',
      'Desvíos de vuelo',
      'Coordinación alojamiento y transporte',
      'Protección de imagen de la aerolínea',
    ],
    color: '#0b5cff',
  },
  {
    icon: HotelIcon,
    title: 'Reservas hoteleras',
    desc: 'Servicio completo de gestión de reservas hoteleras para pasajeros de vuelos afectados, tripulaciones, empleados de líneas aéreas y grupos organizados. Colaboramos con una amplia red de hoteles en distintos puntos de la ciudad.',
    features: [
      'Amplia red de hoteles partner',
      'Pasajeros de vuelos afectados',
      'Tripulaciones y empleados',
      'Grupos organizados',
      'Rapidez y eficiencia',
      'Atención personalizada',
    ],
    color: '#c9a84c',
  },
  {
    icon: BusIcon,
    title: 'Transporte terrestre',
    desc: 'Soluciones de transporte terrestre eficientes adaptadas a cada situación, desde cancelaciones de vuelos hasta eventos corporativos. Trabajamos con una amplia red de proveedores certificados.',
    features: [
      'Traslados individuales',
      'Grupos de pasajeros',
      'Tripulaciones aéreas',
      'Proveedores certificados',
      'Servicio seguro y puntual',
      'Cobertura nacional e internacional',
    ],
    color: '#10b981',
  },
  {
    icon: CalendarIcon,
    title: 'Eventos corporativos',
    desc: 'Transformamos ideas en experiencias memorables. Organización integral de reuniones, congresos, convenciones, viajes de incentivo y team buildings.',
    features: [
      'Reuniones, congresos y convenciones',
      'Viajes de incentivo',
      'Team buildings y actividades motivacionales',
      'Gestión de espacios y catering',
      'Tecnología y ambientación',
      'Coordinación y supervisión in situ',
    ],
    color: '#8b5cf6',
  },
]

export default function ServicesPage() {
  return (
    <Layout fullWidth>
      <Head>
        <title>Servicios - VIPAX</title>
        <meta name="description" content="Descubre nuestros servicios de gestión de incidencias aéreas: pasajeros, reservas hoteleras, transporte terrestre y eventos corporativos." />
      </Head>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <ScrollReveal>
              <span className={styles.tag}>Nuestros servicios</span>
              <h1 className={styles.title}>
                Soluciones{' '}
                <span className={styles.highlight}>integrales</span>{' '}
                para la industria aérea
              </h1>
              <p className={styles.subtitle}>
                En VIPAX gestionamos de forma ágil y eficiente cualquier asistencia a pasajeros,
                ofreciendo una solución integral que garantiza bienestar y minimiza el impacto operativo.
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
              <h2 className={styles.ctaTitle}>¿Necesitas asistencia inmediata?</h2>
              <p className={styles.ctaDesc}>Contacta con nuestro equipo y recibe solución en minutos. Disponible 24/7.</p>
              <Link href="/contact" className={styles.ctaBtn}>
                Contactar ahora
                <ArrowRightIcon className={styles.ctaBtnIcon} />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </Layout>
  )
}
