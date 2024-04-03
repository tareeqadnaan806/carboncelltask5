import React, { useEffect, useState } from "react";
import Chart from "chart.js";

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        const data = await response.json();
        const populationData = data.data.map((item) => ({
          year: item.Year,
          population: item.Population,
        }));
        setPopulationData(populationData);
      } catch (error) {
        console.error("Error fetching population data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (populationData.length > 0) {
      const sortedData = populationData.sort((a, b) => a.year - b.year);
      const years = sortedData.map((item) => item.year);
      const populations = sortedData.map((item) => item.population);

      const ctx = document.getElementById("population-chart");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: years,
          datasets: [
            {
              label: "Population",
              data: populations,
              borderColor: "green",
              borderWidth: 3,
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: "Year",
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  if (value >= 1000000) {
                    return (value / 1000000).toFixed(1) + "M";
                  } else if (value >= 1000) {
                    return (value / 1000).toFixed(1) + "K";
                  } else {
                    return value;
                  }
                },
              },
            },
          },
        },
      });
    }
  }, [populationData]);

  return (
    <div className="population-graph ">
      <h2 className="border-b py-2">Population Graph of USA</h2>
      <canvas
        id="population-chart"
        style={{ width: "500px", height: "350px" }}
        className="border-b py-2"
      ></canvas>
      <div className="flex justify-between items-center p-2">
        <div>Get in depth charts in Trade</div>
        <a href="/trade" className="px-3 py-1 rounded bg-green-600">
          Trade
        </a>
      </div>
    </div>
  );
};

export default PopulationGraph;
