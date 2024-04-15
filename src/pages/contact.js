import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Get in Touch</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Layout>
        <Link href="/">Back</Link>
        <div>
          <a href="mailto:cetigerlily@gmail.com">cetigerlily@gmail.com</a>
          <a href="https://sg.linkedin.com/in/celestecheah">LinkedIn</a>
        </div>
      </Layout>
    </>
  );
}
