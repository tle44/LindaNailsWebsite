import React from "react";
import MainLayout from "../layout/MainLayout";
import HeadingLayout from "../layout/HeadingLayout";
import AboutUs from "../components/AboutUs/AboutUs";
import Team from "../components/AboutUs/Team";

const AboutUsPage = () => {
    return (
        <MainLayout>
            <Team></Team>
            <AboutUs></AboutUs>
        </MainLayout>
    );
};

export default AboutUsPage;
