import Head from 'next/head';
import React from 'react';
import '../src/scss/style.scss';

/* eslint-disable-next-line */
function MyApp({ Component, pageProps }) {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Head>
        <title>Feminist Bible</title>
      </Head>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
