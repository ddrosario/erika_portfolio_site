import React from 'react';
import Link from 'next/link';

import styles from '@styles/BoxedLink.module.scss';

interface BoxedLinkProps {
  href: string;
  linkText: string;
}

const BoxedLink = ({ href, linkText }: BoxedLinkProps) => (
  <Link
    href={href}
    passHref
  >
    <a
      className={styles.boxedLink}
      href="replace"
    >
      {linkText}
    </a>
  </Link>
);

export default BoxedLink;
