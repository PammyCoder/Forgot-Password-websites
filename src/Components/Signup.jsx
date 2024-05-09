import React, { useState } from "react";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from "axios";
import "../App.css";
import{Link, useNavigate} from "react-router-dom"
const Signup = () => {
  const [username, setUsername] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8000/auth/signup", {
      username,
      phone,
      email,
      password,
    }).then(res=>{
      if(res.data.status){
        toast.success("Registered Successfully")
        navigate('/login')
      }
    }).catch(err=>{
        console.log(err);
    })
  };
  return (
    <div className="sign-up-conatainer">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2 className="font-bold text-center text-2xl">Signup</h2>
       <label htmlFor="username">Username:</label> <select name="" id="" className="">
        <option value=""></option>
        <option value="">Admin</option>
        <option value="">Manager</option>
        <option value="">Team lead</option>
        <option value="">Employee</option></select>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="Phone" className=" w-2/4   pl-2">Phone:</label>
        <input
        className="w-2/4 h-7 -mt-3  rounded-md pl-2 outline-none"
          type="number"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />

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

        <button type="submit" className="w-[80px] h-8 font-bold bg-white mt-3 rounded">Signup</button>
        <p>Have an Account?</p>
        <Link to='/login' className="w-[90px] h-8 font-bold bg-white mt-3 rounded">Login</Link>
        
      </form>
    </div>
  );
};

export default Signup;
