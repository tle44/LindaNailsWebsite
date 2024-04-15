import React, { useState } from "react";
import faqData from "../../JSON/faqData.json";

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container font-cormorant">
            <div className="max-w-[550px] md:w-3/4 mx-auto">
                {/* FAQ */}
                <div className="rounded-lg shadow-md mb-4">
                    <div
                        className="cursor-pointer py-3 px-6 border-b border-gray-200"
                        onClick={toggleAnswer}
                    >
                        <span className="font-semibold text-lg">
                            {question}
                        </span>
                        <span className="float-right">
                            {isOpen ? "-" : "+"}
                        </span>
                    </div>
                    {isOpen && (
                        <div className="answer py-3 px-6 border-b border-gray-200 text-gray-600">
                            {answer}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const CommonQuestions = () => {
    return (
        <div className="faq-container mt-20 mb-40">
            {/* Title */}
            <div className="text-center mb-10 max-w-[400px] mx-auto font-cormorant">
                <h2 className="text-3xl sm:text-4xl font-bold">
                    Common Questions
                </h2>
                <p className="text-sm text-gray-400">
                    Have questions about our services? Check out these FAQs.
                </p>
            </div>
            {/* FAQ items */}
            {faqData.map((item, index) => (
                <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                />
            ))}
        </div>
    );
};

export default CommonQuestions;
