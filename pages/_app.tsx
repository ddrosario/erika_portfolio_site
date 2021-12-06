import React from 'react';
import '@styles/globals.scss';
import 'react-image-lightbox/style.css';
import type { AppProps } from 'next/app';
import smoothscroll from 'smoothscroll-polyfill';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    smoothscroll.polyfill();
  }, []);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
export default MyApp;
