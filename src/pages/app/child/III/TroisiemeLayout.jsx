import React from "react";
import { NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function TroisiemeLayout() {
  return (
    <div>
      <p className="tracking-[1px] text-gray-700 my-4">
        Vous avez maintenant vos premières bases sous SIG, et les systèmes de
        coordonnées n'ont plus de secrets pour vous... Il est temps de
        s'attaquer à une question cruciale en SIG : comment trouver des données
        ?
      </p>
      <p className="tracking-[1px] text-gray-700 my-4">
        Selon votre problématique et votre zone d'étude, les réponses seront
        bien sûr très différentes. Nous vous fournirons ici quelques pistes, à
        vous d'aller plus loin !
      </p>
      <p className="tracking-[1px] text-gray-700 my-4">Notions abordées :</p>
      <ul className="tracking-[1px] text-gray-700 my-4 ml-10">
        <li className="my-2">
          <PushPinOutlinedIcon />
          télécharger des données sur internet
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          flux WMS et WFS
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          données XY
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          fonds de carte en ligne (tuiles raster)
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          données OpenStreetMap
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

export default TroisiemeLayout;
