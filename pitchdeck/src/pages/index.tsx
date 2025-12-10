import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FC, useRef } from "react";
import Section from "../components/Section";
import { clsx } from "clsx";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoPeopleCircleOutline } from "react-icons/io5";

const Home: FC = () => {
  const title = useRef(null);
  const subTitle = useRef(null);

  useGSAP(() => {
    gsap.fromTo(title.current, { x: -100 }, { x: 0 });
    gsap.fromTo(subTitle.current, { x: 100 }, { x: 0 });
  });

  return (
    <>
      <Section
        className={clsx(
          "bg-gtgreen flex flex-col justify-center content-center items-center",
          "text-antiprimary text-center font-bold",
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
          <IoChatbubblesOutline size={90} />
          <h1 className={clsx("text-4xl text-center mt-5")}>Naamsbekendheid</h1>
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
          <IoPeopleCircleOutline size={90} />
          <h1 className={clsx("text-4xl text-center mt-5")}>
            Nieuwe doelgroep
          </h1>
        </div>
        <div
          className={clsx(
            "flex flex-col justify-center items-center content-center",
            "bg-gtlightgreen w-full h-full",
          )}
        >
          <p className={clsx("w-[90%] max-w-80 text-center")}>
            Het bedrijf heeft zich tot nu toe vooral gefocust op nieuwe ouders.
            Met ons idee om in te zetten op een studentenrugzak zal Greentom in
            een hele nieuwe doelgroep moeten werken.
          </p>
        </div>
      </Section>
    </>
  );
};

export default Home;
