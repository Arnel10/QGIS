import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sponsors from "../components/Sponsors";

function AppLayout() {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen((prev) => !prev);
    }

    return (
        <div className="font-lato h-screen overflow-y-hidden">
            <Header isOpen={isOpen} handleToggle={handleToggle} />
            <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
                <Navbar />
            </div>
            <div className="md:flex md:justify-between">
                <div className="hidden lg:block">
                    <Navbar />
                </div>

                <div id="app-container" className="h-[90vh] overflow-y-scroll">
                    <Outlet />
                </div>

                <div id="sponsors">
                    <Sponsors />
                </div>
            </div>
        </div>
    );
}

export default AppLayout;
