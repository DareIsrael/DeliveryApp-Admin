import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Ensure this is the correct path to your CSS file
import Admin from '../Admin/Admin';


const Login = ({ onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
   const url = "https://deliveryapp-api-gyft.onrender.com"
   
    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post( url + `/api/user/loginAdmin`, {
                email,
                password
            });

            if (response.data.success) {
                onLogin(response.data.token); // Call the function passed as a prop
                localStorage.setItem("token", response.data.token);
                navigate('/admin'); // Navigate to the admin page
            } else {
                setErrorMessage("Access Denied");
            }
        } catch (error) {
            setErrorMessage("An error occurred. Please try again.");
        }
    };

    
 
 

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2>Admin Login</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="form-group">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default Login;

