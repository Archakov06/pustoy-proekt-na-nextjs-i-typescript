import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en-GB">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="manifest" href="static/manifest.json" />
          <link rel="icon" href="static/img/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
