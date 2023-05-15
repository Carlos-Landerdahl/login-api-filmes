import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import { GlobalStyles } from '@/styles/GlobalStyles';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  GlobalStyles();
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
