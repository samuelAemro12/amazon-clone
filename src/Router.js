import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import SignUp from './Pages/Auth/SignUp';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path= "/auth" element={<SignUp/>}/>
        <Route path= "/payment" element={<Payment/>}/>
        <Route path= "/orders" element={<Orders/>}/>
        <Route path= "/cart" element={<Cart/>}/>
        <Route path= "/category/:categoryName" element={<Results/>}/>
        <Route path= "/products/:productId" element={<ProductDetail/>}/>
      </Routes>
    </Router>
  )
}

export default Routers;
;