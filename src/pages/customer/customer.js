
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './customer.css'; // For CSS styling

const Customer= ({ url, token }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch users from backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${url}/api/user/fetchUsers`); // Adjust the endpoint to your API
      if (response.data.success) {
        setUsers(response.data.data);
        setLoading(false);
      } else {
        setError("Failed to fetch users");
        setLoading(false);
      }
    } catch (err) {
      setError("Server error");
      setLoading(false);
    }
  };




  // Fetch users when the component is mounted
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="users-list">
      <h2>Customers List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber || 'N/A'}</td> {/* If phoneNumber is optional */}
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;


