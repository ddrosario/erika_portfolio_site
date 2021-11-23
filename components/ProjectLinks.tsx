import React from 'react';
import Link from 'next/link';

import styles from '@styles/banners/ProjectLinks.module.scss';

interface ProjectLinksProps {
  href: string;
  linkText: string;
  left?: boolean;
  right?: boolean;
}

const ProjectLinks = ({
  href,
  linkText,
  left,
  right,
}: ProjectLinksProps) => (
  <Link
    href={href}
    passHref
  >
    <a
      className={styles.boxedLink}
      href="replace"
      onClick={() => window.scrollTo(0, 0)}
    >
      {left && (
        <span>{'<'}</span>
      )}
      <span className={styles.linkText}>
        {linkText}
      </span>
      {right && (
        <span>{'>'}</span>
      )}
    </a>
  </Link>
);

ProjectLinks.defaultProps = {
  left: false,
  right: false,
};

export default ProjectLinks;
