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

export default function InflationChart() {
  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    // Define the query to fetch the chart data
    const query = `*[_type == "inflationChart"]`;

    // Execute the query
    client.fetch(query)
      .then(data => {
        // Set the fetched data to the state
        setGraphData(data[0]);
      })
      .catch(error => console.error(error));
  }, []);
  console.log(graphData)
  const smooth = graphData?.smooth; 
  const options = {
    responsive: graphData?.options?.responsive,
    plugins: graphData?.options?.plugins,
    scales: graphData?.options?.scales,
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
      graphData?.datasets
    ],
  };

  return <Line options={options} data={data} />;
}
