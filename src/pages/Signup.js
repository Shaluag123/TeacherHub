import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[otp,setOtp]=useState('');
    const[role,setRole]=useState('student');

    const{login}=useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const userData ={email,role};
        login(userData);
        navigate('/');
    }

    const handleSendOtp=()=>{
        console.log("OTP send to",email);
    };
  return (
    <div className='signup-page'>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} required/>
        <div className='email-otp-container'>
        <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
        <button type="button" onClick={handleSendOtp} className='send-otp-btn'>Send OTP</button>

        </div>
        <input type="text" placeholder="Enter OTP" value={otp} onChange={(e)=> setOtp(e.target.value)} required/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
        <select value={role} onChange={(e)=>setRole(e.target.value)}>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
        </select>
        <button type="submit">Signup</button>

        

        </form>
        <div className='login-link'>
            <p>Already have an account?<Link to='/login'>Login Here</Link></p>
        </div>
    </div>
  )
}

export default Signup