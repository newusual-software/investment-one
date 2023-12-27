import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js/auto';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, 'chartjs-adapter-date-fns', Title, Tooltip, Filler, Legend);

export default function NSEASIChart() {
  const smooth = true; // Set to true for smooth tension, false for no tension
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
        x: {
            type: 'time',
            time: {
              parser: 'dd/MM/yyyy',
              unit: 'day',
              unitStepSize: 1,
              displayFormats: {
                day: 'dd/MM/yyyy',
              },
            },
            title: {
              display: true,
              text: 'Date',
            },
          },
    },
    elements: {
      line: {
        tension: smooth ? 0.5 : 0,
      },
    },
  };

  // Provided x-axis and y-axis data
  const xAxis = [
    "14/10/2021", "14/10/2021", "15/10/2021", "15/10/2021", "15/10/2021",
    "18/10/2021", "18/10/2021", "18/10/2021", "19/10/2021", "19/10/2021",
    "19/10/2021", "20/10/2021", "20/10/2021", "20/10/2021", "21/10/2021",
    "21/10/2021", "21/10/2021", "25/10/2021", "25/10/2021", "25/10/2021"
  ];

  const yAxis = [
    "23695.9", "23695.9", "23950.83", "23950.83", "23950.83",
    "24045.4", "24045.4", "24045.4", "24354.25", "24354.25",
    "24354.25", "24143.37", "24143.37", "24143.37", "23809.31",
    "23809.31", "23809.31", "23089.86", "23089.86", "23089.86"
  ];


  // Convert the map into an array for Chart.js data format
  const data = {
    labels: xAxis,
    datasets: [
      {
        fill: true,
        label: 'NSE-ASI',
        data: yAxis,
        borderColor: '#DD4F05',
        backgroundColor: 'rgba(255, 227, 212, 0.5)',
        pointRadius: 5,
        pointHoverRadius: 7,
        pointStyle: 'circle',
      },
    ],
  };

  return <Line options={options} data={data} />;
}
