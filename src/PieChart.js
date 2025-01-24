import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  // Extract cluster names and count the number of drivers
  const clusterDrivers = data.map((cluster) => ({
    name: cluster.cluster_name,
    drivers: cluster.executors.length + 1, // +1 to count the main driver node
  }));

  const pieData = {
    labels: clusterDrivers.map((_, index) => `Cluster ${index + 1}`),
    datasets: [
      {
        label: "Number of Drivers",
        data: clusterDrivers.map((cluster) => cluster.drivers),
        backgroundColor: [
          "#FFB3C1", "#FF7F91", "#FF4C61", "#C70039", "#900C3F", // Shades of red
          "#D4A5A5", "#A64D79", "#73001E", "#FFC300", "#FF5733"  // Soft complementary shades
        ],
        hoverOffset: 8,
      },
    ],
  };

  return (
    <div style={{ width: "400px",height:"400px" }}>
      <Pie data={pieData} />
    </div>
  );
};

export default PieChart;
