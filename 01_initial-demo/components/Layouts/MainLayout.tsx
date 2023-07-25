import { FC, ReactNode } from "react";

import Head from "next/head";

import { Navbar } from "../Navbar";

import styles from "./MainLayout.module.css";


const MainLayout:FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={`${styles.main}`}>{children}</main>
    </>
  );
};

export default MainLayout;
