import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";

function PriseEnMain() {
  return (
    <section>
      <h4 className="titre-primary">I. Prise en main</h4>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default PriseEnMain;
