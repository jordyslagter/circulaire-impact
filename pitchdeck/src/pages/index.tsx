import Head from "next/head";
import { FC } from "react";
import { Backpack } from "../components/sections/Backpack";
import { Idea } from "../components/sections/Idea";
import { Impact } from "../components/sections/Impact";
import { Landing } from "../components/sections/Landing";
import { Listing } from "../components/sections/Listing";
import { Products } from "../components/sections/Products";
import { Uitdaging } from "../components/sections/Uitdaging";

//TODO: Logos toevoegen aan de landing.
//TODO: Add section about existing greentom products
//TODO: Hoe ons idee van een rugzak bij kan dragen aan een circulaire economie.

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Greentom Pitchdeck</title>
      </Head>
      <Landing />
      <Listing />
      <Backpack />
      <Products />
      <Uitdaging />
      <Idea />
      <Impact />
    </>
  );
};

export default Home;
