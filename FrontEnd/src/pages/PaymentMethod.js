import { useState } from "react";
import { Navbar } from '../controllers/Navbar';
import { useSelector } from 'react-redux';
import { selectUser } from '../slices/userSlice';
import Footer from '../controllers/Footer';

import axios from 'axios';


export const PaymentMethod =() =>{
    const[name, setName] = useState()
    const[cvv, setCvv] = useState()
    const[number, setNumber] = useState()
    const[address,setAddress]=useState()
    const[stateName,setStateName] =useState()
    const[zip,setZip]=useState()

    const user = useSelector(selectUser);
    console.log(user.name)
    const userLoggedId = user._id 
    

    const handleSubmit =(e) => {
      e.preventDefault()


      const paymentData = {
            name,
            cvv,
            number,
            address, 
            stateName,
            zip,
            userOwner: userLoggedId,
        };

        try {
          axios.post('http://localhost:3001/payment/', paymentData)
          .then(result => {
            console.log(result);
            setTimeout(() => { 
              window.location.href = '/thankyou'; 
              }, 1000);
            
        })
        } catch (error) {
          console.error('Error creating order:', error);
        }
      };      
    
    return (
      <div className='dashfull'>
      <div className="background_image-other">
        <Navbar/>
        <form onSubmit={handleSubmit}>
        <div className="pay"> 
       
        <div className="custom-form">
          <div >
            <h2 className="mb-4">Card Payment</h2>
            
              <div className="mb-3">
                <label htmlFor="name"><strong>Name</strong></label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  className="form-control rounded-0"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="number"><strong>Card Number</strong></label>
                <input
                  type="text"
                  placeholder="Enter number"
                  name="number"
                  className="form-control rounded-0"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="cvv"><strong>CVV</strong></label>
                <input
                  type="text"
                  placeholder="Enter CVV"
                  name="cvv"
                  className="form-control rounded-0"
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
       
            
          </div>
        </div>
        <div className="custom-form">
          <div >
            <h2 className="mb-4">Address</h2>
            
              <div className="mb-3">
                <label htmlFor="name"><strong>Address</strong></label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  name="name"
                  className="form-control rounded-0"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="number"><strong>State</strong></label>
                <input
                  type="text"
                  placeholder="Enter State"
                  name="number"
                  className="form-control rounded-0"
                  onChange={(e) => setStateName(e.target.value)}
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="cvv"><strong>Zip Code</strong></label>
                <input
                  type="text"
                  placeholder="Enter Zip Code"
                  name="cvv"
                  className="form-control rounded-0"
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
  
              
            
          </div>
        
       

        
        </div>
        </div> <button type="submit" className="btn-primary ">
                Place
              </button>
        </form>
       
      </div>
      <Footer/>
      </div>
    );
  };
