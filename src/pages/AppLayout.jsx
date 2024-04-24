import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sponsors from "../components/Sponsors";

function AppLayout() {
  return (
    <div className="font-lato h-screen overflow-y-hidden">
      <Header />
      <div className="sm:flex sm:justify-between">
        <div>
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
