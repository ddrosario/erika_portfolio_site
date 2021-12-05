/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from '@styles/banners/HelloBanner.module.scss';

interface HelloBannerProps {
  webp: string;
  alt: string;
  showText?: boolean;
}

const HelloBanner = ({ webp, alt, showText }: HelloBannerProps) => (
  <div className={styles.rootBanner}>
    <div className={styles.background}>
      <img className={styles.backgroundImg} src={webp} alt={alt} />
    </div>
    {showText && (
      <div className={styles.banner}>
        <h1 className={styles.bannerHeader}>My name is Erika,</h1>
        <div className={styles.bannerSubtext}>It&apos;s nice to meet you!</div>
      </div>
    )}
  </div>
);

HelloBanner.defaultProps = {
  showText: false,
};

export default HelloBanner;
