import React, { Suspense } from "react";
import Header from "./Header/Header";
import OurChef from "./OurChef/OurChef";
import Statistics from "./Statistics/Statistics";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <OurChef></OurChef>
      <Statistics></Statistics>
    </div>
  );
};

export default Home;
