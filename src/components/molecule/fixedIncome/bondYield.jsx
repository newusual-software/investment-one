import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function BondYield() {
  const smooth = true; // Set to true for smooth tension, false for no tension
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    title: {
      display: true,
      text: "Bond Yield",
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 7,
          padding: 20,
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

  const labels = [
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
    13.31, 13.25, 13.25, 13.25, 13.25, 13.25, 13.38, 13.38, 13.38,
  ];
  const y2 = [
    13.1, 13.1, 13.1, 13.1, 13.1, 13.1, 13.1, 13.1, 13.1, 13.1, 13.1, 13.1,
    13.02, 13.02, 13.02, 13.02, 13.02, 13.02, 13.02, 13.02,
  ];
  const y3 = [
    12.36, 12.36, 12.7, 12.7, 12.7, 12.7, 12.7, 12.7, 12.7, 12.7, 12.7, 12.7,
    12.64, 12.64, 12.64, 12.64, 12.64, 12.74, 12.74, 12.74,
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "5 Year",
        data: y1,
        backgroundColor: ["rgba(0,0,0,0)"],
        borderColor: ["rgba(249, 115, 12, 1)"],
        borderWidth: 1,
        pointRadius: 3,
        pointHitRadius: 3,
        pointBorderColor: "rgba(249, 115, 12, 1)",
        pointBackgroundColor: "rgba(249, 115, 12, 1)",
      },
      {
        label: "7 Year",
        data: y2,
        backgroundColor: ["rgba(0,0,0,0)"],
        borderColor: ["rgba(71, 97, 140, 1)"],
        borderWidth: 1,
        pointRadius: 3,
        pointHitRadius: 3,
        pointBorderColor: "rgba(71, 97, 140, 1)",
        pointBackgroundColor: "rgba(71, 97, 140, 1)",
      },
      {
        label: "10 Year",
        data: y3,
        backgroundColor: ["rgba(0,0,0,0)"],
        borderColor: ["rgba(229, 36, 65, 1)"],
        borderWidth: 1,
        pointRadius: 3,
        pointHitRadius: 3,
        pointBorderColor: "rgba(229, 36, 65, 1)",
        pointBackgroundColor: "rgba(229, 36, 65, 1)",
      },
    ],
  };
  return (
    <div className="my-10">
      <Line options={options} data={data} />
    </div>
  );
}
