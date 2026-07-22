import Link from 'next/link'
import styles from './404.module.css'

export default function Custom404() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>Página no encontrada</h1>
        <p className={styles.desc}>
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link href="/" className={styles.btn}>
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
