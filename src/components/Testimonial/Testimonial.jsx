import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Angie Horner",
    text: "I always get a great experience at Linda’s nails, great customer service and friendly atmosphere. My nails are always looking beautiful when I leave, and great massage with the pedicure!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Melody Windham",
    text: "I travel all over Texas and I have to say this was by far my best experience in year! They are very nice and accommodating. Loved my nails! It was amazing!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Marc Maine",
    text: "We came down from New England for a wedding and needed a last minute eyebrow wax.  The wait was short and the experience was awesome.  I highly recommend this place to anyone.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10 mb-20 font-cormorant">
        <div className="container">
          <div className="text-center mb-8 max-w-[400px] mx-auto">

          
            <p className="text-md bg-clip-text text-transparent bg-primary">
              What our customers say
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold">Testimonial</h1>
            {/* <p className="text-sm text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p> */}
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[700px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className="my-6">
                    <div key={data.id} className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl bg-primary/10 relative">
                      <img  className="rounded-full block mx-auto" src={data.img} alt=""/>
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;