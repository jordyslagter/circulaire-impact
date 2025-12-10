import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FC, RefObject, useRef } from "react";
import Section from "../components/Section";
import clsx from "clsx";

const Home: FC = () => {
  const title = useRef(null);
  const subTitle = useRef(null);

  const cell1 = useRef(null);
  const cell2 = useRef(null);
  const cell3 = useRef(null);
  const cell4 = useRef(null);

  useGSAP(() => {
    gsap.fromTo(title.current, { x: -100 }, { x: 0 });
    gsap.fromTo(subTitle.current, { x: 100 }, { x: 0 });

    gsap.fromTo(cell1.current, { y: -10 }, { y: 0 });
  });

  return (
    <>
      <Section
        className={clsx(
          "bg-gtgreen flex flex-col justify-center content-center items-center text-antiprimary text-center font-bold",
        )}
      >
        <h1 ref={title} className={clsx("text-6xl")}>
          Een rugzak voor de volgende generatie...
        </h1>
        <h2 ref={subTitle} className={clsx("text-5xl mt-5")}>
          ...en de generaties daarna
        </h2>
      </Section>
      <Section className={clsx("grid grid-cols-2 grid-rows-2 items-center")}>
        <div
          className={clsx(
            "flex flex-col justify-center items-center content-center w-full",
            "h-full bg-gtlightgreen",
          )}
        >
          <h1 className={clsx("text-4xl text-center")}>Naamsbekendheid</h1>
        </div>
        <div
          className={clsx(
            "flex flex-col justify-center items-center content-center",
          )}
        >
          <p className={clsx("w-[90%] max-w-80 text-center")}>
            Greentom heeft problemen met naamsbekendheid. Het bedrijf heeft het
            B Corp-certificaat behaald maar is nog altijd nauwelijks bekend in
            Nederland.
          </p>
        </div>
        <div
          className={clsx(
            "flex flex-col justify-center items-center content-center",
          )}
        >
          <p className={clsx("w-[90%] max-w-80 text-center")}>
            Greentom heeft problemen met naamsbekendheid. Het bedrijf heeft het
            B Corp-certificaat behaald maar is nog altijd nauwelijks bekend in
            Nederland.
          </p>
        </div>
        <div
          className={clsx(
            "flex flex-col justify-center items-center content-center w-full",
            "h-full bg-gtlightgreen",
          )}
        >
          <h1 className={clsx("text-4xl text-center")}>Nieuwe doelgroep</h1>
        </div>
      </Section>
    </>
  );
};

export default Home;
