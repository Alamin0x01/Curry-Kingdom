import React, { Suspense } from "react";
import Header from "./Header/Header";
import OurChef from "./OurChef/OurChef";
import Statistics from "./Statistics/Statistics";
import Feedback from "./Feedback/Feedback";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <OurChef></OurChef>
      <Statistics></Statistics>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;
