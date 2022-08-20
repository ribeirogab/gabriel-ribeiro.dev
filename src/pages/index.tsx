import type { NextPage } from 'next';

import * as S from '../styles/pages/home.styles';

const Home: NextPage = () => {
  const posts = [
    {
      id: 1,
      title: 'Why React Re-Renders',
      description:
        "In React, we don't update the DOM directly, we tell React what we want the DOM to look like, and React tackles the rest. But how exactly does it do this? In this tutorial, we'll unpack exactly when and why React re-renders, and how we can use this information to optimize the performance of our React apps.",
    },
    {
      id: 2,
      title: 'Why React Re-Renders',
      description:
        "In React, we don't update the DOM directly, we tell React what we want the DOM to look like, and React tackles the rest. But how exactly does it do this? In this tutorial, we'll unpack exactly when and why React re-renders, and how we can use this information to optimize the performance of our React apps.",
    },
    {
      id: 3,
      title: 'Why React Re-Renders',
      description:
        "In React, we don't update the DOM directly, we tell React what we want the DOM to look like, and React tackles the rest. But how exactly does it do this? In this tutorial, we'll unpack exactly when and why React re-renders, and how we can use this information to optimize the performance of our React apps.",
    },
    {
      id: 4,
      title: 'Why React Re-Renders',
      description:
        "In React, we don't update the DOM directly, we tell React what we want the DOM to look like, and React tackles the rest. But how exactly does it do this? In this tutorial, we'll unpack exactly when and why React re-renders, and how we can use this information to optimize the performance of our React apps.",
    },
    {
      id: 5,
      title: 'Why React Re-Renders',
      description:
        "In React, we don't update the DOM directly, we tell React what we want the DOM to look like, and React tackles the rest. But how exactly does it do this? In this tutorial, we'll unpack exactly when and why React re-renders, and how we can use this information to optimize the performance of our React apps.",
    },
    {
      id: 6,
      title: 'Why React Re-Renders',
      description:
        "In React, we don't update the DOM directly, we tell React what we want the DOM to look like, and React tackles the rest. But how exactly does it do this? In this tutorial, we'll unpack exactly when and why React re-renders, and how we can use this information to optimize the performance of our React apps.",
    },
    {
      id: 7,
      title: 'Why React Re-Renders',
      description:
        "In React, we don't update the DOM directly, we tell React what we want the DOM to look like, and React tackles the rest. But how exactly does it do this? In this tutorial, we'll unpack exactly when and why React re-renders, and how we can use this information to optimize the performance of our React apps.",
    },
  ];

  const categories = [
    'Node.js',
    'Web Scraping',
    'AWS',
    'Docker',
    'Serverless',
    'MongoDB',
  ];

  const popularContents = [
    'An Interactive Guide to CSS Transitions',
    'An Interactive Guide to CSS Transition',
    'CSS Variables for React Devs',
    'The styled-components Happy Path',
    'An Interactive Guide to CSS Transitions',
    'An Interactive Guide to CSS Transition',
    'CSS Variables for React Devs',
    'The styled-components Happy Path',
  ];

  return (
    <S.Wrapper>
      <main>
        <div>
          <h2>Publicado recentemente</h2>
          {posts.map((post) => (
            <div key={post.id} className="post">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <button>Read more</button>
            </div>
          ))}
        </div>

        <aside>
          <div>
            <h2>Top categorias</h2>
            <S.CategoriesWrapper>
              {categories.map((category) => (
                <div key={category}>{category}</div>
              ))}
            </S.CategoriesWrapper>
          </div>
          <div>
            <h2>Conteúdo popular</h2>
            <S.PopularContentList>
              {popularContents.map((content) => (
                <li key={content}>{content}</li>
              ))}
            </S.PopularContentList>
          </div>
        </aside>
      </main>
    </S.Wrapper>
  );
};

export default Home;
