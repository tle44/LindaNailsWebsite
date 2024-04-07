import { useState } from "react";
import {
    Button,
    Container,
    Input,
    Heading,
    Text,
    useToast,
    FormControl,
    FormErrorMessage,
    Textarea,
} from "@chakra-ui/react"; // Importing necessary components from Chakra UI
import axios from "axios"; // Importing axios for making HTTP requests

// Initial form values
const initValues = { name: "", email: "", subject: "", message: "" };

export default function ContactPage() {
    const toast = useToast(); // Initializing toast for displaying messages
    const [values, setValues] = useState(initValues); // State for form values
    const [isLoading, setIsLoading] = useState(false); // State for loading status
    const [error, setError] = useState(""); // State for error messages
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
            const response = await axios.post(
                "http://http://3.139.66.15/api/contact",
                values
            );

            // Display success message
            toast({
                title: "Message sent.",
                status: "success",
                duration: 2000,
                position: "top",
            });

            setValues(initValues); // Reset form values
            setError(""); // Clear any previous error
            setTouched({}); // Reset touched state
        } catch (error) {
            console.error("Error sending message:", error);
            setError(error.message); // Set error message
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
        <Container maxW="450px" pb={100} fontFamily="Cormorant">
            <Heading mb={5} textAlign="center" fontFamily="Cormorant">
                Send a Message
            </Heading>
            {error && (
                <Text color="red.300" my={4} fontSize="xl">
                    {error}
                </Text>
            )}

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
