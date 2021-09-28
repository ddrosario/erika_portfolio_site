import React from 'react';
import Link from 'next/link';

import styles from '@styles/CaseStudyNavLinks.module.scss';

interface CaseStudyNavLinksProps {
  href: string;
  linkText: string;
}

const CaseStudyNavLinks = ({ href, linkText }: CaseStudyNavLinksProps) => (
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

export default CaseStudyNavLinks;
