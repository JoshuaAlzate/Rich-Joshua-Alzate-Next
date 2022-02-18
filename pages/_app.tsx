import '../styles/globals.css'
import 'swiper/css';
import type { AppProps } from 'next/app'
import Swiper, { Autoplay } from 'swiper';
Swiper.use([Autoplay]);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
