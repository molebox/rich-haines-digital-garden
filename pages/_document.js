import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://kwes.io/v2/kwes-script.js" defer></script>
        </body>
      </html>
    );
  }
}

export default MyDocument;
