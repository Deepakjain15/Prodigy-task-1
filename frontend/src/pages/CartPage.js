import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
              <p>${item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
