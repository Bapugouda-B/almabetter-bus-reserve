import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BookConfirm from './pages/booking-confirm/bookConfirm.js';
import Buses from './pages/buses/buses.js';
import Home from './pages/home/home.js';
import Payment from './pages/payment/payment.js';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bus-list" element={<Buses />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/payment-status" element={<BookConfirm />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
