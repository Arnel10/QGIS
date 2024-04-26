import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  FileCopyOutlined,
  FolderCopyOutlined,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function EspTrav() {
  return (
    <div className="relative">
      <div className="paragraphe">
        <div>
          <h1 className="titre-primary">I.4 Espace de travail (projet QGS)</h1>
        </div>

        <ul className="ml-8">
          <li className="lien my-2 cursor-pointer">
            <a href="#sig">Qu'est-ce qu'un projet dans un logiciel SIG ?</a>
          </li>
          <li className="lien my-2 cursor-pointer">
            <a href="#donnees">Comment un projet appelle-t-il les données ?</a>
          </li>
        </ul>

        <div className="my-8">
          <div className="bg-style-b" id="sig">
            <div className="sous-titre">
              Qu'est-ce qu'un projet dans un logiciel SIG ?
            </div>
          </div>

          <p className="my-4">
            Un projet est un espace de travail. Sauvegarder un projet équivaut à
            sauvegarder le style utilisé pour chaque couche, le zoom... mais pas
            les données !
          </p>

          <p className="my-4">
            <span className="font-bold">
              Depuis la version 3 de QGIS, le format par défaut pour les projets
              est le QGZ et non plus le QGS
            </span>
            . Un fichier QGZ est en fait un fichier QGS plus d'autres
            informations compressées dans un seul fichier. Il est toujours
            possible d'ouvrir et d'enregistrer des projets au format QGS.
          </p>

          <p className="my-4">
            L'intérêt du format QGZ par rapport au format QGS est de stocker
            plus d'informations directement dans le projet, par exemple les
            symboles utilisés, les polices, les rampes de couleurs, les
            emplacements des étiquettes...
          </p>

          <div className="bg-style-g px-4 py-2">
            <p className="my-4">
              <FolderCopyOutlined />
              {"  "}
              <a href="#" className="lien">
                Ouvrez le projet <span className="font-bold">senegal.qgz</span>
              </a>{" "}
              situé dans le dossier{" "}
              <span className="font-bold">TutoQGIS_01_PriseEnMain/projets</span>
              . Modifiez le zoom et le style des couches.
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/1_4_ouvrir_projet_menu.jpg"
                alt="projet-menu"
              />
            </div>

            <p className="my-4">
              <FileCopyOutlined />
              {"  "}
              Enregistrez votre projet sous un nouveau nom : clic sur l'icône
              correspondante, ou bien{" "}
              <span className="lien">Menu Projet → Enregistrer sous...</span>
            </p>

            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/1_4_sauvegarder_projet_sous.jpg"
                alt="projet-sauvegarde"
              />
            </div>

            <p className="my-4">
              Enregistrez votre projet dans le répertoire
              <span className="font-bold">TutoQGIS_01_PriseEnMain/projets</span>
              , sous le nom{" "}
              <span className="lien font-bold">senegal_02.qgz</span>. Cette
              opération crée un fichier au format QGZ.
            </p>
          </div>

          <p className="img-titre">
            Le fichier QGZ est l'équivalent du WOR sous MapInfo et du MXD sous
            ArcGIS.
          </p>
        </div>

        <div className="bg-style-g px-4 py-2">
          <p>
            Masquez QGIS, décompressez le fichier QGZ et ouvrez ensuite le
            fichier QGS au moyen d'un éditeur de texte type bloc-notes : vous
            pouvez y trouver le chemin des couches chargées dans le projet, la
            description des couleurs utilisées... Fermez ce fichier.
          </p>
        </div>

        <p className="my-4">
          Il n'est bien sûr pas utile de comprendre en détail le contenu du
          fichier QGS, mais il est important de noter qu'il ne s'agit que{" "}
          <span className="font-bold">
            d'un fichier texte, qui va "appeler" les données
          </span>
          .
        </p>

        <p className="my-4 font-bold">
          Si vous fournissez à un collègue votre seul fichier QGZ ou QGS, sans
          les données correspondantes, ce collègue ne pourra pas visualiser les
          données !
        </p>

        <div className="my-8">
          <div className="bg-style-b" id="donnees">
            <div className="sous-titre">
              Comment un projet appelle-t-il les données ?
            </div>
          </div>

          <p className="my-4">
            Le chemin des couches peut être stocké de deux manières dans le
            projet :
          </p>

          <ul className="my-4">
            <li className="my-2">
              1. soit <span className="font-bold">par rapport</span> à
              l'emplacement du QGZ ou QGS{" "}
              <span className="font-bold">(en relatif)</span>
            </li>
            <li className="my-2">
              2. soit <span className="font-bold">"en dur"</span>, sous la forme
              du chemin en entier
            </li>
          </ul>

          <p className="my-4">
            1. Par exemple,{" "}
            <span className="font-bold">../donnees/LA_LOCALITE_P.gpkg</span>{" "}
            signifie qu'il faut remonter d'un dossier par rapport au dossier
            dans lequel est situé le projet, puis descendre dans le dossier
            donnees pour y trouver la couche LA_LOCALITE_P.gpkg
          </p>

          <p className="my-4">
            2. Un exemple de chemin "en dur" :
            <span className="font-bold">
              D:/Travail/SIG/TutoQGIS_01_PriseEnMain
            </span>{" "}
            <span className="font-bold">/donnees/LA_LOCALITE_P.gpkg</span>
            Dans QGIS, par défaut{" "}
            <span className="font-bold">
              les chemins sont sauvegardés en relatif
            </span>
            , ce qui permet de transmettre à un collègue un dossier avec par
            exemple un sous-dossier données et un sous-dossier projets.
          </p>

          <div className="bg-img">
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/1_4_proprietes_projet_general.jpg"
              alt="projet-general"
            />
          </div>

          <p className="my-4 img-titre">
            Si vous désirez changer ce comportement pour un projet, Menu Projet
            → Propriétés... → rubrique Général , changez la propriété
            Enregistrer les chemins de relatif à absolu.
          </p>

          <p className="font-bold my-4">
            Si vous déplacez des couches et que vous ouvrez ensuite un projet
            qui utilise ces couches, vous obtiendrez un message d'erreur : le
            chemin des couches a changé et ne correspond plus à ce qui est
            indiqué dans le projet !
          </p>

          <p className="my-4">
            Il sera néanmoins possible de spécifier à nouveau les emplacements
            des couches du projet.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center relative">
        <div className="py-5 fixed bottom-0 z-20">
          <NavLink
            className="btn-lien"
            to="/app/plan-detailler/prise-en-main/format-donnees-sig"
          >
            <ArrowLeftOutlined sx={{ fontSize: 30 }} />{" "}
            <span className="hidden sm:block">Précédent</span>
          </NavLink>
        </div>

        <div className="py-5 fixed bottom-0 z-20 sm:right-48 right-5">
          <NavLink
            className="btn-lien"
            to="/app/plan-detailler/geodesie/introduction-geodesie"
          >
            <span className="hidden sm:block">Chapitre II</span>{" "}
            <ArrowRightOutlined sx={{ fontSize: 30 }} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default EspTrav;
