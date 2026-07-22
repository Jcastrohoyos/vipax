import '../styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script strategy="beforeInteractive" id="scroll-behavior">
        {`document.documentElement.setAttribute('data-scroll-behavior', 'smooth')`}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
