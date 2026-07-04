import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice';

function CartItem({ setPage }) {
  const dispatch = useDispatch();
  
  const cartItems = useSelector((state) => state.cart.items);

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const totalPlants = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Thank you for your purchase.');
  };

  return (
    <div style={{ padding: '20px', marginTop: '80px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#2E7D32' }}>Your Shopping Cart</h2>
      
      <div style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.2rem' }}>
        <p>Total Plants in Basket: <strong>{totalPlants}</strong></p>
        <p style={{ fontSize: '1.5rem', color: '#2E7D32' }}>Total Cost: <strong>${totalCost.toFixed(2)}</strong></p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px' }}>
        <button 
          onClick={() => setPage('products')}
          style={{ padding: '10px 20px', backgroundColor: '#4a4a4a', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Continue Shopping
        </button>
        <button 
          onClick={handleCheckout}
          style={{ padding: '10px 20px', backgroundColor: '#2E7D32', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Checkout
        </button>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {cartItems.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666' }}>Your cart is empty. Start adding some green friends!</p>
        ) : (
          cartItems.map((item) => (
            <div 
              key={item.id} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                borderBottom: '1px solid #e0e0e0', 
                padding: '15px 0' 
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }} 
                />
                <div>
                  <h3 style={{ margin: '0 0 5px 0' }}>{item.name}</h3>
                  <p style={{ margin: 0, color: '#666' }}>Unit Price: ${item.price.toFixed(2)}</p>
                  <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', color: '#2E7D32' }}>
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button 
                    onClick={() => handleDecrement(item)}
                    style={{ padding: '5px 10px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: '1.1rem', fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>
                    {item.quantity}
                  </span>
                  <button 
                    onClick={() => handleIncrement(item)}
                    style={{ padding: '5px 10px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    +
                  </button>
                </div>

                <button 
                  onClick={() => handleRemove(item.id)}
                  style={{ 
                    backgroundColor: '#d32f2f', 
                    color: 'white', 
                    border: 'none', 
                    padding: '8px 12px', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CartItem;