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

export default function MovementInReserveChart() {
  const smooth = true;

  const options = {
    legend: {
      display: true,
      labels: {
        usePointStyle: false,
        generateLabels: function () {
          return [
            {
              text: "movement-in-reserve",
              fillStyle: "red",
              pointStyle: "line",
              strokeStyle: "rgba(249, 115, 12, 1)",
            },
          ];
        },
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 7,
          padding: 10,
          minRotation: 0,
          maxRotation: 0,
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
    "14/10/2021",
    "14/10/2021",
    "15/10/2021",
    "15/10/2021",
    "15/10/2021",
    "18/10/2021",
    "18/10/2021",
    "18/10/2021",
    "19/10/2021",
    "19/10/2021",
    "19/10/2021",
    "20/10/2021",
    "20/10/2021",
    "20/10/2021",
    "21/10/2021",
    "21/10/2021",
    "21/10/2021",
    "25/10/2021",
    "25/10/2021",
    "25/10/2021",
  ];

  const y1 = [
    13.31, 13.31, 13.31, 13.31, 13.31, 13.31, 13.31, 13.31, 13.31, 13.31, 13.31,
    13.31, 13.25, 13.25, 13.25, 13.25, 13.25,13.25, 13.25, 13.25, 13.25, 13.25, 13.25, 13.25, 13.25, 13.25, 13.25,13.38, 13.38, 13.38,13.38, 13.38, 13.38,
  ];
  const y2 = [
    13.1, 13.1, 13.1, 13.1, 13.1, 13.1, 13.1, 13.1, 13.1, 13.1, 13.1, 13.1,
    13.02, 13.02, 13.02, 13.02, 13.02, 13.02, 13.02, 13.02,
  ];

  const data = {
    labels: xAxis,
    datasets: [
      {
        label: "Gross",
        data: y1,
        backgroundColor: ["rgba(0,0,0,0)"],
        borderColor: ["rgb(224, 8, 59)"],
        borderWidth: 1,
        pointRadius: 3,
        pointHitRadius: 3,
        pointBorderColor: "rgb(224, 8, 59)",
        pointBackgroundColor: "rgb(224, 8, 59)",
      },
      {
        label: "Liquid",
        data: y2,
        backgroundColor: ["rgba(0,0,0,0)"],
        borderColor: ["rgba(71, 97, 140, 1)"],
        borderWidth: 1,
        pointRadius: 3,
        pointHitRadius: 3,
        pointBorderColor: "rgba(71, 97, 140, 1)",
        pointBackgroundColor: "rgba(71, 97, 140, 1)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
