import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import styles from './CompensationCalculator.module.css'

const compensationData = {
  short: { cancellation: 250, delay: 250, deniedBoarding: 250, missedConnection: 250 },
  medium: { cancellation: 400, delay: 400, deniedBoarding: 400, missedConnection: 400 },
  long: { cancellation: 600, delay: 600, deniedBoarding: 600, missedConnection: 600 },
}

export default function CompensationCalculator() {
  const { t } = useLanguage()
  const [distance, setDistance] = useState('')
  const [delay, setDelay] = useState('')
  const [issueType, setIssueType] = useState('')
  const [result, setResult] = useState(null)

  const calculateCompensation = () => {
    if (!distance || !delay || !issueType) return

    const delayHours = parseInt(delay)
    const isEligible = delayHours >= 3 || issueType === 'cancellation' || issueType === 'deniedBoarding'

    if (isEligible) {
      const amount = compensationData[distance][issueType]
      setResult({ eligible: true, amount })
    } else {
      setResult({ eligible: false, amount: 0 })
    }
  }

  return (
    <div className={styles.calculator}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M16 8l-8 8" />
            <path d="M8 8h8v8" />
          </svg>
        </div>
        <h3 className={styles.title}>{t('calculator.title')}</h3>
        <p className={styles.subtitle}>{t('calculator.subtitle')}</p>
      </div>

      <div className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label}>{t('calculator.flightDistance')}</label>
          <select
            className={styles.select}
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          >
            <option value="">{t('calculator.selectOption')}</option>
            <option value="short">{t('calculator.distances.short')}</option>
            <option value="medium">{t('calculator.distances.medium')}</option>
            <option value="long">{t('calculator.distances.long')}</option>
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>{t('calculator.delayHours')}</label>
          <input
            type="number"
            className={styles.input}
            value={delay}
            onChange={(e) => setDelay(e.target.value)}
            min="0"
            max="24"
            placeholder="0"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>{t('calculator.issueType')}</label>
          <select
            className={styles.select}
            value={issueType}
            onChange={(e) => setIssueType(e.target.value)}
          >
            <option value="">{t('calculator.selectOption')}</option>
            <option value="cancellation">{t('calculator.issues.cancellation')}</option>
            <option value="delay">{t('calculator.issues.delay')}</option>
            <option value="deniedBoarding">{t('calculator.issues.deniedBoarding')}</option>
            <option value="missedConnection">{t('calculator.issues.missedConnection')}</option>
          </select>
        </div>

        <motion.button
          className={styles.calculateBtn}
          onClick={calculateCompensation}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={!distance || !delay || !issueType}
        >
          {t('calculator.calculate')}
        </motion.button>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div
            className={`${styles.result} ${result.eligible ? styles.eligible : styles.notEligible}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {result.eligible ? (
              <>
                <div className={styles.resultIcon}>✓</div>
                <div className={styles.resultText}>
                  <span className={styles.resultTitle}>{t('calculator.eligible')}</span>
                  <span className={styles.resultAmount}>{result.amount} €</span>
                </div>
              </>
            ) : (
              <>
                <div className={styles.resultIcon}>✗</div>
                <div className={styles.resultText}>
                  <span className={styles.resultTitle}>{t('calculator.notEligible')}</span>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <p className={styles.disclaimer}>{t('calculator.info')}</p>
    </div>
  )
}
