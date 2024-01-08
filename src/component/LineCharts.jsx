import React from 'react'
import  { LineChart,XAxis,YAxis,Line, CartesianGrid,Tooltip,Legend}  from 'recharts'

// const data = [
//   { year: 2017, javascript: 70, python: 30, java: 20 },
//   { year: 2018, javascript: 75, python: 35, java: 25 },
//   { year: 2019, javascript: 80, python: 40, java: 30 },
//   { year: 2020, javascript: 85, python: 45, java: 35 },
//   { year: 2021, javascript: 90, python: 50, java: 40 },
//   { year: 2022, javascript: 95, python: 55, java: 45 },
//   { year: 2023, javascript: 100, python: 60, java: 50 },
// ];



export default function LineCharts({data}) {
  return (

    <>
    <div >
   
    <LineChart data={data}  width={600} height={300}>
        <CartesianGrid stroke='#eee' strokeDasharray='3 3'/>

        <XAxis dataKey='year'/>
        <YAxis/>
        <Tooltip/>
<Legend/>
        <Line type="monotone" dataKey="javascript" stroke="green" />
      <Line type="monotone" dataKey="python" stroke="orange" />
      <Line type="monotone" dataKey="java" stroke="red" />



       



    </LineChart >
    </div>



   
    
    
    </>
  )
}
