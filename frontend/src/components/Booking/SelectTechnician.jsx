import React, { useState, useEffect } from "react";
import technicians from "../../JSON/technicians.json"; 
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";

const SelectTechnician = ({ onTechnicianSelect }) => {
    const [selectedTechnician, setSelectedTechnician] = useState(null); // State to track selected technician

    // Trigger the onTechnicianSelect callback whenever selectedTechnician changes
    useEffect(() => {
        if (selectedTechnician !== null) {
            onTechnicianSelect(selectedTechnician);
        }
    }, [selectedTechnician, onTechnicianSelect]);

    // Function to handle technician selection
    const handleTechnicianSelect = (technician) => {
        // Toggle the selection
        if (selectedTechnician === technician) {
            setSelectedTechnician(null); // Unselect the technician
        } else {
            setSelectedTechnician(technician); // Update selected technician
        }
    };

    return (
        <div className="container mx-auto  p-4 max-w-[500px] ">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Select Technician
                </h2>
                <div className="space-y-4 w-full ">
                    {/* Display list of technicians */}
                    {technicians.map((technician, index) => (
                        <div
                            key={index}
                            className="bg-white text-primary p-6 flex items-center justify-between gap-5 font-bold text-md sm:text-lg rounded-lg tracking-wider border border-transparent duration-300"
                            onClick={() => handleTechnicianSelect(technician)}
                        >
                            <h3 className="font-bold">{technician.name}</h3>

                            <button className="">
                                {selectedTechnician === technician ? (
                                    <FaCheckSquare />
                                ) : (
                                    <FaRegSquare />
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SelectTechnician;
