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
import { useEffect, useState } from "react";
import { client } from "../../services/sanity/sanityClient";

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

export default function MacroEconomicsGpdChart() {
  const [graphData, setGraphData] = useState({})
  useEffect(() => {
    // Define the query to fetch the chart data
    const query = `*[_type == "macroEconomicsGpdChart"]`;

    // Execute the query
    client.fetch(query)
      .then(data => {
        // Set the fetched data to the state
        setGraphData(data[0]);
      })
      .catch(error => console.error(error));
  }, []);
  const smooth = graphData?.smooth;
  const options = {
    responsive: graphData?.options?.responsive,
    plugins: {
      legend: {
        position: graphData?.options?.plugins?.legend?.position,
      },
      title: {
        display: graphData?.options?.plugins?.title?.display,
        text: graphData?.options?.plugins?.title?.text,
      },
    },
    scales: {
      y: {
        beginAtZero: graphData?.options?.scales?.y?.beginAtZero,
        title: {
          display: graphData?.options?.scales?.y?.title?.display,
          text: graphData?.options?.scales?.y?.title?.text,
        },
      },
    },
    elements: {
      line: {
        tension: smooth ? graphData?.options?.elements?.line?.tension : 0,
      },
    },
  };

  const labels = graphData?.labels;

  const data = {
    labels,
    datasets: [
      {
        fill: graphData?.datasets?.fill,
        label: graphData?.datasets?.label,
        data: graphData?.datasets?.data,
        backgroundColor: graphData?.datasets?.backgroundColor,
        borderColor: graphData?.datasets?.borderColor,
        borderWidth: graphData?.datasets?.borderWidth,
        pointRadius: graphData?.datasets?.pointRadius,
        pointHitRadius: graphData?.datasets?.pointHitRadius,
        pointBorderColor: graphData?.datasets?.pointBorderColor,
        pointBackgroundColor: graphData?.datasets?.pointBackgroundColor,
      },
    ],
  };

  return <Line options={options} data={data} />;
}
