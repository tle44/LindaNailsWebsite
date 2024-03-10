// CartItem.js
import React from "react";

const CartItem = ({ item, onIncrement, onDecrement, onRemove }) => {
    return (
        <div className="bg-white text-primary w-full flex items-center justify-between my-4 p-6 gap-5 font-bold text-sm sm:text-lg rounded-lg ">
            <h3 className="font-bold">{item.serviceItemName}</h3>
            <p>{item.price}</p>
            <div className="flex items-center space-x-4">
                <button
                    onClick={onDecrement}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
                >
                    -
                </button>
                <span className="text-xl font-bold">{item.quantity || 1}</span>
                <button
                    onClick={onIncrement}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
                >
                    +
                </button>
                <button
                    onClick={onRemove}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;
