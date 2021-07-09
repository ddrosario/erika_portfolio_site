import React from 'react';
import styles from '../../styles/banners/HelloBanner.module.scss';

const HelloBanner = () => (
  <div className={styles.banner}>
    <h1 className={styles.bannerHeader}>
      <span className={styles.helloText}>Hello,</span>
      <span className={styles.myName}>my name is Erika!</span>
    </h1>
    <h3 className={styles.bannerSubtext}>I&apos;m a Product Designer based in the Bay Area.</h3>
  </div>
);

export default HelloBanner;
