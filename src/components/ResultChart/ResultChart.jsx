import React from 'react';

import { Line, LineChart, XAxis, YAxis } from 'recharts';
import { BarChart, Bar } from 'recharts';


const resultData=[
    {
      "id": 1,
      "name": "Rahim",
      "Physics": 78,
      "Chemistry": 82,
      "Math": 90
    },
    {
      "id": 2,
      "name": "Karim",
      "Physics": 65,
      "Chemistry": 70,
      "Math": 72
    },
    {
      "id": 3,
      "name": "Ayesha",
      "Physics": 88,
      "Chemistry": 91,
      "Math": 95
    },
    {
      "id": 4,
      "name": "Nabila",
      "Physics": 74,
      "Chemistry": 76,
      "Math": 80
    },
    {
      "id": 5,
      "name": "Sajid",
      "Physics": 69,
      "Chemistry": 68,
      "Math": 75
    },
    {
      "id": 6,
      "name": "Tania",
      "Physics": 92,
      "Chemistry": 89,
      "Math": 94
    },
    {
      "id": 7,
      "name": "Imran",
      "Physics": 55,
      "Chemistry": 60,
      "Math": 58
    },
    {
      "id": 8,
      "name": "Farhan",
      "Physics": 81,
      "Chemistry": 78,
      "Math": 85
    },
    {
      "id": 9,
      "name": "Mim",
      "Physics": 86,
      "Chemistry": 88,
      "Math": 90
    },
    {
      "id": 10,
      "name": "Hasan",
      "Physics": 73,
      "Chemistry": 71,
      "Math": 77
    }
  ]
  

const ResultChart = () => {
    return (
        <div>
           
           
            <div>
            <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }} responsive data={resultData}>
    <XAxis dataKey={'name'}></XAxis>
    <YAxis></YAxis>
      <Line dataKey="Math" stroke='green'/>
      <Line dataKey="Chemistry" stroke='red'/>
      
    </LineChart>
            </div>
       <div>
       <BarChart
      style={{ width: '100%', maxWidth: '800px', maxHeight: '400px', aspectRatio: 1.618 }}
      responsive
      data={resultData}
    >
        
       
      <Bar dataKey="Math" fill="red" />
      <Bar dataKey="Chemistry" fill="yellow" />
      <Bar dataKey="Physics" fill="#8884d8" />
      <XAxis dataKey={'name'}></XAxis>
       <YAxis></YAxis>

     
    </BarChart>
       </div>
        </div>

    );
};

export default ResultChart;