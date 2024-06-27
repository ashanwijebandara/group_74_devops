import '../App.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import Stack from '@mui/material/Stack';
import { Navbar } from '../controllers/Navbar';

import '../index';

import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const AdminDashboard = () => {
  const [usersWithOrders, setUsersWithOrders] = useState([]);

  useEffect(() => {
    const fetchUsersWithOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user/');
        setUsersWithOrders(response.data);
      } catch (error) {
        console.error('Error fetching users with orders:', error);
      }
    };

    fetchUsersWithOrders();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/user/${userId}`);

      setUsersWithOrders(usersWithOrders.filter(user => user.user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleDeleteOrder = async (userId, orderId) => {
    try {
      await axios.delete(`http://localhost:3001/orders/savedorders/${userId}/${orderId}`);

      setUsersWithOrders(usersWithOrders.map(user => ({
        ...user,
        savedorders: user.savedorders.filter(order => order._id !== orderId)
      })));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <div className='custom-container'>
      <Navbar />
      <h2 className='topic'>Users with Orders</h2>

      <div className='list'>
        <ul className="order-list">
          {usersWithOrders.map((user) => (
            <li key={user.user._id}>
              <span className="label">Name:</span> {user.user.name}, <span className="label">Email:</span> {user.user.email}
              <Stack direction="row" spacing={2}>
                <Button className='margin-right-5rem' onClick={() => handleDeleteUser(user.user._id)} variant="contained" startIcon={<DeleteIcon />}>Delete User</Button>
              </Stack>
              <ul className="order-list_item">
                {user.savedorders.map((order) => (
                  <li key={order._id}>
                    <span className="label">Order Name:</span> {order.name}<br />

                    <span className="label">Count:</span> {order.count}, <br />
                    <span className="label">Price:</span> {order.price}<br />


                    <button className='button1' onClick={() => handleDeleteOrder(user.user._id, order._id)}><FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: '25px', color: 'red' }} /></button>



                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};
