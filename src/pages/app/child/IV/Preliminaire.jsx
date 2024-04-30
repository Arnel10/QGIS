import {
    ArrowDropDown,
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function Preliminaire() {
    return (
        <div className="relative paragraphe">
            <div id="top" className="my-4">
                <h1 className="titre-primary">
                    IV.2 Géoréférencement : les préliminaires
                </h1>
            </div>

            <ul className="my-4 mx-8">
                <li className="my-2">
                    <a href="#obj" className="lien">
                        Objectif
                    </a>
                </li>
                <li className="my-2">
                    <a href="#dec" className="lien">
                        Découverte de l'image à caler
                    </a>
                </li>
            </ul>

            <div id="obj" className="mt-20">
                <div className="bg-style-b">
                    <h5 className="sous-titre">Objectif</h5>
                </div>
                <p className="my-4">
                    Notre but sera ici de caler une carte de l'île d'Oahu
                    (Hawaii) de 1902 (source :{" "}
                    <a href="#" className="lien">
                        Wikimedia
                    </a>
                    ).
                </p>
                <div className="bg-img">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_2_carte_oahu.jpg"
                        alt="carte-oahu"
                    />
                </div>
                <p className="my-4">
                    Une fois cette carte calée, vous pourrez la superposer à
                    d'autres données dans QGIS.
                </p>
                <p className="my-4">
                    La première étape consiste à prendre connaissance de cette
                    carte, et à vérifier que le module de géoréférencement de
                    QGIS soit activé.
                </p>
            </div>

            <div id="dec" className="mt-20">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Découverte de l'image à caler
                    </h5>
                </div>

                <p className="my-4">
                    Où se situe l'île d'Oahu? Rendez-vous par exemple sur
                    Wikipedia pour le savoir :
                    <a
                        href="http://fr.wikipedia.org/wiki/Oahu"
                        className="lien"
                    >
                        http://fr.wikipedia.org/wiki/Oahu
                    </a>
                    .
                </p>

                <div className="my-6">
                    <p className="my-4">
                        <ArrowDropDown /> Quelles sont les coordonnées de l'île
                        d'Oahu ? Dans quel SCR sont mesurées ces coordonnées ?
                    </p>
                    <p className="italic text-sm ml-16 my-4">
                        L'île est située approximativement aux coordonnées 21°
                        28' Nord et 157° 59' Ouest (SCR WGS84).
                    </p>
                    <p className="my-4">
                        A partir de l'explorateur de fichiers de votre
                        ordinateur, ouvrez l'image
                        <span className="lien font-bold">
                            Oahu_Hawaiian_Islands_1906.jpg située dans le
                            dossier
                        </span>
                        <span className="font-bold">
                            TutoQGIS_04_Georef/donnees
                        </span>
                        .
                    </p>
                </div>

                <div className="my-6">
                    <p className="my-4">
                        <ArrowDropDown /> Pouvez-vous dire dans quel système
                        sont mesurées les coordonnées de cette carte ?
                    </p>
                    <p className="italic text-sm ml-16 my-4">
                        Aucune mention d'un SCR n'est faite sur cette carte.
                        Nous pouvons néanmoins être sûr qu'il s'agit d'un
                        système géographique (non projeté) puisque les
                        coordonnées sont exprimées en degrés.
                    </p>
                    <p className="italic text-sm ml-16 my-4">
                        Connaître quel système a été utilisé ici nécessiterait
                        des recherches, en se basant sur la date de la carte et
                        la zone couverte. Nous allons supposer ici, pour les
                        besoins de l'exercice, que les coordonnées sont en WGS84
                        (ce qui n'est évidemment pas le cas, ce système datant
                        de 1984). Nous vérifierons que ce choix nous donne une
                        précision acceptable.
                    </p>
                </div>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/georeferencement/principe"
                    >
                        <ArrowLeftOutlined sx={{ fontSize: 30 }} />{" "}
                        <span className="hidden lg:block">Précédent</span>
                    </NavLink>
                </div>

                <div className="fixed bottom-20 z-20 md:right-52 sm:right-12 right-5">
                    <a href="#top" className="btn-lien rounded-full py-4 px-4">
                        <ArrowDropUp />
                    </a>
                </div>

                <div className="py-5 fixed bottom-0 z-20 md:right-52 sm:right-12 right-5">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/georeferencement/avec-caroyage"
                    >
                        <span className="hidden lg:block">Suivant</span>{" "}
                        <ArrowRightOutlined sx={{ fontSize: 30 }} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Preliminaire;
