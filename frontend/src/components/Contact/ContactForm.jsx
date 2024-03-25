import { useState } from "react";
import {
    Button,
    Container,
    Input,
    Heading,
    Text,
    useToast,
    Textarea,
} from "@chakra-ui/react";

const initValues = { name: "", email: "", subject: "", message: "" };

export default function ContactPage() {
    const toast = useToast();
    const [values, setValues] = useState(initValues);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const onBlur = (e) => {
        const { name } = e.target;
        setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
    };

    const isFormValid = () => {
        return (
            values.name.trim() !== "" &&
            values.email.trim() !== "" &&
            values.subject.trim() !== "" &&
            values.message.trim() !== ""
        );
    };

    const onSubmit = async () => {
        setIsLoading(true);
        try {
            if (!isFormValid()) {
                throw new Error("Please fill in all fields");
            }

            const response = await fetch("http://localhost:5175/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            if (!response.ok) {
                throw new Error(
                    `Failed to send message: ${response.statusText}`
                );
            }
            await response.json();
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
            setError(error.message);
        } finally {
            setIsLoading(false);
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

            <Input
                type="text"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
                mb={5}
                isInvalid={touched.name && !values.name}
            />

            <Input
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}
                mb={5}
                isInvalid={touched.email && !values.email}
            />

            <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={onBlur}
                mb={5}
                isInvalid={touched.subject && !values.subject}
            />

            <Textarea
                type="text"
                name="message"
                placeholder="Message"
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}
                mb={5}
                isInvalid={touched.message && !values.message}
            />

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
