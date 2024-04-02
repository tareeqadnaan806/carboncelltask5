import React, { useEffect, useState } from "react";
import Card from "./Card";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const url = "https://coins4.free.beeceptor.com/coins4";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);
  return (
    <div className="px-2 mt-4">
      <div className="flex justify-between">
        <div className="text-2xl">Assets</div>
        <div>Today</div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center items-center">
          {coins.map((coin) => {
            return (
              <Card
                price={coin.price}
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                incrVal={coin.incrValue}
                bgcolor={coin.bgcolor}
                textcolor={coin.textcolor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Coins;
