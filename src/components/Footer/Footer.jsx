import React, { useState } from "react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-primary/80 dark:bg-gray-950 font-cormorant ">
            <section className="max-w-[1200px] mx-auto">
                <div className=" grid md:grid-cols-3 py-10">
                    <div className=" py-8 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                            {/* <img src={footerLogo} alt="Logo" className="max-w-[50px]" /> */}
                            Linda's Nails
                        </h1>
                        <br />
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>301 St Lawrence St, Gonzales, TX 78629</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <FaMobileAlt />
                            <p>+1 (830) 214-5667</p>
                        </div>
                        {/* Social Handle */}
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaInstagram className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaFacebook className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-3xl" />
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 col-span-2 md:pl-10 ">
                        <div className="">
                            <div className="py-8 px-4 ">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                    Opening Hours
                                </h1>
                                <ul className={`flex flex-col gap-3`}>
                                    <li className="cursor-pointer">
                                        Mon – Sat: 10:00 AM – 7:00 PM
                                    </li>
                                    <li className="cursor-pointer">
                                        Sunday: Closed
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <div className="py-8 px-4 ">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                    Support
                                </h1>
                                <ul className="flex flex-col gap-3 ">
                                    <li className="cursor-pointer">Home</li>
                                    <li className="cursor-pointer">
                                        Our Services
                                    </li>
                                    <li className="cursor-pointer">Gallery</li>
                                    <li className="cursor-pointer">
                                        Contact Us
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved || Made with ❤️ by Dilshad
          </div>
        </div> */}
            </section>
        </div>
    );
};

export default Footer;
