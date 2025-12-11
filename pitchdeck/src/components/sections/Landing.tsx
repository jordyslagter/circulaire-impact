import { useGSAP } from "@gsap/react";
import { clsx } from "clsx";
import { gsap } from "gsap";
import { FC, useRef } from "react";
import ParticlesEffect from "../ParticlesEffect";
import Section from "../Section";

const Landing: FC = () => {
  const title = useRef(null);
  const subTitle = useRef(null);

  useGSAP(() => {
    gsap.fromTo(title.current, { x: -100 }, { x: 0 });
    gsap.fromTo(subTitle.current, { x: 100 }, { x: 0 });
  });

  return (
    <Section
      className={clsx(
        "bg-gtgreen flex flex-col content-center items-center justify-center",
        "text-antiprimary relative overflow-hidden text-center font-bold",
      )}
    >
      <h1 ref={title} className={clsx("z-10 text-6xl")}>
        Een rugzak voor de volgende generatie...
      </h1>
      <h2 ref={subTitle} className={clsx("z-10 mt-5 text-5xl")}>
        ...en de generaties daarna
      </h2>
      <div className="absolute inset-0">
        <ParticlesEffect />
      </div>
    </Section>
  );
};

export default Landing;
