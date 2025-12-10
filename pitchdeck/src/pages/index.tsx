import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FC, useRef } from "react";
import Section from "../components/Section";

const Home: FC = () => {
  const title = useRef(null);
  const subTitle = useRef(null);

  useGSAP(() => {
    gsap.fromTo(title.current, { x: -100 }, { x: 0 });
    gsap.fromTo(subTitle.current, { x: 100 }, { x: 0 });
  });

  return (
    <Section className="bg-gtgreen flex flex-col justify-center items-center text-antiprimary text-center font-bold">
      <h1 ref={title} className="text-6xl">
        Een rugzak voor de volgende generatie...
      </h1>
      <h2 ref={subTitle} className="text-5xl mt-5">
        ...en de generaties daarna
      </h2>
    </Section>
  );
};

export default Home;
