import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";

function Analyse() {
  return (
    <section>
      <h4 className="titre-primary">IX. Analyse spatiale</h4>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Analyse;
