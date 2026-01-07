import clsx from "clsx";
import { FC, useRef } from "react";
import { PiStudent } from "react-icons/pi";
import { Section } from "../Section";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export const Uitdaging: FC = () => {
  const title = useRef(null);
  const uitdagingContentContainer = useRef(null);
  const icon = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: uitdagingContentContainer.current,
          start: "top 80%",
          once: true,
        },
      });

      timeline.fromTo(
        title.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
      );
      timeline.fromTo(
        icon.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
      );
    },
    { scope: uitdagingContentContainer },
  );

  return (
    <Section
      ref={uitdagingContentContainer}
      className={clsx(
        "bg-gtgreen flex flex-col content-center items-center justify-center",
      )}
    >
      <h1 ref={title} className={clsx("z-10 text-6xl")}>
        Hoe kunnen we studenten bereiken?
      </h1>
      <PiStudent size={200} />
    </Section>
  );
};
