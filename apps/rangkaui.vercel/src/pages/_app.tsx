import type { AppProps } from 'next/app';
import React from 'react';
import MdxProvider from '@/components/Layout/Layout';

import '@/styles/globals.css';
import 'rangkaui-next/dist/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MdxProvider>
      <Component {...pageProps} />
    </MdxProvider>
  );
}
