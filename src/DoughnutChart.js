// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';

// const DoughnutChart = ({ data }) => {
//   const clusterCores = data.map(cluster => ({
//     name: cluster.cluster_name,
//     cores: cluster.cluster_cores
//   }));

//   const doughnutData = {
//     labels: clusterCores.map(cluster => cluster.name), // Cluster names as labels
//     datasets: [
//       {
//         label: 'Cores Used',
//         data: clusterCores.map(cluster => cluster.cores), // Cores used by each cluster
//         backgroundColor: ['#FF6F61', '#4E73DF', '#1C9A7C', '#FFA500', '#20B2AA'], // Add more colors if needed
//       },
//     ],
//   };

//   return (
//     <div style={{width:"500px"}}>
//       <h4>Cores Used by Clusters</h4>
//       <Doughnut data={doughnutData} />
//     </div>
//   );
// };

// export default DoughnutChart;

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// 🔥 Register required elements
ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const DoughnutChart = ({ data = [] }) => {
  if (!data.length) {
    return <p className="text-red-500 text-center">No cluster data available</p>;
  }

  const clusterCores = data.map((cluster) => ({
    name: cluster.cluster_name,
    cores: cluster.cluster_cores,
  }));

  const doughnutData = {
    // labels: clusterCores.map((cluster) => cluster.name), // Cluster names as labels
    labels: clusterCores.map((_, index) => `Cluster ${index + 1}`),
    datasets: [
      {
        label: "Cores Used",
        data: clusterCores.map((cluster) => cluster.cores), // Cores used by each cluster
        backgroundColor: ["#FF6F61", "#4E73DF", "#1C9A7C", "#FFA500", "#20B2AA"], // Colors
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "400px",height:"400px" }}>
      <div>
        <Doughnut data={doughnutData} />
      </div>
    </div>
  );
};

export default DoughnutChart;
