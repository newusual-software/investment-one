import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js/auto';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export default function MacroEconomicsGpdChart() {
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
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Percentage (%)',
        },
      },
    },
  };

  const labels = ['2023 Q1', '2022 Q2', '2021 Q3', '2020 Q4', '2020 Q5'];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'GDP Growth',
        data: [0, 0, -3.62, -6.1, 1.87], // Values for each quarter
        borderColor: '#DD4F05',
        backgroundColor: 'rgba(255, 227, 212)',
        pointRadius: 5,
        pointHoverRadius: 7,
        pointStyle: 'circle',
        cubicInterpolationMode: 'monotone',
        borderCapStyle: 'round',
      },
    ],
  };

  return <Line options={options} data={data} />;
}
