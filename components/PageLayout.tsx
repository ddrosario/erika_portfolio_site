import React from 'react';
import styles from '@styles/PageLayout.module.scss';

import MobileHeader from './MobileHeader';
import Header from './Header';
import RenderMobile from './hoc/RenderMobile';
import RenderDefault from './hoc/RenderDefault';

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
