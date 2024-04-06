import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-primary/80 dark:bg-gray-950 font-cormorant">
            <section className="max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-3 py-10">
                    {/* Footer section: About */}
                    <div className="py-8 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                            Linda's Nails
                        </h1>
                        <br />
                        {/* Address */}
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>301 St Lawrence St, Gonzales, TX 78629</p>
                        </div>
                        {/* Phone number */}
                        <div className="flex items-center gap-3 mt-3">
                            <FaMobileAlt />
                            <p>+1 (830) 214-5667</p>
                        </div>
                        {/* Social media links */}
                        <div className="flex items-center gap-3 mt-6">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="text-3xl" />
                            </a>
                            <a
                                href="https://www.facebook.com/pages/*Linda's%20Nails*/206362322718365/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className="text-3xl" />
                            </a>
                        </div>
                    </div>
                    {/* Footer section: Opening Hours and Support */}
                    <div className="grid grid-cols-2 col-span-2 md:pl-10">
                        {/* Opening Hours */}
                        <div className="">
                            <div className="py-8 px-4">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                    Opening Hours
                                </h1>
                                <ul className={`flex flex-col gap-3`}>
                                    <li className="cursor-pointer">
                                        Mon – Sat: 9:30 AM – 6:00 PM
                                    </li>
                                    <li className="cursor-pointer">
                                        Sunday: Closed
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Support links */}
                        <div className="">
                            <div className="py-8 px-4">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                    Support
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    <li className="cursor-pointer">
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li className="cursor-pointer">
                                        <NavLink to="/service">
                                            Our Services
                                        </NavLink>
                                    </li>
                                    <li className="cursor-pointer">
                                        <NavLink to="/gallery">Gallery</NavLink>
                                    </li>
                                    <li className="cursor-pointer">
                                        <NavLink to="/contact">
                                            Contact Us
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
