import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Navbar() {
  const [isTogglePres, setIsTogglePres] = useState(false);
  const [isTogglePlan, setIsTogglePlan] = useState(false);
  const [isToggleTel, setIsToggleTel] = useState(false);

  const location = useLocation();

  return (
    <nav className="text-gray-600  md:w-[330px] pt-5 h-[90vh] md:overflow-y-scroll md:overflow-y-hide md:block hidden pb-32">
      <ul className="ml-2">
        <li className="py-3">
          <NavLink
            to="presentation"
            className={`text-xl font-semibold uppercase flex items-center tracking-[1.5px] font-nunito hover:text-green-500 transition-all duration-200 ${
              location.pathname === "/app/presentation" ? "text-green-500" : ""
            }`}
            onClick={() => {
              setIsTogglePres((prev) => !prev);
              if (isTogglePlan || isToggleTel) {
                setIsTogglePlan(false);
                setIsToggleTel(false);
              }
            }}
          >
            {isTogglePres ? <ExpandMoreIcon /> : <ChevronRightIcon />}{" "}
            Présentation
          </NavLink>
        </li>

        <li className="py-3">
          <NavLink
            to="plan-detailler/prise-en-main"
            className={`text-xl font-semibold uppercase flex items-center tracking-[1.5px] font-nunito hover:text-green-500 transition-all duration-200 ${
              location.pathname.split("/").slice(0, 3).join("/") ===
              "/app/plan-detailler"
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
            {isTogglePlan ? <ExpandMoreIcon /> : <ChevronRightIcon />}{" "}
            Plan-detaillé
          </NavLink>
          {isTogglePlan && (
            <ul className=" text-md">
              <li className="mx-5 my-4 tracking-[1px]">
                <NavLink
                  to="plan-detailler/prise-en-main"
                  className={`text-md font-semibold uppercase flex items-center tracking-[1.5px] font-nunito hover:text-green-500 transition-all duration-200 ${
                    location.pathname.split("/").slice(0, 4).join("/") ===
                    "/app/plan-detailler/prise-en-main"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  I - Prise en main
                </NavLink>

                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/prise-en-main/definition-sig"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/prise-en-main/definition-sig"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      1 . Qu'est-ce qu'un SIG
                    </NavLink>
                  </li>

                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/prise-en-main/manipulation-information-geographique"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/prise-en-main/manipulation-information-geographique"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      2 . Manipuler de l'information géographique
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/prise-en-main/format-donnees-sig"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/prise-en-main/format-donnees-sig"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      3 . Format de données SIG
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/prise-en-main/espace-de-travail"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/prise-en-main/espace-de-travail"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      4 . Espace de travail (projet QGIS)
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="mx-5 my-4 tracking-[1px]">
                <NavLink
                  to="plan-detailler/geodesie"
                  className={`text-md font-semibold uppercase flex items-center tracking-[1.5px] font-nunito hover:text-green-500 transition-all duration-200 ${
                    location.pathname.split("/").slice(0, 4).join("/") ===
                    "/app/plan-detailler/geodesie"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  II - Géodésie
                </NavLink>

                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/geodesie/introduction-geodesie"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/geodesie/introduction-geodesie"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      1 . Introduction à la géodésie
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/geodesie/coordonnes-systeme"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/geodesie/coordonnes-systeme"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      2 . Des coordonnées, oui mais dans quel système
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/geodesie/couche-et-projet"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/geodesie/couche-et-projet"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      3 . Couches et projets : à chacun son système
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/geodesie/passer-un-systeme"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/geodesie/passer-un-systeme"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      4 . Passer d'un système de coordonnées à un autre
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="mx-5 my-4 tracking-[1px]">
                <NavLink
                  to="plan-detailler/recherche-et-ajout-de-donnees"
                  className={`text-md font-semibold uppercase flex items-center tracking-[1.5px] font-nunito hover:text-green-500 transition-all duration-200 ${
                    location.pathname.split("/").slice(0, 4).join("/") ===
                    "/app/plan-detailler/recherche-et-ajout-de-donnees"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  III - Recherche et ajout de données
                </NavLink>

                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/recherche-et-ajout-de-donnees/recherche-donne-SIG-internet"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/recherche-et-ajout-de-donnees/recherche-donne-SIG-internet"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      1 . Recherche de données SIG sur internet
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/recherche-et-ajout-de-donnees/ajout-donnees-via-flux"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/recherche-et-ajout-de-donnees/ajout-donnees-via-flux"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      2 . Ajout de données via des flux
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/recherche-et-ajout-de-donnees/ajout-donnees-ponctuel"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/recherche-et-ajout-de-donnees/ajout-donnees-ponctuel"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      3 . Ajout de données ponctuelles à partir d'un fichier
                      texte
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/recherche-et-ajout-de-donnees/ajout-fond-de-carte"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/recherche-et-ajout-de-donnees/ajout-fond-de-carte"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      4 . Ajout d'un fonds de carte en ligne
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/recherche-et-ajout-de-donnees/qgis-osm"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/recherche-et-ajout-de-donnees/qgis-osm"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      5 . QGIS et OpenStreetMap
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="mx-5 my-4 tracking-[1px]">
                <NavLink
                  to="plan-detailler/georeferencement"
                  className={`text-md font-semibold uppercase flex items-center tracking-[1.5px] font-nunito hover:text-green-500 transition-all duration-200 ${
                    location.pathname.split("/").slice(0, 4).join("/") ===
                    "/app/plan-detailler/georeferencement"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  IV - Géoréférencement
                </NavLink>

                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/georeferencement/principe"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/georeferencement/principe"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      1 . Principe
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/georeferencement/preliminaire"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/georeferencement/preliminaire"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      2 . Préliminaires
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/georeferencement/avec-caroyage"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/georeferencement/avec-caroyage"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      3 . Avec un carroyage texte
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/georeferencement/param-georef"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/georeferencement/param-georef"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      4 . Paramétrage du géoréférencement
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/georeferencement/lancer-geo"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/georeferencement/lancer-geo"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      5 . Lancer le géoréférencement
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/georeferencement/avec-couche-ref"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/georeferencement/avec-couche-ref"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      6 . Avec une couche de référence
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="mx-5 my-4 tracking-[1px]">
                <NavLink
                  to="plan-detailler/numerisation"
                  className={`text-md font-semibold uppercase flex items-center tracking-[1.5px] font-nunito hover:text-green-500 transition-all duration-200 ${
                    location.pathname.split("/").slice(0, 4).join("/") ===
                    "/app/plan-detailler/numerisation"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  V - Numérisation
                </NavLink>

                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/numerisation/creation-couche-vide"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/numerisation/creation-couche-vide"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      1 . Création d'une couche vide
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/numerisation/ajout-point"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/numerisation/ajout-point"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      2 . Ajout de point
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/numerisation/donnees-attrib"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/numerisation/donnees-attrib"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      3 . Données attributaires
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/numerisation/numeriser-ligne"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/numerisation/numeriser-ligne"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      4 . Numériser des lignes
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/numerisation/numeriser-pol"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/numerisation/numeriser-pol"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      5 . Numériser des polygones
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/numerisation/quelque-top"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/numerisation/quelque-top"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      6 . Quelques notions de topologie
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="mx-5 my-4 tracking-[1px]">
                <NavLink
                  to="plan-detailler/requetes"
                  className={`text-md font-semibold uppercase flex items-center tracking-[1.5px] font-nunito hover:text-green-500 transition-all duration-200 ${
                    location.pathname.split("/").slice(0, 4).join("/") ===
                    "/app/plan-detailler/requetes"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  VI - Requêtes
                </NavLink>

                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/requetes/requete-attrib"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/requetes/requete-attrib"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      1 . Requêtes attributaires
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/requetes/requete-spati"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/requetes/requete-spati"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      2 . Requêtes spatiales
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/requetes/combiner-requete"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/requetes/combiner-requete"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      3 . Combiner des requêtes
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/requetes/requete-sql"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/requetes/requete-sql"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      4 . Requêtes SQL
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="mx-5 my-4 tracking-[1px]">
                <NavLink
                  to="plan-detailler/calcul-de-champs"
                  className={`text-md font-semibold uppercase flex items-center tracking-[1.5px] font-nunito hover:text-green-500 transition-all duration-200 ${
                    location.pathname.split("/").slice(0, 4).join("/") ===
                    "/app/plan-detailler/calcul-de-champs"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  VII - Calcul de champs
                </NavLink>

                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/calcul-de-champs/creer-suppre-champ"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/calcul-de-champs/creer-suppre-champ"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      1 . Créer et supprimer des champs
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/calcul-de-champs/calc-champ"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/calcul-de-champs/calc-champ"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      2 . Calcul de champ
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="mx-5 my-4 tracking-[1px]">
                <NavLink
                  to="plan-detailler/jointures"
                  className={`text-md font-semibold uppercase flex items-center tracking-[1.5px] font-nunito hover:text-green-500 transition-all duration-200 ${
                    location.pathname.split("/").slice(0, 4).join("/") ===
                    "/app/plan-detailler/jointures"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  VIII - Jointures
                </NavLink>

                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/jointures/jointure-attrib"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/jointures/jointure-attrib"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      1 . Jointures attributaires
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/jointures/jointure-spat"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/jointures/jointure-spat"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      2 . Jointures spatiales
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="mx-5 my-4 tracking-[1px]">
                <NavLink
                  to="plan-detailler/analyse-spatiale"
                  className={`text-md font-semibold uppercase flex items-center tracking-[1.5px] font-nunito hover:text-green-500 transition-all duration-200 ${
                    location.pathname.split("/").slice(0, 4).join("/") ===
                    "/app/plan-detailler/analyse-spatiale"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  IX - Analyse spatiale
                </NavLink>

                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/analyse-spatiale/operation-donnees-vect"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/analyse-spatiale/operation-donnees-vect"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      1 . Opérations sur données vecteur
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/analyse-spatiale/operation-donnees-rast"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/analyse-spatiale/operation-donnees-rast"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      2 . Opérations sur données raster
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/analyse-spatiale/croiser-vect-rast"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/analyse-spatiale/croiser-vect-rast"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      3 . Croiser vecteur et raster
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/analyse-spatiale/creer-maillage"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/analyse-spatiale/creer-maillage"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      4 . Créer un maillage
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/analyse-spatiale/dite-SQL"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/analyse-spatiale/dite-SQL"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      5 . Dites-le avec du SQL
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="mx-5 my-4 tracking-[1px]">
                <NavLink
                  to="plan-detailler/representation-et-mis-en-page"
                  className={`text-md font-semibold uppercase flex items-center tracking-[1.5px] font-nunito hover:text-green-500 transition-all duration-200 ${
                    location.pathname.split("/").slice(0, 4).join("/") ===
                    "/app/plan-detailler/representation-et-mis-en-page"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  X - Représentation et mis en page
                </NavLink>
                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/representation-et-mis-en-page/representation"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/representation-et-mis-en-page/representation"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      1 . Représentation
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/representation-et-mis-en-page/mis-en-page"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/representation-et-mis-en-page/mis-en-page"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      2 . Mise en page
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="mx-5 my-4 tracking-[1px]">
                <NavLink
                  to="plan-detailler/automatisation-des-traitements"
                  className={`text-md font-semibold uppercase flex items-center tracking-[1.5px] font-nunito hover:text-green-500 transition-all duration-200 ${
                    location.pathname.split("/").slice(0, 4).join("/") ===
                    "/app/plan-detailler/automatisation-des-traitements"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  XI - Automatisation de traitements
                </NavLink>

                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/automatisation-des-traitements/traitement-de-base"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/automatisation-des-traitements/traitement-de-base"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      1 . Traitement de base
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/automatisation-des-traitements/execution-lot"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/automatisation-des-traitements/execution-lot"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      2 . Exécution d'un outil par lot
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/automatisation-des-traitements/construire-utilise-modele"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/automatisation-des-traitements/construire-utilise-modele"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      3 . Construire et utiliser un modèle
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="plan-detailler/automatisation-des-traitements/comprendre-lancer-python"
                      className={`text-sm italic font-nunito tracking-[1px] hover:text-green-400 ${
                        location.pathname ===
                        "/app/plan-detailler/automatisation-des-traitements/comprendre-lancer-python"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      4 . Comprendre et lancer un script Python
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
            className={`text-xl font-semibold uppercase flex items-center tracking-[1.5px] font-nunito hover:text-green-500 transition-all duration-200 ${
              location.pathname.split("/").slice(0, 3).join("/") ===
              "/app/telechargement"
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
            {isToggleTel ? <ExpandMoreIcon /> : <ChevronRightIcon />}{" "}
            Téléchargement
          </NavLink>
          {isToggleTel && (
            <ul className=" text-md">
              <li className="mx-5 my-2 tracking-[1px]">
                <NavLink
                  to="/app/telechargement/telechargement-donnees"
                  className={`text-md font-semibold uppercase flex items-center tracking-[1.5px] font-nunito hover:text-green-500 transition-all duration-200 ${
                    location.pathname ===
                    "/app/telechargement/telechargement-donnees"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  I - Telechargement des données
                </NavLink>
              </li>
              <li className="mx-5 my-2 tracking-[1px]">
                <NavLink
                  to="/app/telechargement/telechargement-pdf"
                  className={`text-md font-semibold uppercase flex items-center tracking-[1.5px] font-nunito hover:text-green-500 transition-all duration-200 ${
                    location.pathname ===
                    "/app/telechargement/telechargement-pdf"
                      ? "text-green-500"
                      : ""
                  }`}
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

export default Navbar;
