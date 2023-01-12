import React from 'react';
import { loginEndpoint } from '../../spotify';
import './login.css';
import Logo from './logo.png'

const Login = () => {
    return (
        <div className = "login-page">
            <img src= {Logo} alt = "logo-spotify" className = "logo" />
            <a href = {loginEndpoint}><div className='login-btn'>LOG IN</div></a>
            
        </div>
    );
};

export default Login;