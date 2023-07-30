import React from 'react'
import './NewEmployee.css'
import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'

const NewEmployee = () => {
  return (
    <>
     <Topbar />
      <div className="container">
        <Sidebar />
    <div className='newUser'>
      <h3 className="newUserTitle">New Employee</h3>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder='Sagar Karki' />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder='Sagar44@gmail.com' />
        </div>
        <div className="newUserItem">
          <label>Department</label>
          <input type="text" placeholder='Electronics' />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="phone" placeholder='984464224' />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder='BirtaMod, Jhapa' />
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
        <label>Position</label>
        <input type="text" placeholder='Sales Boy' />
        <button className="newUserButton">Create</button>
        </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default NewEmployee
