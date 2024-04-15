import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const location = useLocation();

    const isLinkActive = (path) => location.pathname === path;
    const content = (
        <>
            <div className="lg:hidden flex justify-center w-full bg-white transition">
                <ul className="text-center text-xl p-20">
                    <li>
                        <NavLink
                            to="/"
                            exact
                            activeclassname="hover:bg-third hover:rounded"
                        >
                            <div
                                className={`my-4 py-4 transition duration-300 ${
                                    isLinkActive("/") ? "bg-third rounded" : ""
                                }`}
                            >
                                Home
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/gallery"
                            activeclassname="hover:bg-third hover:rounded"
                        >
                            <div
                                className={`my-4 py-4 transition duration-300 ${
                                    isLinkActive("/gallery")
                                        ? "bg-third rounded"
                                        : ""
                                }`}
                            >
                                Gallery
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/service"
                            activeclassname="hover:bg-third hover:rounded"
                        >
                            <div
                                className={`my-4 py-4 transition duration-300 ${
                                    isLinkActive("/service")
                                        ? "bg-third rounded"
                                        : ""
                                }`}
                            >
                                Our Service
                            </div>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contact"
                            activeclassname="hover:bg-third hover:rounded"
                        >
                            <div
                                className={`my-4 py-4 transition duration-300 ${
                                    isLinkActive("/contact")
                                        ? "bg-third rounded"
                                        : ""
                                }`}
                            >
                                Contact Us
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/booking"
                            activeclassname="hover:bg-third hover:rounded"
                        >
                            <div
                                className={`bg-primary hover:scale-105 duration-300 mt-5 py-1 px-4 rounded-full flex items-center gap-2 text-[22px] ${
                                    isLinkActive("/booking")
                                        ? " bg-white text-black border-2 border-primary"
                                        : "text-white"
                                }`}
                            >
                                Book now
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
    return (
        <>
            <div className="py-3 shadow-md bg-white duration-200 font-cormorant">
                <div className="container py-3 sm:py-0 mx-auto">
                    <div className="flex justify-between items-center gap-2 text-2xl sm:text-3xl">
                        <div>
                            <NavLink
                                to="/"
                                className="flex items-center text-[35px]"
                                activeclassname="hover:bg-third hover:rounded"
                            >
                                Linda's Nails
                            </NavLink>
                        </div>
                        <div className="flex items-center gap-4">
                            <ul className="hidden sm:flex gap-4">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={`inline-block py-4 px-4 hover:text-primary text-[22px] ${
                                            isLinkActive("/")
                                                ? "text-third"
                                                : ""
                                        }`}
                                        activeclassname="hover:bg-third hover:rounded"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/gallery"
                                        className={`inline-block py-4 px-4 hover:text-primary text-[22px] ${
                                            isLinkActive("/gallery")
                                                ? "text-third"
                                                : ""
                                        }`}
                                        activeclassname="hover:bg-third hover:rounded"
                                    >
                                        Gallery
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/service"
                                        className={`inline-block py-4 px-4 hover:text-primary text-[22px] ${
                                            isLinkActive("/service")
                                                ? "text-third"
                                                : ""
                                        }`}
                                        activeclassname="hover:bg-third hover:rounded"
                                    >
                                        Our service
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={`inline-block py-4 px-4 hover:text-primary text-[22px] ${
                                            isLinkActive("/contact")
                                                ? "text-third"
                                                : ""
                                        }`}
                                        activeclassname="hover:bg-third hover:rounded"
                                    >
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>

                            <button>
                                <NavLink
                                    to="/booking"
                                    activeclassname="hover:bg-third hover:rounded"
                                >
                                    <i
                                        className={`bg-primary hover:scale-105 duration-300 py-1 px-4 rounded-full flex items-center gap-2 text-[22px] ${
                                            isLinkActive("/booking")
                                                ? "bg-white text-black border-2 border-primary"
                                                : "text-white"
                                        }`}
                                    >
                                        Book now
                                    </i>
                                </NavLink>
                            </button>
                        </div>
                        <button
                            className="block sm:hidden transition "
                            onClick={handleClick}
                        >
                            {click ? <FaTimes /> : <CiMenuFries />}
                        </button>
                    </div>

                    <div>{click && content}</div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
