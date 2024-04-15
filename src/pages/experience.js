import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Experience.module.css";

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <Layout>
        <Link href="/">Back</Link>
        <div>
          <h1>Professional Experience</h1>
          <h1>Educational Experience</h1>
        </div>

        <button>CV</button>
      </Layout>
    </>
  );
}
