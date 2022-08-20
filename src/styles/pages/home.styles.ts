import styled from '@emotion/styled';

export const Wrapper = styled.div`
  main {
    display: flex;
    gap: 2rem;

    padding: 1rem;

    h2 {
      margin: 1.5rem 0;
      font-size: 1rem;

      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: normal;
    }

    h3 {
      font-size: 1.25rem;
    }

    .post {
      & + .post {
        margin-top: 1.75rem;
      }

      button {
        margin-top: 1rem;
      }
    }

    aside {
      min-width: 300px;
    }
  }
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  > div {
    padding: 0.25rem;
    border: solid 2px ${({ theme }) => theme.colors.background};
    border-radius: 0.5rem;
    font-size: 0.75rem;

    background: ${({ theme }) => theme.colors.gray['100']};
    text-transform: lowercase;
    cursor: pointer;
    transition: 0.5s;

    :hover {
      filter: brightness(1.05);
      border-color: ${({ theme }) => theme.colors.gray['100']};
    }
  }
`;

export const PopularContentList = styled.ul`
  li {
    margin: 1rem 0;
  }
`;
