import React from 'react';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

const Header = dynamic(() => import('@components/Header'), { ssr: false });
const MobileHeader = dynamic(() => import('@components/MobileHeader'), { ssr: false });

const RenderHeader = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
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
