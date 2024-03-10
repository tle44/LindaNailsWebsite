import React from "react";
import MainLayout from "../layout/MainLayout";
import Booking from "../components/Booking/Booking";
const BookingPage = () => {
    return (
        <MainLayout>
            <div className="container font-cormorant">
                <div className="text-center max-w-[400px] mx-auto my-20">
                    <p className="text-md bg-clip-text text-transparent bg-primary">
                        Linda's Nails Booking Online
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-bold">Booking</h1>
                    <p className="text-sm text-gray-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Perspiciatis delectus architecto error nesciunt,
                    </p>
                </div>

                <Booking />
            </div>
        </MainLayout>
    );
};

export default BookingPage;
