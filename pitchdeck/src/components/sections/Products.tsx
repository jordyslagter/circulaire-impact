import { useGSAP } from "@gsap/react";
import { clsx } from "clsx";
import gsap from "gsap";
import Image from "next/image";
import { FC, useRef } from "react";
import { Section } from "../Section";

export const Products: FC = () => {
  const container = useRef(null);
  const row1col1 = useRef(null);
  const row1col2 = useRef(null);
  const row2col1 = useRef(null);
  const row2col2 = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: container.current,
        start: "top 80%",
        once: true,
      });

      const from = { opacity: 0, y: 10 } as GSAPTweenVars;
      const to = { opacity: 1, y: 0 } as GSAPTweenVars;

      timeline.fromTo(row1col1.current, from, to);
      timeline.fromTo(row1col2.current, from, to);
      timeline.fromTo(row2col1.current, from, to);
      timeline.fromTo(row2col2.current, from, to);
    },
    { scope: container },
  );

  return (
    <Section
      ref={container}
      className={clsx(
        "grid grid-cols-2 grid-rows-3 content-center items-center",
        "justify-center justify-items-center text-center",
      )}
    >
      <h1
        className={clsx(
          "bg-gtlightgreen col-span-2 h-full w-full text-4xl",
          "flex flex-col content-center items-center justify-center font-bold",
        )}
      >
        Huidige producten
      </h1>
      <Image
        ref={row1col1}
        src="https://greentom.com/media/cms/sdd/classic-2017-perspective-grey-blue.png"
        width={250}
        height={250}
        alt="Stroller"
      />
      <p ref={row1col2}>Stroller</p>
      <Image
        ref={row2col1}
        src="https://greentom.com/media/catalog/product/cache/249688b60bb56e1686647a2df7a46765/g/t/gtbc1-sage.png"
        width={250}
        height={250}
        alt="Draagzak"
      />
      <p ref={row2col2}>Draagzak</p>
    </Section>
  );
};
