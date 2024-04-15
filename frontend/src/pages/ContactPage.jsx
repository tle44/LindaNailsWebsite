import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import HeadingLayout from "../layout/HeadingLayout";
import ContactInfoComponent from "../components/Contact/ContactInfoComponent";
import ContactForm from "../components/Contact/ContactForm";
import CommonQuestions from "../components/Contact/CommonQuestions";
export default function ContactPage() {
    return (
        <MainLayout>
               <HeadingLayout
                title=" Our Contact"
                subtitle="     Contact"
                content="  Interested in our spa services? We want your spa
                experience to be a memorable one."
            />

                
            <ContactInfoComponent />
            <CommonQuestions />
            <ContactForm />
       
        </MainLayout>
    );
}
