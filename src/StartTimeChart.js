import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const StartTimeChart = ({ data }) => {
  // Extract cluster names and start times
  const clusterData = data.map((cluster) => ({
    name: cluster.cluster_name,
    startTime: new Date(cluster.start_time).toLocaleString(), // Convert to readable format
  }));

  // Prepare data for the chart
  const chartData = {
    labels: clusterData.map((_, index) => `Cluster ${index + 1}`), // Cluster names as labels
    datasets: [
      {
        label: "Start Time",
        data: clusterData.map((c) => new Date(c.startTime).getTime()), // Convert back to timestamp for plotting
        borderColor: "#4E73DF",
        backgroundColor: "rgba(78, 115, 223, 0.5)",
        tension: 0.1, // Makes the line smooth
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default StartTimeChart;
