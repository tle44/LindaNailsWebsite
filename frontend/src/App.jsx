import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Service from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import AnnouncementBanner from "./components/Navbar/AnnouncementBanner";

const App = () => {
    return (
        <>
            <AnnouncementBanner/> 
            <Navbar />
            <Hero />
            <Service />
            <AboutUs />
            <Testimonial />
            <Footer />
        </>
    );
};

export default App;
