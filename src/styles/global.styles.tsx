import { css, Global, useTheme } from '@emotion/react';

import { ScreenSizeValueEnum, Theme } from '../enums';

export const GlobalStyles = () => {
  const theme = useTheme() as Theme;

  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: ${theme.colors.background};
          color: ${theme.colors.text};
        }

        body,
        input,
        textarea,
        select,
        button {
          font: 400 0.875rem 'Poppins', sans-serif;
        }

        button {
          border-radius: 8px;
          cursor: pointer;
          background: transparent;
          border: none;

          &:focus {
            outline: 1px solid ${theme.colors.primary};
          }
        }

        .container {
          background: ${theme.colors.container};
          color: ${theme.colors.text};
        }

        @media (max-width: ${ScreenSizeValueEnum.SM}px) {
          h1 {
            font-size: 1.75rem;
          }
        }
      `}
    />
  );
};
