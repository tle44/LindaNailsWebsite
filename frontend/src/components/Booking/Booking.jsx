import React, { useState } from "react";
import SelectService from "./SelectService";
import SelectTechnician from "./SelectTechnician";
import SelectDateTime from "./SelectDateTime";
import Checkout from "./Checkout";

const Booking = () => {
    const [selectedDateTime, setSelectedDateTime] = useState("");
    const [cart, setCart] = useState([]);
    const [selectedTechnician, setSelectedTechnician] = useState(null);
    const [showCheckout, setShowCheckout] = useState(false);

    const handleDateTimeData = (dateTime) => {
        setSelectedDateTime(dateTime); // Save selected date and time
        console.log(selectedDateTime);
    };

    const handleCartData = (cart) => {
        setCart(cart); // Update the cart state with the new cart data
        console.log(cart);
    };

    const handleSelectedTechData = (technician) => {
        console.log("Selected Technician:", technician);
        setSelectedTechnician(technician);
    };

    const handleCheckout = () => {
        setShowCheckout(true);
    };

    return (
        <div className="bg-primary/10 shadow-xl mb-20 py-10 rounded-lg max-w-screen-xl mx-auto">
            <div>
                {!showCheckout && (
                    <>
                        <SelectService onCartUpdate={handleCartData} />
                        <SelectTechnician onTechnicianSelect={handleSelectedTechData} />
                        <SelectDateTime onDateTimeChange={handleDateTimeData} />
                        <div className="flex justify-center">
                            <button
                                onClick={handleCheckout}
                                className="hover:scale-105 duration-300 my-10 py-2 px-6 rounded-full bg-white text-black border-2 border-primary text-xl"
                            >
                                Check Out
                            </button>
                        </div>
                    </>
                )}
                {showCheckout && (
                    <Checkout
                        selectedDateTime={selectedDateTime}
                        cart={cart}
                        selectedTechnician={selectedTechnician}
                    />
                )}
            </div>
        </div>
    );
};

export default Booking;
