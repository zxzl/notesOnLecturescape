import React from 'react';
import ReactDOM from 'react-dom';
import rd3 from 'rd3';
const AreaChart = rd3.AreaChart;

var logData = [
  {
    "name": "Other users data",
    "values": [[0, 2], [749, 2]],
  },
]

export default class RollerCoaster extends React.Component {
  render() {
    return(
    	 <AreaChart
        data={logData}
        width={640}
        height={400}
        xAccessor={(d)=>d[0]}
        yAccessor={(d)=>d[1]}
        domain={{x: [0, 749], y:[0, 4]}}
        yAxisTickCount={0}
      />
    )
  }
}
