import React from 'react';
import Head from 'next/head';
import styles from '../styles/ContactMe.module.scss';

import PageLayout from '../components/PageLayout';
import DynamicMsgBanner from '../components/banners/DynamicMsgBanner';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Eri Lambe - Resume</title>
      </Head>
      <PageLayout>
        <DynamicMsgBanner message="Resume goes here!" />
        <main className={styles.main}>
          <article className={styles.article}>
            <p>RESUME!!!!!</p>
          </article>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://www.github.com/ddrosario"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by ddrosario
          </a>
        </footer>
      </PageLayout>
    </>
  );
}
