import React from "react";
import { Link, NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function NeuviemeLayout() {
  return (
    <div>
      <p className="paragraphe">
        Dans cette partie, nous allons aborder un domaine particulièrement utile
        des SIG : comment croiser spatialement des données, ou créer des données
        à partir d'autres données.
      </p>
      <p className="paragraphe">
        Nous verrons quelques exemples de traitements possibles sur des{" "}
        <Link to="#" className="lien">
          données vecteur et raster
        </Link>
        .
      </p>
      <p className="paragraphe">Notions abordées :</p>
      <ul className="paragraphe ml-10">
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

export default NeuviemeLayout;
