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
import Customer from '../../pages/customer/customer'




const Admin = () => {

  const url = process.env.REACT_APP_BACKEND_BASEURL;
  console.log(url)
  // const url= "http://localhost:4000"
  const token = localStorage.getItem('token'); 

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
      <Route path='/customer' element = {<Customer url = {url} token={token} />} />
    </Routes>
    </div>
      
    </div>
    
  )
}

export default Admin


// import React from "react";
// import Navbar from "../navbar/Navbar";
// import Sidebar from "../sidebar/Sidebar";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import Add from "../../pages/add/Add";
// import List from "../../pages/list/List";
// import Order from "../../pages/orders/Order";
// import Customer from "../../pages/customer/customer";
// import { jwtDecode } from 'jwt-decode';


// const Admin = () => {
//   const url = "http://localhost:4000";
//   const token = localStorage.getItem("token");

//   // Decode the token to get the user's role (Assuming JWT has the role as part of the payload)
//   let userRole = "";
//   if (token) {
//     const decodedToken = jwtDecode(token);
//     userRole = decodedToken.role;
//   }

//   // Redirect if the user is not an admin
//   if (userRole !== "admin") {
//     return <Navigate to="/" />; // Redirect to home or login page if not an admin
//   }

//   return (
//     <div>
//       <ToastContainer />
//       <Navbar />
//       <hr />
//       <div className="app-content">
//         <Sidebar />
//         <Routes>
//           <Route path="/add" element={<Add url={url} />} />
//           <Route path="/list" element={<List url={url} />} />
//           <Route path="/order" element={<Order url={url} />} />
//           <Route path="/customer" element={<Customer url={url} token={token} />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Admin;
