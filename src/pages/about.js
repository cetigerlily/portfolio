import Head from 'next/head';
import Layout from "../components/Layout";
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <Link href="/">Back</Link>
      </Layout>
    </>
  );
}
