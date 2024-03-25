// import React, { useState } from "react";

// const Checkout = ({ selectedDateTime, cart, selectedTechnician }) => {
//     const [name, setName] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [notes, setNotes] = useState("");

//     const handleNameChange = (event) => {
//         setName(event.target.value);
//     };

//     const handlePhoneNumberChange = (event) => {
//         setPhoneNumber(event.target.value);
//     };

//     const handleNotesChange = (event) => {
//         setNotes(event.target.value);
//     };

//     return (
//         <div className="container mx-auto p-4 max-w-[500px] text-md sm:text-lg">
//             <div className="flex flex-col items-center">
//                 <h1 className="text-3xl font-bold mb-6">Checkout</h1>
//             </div>

//             {/* Service selection */}
//             <div className="mb-6 flex flex-col ">
//                 <label className="block font-bold mr-4">
//                     Selected Service:
//                 </label>
//                 <div className="flex flex-wrap">
//                     {cart.map((item, index) => (
//                         <div
//                             key={index}
//                             className="bg-gray-200 text-gray-800 p-3 rounded-full  mr-2 mb-2 "
//                         >
//                             {item.serviceItemName}{" "}
//                             {item.quantity > 1 ? `x ${item.quantity}` : ""}
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Technician selection */}
//             <div className="mb-6 flex  flex-col ">
//                 <label className="block font-bold mr-4">
//                     Selected Technician:
//                 </label>
//                 <div className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2">
//                     {selectedTechnician
//                         ? selectedTechnician.name
//                         : "Not selected"}
//                 </div>
//             </div>

//             {/* Date and time selection */}
//             <div className="mb-6 flex  flex-col ">
//                 <label className="block font-bold mr-4">
//                     Selected Date & Time:
//                 </label>
//                 <div className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2">
//                     {selectedDateTime ? selectedDateTime : "Not selected"}
//                 </div>
//             </div>

//             {/* Total */}
//             <div className="mb-4">
//                 {/* <p className="font-bold">Total: ${total}</p> */}
//             </div>

//             <div className="mb-4">
//                 <label className="block mb-2">Notes:</label>
//                 <textarea
//                     className="w-full p-2 border border-gray-300 rounded"
//                     value={notes}
//                     onChange={handleNotesChange}
//                 />
//             </div>

//             {/* Name */}
//             <div className="mb-4">
//                 <label className="block mb-2">Name:</label>
//                 <input
//                     type="text"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     value={name}
//                     onChange={handleNameChange}
//                 />
//             </div>

//             {/* Phone Number */}
//             <div className="mb-4">
//                 <label className="block mb-2">Phone Number:</label>
//                 <input
//                     type="tel"
//                     className="w-full p-2 border border-gray-300 rounded"
//                     value={phoneNumber}
//                     onChange={handlePhoneNumberChange}
//                 />
//             </div>

//             {/* Checkout Button */}
//             <div className="flex justify-center">
//                 <button
//                     type="submit"
//                     className="hover:scale-105 duration-300 my-10 py-2 px-6 rounded-full bg-white text-black border-2 border-primary text-xl"
//                 >
//                     Book Now
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Checkout;

import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests

const Checkout = ({ selectedDateTime, cart, selectedTechnician }) => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [notes, setNotes] = useState("");

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

        try {
            // if (!isFormValid()) {
            //     throw new Error("Please fill in all fields");
            // }

            const response = await fetch("http://localhost:5175/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookingData),
            });
            if (!response.ok) {
                throw new Error(
                    `Failed to send message: ${response.statusText}`
                );
            }
            await response.json();
            // toast({
            //     title: "Message sent.",
            //     status: "success",
            //     duration: 2000,
            //     position: "top",
            // });
            // setValues(initValues); // Reset form values
            // setError(""); // Clear any previous error
            // setTouched({}); // Reset touched state
        } catch (error) {
            console.error("Error sending message:", error);
            // setError(error.message);
        } finally {
            // setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-[500px] text-md sm:text-lg">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-6">Checkout</h1>
            </div>

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
                            {item.quantity > 1 ? `x ${item.quantity}` : ""}
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
                    {selectedDateTime ? selectedDateTime : "Not selected"}
                </div>
            </div>

            {/* Total */}
            <div className="mb-4">
                {/* <p className="font-bold">Total: ${total}</p> */}
            </div>

            {/* Notes */}
            <div className="mb-4">
                <label className="block mb-2">Notes:</label>
                <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    value={notes}
                    onChange={handleNotesChange}
                />
            </div>

            {/* Name */}
            <div className="mb-4">
                <label className="block mb-2">Name:</label>
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
                <label className="block mb-2">Phone Number:</label>
                <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                />
            </div>

            {/* Checkout Button */}
            <div className="flex justify-center">
                <button
                    type="button"
                    onClick={handleBooking} // Call handleBooking when the button is clicked
                    className="hover:scale-105 duration-300 my-10 py-2 px-6 rounded-full bg-white text-black border-2 border-primary text-xl"
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default Checkout;
