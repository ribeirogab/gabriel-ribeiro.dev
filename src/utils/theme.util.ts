import { ThemeEnum } from '../enums';

export const getInitialTheme = (): ThemeEnum => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');

    if (typeof storedPrefs === 'string') {
      return storedPrefs as ThemeEnum;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');

    if (userMedia.matches) {
      return ThemeEnum.DARK;
    }
  }

  return ThemeEnum.LIGHT;
};
