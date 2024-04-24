import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";

function Calcul() {
  return (
    <section>
      <h4 className="titre-primary">
        VII. Créer, supprimer, renommer et calculer des champs
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

export default Calcul;
