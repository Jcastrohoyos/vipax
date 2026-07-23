import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from './ServiceIcons'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const testimonials = [
    {
      text: t('testimonials.testimonial1.text'),
      author: t('testimonials.testimonial1.author'),
      role: t('testimonials.testimonial1.role'),
      company: t('testimonials.testimonial1.company'),
      rating: 5,
    },
    {
      text: t('testimonials.testimonial2.text'),
      author: t('testimonials.testimonial2.author'),
      role: t('testimonials.testimonial2.role'),
      company: t('testimonials.testimonial2.company'),
      rating: 5,
    },
    {
      text: t('testimonials.testimonial3.text'),
      author: t('testimonials.testimonial3.author'),
      role: t('testimonials.testimonial3.role'),
      company: t('testimonials.testimonial3.company'),
      rating: 5,
    },
  ]

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const testimonial = testimonials[current]

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.tag}>{t('testimonials.tag')}</span>
            <h2 className={styles.title}>
              {t('testimonials.titleBefore')}{' '}
              <span className={styles.highlight}>{t('testimonials.titleHighlight')}</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className={styles.card}>
            <div className={styles.stars}>
              {Array.from({ length: testimonial.rating }).map((_, i) => (
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
                <blockquote className={styles.quote}>&ldquo;{testimonial.text}&rdquo;</blockquote>
                <div className={styles.author}>
                  <div className={styles.avatar} style={{ background: 'linear-gradient(135deg, var(--color-primary), #4d8bff)' }}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className={styles.authorName}>{testimonial.author}</div>
                    <div className={styles.authorRole}>{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className={styles.controls}>
              <button onClick={prev} className={styles.navBtn} aria-label={t('testimonials.prev')}>
                <ChevronLeftIcon />
              </button>
              <div className={styles.dots}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                    aria-label={`${t('testimonials.testimonial')} ${i + 1}`}
                  />
                ))}
              </div>
              <button onClick={next} className={styles.navBtn} aria-label={t('testimonials.next')}>
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
