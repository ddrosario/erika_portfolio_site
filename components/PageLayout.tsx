import React from 'react';
import dynamic from 'next/dynamic';
import styles from '@styles/PageLayout.module.scss';

// import MobileHeader from './MobileHeader';
// import Header from './Header';
import RenderMobile from './hoc/RenderMobile';
import RenderDefault from './hoc/RenderDefault';

const Header = dynamic(() => import('./Header'));
const MobileHeader = dynamic(() => import('./MobileHeader'));

interface PageLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <>
    <RenderMobile>
      <MobileHeader />
    </RenderMobile>
    <RenderDefault>
      <Header />
    </RenderDefault>
    <div className={styles.container}>
      {children}
    </div>
  </>
);

export default PageLayout;
