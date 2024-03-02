import React from "react";
import BiryaniImg from "../../assets/aboutUs.png";
// import Vector from "../../assets/vector3.png";
// import { GrSecure } from "react-icons/gr";
// import { IoFastFood } from "react-icons/io5";
// import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
    const bgImage = {
        backgroundImage: `url(${BiryaniImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
    };
    return (
        <>
            <div className="min-h-[550px] font-cormorant">
                <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
                    <div
                        data-aos="slide-up"
                        data-aos-duration="300"
                        className="container"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Image section */}
                            <div>
                                <img
                                    src={BiryaniImg}
                                    alt="biryani img"
                                    className="max-w-[430px] w-full mx-auto filter drop-shadow-[0px 0px 12px rgba(0,0,0,0.5)] rounded-3xl"
                                />
                            </div>
                            {/* text content section */}
                            <div className="flex flex-col justify-center gap-6 sm:pt-0">
                                <h1 className="text-3xl sm:text-4xl font-bold">
                                    About Us
                                </h1>
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
                                {/* <div className="flex gap-6">
                                    <div>
                                        <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                                    </div>
                                    <div>
                                        <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                                    </div>
                                    <div>
                                        <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                                    </div>
                                </div> */}
                                <div>
                                    <button className="bg-primary hover:scale-105 duration-200 text-white py-2 px-4 shadow-xl rounded-full">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
