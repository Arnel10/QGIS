import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MiniNav({ handleToggle, setIsOpen }) {
    const [isTogglePres, setIsTogglePres] = useState(false);
    const [isTogglePlan, setIsTogglePlan] = useState(false);
    const [isToggleTel, setIsToggleTel] = useState(false);

    const location = useLocation();

    return (
        <nav className="navigation">
            <ul className="ml-2">
                <li className="py-3">
                    <NavLink
                        to="presentation"
                        className={`nav-text ${
                            location.pathname === "/app/presentation"
                                ? "text-green-500"
                                : ""
                        }`}
                        onClick={() => {
                            setIsOpen((prev) => !prev);
                            setIsTogglePres((prev) => !prev);
                            if (isTogglePlan || isToggleTel) {
                                setIsTogglePlan(false);
                                setIsToggleTel(false);
                            }
                        }}
                    >
                        {isTogglePres ? (
                            <ExpandMoreIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}{" "}
                        Présentation
                    </NavLink>
                </li>

                <li className="py-3">
                    <NavLink
                        to="plan-detailler/prise-en-main"
                        className={`nav-text ${
                            location.pathname
                                .split("/")
                                .slice(0, 3)
                                .join("/") === "/app/plan-detailler"
                                ? "text-green-500"
                                : ""
                        }`}
                        onClick={() => {
                            setIsTogglePlan((prev) => !prev);
                            if (isTogglePres || isToggleTel) {
                                setIsTogglePres(false);
                                setIsToggleTel(false);
                            }
                        }}
                    >
                        {isTogglePlan ? (
                            <ExpandMoreIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}{" "}
                        Plan-detaillé
                    </NavLink>
                    {isTogglePlan && (
                        <ul className=" text-md">
                            <li className="mx-5 my-4">
                                <NavLink
                                    to="plan-detailler/prise-en-main"
                                    className={`nav-text-secondary ${
                                        location.pathname
                                            .split("/")
                                            .slice(0, 4)
                                            .join("/") ===
                                        "/app/plan-detailler/prise-en-main"
                                            ? "text-green-500"
                                            : ""
                                    }`}
                                    onClick={handleToggle}
                                >
                                    I - Prise en main
                                </NavLink>

                                <ul className="ml-4">
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/prise-en-main/definition-sig"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/prise-en-main/definition-sig"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            1 . Qu'est-ce qu'un SIG
                                        </NavLink>
                                    </li>

                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/prise-en-main/manipulation-information-geographique"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/prise-en-main/manipulation-information-geographique"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            2 . Manipuler de l'information
                                            géographique
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/prise-en-main/format-donnees-sig"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/prise-en-main/format-donnees-sig"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            3 . Format de données SIG
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/prise-en-main/espace-de-travail"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/prise-en-main/espace-de-travail"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            4 . Espace de travail (projet QGIS)
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="mx-5 my-4">
                                <NavLink
                                    to="plan-detailler/geodesie"
                                    className={`nav-text-secondary ${
                                        location.pathname
                                            .split("/")
                                            .slice(0, 4)
                                            .join("/") ===
                                        "/app/plan-detailler/geodesie"
                                            ? "text-green-500"
                                            : ""
                                    }`}
                                    onClick={handleToggle}
                                >
                                    II - Géodésie
                                </NavLink>

                                <ul className="ml-4">
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/geodesie/introduction-geodesie"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/geodesie/introduction-geodesie"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            1 . Introduction à la géodésie
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/geodesie/coordonnes-systeme"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/geodesie/coordonnes-systeme"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            2 . Des coordonnées, oui mais dans
                                            quel système
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/geodesie/couche-et-projet"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/geodesie/couche-et-projet"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            3 . Couches et projets : à chacun
                                            son système
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/geodesie/passer-un-systeme"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/geodesie/passer-un-systeme"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            4 . Passer d'un système de
                                            coordonnées à un autre
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="mx-5 my-4">
                                <NavLink
                                    to="plan-detailler/recherche-et-ajout-de-donnees"
                                    className={`nav-text-secondary ${
                                        location.pathname
                                            .split("/")
                                            .slice(0, 4)
                                            .join("/") ===
                                        "/app/plan-detailler/recherche-et-ajout-de-donnees"
                                            ? "text-green-500"
                                            : ""
                                    }`}
                                    onClick={handleToggle}
                                >
                                    III - Recherche et ajout de données
                                </NavLink>

                                <ul className="ml-4">
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/recherche-et-ajout-de-donnees/recherche-donne-SIG-internet"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/recherche-et-ajout-de-donnees/recherche-donne-SIG-internet"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            1 . Recherche de données SIG sur
                                            internet
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/recherche-et-ajout-de-donnees/ajout-donnees-via-flux"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/recherche-et-ajout-de-donnees/ajout-donnees-via-flux"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            2 . Ajout de données via des flux
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/recherche-et-ajout-de-donnees/ajout-donnees-ponctuel"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/recherche-et-ajout-de-donnees/ajout-donnees-ponctuel"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            3 . Ajout de données ponctuelles à
                                            partir d'un fichier texte
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/recherche-et-ajout-de-donnees/ajout-fond-de-carte"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/recherche-et-ajout-de-donnees/ajout-fond-de-carte"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            4 . Ajout d'un fonds de carte en
                                            ligne
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/recherche-et-ajout-de-donnees/qgis-osm"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/recherche-et-ajout-de-donnees/qgis-osm"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            5 . QGIS et OpenStreetMap
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="mx-5 my-4">
                                <NavLink
                                    to="plan-detailler/georeferencement"
                                    className={`nav-text-secondary ${
                                        location.pathname
                                            .split("/")
                                            .slice(0, 4)
                                            .join("/") ===
                                        "/app/plan-detailler/georeferencement"
                                            ? "text-green-500"
                                            : ""
                                    }`}
                                    onClick={handleToggle}
                                >
                                    IV - Géoréférencement
                                </NavLink>

                                <ul className="ml-4">
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/georeferencement/principe"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/georeferencement/principe"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            1 . Principe
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/georeferencement/preliminaire"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/georeferencement/preliminaire"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            2 . Préliminaires
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/georeferencement/avec-caroyage"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/georeferencement/avec-caroyage"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            3 . Avec un carroyage texte
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/georeferencement/param-georef"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/georeferencement/param-georef"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            4 . Paramétrage du géoréférencement
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/georeferencement/lancer-geo"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/georeferencement/lancer-geo"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            5 . Lancer le géoréférencement
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/georeferencement/avec-couche-ref"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/georeferencement/avec-couche-ref"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            6 . Avec une couche de référence
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="mx-5 my-4">
                                <NavLink
                                    to="plan-detailler/numerisation"
                                    className={`nav-text-secondary ${
                                        location.pathname
                                            .split("/")
                                            .slice(0, 4)
                                            .join("/") ===
                                        "/app/plan-detailler/numerisation"
                                            ? "text-green-500"
                                            : ""
                                    }`}
                                    onClick={handleToggle}
                                >
                                    V - Numérisation
                                </NavLink>

                                <ul className="ml-4">
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/numerisation/creation-couche-vide"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/numerisation/creation-couche-vide"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            1 . Création d'une couche vide
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/numerisation/ajout-point"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/numerisation/ajout-point"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            2 . Ajout de point
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/numerisation/donnees-attrib"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/numerisation/donnees-attrib"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            3 . Données attributaires
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/numerisation/numeriser-ligne"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/numerisation/numeriser-ligne"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            4 . Numériser des lignes
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/numerisation/numeriser-pol"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/numerisation/numeriser-pol"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            5 . Numériser des polygones
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/numerisation/quelque-top"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/numerisation/quelque-top"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            6 . Quelques notions de topologie
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="mx-5 my-4">
                                <NavLink
                                    to="plan-detailler/requetes"
                                    className={`nav-text-secondary ${
                                        location.pathname
                                            .split("/")
                                            .slice(0, 4)
                                            .join("/") ===
                                        "/app/plan-detailler/requetes"
                                            ? "text-green-500"
                                            : ""
                                    }`}
                                    onClick={handleToggle}
                                >
                                    VI - Requêtes
                                </NavLink>

                                <ul className="ml-4">
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/requetes/requete-attrib"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/requetes/requete-attrib"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            1 . Requêtes attributaires
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/requetes/requete-spati"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/requetes/requete-spati"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            2 . Requêtes spatiales
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/requetes/combiner-requete"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/requetes/combiner-requete"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            3 . Combiner des requêtes
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/requetes/requete-sql"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/requetes/requete-sql"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            4 . Requêtes SQL
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="mx-5 my-4">
                                <NavLink
                                    to="plan-detailler/calcul-de-champs"
                                    className={`nav-text-secondary ${
                                        location.pathname
                                            .split("/")
                                            .slice(0, 4)
                                            .join("/") ===
                                        "/app/plan-detailler/calcul-de-champs"
                                            ? "text-green-500"
                                            : ""
                                    }`}
                                    onClick={handleToggle}
                                >
                                    VII - Calcul de champs
                                </NavLink>

                                <ul className="ml-4">
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/calcul-de-champs/creer-suppre-champ"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/calcul-de-champs/creer-suppre-champ"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            1 . Créer et supprimer des champs
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/calcul-de-champs/calc-champ"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/calcul-de-champs/calc-champ"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            2 . Calcul de champ
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="mx-5 my-4">
                                <NavLink
                                    to="plan-detailler/jointures"
                                    className={`nav-text-secondary ${
                                        location.pathname
                                            .split("/")
                                            .slice(0, 4)
                                            .join("/") ===
                                        "/app/plan-detailler/jointures"
                                            ? "text-green-500"
                                            : ""
                                    }`}
                                    onClick={handleToggle}
                                >
                                    VIII - Jointures
                                </NavLink>

                                <ul className="ml-4">
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/jointures/jointure-attrib"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/jointures/jointure-attrib"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            1 . Jointures attributaires
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/jointures/jointure-spat"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/jointures/jointure-spat"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            2 . Jointures spatiales
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="mx-5 my-4">
                                <NavLink
                                    to="plan-detailler/analyse-spatiale"
                                    className={`nav-text-secondary ${
                                        location.pathname
                                            .split("/")
                                            .slice(0, 4)
                                            .join("/") ===
                                        "/app/plan-detailler/analyse-spatiale"
                                            ? "text-green-500"
                                            : ""
                                    }`}
                                    onClick={handleToggle}
                                >
                                    IX - Analyse spatiale
                                </NavLink>

                                <ul className="ml-4">
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/analyse-spatiale/operation-donnees-vect"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/analyse-spatiale/operation-donnees-vect"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            1 . Opérations sur données vecteur
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/analyse-spatiale/operation-donnees-rast"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/analyse-spatiale/operation-donnees-rast"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            2 . Opérations sur données raster
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/analyse-spatiale/croiser-vect-rast"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/analyse-spatiale/croiser-vect-rast"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            3 . Croiser vecteur et raster
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/analyse-spatiale/creer-maillage"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/analyse-spatiale/creer-maillage"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            4 . Créer un maillage
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/analyse-spatiale/dite-SQL"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/analyse-spatiale/dite-SQL"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            5 . Dites-le avec du SQL
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="mx-5 my-4">
                                <NavLink
                                    to="plan-detailler/representation-et-mis-en-page"
                                    className={`nav-text-secondary ${
                                        location.pathname
                                            .split("/")
                                            .slice(0, 4)
                                            .join("/") ===
                                        "/app/plan-detailler/representation-et-mis-en-page"
                                            ? "text-green-500"
                                            : ""
                                    }`}
                                    onClick={handleToggle}
                                >
                                    X - Représentation et mis en page
                                </NavLink>
                                <ul className="ml-4">
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/representation-et-mis-en-page/representation"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/representation-et-mis-en-page/representation"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            1 . Représentation
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/representation-et-mis-en-page/mis-en-page"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/representation-et-mis-en-page/mis-en-page"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            2 . Mise en page
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="mx-5 my-4">
                                <NavLink
                                    to="plan-detailler/automatisation-des-traitements"
                                    className={`nav-text-secondary ${
                                        location.pathname
                                            .split("/")
                                            .slice(0, 4)
                                            .join("/") ===
                                        "/app/plan-detailler/automatisation-des-traitements"
                                            ? "text-green-500"
                                            : ""
                                    }`}
                                    onClick={handleToggle}
                                >
                                    XI - Automatisation de traitements
                                </NavLink>

                                <ul className="ml-4">
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/automatisation-des-traitements/traitement-de-base"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/automatisation-des-traitements/traitement-de-base"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            1 . Traitement de base
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/automatisation-des-traitements/execution-lot"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/automatisation-des-traitements/execution-lot"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            2 . Exécution d'un outil par lot
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/automatisation-des-traitements/construire-utilise-modele"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/automatisation-des-traitements/construire-utilise-modele"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            3 . Construire et utiliser un modèle
                                        </NavLink>
                                    </li>
                                    <li className="my-2">
                                        <NavLink
                                            to="plan-detailler/automatisation-des-traitements/comprendre-lancer-python"
                                            className={`sous-nav ${
                                                location.pathname ===
                                                "/app/plan-detailler/automatisation-des-traitements/comprendre-lancer-python"
                                                    ? "text-green-500"
                                                    : ""
                                            }`}
                                            onClick={handleToggle}
                                        >
                                            4 . Comprendre et lancer un script
                                            Python
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="py-3">
                    <NavLink
                        to="telechargement"
                        className={`nav-text ${
                            location.pathname
                                .split("/")
                                .slice(0, 3)
                                .join("/") === "/app/telechargement"
                                ? "text-green-500"
                                : ""
                        }`}
                        onClick={() => {
                            setIsToggleTel((prev) => !prev);
                            if (isTogglePres || isTogglePlan) {
                                setIsTogglePres(false);
                                setIsTogglePlan(false);
                            }
                        }}
                    >
                        {isToggleTel ? (
                            <ExpandMoreIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}{" "}
                        Téléchargement
                    </NavLink>
                    {isToggleTel && (
                        <ul className=" text-md">
                            <li className="mx-5 my-2">
                                <NavLink
                                    to="/app/telechargement/telechargement-donnees"
                                    className={`nav-text-secondary ${
                                        location.pathname ===
                                        "/app/telechargement/telechargement-donnees"
                                            ? "text-green-500"
                                            : ""
                                    }`}
                                    onClick={handleToggle}
                                >
                                    I - Telechargement des données
                                </NavLink>
                            </li>
                            <li className="mx-5 my-2">
                                <NavLink
                                    to="/app/telechargement/telechargement-pdf"
                                    className={`nav-text-secondary ${
                                        location.pathname ===
                                        "/app/telechargement/telechargement-pdf"
                                            ? "text-green-500"
                                            : ""
                                    }`}
                                    onClick={handleToggle}
                                >
                                    II - Telecharement des fichiers PDF
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default MiniNav;
