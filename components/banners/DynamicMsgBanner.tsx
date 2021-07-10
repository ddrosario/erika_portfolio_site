import React from 'react';

import BannerBorder from './BannerBorder';

import styles from '../../styles/banners/DynamicMsgBanner.module.scss';

interface DynamicMsgBannerProps {
  message: string;
}

const DynamicMsgBanner = ({ message }: DynamicMsgBannerProps) => (
  <BannerBorder>
    <div className={styles.bannerPadding}>
      <h1 className={styles.bannerHeader}>
        {message}
      </h1>
    </div>
  </BannerBorder>
);

export default DynamicMsgBanner;
