// import React from 'react';
// import PieChart from './PieChart';
// import BarChart from './BarChart';
// import WorkerBarChart from './WorkerBarChart';
// import DoughnutChart from './DoughnutChart';
// import HeartbeatChart from './HeartbeatChart';
// import sampleData from './clusterData';
// const App = () => {
//   return (
//     <div>
//       <h1 className='mt-10 p-5'>Cluster Analytics Dashboard</h1>
//       <div className="flex grid-cols-2 items-start mt-10 justify-around text-center h-full">
//         <div>
//           <WorkerBarChart data={sampleData} />
//         </div>
//         <div>
//           <DoughnutChart data={sampleData} />
//         </div>
//         <div>
//           <HeartbeatChart data={sampleData}/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import WorkerBarChart from './WorkerBarChart';
import DoughnutChart from './DoughnutChart';
import HeartbeatChart from './HeartbeatChart';
import sampleData from './clusterData';
import PieChart from './PieChart';
import StartTimeChart from './StartTimeChart'
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-0 lg:p-10 md:p-0">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">Cluster Analytics Dashboard 🚀</h1>
      <div className="grid grid-cols-1 gap-2">
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-2'>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Cores Used by Clusters</h2>
            <div className='flex justify-center'>
              <DoughnutChart data={sampleData} />
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Cluster Driver Distribution</h2>
            <div className='flex justify-center'>
              <PieChart data={sampleData} />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1  justify-between gap-3'>
          {/* <div className='flex gap-2'> */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Cluster Driver Distribution</h2>
              <StartTimeChart data={sampleData} />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Worker Distribution</h2>
              <WorkerBarChart data={sampleData} />
            </div>
          {/* </div> */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Cluster Memory Usage</h2>
              <HeartbeatChart data={sampleData} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;
