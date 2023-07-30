import React from 'react'
import './Sidebar.css'
import 
{Home,Timeline,TrendingUp,
PermIdentity,Storefront,
Shop,AttachMoney,Assessment,Group,WorkOutline,StarRate,
MailOutline,DynamicFeed,LocalShipping,CalendarToday,ExitToApp} 
from '@material-ui/icons'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to='/home' className='link'>
            <li className="sidebarListItem active">
              <Home  className='sidebarIcon'/>
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <Link to='/sales'className='link'>
            <li className="sidebarListItem">
              <TrendingUp className='sidebarIcon' />
              Sales
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Basics</h3>
          <ul className="sidebarList">
            <Link to='/user'className='link'>
            <li className="sidebarListItem">
              <PermIdentity  className='sidebarIcon'/>
              Customers
            </li>
            </Link>
            <Link to='/products'className='link'>
            <li className="sidebarListItem">
              <Storefront className='sidebarIcon' />
              Inventory
            </li>
            </Link>
            <Link to='/calender'className='link'>
            <li className="sidebarListItem">
              <CalendarToday className='sidebarIcon' />
              Calender
            </li>
            </Link>
            <Link to='/order' className='link'>
            <li className="sidebarListItem">
              <Shop className='sidebarIcon' />
              Order
            </li>
            </Link>
            <Link to='/delivery' className='link'>
            <li className="sidebarListItem">
              <LocalShipping className='sidebarIcon' />
              Delivery
            </li>
            </Link>
            <Link to='/transaction' className='link'>
            <li className="sidebarListItem">
              <AttachMoney className='sidebarIcon' />
              Transactions
            </li>
            </Link>
            <li className="sidebarListItem">
              <Assessment className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staffs</h3>
          <ul className="sidebarList">
            <Link to='/employee'className='link'>
            <li className="sidebarListItem" >
              <Group  className='sidebarIcon'/>
              Employees
            </li>
            </Link>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <StarRate className="sidebarIcon" />
              Performance
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
          <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <Link to='/login' className='link'>
            <li className="sidebarListItem">
              <ExitToApp className="sidebarIcon" />
              Logout
            </li>
            </Link>
          </ul>
        </div>
        
      </div>
      
    </div>
  )
}

export default Sidebar
