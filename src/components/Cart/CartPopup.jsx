// CartPopup.js
import React from "react";
import CartItem from "../CartItem/CartItem";
import { FaTimes } from "react-icons/fa";

const CartPopup = ({
  cart,
  incrementQuantity,
  decrementQuantity,
  removeCartItem,
  closeCart,
}) => {
  return (
    <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-75 fixed top-0 left-0 h-full w-full z-10"></div>
      <div className="bg-white p-8 rounded-lg z-20 relative">
        <div className="flex justify-end">
          <button onClick={closeCart}>
            <FaTimes className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          </button>
        </div>
        <h3 className="text-2xl font-bold mb-4">Cart</h3>
        <div>
          {/* Display items in the cart using CartItem component */}
          {cart.map((item, cartIndex) => (
            <CartItem
              key={cartIndex}
              item={item}
              onIncrement={() => incrementQuantity(cartIndex)}
              onDecrement={() => decrementQuantity(cartIndex)}
              onRemove={() => removeCartItem(cartIndex)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
