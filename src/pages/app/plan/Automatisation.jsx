import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";

function Automatisation() {
  return (
    <section>
      <h4 className="titre-secondary">XI. Automatisation de traitements</h4>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Automatisation;
