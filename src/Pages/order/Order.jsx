import React from 'react'
import './Order.css'
import Table from "../../Components/table/Table";
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from '../../Components/Sidebar/Sidebar';


const Order = () => {
  return (
  <>
   <Topbar />
      <div className="container">
        <Sidebar />
    <div className='order'>
      <div className="listContainer">
          <div className="listTitle">Latest Order</div>
          <Table />
        </div>
    </div>
    </div>
  </>
  )
}

export default Order

