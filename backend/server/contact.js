// Importing required modules
import express from "express";
import nodemailer from "nodemailer";

// Creating express router
const router = express.Router();

// Email credentials
const email = "mindylee1202@gmail.com";
const pass = "bdtchnztxuodtnka";

// Creating nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass: pass,
    },
});

// Fields for contact message
const CONTACT_MESSAGE_FIELDS = {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
};

// Function to generate email content
const generateEmailContent = (data) => {
    // Generating plain text content
    const stringData = Object.entries(data).reduce(
        (str, [key, val]) =>
            (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
        ""
    );
    // Generating HTML content
    const htmlData = Object.entries(data).reduce((str, [key, val]) => {
        return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
    }, "");

    // Returning email content
    return {
        text: stringData,
        html: `<!DOCTYPE html><html> <!-- HTML email content --> </html>`,
    };
};

// Route handler for POST requests to /api/contact
router.post("/", (req, res) => {
    // Extracting form data from request body
    const { name, email, subject, message } = req.body;

   

    // Email options
    const mailOptions = {
        from: email,
        to: "mindylee1202@gmail.com",
        ...generateEmailContent({ name, email, subject, message }),
        subject: subject,
    };

    // Sending email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            // Error handling
            console.error("Error sending email:", error);
            res.status(500).json({ message: "Failed to send email" });
        } else {
            // Success handling
            console.log("Email sent:", info.messageId);
            res.status(200).json({
                message: "Contact form submitted successfully",
            });
        }
    });
});

// Exporting router
export default router;
