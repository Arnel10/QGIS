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
    <nav className="text-gray-600  md:w-[330px] pt-5 h-[90vh] md:overflow-y-scroll md:overflow-y-hide md:block hidden">
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
                    location.pathname === "/app/plan-detailler/geodesie"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  II - Géodésie
                </NavLink>

                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      1 . Introduction à la géodésie
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      2 . Des coordonnées, oui mais dans quel système
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      3 . Couches et projets : à chacun son système
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
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
                    location.pathname ===
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
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      1 . Recherche de données SIG sur internet
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      2 . Ajout de données via des flux
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      3 . Ajout de données ponctuelles à partir d'un fichier
                      texte
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      4 . Ajout d'un fonds de carte en ligne
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
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
                    location.pathname === "/app/plan-detailler/georeferencement"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  IV - Géoréférencement
                </NavLink>

                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      1 . Principe
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      2 . Préliminaires
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      3 . Avec un carroyage texte
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      4 . Paramétrage du géoréférencement
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      5 . Lancer le géoréférencement
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
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
                    location.pathname === "/app/plan-detailler/numerisation"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  V - Numérisation
                </NavLink>

                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      1 . Création d'une couche vide
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      2 . Ajout de point
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      3 . Données attributaires
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      4 . Numériser des lignes
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      5 . Numériser des polygones
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
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
                    location.pathname === "/app/plan-detailler/requetes"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  VI - Requêtes
                </NavLink>
                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      1 . Requêtes attributaires
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      2 . Requêtes spatiales
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      3 . Combiner des requêtes
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
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
                    location.pathname === "/app/plan-detailler/calcul-de-champs"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  VII - Calcul de champs
                </NavLink>

                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      1 . Créer et supprimer des champs
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
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
                    location.pathname === "/app/plan-detailler/jointures"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  VIII - Jointures
                </NavLink>

                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      1 . Jointures attributaires
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
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
                    location.pathname === "/app/plan-detailler/analyse-spatiale"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  IX - Analyse spatiale
                </NavLink>

                <ul className="ml-4">
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      1 . Opérations sur données vecteur
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      2 . Opérations sur données raster
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      3 . Croiser vecteur et raster
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      4 . Créer un maillage
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
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
                    location.pathname ===
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
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      1 . Représentation
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
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
                    location.pathname ===
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
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      1 . Traitement de base
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      2 . Exécution d'un outil par lot
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
                    >
                      3 . Construire et utiliser un modèle
                    </NavLink>
                  </li>
                  <li className="my-2">
                    <NavLink
                      to="/path"
                      className="text-sm italic font-nunito tracking-[1px]"
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
