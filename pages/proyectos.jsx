import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Proyectos() {
  return (
    <Layout>
      <Head>
        <title>Proyectos | CortinaDev</title>
      </Head>
      <h1>Proyectos</h1>
      <h2>
        Pronto serán añadidos..
        <Link href="/">Home</Link>
      </h2>
    </Layout>
  );
}
