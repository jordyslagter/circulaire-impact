import { clsx } from "clsx";
import { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

export const Section: FC<Props> = ({ className, children }) => {
  return (
    <section className={clsx("min-h-screen w-full", className)}>
      {children}
    </section>
  );
};
