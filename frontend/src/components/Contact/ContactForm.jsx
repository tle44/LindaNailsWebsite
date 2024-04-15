import { useState } from "react";
import {
    Button,
    Container,
    Input,
    Heading,
    useToast,
    FormControl,
    FormErrorMessage,
    Textarea,
} from "@chakra-ui/react";
import axios from "axios";

// Initial form values
const initValues = { name: "", email: "", subject: "", message: "" };

export default function ContactPage() {
    const toast = useToast(); // Initializing toast for displaying messages
    const [values, setValues] = useState(initValues); // State for form values
    const [isLoading, setIsLoading] = useState(false); // State for loading status
    const [touched, setTouched] = useState({}); // State to track touched fields

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    // Function to handle input blur events
    const onBlur = (e) => {
        const { name } = e.target;
        setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
    };

    // Function to check if the form is valid
    const isFormValid = () => {
        return (
            values.name.trim() !== "" &&
            values.email.trim() !== "" &&
            values.subject.trim() !== "" &&
            values.message.trim() !== ""
        );
    };

    // Function to handle form submission
    const onSubmit = async () => {
        setIsLoading(true); // Set loading state to true
        try {
            if (!isFormValid()) {
                throw new Error("Please fill in all fields");
            }

            // Sending POST request to the server
            const response = await axios.post("/api/contact", values, {
                headers: {
                    "Content-Type": "application/json",
                    // Add any additional headers as needed
                },
            });

            // Display success message
            toast({
                title: "Message sent.",
                status: "success",
                duration: 2000,
                position: "top",
            });

            setValues(initValues); // Reset form values
            setTouched({}); // Reset touched state
        } catch (error) {
            console.error("Error sending message:", error);
            // Display error message using toast
            toast({
                title: "Error",
                description: error.message,
                status: "error",
                duration: 2000,
                position: "top",
            });
        } finally {
            setIsLoading(false); // Set loading state to false
        }
    };

    return (
        <Container maxW="600px" mb={100} fontFamily="Cormorant">
            <Heading textAlign="center" fontFamily="Cormorant">
                Send a Message
            </Heading>

            <p className=" text-center text-sm text-gray-400 mb-5">
                Have other questions? Reach out to us by filling out the form
                below.
            </p>

            {/* Form controls */}
            <FormControl isInvalid={touched.name && !values.name} isRequired>
                <FormErrorMessage>Name is required</FormErrorMessage>
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={onBlur}
                    mb={5}
                />
            </FormControl>

            <FormControl isInvalid={touched.email && !values.email} isRequired>
                <FormErrorMessage>Email is required</FormErrorMessage>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={onBlur}
                    mb={5}
                />
            </FormControl>

            <FormControl
                isInvalid={touched.subject && !values.subject}
                isRequired
            >
                <FormErrorMessage>Subject is required</FormErrorMessage>
                <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={onBlur}
                    mb={5}
                />
            </FormControl>

            <FormControl
                isInvalid={touched.message && !values.message}
                isRequired
            >
                <FormErrorMessage>Message is required</FormErrorMessage>
                <Textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={onBlur}
                    mb={5}
                    rows={6}
                />
            </FormControl>

            {/* Submit button */}
            <Button
                colorScheme="primary"
                isLoading={isLoading}
                disabled={!isFormValid()}
                onClick={onSubmit}
                mx="auto"
                display="block"
                className="bg-primary hover:scale-105 duration-200 text-white py-2 px-4 shadow-xl rounded-full"
            >
                Submit
            </Button>
        </Container>
    );
}
