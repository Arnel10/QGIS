import React from "react";
import { NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function QuatriemeLayout() {
  return (
    <div>
      <p className="tracking-[1px] text-gray-700 my-4">
        Le géoréférencement, ou calage, consiste à donner des coordonnées à une
        image.
      </p>
      <p className="tracking-[1px] text-gray-700 my-4">Notions abordées :</p>
      <ul className="tracking-[1px] text-gray-700 my-4 ml-10">
        <li className="my-2">
          <PushPinOutlinedIcon />
          Principe du géoréférencement
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Points de calage
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Types de transformation
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Erreur Moyenne Quadratique (EMQ)
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Rééchantillonnage
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Vérification du géoréférencement
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

export default QuatriemeLayout;
