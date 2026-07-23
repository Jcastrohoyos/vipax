import Link from 'next/link'
import ScrollReveal from './ScrollReveal'
import { PhoneIcon, MailIcon, MapPinIcon } from './ServiceIcons'
import styles from './Footer.module.css'

const serviceLinks = [
  { href: '/services', label: 'Gestión de pasajeros' },
  { href: '/services', label: 'Reservas hoteleras' },
  { href: '/services', label: 'Transporte terrestre' },
  { href: '/services', label: 'Eventos corporativos' },
]

const companyLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/quienes-somos', label: 'Quiénes somos' },
  { href: '/services', label: 'Servicios' },
  { href: '/contact', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.grid}>
            <div className={styles.brand}>
              <Link href="/" className={styles.logo}>
                <img src="/vipax-logo.png" alt="VIPAX" />
              </Link>
              <p className={styles.brandDesc}>
                Soluciones integrales de gestión de incidencias aéreas y logística corporativa.
                Cumplimiento del Reglamento Europeo 261/2004.
              </p>
              <div className={styles.contact}>
                <div className={styles.contactItem}>
                  <PhoneIcon className={styles.contactIcon} />
                  <a href="tel:+34647105183">+34 647 105 183</a>
                </div>
                <div className={styles.contactItem}>
                  <MailIcon className={styles.contactIcon} />
                  <a href="mailto:cbeltran@vipax.es">cbeltran@vipax.es</a>
                </div>
                <div className={styles.contactItem}>
                  <MapPinIcon className={styles.contactIcon} />
                  <span>Aeropuerto Adolfo Suárez Madrid-Barajas</span>
                </div>
              </div>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Servicios</h4>
              <ul className={styles.links}>
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.link}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Empresa</h4>
              <ul className={styles.links}>
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.link}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Contacto</h4>
              <ul className={styles.links}>
                <li>
                  <a href="tel:+34647105183" className={styles.link}>+34 647 105 183</a>
                </li>
                <li>
                  <a href="mailto:cbeltran@vipax.es" className={styles.link}>cbeltran@vipax.es</a>
                </li>
                <li className={styles.link}>Aeropuerto Madrid-Barajas</li>
                <li className={styles.link}>Disponible 24/7</li>
              </ul>
              <div className={styles.social}>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="X (Twitter)">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className={styles.mapSection}>
          <div className={styles.mapWrapper}>
            <iframe
              className={styles.mapIframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.5!2d-3.564378939981026!3d40.489928334043675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228a4e2c5b7b3%3A0x4055d80e8a3b5b5b!2sAeropuerto%20Adolfo%20Su%C3%A1rez%20Madrid-Barajas!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación VIPAX - Aeropuerto Madrid-Barajas"
            />
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} VIPAX. Todos los derechos reservados.
          </p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Aviso legal</a>
            <a href="#" className={styles.legalLink}>Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
