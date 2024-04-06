import React, { useState } from "react";
import SelectService from "./SelectService";
import SelectTechnician from "./SelectTechnician";
import SelectDateTime from "./SelectDateTime";
import Checkout from "./Checkout";
import { Text } from "@chakra-ui/react"; // Importing Text from Chakra UI

const Booking = () => {
    // State variables initialization
    const [selectedDateTime, setSelectedDateTime] = useState("");
    const [cart, setCart] = useState([]);
    const [selectedTechnician, setSelectedTechnician] = useState(null);
    const [showCheckout, setShowCheckout] = useState(false);
    const [error, setError] = useState("");

    // Function to handle selected date and time
    const handleDateTimeData = (dateTime) => {
        setSelectedDateTime(dateTime); // Save selected date and time
    };

    // Function to handle cart data
    const handleCartData = (cart) => {
        setCart(cart); // Update the cart state with the new cart data
    };

    // Function to handle selected technician data
    const handleSelectedTechData = (technician) => {
        setSelectedTechnician(technician);
    };

    // Function to handle checkout
    const handleCheckout = () => {
        if (cart.length <= 0) {
            const errorMessage = "Please select your service";
            setError(errorMessage);
        } else if (!selectedDateTime) {
            const errorMessage = "Please select a date & time";
            setError(errorMessage);
        } else {
            setShowCheckout(true);
            setError("");
        }
    };

    return (
        <div>
            <div>
                {!showCheckout ? (
                    // Booking form section
                    <div className="bg-primary/10 shadow-xl mb-20 py-10 rounded-lg max-w-screen-md mx-auto  flex flex-col items-center">
                        {error && (
                            <Text
                                className=""
                                color="red.300"
                                my={4}
                                fontSize="xl"
                            >
                                {error}
                            </Text>
                        )}
                        <SelectService onCartUpdate={handleCartData} />
                        <SelectTechnician
                            onTechnicianSelect={handleSelectedTechData}
                        />
                        <SelectDateTime onDateTimeChange={handleDateTimeData} />
                        <div className="flex justify-center">
                            <button
                                onClick={handleCheckout}
                                className="mt-8 mb-2 bg-primary font-bold hover:scale-105 duration-200  text-white py-2 px-4 shadow-xl rounded"
                            >
                                Check Out
                            </button>
                        </div>
                    </div>
                ) : (
                    // Checkout section
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
