import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)
  const [focused, setFocused] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } else {
      setStatus('error')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={`${styles.field} ${focused === 'name' || form.name ? styles.focused : ''} ${focused === 'name' ? styles.active : ''}`}>
        <label className={styles.label}>{t('contact.form.name')} *</label>
        <input
          className={styles.input}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          onFocus={() => setFocused('name')}
          onBlur={() => setFocused(null)}
          required
        />
        <div className={styles.border} />
      </div>

      <div className={`${styles.field} ${focused === 'email' || form.email ? styles.focused : ''} ${focused === 'email' ? styles.active : ''}`}>
        <label className={styles.label}>Email *</label>
        <input
          className={styles.input}
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          onFocus={() => setFocused('email')}
          onBlur={() => setFocused(null)}
          required
        />
        <div className={styles.border} />
      </div>

      <div className={`${styles.field} ${focused === 'phone' || form.phone ? styles.focused : ''} ${focused === 'phone' ? styles.active : ''}`}>
        <label className={styles.label}>{t('contact.form.phone')}</label>
        <input
          className={styles.input}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          onFocus={() => setFocused('phone')}
          onBlur={() => setFocused(null)}
        />
        <div className={styles.border} />
      </div>

      <div className={`${styles.field} ${styles.fullWidth} ${focused === 'message' || form.message ? styles.focused : ''} ${focused === 'message' ? styles.active : ''}`}>
        <label className={styles.label}>{t('contact.form.message')} *</label>
        <textarea
          className={styles.textarea}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
          required
          rows={4}
        />
        <div className={styles.border} />
      </div>

      <motion.button
        type="submit"
        className={styles.submit}
        disabled={status === 'loading'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {status === 'loading' ? (
          <span className={styles.spinner} />
        ) : (
          t('contact.form.submit')
        )}
      </motion.button>

      {status === 'success' && (
        <motion.div
          className={styles.success}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t('contact.form.success')}
        </motion.div>
      )}
      {status === 'error' && (
        <motion.div
          className={styles.error}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t('contact.form.error')}
        </motion.div>
      )}
    </form>
  )
}
