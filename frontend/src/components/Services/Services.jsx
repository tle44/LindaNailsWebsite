import React from "react";
import Img from "../../assets/service1.jpeg";
import Img2 from "../../assets/service2.jpeg";
import Img3 from "../../assets/service3.jpeg";
import HeadingLayout from "../../layout/HeadingLayout";

const servicesData = [
    {
        id: 1,
        img: Img,
        name: "Manicure",
        description:
            "We provide your hands and feet with the nurturing, attentive care they deserve. Leave with refreshed, smooth hands and feet accented with lasting color.",
    },
    {
        id: 2,
        img: Img2,
        name: "Pedicure",
        description:
            "Indulge in a pedicure for cleaner, well-groomed feet. Enjoy neatly trimmed nails and moisturized, soft skin for consistently beautiful feet.",
    },
    {
        id: 3,
        img: Img3,
        name: "Waxing",
        description:
            "Experience the transformative benefits of waxing. Our skilled professionals deliver smooth, radiant results, leaving you confident and refreshed.",
    },
];

const Services = () => {
    return (
        <div className="py-10 font-cormorant">
            <div className="container my-10">
                <HeadingLayout
                    title="         Our Services"
                    subtitle="Services"
                    content="     From relaxing spa experiences to precision beauty
                    services, we offer a range of options to suit your
                    needs."
                />

                <div className=" mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                    {servicesData.map(({ id, img, name, description }) => (
                        <div
                            key={id}
                            className="sm: m-2  max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 p-4 shadow-xl"
                        >
                            <div>
                                <img
                                    src={img}
                                    alt={name}
                                    className="mx-auto block -translate-y-14 duration-300 rounded-2xl"
                                />
                            </div>
                            <div className="p-2 text-center -translate-y-8">
                                <h1 className="text xl font-bold text-[20px]">
                                    {name}
                                </h1>
                                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-4">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
