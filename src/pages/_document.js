import Document, { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html>
      <Head>
        <title>BUILD'23</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body>
        <Main /> 
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
