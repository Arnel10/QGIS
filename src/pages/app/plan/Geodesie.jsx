import React from "react";
import { NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function Geodesie() {
  return (
    <section>
      <h4 className="tracking-[1.2px] text-2xl mb-4 text-blue-500 font-normal">
        II. Géodésie
      </h4>
      <p className="tracking-[1px] text-gray-700 my-4">
        La géodésie est la science qui étudie la forme et les dimensions de la
        Terre. Cette deuxième partie abordera les différentes manières
        d'exprimer des coordonnées, et comment cela se traduit dans un logiciel
        SIG.
      </p>
      <p className="tracking-[1px] text-gray-700 my-4">Notions abordées :</p>
      <ul className="tracking-[1px] text-gray-700 my-4 ml-10">
        <li className="my-2">
          <PushPinOutlinedIcon />
          ellipsoïde et géoïde
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          coordonnées géographiques
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          coordonnées projetées
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          système de coordonnées d'une couche
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          système de coordonnées d'un projet
        </li>
      </ul>
      <p className="tracking-[1px] text-gray-700 my-4">
        Les données pour cette partie ainsi qu'une version PDF du tutoriel sont
        accessibles dans la rubrique :{" "}
        <NavLink
          to="/app/telechargement"
          className="text-blue-500 hover:text-blue-600 hover:underline"
        >
          téléchargement.
        </NavLink>
      </p>

      <div className="flex justify-end items-center py-5">
        <NavLink
          className="text-white text-xl flex items-center
     transition-all duration-200 font-semibold font-nunito 
     tracking-[1px] border border-green-500 px-2 py-1 
     rounded-md bg-green-500 hover:bg-slate-50 hover:text-green-500
     "
        >
          Démarrer <ArrowRightOutlinedIcon sx={{ fontSize: 30 }} />
        </NavLink>
      </div>
    </section>
  );
}

export default Geodesie;
