import React from "react";
import BiryaniImg from "../../assets/aboutUs.png";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
 
    return (
        <>
            {/* Banner container */}
            <div className="min-h-[550px] font-cormorant">
                <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
                    {/* Main content container */}
                    <div
                        data-aos="slide-up"
                        data-aos-duration="300"
                        className="container"
                    >
                        {/* Grid layout for image and text */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Image section */}
                            <div>
                                <img
                                    src={BiryaniImg}
                                    alt="biryani img"
                                    className="max-w-[430px] w-full mx-auto filter drop-shadow-[0px 0px 12px rgba(0,0,0,0.5)] rounded-3xl"
                                />
                            </div>
                            {/* Text section */}
                            <div className="flex flex-col justify-center gap-6 sm:pt-0">
                                {/* Title */}
                                <h1 className="text-3xl sm:text-4xl font-bold">
                                    About Us
                                </h1>
                                {/* Description */}
                                <p className="text-sm text-gray-500 tracking-wide leading-5">
                                    Welcome to Linda's Nails at 301 St Lawrence
                                    St, Gonzales, TX! We specialize in
                                    top-quality nail services, offering
                                    meticulous manicures, stunning artificial
                                    nails, and more. Our skilled team is
                                    dedicated to enhancing your natural beauty.
                                    <br />
                                    <br />
                                    At Linda's Nails, we prioritize using
                                    premium products to ensure the best results
                                    while keeping our services affordable.
                                    Choose us for a transformative beauty
                                    experience that's both indulgent and
                                    budget-friendly. Thank you for making
                                    Linda's Nails your destination for
                                    unparalleled nail care in Gonzales.
                                </p>
                                {/* Button for booking */}
                                <div>
                                    <NavLink to="/booking">
                                        <button className="bg-primary hover:scale-105 duration-200 text-white py-2 px-4 shadow-xl rounded-full">
                                            Book Now
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
