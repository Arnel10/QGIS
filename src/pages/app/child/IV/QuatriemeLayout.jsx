import React from "react";
import { NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function QuatriemeLayout() {
    return (
        <div className="mx-12">
            <p className="paragraphe">
                Le géoréférencement, ou calage, consiste à donner des
                coordonnées à une image.
            </p>
            <p className="paragraphe">Notions abordées :</p>
            <ul className="paragraphe ml-10">
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
                    to="/app/plan-detailler/georeferencement/principe"
                >
                    Démarrer <ArrowRightOutlinedIcon sx={{ fontSize: 30 }} />
                </NavLink>
            </div>
        </div>
    );
}

export default QuatriemeLayout;
