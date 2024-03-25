import React, { useState, useEffect } from "react";
import technicians from "../../JSON/technicians.json";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";

const SelectTechnician = ({ onTechnicianSelect }) => {
    const [selectedTechnician, setSelectedTechnician] = useState(null);

    // Trigger the onTechnicianSelect callback whenever selectedTechnician changes
    useEffect(() => {
        if (selectedTechnician !== null) {
            onTechnicianSelect(selectedTechnician);
        }
    }, [selectedTechnician, onTechnicianSelect]);

    const handleTechnicianSelect = (technician) => {
        setSelectedTechnician(technician); // Update selected technician
    };

    return (
    
            <div className="container mx-auto  p-4 max-w-[500px] ">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        Select Technician
                    </h2>
                    <div className="space-y-4 w-full ">
                        {technicians.map((technician, index) => (
                            <div
                                key={index}
                                className={`bg-white text-primary p-6 flex items-center justify-between gap-5 font-bold text-md sm:text-lg rounded-lg tracking-wider border border-transparent duration-300 ${
                                    selectedTechnician === technician
                                        ? "border-primary bg-orange-200" // Change background color when selected
                                        : ""
                                }`}
                                onClick={() =>
                                    handleTechnicianSelect(technician)
                                }
                            >
                                <div>
                                    <h3 className="font-bold">
                                        {technician.name}
                                    </h3>
                                    <p>{technician.specialization}</p>
                                </div>
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
