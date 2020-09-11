import React from 'react';
import '../shared/scss/bootstrap.grid.scss';
import '../shared/scss/global.scss';
import NavigationBar from '../layout/navigation-bar/navigation-bar'
export default function App({ Component, pageProps }) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
    </>

  );
}
