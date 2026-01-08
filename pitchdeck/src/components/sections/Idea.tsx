import { clsx } from "clsx";
import { FC } from "react";
import { Section } from "../Section";

export const Idea: FC = () => {
  return (
    <Section className={clsx("flex flex-col content-center items-center")}>
      <h1 className={clsx("pt-5 text-4xl")}>Het idee</h1>
    </Section>
  );
};
