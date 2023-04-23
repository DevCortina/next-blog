import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>👋 Hola! Soy Carlos, trabajo como desarrollador full stack, 
            usando tecnologias modernas doy vida a tus proyectos.</p>
        <p>
        </p>
      </section>
    </Layout>
  );
}
