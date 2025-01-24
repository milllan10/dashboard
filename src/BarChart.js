import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const BarChart = ({ data }) => {
  const stateCount = data.reduce((acc, cluster) => {
    const state = cluster.state;
    acc[state] = acc[state] ? acc[state] + 1 : 1;
    return acc;
  }, {});

  const barData = {
    labels: Object.keys(stateCount),
    datasets: [
      {
        label: 'Cluster State Count',
        data: Object.values(stateCount),
        backgroundColor: ['#FF5733', '#4CAF50'],
      },
    ],
  };

  return (
    <div>
      <h4>Cluster State Distribution</h4>
      <Bar data={barData} />
    </div>
  );
};

export default BarChart;
