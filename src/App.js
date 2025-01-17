import React from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/add/Add'
import List from './pages/list/List'
import Order from './pages/orders/Order'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login/Login.js'

const App = () => {

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

export default App



// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './components/Login/Login';
// import Admin from './components/Admin/Admin';

// function App() {

  



//   const [isAuthenticated, setIsAuthenticated] = useState(false);



//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsAuthenticated(true); // Update authentication state if token exists
//     }
//   }, []);

//   const handleLogin = (token) => {
//     setIsAuthenticated(true);
//     localStorage.setItem('token', token); // Save the token in localStorage
//   };

//   return (
   
//       <Routes>
//          <Route path="/login" element={<Login onLogin={handleLogin} />} />
//         <Route 
//           path="/admin/*" 
//           element={isAuthenticated ? <Admin /> : <Navigate to="/login" />} 
//         />
//         {/* Add other routes as needed */}
//       </Routes>
   
//   );
// }

// export default App;


