import { ReactNode, useState } from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { cache } from '@emotion/css';
import { CacheProvider } from '@emotion/react';
import { useAmp } from 'next/amp';

import { AppProvider } from '../hooks';
import { getInitialTheme } from '../utils/theme.util';

import { defaultTheme } from './themes/default.theme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(getInitialTheme());
  const isAmp = useAmp();

  const chakraTheme = extendTheme(defaultTheme);

  const component = (
    <ChakraProvider resetCSS={false} theme={chakraTheme}>
      <AppProvider theme={theme} setTheme={setTheme}>
        {children}
      </AppProvider>
    </ChakraProvider>
  );

  if (isAmp) {
    return <CacheProvider value={cache}>{component}</CacheProvider>;
  }

  return component;
};
