import React, {useState} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [token, setToken] = useState("")

  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")

 }


  return (
    <div className='navbar'>
    <img className='logo'  src={assets.logo} />
    <button className='logout-button' onClick={logout}>Logout</button>
    <img className='profile'  src={assets.profile_image}  />

      
    </div>
  )
}

export default Navbar
