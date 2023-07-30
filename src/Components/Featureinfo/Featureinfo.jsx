import React from 'react'
import './Featureinfo.css'
import {ArrowUpward,ArrowDownward,Group} from "@material-ui/icons"

const Featureinfo = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Customers</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">6K</span>
          <span className="featuredMoneyRate">
            <Group className="featuredIcon Users"/>
          </span>
        </div>
        <span className="featuredSub">Total Customer</span>
      </div>
      <div className="featuredItem">
        <span className='featuredTitle'>Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs 1,15,000</span>
          <span className="featuredMoneyRate">
            +10.5 <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub"> This Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs 3,25,415</span>
          <span className="featuredMoneyRate">
            +11.4 <ArrowUpward className="featuredIcon positive"/>
          </span>
        </div>
        <span className="featuredSub">This Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Purchases</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs 1,10,415</span>
          <span className="featuredMoneyRate">
            -8.6 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}

export default Featureinfo
