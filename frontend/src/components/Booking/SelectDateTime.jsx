import React, { useState, useEffect } from "react";

const SelectDateTime = ({ onDateTimeChange }) => {
    const formatDateTime = (dateTime) => {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true // Include AM/PM
        };
        return new Date(dateTime).toLocaleString("en-US", options);
    }; 

    const [selectedDateTime, setSelectedDateTime] = useState("");

    const handleDateTimeInput = (event) => {
        const dateTimeValue = event.target.value;
        const formattedDateTime = formatDateTime(dateTimeValue);
        setSelectedDateTime(formattedDateTime);
    };

    useEffect(() => {
        // Call onDateTimeChange when selectedDateTime changes
        onDateTimeChange(selectedDateTime);
    }, [selectedDateTime, onDateTimeChange]);

    return (
        <div className="container mx-auto p-4 max-w-[500px]">
            <div className="flex flex-col items-center">
                <label
                    className="text-2xl sm:text-3xl font-bold mb-4"
                    htmlFor="appointmentDateTime"
                >
                    Select Date & Time:
                </label>

                <input
                    type="datetime-local"
                    id="appointmentDateTime"
                    name="appointmentDateTime"
                    className="p-2 border border-gray-300 rounded-md text-md sm:text-lg focus:outline-none focus:ring focus:ring-third w-full"
                    onChange={handleDateTimeInput} // Handle input change event
                />
            </div>
        </div>
    );
};

export default SelectDateTime;
