import '@emotion/react';

import { Theme as DefaultTheme } from '../src/enums';

declare module '@emotion/react' {
  export interface Theme extends DefaultTheme {}
}
