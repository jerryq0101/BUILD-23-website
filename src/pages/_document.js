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

        {/* Twitter Sharing Look */}
        <meta name="twitter:card" content="/Twitter-card.png" />
        <meta name="twitter:title" content="BUILD'23 - Vancouver Hackathon" />
        <meta name="twitter:description" content="BUILD, hosted by Refoundation, is a hackathon that engages the young minds from Vancouver to solve the most pressing issues of today's society." />
        <meta name="twitter:image" content="/Twitter-card.png" />
      </Head>
      <body>
        <Main /> 
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
