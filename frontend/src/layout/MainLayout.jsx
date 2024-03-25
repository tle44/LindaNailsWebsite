import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            <div>{children}</div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
