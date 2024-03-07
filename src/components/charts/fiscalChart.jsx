import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { client } from '../../services/sanity/sanityClient';
  
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function FiscalChart() {
  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    // Define the query to fetch the chart data
    const query = `*[_type == "fiscalChart"]`;

    // Execute the query
    client.fetch(query)
      .then(data => {
        // Set the fetched data to the state
        setGraphData(data[0]);
      })
      .catch(error => console.error(error));
  }, []);

  const options = graphData.options;
  const labels = graphData?.labels;

  let data = {
    labels,
    datasets: [],
  };

  if (graphData.datasets) {
    data.datasets = graphData.datasets.map(item => ({
      label: item.label,
      data: item.data,
      backgroundColor: item.backgroundColor,
    }));
  }

  return <Bar options={options} data={data} />;
}
