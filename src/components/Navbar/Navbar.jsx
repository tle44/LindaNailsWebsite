import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const content = (
        <>
            <div className="lg:hidden flex justify-center w-full bg-white transition">
                <ul className="text-center text-xl p-20">
                    <Link to="/">
                        <li className="my-4 py-4 transition duration-300 hover:bg-third hover:rounded">
                            Home
                        </li>
                    </Link>
                    <Link to="/gallery">
                        <li className="my-4 py-4 transition duration-300 hover:bg-third hover:rounded">
                            Gallery
                        </li>
                    </Link>
                    <Link to="/service">
                        <li className="my-4 py-4 transition duration-300 hover:bg-third hover:rounded">
                            Our Service
                        </li>
                    </Link>
                    <button>
                        <i className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full flex items-center gap-2 text-[22px]">
                            Book now
                        </i>
                    </button>
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
                            <Link
                                to="/"
                                className="flex items-center text-[35px]"
                            >
                                Linda's Nails
                            </Link>
                        </div>
                        <div className="flex items-center gap-4">
                            <ul className="hidden sm:flex gap-4 ">
                                <li>
                                    <Link
                                        to="/"
                                        className="inline-block py-4 px-4 hover:text-primary text-[22px]"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/gallery"
                                        className="inline-block py-4 px-4 hover:text-primary text-[22px]"
                                    >
                                        Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/service"
                                        className="inline-block py-4 px-4 hover:text-primary text-[22px]"
                                    >
                                        Our service
                                    </Link>
                                </li>
                            </ul>

                            <button>
                                <i className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full flex items-center gap-2 text-[22px]">
                                    Book now
                                </i>
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
