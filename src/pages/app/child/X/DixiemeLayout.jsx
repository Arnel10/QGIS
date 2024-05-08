import React from "react";
import { NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function DixiemeLayout() {
    return (
        <div>
            <p className="paragraphe">
                Les logiciels SIG sont avant tout des logiciels d'analyse
                spatiale. Ils permettent également la représentation des données
                sous différentes formes, et la mise en page de cartes. Les
                règles de sémiologie graphique ne seront pas ou peu abordées
                ici, nous verrons avant tout l'aspect « technique » sous QGIS.
            </p>
            <p className="paragraphe">
                Nous verrons ici comment représenter des données dans QGIS :
                quels types de cartes sont possibles, quelles en sont les
                limites, et comment mettre en page une carte.
            </p>
            <p className="paragraphe">Notions abordées :</p>
            <ul className="paragraphe ml-10">
                <li className="my-2">
                    <PushPinOutlinedIcon />
                    symboles proportionnels
                </li>
                <li className="my-2">
                    <PushPinOutlinedIcon />
                    cartes choroplèthes
                </li>
                <li className="my-2">
                    <PushPinOutlinedIcon />
                    cartes en semis de points
                </li>
                <li className="my-2">
                    <PushPinOutlinedIcon />
                    mise en page de cartes (composeur d'impression)
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
                    to="/app/plan-detailler/representation-et-mis-en-page/representation"
                >
                    Démarrer <ArrowRightOutlinedIcon sx={{ fontSize: 30 }} />
                </NavLink>
            </div>
        </div>
    );
}

export default DixiemeLayout;
