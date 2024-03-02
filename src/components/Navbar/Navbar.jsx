import React from "react";
// import Logo from "../../assets/2.png";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="py-3 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 font-cormorant">
                <div className="container py-3 sm:py-0 ">
                    <div className="flex justify-between items-center gap-2 text-2xl sm:text-3xl">
                        <div>
                            <a href="#" className="flex items-center gap text-[35px]">
                                {/* <img
                                    src={Logo}
                                    alt="Foodie Zone"
                                    className="w-20"
                                /> */}
                                Linda's Nails
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <ul className="hidden sm:flex gap-4 ">
                                <li>
                                    <Link to="/"
                                        className="inline-block py-4 px-4 hover:text-primary text-[22px]"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/gallery"
                                        className="inline-block py-4 px-4 hover:text-primary text-[22px]"
                                    >
                                        Gallery
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/service"
                                        className="inline-block py-4 px-4 hover:text-primary text-[22px]"
                                    >
                                        Our service
                                    </Link>
                                </li>
                            </ul>

                            <button>
                                <i className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full flex items-center gap-2 text-[22px]">
                                    Book now{" "}
                                    {/* <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" /> */}
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
