import React from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from '../styles/PageLayout.module.scss';

import MobileHeader from './MobileHeader';
import Header from './Header';

interface PageLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Mobile = ({ children }: any) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const Default = ({ children }: any) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

const PageLayout = ({ children }: PageLayoutProps) => (
  <>
    <Mobile>
      <MobileHeader />
    </Mobile>
    <Default>
      <Header />
    </Default>
    <div className={styles.container}>
      {children}
    </div>
  </>
);

export default PageLayout;
