import React from 'react';
import styles from '@styles/PageLayout.module.scss';

// import MobileHeader from './MobileHeader';
// import Header from './Header';
import RenderHeader from './hoc/RenderHeader';

interface PageLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <>
    <RenderHeader />
    <div className={styles.container}>
      {children}
    </div>
  </>
);

export default PageLayout;
