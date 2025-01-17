import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const stripePromise = loadStripe('pk_test_51QJGOQANTtKnGrMkpnFnJWnKmMrorMem8v4EhyBbCioWpLDjZDoWNlh0VttpPfAlvWwrpR6qdgVcggTqmqN8kHn900IZaBIHc5');

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payment" element={
          <ProtectedRoute msg={"you must login to pay"} redirect={"/payment"}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
        } />
        <Route path="/orders" element={
          <ProtectedRoute msg={"you must login to see your orders"} redirect={"/orders"}>
             <Orders />
          </ProtectedRoute>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default Routers;