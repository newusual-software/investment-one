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
  
  export function TBills() {
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
        text: 'Treasury Bills'
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
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10.8, 10.8, 10.8, 10.8, 10.8, 10.8, 10.8, 10.8,
    ];
    const y3 = [
      11.36, 11.36, 11.7, 11.7, 11.7, 11.7, 11.7, 11.7, 11.7, 11.7, 11.7, 11.7,
      11.64, 11.64, 11.64, 11.64, 11.64, 11.74, 11.74, 11.74,
    ];
    const y4 = [
      12.36, 12.36, 12.7, 12.7, 12.7, 12.7, 12.7, 12.7, 12.7, 12.7, 12.7, 12.7,
      12.64, 12.64, 12.64, 12.64, 12.64, 12.74, 12.74, 12.74,
    ];
    const data = {
      labels,
      datasets: [{
        label: 'MPR',
        data: y1,
        backgroundColor: ['rgba(0,0,0,0)'],
        borderColor: ['rgb(26, 132, 5)'],
        borderWidth: 1,
        pointRadius:3,
        pointHitRadius:3,
        pointBorderColor:'rgb(26, 132, 5)',
        pointBackgroundColor:'rgb(26, 132, 5)'
    },{
        label: '91 Days',
        data: y2,
        backgroundColor: ['rgba(0,0,0,0)'],
        borderColor: ['rgba(249, 115, 12, 1)'],
        borderWidth: 1,
        pointRadius:3,
        pointHitRadius:3,
        pointBorderColor:'rgba(249, 115, 12, 1)',
        pointBackgroundColor:'rgba(249, 115, 12, 1)'
    },{
        label: '182 Days',
        data: y3,
        backgroundColor: ['rgba(0,0,0,0)'],
        borderColor: ['rgba(71, 97, 140, 1)'],
        borderWidth: 1,
        pointRadius:3,
        pointHitRadius:3,
        pointBorderColor:'rgba(71, 97, 140, 1)',
        pointBackgroundColor:'rgba(71, 97, 140, 1)'
    },{
        label: '364 Days',
        data: y4,
        backgroundColor: ['rgba(0,0,0,0)'],
        borderColor: ['rgba(229, 36, 65, 1)'],
        borderWidth: 1,
        pointRadius:3,
        pointHitRadius:3,
        pointBorderColor:'rgba(229, 36, 65, 1)',
        pointBackgroundColor:'rgba(229, 36, 65, 1)'
    }]
    };
    return (
      <div className="my-10">
        <Line options={options} data={data} />
      </div>
    );
  }
  