import React from 'react';
import ReactDOM from 'react-dom';
var LineChart = require('react-chartjs').Line;

var chartData = {
    labels: [],
    datasets: [
        {
          strokeColor: "rgba(51, 103, 214, 0)",
          fillColor: "rgba(51, 103, 214, 0.2)",
          data: [],
        },
        {
          strokeColor: "rgba(79, 159, 163, 0)",
          fillColor: "rgba(209, 61, 55, 0.2)",
          data: [],
        }
    ]
};

var chartOptions = {
  // global chart.js options
  animation: false,
  showScale: false,
  datasetFill : true,
  showTooltips: false,
  scaleOverride: true,
  scaleSteps: 1,
  scaleStepWidth: 2,
  scaleStartValue: 0,
  // line chart options
  bezierCurve : true,
  pointDot: false,
}

export default class RollerCoaster extends React.Component {
  constructor() {
    super()
  }

  render() {
    const xs = chartData.labels
    const ys_data = chartData.datasets[0].data
    const ys_user = chartData.datasets[1].data
    for (let i = 0; i < 749; i++) {
      xs.push(i);
      ys_data.push(1.2);
      ys_user.push(0.6)
    }
    for (let i = 0; i < 40; i++) {
      let x = Math.floor(Math.random() * 740)
      let y = 1.2 + Math.random() * 0.8
      ys_data[x+1] = y
      ys_data[x] = y
    }
    return(
    	 <LineChart data={chartData} options={chartOptions} width="640" height="50"/>
    )
  }
}
