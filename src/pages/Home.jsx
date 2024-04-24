import React from "react";
import { Link } from "react-router-dom";
import logoMadatlas from "../assets/images/logo-Madatlas.png";
import Footer from "../components/Footer";

function Home() {
  return (
    <section className="relative flex flex-col h-screen" id="home">
      <div id="logo-home" className="h-[8vh] flex items-center gap-8 mx-4 my-4">
        <div className="bg-green-100 py-2 px-1 rounded-md cursor-pointer">
          <img src={logoMadatlas} alt="madatlas" width={75} height={75} />
        </div>
      </div>
      <div
        id="titre-home"
        className="flex flex-col justify-center items-center my-36 gap-10"
      >
        <h1 className="text-6xl uppercase text-slate-50 font-semibold font-nunito">
          Bienvenue sur
        </h1>
        <h1 className="text-4xl uppercase text-slate-50 font-semibold font-nunito">
          le Tut<span className="text-white">o</span>riel QG
          <span className="text-white">I</span>S
        </h1>
      </div>
      <div id="btn-home" className="flex items-center justify-center gap-5">
        <Link
          to="app/presentation"
          className="bg-green-500 text-slate-50 font-semibold px-3 py-2 
          rounded-md border-[2px] border-slate-100 hover:text-green-500
          hover:bg-slate-100 transition-all duration-200 hover:border-green-500"
        >
          C'est parti 👉
        </Link>
        <Link
          to="app/telechargement"
          className="bg-green-500 text-slate-50 font-semibold px-3 py-2 
          rounded-md border-[2px] border-slate-100 hover:text-green-500
          hover:bg-slate-100 transition-all duration-200 hover:border-green-500"
        >
          Téléchargement 🚀
        </Link>
      </div>
      <div id="footer-home">
        <Footer />
      </div>
    </section>
  );
}

export default Home;
