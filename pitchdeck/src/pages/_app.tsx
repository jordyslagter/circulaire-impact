import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { AppProps } from "next/app";
import { Nunito_Sans } from "next/font/google";
import { FC } from "react";
import { Provider } from "react-redux";
import "../core/globals.css";
import { store } from "../redux/store";

const nunitoSans = Nunito_Sans({});

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

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
