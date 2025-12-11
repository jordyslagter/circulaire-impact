import { clsx } from "clsx";
import { IoChatbubblesOutline, IoPeopleCircleOutline } from "react-icons/io5";
import { Section } from "../Section";

export const Listing = () => {
  return (
    <Section className={clsx("grid grid-cols-2 grid-rows-2 items-center")}>
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
        <p className={clsx("w-[90%] max-w-80 text-center")}>
          Greentom heeft problemen met naamsbekendheid. Het bedrijf heeft het B
          Corp-certificaat behaald maar is nog altijd nauwelijks bekend in
          Nederland.
        </p>
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
        <p className={clsx("w-[90%] max-w-80 text-center")}>
          Het bedrijf heeft zich tot nu toe vooral gefocust op nieuwe ouders.
          Met ons idee om in te zetten op een studentenrugzak zal Greentom met
          een hele nieuwe doelgroep moeten werken.
        </p>
      </div>
    </Section>
  );
};
