import { Fragment } from 'react';

import { cache } from '@emotion/css';
import createEmotionServer from '@emotion/server/create-instance';
import Document, {
  DocumentContext,
  NextScript,
  Html,
  Head,
  Main,
} from 'next/document';

import { DocumentHead } from '../components/DocumentHead';

const renderStatic = async (html?: string) => {
  if (html === undefined) {
    throw new Error('did you forget to return html from renderToString?');
  }
  const { extractCritical } = createEmotionServer(cache);
  const { ids, css } = extractCritical(html);

  return { html, ids, css };
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const page = await ctx.renderPage();
    const { css, ids } = await renderStatic(page.html);
    const initialProps: any = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <Fragment>
          {initialProps.styles}
          <style
            data-emotion={`css ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css.replace(/!important/g, '') }}
          />
        </Fragment>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <DocumentHead />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
