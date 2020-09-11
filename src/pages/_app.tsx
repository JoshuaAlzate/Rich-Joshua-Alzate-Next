import React from 'react';
import '../shared/scss/bootstrap.grid.scss';
import '../shared/scss/global.scss';

export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}
