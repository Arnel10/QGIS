import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";

function Representation() {
  return (
    <section>
      <h4 className="titre-primary">
        X. Représenter des données et les mettre en page
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

export default Representation;
