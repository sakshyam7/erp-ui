import React from 'react'
import './Chart.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({title,data,dataKey,grid}) => {
  
  return (
    <div className='chart'>
      <h4 className="chartTitle">{title}</h4>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <AreaChart data={data}>
          <XAxis dataKey='name' stroke='#5550bd'></XAxis>
          <YAxis stroke='#5550bd'/>
          <Area type="monotone" dataKey={dataKey} stroke="#5550bd" fill="White" />
          <Tooltip/>
          { grid && <CartesianGrid  stroke='#e0dfdf' strokeDasharray='5 5'/>}
        </AreaChart>

      </ResponsiveContainer>
    </div>
  )
}

export default Chart
