import React from "react";
import { NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function HuitiemeLayout() {
  return (
    <div>
      {" "}
      <p className="paragraphe">
        Nous allons aborder ici la notion de jointure : comment partir de deux
        couches de données, ou d'une couche et d'un tableau, pour au final
        n'obtenir qu'une seule couche avec toutes les données qui nous
        intéressent ?
      </p>
      <p className="paragraphe">Notions abordées :</p>
      <ul className="paragraphe ml-10">
        <li className="my-2">
          <PushPinOutlinedIcon />
          Jointure attributaire
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Jointure spatiale
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Jointure un-un
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Jointure un-plusieurs
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
        <NavLink className="btn-lien">
          Démarrer <ArrowRightOutlinedIcon sx={{ fontSize: 30 }} />
        </NavLink>
      </div>
    </div>
  );
}

export default HuitiemeLayout;
