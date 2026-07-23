import Head from 'next/head'
import Layout from '../src/components/Layout'
import Hero from '../src/components/Hero'
import Stats from '../src/components/Stats'
import Services from '../src/components/Services'
import HowItWorks from '../src/components/HowItWorks'
import Testimonials from '../src/components/Testimonials'
import Trust from '../src/components/Trust'
import CTA from '../src/components/CTA'
import { useLanguage } from '../src/context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <Layout fullWidth>
      <Head>
        <title>{t('seo.home.title')}</title>
        <meta name="description" content={t('seo.home.description')} />
        <meta property="og:title" content={t('seo.home.title')} />
        <meta property="og:description" content={t('seo.home.ogDescription')} />
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
