import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import ContactInfoComponent from "../components/Contact/ContactInfoComponent";
import ContactForm from "../components/Contact/ContactForm";
export default function ContactPage() {
    return (
        <MainLayout>
            <ContactInfoComponent/>
            <ContactForm/>
        </MainLayout>
    );
}
