import { clsx } from "clsx";
import { BsStars } from "react-icons/bs";
import { Section } from "../Section";
import Image from "next/image";

export const Future = () => {
  return (
    <Section
      className={clsx(
        "flex flex-col content-center items-center justify-center",
        "justify-items-center",
      )}
    >
      <h1 className={clsx("text-4xl")}>En dan...</h1>

      <BsStars size={200} className={clsx("text-gtgreen mt-12")} />

      <div className={clsx("flex max-w-200 flex-col gap-5 p-12")}>
        <p>
          Stel je voor dat een rugzak geen eindpunt meer is, maar een beginpunt:
          een flexibel, modulair systeem dat met elke gebruiker meebeweegt en
          nooit echt ‘af’ is. Een product dat niet gekozen wordt om hoe het
          eruitziet bij aankoop, maar om hoe het zich blijft aanpassen in de
          jaren daarna.
        </p>

        <p className={clsx("italic")}>
          Een modulair ontwerp maakt één rugzak geschikt voor vele levens, en
          dat is precies waar circulariteit begint.
        </p>
      </div>
      <div className="flex flex-row justify-center content-center items-center">
        <Image src={"https://greentom.com/media/greentom_text_logo.png"} alt={"Greentom"} width={140} height={140} />
        <Image src={"https://bibliotheek.zuyd.nl/mwork/images/zuydlogo.png"} alt={"Zuyd"} width={140} height={140} />
      </div>
    </Section>
  );
};
