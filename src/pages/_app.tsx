import '../styles/fonts.css';

import type { AppProps } from 'next/app';

import { GlobalStyles } from '../styles/global.styles';
import { ThemeProvider } from '../styles/ThemeProvider';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
