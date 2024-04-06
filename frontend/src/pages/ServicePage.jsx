import React from "react";
import MainLayout from "../layout/MainLayout";
import Menu from "../components/Menu/menu";
import manicureMenuList from "../JSON/manicureMenuList.json";
import pedicureMenuList from "../JSON/pedicureMenuList.json";
import kidMenuList from "../JSON/kidMenuList.json";
import fullSetMenuList from "../JSON/fullSetMenuList.json";
import addOnMenuList from "../JSON/addOnMenuList.json";
import snsMenuList from "../JSON/snsMenuList.json";
import waxingMenuList from "../JSON/waxingMenuList.json";

const ServicePage = () => {
    return (
        // Wrapping the content with MainLayout component
        <MainLayout>
            <div className="container font-cormorant">
                {/* Section for introducing services */}
                <div className="text-center mt-10 max-w-[400px] mx-auto">
                    <p className="text-md bg-clip-text text-transparent bg-primary">
                        Our Services
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-bold">Services</h1>
                    <p className="text-sm text-gray-400">
                        From luxurious spa experiences to precision beauty
                        services, we offer a range of options to suit your
                        needs. Explore excellence and embark on a journey of
                        relaxation and rejuvenation with us.
                    </p>
                </div>
                {/* Section for displaying different service menus */}
                <div className="container py-10 font-cormorant grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-14 md:gap-5 place-items-center">
                    {/* Menu component for manicure */}
                    <Menu menuTitle="Manicure" menuList={manicureMenuList} />
                    {/* Menu component for pedicure */}
                    <Menu menuTitle="Pedicure" menuList={pedicureMenuList} />
                    {/* Menu component for full set */}
                    <Menu menuTitle="Full Set" menuList={fullSetMenuList} />
                    {/* Menu component for SNS */}
                    <Menu menuTitle="SNS" menuList={snsMenuList} />
                    {/* Menu component for waxing */}
                    <Menu menuTitle="Waxing" menuList={waxingMenuList} />
                    {/* Menu component for kid */}
                    <Menu menuTitle="Kid" menuList={kidMenuList} />
                    {/* Menu component for add-on services */}
                    <Menu menuTitle="Add On" menuList={addOnMenuList} />
                </div>
            </div>
        </MainLayout>
    );
};

export default ServicePage;
