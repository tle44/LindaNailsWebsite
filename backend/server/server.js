// Importing required modules
import express from "express";
import contactRouter from "./contact.js"; // Import contact router
import bookingRouter from "./booking.js"; // Import booking router

// Creating an Express application
const app = express();

app.use(express.static('../dist'))

// Parse JSON request body
app.use(express.json());



// Define route handler for contact form
app.use("/api/contact", contactRouter);

// Define route handler for booking
app.use("/api/booking", bookingRouter);

// Start the server
const PORT = process.env.PORT || 5175; // Define the port to listen on
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log server start-up message
});
