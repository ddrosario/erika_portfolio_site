import React from 'react';

import styles from '@styles/banners/TitleCard.module.scss';

interface TitleCardProps {
  h1Text: string;
  // subtext: string;
  overviewText: string;
  // strongSubtext?: string;
  children?: null | JSX.Element | JSX.Element[];
}

export default function TitleCard({
  h1Text,
  overviewText,
  children,
  // subtext,
  // strongSubtext,
}: TitleCardProps) {
  return (
    <section className={styles.banner}>
      <h1 className={styles.bannerHeader}>{h1Text}</h1>
      <h2 className={styles.overviewHeader}>Project Overview</h2>
      <p className={styles.overviewText}>
        {overviewText}
      </p>
      {children}
    </section>
  );
}

TitleCard.defaultProps = {
  children: null,
  // strongSubtext: null,
};
