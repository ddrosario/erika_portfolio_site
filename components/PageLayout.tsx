import React from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from '../styles/PageLayout.module.scss';

import MobileHeader from './MobileHeader';
import Header from './Header';

interface PageLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className={styles.container}>
      {isMobile ? <MobileHeader /> : <Header />}
      {children}
    </div>
  );
};

export default PageLayout;
