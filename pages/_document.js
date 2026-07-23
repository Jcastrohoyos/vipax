import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/vipax-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/vipax-logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/vipax-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/vipax-logo.png" />
        <meta name="theme-color" content="#0b5cff" />
        <meta name="msapplication-TileColor" content="#0b5cff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
