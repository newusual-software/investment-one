import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js/auto';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export default function IEFXChart() {
  const smooth = true; 

  const options = {
    legend: {
      display: true,
      labels: {
        usePointStyle: false,
        generateLabels: function () {
          return [{
            text: 'IEFX',
            fillStyle: 'red',
            pointStyle: 'line',
            strokeStyle: 'rgba(249, 115, 12, 1)',
          }];
        },
      },
    },
    scales: {
      x: { ticks: { autoSkip: true, maxTicksLimit: 7, padding: 10, minRotation: 0, maxRotation: 0 } },
    },
    elements: {
      line: {
        tension: smooth ? 0.5 : 0,
      },
    },
  };

  // Provided x-axis and y-axis data
  const xAxis = [
    '14/10/2021', '14/10/2021', '15/10/2021', '15/10/2021', '15/10/2021',
    '18/10/2021', '18/10/2021', '18/10/2021', '19/10/2021', '19/10/2021',
    '19/10/2021', '20/10/2021', '20/10/2021', '20/10/2021', '21/10/2021',
    '21/10/2021', '21/10/2021', '25/10/2021', '25/10/2021', '25/10/2021',
  ];

  const yAxis = [
    '23695.9', '23695.9', '23950.83', '23950.83', '23950.83',
    '24045.4', '24045.4', '24045.4', '24354.25', '24354.25',
    '24354.25', '24143.37', '24143.37', '24143.37', '23809.31',
    '23809.31', '23809.31', '23089.86', '23089.86', '23089.86',
  ];

  // Create a map to store unique x-axis labels and corresponding y-axis values

  // Convert the map into an array for Chart.js data format
  const data = {
    labels: xAxis,
    datasets:  [{
        label: 'IEFX',
        data: yAxis,
        backgroundColor: ['rgba(0,0,0,0)'],
        borderColor: ['rgba(249, 115, 12, 1)'],
        borderWidth: 1,
        pointRadius:3,
        pointHitRadius:3,
        pointBorderColor:'rgba(249, 115, 12, 1)',
        pointBackgroundColor:'rgba(249, 115, 12, 1)'
    }],
  };

  return <Line options={options} data={data} />;
}
