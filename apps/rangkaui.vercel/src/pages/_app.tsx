import type { AppProps } from 'next/app';
import React from 'react';

import '@/styles/globals.css';
import 'rangkaui-next/dist/styles.css';
import { ThemeProvider } from '@/contexts/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
