import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex flex-col gap-5 items-center justify-center h-screen">
      <h1 className="text-gray-700 text-7xl font-nunito tracking-[1.5px]">
        4<span className="text-green-600">0</span>4
      </h1>
      <div className="my-2 text-xl text-gray-700 tracking-[1px]">
        Lien introuvable 🛑
      </div>

      <NavLink
        to="/"
        className="px-3 py-2 bg-green-600 rounded-md text-white
        font-semibold font-nunito tracking-[1px] border border-green-600
        hover:bg-white hover:text-green-600 transition-all duration-200"
      >
        Retour à l'accueil 👉
      </NavLink>
    </section>
  );
}

export default NotFound;
