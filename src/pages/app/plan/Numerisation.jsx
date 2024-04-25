import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";

function Numerisation() {
  return (
    <section>
      <h4 className="titre-primary">V. Numérisation</h4>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Numerisation;
