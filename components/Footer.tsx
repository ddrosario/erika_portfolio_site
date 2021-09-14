import React from 'react';
import Link from 'next/link';

import styles from '@styles/banners/Footer.module.scss';

import BorderedCard from './hoc/BorderedCard';
import BoxedLink from './hoc/BoxedLink';

const Footer = () => (
  <footer className={styles.main}>
    <h3 className={styles.h3}>Let&apos;s work together!</h3>
    <BorderedCard>
      <div className={styles.card}>
        <Link
          href="mailto:Erikaalanalambe@gmail.com"
          passHref
        >
          <a
            className={styles.email}
            href="replace"
          >
            Erikaalanalambe@gmail.com
          </a>
        </Link>
        <BoxedLink
          href="/contact-me"
          linkText="Contact"
        />
      </div>
    </BorderedCard>
    <div className={styles.socialLinks}>
      nav buttons go here
    </div>
  </footer>
);

export default Footer;
