import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@styles/header/Header.module.scss';
import Logo from '@assets/logo.svg';
import LinkedIn from '@assets/social_icons/linkedin.png';
import LinkedInPink from '@assets/social_icons/linkedin-green.png';
import Email from '@assets/social_icons/email.svg';
import EmailPink from '@assets/social_icons/email-green.png';

const locations = {
  about: '/#about-me',
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
            className={styles.navText}
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
            className={styles.navText}
            href="replace"
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault();
              const footer = document.getElementById('footer');
              footer?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
          </a>
        </Link>
        <Link
          href="https://www.linkedin.com/in/erilambe"
          passHref
        >
          <a
            className={styles.socialIcon}
            href="replace"
          >
            <div className={styles.socialIconImg}>
              <Image src={LinkedIn} alt="LinkedIn" width={24} height={24} />
            </div>
            <div className={styles.socialIconImgActive}>
              <Image src={LinkedInPink} alt="LinkedIn" width={24} height={24} />
            </div>
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
            <div className={styles.socialIconImg}>
              <Image src={Email} alt="email" width={26} height={26} />
            </div>
            <div className={styles.socialIconImgActive}>
              <Image src={EmailPink} alt="LinkedIn" width={26} height={26} />
            </div>
          </a>
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
