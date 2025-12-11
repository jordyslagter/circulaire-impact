import { useGSAP } from "@gsap/react";
import { clsx } from "clsx";
import { gsap } from "gsap";
import { FC, useRef } from "react";
import { BsBackpack3 } from "react-icons/bs";
import Section from "../Section";

const Backpack: FC = () => {
  const backpackText = useRef(null);

  useGSAP(() => {
    gsap.fromTo(backpackText.current, { y: 30 }, { y: 0 });
  });

  return (
    <Section
      className={clsx(
        "flex flex-col content-center items-center justify-center",
      )}
    >
      <BsBackpack3 size={200} />
      <p ref={backpackText} className={clsx("mt-5 text-4xl")}>
        Zwaar, oncomfortabel, snel kapot, duur, saai
      </p>
    </Section>
  );
};

export default Backpack;
