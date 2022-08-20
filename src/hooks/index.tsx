import { Dispatch, ReactNode, SetStateAction } from 'react';

import { ThemeEnum } from '../enums';

import { ThemeProvider } from './theme';

type AppProviderProps = {
  children: ReactNode;
  setTheme: Dispatch<SetStateAction<ThemeEnum>>;
  theme: ThemeEnum;
};

export const AppProvider = ({
  children,
  setTheme,
  theme,
}: AppProviderProps) => {
  return (
    <ThemeProvider setTheme={setTheme} theme={theme}>
      {children}
    </ThemeProvider>
  );
};
