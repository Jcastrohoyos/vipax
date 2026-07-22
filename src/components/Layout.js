import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'

export default function Layout({ children, fullWidth = false }) {
  return (
    <div className={styles.page}>
      <Header />
      <div className={fullWidth ? styles.fullWidth : styles.container}>
        {children}
      </div>
      <Footer />
    </div>
  )
}
