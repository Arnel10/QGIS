import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";

function Analyse() {
  return (
    <section>
      <h4 className="tracking-[1.2px] text-2xl mb-4 text-blue-500 font-normal">
        IX. Analyse spatiale
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

export default Analyse;
