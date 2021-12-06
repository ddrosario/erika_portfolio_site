import React from 'react';
// import Link from 'next/link';

import LinkTile from '@components/LinkTile';

import styles from '@styles/ViewProject.module.scss';

interface ViewProjectProps {
  href: string;
  ctaText: string;
  header: string;
  body: string;
}

const ViewProject = ({
  href,
  ctaText,
  header,
  body,
}: ViewProjectProps) => (
  <div className={styles.root}>
    <h3 className={styles.h3}>{header}</h3>
    <p className={styles.body}>{body}</p>
    <div className={styles.linkContainer}>
      <LinkTile
        href={href}
        text={ctaText}
      />
      {/* <Link
        href={href}
        passHref
      >
        <a
          className={styles.link}
          href="replace"
        >
          {ctaText}
        </a>
      </Link> */}
    </div>
  </div>
);

export default ViewProject;
