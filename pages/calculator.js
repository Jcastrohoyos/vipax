import Head from 'next/head'
import Layout from '../src/components/Layout'
import ScrollReveal from '../src/components/ScrollReveal'
import CompensationCalculator from '../src/components/CompensationCalculator'
import { useLanguage } from '../src/context/LanguageContext'
import styles from './calculator.module.css'

export default function CalculatorPage() {
  const { t } = useLanguage()

  return (
    <Layout fullWidth>
      <Head>
        <title>{t('seo.calculator.title')}</title>
        <meta name="description" content={t('seo.calculator.description')} />
      </Head>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <ScrollReveal>
              <span className={styles.tag}>{t('calculator.pageTag')}</span>
              <h1 className={styles.title}>
                {t('calculator.title')}
              </h1>
              <p className={styles.subtitle}>
                {t('calculator.subtitle')}
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.contentContainer}>
            <div className={styles.calculatorWrapper}>
              <ScrollReveal>
                <CompensationCalculator />
              </ScrollReveal>
            </div>

            <div className={styles.info}>
              <ScrollReveal delay={0.2}>
                <h2 className={styles.infoTitle}>{t('calculator.infoTitle')}</h2>
                <div className={styles.infoContent}>
                  <p>{t('calculator.infoText1')}</p>
                  <p>{t('calculator.infoText2')}</p>
                  <p>{t('calculator.infoText3')}</p>
                </div>

                <div className={styles.rulesList}>
                  <h3>{t('calculator.rulesTitle')}</h3>
                  <ul>
                    <li>{t('calculator.rules.r1')}</li>
                    <li>{t('calculator.rules.r2')}</li>
                    <li>{t('calculator.rules.r3')}</li>
                    <li>{t('calculator.rules.r4')}</li>
                  </ul>
                </div>

                <div className={styles.amountsTable}>
                  <h3>{t('calculator.amountsTitle')}</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>{t('calculator.table.distance')}</th>
                        <th>{t('calculator.table.amount')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{t('calculator.distances.short')}</td>
                        <td>250 €</td>
                      </tr>
                      <tr>
                        <td>{t('calculator.distances.medium')}</td>
                        <td>400 €</td>
                      </tr>
                      <tr>
                        <td>{t('calculator.distances.long')}</td>
                        <td>600 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
