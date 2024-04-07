import React, { useState } from "react";
import axios from "axios";
import {
    useToast,
    Text,
    FormControl,
    FormErrorMessage,
    Input,
    Textarea,
    Button,
} from "@chakra-ui/react";
import Booking from "./Booking";
import { FaArrowLeftLong } from "react-icons/fa6";

const Checkout = ({ selectedDateTime, cart, selectedTechnician }) => {
    // State variables
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [notes, setNotes] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showBooking, setShowBooking] = useState(false);
    const [touched, setTouched] = useState({
        name: false,
        phoneNumber: false,
        notes: false,
    });

    // Chakra UI toast
    const toast = useToast();

    // Event handlers for input changes
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleNotesChange = (event) => {
        setNotes(event.target.value);
    };

    const formattedCart = cart.map(
        (item) => `${item.quantity} x ${item.serviceItemName} - ${item.price}`
    );

    const isFormValid = () => {
        return (
            name.trim() !== "" &&
            phoneNumber.trim() !== "" &&
            notes.trim() !== ""
        );
    };

    // Handle booking submission
    const handleBooking = async () => {
        // Prepare the booking data
        const bookingData = {
            name,
            phoneNumber,
            notes,
            selectedDateTime,
            cart: formattedCart.join("\n"), // Join array elements with newline character
            selectedTechnician: selectedTechnician.name, // Extract technician name
        };
        setIsLoading(true);
        try {
            if (!isFormValid()) {
                throw new Error("Please fill in all fields");
            }

            // Make a POST request to book the appointment
            const response = await axios.post(
                "http://http://3.139.66.15/api/booking",
                bookingData
            );

            // Display success toast
            toast({
                title: "Your appointment is booked successfully.",
                status: "success",
                duration: 2000,
                position: "top",
            });

            // Reset all fields to empty strings
            setName("");
            setPhoneNumber("");
            setNotes("");
            setError(""); // Clear any previous error
            // Show the booking section again
            setShowBooking(true);
        } catch (error) {
            console.error("Error sending message:", error);
            setError(error.message);
            toast({
                title: "Error",
                description: error.message,
                status: "error",
                duration: 2000,
                position: "top",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {!showBooking && (
                <div className=" bg-primary/10 shadow-xl mb-20 py-10 rounded-lg max-w-screen-md mx-auto text-md sm:text-lg">
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
                        {error && (
                            <Text color="red.300" my={4} fontSize="xl">
                                {error}
                            </Text>
                        )}
                    </div>

                    <div className="mx-auto p-4 max-w-[500px]">
                        {/* Service selection */}
                        <div className="mb-6 flex flex-col ">
                            <label className="block font-bold mr-4">
                                Selected Service:
                            </label>
                            <div className="flex flex-wrap">
                                {cart.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-200 text-gray-800 p-3 rounded-full  mr-2 mb-2 "
                                    >
                                        {item.serviceItemName}{" "}
                                        {item.quantity > 1
                                            ? `x ${item.quantity}`
                                            : ""}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technician selection */}
                        <div className="mb-6 flex  flex-col ">
                            <label className="block font-bold mr-4">
                                Selected Technician:
                            </label>
                            <div className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2">
                                {selectedTechnician
                                    ? selectedTechnician.name
                                    : "Not selected"}
                            </div>
                        </div>

                        {/* Date and time selection */}
                        <div className="mb-6 flex  flex-col ">
                            <label className="block font-bold mr-4">
                                Selected Date & Time:
                            </label>
                            <div className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2">
                                {selectedDateTime
                                    ? selectedDateTime
                                    : "Not selected"}
                            </div>
                        </div>

                        {/* Total */}
                        <div className="mb-4">
                            {/* <p className="font-bold">Total: ${total}</p> */}
                        </div>

                        {/* Notes */}
                        <FormControl
                            isInvalid={touched.notes && !notes.trim()}
                            isRequired
                        >
                            <FormErrorMessage>
                                Notes is required
                            </FormErrorMessage>
                            <div className="mb-4">
                                <label>Notes:</label>
                                <Textarea
                                    type="textarea"
                                    value={notes}
                                    onChange={handleNotesChange}
                                    onBlur={() =>
                                        setTouched({ ...touched, notes: true })
                                    }
                                    bg="white"
                                />
                            </div>
                        </FormControl>

                        {/* Name */}
                        <FormControl
                            isInvalid={touched.name && !name.trim()}
                            isRequired
                        >
                            <FormErrorMessage>
                                Name is required
                            </FormErrorMessage>
                            <div className="mb-4">
                                <label>Name:</label>
                                <Input
                                    type="text"
                                    className="w-full p-2 rounded"
                                    value={name}
                                    onChange={handleNameChange}
                                    onBlur={() =>
                                        setTouched({ ...touched, name: true })
                                    }
                                    bg="white"
                                />
                            </div>
                        </FormControl>

                        {/* Phone Number */}
                        <FormControl
                            isInvalid={
                                touched.phoneNumber && !phoneNumber.trim()
                            }
                            isRequired
                        >
                            <FormErrorMessage>
                                Phone Number is required
                            </FormErrorMessage>
                            <div className="mb-4">
                                <label>Phone Number:</label>
                                <Input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                    onBlur={() =>
                                        setTouched({
                                            ...touched,
                                            phoneNumber: true,
                                        })
                                    }
                                    bg="white"
                                />
                            </div>
                        </FormControl>
                    </div>

                    <div className="relative flex justify-center items-center">
                        {/* Back button */}
                        <div
                            className="absolute left-20 cursor-pointer"
                            onClick={() => setShowBooking(true)}
                        >
                            <div className="flex items-center">
                                <FaArrowLeftLong />
                                <span className="ml-2">Back</span>
                            </div>
                        </div>
                        {/* Submit button */}
                        <Button
                            colorScheme="primary"
                            isLoading={isLoading}
                            disabled={!isFormValid()}
                            onClick={handleBooking}
                            className="bg-primary hover:scale-105 duration-200 text-white py-2 px-4 shadow-xl rounded-full"
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            )}

            {/* Show booking section */}
            {showBooking && <Booking />}
        </>
    );
};

export default Checkout;
