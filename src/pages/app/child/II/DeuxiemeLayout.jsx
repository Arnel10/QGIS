import React from "react";
import { NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function DeuxiemeLayout() {
  return (
    <div>
      <p className="paragraphe">
        La géodésie est la science qui étudie la forme et les dimensions de la
        Terre. Cette deuxième partie abordera les différentes manières
        d'exprimer des coordonnées, et comment cela se traduit dans un logiciel
        SIG.
      </p>
      <p className="paragraphe">Notions abordées :</p>
      <ul className="paragraphe ml-10">
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

export default DeuxiemeLayout;
