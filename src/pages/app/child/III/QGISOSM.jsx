import { FiberManualRecord } from "@mui/icons-material";
import React from "react";

function QGISOSM() {
  return (
    <div>
      <h4 className="titre-primary">
        III.5 QGIS et OpenStreetMap
      </h4>

      <div>
        <ul className="text-blue-500">
          <li className="my-2">
            <a href="#whatosm" className="lien">
              Qu'est-ce qu'OpenStreetMap ?
            </a>
          </li>
          <li className="my-2">
            <a href="#visionosm" className="lien">
              Visualiser un fonds OpenStreetMap
            </a>
          </li>
          <li className="my-2">
            <a href="#downloadosm" className="lien">
              Télécharger des données OpenStreetMap
            </a>
          </li>
          <li className="my-2">
            <a href="#repreosm" className="lien">
              Représenter des données OpenStreetMap
            </a>
          </li>
          <li className="my-2">
            <a href="#chargeqgosm" className="lien">
              Charger des données OpenStreetMap à partir de QGIS
            </a>
          </li>
        </ul>
      </div>

      <div id="whatosm" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">Qu'est-ce qu'OpenStreetMap ?
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              <a href="http://www.openstreetmap.org/" className="lien">OpenStreetMap ou OSM</a> est un projet qui a pour but de constituer une base de données géographiques libre du monde. A l'instar de <a href="https://fr.wikipedia.org/" className="lien">Wikipédia</a>, tout un chacun peut participer et enrichir le projet. On peut donc visualiser, réutiliser et même après inscription modifier gratuitement les données.
            </p>
            <p className="paragraphe">
              La partie la plus connue du projet est peut-être la visualisation des données OSM sous forme de <a href="http://www.openstreetmap.org/#map=19/44.79461/-0.61780" className="lien">carte</a> ; mais OSM est avant tout un ensemble de <a href="https://www.openstreetmap.org/way/226888023" className="lien">données</a> géographiques, utilisables entre autres dans un logiciel SIG.
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_5_carte.jpg"
                alt="pôle-ard"
                width={500}
              />
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_5_donnees.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
            <p className=" text-center sous-titre-italic">
              Sous la carte... les données !
            </p>
            <p className="paragraphe mt-5">
              Pour voir les données dans <a href="https://www.openstreetmap.org/" className="lien">OSM</a>, cliquez sur l'icône <span className="font-bold">Couches</span> à droite de la carte puis cochez la case <span className="font-bold">Données de carte</span>.
            </p>
            <p className="paragraphe">
              Les attributs des données OSM sont des paires <span className="font-bold">clé=valeur</span> (key=value). Un élément peut par exemple être caractérisé par <span className="font-bold"> l'attribut (tag) waterway=river</span> pour indiquer qu'il s'agit d'un cours d'eau de type rivière. La clé est ici waterway et la valeur river. Un élément peut être caractérisé par plusieurs attributs (plusieurs paires clé=valeur).
            </p>
            <p className="paragraphe">
              Il existe plusieurs valeurs possibles pour chaque clé, la clé <span className="font-bold">waterway</span> peut par exemple avoir comme valeur <span className="font-bold">river  (rivière), stream (ruisseau), canal</span> ... Retrouvez ici la liste des clés et des valeurs couramment utilisées.
            </p>
            <p className="paragraphe">
              Nous allons découvrir ici différentes manières pour non seulement visualiser un fonds OSM, mais également pour utiliser les données OSM dans QGIS. Il est possible de télécharger ces données à partir de différents sites pour ensuite les ajouter à QGIS, mais aussi de les charger directement dans QGIS.
            </p>
          </div>
        </div>
      </div>

      <div id="visionosm" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">Visualiser un fonds OpenStreetMap
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              Il s'agira ici de simplement visualiser les données OSM comme un fonds raster, c'est-à-dire une image non modifiable. OSM étant une base de données, il est possible de représenter ces données comme on le souhaite ; plusieurs organismes proposent ainsi leur représentation des données OSM. Ces représentations peuvent avoir des objectifs différents : servir de fonds de carte discret, représenter les itinéraires cyclables, les données utiles pour les organisations humanitaires...
            </p>
            <p className="paragraphe">
              Il est possible d'afficher un fonds OpenStreetMap, comme décrit précédemment, soit <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/03_04_fonds_carte.html#III42" className="lien">via l'explorateur avec un serveur de tuiles</a>, soit <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/03_04_fonds_carte.html#III43" className="lien">via l'extension QuickMapServices</a> .
            </p>
            <p className="paragraphe">
              Si vous choisissez la première méthode, voici comment ajouter de nombreux fonds utilisant les données OSM :
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Dans un navigateur internet, rendez-vous dans <a href="https://wiki.openstreetmap.org/wiki/Tile_servers" className="lien">la page du wiki OSM dédiée aux serveurs de tuiles raster </a>: cette page liste les adresses des fonds de carte utilisant les données OSM accessibles en ligne.
              </p>
              <p className="paragraphe">
                Ici, nous allons ajouter le fonds Stamen Toner en noir et blanc.
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_5_stamen_toner.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Copiez l'url du serveur : <span className="font-bold"> https://stamen-tiles.a.ssl.fastly.net/toner/{"z"}/{"x"}/{"y"}.jpg</span>
              </p>
              <p className="paragraphe">
                Dans QGIS, panneau explorateur, clic-droit sur XYZ Tiles → Nouvelle connexion...
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_5_stamen_connexion.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Nom : il s'agit du nom qui apparaîtra dans le panneau explorateur, vous pouvez taper par exemple <span className="font-bold"> Stamen Toner</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> URL : collez l'URL que vous avez préalablement copiée : <span className="font-bold"> https://stamen-tiles.a.ssl.fastly.net/toner/{'z'}/{'x'}/{'y'}.jpg</span>
                  </li>
                </ul>
              </p>
              <p className="paragraphe italic">
                Si l'URL contient le caractère $, il faut le supprimer, par exemple http://c.tile.stamen.com/watercolor/${'z'}/{"$"}{'x'}/{'$'}{'y'}.jpg devient http://c.tile.stamen.com/watercolor/{'z'}/{'x'}/{'y'}.jpg.
              </p>
              <p className="paragraphe">
                Laissez les valeurs par défaut pour les autres paramètres, cliquez sur OK.
              </p>
              <p className="paragraphe">
                Le fonds Stamen Toner apparaît maintenant avec les autres fonds dans la rubrique XYZ Tiles.
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_5_stamen_xyz.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Double-cliquez pour l'ajouter :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_5_stamen_visu.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="downloadosm" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">Télécharger des données OpenStreetMap
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              Il existe plusieurs possibilités pour <a href="http://wiki.openstreetmap.org/wiki/Downloading_data" className="lien">télécharger des données OSM</a>, notamment au <a href="http://wiki.openstreetmap.org/wiki/Shapefiles#Download_shapefiles" className="lien">format Shapefile</a> .
            </p>
            <p className="paragraphe">
              Nous utiliserons ici les données créées par <a href="http://www.geofabrik.de/" className="lien">Geofabrik</a>, une société allemande spécialisée dans les services autour d'OpenStreetMap. Les données sont extraites d'OpenStreetMap et mises à jour quotidiennement. Il est possible de les télécharger par continent, sous-région, pays et parfois région au sein du pays.
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Dans un navigateur internet, rendez-vous sur <a href="http://download.geofabrik.de/" className="lien">http://download.geofabrik.de/</a>.
              </p>
            </div>
            <p className="paragraphe">
              Il est possible de télécharger les données par continent, pays, et parfois région. Nous allons ici télécharger les données du Suriname en Amérique du Sud.
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Dans la colonne <span className="font-bold">Sub-Region</span> , cliquez sur <span className="font-bold"> South America</span>, puis sur téléchargez les données au format shapefile pour le <span className="font-bold">Suriname</span>.
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_5_geofabrik_southamerica.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_5_geofabrik_suriname.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe italic">
                Au cas où le téléchargement échouerait, ces données sont également disponibles avec <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_03_RechercheDonnees.zip" className="lien"> les données de la partie III</a> .
              </p>
              <p className="paragraphe">
                Enregistrer le fichier sur votre ordinateur, décompressez le fichier ZIP obtenu dans votre répertoire de travail : vous obtenez une série de couches au format Shapefile.
              </p>
              <p className="paragraphe">
                Que contiennent ces données ? Pour le savoir, cliquez sur le lien <a href="http://download.geofabrik.de/osm-data-in-gis-formats-free.pdf" className="lien">Format description PDF</a> disponible en cliquant sur <span className="font-bold">Suriname</span>  <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/03_05_donnees_osm.html#thumb" className="lien">à partir de la page où vous avez téléchargé les données</a> .
              </p>
            </div>
            <p className="paragraphe">
              Notez que les noms de couches correspondent aux clés des attributs OSM. Par exemple, la couche <span className="text-green-500 font-bold">gis.osm_waterways_free_1 </span> regroupe les éléments ayant la <a href="http://wiki.openstreetmap.org/wiki/FR:Key:waterway" className="lien"> clé waterway</a>.
            </p>
          </div>
          <div className="bg-style-g p-2">
            <p className="paragraphe">
              Dans un nouveau projet QGIS, ajoutez ces données. Ouvrez la table attributaire de la couche <span className="font-bold text-green-300"> gis.osm_waterways_free_1.</span>
            </p>
            <p className="paragraphe">
              Les valeurs du champ <span className="font-bold">fclass</span> correspondent aux différentes valeurs prises par la clé de la couche pour chaque élément. On trouve par exemple les valeurs river, stream, canal et drain.
            </p>
          </div>
        </div>
      </div>

      <div id="repreosm" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">Représenter des données OpenStreetMap
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              Les données OpenStreetMap ajoutées dans QGIS, comme toute autre donnée, ont un style « par défaut », ne convenant pas pour une carte. Nous allons voir ici comment représenter ces données pour obtenir quelque chose de similaire à ceci :
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_5_style_resultat.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Chargez dans QGIS les couches GeoFabrik suivantes :
              </p>
              <p className="paragraphe">
                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> qgis.osm_roads_free.1
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />  qgis.osm_buildings_a_free.1
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> qgis.osm_railways_free.1
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> qgis.osm_waterways_free.1
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> qgis.osm_water_a_free.1
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> qgis.osm_natural_a_free.1
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> qgis.osm_landuse_a_free.1
                  </li>
                </ul>
              </p>
              <p className="paragraphe">
                Une dernière couche sera nécessaire : ajoutez également la couche land_polygons_suriname.
              </p>
            </div>
            <p className="paragraphe">
              Dans QGIS, le style d'une couche est enregistré dans le projet. Il est également possible de créer des fichiers de style, au format <span className="font-bold">QML</span> (fichier de style QGIS, propre au logiciel) ou <span className="font-bold">SLD</span> (Style Layer Descriptor, utilisé plus largement en cartographie web).
            </p>
            <p className="paragraphe">
              Nous allons ici charger pour chaque couche un fichier de style QML approprié. Ces fichiers ont été élaborés à partir de ceux créés par Charley Glynn et disponibles sur <a href="https://github.com/charleyglynn/OSM-Shapefile-QGIS-stylesheets." className="lien">https://github.com/charleyglynn/OSM-Shapefile-QGIS-stylesheets.</a>
            </p>
            <p className="paragraphe">
              Ces fichiers de style sont adaptés pour un SCR projeté, car certaines taille de symboles sont définies en suivant les unités de la carte et adaptés pour des unités métriques et non en degrés. La première étape consistera donc à adopter un SCR projeté.
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/02_04_changer_systeme.html#II41" className="lien">Modifiez le SCR du projet</a> pour choisir par exemple le SCR World_Robinson (code EPSG 54030), et activez la projection à la volée.
              </p>
              <p className="paragraphe">
                Modifiez l'ordre des couches pour obtenir ceci :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_5_ordre_couches.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Ouvrez la fenêtre <span className="font-bold">Propriétés</span> de la couche <span className="font-bold text-green-500">gis.osm_roads_free_1</span>, rubrique <soan className="font-bold">Symbologie</soan> :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_5_charger_style.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                En bas de la fenêtre, cliquez sur la liste déroulante <span className="font-bold">Style</span> puis sur <span className="font-bold">Charger le style</span>.
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_5_charger_style_fenetre.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Dans la fenêtre qui s'affiche :
              </p>
              <p className="paragraphe">
                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> sélectionnez <span className="font-bold">depuis un fichier</span> dans la liste déroulante
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Fichier : cliquez sur le bouton ... et sélectionnez le fichier de style <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_03_RechercheDonnees.zip" className="lien">roads.qml</a> situé dans le dossier <span className="font-bold">TutoQGIS_03_RechercheDonnees/legendes</span> .
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Catégories : laissez les valeurs par défaut
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Cliquez sur <span className="font-bold">Charger le style</span>
                  </li>
                </ul>
              </p>
              <p className="paragraphe">
                Cliquez ensuite sur OK pour fermer la fenêtre des propriétés.
              </p>
              <p className="paragraphe">
                Zoomez et dézoomez : le style change suivant le niveau de zoom.
              </p>
              <p className="paragraphe">
                Procédez de manière similaire pour chacune des couches, en choisissant à chaque fois le fichier de style approprié.
              </p>
              <p className="paragraphe">
                Pour finir, donnez un fond bleu à votre carte : <span className="font-bold">menu Projet → Propriétés... → rubrique Général, Paramètres généraux (en haut)</span> : cliquez sur la couleur à droite de <span className="font-bold">Couleur d'arrière-plan.</span>
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_5_modif_couleur_fond.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Dans la boîte de dialogue qui s'affiche alors, choisissez une couleur pour la mer, par exemple dans l'exemple ci-dessous R 184 V 217 B 247.
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_5_couleur_rvb.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe italic">
                Notez qu'une manipulation équivalente peut être effectuée dans le mode mise en page, sans changer la couleur de fond dans QGIS.
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_5_style_resultat_2.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
            </div>
            <p className="paragraphe italic">
              Vous pouvez ensuite si vous le désirez modifier le style des couches pour créer votre propre version. Pour enregistrer un fichier de style QML, procédez comme pour charger un style, mais choisissez <span className="font-bold">Enregistrer le style.</span>
            </p>
          </div>
        </div>
      </div>

      <div id="chargeqgosm" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">Charger des données OpenStreetMap à partir de QGIS
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              Nous allons utiliser ici l'extension <a href="https://github.com/3liz/QuickOSM" className="lien">QuickOSM</a> pour charger des données OpenStreetMap directement dans QGIS.
            </p>
            <p className="paragraphe">
              Cette extension permet le téléchargement de données OSM sous forme de couches temporaires, pour l'emprise de votre choix.
            </p>
            <p className="paragraphe">
              Elle offre par rapport aux solutions précédentes une possibilité supplémentaire : <span className="font-bold">choisir la clé et les valeurs voulues</span> . Vous pouvez ainsi télécharger uniquement les cours d'eau de type rivière pour une zone.
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Ouvrez un nouveau projet QGIS. Ajoutez la couche <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_03_RechercheDonnees.zip" className="lien">ne_10m_admin_0_countries</a> située dans le dossier <span className="font-bold">TutoQGIS_03_RechercheDonnees/donnees</span>. Zoomez sur le Suriname.
              </p>
              <p className="paragraphe">
                Pour <span className="font-bold">installer l'extension QuickOSM </span> (cette étape nécessite une connexion internet) :
              </p>
              <p className="paragraphe">
                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> rendez-vous dans le <span className="font-bold"> menu Extensions → Installer/Gérer les extensions,</span> rubrique <span className="font-bold">Toutes</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />  tapez <span className="font-bold">quickosm</span> dans la barre de recherche en haut
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />  cliquez sur le nom de l'extension puis sur le bouton <span className="font-bold">Installer l'extension</span> en bas à droite
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Fermez la fenêtre du gestionnaire d'extension.
                  </li>
                </ul>
              </p>
              <p className="paragraphe">
                Pour accéder à QuickOSM : menu Vecteur → Quick OSM → QuickOSM. La fenêtre suivante s'ouvre :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_5_quickosm_fenetre.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Dans la rubrique <span className="font-bold">Requête rapide</span> :
              </p>
              <p className="paragraphe">
                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />  Choisissez la clé <span className="font-bold">waterway</span> puis la valeur <span className="font-bold">river</span> pour ne récupérer que les cours d'eau de type rivière
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Dans la liste déroulante <span className="font-bold">Dans</span>, sélectionnez l'option <span className="font-bold"> Emprise du canevas</span>  pour limiter le volume de données à charger à la zone visible dans QGIS
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Cliquez enfin sur le bouton <span className="font-bold">Exécuter</span>.                  </li>
                </ul>
              </p>
              <p className="paragraphe">
                Patientez (plus la zone visible dans QGIS est grande, plus c'est long !)... Les données sont chargées et affichées :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_5_quickosm_resultat.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
            </div>
            <p className="paragraphe">
              Ces données sont temporaires : pour les sauvegarder, clic droit sur la couche → Exporter → Sauvegarder les entités sous...
            </p>
            <p className="paragraphe">
              Pour savoir où sont stockées les données temporaires : propriétés de la couche, rubrique Information, ou bien dans l'infobulle qui s'affiche en survolant le nom de la couche.
            </p>
            <p className="paragraphe">
              Nous avons vu ici quelques méthodes pour accéder aux données OSM dans QGIS, mais il en existe d'autres !
            </p>
          </div>
        </div>
      </div>






    </div>
  );
}

export default QGISOSM;
