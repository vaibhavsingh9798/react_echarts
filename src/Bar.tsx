import React from "react";
import ReactEcharts from "echarts-for-react"; 
import barData from "./data/barData";

const Bar = () =>{

   const option = {
    xAxis: {
      type: 'category',
      data: Object.keys(barData)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: Object.values(barData),
        type: 'bar'
      }
    ]
  }; 
    return(
        <>
        <ReactEcharts option={option} />
        </>
    )
}

export default Bar;