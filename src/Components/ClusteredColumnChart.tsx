// import React, { useState } from "react";
// import { Bar, ChartOptions } from "react-chartjs-2";
// import { DeepPartial } from "utility-types";

// const ClusteredColumnChart: React.FC = () => {
//   const [chartData, setChartData] = useState({
//     labels: ["January", "February", "March", "April", "May"],
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: [45, 65, 80, 81, 56],
//         backgroundColor: "rgba(102, 183, 241, 1)",
//         borderColor: "black",
//         borderWidth: 1,
//       },
//       {
//         label: "Dataset 2",
//         data: [30, 40, 50, 61, 36],
//         backgroundColor: "rgba(255, 99, 132, 1)",
//         borderColor: "black",
//         borderWidth: 1,
//       },
//     ],
//   });

//   const chartOptions: DeepPartial<ChartOptions<"bar">> = {
//     indexAxis: 'y', // Use 'y' for vertical bar chart, 'x' for horizontal
//     scales: {
//       y: {
//         stacked: true,
//       },
//     },
//   };

//   return (
//     <div className="App">
//       <div>
//         <Bar data={chartData} options={chartOptions} />
//       </div>
//     </div>
//   );
// };

// export default ClusteredColumnChart;


import React from 'react'

const ClusteredColumnChart = () => {
  return (
    <div>ClusteredColumnChart</div>
  )
}

export default ClusteredColumnChart