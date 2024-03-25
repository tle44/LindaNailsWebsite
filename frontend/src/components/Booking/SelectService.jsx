import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import bookingServiceList from "../../JSON/bookingServiceList.json";
import { FaShoppingCart } from "react-icons/fa";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";

const SelectService = ({ onCartUpdate }) => {
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

    useEffect(() => {
        // Call onCartUpdate when cart changes
        onCartUpdate(cart);
    }, [cart, onCartUpdate]);

    return (
        <div className="container mx-auto p-4 max-w-[500px]">
            <div className="relative flex flex-col items-center">
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

                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Select Service
                </h2>
                <div className="space-y-4 w-full">
                    {bookingServiceList.categories.map((item, index) => (
                        <div key={index}>
                            <div
                                className="bg-primary text-white p-6 font-bold  text-md sm:text-lg rounded-lg tracking-wider border border-transparent duration-300 "
                                onClick={() => handleButtonClick(index)}
                            >
                                {item.serviceTitle}
                            </div>
                            {selectedService === index && (
                                <div className="space-y-4 mt-4">
                                    {item.serviceItems.map(
                                        (serviceItem, serviceIndex) => (
                                            <div
                                                key={serviceIndex}
                                                className={`bg-white text-primary p-6 flex items-center justify-between font-bold text-md sm:text-lg rounded-lg tracking-wider border border-transparent duration-300 gap-5 ${
                                                    cart.some(
                                                        (cartItem) =>
                                                            cartItem.serviceItemName ===
                                                            serviceItem.serviceItemName
                                                    )
                                                        ? "border-primary bg-orange-200" // Change background color when selected and in cart
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    handleServiceItemClick(
                                                        serviceIndex
                                                    )
                                                }
                                            >
                                                <h3 className="font-bold">
                                                    {
                                                        serviceItem.serviceItemName
                                                    }
                                                </h3>
                                                <p>{serviceItem.price}</p>

                                                <button>
                                                    {cart.some(
                                                        (cartItem) =>
                                                            cartItem.serviceItemName ===
                                                            serviceItem.serviceItemName
                                                    ) ? (
                                                        <span>
                                                            <FaCheckSquare />
                                                        </span>
                                                    ) : (
                                                        <span>
                                                            <FaRegSquare />
                                                        </span>
                                                    )}
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

export default SelectService;
