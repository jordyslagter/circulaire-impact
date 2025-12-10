import { Html, Head, Main, NextScript } from "next/document";
import { FC } from "react";

const Document: FC = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-antiprimary text-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
