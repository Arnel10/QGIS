import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

function Telechargement() {
  return (
    <section className="flex flex-col relative pt-8 pb-32 px-10">
      <div>
        <h1 className="titre">Téléchargement</h1>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Telechargement;
