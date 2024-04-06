import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "../../assets/gallery1.jpg";
import Img2 from "../../assets/gallery2.jpg";
import Img3 from "../../assets/gallery3.jpg";
import Img4 from "../../assets/gallery4.jpg";
import Img5 from "../../assets/gallery5.jpg";
import Img6 from "../../assets/gallery6.jpg";
import Img7 from "../../assets/gallery7.jpg";
import Img8 from "../../assets/gallery8.jpg";
import Img9 from "../../assets/gallery9.jpg";
import "./Gallery.css";

const Gallery = () => {
    // Array of gallery images
    const data = [
        { id: 1, imgSrc: Img1 },
        { id: 2, imgSrc: Img2 },
        { id: 3, imgSrc: Img3 },
        { id: 4, imgSrc: Img4 },
        { id: 5, imgSrc: Img5 },
        { id: 6, imgSrc: Img6 },
        { id: 7, imgSrc: Img7 },
        { id: 8, imgSrc: Img8 },
        { id: 9, imgSrc: Img9 },
    ];

    // State variables
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");

    // Function to display image in a modal
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    };

    return (
        <div className="container my-10 py-10 font-cormorant">
            {/* Gallery title and description */}
            <div className="text-center mb-20 max-w-[400px] mx-auto">
                <p className="text-md bg-clip-text text-transparent bg-primary">
                    Our Gallery
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold">Gallery</h1>
                <p className="text-sm text-gray-400">
                    Join us as we delve into the world of nail fashion, where
                    every stroke tells a story of elegance and sophistication.
                </p>
            </div>

            {/* Image modal */}
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} alt="" />
                <CloseIcon onClick={() => setModel(false)} />
            </div>

            {/* Gallery images */}
            <div className="gallery">
                {data.map((item, index) => (
                    <div
                        className="pics"
                        key={index}
                        onClick={() => getImg(item.imgSrc)}
                    >
                        <img
                            className="-translate-y-14 rounded-2xl"
                            src={item.imgSrc}
                            style={{ width: "100%" }}
                            alt={`Gallery image ${item.id}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
