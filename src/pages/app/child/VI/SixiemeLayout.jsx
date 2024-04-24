import React from "react";
import { NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function SixiemeLayout() {
  return (
    <div>
      {" "}
      <p className="tracking-[1px] text-gray-700 my-4">
        A partir d'une couche vecteur, il est possible de{" "}
        <span className="font-bold">
          sélectionner des éléments répondant à un ou plusieurs critères
        </span>
        , en se basant sur les données{" "}
        <span className="font-bold">contenues dans la table attributaire</span>{" "}
        ou bien sur{" "}
        <span className="font-bold">la position de ces éléments</span>.
      </p>
      <p className="tracking-[1px] text-gray-700 my-4">
        Vous pouvez ainsi sélectionner par exemple des communes dont la
        population est supérieure à 10 000 habitants, ou les communes à
        l'intérieur d'un département...
      </p>
      <p className="tracking-[1px] text-gray-700 my-4">
        Ceci vous permet par exemple de compter le nombre d'éléments répondant à
        vos critères, ou bien de créer une nouvelle couche à partir de votre
        sélection, pour y réaliser ensuite d'autres traitements.
      </p>
      <p className="tracking-[1px] text-gray-700 my-4">Notions abordées :</p>
      <ul className="tracking-[1px] text-gray-700 my-4 ml-10">
        <li className="my-2">
          <PushPinOutlinedIcon />
          Requêtes attributaires
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Requêtes spatiales
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Opérateurs
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Fonctions
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Utiliser une sous-sélection
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Requêtes SQL
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          couches virtuelles
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

export default SixiemeLayout;
