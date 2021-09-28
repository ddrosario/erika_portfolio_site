import React from 'react';
import Head from 'next/head';
import styles from '../styles/ContactMe.module.scss';

import PageLayout from '../components/PageLayout';
import DynamicMsgBanner from '../components/banners/DynamicMsgBanner';

const email = 'Erikaalanalambe@gmail.com';

export default function ContactMe() {
  return (
    <>
      <Head>
        <title>Eri Lambe</title>
      </Head>
      <PageLayout>
        <DynamicMsgBanner message="Let's work together!" />
        <main className={styles.main}>
          <article className={styles.article}>
            <p>{email}</p>
            <ul className={styles.socialsContainer}>
              <li>
                😀
              </li>
              <li>
                🌎
              </li>
              <li>
                📈
              </li>
            </ul>
            <button
              className={styles.contactBtn}
              type="button"
              onClick={() => {}}
            >
              Contact
            </button>
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
