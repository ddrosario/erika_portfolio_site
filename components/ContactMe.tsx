import React from 'react';
import Link from 'next/link';
import styles from '@styles/ContactMe.module.scss';

interface ContactMeProps {
  text?: string;
}

export default function ContactMe({ text }: ContactMeProps) {
  return (
    <>
      <section className={styles.root}>
        <div>{text}</div>
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

ContactMe.defaultProps = {
  text: "Let's work together!",
};
