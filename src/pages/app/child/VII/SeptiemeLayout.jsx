import React from "react";
import { Link, NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function SeptiemeLayout() {
  return (
    <div>
      <p className="paragraphe">
        Dans les parties{" "}
        <Link to="#" className="lien">
          V.1
        </Link>{" "}
        et{" "}
        <Link to="#" className="lien">
          V.3
        </Link>
        , nous avons vu comment choisir les champs qui seront ajoutés à une
        couche lors de sa création, et comment remplir des champs case par case.
      </p>

      <p className="paragraphe">
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

      <p className="paragraphe">Notions abordées :</p>
      <ul className="paragraphe ml-10">
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

export default SeptiemeLayout;
