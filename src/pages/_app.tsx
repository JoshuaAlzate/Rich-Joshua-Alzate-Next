import React from 'react';
import Head from 'next/head'
import '../shared/scss/bootstrap.grid.scss';
import '../shared/scss/global.scss';
import NavigationBar from '../layout/navigation-bar/navigation-bar';
import Footer from '../layout/footer/footer';
import JLogoSVG from '../assets/images/svg/j-logo.svg';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Rich Joshua Alzate | Full-Stack Developer, Musician, Photographer</title>
        <base href="/" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0" />
        <link rel="icon" type="image/svg" href={JLogoSVG} />
      </Head>
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </>

  );
}
