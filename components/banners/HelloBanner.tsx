import React from 'react';

import styles from '@styles/banners/HelloBanner.module.scss';

import BorderedCard from '../hoc/BorderedCard';

const HelloBanner = () => (
  <BorderedCard>
    <div className={styles.bannerPadding}>
      <h1 className={styles.bannerHeader}>
        Hello, my name is Erika!
      </h1>
      <h3 className={styles.bannerSubtext}>I&apos;m a Product Designer based in the Bay Area.</h3>
    </div>
  </BorderedCard>
);

export default HelloBanner;
