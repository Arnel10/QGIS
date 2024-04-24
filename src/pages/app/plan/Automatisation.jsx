import React from "react";
import { NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function Automatisation() {
  return (
    <section>
      <h4 className="tracking-[1.2px] text-2xl mb-4 text-blue-500 font-normal">
        XI. Automatisation de traitements
      </h4>
      <p className="tracking-[1px] text-gray-700 my-4">
        Cette onzième partie vous permettra d'aller plus loin dans votre
        utilisation de QGIS. Le but est ici de voir comment automatiser des
        traitements sous QGIS : par exemple, au lieu de découper une couche par
        une autre au moyen de l'outil découper, vous avez 30 couches à découper
        par une même autre.
      </p>
      <p>Nous allons utiliser 3 méthodes différentes pour cela.</p>
      <p className="tracking-[1px] text-gray-700 my-4">Notions abordées :</p>
      <ul className="tracking-[1px] text-gray-700 my-4 ml-10">
        <li className="my-2">
          <PushPinOutlinedIcon />
          Exécution d'un outil « par lot »
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Modeleur de traitement (graphical modeler)
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Script Python
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

export default Automatisation;
