/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from '@styles/banners/HelloBanner.module.scss';

interface HelloBannerProps {
  webp: string;
  jpg: string;
  alt: string;
  showText?: boolean;
  bannerAlignBottom?: boolean;
}

const HelloBanner = ({
  webp,
  jpg,
  alt,
  showText,
  bannerAlignBottom,
}: HelloBannerProps) => (
  <div className={styles.rootBanner}>
    <div className={styles.background}>
      <picture>
        <source type="image/webp" srcSet={webp} />
        <img
          className={bannerAlignBottom ? styles.backgroundImgBottom : styles.backgroundImg}
          src={jpg}
          alt={alt}
        />
      </picture>
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
  bannerAlignBottom: false,
};

export default HelloBanner;
