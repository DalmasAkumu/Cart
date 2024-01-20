import React, { useState } from 'react';
import Payment from './Payment';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isPaymentCompleted, setPaymentCompleted] = useState(false);

  const addToCart = (item) => {
    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCartItems(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    const currentItem = updatedCart[index];

    if (currentItem.quantity > 1) {
      currentItem.quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }

    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  //const totalProducts = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handlePaymentSuccess = () => {
    setCartItems([]);
    setPaymentCompleted(true);
  };

  return (
    <div>
      {!isPaymentCompleted ? (
        <>
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price} 
                  <button onClick={() => removeFromCart(index)}>-</button>
                  {item.quantity}
                  <button onClick={() => addToCart(item)}>+</button>
                  {` x ${item.quantity}`}
                </li>
              ))}
            </ul>
          )}
          <p>Total Cost: Ksh {calculateTotal()}</p>
          <button onClick={clearCart}>Clear Cart</button>
          <Payment totalCost={calculateTotal()} handlePaymentSuccess={handlePaymentSuccess} />
        </>
      ) : (
        <p>Thank you for your purchase!</p>
      )}
    </div>
  );
};

export default Cart;

