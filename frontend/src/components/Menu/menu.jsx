// Menu.js

import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const Menu = ({ menuTitle, menuList }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex flex-col items-center w-full sm:w-[500px] h-auto ">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="bg-third p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent  "
            >
                {menuTitle}
                {!isOpen ? (
                    <AiOutlineCaretDown className="h-8" />
                ) : (
                    <AiOutlineCaretUp className="h-8" />
                )}
            </button>

            <div className="bg-fourth rounded-lg  w-full mt-1">
                {menuList.map((item, index) => (
                    <div
                        className={`flex justify-between p-4  ${
                            isOpen ? "visible" : "hidden"
                        }`}
                        key={index}
                    >
                        <h3 className="font-bold">{item.serviceName}</h3>
                        <h3 className="font-bold">${item.price}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
