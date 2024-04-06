import React from "react";
import CartItem from "./CartItem"; // Import the CartItem component

const Cart = ({
    cart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
    removeCartItem,
}) => {
    return (
        <div className="p-4 my-10 relative flex flex-col items-center">
            <h3 className="font-bold text-lg mr-2">Cart:</h3>
            <div>
                {/* Render each item in the cart using the CartItem component */}
                {cart.map((item, cartIndex) => (
                    <CartItem
                        key={cartIndex}
                        item={item}
                        onIncrement={() => incrementQuantity(cartIndex)}
                        onDecrement={() => decrementQuantity(cartIndex)}
                        onRemove={() => removeCartItem(cartIndex)}
                    />
                ))}
                {/* Display a button to clear the cart if it's not empty */}
                {cart.length > 0 && (
                    <button
                        onClick={clearCart}
                        className="text-red-500 font-bold text-sm mt-2"
                    >
                        Clear Cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default Cart;
