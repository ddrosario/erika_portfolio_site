/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

import styles from '@styles/banners/Footer.module.scss';

import BorderedCard from './hoc/BorderedCard';
import BoxedLink from './hoc/BoxedLink';

const Footer = () => (
  <footer className={styles.main} id="contact">
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
          href="mailto:Erikaalanalambe@gmail.com"
          linkText="Contact"
        />
      </div>
    </BorderedCard>
    <div className={styles.socialLinks}>
      <Link
        href="https://dribbble.com/EriLambe"
        passHref
      >
        <a
          className={styles.socialLink}
          href="replace"
        >
          <img
            src="/assets/social_icons/dribbble.svg"
            alt="dribbble"
          />
        </a>
      </Link>
      <Link
        href="https://erikaalanalambe.medium.com/"
        passHref
      >
        <a
          className={styles.socialLink}
          href="replace"
        >
          <img
            src="/assets/social_icons/medium.png"
            alt="medium"
          />
        </a>
      </Link>
      <Link
        href="https://www.linkedin.com/in/erilambe"
        passHref
      >
        <a
          className={styles.linkedin}
          href="replace"
        >
          <img
            src="/assets/social_icons/linkedin.png"
            alt="linkedin"
          />
        </a>
      </Link>
    </div>
  </footer>
);

export default Footer;
