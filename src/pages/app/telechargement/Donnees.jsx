import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Link } from "react-router-dom";
import DownloadingIcon from "@mui/icons-material/Downloading";

function Donnees() {
  return (
    <>
      <div>
        <h4 className="tracking-[1.2px] text-2xl mb-4 text-blue-500 font-normal">
          Téléchargement des données 🤖
        </h4>

        <p className="tracking-[1px] text-gray-700 my-4">
          Les données nécessaires au tutoriel sont des données libres d'accès.
        </p>
        <p className="tracking-[1px] text-gray-700 my-4">
          Chaque dossier contient :
        </p>

        <ul className="tracking-[1px] text-gray-700 my-4 ml-4">
          <li className="my-2">
            <TaskAltIcon /> un sous-dossier données, avec les données
            elles-mêmes.
          </li>
          <li className="my-2">
            <TaskAltIcon /> éventuellement un sous-dossier projets contenant des
            projets QGIS.
          </li>
          <li className="my-2">
            <TaskAltIcon /> un sous-dossier liste_données, avec la liste des
            données, le nom de l'organisme qui les a produites, son site
            internet, et si possible le lien vers les{" "}
            <Link
              href="#"
              className="text-blue-500 hover:text-blue-600 hover:underline"
            >
              métadonnées
            </Link>
            , ou à défaut le nom du fichier de métadonnées.
          </li>
          <li className="my-2">
            <TaskAltIcon /> un sous-dossier metadonnees, avec les fichier de
            métadonnées. Si toutes les métadonnées sont disponibles en ligne, ce
            sous-dossier n'existe pas.
          </li>
        </ul>
      </div>

      <div>
        <h4 className="tracking-[1.2px] italic text-xl mb-4 text-blue-500 font-normal">
          Vous pouvez télécharge ici :
        </h4>
        <ul className="ml-4">
          <li className="my-4">
            <Link
              to="#"
              className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
            >
              <DownloadingIcon /> Toutes les données (280,2 Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link
              to="#"
              className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
            >
              <DownloadingIcon /> Données de la partie I : prise en main (13,1
              Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link
              to="#"
              className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
            >
              <DownloadingIcon /> Données de la partie II : géodésie (2,8 Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link
              to="#"
              className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
            >
              <DownloadingIcon /> Données de la partie III : recherche et ajout
              de données (47,6 Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link
              to="#"
              className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
            >
              <DownloadingIcon /> Données de la partie IV : géoréférencement
              (7,7 Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link
              to="#"
              className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
            >
              <DownloadingIcon /> Données de la partie V : numérisation (20,2
              Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link
              to="#"
              className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
            >
              <DownloadingIcon /> Données de la partie VI : requêtes (8,9 Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link
              to="#"
              className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
            >
              <DownloadingIcon /> Données de la partie VII : calcul de champs
              (4,2 Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link
              to="#"
              className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
            >
              <DownloadingIcon /> Données de la partie VIII : jointures (85,7
              Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link
              to="#"
              className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
            >
              <DownloadingIcon /> Données de la partie IX : analyse spatiale
              (29,7 Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link
              to="#"
              className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
            >
              <DownloadingIcon /> Données de la partie X : représentation et
              mise en page (59,7 Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link
              to="#"
              className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
            >
              <DownloadingIcon /> Données de la partie XI : automatisation de
              traitements (0,6 Mo)
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Donnees;
