import '../styles/globals.css'
import Script from 'next/script'
import { ThemeProvider } from '../src/context/ThemeContext'
import { LanguageProvider } from '../src/context/LanguageContext'

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Script strategy="beforeInteractive" id="scroll-behavior">
          {`document.documentElement.setAttribute('data-scroll-behavior', 'smooth')`}
        </Script>
        <Component {...pageProps} />
      </ThemeProvider>
    </LanguageProvider>
  )
}
