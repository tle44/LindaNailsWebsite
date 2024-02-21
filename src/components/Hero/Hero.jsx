// export default Hero;
import React from "react";
import background from "../../assets/background.jpeg";

const Hero = () => {
    const bgImage = {
    
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.05)), url(${background})`,

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
    };

    return (
        <>
            <div
                className="min-h-[550px] sm:min-h-[700px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 font-cormorant"
                style={bgImage}
            >
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* text content section */}
                        <div
                            data-aos="zoom-out"
                            data-aos-duration="400"
                            data-aos-once="true"
                            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
                        >
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                Welcome{" "}
                                <span class="bg-clip-text text-transparent bg-primary">
                                    Linda
                                </span>{" "}
                                Nails & Spa
                            </h1>
                            <p className="text-sm ">
                            We always try our best to improve NAILS & PEDICURE and make sure you are happy and satisfied with our services. Come with us and enjoy yourself!
                            </p>
                            <div>
                                <button className="bg-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
