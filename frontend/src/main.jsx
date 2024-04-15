import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import GalleryPage from "./pages/GalleryPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/gallery",
        element: <GalleryPage />,
    },
    {
        path: "/service",
        element: <ServicePage />,
    },
    {
        path: "/booking",
        element: <BookingPage />,
    },
    {
        path: "/contact",
        element: <ContactPage />,
    },
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
);
