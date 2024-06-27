import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from './pages/Home';
import { LogIn } from './pages/LogIn';
import { SignUp } from './pages/SignUP';
import { Dashboard } from './pages/Dashboard';
import { PaymentMethod } from './pages/PaymentMethod';

import { ThankYou } from './pages/ThankYou';
import { AdminDashboard } from './pages/AdminDash';
import { AdminLogin } from './pages/AdminLogin';

function App() {
  return (
    <div className="App">
      <div >
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/paymentmethord" element={<PaymentMethod />} />

            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<Home />} />
              
            </Routes>
          </Router>
        </div>
        

      </div>
        
    
  );
}

export default App;
