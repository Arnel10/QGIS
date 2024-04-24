import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Link } from "react-router-dom";
import DownloadingIcon from "@mui/icons-material/Downloading";

function Donnees() {
  return (
    <>
      <div>
        <h4 className="titre-primary">Téléchargement des données 🤖</h4>

        <p className="paragraphe">
          Les données nécessaires au tutoriel sont des données libres d'accès.
        </p>
        <p className="paragraphe">Chaque dossier contient :</p>

        <ul className="paragraphe ml-4">
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
            <Link href="#" className="lien">
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

      <div className="mt-10">
        <h4 className="titre-secondary-italic ">
          Vous pouvez télécharge ici :
        </h4>
        <ul className="ml-4">
          <li className="my-4">
            <Link to="#" className="lien">
              <DownloadingIcon /> Toutes les données (280,2 Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link to="#" className="lien">
              <DownloadingIcon /> Données de la partie I : prise en main (13,1
              Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link to="#" className="lien">
              <DownloadingIcon /> Données de la partie II : géodésie (2,8 Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link to="#" className="lien">
              <DownloadingIcon /> Données de la partie III : recherche et ajout
              de données (47,6 Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link to="#" className="lien">
              <DownloadingIcon /> Données de la partie IV : géoréférencement
              (7,7 Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link to="#" className="lien">
              <DownloadingIcon /> Données de la partie V : numérisation (20,2
              Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link to="#" className="lien">
              <DownloadingIcon /> Données de la partie VI : requêtes (8,9 Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link to="#" className="lien">
              <DownloadingIcon /> Données de la partie VII : calcul de champs
              (4,2 Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link to="#" className="lien">
              <DownloadingIcon /> Données de la partie VIII : jointures (85,7
              Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link to="#" className="lien">
              <DownloadingIcon /> Données de la partie IX : analyse spatiale
              (29,7 Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link to="#" className="lien">
              <DownloadingIcon /> Données de la partie X : représentation et
              mise en page (59,7 Mo)
            </Link>
          </li>
          <li className="my-4">
            <Link to="#" className="lien">
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
