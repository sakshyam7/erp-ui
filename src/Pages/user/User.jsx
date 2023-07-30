import React from 'react'
import './User.css'
import { Publish,CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useState } from "react";
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from '../../Components/Sidebar/Sidebar';

const User = () => {
  const [file, setFile] = useState("");
  return (
    <>
     <Topbar />
      <div className="container">
        <Sidebar />
    <div className='user'>
      <div className="userTitleContainer">
        <h3 className='userTitle'>Edit Customer</h3>
        <Link to='/newUser'>
        <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="data:image/jpeg;base64,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" alt="" className='userShowImg'/>
            <div className="userShowTopTitle">
              <span className="userShowUsername">Bishal Karki</span>
              <span className="userShowUserTitle">Social Activist</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account</span>
            <div className="userShowInfo">
              <PermIdentity className='userShowIcon'/>
              <span className="userShowInfoTitle">bishal07</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className='userShowIcon'/>
              <span className="userShowInfoTitle">2055 poush 16</span>
            </div>
            <span className="userShowTitle">Contact</span>
            <div className="userShowInfo">
              <PhoneAndroid className='userShowIcon'/>
              <span className="userShowInfoTitle">982493463</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className='userShowIcon'/>
              <span className="userShowInfoTitle">bishal07@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className='userShowIcon'/>
              <span className="userShowInfoTitle">Mechinagar-10, Jhapa</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>User name</label>
                <input type="text"
                 placeholder='bisahl07' 
                 className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text"
                 placeholder='Bishal Karki' 
                 className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text"
                 placeholder='bisahl07@gmail.com' 
                 className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text"
                 placeholder='982493463' 
                 className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text"
                 placeholder='Mechinagar-10, jhapa' 
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
              <input type="file" id='file' onChange={(e) => setFile(e.target.files[0])} style={{display:"none"}}/>
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

export default User
