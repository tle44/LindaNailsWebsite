import React from "react";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
const AnnouncementBanner = () => {
    return (
        <div className="bg-primary text-white flex items-center justify-between font-cormorant font-bold">
            <Marquee speed={60} gradient={false} pauseOnHover>
                <div className="flex items-center">
                    <span className="mr-8">
                        Exciting News! Enjoy 10% Off from Monday to Thursday!
                    </span>
                    <span className="mr-8">
                        Limited Time Offer: Get 10% Off from Monday to Thursday!
                    </span>
                </div>
                <div className="flex items-center">
                    <span className="mr-8">
                        Don't Miss Out! Avail 10% Off from Monday to Thursday!
                    </span>
                    <span className="mr-8">
                        Special Deal: 10% Off from Monday to Thursday!
                    </span>
                </div>

                <div>
                    <NavLink to="/booking">
                        <button className="px-2 py-1 bg-white text-black font-bold rounded transition duration-300 my-2">
                            Book Now
                        </button>
                    </NavLink>
                </div>
            </Marquee>
        </div>
    );
};

export default AnnouncementBanner;
