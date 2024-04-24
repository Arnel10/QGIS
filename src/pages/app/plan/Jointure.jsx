import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";

function Jointure() {
  return (
    <section>
      <h4 className="titre-primary">
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
