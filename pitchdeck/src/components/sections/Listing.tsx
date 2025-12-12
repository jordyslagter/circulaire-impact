import { useGSAP } from "@gsap/react";
import { clsx } from "clsx";
import gsap from "gsap";
import { FC, ReactElement, useRef } from "react";
import { IoChatbubblesOutline, IoPeopleCircleOutline } from "react-icons/io5";
import { Section } from "../Section";

interface ParagraphCellProps {
  children?: ReactElement | string;
  [x: string]: any;
}

const ParagraphCell: FC<ParagraphCellProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <p {...rest} className={clsx("w-[90%] max-w-80 text-center")}>
      {children}
    </p>
  );
};

export const Listing: FC = () => {
  const container = useRef(null);
  const paragraph1 = useRef(null);
  const paragraph2 = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          once: true,
        },
      });
      timeline.fromTo(paragraph1.current, { opacity: 0 }, { opacity: 1 });
      timeline.fromTo(paragraph2.current, { opacity: 0 }, { opacity: 1 });
    },
    { scope: container },
  );

  return (
    <Section
      ref={container}
      className={clsx("grid grid-cols-2 grid-rows-2 items-center")}
    >
      <div
        className={clsx(
          "flex w-full flex-col content-center items-center justify-center",
          "bg-gtlightgreen h-full",
        )}
      >
        <IoChatbubblesOutline size={90} />
        <h1 className={clsx("mt-5 text-center text-4xl")}>Naamsbekendheid</h1>
      </div>

      <div
        className={clsx(
          "flex flex-col content-center items-center justify-center",
        )}
      >
        <ParagraphCell ref={paragraph1}>
          Greentom heeft problemen met naamsbekendheid. Het bedrijf heeft het B
          Corp-certificaat behaald maar is nog altijd nauwelijks bekend in
          Nederland.
        </ParagraphCell>
      </div>

      <div
        className={clsx(
          "flex flex-col content-center items-center justify-center",
        )}
      >
        <IoPeopleCircleOutline size={90} />
        <h1 className={clsx("mt-5 text-center text-4xl")}>Nieuwe doelgroep</h1>
      </div>

      <div
        className={clsx(
          "flex flex-col content-center items-center justify-center",
          "bg-gtlightgreen h-full w-full",
        )}
      >
        <ParagraphCell ref={paragraph2}>
          Het bedrijf heeft zich tot nu toe vooral gefocust op nieuwe ouders.
          Met ons idee om in te zetten op een studentenrugzak zal Greentom met
          een hele nieuwe doelgroep moeten werken.
        </ParagraphCell>
      </div>
    </Section>
  );
};
