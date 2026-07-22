import ScrollReveal from './ScrollReveal'
import AnimatedCounter from './AnimatedCounter'
import styles from './Stats.module.css'

const stats = [
  { value: 15, suffix: '+', label: 'Años de experiencia' },
  { value: 50000, suffix: '+', label: 'Pasajeros asistidos' },
  { value: 200, suffix: '+', label: 'Aerolíneas asociadas' },
  { value: 98, suffix: '%', label: 'Satisfacción del cliente' },
]

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.1} direction="up">
            <div className={styles.card}>
              <div className={styles.number}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
