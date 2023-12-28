import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function InflationChart() {
  const smooth = true; 
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Percentage (%)",
        },
      },
      x: { ticks: { autoSkip: true, maxTicksLimit: 7, padding: 10, minRotation: 0, maxRotation: 0 } },

    },
    elements: {
      line: {
        tension: smooth ? 0.5 : 0,
      },
    },
  };

  const labels = [
    "Feb/2021",
    "Feb/2021",
    "Mar/2021",
    "Mar/2021",
    "Apr/2021",
    "Apr/2021",
    "May/2021",
    "May/2021",
    "Jun/2021",
    "Jun/2021",
    "Jul/2021",
    "Jul/2021",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Headline inflation (year on year",
        data: [
          17.33, 17.33, 18.17, 18.17, 18.17, 18.12, 18.12, 17.93, 17.93, 17.75,
          17.75, 17.75, 17.38, 17.39,
        ], // Values for each quarter
        backgroundColor: "rgba(249, 115, 12, .2)",
        borderColor: "rgba(249, 115, 12, 1)",
        borderWidth: 1,
        pointRadius: 3,
        pointHitRadius: 3,
        pointBorderColor: "rgba(249, 115, 12, 1)",
        pointBackgroundColor: "rgba(249, 115, 12, 1)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
