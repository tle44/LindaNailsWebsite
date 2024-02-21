import React from "react";
import Img from "../../assets/manicure2.jpeg";
import Img2 from "../../assets/pedicure1.jpeg";
import Img3 from "../../assets/service.jpeg";

// import StarRatings from "react-star-ratings";
const ServicesData = [
    {
        id: 1,
        img: Img,
        name: "Manicure",
        description:
            "Manicure service is a notable aspect in the beauty industry. Under the care of nail experts, your hands look attractive with healthy and lovely nails. Nowadays, among mushrooming nail salons, you will still feel a difference with our exceptional service",
    },
    {
        id: 2,
        img: Img2,
        name: "Pedicure",
        description:
            "Getting a pedicure is one of the best treatments for your feet. A pedicure makes your feet look cleaner and prettier, also keeps the nails trimmed and feet free. The cleansing action and moisturizing properties help you maintain baby feet, keeping your feet look gorgeous all the time.",
    },
    {
        id: 3,
        img: Img3,
        name: "Waxing",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
];
const Services = () => {
    return (
        <>
            <span id="services"></span>
            <div className="py-10 font-cormorant">
                <div className="container my-10">
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-md bg-clip-text text-transparent bg-primary">
                            Our Services
                        </p>
                        <h1 className="text-3xl sm:text-4xl font-bold">Services</h1>
                        <p className="text-sm text-gray-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Perspiciatis delectus architecto error
                            nesciunt,
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center ">
                        {ServicesData.map(({ id, img, name, description }) => {
                            return (
                                <div
                                    key={id}
                                    className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 p-4 shadow-xl"
                                >
                                    <div>
                                        <img
                                            src={img}
                                            alt=""
                                            className="mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 rounded-2xl "
                                        />
                                    </div>

                                    <div className="p-4 text-center -translate-y-8">
                                        <h1 className="text xl font-bold text-[20px]">
                                            {name}
                                        </h1>
                                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-3">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
