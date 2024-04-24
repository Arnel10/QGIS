import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";

function Numerisation() {
  return (
    <section>
      <h4 className="tracking-[1.2px] text-2xl mb-4 text-blue-500 font-normal">
        V. Numérisation
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

export default Numerisation;
