import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@styles/header/Header.module.scss';
import Logo from '@assets/logo.svg';
import LinkedIn from '@assets/social_icons/linkedin.png';
import Email from '@assets/social_icons/email.svg';

const locations = {
  about: '/#about-me-section',
  contact: '#footer',
  // resume: '/resume',
};

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerBody}>
      <Link
        href="/"
        passHref
      >
        <a
          className={styles.logo}
          href="replace"
        >
          <Image
            src={Logo}
            alt="Eri Lambe"
          />
        </a>
      </Link>
      <nav className={styles.nav}>
        <Link
          href={locations.about}
          passHref
        >
          <a
            href="replace"
          >
            About
          </a>
        </Link>
        <Link
          href={locations.contact}
          passHref
        >
          <a
            href="replace"
            tabIndex={0}
          >
            Contact
          </a>
        </Link>
        <Link
          href="linkedin.com/in/erilambe"
          passHref
        >
          <a
            className={styles.socialIcon}
            href="replace"
          >
            <Image src={LinkedIn} alt="LinkedIn" width={24} height={24} />
          </a>
        </Link>
        <Link
          href="mailto:Erikaalanalambe@gmail.com"
          passHref
        >
          <a
            className={styles.socialIcon}
            href="replace"
          >
            <Image src={Email} alt="email" width={26} height={26} />
          </a>
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
