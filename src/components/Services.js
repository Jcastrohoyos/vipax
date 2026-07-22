import { motion } from 'framer-motion'
import Link from 'next/link'
import ScrollReveal from './ScrollReveal'
import { PlaneIcon, HotelIcon, BusIcon, CalendarIcon, ArrowRightIcon } from './ServiceIcons'
import styles from './Services.module.css'

const services = [
  {
    icon: PlaneIcon,
    title: 'Gestión integral de pasajeros',
    desc: 'Nos especializamos en la atención de pasajeros afectados por cualquier tipo de incidencia operativa: overbooking, cancelaciones, pérdidas de conexión y desvíos de vuelo.',
    color: '#0b5cff',
  },
  {
    icon: HotelIcon,
    title: 'Reservas hoteleras',
    desc: 'Servicio completo de gestión de reservas hoteleras para pasajeros de vuelos afectados, tripulaciones, empleados de líneas aéreas y grupos organizados.',
    color: '#c9a84c',
  },
  {
    icon: BusIcon,
    title: 'Transporte terrestre',
    desc: 'Soluciones de transporte terrestre eficientes adaptadas a cada situación, desde cancelaciones de vuelos hasta eventos corporativos con amplia red de proveedores certificados.',
    color: '#10b981',
  },
  {
    icon: CalendarIcon,
    title: 'Eventos corporativos',
    desc: 'Organización de reuniones, congresos, convenciones, viajes de incentivo y team buildings. Gestión de espacios, catering, tecnología y coordinación in situ.',
    color: '#8b5cf6',
  },
]

export default function Services() {
  return (
    <section className={styles.services} id="servicios">
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.tag}>Nuestros servicios</span>
            <h2 className={styles.title}>
              Soluciones integrales para la{' '}
              <span className={styles.highlight}>industria aérea</span>
            </h2>
            <p className={styles.subtitle}>
              En VIPAX gestionamos de forma ágil y eficiente cualquier asistencia a pasajeros,
              ofreciendo una solución integral que garantiza bienestar y minimiza el impacto operativo.
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
                    Conoce nuestros servicios
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
