import React, { use } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
const AxiosMarksChart = ({AxiosMarksChartPromise}) => {
    const marksDataRes=use(AxiosMarksChartPromise);
    const marksData=marksDataRes.data;
    //console.log(marksData);
    const marksChartData=marksData.map(data=>{
        const student={
            id:data.id,
            name:data.name,
            physics:data.marks.Physics,
            chemistry:data.marks.Chemistry,
            math:data.marks.Math
        }

        const avg=(student.physics + student.chemistry + student.math) / 3;
        student.avg=avg;
        return student;
    })
    //console.log(marksChartData);
    return (
        <div>
            <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={marksChartData}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="avg" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
      <Bar dataKey="physics" fill="#82ca9d" activeBar={{ fill: 'gold', stroke: 'purple' }} radius={[10, 10, 0, 0]} />
      <Bar dataKey="chemistry" fill="#82ca9d" activeBar={{ fill: 'red', stroke: 'purple' }} radius={[10, 10, 0, 0]} />
      <Bar dataKey="math" fill="#82ca9d" activeBar={{ fill: 'blue', stroke: 'purple' }} radius={[10, 10, 0, 0]} />

      
    </BarChart>
        </div>
    );
};

export default AxiosMarksChart;