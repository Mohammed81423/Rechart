import './App.css'
import AreaCharts from './component/AreaCharts'
import BarCharts from './component/BarCharts'
import LineCharts from './component/LineCharts'
const data = [
  { year: 2017, javascript: 70, python: 30, java: 20 },
  { year: 2018, javascript: 75, python: 35, java: 25 },
  { year: 2019, javascript: 80, python: 40, java: 30 },
  { year: 2020, javascript: 85, python: 45, java: 35 },
  { year: 2021, javascript: 90, python: 50, java: 40 },
  { year: 2022, javascript: 95, python: 55, java: 45 },
  { year: 2023, javascript: 100, python: 60, java: 50 },
];


function App() {
  

  return (
    <>
    <div>
      <h1 className='text-center text-2xl pb-7 '>Develop 3 charts using rechart library in react js</h1>
      <p className='text-center'> Creating line charts, bar charts, and area charts of programming languages from 2017 to 2023 using the Recharts library in React</p>
      <LineCharts data={data}/>
      <BarCharts data={data}/>
      <AreaCharts data={data}/>






    </div>

    
   
    
    </>
  )
}

export default App
