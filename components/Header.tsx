import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '@styles/header/Header.module.scss';
import pngLogo from '@assets/logo-pink.png';

const locations = {
  work: '/',
  about: '/about',
  // resume: '/resume',
  contactMe: '#contact',
};

const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
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
              src={pngLogo}
              alt="Eri Lambe"
            />
          </a>
        </Link>
        <div className={styles.headerNav}>
          <nav className={styles.nav}>
            <Link
              href={locations.work}
              passHref
            >
              <a
                className={locations.work === pathname ? styles.navLink : ''}
                href="replace"
                tabIndex={0}
              >
                Work
              </a>
            </Link>
            <Link
              href={locations.about}
              passHref
            >
              <a
                className={locations.about === pathname ? styles.navLink : ''}
                href="replace"
              >
                About
              </a>
            </Link>
            {/* <Link
            href={locations.resume}
            passHref
          >
            <a
              className={locations.resume === pathname ? styles.navLink : ''}
              href="replace"
            >
              Resume
            </a>
          </Link> */}
            <Link
              href={locations.contactMe}
              passHref
            >
              <a
                className={locations.contactMe === pathname ? styles.navLink : ''}
                href="replace"
                onClick={(e) => {
                  const footer = document.getElementById('contact');
                  if (footer) {
                    e.preventDefault();
                    e.stopPropagation();
                    footer.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                Contact Me
              </a>
            </Link>
          </nav>
          {/* <ul className={styles.socialsContainer}>
            <li>
              😀
            </li>
            <li>
              🌎
            </li>
            <li>
              📈
            </li>
          </ul> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
