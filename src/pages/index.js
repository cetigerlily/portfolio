import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Layout>
          <Link href="/about">About Me</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
        </Layout>
      </main>
    </div>
  );
}
