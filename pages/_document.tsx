import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-dark.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Sunflower:300"
            rel="stylesheet"
          />
          <NextScript />
        </Head>
        <body>
          <Main />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
