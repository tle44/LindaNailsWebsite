// Booking.js
import React, { useState } from "react";
import Cart from "../Cart/Cart";
import CartItem from "../Cart/CartItem";
import bookingServiceList from "../../JSON/bookingServiceList.json";
import { FaShoppingCart } from "react-icons/fa";

const Booking = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [cart, setCart] = useState([]);
    const [isCartOpen, setCartOpen] = useState(false);

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    const handleButtonClick = (index) => {
        setSelectedService((prevSelected) =>
            prevSelected === index ? null : index
        );
    };

    const handleServiceItemClick = (index) => {
        const selectedServiceItem =
            bookingServiceList.categories[selectedService].serviceItems[index];

        // Check if the selected item is already in the cart
        const isInCart = cart.some(
            (cartItem) =>
                cartItem.serviceItemName === selectedServiceItem.serviceItemName
        );

        if (isInCart) {
            // If in cart, remove the item
            setCart((prevCart) =>
                prevCart.filter(
                    (cartItem) =>
                        cartItem.serviceItemName !==
                        selectedServiceItem.serviceItemName
                )
            );
        } else {
            // If not in cart, add the item with quantity 1
            setCart((prevCart) => [
                ...prevCart,
                { ...selectedServiceItem, quantity: 1 },
            ]);
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const incrementQuantity = (index) => {
        setCart((prevCart) =>
            prevCart.map((item, cartIndex) =>
                cartIndex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decrementQuantity = (index) => {
        setCart((prevCart) =>
            prevCart.map((item, cartIndex) =>
                cartIndex === index && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeCartItem = (index) => {
        setCart((prevCart) =>
            prevCart.filter((item, cartIndex) => cartIndex !== index)
        );
    };

    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    return (
        <div className="bg-primary/10 shadow-xl mb-20 py-10 flex justify-center rounded-lg sm:w-[900px] w-full mx-auto">
            <div className="sm:w-[400px] w-full p-4">
                <div className="relative flex flex-col items-center ">
                    {/* Cart icon with a click event */}
                    <div
                        className="cursor-pointer absolute top-1 right-1 "
                        onClick={toggleCart}
                    >
                        <FaShoppingCart size={30} color="#333" />
                        {totalQuantity > 0 && (
                            <span className="bg-red-500 text-white rounded-full px-2 ml-1  absolute  bottom-4 left-4">
                                {totalQuantity}
                            </span>
                        )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold">
                        Select Service
                    </h2>
                    {bookingServiceList.categories.map((item, index) => (
                        <div className="sm:w-[500px] w-full " key={index}>
                            <button
                                className="mt-4 bg-primary/70 p-6 sm:w-[500px] w-full font-bold text-lg text-white rounded-lg active:border-white duration-300 active_text-white text-md sm:text-lg"
                                onClick={() => handleButtonClick(index)}
                            >
                                {item.serviceTitle}
                            </button>
                            {selectedService === index && (
                                <div className="mt-4 space-y-4">
                                    {item.serviceItems.map(
                                        (serviceItem, serviceIndex) => (
                                            <div
                                                key={serviceIndex}
                                                className="bg-white text-primary p-6 w-full flex items-center justify-between gap-5 font-bold text-md sm:text-lg tracking-wider rounded-lg border-transparent active:border-white duration-300"
                                            >
                                                <h3 className="font-bold">
                                                    {
                                                        serviceItem.serviceItemName
                                                    }
                                                </h3>
                                                <p>{serviceItem.price}</p>
                                                <button
                                                    onClick={() =>
                                                        handleServiceItemClick(
                                                            serviceIndex
                                                        )
                                                    }
                                                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
                                                >
                                                    {cart.some(
                                                        (cartItem) =>
                                                            cartItem.serviceItemName ===
                                                            serviceItem.serviceItemName
                                                    )
                                                        ? "Remove from Cart"
                                                        : "Add to Cart"}
                                                </button>
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Cart Popup */}
                {isCartOpen && (
                    <Cart
                        cart={cart}
                        clearCart={clearCart}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                        removeCartItem={removeCartItem}
                    />
                )}
            </div>
        </div>
    );
};

export default Booking;
