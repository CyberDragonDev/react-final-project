import { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';
import ProductList from './pages/ProductList';
import CartItem from './pages/CartItem';
import './App.css';

function App() {
  const [page, setPage] = useState('landing');
  
  const cartItems = useSelector(state => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Header setPage={setPage} />

      {page === 'landing' && (
        <div className="landing-background">
          <div className="landing-overlay">
            <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Paradise Nursery</h1>
            
            <AboutUs />

            <button 
              onClick={() => setPage('products')}
              style={{ 
                padding: '15px 30px', 
                fontSize: '1.2rem', 
                backgroundColor: '#2E7D32', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {page === 'products' && (
        <ProductList />
      )}

      {page === 'cart' && (
        <CartItem setPage={setPage} />
      )}

      {/* Footer global */}
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: '#fff' }}>
        <p>&copy; 2026 Paradise Nursery. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;