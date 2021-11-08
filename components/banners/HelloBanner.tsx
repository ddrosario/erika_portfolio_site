import React from 'react';

import styles from '@styles/banners/HelloBanner.module.scss';

const HelloBanner = () => (
  <div className={styles.banner}>
    <h1 className={styles.bannerHeader}>
      My name is Erika,
    </h1>
    <div
      className={styles.bannerSubtext}
    >
      It&apos;s nice to meet you!
    </div>
  </div>
);

export default HelloBanner;
