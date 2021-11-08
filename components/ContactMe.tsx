import React from 'react';
import Link from 'next/link';
import styles from '@styles/ContactMe.module.scss';

export default function ContactMe() {
  return (
    <>
      <section className={styles.root}>
        <div>Let&apos;s work together!</div>
        <Link
          href="mailto:Erikaalanalambe@gmail.com"
          passHref
        >
          <a
            className={styles.contactBtn}
            href="replace"
          >
            Contact
          </a>
        </Link>
      </section>
    </>
  );
}
