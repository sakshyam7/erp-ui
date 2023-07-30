import React from 'react'
import './Home.css'
import Featureinfo from '../../Components/Featureinfo/Featureinfo'
import Chart from '../../Components/Chart/Chart'
import { salesData } from '../../DummyData'
import Widgetlg from '../../Components/WidgetLarge/Widgetlg'
import Widgetsm from '../../Components/WidgetSmall/Widgetsm'
import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'


const Home = () => {
  return (
    <>
     <Topbar />
      <div className="container">
        <Sidebar />
    <div className='home'>
      <Featureinfo />
      <Chart data={salesData} title='Sales Analytics' grid dataKey='Sales Status'/>
      <div className="homeWidgets">
        <Widgetsm />
        <Widgetlg />
        
      </div>
    </div>
    </div>
    </>
  )
}

export default Home
