import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import styled from 'styled-components';
import {
  Home,
  ProductsPage,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute
} from './pages';
import { OAuthError } from '@auth0/auth0-react';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<Error />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
