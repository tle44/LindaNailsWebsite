import React, { useState, useEffect } from "react";

const SelectDateTime = ({ onDateTimeChange }) => {
    // Function to format date and time
    const formatDateTime = (dateTime) => {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true 
        };
        return new Date(dateTime).toLocaleString("en-US", options);
    }; 

    // State to store the selected date and time
    const [selectedDateTime, setSelectedDateTime] = useState("");

    // Handler for input change event
    const handleDateTimeInput = (event) => {
        const dateTimeValue = event.target.value;
        const formattedDateTime = formatDateTime(dateTimeValue);
        setSelectedDateTime(formattedDateTime);
    };

    // Effect to call onDateTimeChange when selectedDateTime changes
    useEffect(() => {
        onDateTimeChange(selectedDateTime);
    }, [selectedDateTime, onDateTimeChange]);

    return (
        <div className="container mx-auto p-4 max-w-[500px]">
            <div className="flex flex-col items-center">
                {/* Label for date and time selection */}
                <label
                    className="text-2xl sm:text-3xl font-bold mb-4"
                    htmlFor="appointmentDateTime"
                >
                    Select Date & Time:
                </label>

                {/* Input field for date and time */}
                <input
                    type="datetime-local"
                    id="appointmentDateTime"
                    name="appointmentDateTime"
                    className="p-2 border border-gray-300 rounded-md text-md sm:text-lg focus:outline-none focus:ring focus:ring-third w-full"
                    onChange={handleDateTimeInput} 
                />
            </div>
        </div>
    );
};

export default SelectDateTime;
