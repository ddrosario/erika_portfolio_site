import React from 'react';

import styles from '@styles/banners/TitleCard.module.scss';

interface CompanyTitleCardProps {
  overviewText: string;
  titleText: string;
  children?: null | JSX.Element | JSX.Element[];
}

export default function CompanyTitleCard({
  overviewText,
  children,
  titleText,
}: CompanyTitleCardProps) {
  return (
    <div className={styles.banner}>
      <h2 className={styles.overviewHeader}>{titleText}</h2>
      <p className={styles.overviewText}>
        <span>
          {overviewText}
        </span>
      </p>
      {children}
    </div>
  );
}

CompanyTitleCard.defaultProps = {
  children: null,
};
