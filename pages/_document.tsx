import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta property="og:image" content="/assets/profile-img.jpeg" />
          <meta property="og:image:width" content="200" />
          <meta property="og:image:height" content="200" />
          <meta property="og:description" content="Hi I'm a UI Designer based out of San Jose California" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Eri Lambe Portfolio" />
          <meta name="twitter:image" content="/assets/profile-img.jpeg" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Eri Lambe Portfolio" />
          <meta name="twitter:description" content="Hi I'm a UI Designer based out of San Jose California" />
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;500&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
