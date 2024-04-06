import React from "react";

import { GrLocation } from "react-icons/gr";
import { TbPhoneCall } from "react-icons/tb";

import { TbClockHour9 } from "react-icons/tb";

const ContactInfoComponent = () => {
    return (
        <div className="py-10 font-cormorant">
            <div className="container my-10">
                <div className="flex flex-col justify-center items-center gap-6 sm:pt-0">
                    {/* Title and description */}
                    <div className="text-center mb-10 max-w-[400px] mx-auto">
                        <p className="text-md bg-clip-text text-transparent bg-primary">
                            Our Contact
                        </p>
                        <h1 className="text-3xl sm:text-4xl font-bold">
                            Contact
                        </h1>
                        <p className="text-sm text-gray-400">
                            Interested in our spa services? We want your spa
                            experience to be a memorable one.
                        </p>
                    </div>

                    {/* Contact information cards */}
                    <div className="flex flex-wrap">
                        {/* Address */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 px-2">
                            <div className="w-40 mx-auto flex flex-col items-center gap-4">
                                <GrLocation className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                                <div className="text-center">
                                    301 St Lawrence St, Gonzales, TX 78629
                                </div>
                            </div>
                        </div>
                        {/* Phone number */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 px-2">
                            <div className="w-40 mx-auto flex flex-col items-center gap-4">
                                <TbPhoneCall className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                                <div className="text-center">
                                    +1 (830) 214-5667
                                </div>
                            </div>
                        </div>
                        {/* Business hours */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 px-2">
                            <div className="w-40 mx-auto flex flex-col items-center gap-4">
                                <TbClockHour9 className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                                <div className="text-center">
                                    Monday - Saturday 9:30 AM - 6:00 PM Sunday:
                                    Closed
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* "Book Now" button */}
                    <div>
                        <button className="bg-primary hover:scale-105 duration-200 text-white py-2 px-4 shadow-xl rounded-full">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfoComponent;
