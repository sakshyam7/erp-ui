import React, { useContext, useState } from 'react'
import './Login.css'
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const[error, setError]=useState(false)
  const[email, setEmail]=useState("")
  const[password, setPassword]=useState("")

  const navigate =useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) =>{
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    dispatch({type:"LOGIN", payload:user})
    navigate("/home")
  })
    .catch((error) => {
      setError(true);
  });
  };

  return (
    <div className="login-container">
    <form className="login-form" onSubmit={handleLogin}>
    <img src="data:image/png;base64,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" alt="ERP Logo" className="erp-logo" />
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email"  onChange={e=>setEmail(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" onChange={e=>setPassword(e.target.value)}/>
      </div>
      <button type="submit">Login</button>
      { error && <span className='span'>Wrong email or password!</span>}
    </form>
  </div>
  )
}

export default Login
