import { clsx } from "clsx";
import { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
  [x: string]: any;
}

export const Section: FC<Props> = (props) => {
  const { className, children } = props;

  return (
    <section {...props} className={clsx("min-h-screen w-full", className)}>
      {children}
    </section>
  );
};
