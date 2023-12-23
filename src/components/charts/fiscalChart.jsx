import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  

export default function FiscalChart() {

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: ' FAAC allocation',
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const data = {
        labels,
        datasets: [
          {
            label: '2023',
            data: [640, 606, 681, 617, 606],
            backgroundColor: '#DD4F05',
          },
          {
            label: '2022',
            data: [600, 200, 581, 417, 605],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
  return <Bar options={options} data={data} />;
}