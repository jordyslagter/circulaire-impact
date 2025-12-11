import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import type { AppProps } from "next/app";
import { FC } from "react";
import "../core/globals.css";

import { Nunito_Sans } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const nunitoSans = Nunito_Sans({});

gsap.registerPlugin(useGSAP);

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <main className={nunitoSans.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
};

export default App;
