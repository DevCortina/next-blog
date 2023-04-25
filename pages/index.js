import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle} Soluciones</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>👋 Hola! Soy Carlos, y puedo hacer que eso que tu llamas idea 💡, 
          por pequeña o grande que parezca se convierta en un proyecto en la nube.</p>
        <p>
          Sabemos que una imagen vale más que mil palabras, 
          mira algunos de mis <Link href="/proyectos"> Proyectos </Link>
        </p>
      </section>
    </Layout>
  );
}
