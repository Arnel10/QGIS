import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { NavLink } from "react-router-dom";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

function ManipInfoGeo() {
  return (
    <div className="relative">
      <div>
        <h1 className="titre-primary">
          I.2 Manipuler de l'information géographique
        </h1>

        <div>
          <ul className="text-blue-500 ml-4">
            <li>
              <a href="#ajout" className="lien">
                Ajout et suppression d'une couche de données vecteur
              </a>
              <ul className="ml-12">
                <li>
                  <a href="#menu" className="lien">
                    Par le menu
                  </a>
                </li>
                <li>
                  <a href="#explorateur" className="lien">
                    Par l'explorateur de fichiers
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#interface" className="lien">
                L'interface de QGIS
              </a>
            </li>
            <li>
              <a href="#propriete" className="lien">
                Propriétés d'une couche vecteur
              </a>
              <ul className="ml-12">
                <li>
                  <a href="#changer" className="lien">
                    Changer la représentation d'une couche
                  </a>
                </li>
                <li>
                  <a href="#emplacement" className="lien">
                    Connaître l'emplacement d'une couche
                  </a>
                </li>
                <li>
                  <a href="#filtre" className="lien">
                    Filtrer les données
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#raster">Ajout d'une couche raster</a>
            </li>
            <li>
              <a href="#modifier">
                Propriétés d'une couche raster : modifier le style
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-8">
        <div className="bg-style-b" id="ajout">
          <h5 className="sous-titre">
            Ajout et suppression d'une couche de données vecteur
          </h5>
        </div>

        <div className="my-4" id="menu">
          <h6 className="sous-titre-italic my-4">Par le menu</h6>

          <div className="bg-style-g py-4 px-2">
            <p className="paragraphe">
              Lancez QGIS. Depuis QGIS 3, il existe une interface unique pour
              ajouter des couches vecteurs, rasters etc. : le gestionnaire des
              sources de données.
            </p>

            <p className="paragraphe">
              Pour ajouter une couche vecteur via cette interface, plusieurs
              solutions au choix :
            </p>

            <ul className="ml-8">
              <li>
                <p className="lien cursor-pointer">
                  <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Menu couche →
                  Gestionnaire des sources de données
                </p>

                <img
                  className="my-4"
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_ajout_couche_gestionnaire_menu.jpg"
                  alt="gest-menu"
                />
              </li>

              <li className="paragraphe">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> cliquer sur
                l'icône{" "}
                <span className="font-bold">
                  Ouvrir le gestionnaire des sources de données{" "}
                </span>
              </li>

              <li className="paragraphe">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> utiliser le
                raccourci clavier <span className="font-bold">ctrl + L</span>{" "}
                (minuscule)
              </li>
            </ul>

            <p className="paragraphe">
              Si vous souhaitez retrouver vos habitudes de QGIS 2.18, vous
              pouvez également procéder ainsi :
            </p>

            <ul className="ml-8">
              <li>
                <p className="lien cursor-pointer">
                  <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Menu couche →
                  Ajouter une couche → Ajouter une couche vecteur...
                </p>

                <img
                  className="my-4"
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_ajout_couche_vecteur_menu.jpg"
                  alt="ajout-couche"
                />
              </li>

              <li className="paragraphe">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> cliquer sur
                l'icône{" "}
                <span className="font-bold">
                  Cliquer sur l'icône{" "}
                  <span className="font-bold">Ajouter une couche vecteur</span>{" "}
                  (il faut activer la barre d'outils{" "}
                  <span className="font-bold">Gestion des couches</span> si ce
                  n'est pas déjà fait : menu Vue → Barres d'outils → Gestion des
                  couches)
                </span>
              </li>

              <li className="paragraphe">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> utiliser le
                raccourci clavier
                <span className="font-bold">ctrl + majuscule + v</span>{" "}
              </li>
            </ul>

            <p className="paragraphe">
              Dans tous les cas, vous arrivez normalement à cette fenêtre :
            </p>

            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_ajout_couche_vecteur_gestionnaire.jpg"
              alt="vecteur-gestionnaire"
            />

            <ul className="ml-8">
              <li>
                <p className="paragraphe">
                  <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Vérifiez que
                  vous êtes bien dans la rubrique{" "}
                  <span className="font-bold">Vecteur</span>. Par défaut, le
                  gestionnaire des sources de données s'ouvre dans la dernière
                  rubrique utilisée.
                </p>
              </li>

              <li className="paragraphe">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Type de source
                et encodage : laissez les valeurs par défaut. Pour en savoir
                plus sur ce qu'est l'encodage :
                <a
                  href="http://fr.wikipedia.org/wiki/Codage_de_caract%C3%A8res"
                  className="lien"
                >
                  {" "}
                  http://fr.wikipedia.org/wiki/Codage_de_caractères
                </a>
              </li>

              <li className="paragraphe">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Cliquez sur ...
                à gauche de{" "}
                <span className="font-bolds">Jeux de données vectorielles</span>{" "}
                et sélectionnez la couche{" "}
                <span className="font-bold text-green-500 hover:underline cursor-pointer">
                  DEPARTEMENT_BRETAGNE.shp
                </span>{" "}
                située dans le dossier{" "}
                <span className="font-bold">
                  TutoQGIS_01_PriseEnMain/donnees
                </span>
                .
              </li>
            </ul>
          </div>

          <p className="paragraphe">
            Cette manipulation enlève seulement la couche de QGIS ; elle reste
            présente sur votre ordinateur, prête à être ajoutée à nouveau dans
            QGIS.
          </p>
        </div>

        <div className="my-4" id="explorateur">
          <h6 className="sous-titre-italic">Par l'explorateur de fichiers</h6>
          <div className="bg-style-g py-4 px-2">
            <p className="paragraphe">
              Une autre méthode, peut-être plus pratique, consiste à utiliser
              l'explorateur de fichiers : activez-le éventuellement dans le{" "}
              <span className="lien cursor-pointer">
                Menu Vue → Panneaux → Panneau Explorateur
              </span>{" "}
              .
            </p>
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_explorateur_menu.jpg"
              alt="explorateur-menu-1"
            />
            <p className="paragraphe">
              Dans ce panneau, naviguez dans l'arborescence de vos fichiers
              jusqu'au dossier où vous avez téléchargé les données de ce
              tutoriel. Faites un{" "}
              <span className="font-bold">
                clic droit sur ce dossier → Ajouter aux marque-pages
              </span>
              .
            </p>

            <p className="paragraphe">
              A partir des marque-pages, rendez-vous dans le dossier
              <span className="font-bold">
                TutoQGIS_01_PriseEnMain/donnees
              </span>{" "}
              et double-cliquez sur la couche{" "}
              <a href="#" className="text-green-500 hover:underline">
                DEPARTEMENT_BRETAGNE.shp
              </a>
              .
            </p>
            <div className="flex justify-center">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_explorateur.jpg"
                alt="explorateur-menu-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="bg-style-b" id="interface">
          <h5 className="sous-titre">L'interface de QGIS</h5>
        </div>

        <div className="bg-img">
          <img
            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_interface.jpg"
            alt="interface-1"
          />
        </div>

        <p className="paragraphe">On peut distinguer 6 zones dans QGIS :</p>

        <ul className="paragraphe">
          <li className="my-2">
            <span className="font-bold text-red-500">1.</span>{" "}
            <span className="font-bold">Menus</span>
          </li>

          <li className="my-2">
            <span className="font-bold text-red-500">2.</span>{" "}
            <span className="font-bold">Barres d'outils.</span>
            <p>
              {" "}
              On y trouve la même chose que dans les menus, mais sous forme
              d'icônes. Pour savoir que fait un outil, passez la souris
              au-dessus et lisez l'infobulle. Pour rajouter ou enlever des
              barres d'outils, clic-droit n'importe où dans cette zone sauf sur
              un outil désactivé, cocher ou décocher les barres d'outils
              voulues.
            </p>
          </li>

          <li className="my-2">
            <span className="font-bold text-red-500">3.</span>{" "}
            <span className="font-bold">Panneau couches,</span>
            <p>
              {" "}
              avec la liste des couches chargées, aussi appelé parfois table des
              matières ou table of contents (TOC). Si plusieurs couches sont
              présentes, vous pouvez en modifier ici l'ordre d'affichage en les
              faisant glisser. Pour faire apparaître ou disparaître cette zone :
              menu <span className="font-bold">Vue → Panneaux → Couches</span>
            </p>
          </li>

          <li className="my-2">
            <span className="font-bold text-red-500">4.</span>{" "}
            <span className="font-bold">Zone de visualisation.</span>
            <p> On peut zoomer ou se déplacer dans cette zone.</p>
          </li>

          <li className="my-2">
            <span className="font-bold text-red-500">5.</span>{" "}
            <span className="font-bold">Panneaux supplémentaires,</span>
            <p>
              par exemple le panneau{" "}
              <span className="font-bold">Explorateur</span>. Pour ajouter des
              panneaux, <span className="font-bold">Menu Vue → Panneaux</span>
            </p>
          </li>

          <li className="my-2">
            <span className="font-bold text-red-500">6.</span>{" "}
            <span className="font-bold">Barre d'état.</span>
            <p>
              On y trouve les coordonnées du point où se trouve la souris,
              l'échelle...
            </p>
          </li>
        </ul>

        <div className="bg-style-g px-2 py-2">
          <div className="bg-img">
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_navigation_bo.jpg"
              alt="navigation"
            />
          </div>
          <p className="paragraphe">
            Testez les différents boutons de zoom et de déplacement.
          </p>
          <p className="paragraphe">
            Pouvez-vous déterminer l'effet de chacun d'entre eux ? A noter : on
            peut aussi zoomer et dézoomer en utilisant la molette de la souris,
            ainsi que le trackpad.
          </p>
          <p className="paragraphe">
            Vous pouvez aussi vous déplacer dans la carte (équivalent de l'outil
            "main") en maintenant la touche espace appuyée, quelque soit l'outil
            en cours dans QGIS. Le même résultat est obtenu en maintenant la
            molette de la souris enfoncée (clic molette prolongé).
          </p>
        </div>
      </div>

      <div className="py-8">
        <div className="bg-style-b" id="propriete">
          <h5 className="sous-titre">Propriétés d'une couche vecteur</h5>
        </div>

        <div className="bg-style-g px-2 py-2">
          <p className="paragraphe">
            Pour accéder aux propriétés de la couche, clic-droit sur le nom de
            la couche dans la table des matières,{" "}
            <span className="lien cursor-pointer">Propriétés</span> (ou bien
            double-clic sur le nom de la couche).
          </p>

          <div className="bg-img">
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_proprietes_couche.jpg"
              alt="prop-couche"
            />
          </div>
        </div>

        <p className="paragraphe">
          Vous avez accès ici à plusieurs propriétés, notamment :
        </p>

        <ul className="paragraphe ml-4">
          <li className="my-2">
            1. la manière dont la couche est représentée, dans la rubrique
            <span className="font-bold">Symbologie</span>. Vous pouvez par
            exemple changer ici la couleur des départements
          </li>
          <li className="my-2">
            2. l'emplacement de la couche, dans la rubrique{" "}
            <span className="font-bold">Information</span>
          </li>
        </ul>

        <h6 className="sous-titre-italic" id="changer">
          Changer la représentation d'une couche
        </h6>

        <div className="bg-style-g px-2 py-2">
          <p className="paragraphe">
            Dans les propriétés de la couche, rubrique{" "}
            <span className="font-bold">Symbologie</span> :
          </p>
          <div className="bg-img">
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_style_couche.jpg"
              alt="style-couche"
            />
          </div>
          <p className="paragraphe">
            Cliquez sur <span className="font-bold">Remplissage simple</span>.
          </p>
        </div>

        <p className="paragraphe">Vous pouvez modifier ici notamment :</p>
        <ul className="paragraphe">
          <li className="my-2">
            <span className="font-bold text-red-500">1.</span> La couleur et le
            style du remplissage (continu, hachures, pas de remplissage...)
          </li>
          <li className="my-2">
            <span className="font-bold text-red-500">2.</span>
            La couleur et le style de la bordure (ligne continue, pas de
            bordure, pointillés...)
          </li>
        </ul>

        <div className="bg-style-g px-2 py-1">
          <p className="paragraphe">
            Essayez de donner à votre couche ces différents styles :
          </p>
          <div className="bg-img py-4 px-2">
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_style1.jpg"
              alt="style-1"
              width={150}
              className="cursor-pointer hover:border-green-600 hover:border transition-all duration-200"
            />
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_style2.jpg"
              alt="style-2"
              width={150}
              className="cursor-pointer hover:border-green-600 hover:border transition-all duration-200"
            />
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_style3.jpg"
              alt="style-3"
              width={150}
              className="cursor-pointer hover:border-green-600 hover:border transition-all duration-200"
            />
          </div>
        </div>

        <h6 className="sous-titre-italic my-4" id="emplacement">
          Connaître l'emplacement d'une couche
        </h6>

        <div className="bg-style-g px-2 py-2">
          <p className="paragraphe">
            Dans les propriétés de la couche, rubrique{" "}
            <span className="font-bold">Information</span> : pouvez-vous dire à
            quel endroit est stockée la couche{" "}
            <a href="" className="text-green-500 hover:underline">
              DEPARTEMENT_BRETAGNE
            </a>{" "}
            sur votre ordinateur ?
          </p>

          <div className="my-2 mx-2">
            <p className="paragraphe italic">
              La couche est stockée à l'endroit indiqué dans la partie{" "}
              <span className="font-bold">Chemin</span>. Cet emplacement varie
              bien sûr en fonction de l'endroit où vous avez enregistré les
              données du tutoriel.
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_emplacement_couche.jpg"
                alt="empl-couche"
              />
            </div>
          </div>
        </div>

        <p className="img-titre py-2">
          Vous pouvez aussi vérifier l'emplacement d'une couche en passant
          simplement la souris sur son nom dans le panneau des couches !
        </p>

        <h5 className="sous-titre-italic" id="filtre">
          Filtrer les données
        </h5>
        <p className="paragraphe my-2">
          Le logiciel offre également la possibilité de de{" "}
          <span className="font-bold">filtrer les données</span>. Cette
          opération ne modifie pas les données elles-mêmes, mais seules les
          données filtrées seront affichées aussi bien sur la carte que dans la
          table attributaire. Toutes les opérations effectuées sur la couche ne
          le seront que sur les données filtrées.
        </p>

        <p className="paragraphe my-2">
          Ceci est très utile pour masquer temporairement certaines données. Si
          vous souhaitez vraiment ne travailler que sur une partie des données,
          il est peut-être plus clair de créer une nouvelle couche contenant
          uniquement les données étudiées.
        </p>

        <p className="paragraphe my-2">
          Ici, nous allons filtrer uniquement le département du Finistère.
        </p>

        <div className="paragraphe bg-style-g px-4 py-2">
          <p>
            Faites un clic droit sur la couche de départements →{" "}
            <span className="font-bold">Filtrer...</span>
          </p>
          <div className="bg-image">
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_filtrer.jpg"
              alt="filter"
            />
          </div>
          <p className="my-2">
            Nous allons ici construire une requête simple pour sélectionner le
            département du Finistère. Les requêtes sont vues plus en détail{" "}
            <a href="#" className="lien">
              ici
            </a>
            !
          </p>

          <ul className="ml-8">
            <li className="my-2">
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Double-cliquez sur
              le champ <span className="font-bold">NOM_DEP</span> pour le faire
              apparaître en bas dans l'expression de filtrage
            </li>
            <li className="my-2">
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Cliquez sur
              l'opérateur <span className="font-bold"></span>LIKE
            </li>
            <li className="my-2">
              <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Cliquez sur le
              bouton Toutes à droite pour voir toutes les valeurs possibles pour
              le champ <span className="font-bold">NOM_DEP</span>, puis
              double-cliquez sur <span className="font-bold">FINISTERE</span>
            </li>
          </ul>

          <p>
            Cliquez ensuite sur le bouton{" "}
            <span className="font-bold">Tester</span> : la requête renvoie un
            résultat. Cliquez sur <span className="font-bold">OK</span>.
          </p>

          <div className="bg-img">
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_filtrer_resultat.jpg"
              alt="filter-2"
            />
          </div>

          <p className="my-2">
            Seul le département du Finistère est visible dans la carte et la
            couche. Notez qu'un petit entonnoir à droite du nom de la couche
            indique qu'un filtre est actif.
          </p>

          <p className="my-2">
            Filtrer ses données est très pratique, mais le risque est d'oublier
            qu'on ne travaille pas sur toutes les données !
          </p>

          <p className="my-2">
            Pour désactiver le filtre, clic droit sur la couche de départements
            → <span className="font-bold">Filtrer...</span>, cliquer sur{" "}
            <span className="font-bold">Effacer</span> puis sur
            <span className="font-bold">OK</span>.
          </p>
        </div>
        <p className="img-titre">
          Le filtres est également accessible à partir des propriétés de la
          couche → rubrique Source → bouton Constructeur de requête tout en bas
          de la fenêtre.
        </p>
      </div>

      <div className="py-8">
        <div className="bg-style-b" id="raster">
          <h5 className="sous-titre">Ajout d'une couche raster</h5>
        </div>

        <div className="bg-style-g px-4 py-4">
          <div className="paragraphe">
            <p>
              Comme lors de l'ajout d'une couche vecteur, vous avez plusieurs
              possibilités pour ajouter une couche raster. Par exemple, en
              utilisant le{" "}
              <span className="font-bold">
                gestionnaire des sources de données :
              </span>
            </p>

            <ul className="ml-8">
              <li className="my-2">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> menu couche →
                Gestionnaire des sources de données
              </li>
              <li className="my-2">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> cliquer sur
                l'icône du gestionnaire des sources de données
              </li>
              <li className="my-2">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} /> utiliser le
                raccourci clavier <span className="font-bold">ctrl + L</span>
              </li>
            </ul>

            <div className="bg-img my-4">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_ajout_couche_raster_fenetre.jpg"
                alt="raster-fenetre"
              />
            </div>

            <p className="my-2">
              Allez dans la rubrique <span className="font-bold">Raster</span>{" "}
              et cliquez sur les ... à droite de{" "}
              <span className="font-bold">Jeux de données Raster</span>.
            </p>

            <div className="bg-img my-4">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_ajout_couche_raster.jpg"
                alt="couche-raster"
              />
            </div>

            <p className="my-2">
              Rendez-vous dans le dossier{" "}
              <span className="font-bold">TutoQGIS_01_PriseEnMain/donnees</span>{" "}
              et sélectionnez la couche{" "}
              <a href="#" className="lien">
                srtm_bretagne.tif
              </a>
              .
            </p>

            <p className="my-2">
              Cliquez sur <span className="font-bold">Ouvrir</span>, puis sur
              <span className="font-bold">Ajouter</span> dans la fenêtre du
              gestionnaire de données.
            </p>

            <p className="my-2">
              Vous pouvez également double cliquer sur la couche dans
              l'explorateur de fichiers.
            </p>

            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_srtm.jpg"
                alt="srtm"
              />
            </div>
            <p className="img-titre my-2">
              Pour obtenir cette représentation, la couche de départements est
              affichée au-dessus du raster, sans remplissage, avec un contour
              rouge.
            </p>
            <p className="my-2">
              Pour modifier l'ordre des couches et donc l'ordre dans lequel
              elles sont affichée,{" "}
              <span className="lien cursor-pointer">
                faites-les glisser dans la liste des couches
              </span>
              .
            </p>
            <div className="bg-img my-2">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_modifier_ordre_couches.gif"
                alt="ordre-couche"
              />
            </div>
          </div>
        </div>

        <p className="paragraphe my-2">
          Il s'agit d'un{" "}
          <a
            href="http://fr.wikipedia.org/wiki/Mod%C3%A8le_num%C3%A9rique_de_terrain"
            className="lien"
          >
            modèle d'élévation numérique
          </a>
          : chaque pixel possède une valeur correspondant à l'altitude en mètres
          des éléments présents au sol. Si une forêt est présente, ce sera donc
          l'altitude du sommet des arbres qui sera mesurée et non l'altitude du
          sol, idem si des bâtiments sont présents.
        </p>

        <div className="bg-style-g px-4 py-2 paragraphe">
          <p className="my-2">
            Après avoir sélectionné la couche{" "}
            <span className="lien">srtm_bretagne.tif</span> en cliquant sur son
            nom dans la table des matières, utilisez l'outil{" "}
            <span className="font-bold">Identifier les entités</span> pour
            cliquer sur un point du raster et connaître l'altitude de ce point.
          </p>

          <div className="bg-img">
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_identifier_fenetre.jpg"
              alt="id-fenetre"
            />
          </div>

          <p className="my-2">
            Par exemple, ici, c'est un pixel d'altitude 336 mètres qui a été
            identifié.
          </p>
        </div>
      </div>

      <div className="py-8">
        <div className="bg-style-b" id="modifier">
          <h1 className="sous-titre">
            Propriétés d'une couche raster : modifier le style
          </h1>
        </div>

        <div className="bg-style-g paragraphe px-4 py-4">
          <p className="py-2">
            Comme pour accéder aux propriétés d'une couche vecteur, clic-droit
            sur le nom de la couche dans la table des matières,{" "}
            <span className="font-bold">Propriétés</span> (ou bien double-clic
            sur le nom de la couche).
          </p>
          <p className="py-2">
            Pour une couche raster, les différentes rubriques des propriétés
            sont un peu différentes de celles d'une couche vecteur ; on retrouve
            néanmoins les rubriques{" "}
            <span className="font-bold">Information</span> et{" "}
            <span className="font-bold">Symbologie</span>.
          </p>
          <p>
            Rendez-vous dans la rubrique{" "}
            <span className="font-bold">Symbologie </span>:
          </p>

          <div className="bg-img">
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_style_raster.jpg"
              alt="style-raster"
            />
          </div>

          <p className="my-2">
            Pour ce raster, les valeurs minimum sont représentées en noir et les
            valeurs maximum en blanc : plus l'altitude est élevée, plus le point
            est clair.
          </p>

          <p className="my-2">
            Vous pouvez modifier les valeurs minimum et maximum, et inverser les
            couleurs en choisissant{" "}
            <span className="font-bold">Blanc vers noir</span> au lieu de{" "}
            <span className="font-bold">Noir vers blanc</span>. Cliquez à chaque
            fois sur <span className="font-bold">Appliquer</span> en bas de la
            fenêtre pour voir le résultat de vos changements.
          </p>
        </div>
        <p className="img-titre">
          Il est également possible de faire des classes en fonction des valeurs
          des pixels, en choisissant le type de rendu (en haut de la fenêtre des
          propriétés rubrique Symbologie) Pseudo-couleur à bande unique.
        </p>
      </div>

      <div className="flex justify-between items-center relative">
        <div className="py-5 fixed bottom-0 z-20">
          <NavLink
            className="btn-lien"
            to="/app/plan-detailler/prise-en-main/definition-sig"
          >
            <ArrowLeftOutlined sx={{ fontSize: 30 }} /> Précédent
          </NavLink>
        </div>

        <div className="py-5 fixed bottom-0 z-20 right-48">
          <NavLink
            className="btn-lien"
            to="/app/plan-detailler/prise-en-main/format-donnees-sig"
          >
            Suivant <ArrowRightOutlined sx={{ fontSize: 30 }} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ManipInfoGeo;
