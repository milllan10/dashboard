import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const HeartbeatChart = ({ data }) => {
  // Extract memory usage from each cluster
  const memoryData = data.map((cluster) => cluster.cluster_memory_mb / 1024); // Convert MB to GB for readability

  // Generate timestamps for X-axis (assuming real-time updates)
  const timestamps = data.map((_, index) => `Cluster ${index + 1}`);

  // Chart Data
  const heartbeatData = {
    labels: timestamps, // Cluster identifiers
    datasets: [
      {
        label: "Cluster Memory (GB)",
        data: memoryData,
        borderColor: "red",
        borderWidth: 2,
        fill: false,
        tension: 0.5, // Smooth curve
        pointRadius: 3, // Small points on the graph
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    scales: {
      x: { display: true },
      y: {
        suggestedMin: Math.min(...memoryData) - 10, // Adjusted scale
        suggestedMax: Math.max(...memoryData) + 10,
        grid: { display: false },
      },
    },
    animation: {
      duration: 2000,
      easing: "linear",
    },
  };

  return (
    <div>
      <Line data={heartbeatData} options={options} />
    </div>
  );
};

export default HeartbeatChart;
