// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const WorkerBarChart = ({ data }) => {
//   const workersData = data.map(cluster => ({
//     maxWorkers: cluster.autoscale.max_workers,
//     minWorkers: cluster.autoscale.min_workers,
//   }));

//   const barData = {
//     labels: workersData.map((_, index) => `Cluster ${index + 1}`),
//     datasets: [
//       {
//         label: 'Max Workers',
//         data: workersData.map(workers => workers.maxWorkers),
//         backgroundColor: '#4CAF50',
//       },
//       {
//         label: 'Min Workers',
//         data: workersData.map(workers => workers.minWorkers),
//         backgroundColor: '#FF9800',
//       },
//     ],
//   };

//   return (
//     <div style={{width:"500px"}}>
//       <h4>Worker Distribution</h4>
//       <Bar data={barData} />
//     </div>
//   );
// };

// export default WorkerBarChart;

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// 🔥 Register the required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const WorkerBarChart = ({ data = [] }) => {
  if (!data.length) {
    return <p className="text-red-500">No worker data available</p>;
  }

  const workersData = data.map((cluster) => ({
    maxWorkers: cluster.autoscale.max_workers,
    minWorkers: cluster.autoscale.min_workers,
  }));

  const barData = {
    labels: workersData.map((_, index) => `Cluster ${index + 1}`),
    // labels: data.map((cluster, index) => cluster.cluster_name),
    datasets: [
      {
        label: "Max Workers",
        data: workersData.map((workers) => workers.maxWorkers),
        backgroundColor: "#4CAF50",
      },
      {
        label: "Min Workers",
        data: workersData.map((workers) => workers.minWorkers),
        backgroundColor: "#FF9800",
      },
    ],
  };

  return (
    <div>
      <Bar data={barData} />
    </div>
  );
};

export default WorkerBarChart;
