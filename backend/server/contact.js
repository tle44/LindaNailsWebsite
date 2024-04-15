import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const router = express.Router();

const email = process.env.EMAIL;
const pass = process.env.PASSWORD;

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
        // html: `<!DOCTYPE html><html> <!-- HTML email content --> </html>`,

        html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Contact Message</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
    };
};

// Route handler for POST requests to /api/contact
router.post("/", (req, res) => {
    // Extracting form data from request body
    const { name, email, subject, message } = req.body;

    // Email options
    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        ...generateEmailContent({ name, email, subject, message }),
        subject: "New Contact Message",
    };

    // Sending email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            // Error handling
            res.status(500).json({ message: "Failed to send email" });
        } else {
            // Success handling
            res.status(200).json({
                message: "Contact form submitted successfully",
            });
        }
    });
});

// Exporting router
export default router;
