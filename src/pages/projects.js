import Head from 'next/head';
import Layout from "../components/Layout";
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Layout>
        <Link href="/">Back</Link>
      </Layout>
    </>
  );
}
