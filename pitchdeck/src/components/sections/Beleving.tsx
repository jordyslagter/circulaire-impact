import { FC, useRef } from "react";
import { Section } from "../Section";
import clsx from "clsx";
import { FaPersonRays } from "react-icons/fa6";

export const Beleving: FC = () => {

  return (
    <Section
      className={clsx(
        "bg-gtgreen flex flex-col content-center items-center justify-center",
      )}
    >
      <h1 className={clsx("z-10 text-5xl")}>
        Een rugzak voor elk persoon
      </h1>
      <FaPersonRays size={200} className={clsx("mt-12")} />
      <div className={clsx("flex max-w-200 flex-col gap-1 p-12")}>
        <p className={clsx("text-xl text-center")}>
          Deze rugzak is modulair, maar ook draagbaar. <br/>
          Het is functioneel, maar ook mooi. <br/>
          Het is stevig, maar ook betaalbaar. <br/>
          Maar boven alles is het super duurzaam.
        </p>
        <p className={clsx("mt-6 text-center max-w-2xl mx-auto")}>
          Door het modulaire ontwerp neem je alleen mee wat je nodig hebt.
          Je past het aan op jouw leven, jouw dag en jouw levensfase.
          Gaat er toch iets kapot? Dan vervang je enkel dat onderdeel. <br/>
          Zo bespaar je geld en verleng je de levensduur van het product.
        </p>
      </div>
    </Section>
  );
};
