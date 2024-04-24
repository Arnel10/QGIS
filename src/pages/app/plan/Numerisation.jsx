import React from "react";
import { Link, NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function Numerisation() {
  return (
    <section>
      <h4 className="tracking-[1.2px] text-2xl mb-4 text-blue-500 font-normal">
        V. Numérisation
      </h4>
      <p className="tracking-[1px] text-gray-700 my-4">
        La numérisation consiste à « dessiner » par exemple les contours de
        parcelles en se basant sur une couche déjà existante, ordinairement un
        raster. On obtient ainsi une couche vecteur, plus facilement
        exploitable. Le principe est le même que lorsqu'on superpose une feuille
        de papier calque à une carte pour y dessiner les éléments qui nous
        intéressent. Il est ensuite possible de lier des données attributaires à
        cette couche.
      </p>
      <p className="tracking-[1px] text-gray-700 my-4">
        Dans ce chapitre, nous allons numériser des données de la carte de l'île
        d'Oahu (Hawaii) de 1902 (source :{" "}
        <Link
          to="#"
          className="text-blue-500 hover:text-blue-600 hover:underline"
        >
          Wikimedia
        </Link>{" "}
        ) géoréférencée dans le chapitre précédent. Si vous ne l'avez pas
        géoréférencée, pas de problème : elle est inclue dans les données du
        chapitre.
      </p>
      <p className="tracking-[1px] text-gray-700 my-4">Notions abordées :</p>
      <ul className="tracking-[1px] text-gray-700 my-4 ml-10">
        <li className="my-2">
          <PushPinOutlinedIcon />
          Création d'une couche vide
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Numérisation de points, lignes et polygones
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Remplir les données attributaires
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Notions de topologie
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

export default Numerisation;
