import Link from 'next/link'
import { useLanguage } from '../src/context/LanguageContext'
import styles from './404.module.css'

export default function Custom404() {
  const { t } = useLanguage()

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>{t('notFound.title')}</h1>
        <p className={styles.desc}>
          {t('notFound.description')}
        </p>
        <Link href="/" className={styles.btn}>
          {t('notFound.backToHome')}
        </Link>
      </div>
    </div>
  )
}
