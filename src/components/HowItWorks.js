import ScrollReveal from './ScrollReveal'
import { PhoneIcon, ClipboardListIcon, CheckCircleIcon } from './ServiceIcons'
import styles from './HowItWorks.module.css'

const steps = [
  {
    num: '01',
    icon: PhoneIcon,
    title: 'Contactas con nosotros',
    desc: 'Llámanos o envía un mensaje. Nuestro equipo está disponible 24/7 para atender cualquier incidencia de forma inmediata.',
  },
  {
    num: '02',
    icon: ClipboardListIcon,
    title: 'Gestionamos la solución',
    desc: 'Coordinamos alojamiento, transporte y asistencia de forma inmediata. Nos encargamos de todo con amplia red de proveedores certificados.',
  },
  {
    num: '03',
    icon: CheckCircleIcon,
    title: 'Resolución garantizada',
    desc: 'El pasajero recibe atención integral. Garantizamos soluciones ágiles y la mejor alternativa para cada situación.',
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.tag}>Cómo funciona</span>
            <h2 className={styles.title}>
              Tres pasos hacia la{' '}
              <span className={styles.highlight}>resolución</span>
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
