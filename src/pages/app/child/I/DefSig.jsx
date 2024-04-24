import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FolderIcon from "@mui/icons-material/Folder";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowRightOutlined,
  DragIndicatorOutlined,
  FileCopyOutlined,
  FolderSpecialOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import Footer from "../../../../components/Footer";

function DefSig() {
  return (
    <div>
      <h4 className="tracking-[1.2px] text-xl mb-4 text-blue-500 font-normal">
        I.1 Qu'est-ce qu'un SIG ? (un peu de théorie...)
      </h4>

      <div>
        <ul className="text-blue-500">
          <li className="my-2">
            <a
              href="#defintion"
              className="hover:text-blue-600 hover:underline"
            >
              Définitions
            </a>
            <ul className="ml-8">
              <li>
                <a
                  href="#def-geo"
                  className="hover:text-blue-600 hover:underline"
                >
                  Qu'est-ce que la géomatique ?
                </a>
              </li>
              <li>
                <a
                  href="#def-sys"
                  className="hover:text-blue-600 hover:underline"
                >
                  Qu'est-ce qu'un Système d'Information Géographique ?
                </a>
              </li>
            </ul>
          </li>
          <li className="my-2">
            <a href="#donnees" className="hover:text-blue-600 hover:underline">
              Les données des SIG
            </a>
            <ul className="ml-8">
              <li>
                <a href="#org" className="hover:text-blue-600 hover:underline">
                  Une organisation par couches
                </a>
              </li>
              <li>
                <a href="#type" className="hover:text-blue-600 hover:underline">
                  Deux grands types de données : vecteur et raster
                </a>
              </li>
              <li>
                <a
                  href="#donnees-vect"
                  className="hover:text-blue-600 hover:underline"
                >
                  Les données vecteur : à chaque géométrie ses attributs (et
                  vice-versa)
                </a>
              </li>
              <li>
                <a
                  href="#metadonnées"
                  className="hover:text-blue-600 hover:underline"
                >
                  Des données sur les données : les métadonnées
                </a>
              </li>
            </ul>
          </li>
          <li className="my-2">
            <a href="#role" className="hover:text-blue-600 hover:underline">
              A quoi sert un SIG ?
            </a>
          </li>
        </ul>
      </div>

      <div id="definition" className="mt-8 mb-4">
        <div className="border border-b-blue-500 my-2 border-t-transparent border-l-transparent border-r-transparent">
          <h5 className="text-blue-500 font-nunito text-xl tracking-[1px]">
            Définitions
          </h5>
        </div>
        <div className="mt-4">
          <div className="my-4">
            <h6
              className="text-blue-500 font-nunito text-lg tracking-[1px] italic"
              id="def-geo"
            >
              Qu'est-ce que la géomatique ?
            </h6>
            <p className="tracking-[1px] text-gray-700 my-2">
              La géomatique est l'ensemble des techniques de traitement
              informatique des données géographiques (Journal Officiel, 1994).
              Elle regroupe donc les outils et méthodes permettant
              l'acquisition, le stockage, le traitement et la diffusion de
              données à référence spatiale.
            </p>
          </div>

          <div className="my-4">
            <h6
              className="text-blue-500 font-nunito text-lg tracking-[1px] italic"
              id="def-sys"
            >
              Qu'est-ce qu'un Système d'Information Géographique ?
            </h6>
            <p className="tracking-[1px] text-gray-700 my-2">
              C'est un système permettant de gérer des informations localisées
              géographiquement. Ce système est composé de :
            </p>

            <ul className="ml-8 tracking-[1px] text-gray-700 my-2">
              <li className="my-1">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> données
              </li>
              <li className="my-1">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> logiciels
              </li>
              <li className="my-1">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> matériel
                informatique
              </li>
              <li className="my-1">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> savoir-faire
              </li>
              <li className="my-1">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> utilisateurs
              </li>
            </ul>

            <p className="tracking-[1px] text-gray-700 my-2">
              Par abus de langage, un SIG signifie souvent aujourd'hui le
              logiciel utilisé dans un SIG.
            </p>
          </div>
        </div>
      </div>

      <div id="donnees" className="mt-8 mb-4">
        <div className="border border-b-blue-500 my-2 border-t-transparent border-l-transparent border-r-transparent">
          <h5 className="text-blue-500 font-nunito text-xl tracking-[1px]">
            Les données des SIG
          </h5>
        </div>

        <div>
          <div>
            <h6
              id="org"
              className="text-blue-500 font-nunito text-lg tracking-[1px] italic"
            >
              Une organisation par couches
            </h6>
          </div>

          <p className="tracking-[1px] text-gray-700 my-2">
            Les données sont organisées sous forme de couches superposables.
          </p>

          <div className="flex flex-col justify-center items-center my-8 bg-slate-50 py-2 shadow-md shadow-green-200">
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/1_1_couches.svg"
              alt="pôle-ard"
              width={500}
            />
            <p className="text-sm text-gray-700 italic py-2">
              Source : pôle ARD, adess (domaine public)
            </p>
          </div>

          <div className="mt-10 bg-slate-50 shadow-md shadow-green-200 px-2 py-2 border-l-[5px] border-l-green-600">
            <p className="tracking-[1px] text-gray-700 my-2 flex items-center gap-5">
              <FolderIcon />
              {"  "} Lancez le logiciel QGIS. Ouvrez un projet :{" "}
              <span className="text-blue-500 cursor-pointer hover:text-blue-600 hover:underline">
                Menu Projet → Ouvrir
              </span>
            </p>
            <img
              className="py-2"
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/1_1_ouvrir_projet.jpg"
              alt="illustration"
            />
            <p className="py-4 text-gray-700 tracking-[1px]">
              Sélectionnez le projet{" "}
              <span className="text-blue-600 font-bold">senegal.qgz</span> situé
              dans
              <span className="font-bold">TutoQIS_01_PriseEnMain/projets</span>,
              cliquez sur <span className="font-bold">Ouvrir</span>.
            </p>
            <p className="py-4 text-gray-700 tracking-[1px]">
              Trois couches de données sont affichées dans QGIS, correspondant
              aux villes, rivières et régions du Sénégal.
            </p>
            <p className="py-4 text-gray-700 tracking-[1px]">
              Ces données proviennent de{" "}
              <Link
                to="https://www.anat.sm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 hover:underline"
              >
                l'Agence Nationale de l'Aménagement du Territoire (ANAT) du
                Sénégal
              </Link>{" "}
              et sont disponibles sur{" "}
              <Link
                to="https://www.geosenegal.gouv.sn/Senegal-vectoriel.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 hover:underline"
              >
                GéoSénégal
              </Link>
              , comme vous pouvez le voir dans la liste des données fournie avec
              les données du tutoriel (fichier PDF
              TutoQGIS_01_PriseEnMain_liste_donnees).
            </p>
          </div>

          <div className="mt-10">
            <h6
              id="type"
              className="text-blue-500 font-nunito text-lg tracking-[1px] italic"
            >
              Deux grands types de données :{" "}
              <span className="italic">vecteur et raster</span>
            </h6>

            <p className="tracking-[1px] text-gray-700 my-2">
              On distingue généralement deux types de données :{" "}
              <span className="font-bold">vecteur et raster</span>.
            </p>

            <div className="flex flex-col justify-center items-center my-8 bg-slate-50 py-4 shadow-md shadow-green-200">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/1_1_vecteur.jpg"
                alt="exemple"
                width={500}
              />
              <p className="text-xs text-gray-700 italic py-2 px-8 tracking-[1px]">
                Exemple de données vecteur, l'exemple du Sénégal : régions sous
                forme de polygones, rivières sous forme de lignes et villes sous
                forme de points (source : Agence Nationale de l'Aménagement du
                Territoire (ANAT) du Sénégal).
              </p>
            </div>

            <p className="text-gray-700 py-2 tracking-[1px]">
              Les <span className="font-bold">données vecteurs</span> se
              définissent uniquement par des coordonnées. On trouvera des
              données vecteurs de type <span className="font-bold">point</span>,{" "}
              <span className="font-bold">ligne</span> et{" "}
              <span className="font-bold">polygone</span>. Un point sera défini
              par un couple de coordonnées XY, une ligne ou un polygone par les
              coordonnées de leurs sommets. Une couche vecteur sera soit de type
              point, soit de type ligne, soit de type polygone, mais ne pourra
              contenir de données de deux types différents (sauf dans le cas
              particuliers de certains formats qui ne seront pas abordés dans ce
              tutoriel).
            </p>

            <p className="text-gray-700 py-2 tracking-[1px]">
              On pourra choisir par exemple de représenter des cours d'eau sous
              forme de ligne, des villes sous forme de points...
            </p>

            <p className="text-gray-700 py-2 tracking-[1px]">
              Les données vecteur sont généralement moins volumineuses que les
              données raster. Quelques exemples de formats vecteur : SVG, AI,
              SHP, Geo...
            </p>

            <p className="text-gray-700 py-2 tracking-[1px]">
              Les <span className="font-bold">données raster</span>, ou images,
              sont constituées de pixels. En zoomant sur un raster, on finit par
              distinguer les pixels. Chaque pixel possède une valeur
              correspondant par exemple à sa couleur, ou à son altitude. Un
              raster est caractérisé par la taille d'un pixel, ou résolution.
              Exemples de données raster : carte IGN scannée, photographie
              aérienne, image satellite...
            </p>

            <div className="flex flex-col justify-center items-center my-8 bg-slate-50 py-4 shadow-md shadow-green-200">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/1_1_raster.jpg"
                alt="raster"
                width={500}
              />
              <p className="text-xs text-gray-700 italic py-2 px-8 tracking-[1px]">
                Exemple de données raster (source : IGN).
              </p>
            </div>
          </div>

          <div id="donnees-vect" className="">
            <h6
              id="type"
              className="text-blue-500 font-nunito text-lg tracking-[1px] italic py-2"
            >
              Les données vecteur : à chaque géométrie ses attributs (et
              vice-versa) <span className="italic">vecteur et raster</span>
            </h6>
            <p className="text-gray-700 tracking-[1px]">
              On distingue deux composantes dans les données utilisées dans un
              SIG : spatiale et attributaire. La{" "}
              <span className="font-bold">composante spatiale</span> est
              constituée de la localisation et la géométrie d'un objet, donc de
              ses coordonnées. La{" "}
              <span className="font-bold">composante attributaire</span> est
              constituée des données qui y sont associées. Par exemple, la
              composante spatiale d'un département sera le polygone représentant
              ce département, et sa composante attributaire sera son nom, son
              code, sa population...
            </p>

            <div className="flex flex-col justify-center items-center my-8 bg-slate-50 py-4 shadow-md shadow-green-200">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/1_1_spatial_attrib.jpg"
                alt="donnes-spatiales"
                width={500}
              />
              <p className="text-xs text-gray-700 italic py-2 px-8 tracking-[1px]">
                Données spatiales et attributaires d'une couche SIG (source :
                données Geofla IGN)
              </p>
            </div>

            <p className="text-gray-700 tracking-[1px] py-2">
              Le lien entre composante spatiale et attributaire constitue une
              différence fondamentale avec les logiciels de dessin (DAO) type
              AutoCAD.
            </p>

            <div className="mt-10 bg-slate-50 shadow-md shadow-green-200 px-2 py-2 border-l-[5px] border-l-green-600">
              <p className="tracking-[1px] text-gray-700 my-2 flex items-center gap-5">
                <FolderSpecialOutlined />
                <div>
                  {"  "} Ouvrez le projet{" "}
                  <span className="text-blue-500 cursor-pointer hover:text-blue-600 hover:underline">
                    depts_france.qgz{" "}
                  </span>
                  qui se trouve situé dans le dossier{" "}
                  <span className="text-bold">
                    TutoQIS_01_PriseEnMain/projets
                  </span>
                  .
                </div>
              </p>
              <p className="tracking-[1px] text-gray-700 my-2 flex items-center gap-5">
                <FileCopyOutlined />
                <div>
                  Ouvrez la table attributaire de la couche de départements :
                  Clic droit sur le nom de la couche →{" "}
                  <span className="text-blue-500">
                    Ouvrir la table d'attributs{" "}
                  </span>
                  .
                </div>
              </p>

              <div className="flex flex-col justify-center items-center my-6">
                <img
                  className="py-2"
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/1_1_ouvrir_table.jpg"
                  alt="attribut"
                />
              </div>

              <p className="tracking-[1px] text-gray-700 my-4">
                Sélectionner un département dans la table attributaire, en
                cliquant sur le numéro de la ligne. Le département correspondant
                apparaît dans une couleur différente (jaune par défaut) dans la
                carte.
              </p>

              <p className="tracking-[1px] text-gray-700 my-2 flex items-center gap-5">
                <SearchOutlined />
                <div>
                  Vous pouvez ensuite cliquer sur l'outil qui se trouve situé
                  dans le dossier{" "}
                  <span className="text-bold">zoom sur la sélection</span>
                  pour zoomer sur ce département.
                </div>
              </p>
              <p className="tracking-[1px] text-gray-700 my-2 flex items-center gap-5">
                <DragIndicatorOutlined />
                <div>
                  Vous pouvez maintenant faire l'inverse : sélectionner un
                  département sur la carte, au moyen de l'outil de sélection. La
                  ligne correspondante passe alors en surbrillance dans la table
                  attributaire.
                </div>
              </p>
              <p className="py-2 tracking-[1px] text-gray-700">
                Vous pouvez choisir{" "}
                <span className="font-bold">
                  Ne montrer que les entités sélectionnées
                </span>{" "}
                dans la liste déroulante en bas à gauche de la table, pour ne
                voir que les lignes correspondant aux départements sélectionnés.
              </p>
              <div className="flex flex-col items-center justify-center py-2">
                <img
                  className="py-2"
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/1_1_table_liste_deroulante.jpg"
                  alt="total-entite"
                />
                <p className="text-xs italic px-8 py-2 text-gray-700">
                  Pour que la fenêtre de la table attributaire soit "ancrée"
                  dans QGIS : menu{" "}
                  <span className="font-bold">
                    Préférences → Options → Sources de données{" "}
                  </span>{" "}
                  : cocher la case{" "}
                  <span className="font-bold">
                    Ouvrir la table d'attributs dans une fenêtre intégrée
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          <div id="metadonnées" className="py-8">
            <h6
              id="type"
              className="text-blue-500 font-nunito text-lg tracking-[1px] italic py-2"
            >
              Des données sur les données : les métadonnées{" "}
            </h6>
            <p className="text-gray-700 tracking-[1px] my-2">
              Afin de savoir quelles sont les utilisations que l'on peut faire
              d'une donnée, il est indispensable de posséder des informations
              sur la manière dont a été fabriquée cette donnée, sa date, ses
              limites éventuelles d'utilisation...{" "}
              <span className="font-bold">
                Ces « données sur la donnée » constituent ce qu'on appelle des
                métadonnées
              </span>{" "}
              . Elles peuvent se présenter sous diverses formes : un simple
              fichier texte, une fiche PDF...
            </p>
            <div className="border-l-[4px] border-l-green-600 my-4 shadow-md shadow-green-200 bg-slate-50 py-2">
              <p className="ml-4 text-gray-700 tracking-[1px]">
                Vous pouvez voir ici les métadonnées de la couche Corine Land
                Cover :
                <Link
                  to="http://www.geocatalogue.fr/Detail.do?id=7665"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 hover:underline"
                >
                  {" "}
                  www.geocatalogue.fr/Detail.do?id=7665
                </Link>{" "}
              </p>
            </div>
            <p className="text-gray-700 my-4 tracking-[1px]">
              Il existe aujourd'hui des normes régissant la manière dont sont
              construites ces métadonnées : nombres de rubriques présentes,
              choix des rubriques... Ceci permet de construire des catalogues de
              métadonnées, et facilite in fine l'échange de données entre
              organismes.
            </p>
            <p className="text-gray-700 my-4 tracking-[1px]">
              La métadonnée ci-dessus est tirée du catalogue de métadonnées
              national, le géocatalogue :{" "}
              <Link
                to="http://www.geocatalogue.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 hover:underline"
              >
                {" "}
                www.geocatalogue.fr.
              </Link>
            </p>
            <p className="text-gray-700 my-4 tracking-[1px]">
              Le géocatalogue est mis en oeuvre par le ,
              <Link
                to="http://www.brgm.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 hover:underline"
              >
                {" "}
                BRGM{" "}
              </Link>
              la visualisation étant opérée par l'
              <Link
                to="http://www.ign.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 hover:underline"
              >
                {" "}
                IGN{" "}
              </Link>
              au travers du{" "}
              <Link
                to="http://www.geoportail.gouv.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 hover:underline"
              >
                {" "}
                géoportail
              </Link>
              .
            </p>
          </div>

          <div id="role" className="mt-8">
            <div className="border border-b-blue-500 my-2 border-t-transparent border-l-transparent border-r-transparent">
              <h5 className="text-blue-500 font-nunito text-xl tracking-[1px]">
                Les données des SIG
              </h5>
            </div>
            <p className="text-gray-700 tracking-[1px] py-4">
              Un SIG permet de saisir, représenter, interroger, et mettre à jour
              l’information géographique. Il peut notamment répondre aux
              questions suivantes :
            </p>
            <ul className="ml-8 tracking-[1px] text-gray-700 my-2 py-4">
              <li className="my-1">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> où :
                localisation, étendue
              </li>
              <li className="my-1">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> quoi : quelles
                informations
              </li>
              <li className="my-1">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> comment :
                analyse spatiale
              </li>
              <li className="my-1">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> quand : analyse
                temporelle
              </li>
              <li className="my-1">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> et si... :
                modélisation
              </li>
            </ul>
            <p className="text-gray-700 tracking-[1px] py-4">
              Les SIG sont utilisés aujourd'hui dans des domaines très variés :
              géographie, géologie, écologie, urbanisme, archéologie,
              économie...
            </p>
            <p className="text-gray-700 tracking-[1px] py-4">
              On peut par exemple chercher à répondre à la question : "la taille
              des parcelles de vignes est-elle corrélée avec la pente et
              l'altitude de la parcelle, sur une zone donnée ?"
            </p>
            <p className="text-gray-700 tracking-[1px] py-4">
              Les données nécessaires seront une couche contenant les parcelles
              de vignes, et un{" "}
              <Link
                to="http://fr.wikipedia.org/wiki/Mod%C3%A8le_num%C3%A9rique_de_terrain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 hover:underline"
              >
                Modèle Numérique de Terrain (MNT)
              </Link>{" "}
              de la zone d'étude. La résolution du MNT devra être suffisante en
              comparaison de la taille moyenne des parcelles.
            </p>
            <p className="text-gray-700 tracking-[1px] py-4">
              Le SIG va permettre de croiser les parcelles et le MNT pour
              aboutir à une couche de parcelles où seront renseignées pour
              chaque parcelle par exemple sa taille, sa pente moyenne, son
              altitude moyenne. Ces données pourront être ensuite visualisées
              dans le SIG, et/ou être le point de départ d'analyses statistiques
              dans un autre logiciel.
            </p>
          </div>

          <div className="flex justify-between items-center py-5">
            <div></div>
            {/* <NavLink
              className="text-white text-xl flex items-center
                transition-all duration-200 font-semibold font-nunito 
                tracking-[1px] border border-green-500 px-2 py-1 
                rounded-md bg-green-500 hover:bg-slate-50 hover:text-green-500
     "
              to="/app/plan-detailler/prise-en-main/definition-sig"
            >
              <ArrowLeftOutlined sx={{ fontSize: 30 }} />
            </NavLink> */}
            <NavLink
              className="text-white text-xl flex items-center
                transition-all duration-200 font-semibold font-nunito 
                tracking-[1px] border border-green-500 px-2 py-1 
                rounded-md bg-green-500 hover:bg-slate-50 hover:text-green-500
     "
              to="/app/plan-detailler/prise-en-main/definition-sig"
            >
              <ArrowRightOutlined sx={{ fontSize: 30 }} />
            </NavLink>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default DefSig;
