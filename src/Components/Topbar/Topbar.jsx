import React from 'react'
import './Topbar.css'
import {Notifications,Language,Settings} from '@material-ui/icons';
import { AuthContext } from '../../context/AuthContext';
// import { useAuth0 } from "@auth0/auth0-react";

const Topbar = () => {
  // const { loginWithRedirect,logout, isAuthenticated, user} = useAuth0();
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logo">E R P</div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Notifications />
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_f7lyjU2ApYXcXJXk0kjDnyCpE5JuKWuPqg&usqp=CAU" alt="" className="topAvatar" />
          <div className="topbarIconContainer">
         {AuthContext ? <h4 className="name"> Hi, Sakshyam</h4> : " "}
          </div>

          {/* <div className="topbarIconContainer">
            {
              isAuthenticated && <p> Hi, {user.name}</p>
            }
          </div> */}
          {/* <div className="topbarIconContainer">
            {
              isAuthenticated ?<><button className='button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
              </>
              :
              <button className='button' onClick={() => loginWithRedirect()}>Log In</button>
            }
          </div> */}
        </div>
      </div>     
    </div>
  )
}

export default Topbar
