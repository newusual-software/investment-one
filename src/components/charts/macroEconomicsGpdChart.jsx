import CanvasJSReact from '@canvasjs/react-charts';

export default function MacroEconomicsGpdChart() {
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const options = {
    theme: "light1",
    animationEnabled: true,

    axisY: {
      title: "Percentage(%)",
      minimum: -7,
      maximum: 2,
      interval: 1,
      fillOpacity: 0,
    },
    axisX: {
      valueFormatString: "YYYY",
      minimum: new Date(2020, 0),
      maximum: new Date(2021, 0),
    },
    data: [
      {
        type: "splineArea",
        yValueFormatString: "#,##0.## Million",
        color: "rgba(255,0,0,0.7)",
        dataPoints: [
          { x: new Date(2021, 0), y: 0 },
          { x: new Date(2020, 4), y: 0 },
          { x: new Date(2020, 3), y: -3.62 },
          { x: new Date(2020, 2), y: -6.1 },
          { x: new Date(2020, 0), y: 1.87 },
        ]
      },
    ]
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}
