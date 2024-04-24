import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";

function Recherche() {
  return (
    <section>
      <h4 className="titre-primary">III. Recherche et ajout de données</h4>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Recherche;
