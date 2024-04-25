import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";

function Geodesie() {
  return (
    <section>
      <h4 className="titre-primary">II. Géodésie</h4>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Geodesie;
