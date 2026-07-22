import Head from 'next/head'
import Layout from '../src/components/Layout'
import Hero from '../src/components/Hero'
import Stats from '../src/components/Stats'
import Services from '../src/components/Services'
import HowItWorks from '../src/components/HowItWorks'
import Testimonials from '../src/components/Testimonials'
import Trust from '../src/components/Trust'
import CTA from '../src/components/CTA'

export default function Home() {
  return (
    <Layout fullWidth>
      <Head>
        <title>VIPAX - Gestión de Incidencias Aéreas</title>
        <meta name="description" content="Soluciones integrales de gestión de incidencias aéreas, reservas hoteleras y transporte para aerolíneas y pasajeros. Disponible 24/7." />
        <meta property="og:title" content="VIPAX - Gestión de Incidencias Aéreas" />
        <meta property="og:description" content="Coordinación rápida de alojamiento, transporte y asistencia para pasajeros y aerolíneas." />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <Hero />
        <Stats />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Trust />
        <CTA />
      </main>
    </Layout>
  )
}
