import React from "react";
import { Link, NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function SeptiemeLayout() {
  return (
    <div>
      <p className="tracking-[1px] text-gray-700 my-4">
        Dans les parties{" "}
        <Link
          to="#"
          className="text-blue-500 hover:text-blue-600 hover:underline"
        >
          V.1
        </Link>{" "}
        et{" "}
        <Link
          to="#"
          className="text-blue-500 hover:text-blue-600 hover:underline"
        >
          V.3
        </Link>
        , nous avons vu comment choisir les champs qui seront ajoutés à une
        couche lors de sa création, et comment remplir des champs case par case.
      </p>

      <p className="tracking-[1px] text-gray-700 my-4">
        Nous allons voir ici comment{" "}
        <span className="font-bold">
          ajouter, supprimer et renommer et changer l'ordre des champs
        </span>
        pour une couche existante, et comment{" "}
        <span className="font-bold">
          calculer automatiquement des valeurs dans un champ{" "}
        </span>
        .
      </p>

      <p className="tracking-[1px] text-gray-700 my-4">Notions abordées :</p>
      <ul className="tracking-[1px] text-gray-700 my-4 ml-10">
        <li className="my-2">
          <PushPinOutlinedIcon />
          Création de champs
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Suppression de champs
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Renommer des champs
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Modifier l'ordre des champs
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Calcul des valeurs d'un champ
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
    </div>
  );
}

export default SeptiemeLayout;
