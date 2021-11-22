import React from 'react';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

const Header = dynamic(() => import('@components/Header'));
const MobileHeader = dynamic(() => import('@components/MobileHeader'));

const RenderHeader = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      {isMobile ? (
        <MobileHeader />
      ) : (
        <Header />
      )}
    </>
  );
};

export default RenderHeader;
