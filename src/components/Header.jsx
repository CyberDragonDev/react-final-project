import React from 'react';
import { useSelector } from 'react-redux';

function Header({ setPage }) {
  // Obtaining the total number of items in the cart from Redux state
  const cartItems = useSelector((state) => state.cart.items);
  // Calculate the total quantity of items in the cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: '#2E7D32', 
      color: 'white', display: 'flex', justifyContent: 'space-between', padding: '10px 20px', 
      boxSizing: 'border-box', zIndex: 1000, fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ margin: 0, cursor: 'pointer' }} onClick={() => setPage('landing')}>
        Paradise Nursery
      </h2>
      
      <nav style={{ display: 'flex', alignItems: 'center', gap: '20px', fontWeight: 'bold' }}>
        <span style={{ cursor: 'pointer' }} onClick={() => setPage('landing')}>
          Home
        </span>
        <span style={{ cursor: 'pointer' }} onClick={() => setPage('products')}>
          Plants
        </span>
        <span 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }} 
          onClick={() => setPage('cart')}
        >
          🛒 Cart 
          <span style={{ 
            backgroundColor: 'white', 
            color: '#2E7D32', 
            borderRadius: '50%', 
            padding: '2px 8px', 
            fontSize: '0.9rem',
            marginLeft: '5px'
          }}>
            {cartCount}
          </span>
        </span>
      </nav>
    </header>
  );
}

export default Header;