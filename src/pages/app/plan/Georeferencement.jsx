import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";

function Georeferencement() {
  return (
    <section>
      <h4 className="titre-primary">IV. Géoréférencement</h4>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Georeferencement;
