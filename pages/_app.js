import '../styles/globals.css'
import Script from 'next/script'
import { ThemeProvider } from '../src/context/ThemeContext'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Script strategy="beforeInteractive" id="scroll-behavior">
        {`document.documentElement.setAttribute('data-scroll-behavior', 'smooth')`}
      </Script>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
