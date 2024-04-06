// Importing required modules
import express from "express";
import cors from "cors";
import contactRouter from "./contact.js"; // Import contact router
import bookingRouter from "./booking.js"; // Import booking router
import path from "path"; // Import path module

// Creating an Express application
const app = express();

const __filename = new URL(import.meta.url).pathname;
const _dirname = path.dirname(__filename);
const buildPath = path.join(_dirname, "../../frontend/dist");

app.use(express.static(buildPath));

app.get("/*", function (req, res) {
    res.sendFile(
        path.join(_dirname, "../../frontend/dist/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    );
});

// Enable CORS for all requests
app.use(cors());

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
