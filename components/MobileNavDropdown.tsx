import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@styles/header/MobileNavDropdown.module.scss';
import LinkedInWhite from '@assets/social_icons/linkedin-white.png';
import EmailWhite from '@assets/social_icons/email-white.svg';

import { usePreventBodyScroll } from '@util/hooks/usePreventBodyScroll';

const MobileNavDropdown = () => {
  usePreventBodyScroll();

  return (
    <div className={styles.dropdown}>
      <Link
        href="/"
        passHref
      >
        <a
          className={styles.link}
          href="replace"
        >
          Home
        </a>
      </Link>
      <Link
        href="/#about-me-section"
        passHref
      >
        <a
          className={styles.link}
          href="replace"
        >
          About
        </a>
      </Link>
      <Link
        href="#footer"
        passHref
      >
        <a
          className={styles.link}
          href="replace"
          // onClick={(e) => {
          //   const footer = document.getElementById('contact2');
          //   if (footer) {
          //     e.preventDefault();
          //     e.stopPropagation();
          //     footer.scrollIntoView({
          //       behavior: 'smooth',
          //     });
          //   }
          // }}
        >
          Contact
        </a>
      </Link>
      <div className={styles.icons}>
        <Link
          href="linkedin.com/in/erilambe"
          passHref
        >
          <a
            className={styles.socialIcon}
            href="replace"
          >
            <Image src={LinkedInWhite} alt="LinkedIn" width={24} height={24} />
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
            <Image src={EmailWhite} alt="email" width={26} height={26} />
          </a>
        </Link>
      </div>
    </div>
  );
};
export default MobileNavDropdown;
