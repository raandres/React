import React from 'react';

const CartItem = ({ id, name, price }) => {
  return (
    <div className="cart-item">
      <p>{name}</p>
      <p>${price}</p>
    </div>
  );
};

export default CartItem;