import React from 'react';
import './Sales.css';
import Chart from '../../Components/Chart/Chart';
import { salesData } from '../../DummyData';
import Featured from '../../Components/featured/Featured';
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Sales = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="sales">
          <div className="chart-container">
            <Featured className="custom-featured" />
            <Chart
              className="custom-chart"
              data={salesData}
              title="Sales Analytics"
              grid
              dataKey="Sales Status"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
