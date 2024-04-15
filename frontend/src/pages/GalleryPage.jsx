import React from "react";
import MainLayout from "../layout/MainLayout";
import HeadingLayout from "../layout/HeadingLayout";
import Gallery from "../components/Gallery/Gallery";
const GalleryPage = () => {
    return (
        <MainLayout>
            <HeadingLayout
                title="Our Gallery"
                subtitle="Gallery"
                content=" Join us as we delve into the world of nail fashion, where
                every stroke tells a story of elegance and sophistication."
            />
            <Gallery />
        </MainLayout>
    );
};

export default GalleryPage;
