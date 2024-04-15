import React, { useState } from "react";
import axios from "axios";
import {
    useToast,
    FormControl,
    FormErrorMessage,
    Input,
    Textarea,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@chakra-ui/react";
import SelectService from "./SelectService";
import SelectTechnician from "./SelectTechnician";
import SelectDateTime from "./SelectDateTime";

const Booking = () => {
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [notes, setNotes] = useState("");
    const [selectedDateTime, setSelectedDateTime] = useState("");
    const [cart, setCart] = useState([]);
    const [selectedTechnician, setSelectedTechnician] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [touched, setTouched] = useState({});
    const [bookingData, setBookingData] = useState({}); 

    // Event handlers for input changes
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleNotesChange = (event) => {
        setNotes(event.target.value);
    };

    // Function to handle selected date and time
    const handleDateTimeData = (dateTime) => {
        setSelectedDateTime(dateTime); 
    };

    // Function to handle cart data
    const handleCartData = (cart) => {
        setCart(cart); 
    };

    // Function to handle selected technician data
    const handleSelectedTechData = (technician) => {
        setSelectedTechnician(technician);
    };

    const formattedCart = cart.map(
        (item) => `${item.quantity} x ${item.serviceItemName}`
    );

    const isFormValid = () => {
        return name.trim() !== "" && phoneNumber.trim() !== "";
    };

    const handlePhoneNumberChange = (event) => {
        const input = event.target.value;
        // Check if the input is a number
        if (/^\d*$/.test(input) && input.length <= 10) {
            setPhoneNumber(input);
        }
    };

    const handleBooking = async () => {
        setIsLoading(true);
        try {
            if (!isFormValid()) {
                throw new Error("Please fill in all fields");
            }
            if (cart.length <= 0) {
                throw new Error("Please select your service");
            }
            if (!selectedDateTime) {
                throw new Error("Please select a date & time");
            }
            // Prepare the booking data
            const bookingDetails = {
                selectedDateTime,
                cart: formattedCart.join(" + "),
                phoneNumber,
                name,
                selectedTechnician: selectedTechnician.name,
                notes,
            };

            // Make a POST request to book the appointment
            const response = await axios.post("/api/booking", bookingDetails, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // Update the booking data state with the details
            setBookingData(bookingDetails);

            // Display success toast
            toast({
                title: "Your appointment is booked successfully.",
                status: "success",
                duration: 2000,
                position: "top",
            });

            // Open the confirmation modal
            onOpen();

            // Reset all fields to empty strings
            setName("");
            setPhoneNumber("");
            setNotes("");
            setTouched({});
        } catch (error) {
            console.error("Error sending message:", error);
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
        <div className="font-cormorant px-4">
            <div className="bg-primary/10 shadow-xl mb-20 py-10 rounded-lg max-w-screen-md mx-auto text-md sm:text-lg">
                <div className="flex flex-col items-center"></div>

                <div className="mx-auto p-4 max-w-[500px]">
                    {/* Service selection */}
                    <SelectService onCartUpdate={handleCartData} />
                    {/* Technician selection */}
                    <SelectTechnician
                        onTechnicianSelect={handleSelectedTechData}
                    />
                    {/* Date and time selection */}
                    <SelectDateTime onDateTimeChange={handleDateTimeData} />
                    <div className="px-4">
                        {/* Note */}
                        <div className="mb-4 ">
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

                        <FormControl
                            isInvalid={touched.name && !name.trim()}
                            isRequired
                        >
                            <FormErrorMessage>
                                Name is required
                            </FormErrorMessage>
                            <div className="mb-4 ">
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
                                    placeholder="(555) 555-5555"
                                />
                            </div>
                        </FormControl>
                    </div>
                </div>

                <div className="relative flex justify-center items-center">
                    {/* Submit button */}
                    <Button
                        colorScheme="primary"
                        isLoading={isLoading}
                        disabled={!isFormValid()}
                        onClick={handleBooking}
                        className="bg-primary hover:scale-105 duration-200 text-white py-2 px-4 shadow-xl rounded-full"
                    >
                        Book Now
                    </Button>
                </div>

                {/* Confirmation modal */}
                <Modal isOpen={isOpen} onClose={onClose} px={5}>
                    <ModalOverlay />
                    <ModalContent maxW="90%">
                        <ModalHeader>Booking Confirmation</ModalHeader>

                        <ModalBody>
                            <p className="mb-5 text-red-500 italic">
                                Please take a screenshot for your records
                            </p>

                            <div>
                                <h6 className="text-xl sm:text-4xl font-bold">
                                    Customer Information:{" "}
                                </h6>
                                <p>
                                    <strong>Name:</strong> {bookingData.name}
                                </p>

                                <p>
                                    <strong>Phone Number:</strong>{" "}
                                    {bookingData.phoneNumber}
                                </p>
                            </div>
                            <br></br>

                            <div>
                                <h6 className="text-xl sm:text-4xl font-bold">
                                    Booking Details:{" "}
                                </h6>

                                <p>
                                    <strong>Date & Time:</strong>{" "}
                                    {bookingData.selectedDateTime}
                                </p>
                                <p>
                                    <strong>Services:</strong>{" "}
                                    {bookingData.cart}
                                </p>
                                <p>
                                    <strong>Technician: </strong>
                                    {bookingData.selectedTechnician ||
                                        " Anyone"}
                                </p>
                                <p>
                                    <strong>Notes:</strong>{" "}
                                    {bookingData.notes || "N/A"}
                                </p>
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                onClick={() => {
                                    onClose();
                                    window.location.reload(); // Refresh the page
                                }}
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </div>
    );
};

export default Booking;
