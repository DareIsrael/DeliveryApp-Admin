// import React from 'react'
// import Navbar from './components/navbar/Navbar'
// import Sidebar from './sidebar/Sidebar'
// import { Route, Routes } from 'react-router-dom'
// import Add from './pages/add/Add'
// import List from './pages/list/List'
// import Order from './pages/orders/Order'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Login from './components/Login/Login.js'

import React from 'react'
import Navbar from "../navbar/Navbar"
import Sidebar from "../sidebar/Sidebar"
import {Routes, Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Add from '../../pages/add/Add'
import List from '../../pages/list/List'
import Order from '../../pages/orders/Order'




const Admin = () => {

  const url = "http://localhost:4000"

  return (

     
    

    <div>

    
    <ToastContainer />
    <Navbar  />
    <hr />
    <div className='app-content'>
    <Sidebar />
    <Routes>
      
      <Route path='/add' element = {<Add url={url}/>} />
      <Route path='/list' element = {<List url={url}/>} />
      <Route path='/order' element = {<Order url={url}/>} />
    </Routes>
    </div>
      
    </div>
    
  )
}

export default Admin

