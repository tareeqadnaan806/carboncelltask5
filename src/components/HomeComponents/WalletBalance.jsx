import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import MetaMaskIntegration from "./MetaWallet";

const WalletDoughnutChart = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    const data = {
      datasets: [
        {
          data: [300.25, 220.01, 133.86, 45.7],
          backgroundColor: ["#009933", "#00cc00", "#99ff99", "#80bfff"],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };

    const config = {
      type: "doughnut",
      data: data,
    };

    const ctx = chartContainer.current.getContext("2d");
    new Chart(ctx, config);
  }, []);

  return (
    <div className="doughnut-chart-container ">
      <h2 className="border-b py-2 text-center  ">Wallet Balance</h2>
      <canvas ref={chartContainer} />
      <div className="px-10 border-b py-2.5">
        <p className="flex justify-between">
          <span>USDT</span>
          <span> $300.25 </span>
        </p>
        <p className="flex justify-between">
          <span>NBST</span>
          <span> $220.01 </span>
        </p>
        <p className="flex justify-between">
          <span>EFT</span>
          <span> $133.86 </span>
        </p>
        <p className="flex justify-between">
          <span>WET</span>
          <span> $45.7 </span>
        </p>
      </div>
      <div className="flex justify-center items-center h-10 ">
        <div className="px-3 py-1 rounded mt-2 bg-green-600">
          <MetaMaskIntegration />
        </div>
      </div>
    </div>
  );
};

export default WalletDoughnutChart;
