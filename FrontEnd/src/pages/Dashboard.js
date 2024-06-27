import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Navbar } from '../controllers/Navbar';
import { useSelector } from 'react-redux';
import { selectUser } from '../slices/userSlice';
import Footer from '../controllers/Footer';


export const Dashboard = () => {
  const [count, setCount] = useState(0);
  const [selectedType, setSelectedType] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [price, setPrice] = useState(0);

  const user = useSelector(selectUser);
  console.log(user.name)
  const userLoggedId = user._id
  const handleCountIncrement = () => {
    setCount(count + 1);
  };

  const handleCountDecrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Calculate price
    let typePrice = 0;
    let sizePrice = 0;

    switch (selectedType) {
      case 'Litro':
        typePrice = 100;
        break;
      case 'Laugh':
        typePrice = 98;
        break;
      case 'Cypetco':
        typePrice = 120;
        break;
      default:
        typePrice = 0;
    }

    switch (selectedSize) {
      case '5':
        sizePrice = 15;
        break;
      case '8':
        sizePrice = 24;
        break;
      case '12.5':
        sizePrice = 37;
        break;
      default:
        sizePrice = 0;
    }

    const totalPrice = typePrice * sizePrice * count;
    setPrice(totalPrice);

    const orderData = {
      name: selectedType,
      size: selectedSize,
      count: count,
      
      userOwner: userLoggedId,
      price: totalPrice,
    };

    try {
      const response = await axios.post('http://localhost:3001/orders/', orderData);

      console.log('Order details:', response.data.order);

      const resp = await axios.put('http://localhost:3001/orders/',
      {
        "orderId": response.data.order._id,   
        "userID": userLoggedId   

      });

      console.log('sadas:', resp.data);

      setTimeout(() => { 
      window.location.href = '/paymentmethord'; 
      }, 1000);


    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
<div className='dashfull'>
      <div className="background_image-other" >
      <Navbar/>
        <div className="custom-form">
          <div >
           Logged User name :  {user ? user.name : ""}
            <h2>Select</h2>
            <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="selectedType">Select your favorite type:</label>
            <select
              className="form-control custom-select"
              id="selectedType"
              value={selectedType}
              onChange={(event) => setSelectedType(event.target.value)}
            >
              <option value="">Select a type</option>
              <option value="Litro">Litro</option>
              <option value="Laugh">Laugh</option>
              <option value="Cypetco">Cypetco</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="selectedSize">Select your favorite size:</label>
            <select
              className="form-control custom-select"
              id="selectedSize"
              value={selectedSize}
              onChange={(event) => setSelectedSize(event.target.value)}
            >
              <option value="">Select a size</option>
              <option value="5">5 Kg</option>
              <option value="8">8 Kg</option>
              <option value="12.5">12.5 Kg</option>
            </select>
          </div>

          <div className="countselector"> 
            <h3>{count}</h3>
            <Button className="btn btn-primary btn-increment" onClick={handleCountIncrement}>
              +
            </Button>
            <Button className="btn btn-primary btn-decrement" onClick={handleCountDecrement}>
              -
            </Button>
          </div>

          <div>
            <h5>Price: {price}</h5>
          </div>

          <button type="submit" className="btn btn-success btn-order">
            Order Now
          </button>
        </form>
      </div>
    </div>
  

  <div>
        
        <i className="fa fa-star"></i>
        
      </div>
      
    </div>
    <Footer/>
    </div>
   

);
};