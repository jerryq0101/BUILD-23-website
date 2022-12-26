import Document, { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html>
      <Head>
        <title>BUILD&apos;23</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Suisse+Grotesk&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" />

        {/* Twitter Sharing Look */}
        <meta name="twitter:card" content="/Twitter-card.png" />
        <meta name="twitter:title" content="BUILD'23 - Vancouver Hackathon" />
        <meta
          name="twitter:description"
          content="BUILD, hosted by Refoundation, is a hackathon that engages the young minds from Vancouver to solve the most pressing issues of today's society."
        />
        <meta name="twitter:image" content="/Twitter-card.png" />

        <meta name="title" content="BUILD23" />
        <meta
          name="description"
          content="BUILD, hosted by Refoundation, is a hackathon that engages the young minds from Vancouver to solve the most pressing issues of today's society."
        />
        <meta
          name="keywords"
          content="Hackathon, Vancouver, Global, Emerging technology, Blockchain, AI, Sustainability"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="5 days" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
