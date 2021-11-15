import React from 'react';

import styles from '@styles/banners/TitleCard.module.scss';

interface TitleCardProps {
  h1Text: string;
  subtext: string;
  overviewText: string;
  children?: null | JSX.Element | JSX.Element[];
}

export default function TitleCard({
  h1Text,
  subtext,
  overviewText,
  children,
}: TitleCardProps) {
  return (
    <section className={styles.banner}>
      <h1 className={styles.bannerHeader}>{h1Text}</h1>
      <div className={styles.bannerSubtext}>{subtext}</div>
      {children}
      <h2 className={styles.overviewHeader}>Overview</h2>
      <p>
        {overviewText}
      </p>
    </section>
  );
}

TitleCard.defaultProps = {
  children: null,
};
