import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import contactRouter from "./contact.js";
import bookingRouter from "./booking.js";

// Creating an Express application
const app = express();

// Resolve the directory for serving static files
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const staticDir = path.join(__dirname, "../dist");

// Serve static files from the dist directory
app.use(express.static(staticDir));

// Parse JSON request body
app.use(express.json());

// Define route handler for contact form
app.use("/api/contact", contactRouter);

// Define route handler for booking
app.use("/api/booking", bookingRouter);

// Serve index.html for any other routes
app.get("*", (req, res) => {
    res.sendFile(path.join(staticDir, "index.html"));
});

const PORT = process.env.PORT || 5175;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
