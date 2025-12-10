import { FC } from "react";
import "../core/globals.css";
import type { AppProps } from "next/app";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({});

gsap.registerPlugin(useGSAP);

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={nunitoSans.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
