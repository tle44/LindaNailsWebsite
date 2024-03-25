import express from "express";
import cors from "cors";
import contactRouter from "./contact.js"; // Import contact router
import bookingRouter from "./booking.js"; // Import booking router

const app = express();

// Enable CORS for all requests
app.use(cors());

// Parse JSON request body
app.use(express.json());

// Define route handler for contact form
app.use("/api/contact", contactRouter);

// Define route handler for booking
app.use("/api/booking", bookingRouter);

// Start the server
const PORT = process.env.PORT || 5175;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
