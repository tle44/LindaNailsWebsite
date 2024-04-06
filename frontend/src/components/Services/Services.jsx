import React from "react";
import Img from "../../assets/service1.jpeg";
import Img2 from "../../assets/service2.jpeg";
import Img3 from "../../assets/service3.jpeg";

const servicesData = [
    {
        id: 1,
        img: Img,
        name: "Manicure",
        description:
            "Manicure services stand out as a prominent feature in the beauty industry. With the expertise of nail professionals, your hands are adorned with attractive, healthy nails. Despite the proliferation of nail salons, our exceptional service sets us apart, ensuring you experience a noticeable difference.",
    },
    {
        id: 2,
        img: Img2,
        name: "Pedicure",
        description:
            "Indulging in a pedicure ranks among the finest treatments for your feet. Not only does it enhance the cleanliness and appearance of your feet, but it also ensures neatly trimmed nails and liberated feet. The cleansing process, coupled with moisturizing properties, works wonders in preserving a soft, supple texture akin to baby feet, ensuring your feet radiate beauty consistently.",
    },
    {
        id: 3,
        img: Img3,
        name: "Waxing",
        description:
            "Waxing services are a cornerstone of the beauty industry, offering a transformative experience. Entrust your skin to our skilled professionals and revel in the smooth, radiant results. Amidst a myriad of waxing options, our meticulous attention to detail and superior service ensures an unparalleled experience, leaving you feeling confident and refreshed.",
    },
];

const Services = () => {
    return (
        <div className="py-10 font-cormorant">
            <div className="container my-10">
                <div className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-md bg-clip-text text-transparent bg-primary">
                        Our Services
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        Services
                    </h1>
                    <p className="text-sm text-gray-400">
                        From relaxing spa experiences to precision beauty
                        services, we offer a range of options to suit your
                        needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                    {servicesData.map(({ id, img, name, description }) => (
                        <div
                            key={id}
                            className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 p-4 shadow-xl"
                        >
                            <div>
                                <img
                                    src={img}
                                    alt={name}
                                    className="mx-auto block -translate-y-14 duration-300 rounded-2xl"
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
