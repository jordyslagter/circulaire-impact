import { clsx } from "clsx";
import { TbSeedingFilled } from "react-icons/tb";
import { Section } from "../Section";

export const Impact = () => {
  return (
    <Section
      className={clsx(
        "flex flex-col content-center items-center justify-center",
        "h-[150vh] justify-items-center",
      )}
    >
      <h1 className={clsx("text-4xl")}>Wat levert het op?</h1>

      <TbSeedingFilled size={200} className={clsx("text-gtgreen mt-12")} />

      <div className={clsx("flex max-w-200 flex-col gap-5 p-12")}>
        <p>
          Stel je voor dat een rugzak geen wegwerpproduct meer is, maar een
          systeem dat zich voortdurend aanpast aan de gebruiker. Door de
          modulair opgebouwde Greentom-rugzak verandert het gebruiksgedrag:
          mensen vervangen alleen wat écht nodig is, delen modules met anderen
          en houden één tas jarenlang bruikbaar.
        </p>
        <p>
          Sociaal gezien ontstaat er meer gebruikersgemak en toegankelijkheid:
          iedereen kan de rugzak aanpassen aan eigen activiteiten, waardoor één
          product meerdere levensstijlen ondersteunt. Ecologisch worden
          grondstoffen aanzienlijk langer gebruikt, omdat afzonderlijke modules
          herbruikbaar, verwisselbaar en repareerbaar zijn. Dit verlaagt de
          afvalstroom en vermindert de vraag naar nieuwe materialen.
        </p>
        <p>
          Economisch levert het een schaalbaar model op: Greentom kan modules
          apart aanbieden, wat nieuwe omzetstromen creëert en tegelijkertijd de
          levensduur van het hoofdproduct verlengt.
        </p>
        <ul>
          <p className={clsx("font-bold")}>Meetbare ambities</p>
          <li>
            Verlenging van de productlevensduur met minimaal 50% door
            vervangbare modules.
          </li>
          <li>
            Reductie van materiaalafval per gebruiker met naar verwachting
            30–40%.
          </li>
          <li>
            Introductie van een circulair modulesysteem dat binnen twee jaar
            volledig herbruikbaar en vervangbaar is.
          </li>
        </ul>
        <ul>
          <p className={clsx("font-bold")}>Eerste stappenplan</p>
          <li>
            Prototype ontwikkelen met drie kernmodules (binnenvak, tech-module,
            buitenpouch).
          </li>
          <li>
            Gebruikerstest uitvoeren met focus op duurzaamheid, comfort en
            praktische inzetbaarheid.
          </li>
          <li>
            Analyse van productiepartners en materialen voor circulaire
            schaalbaarheid.
          </li>
        </ul>
      </div>
    </Section>
  );
};
