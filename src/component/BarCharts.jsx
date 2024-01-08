import React from 'react'
import  { BarChart,XAxis,YAxis,Bar, CartesianGrid,Tooltip,Legend}  from 'recharts'


export default function BarCharts({data}) {
 
    return (
    
    <>
    <div className='flex  justify-center items-center text-center pt-10'>
    
     <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="javascript" fill="green" />
      <Bar dataKey="python" fill="orange" />
      <Bar dataKey="java" fill="red" />
    </BarChart>
        
    
    
    
    
    </div>  
    </>
  )
}
