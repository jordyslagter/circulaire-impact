import { clsx } from "clsx";
import { FC } from "react";
import { TbBulbFilled } from "react-icons/tb";
import { Section } from "../Section";

export const Idea: FC = () => {
  return (
    <Section
      className={clsx(
        "flex flex-col content-center items-center justify-center",
        "justify-items-center",
      )}
    >
      <h1 className={clsx("text-4xl")}>Het idee</h1>

      <TbBulbFilled size={200} className={clsx("text-gtgreen mt-12")} />

      <div className={clsx("flex max-w-200 flex-col gap-2 p-12")}>
        <p>
          Aan de hand van ons onderzoek zagen we dat gebruikers sterk
          uiteenlopende voorkeuren hebben in hoe zij hun rugzak willen indelen
          (Bruls & Slagter, 2026). De één wil extra vakken voor
          studie-materiaal, de ander juist een veilige plek voor elektronica.
          Die variatie maakte zichtbaar dat een vaste indeling eigenlijk niemand
          écht goed bedient. Vanuit dat inzicht ontstond het idee voor een
          modulaire rugzak: een basisframe waarbij gebruikers zelf zowel binnen-
          als buitenmodules kunnen toevoegen, verplaatsen of verwijderen. Het
          werkt vergelijkbaar met een defensierugzak, maar dan uitgebreid naar
          de binnenkant zodat de indeling volledig personaliseerbaar wordt.
        </p>
        <p>
          Deze aanpak sluit aan bij de doelgroep omdat de tas zich kan aanpassen
          aan iemands veranderende dag en levensstijl. De rugzak groeit mee met
          de gebruiker in plaats van andersom.
        </p>
        <p>
          De modulariteit draagt bij aan circulariteit doordat losse onderdelen
          kunnen worden vervangen of gerepareerd, in plaats van dat de volledige
          rugzak moet worden afgedankt. Modules kunnen worden hergebruikt of
          doorgegeven, waardoor materialen langer in de keten blijven en de
          totale milieu-impact wordt verlaagd. Hierdoor ontstaat een flexibel én
          duurzaam product dat met minimale verspilling maximaal bruikbaar
          blijft.
        </p>
      </div>
    </Section>
  );
};
