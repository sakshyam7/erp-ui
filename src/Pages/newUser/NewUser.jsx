import React from 'react'
import './NewUser.css'
import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'

const NewUser = () => {
  return (
    <>
     <Topbar />
      <div className="container">
        <Sidebar />
    <div className='newUser'>
      <h3 className="newUserTitle">New Customer</h3>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder='Samip' />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder='Samip Uprety' />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder='Samip44@gmail.com' />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder='password' />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="phone" placeholder='984464224' />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder='Budhabaray, Jhapa' />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="Radio" name='gender' id='male' value='male' />
            <label for="Male">Male</label>
            <input type="Radio" name='gender' id='female' value='female' />
            <label for="Female">Female</label>
            <input type="Radio" name='gender' id='others' value='others' />
            <label for="Otehrs">Others</label>
          </div>
        </div>
        <div className="newUserItem">
        <label>Active</label>
        <select className='newUserSelect' name='active' id='active'>
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </select>
        <button className="newUserButton">Create</button>
        </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default NewUser
