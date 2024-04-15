import React from "react";
import MainLayout from "../layout/MainLayout";
import HeadingLayout from "../layout/HeadingLayout";
import Booking from "../components/Booking/Booking";
const BookingPage = () => {
    return (
        <MainLayout>
            <HeadingLayout
                title="Linda's Nails Booking Online"
                subtitle="Booking"
                content="Discover the convenience of hassle-free scheduling for your pedicure and manicure appointments. Book your sessions instantly, anytime, from anywhere."
            />
            <Booking />
        </MainLayout>
    );
};

export default BookingPage;
