import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { useAuth0 } from '@auth0/auth0-react';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
//dev-q7kf11t0jxffreal.us.auth0.com
//xCqsoLjSmsutMAN3gn8Vb9M91eyJTvyG
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain='dev-q7kf11t0jxffreal.us.auth0.com'
    clientId='xCqsoLjSmsutMAN3gn8Vb9M91eyJTvyG'
    redirect_uri={window.location.origin}
    cacheLocation='localstorage'
  >
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>
);
