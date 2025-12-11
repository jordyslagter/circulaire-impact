import Head from "next/head";
import { FC } from "react";
import { Backpack } from "../components/sections/Backpack";
import { Landing } from "../components/sections/Landing";
import { Listing } from "../components/sections/Listing";

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
    </>
  );
};

export default Home;
