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
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { client } from "../../../services/sanity/sanityClient";

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
  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    // Define the query to fetch the chart data
    const query = `*[_type == "bondYeild"]`;

    // Execute the query
    client.fetch(query)
      .then(data => {
        // Set the fetched data to the state
        setGraphData(data[0]);
      })
      .catch(error => console.error(error));
  }, []);
  const smooth = true;
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

  const labels = graphData?.labels

  let data = {
    labels,
    datasets: [],
  };

  if (graphData.datasets) {
    data.datasets = graphData.datasets.map(item => ({
      label: item?.label,
      data: item?.data,
      backgroundColor: item?.backgroundColor,
      borderColor: item?.borderColor,
      borderWidth: item?.borderWidth,
      pointRadius: item?.pointRadius,
      pointHitRadius: item?.pointHitRadius,
      pointBorderColor: item?.pointBorderColor,
      pointBackgroundColor: item?.pointBackgroundColor,
    }));
  }
  return (
    <div className="my-10">
      <Line options={options} data={data} />
    </div>
  );
}
