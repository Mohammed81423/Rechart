import React from 'react'
import  { AreaChart,XAxis,YAxis,Area, CartesianGrid,Tooltip,Legend}  from 'recharts'



export default function AreaCharts({data}) {
 
  return (
    
   <>
   <div className='flex  justify-end items-end text-center m-10'>
   <AreaChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="javascript"  fill="green" />
      <Area type="monotone" dataKey="python"   fill="orange" />
      <Area type="monotone" dataKey="java"   fill="red" />
    </AreaChart>





   </div>
   
   
   </>
  )
}
