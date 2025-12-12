import { useGSAP } from "@gsap/react";
import { clsx } from "clsx";
import { gsap } from "gsap";
import Image from "next/image";
import { FC, useRef } from "react";
import { Section } from "../Section";

interface ProductCardProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  [x: string]: any;
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const { title, description, image, ...rest } = props;

  const container = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          once: true,
        },
      });

      timeline.fromTo(
        container.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0 },
      );
    },
    { scope: container },
  );

  return (
    <div ref={container} className={clsx("h-full w-full p-5")}>
      <article
        {...rest}
        className={clsx(
          "grid h-full w-full grid-cols-2 grid-rows-2 rounded border p-5",
          "content-center items-center justify-center justify-items-center",
          "shadow transition hover:shadow-xl",
        )}
      >
        <Image src={image.src} alt={image.alt} width={140} height={140} />
        <h1 className={clsx("text-xl font-bold")}>{title}</h1>
        <p className={clsx("col-span-2")}>{description}</p>
      </article>
    </div>
  );
};

export const Products: FC = () => {
  return (
    <Section
      className={clsx(
        "grid grid-cols-2 grid-rows-2 content-center items-center",
        "justify-center justify-items-center text-center",
      )}
    >
      <div
        className={clsx(
          "col-span-2 flex h-full w-full flex-col content-center items-center",
          "bg-gtlightgreen justify-center justify-items-center",
        )}
      >
        <h1 className={clsx("text-4xl font-bold")}>Huidige producten</h1>
        <p className={clsx("mt-2 text-xs")}>Greentom (2025)</p>
      </div>
      <ProductCard
        image={{
          src: "https://greentom.com/media/cms/sdd/classic-2017-perspective-grey-blue.png",
          alt: "Stroller",
        }}
        title="Stroller"
        description="Stroller"
      />
      <ProductCard
        image={{
          src: "https://greentom.com/media/catalog/product/cache/249688b60bb56e1686647a2df7a46765/g/t/gtbc1-sage.png",
          alt: "Draagzak",
        }}
        title="Draagzak"
        description="Draagzak"
      />
    </Section>
  );
};
