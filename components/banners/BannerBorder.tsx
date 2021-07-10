import React from 'react';
import styles from '../../styles/banners/BannerBorder.module.scss';

interface BannerBorderProps {
  children: JSX.Element | JSX.Element[];
}

const BannerBorder = ({ children }: BannerBorderProps) => (
  <div className={styles.banner}>
    {children}
  </div>
);

export default BannerBorder;
