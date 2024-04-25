import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";

function Automatisation() {
  return (
    <section>
      <h4 className="titre-primary">XI. Automatisation de traitements</h4>
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
