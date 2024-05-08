import React from "react";
import { NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function OnziemeLayout() {
    return (
        <div>
            <p className="paragraphe">
                Cette onzième partie vous permettra d'aller plus loin dans votre
                utilisation de QGIS. Le but est ici de voir comment automatiser
                des traitements sous QGIS : par exemple, au lieu de découper une
                couche par une autre au moyen de l'outil découper, vous avez 30
                couches à découper par une même autre.
            </p>
            <p className="paragraphe my-4">
                Nous allons utiliser 3 méthodes différentes pour cela.
            </p>
            <p className="paragraphe">Notions abordées :</p>
            <ul className="paragraphe ml-10">
                <li className="my-2">
                    <PushPinOutlinedIcon />
                    Exécution d'un outil « par lot »
                </li>
                <li className="my-2">
                    <PushPinOutlinedIcon />
                    Modeleur de traitement (graphical modeler)
                </li>
                <li className="my-2">
                    <PushPinOutlinedIcon />
                    Script Python
                </li>
            </ul>
            <p className="paragraphe">
                Les données pour cette partie ainsi qu'une version PDF du
                tutoriel sont accessibles dans la rubrique :{" "}
                <NavLink to="/app/telechargement" className="lien">
                    téléchargement.
                </NavLink>
            </p>

            <div className="flex justify-end items-center py-5">
                <NavLink
                    className="btn-lien"
                    to="/app/plan-detailler/automatisation-des-traitements/traitement-de-base"
                >
                    Démarrer <ArrowRightOutlinedIcon sx={{ fontSize: 30 }} />
                </NavLink>
            </div>
        </div>
    );
}

export default OnziemeLayout;
