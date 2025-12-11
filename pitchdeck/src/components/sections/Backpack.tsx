import { useGSAP } from "@gsap/react";
import { clsx } from "clsx";
import { gsap } from "gsap";
import { FC, useRef } from "react";
import { BsBackpack3 } from "react-icons/bs";
import { Section } from "../Section";

export const Backpack: FC = () => {
  const backpackTextContainer = useRef(null);
  const backpackText1 = useRef(null);
  const backpackText2 = useRef(null);
  const backpackText3 = useRef(null);
  const backpackText4 = useRef(null);
  const backpackText5 = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: backpackTextContainer.current,
          start: "top 80%",
          once: true,
        },
      });

      timeline.fromTo(
        backpackText1.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
      );
      timeline.fromTo(
        backpackText2.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
      );
      timeline.fromTo(
        backpackText3.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
      );
      timeline.fromTo(
        backpackText4.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
      );
      timeline.fromTo(
        backpackText5.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
      );
    },
    { scope: backpackTextContainer },
  );

  return (
    <Section
      className={clsx(
        "flex flex-col content-center items-center justify-center",
      )}
    >
      <h1 className={clsx("text-4xl font-bold")}>
        De huidige problemen met rugzakken...
      </h1>
      <p className={clsx("mb-20 text-xs")}>Bruls, G. & Slagter, J. (2026)</p>
      <BsBackpack3 size={200} />
      <div
        ref={backpackTextContainer}
        className={clsx("mt-5 flex flex-row gap-7 text-center text-4xl")}
      >
        <p ref={backpackText1}>Zwaar</p>
        <p ref={backpackText2}>oncomfortabel</p>
        <p ref={backpackText3}>snel kapot</p>
        <p ref={backpackText4}>duur</p>
        <p ref={backpackText5}>saai</p>
      </div>
    </Section>
  );
};
