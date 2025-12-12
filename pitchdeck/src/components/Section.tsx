import { clsx } from "clsx";
import { FC, ReactNode } from "react";

export interface SectionProps {
  className?: string;
  children?: ReactNode;
  [x: string]: any;
}

export const Section: FC<SectionProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <section {...rest} className={clsx("min-h-screen w-full", className)}>
      {children}
    </section>
  );
};
