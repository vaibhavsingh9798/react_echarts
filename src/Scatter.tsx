import React from "react";
import ReactEcharts from "echarts-for-react"; 
import scatterData from "./data/scatterData";
const Scatter = () => {
  const  option = {
        xAxis: {},
        yAxis: {},
        series: [
          {
            symbolSize: 20,
            data:  Object.entries(scatterData),
            type: 'scatter'
          }
        ]
      };
    return(
        <>
        <ReactEcharts option={option} />
        </>
    )
}
export default Scatter;