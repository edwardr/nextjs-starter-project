// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';

class CustomDocument extends Document {
    render() {
      /**
       * If you need to target old IE for some reason...
       * uncomment ie var and pass dangerouslySetInnerHtml above <Main />
       * let ie = '<!--[if IE]><link rel="stylesheet" type="text/css" href="../public/styles/old-ie.css"><![endif]-->';
       * <div dangerouslySetInnerHTML={{__html: ie}}></div>
       */
        return (
          <Html>
            <Head>
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        );
    }
}

export default CustomDocument;
