import React from 'react';

import styles from '@styles/banners/TitleCard.module.scss';

interface TitleCardProps {
  h1Text: string;
  // subtext: string;
  overviewText: string;
  strongOverviewText?: string;
  children?: null | JSX.Element | JSX.Element[];
}

export default function TitleCard({
  h1Text,
  overviewText,
  children,
  strongOverviewText,
  // subtext,
  // strongSubtext,
}: TitleCardProps) {
  return (
    <section className={styles.banner}>
      <h1 className={styles.bannerHeader}>{h1Text}</h1>
      <h2 className={styles.overviewHeader}>Project Overview</h2>
      <p className={styles.overviewText}>
        {typeof strongOverviewText === 'string' && (
          <strong className={styles.strong}>{strongOverviewText}</strong>
        )}
        <span>
          {overviewText}
        </span>
      </p>
      {children}
    </section>
  );
}

TitleCard.defaultProps = {
  children: null,
  strongOverviewText: null,
  // strongSubtext: null,
};
