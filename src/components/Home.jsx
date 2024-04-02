import React from "react";
import Header from "./HomeComponents/Header";
import PopulationChart from "./HomeComponents/PopulationChart";
import WalletDoughnutChart from "./HomeComponents/WalletBalance";
import Coins from "./HomeComponents/Coins";
import TweetComponent from "./HomeComponents/TwitterPost";

const Home = () => {
  return (
    <div className="home md:">
      <Header />
      <div className="hero">
        <PopulationChart />
        <WalletDoughnutChart />
        <TweetComponent />
      </div>
      {/* <Coins /> */}
    </div>
  );
};

export default Home;
