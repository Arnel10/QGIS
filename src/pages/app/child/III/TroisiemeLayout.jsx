import React from "react";
import { NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function TroisiemeLayout() {
  return (
    <div>
      <p className="paragraphe">
        Vous avez maintenant vos premières bases sous SIG, et les systèmes de
        coordonnées n'ont plus de secrets pour vous... Il est temps de
        s'attaquer à une question cruciale en SIG : comment trouver des données
        ?
      </p>
      <p className="paragraphe">
        Selon votre problématique et votre zone d'étude, les réponses seront
        bien sûr très différentes. Nous vous fournirons ici quelques pistes, à
        vous d'aller plus loin !
      </p>
      <p className="paragraphe">Notions abordées :</p>
      <ul className="paragraphe ml-10">
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
      <p className="paragraphe">
        Les données pour cette partie ainsi qu'une version PDF du tutoriel sont
        accessibles dans la rubrique :{" "}
        <NavLink to="/app/telechargement" className="lien">
          téléchargement.
        </NavLink>
      </p>

      <div className="flex justify-end items-center py-5">
        <NavLink
          className="btn-lien
"
        >
          Démarrer <ArrowRightOutlinedIcon sx={{ fontSize: 30 }} />
        </NavLink>
      </div>
    </div>
  );
}

export default TroisiemeLayout;
