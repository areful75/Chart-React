import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import AxiosMarksChart from './components/ResultChart/AxiosMarksChart/AxiosMarksChart'

const AxiosMarksChartPromise=axios.get('marksData.json');



function App() {

  return (
    <>
      
      <h1>Vite + React</h1>
      <ResultChart></ResultChart>
     <Suspense>
     <AxiosMarksChart AxiosMarksChartPromise={AxiosMarksChartPromise} ></AxiosMarksChart>
     </Suspense>
     
     
    </>
  )
}

export default App
