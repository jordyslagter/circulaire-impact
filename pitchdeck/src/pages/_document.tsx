import { Html, Head, Main, NextScript } from "next/document";
import { FC } from "react";

const Document: FC = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-antiprimary text-primary">
        <main>
          <Main />
        </main>
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
