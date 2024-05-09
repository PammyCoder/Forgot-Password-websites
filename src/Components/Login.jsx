import React, { useState } from "react";
import Axios from "axios";
import "../App.css";
import {  toast } from 'react-toastify';
import{Link, useNavigate} from "react-router-dom"
const Login = () => {
 
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate=useNavigate()

  Axios.defaults.withCredentials=true;

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8000/auth/login", {
      email,
      password,
    }).then(res=>{
      if(res.data.status){
        toast.success("Login Successfully")
        navigate('/')
      }
    }).catch(err=>{
        console.log(err);
    })
  };
  return (
    <div className="sign-up-conatainer">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
       

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="*******"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="w-[90px] h-8 font-bold bg-white mt-3 rounded first-letter:">Login</button>
       <button className="signup  w-[90px] h-8 font-bold bg-white mt-3 rounded ml-4"><Link to='/signup'>Signup</Link></button>

        <br/>
        <Link to="/forgetPassword" className="w-[90px] h-8 font-bold bg-white mt-3 rounded " >Forgot Password</Link>
        <p>Don't Have an Account?</p> 
        
      </form>
    </div>
  );
};

export default Login;
