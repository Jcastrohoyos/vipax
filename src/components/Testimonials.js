import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from './ServiceIcons'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    text: 'VIPAX transformó nuestra gestión de incidencias. Resolvieron una cancelación masiva de 200 pasajeros en menos de 4 horas. Su profesionalismo es excepcional.',
    author: 'María García',
    role: 'Directora de Operaciones',
    company: 'Air Europa',
    rating: 5,
  },
  {
    text: 'La coordinación hotelera y de transporte es impecable. Llevamos 3 años trabajando con ellos y la satisfacción de nuestros pasajeros ha mejorado significativamente.',
    author: 'Carlos Ruiz',
    role: 'Gerente de Atención al Cliente',
    company: 'Iberia Express',
    rating: 5,
  },
  {
    text: 'Cuando tuvimos una emergencia con 150 tripulaciones varadas, VIPAX encontró soluciones en minutos. Su red de hoteles y transporte es impresionante.',
    author: 'Ana Martínez',
    role: 'Jefa de Turno',
    company: 'Vueling',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.tag}>Testimonios</span>
            <h2 className={styles.title}>
              Lo que dicen nuestros{' '}
              <span className={styles.highlight}>clientes</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className={styles.card}>
            <div className={styles.stars}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <StarIcon key={i} className={styles.star} />
              ))}
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ x: direction * 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction * -100, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <blockquote className={styles.quote}>&ldquo;{t.text}&rdquo;</blockquote>
                <div className={styles.author}>
                  <div className={styles.avatar} style={{ background: 'linear-gradient(135deg, var(--color-primary), #4d8bff)' }}>
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className={styles.authorName}>{t.author}</div>
                    <div className={styles.authorRole}>{t.role}, {t.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className={styles.controls}>
              <button onClick={prev} className={styles.navBtn} aria-label="Anterior">
                <ChevronLeftIcon />
              </button>
              <div className={styles.dots}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                    aria-label={`Testimonio ${i + 1}`}
                  />
                ))}
              </div>
              <button onClick={next} className={styles.navBtn} aria-label="Siguiente">
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
