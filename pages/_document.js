import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <script src="https://cdn.usefathom.com/script.js" site="BKAODLAL" defer></script>
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
