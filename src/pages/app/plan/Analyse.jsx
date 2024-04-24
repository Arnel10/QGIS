import React from "react";
import { Link, NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function Analyse() {
  return (
    <section>
      <h4 className="tracking-[1.2px] text-2xl mb-4 text-blue-500 font-normal">
        IX. Analyse spatiale
      </h4>
      <p className="tracking-[1px] text-gray-700 my-4">
        Dans cette partie, nous allons aborder un domaine particulièrement utile
        des SIG : comment croiser spatialement des données, ou créer des données
        à partir d'autres données.
      </p>
      <p className="tracking-[1px] text-gray-700 my-4">
        Nous verrons quelques exemples de traitements possibles sur des{" "}
        <Link
          to="#"
          className="text-blue-500 hover:text-blue-600 hover:underline"
        >
          données vecteur et raster
        </Link>
        .
      </p>
      <p className="tracking-[1px] text-gray-700 my-4">Notions abordées :</p>
      <ul className="tracking-[1px] text-gray-700 my-4 ml-10">
        <li className="my-2">
          <PushPinOutlinedIcon />
          découpage d'une couche vecteur
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          intersection de deux couches
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          création de zones tampon
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          découpage d'une couche raster
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          création de courbes de niveau à partir d'un MNE
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          calcul de pente à partir d'un MNE
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          calcul de la valeur d'un point en fonction d'un raster
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

export default Analyse;
