import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";

function Requetes() {
  return (
    <section>
      <h4 className="titre-primary">
        VI. Sélectionner des données : les requêtes
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

export default Requetes;
