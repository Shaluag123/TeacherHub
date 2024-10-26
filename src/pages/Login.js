import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');
    const {login}=useAuth();
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();

        const userData ={email,role:'student'};
        login(userData);
        navigate('/');
    }
  return (
    <div className='login-page'>
        <h1>login</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
            <button type="submit">Login</button>
        </form>
        <div className='signup-link'>
            <p>Don't have an account?<Link to='/signup'>Sign up</Link></p>
        </div>
        </div>
  )
}

export default Login