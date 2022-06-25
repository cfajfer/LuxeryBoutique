import type { NextPage } from "next";
import Head from "next/head";
import ActionCall from "../components/homepage/actionCall";
import Body from "../components/homepage/layout/body";
import Layout from "../components/layout/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Layout>
        <ActionCall />
        <Body />
      </Layout>
    </div>
  );
};

export default Home;
