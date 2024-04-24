import React from "react";
import { NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function Representation() {
  return (
    <section>
      <h4 className="tracking-[1.2px] text-2xl mb-4 text-blue-500 font-normal">
        X. Représenter des données et les mettre en page
      </h4>
      <p className="tracking-[1px] text-gray-700 my-4">
        Les logiciels SIG sont avant tout des logiciels d'analyse spatiale. Ils
        permettent également la représentation des données sous différentes
        formes, et la mise en page de cartes. Les règles de sémiologie graphique
        ne seront pas ou peu abordées ici, nous verrons avant tout l'aspect «
        technique » sous QGIS.
      </p>
      <p className="tracking-[1px] text-gray-700 my-4">
        Nous verrons ici comment représenter des données dans QGIS : quels types
        de cartes sont possibles, quelles en sont les limites, et comment mettre
        en page une carte.
      </p>
      <p className="tracking-[1px] text-gray-700 my-4">Notions abordées :</p>
      <ul className="tracking-[1px] text-gray-700 my-4 ml-10">
        <li className="my-2">
          <PushPinOutlinedIcon />
          symboles proportionnels
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          cartes choroplèthes
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          cartes en semis de points
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          mise en page de cartes (composeur d'impression)
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

export default Representation;
