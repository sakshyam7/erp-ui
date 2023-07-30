import { useState } from 'react'
import React from 'react'
import './Employee.css'
import { Publish, LocationSearching, MailOutline, PermIdentity, PhoneAndroid,
  AccessTime} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Employee = () => {
  const [file, setFile] = useState("");
  return (
    <>
     <Topbar />
      <div className="container">
        <Sidebar/>
      <div className='user'>
      <div className="userTitleContainer">
        <h3 className='userTitle'>Employee Details</h3>
        <Link to='/newemp'>
        <button className='userAddButton'>Add</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="data:image/jpeg;base64,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" alt="" className='userShowImg'/>
            <div className="userShowTopTitle">
              <span className="userShowUsername">Sakshyam Katwal</span>
              <span className="userShowUserTitle">Grocerry Department</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Contact</span>
            <div className="userShowInfo">
              <PhoneAndroid className='userShowIcon'/>
              <span className="userShowInfoTitle">9814951466</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className='userShowIcon'/>
              <span className="userShowInfoTitle">sakshyamkatuwal5@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className='userShowIcon'/>
              <span className="userShowInfoTitle">Mechinagar-15, Jhapa</span>
            </div>
            <span className="userShowTitle">Employee Id</span>
            <div className="userShowInfo">
              <PermIdentity className='userShowIcon'/>
              <span className="userShowInfoTitle">N 123</span>
            </div>
            <span className="userShowTitle">Branch</span>
            <div className="userShowInfo">
              <LocationSearching className='userShowIcon'/>
              <span className="userShowInfoTitle">Birtamod, Jhapa</span>
            </div>
            <span className="userShowTitle">Shift</span>
            <div className="userShowInfo">
              <AccessTime className='userShowIcon'/>
              <span className="userShowInfoTitle">Day 10-5</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Employee Id</label>
                <input type="text"
                 placeholder='N 123' 
                 className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text"
                 placeholder='Sakshyam Katuwal' 
                 className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text"
                 placeholder='sakshyamkatuwal5@gmail.com' 
                 className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text"
                 placeholder='9814951466' 
                 className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text"
                 placeholder='Mechinagar-15, jhapa' 
                 className='userUpdateInput' />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
              <img
              className='userUpdateImg'
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
              <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
              <input type="file" id='file' onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}/>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div> 
      </div>
    </div>
    </div>
    </>
  )
}

export default Employee
