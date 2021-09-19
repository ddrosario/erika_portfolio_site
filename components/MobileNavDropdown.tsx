import React from 'react';
import Link from 'next/link';

import styles from '@styles/header/MobileNavDropdown.module.scss';

const MobileNavDropdown = () => (
  <ul className={styles.dropdown}>
    <li>
      <Link
        href="/work"
        passHref
      >
        <a
          className={styles.link}
          href="replace"
        >
          Work
        </a>
      </Link>
    </li>
    <li>
      <Link
        href="/about"
        passHref
      >
        <a
          className={styles.link}
          href="replace"
        >
          About
        </a>
      </Link>
    </li>
    {/* <li>
      <Link
        href="/Resume"
        passHref
      >
        <a
          className={styles.link}
          href="replace"
        >
          Resume
        </a>
      </Link>
    </li> */}
    <li>
      <Link
        href="/contact-me"
        passHref
      >
        <a
          className={styles.link}
          href="replace"
        >
          Contact Me
        </a>
      </Link>
    </li>
  </ul>
);

export default MobileNavDropdown;
