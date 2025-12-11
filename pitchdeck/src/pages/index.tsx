import { FC } from "react";
import { Backpack } from "../components/sections/Backpack";
import { Landing } from "../components/sections/Landing";
import { Listing } from "../components/sections/Listing";

const Home: FC = () => {
  return (
    <>
      <Landing />
      <Listing />
      <Backpack />
    </>
  );
};

export default Home;
