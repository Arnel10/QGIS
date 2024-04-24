import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";

function Jointure() {
  return (
    <section>
      <h4 className="tracking-[1.2px] text-2xl mb-4 text-blue-500 font-normal">
        VIII. Lier des données de deux sources différentes : les jointures
      </h4>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Jointure;
