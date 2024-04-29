import { FiberManualRecord } from "@mui/icons-material";
import React from "react";

function RechDonSi() {
  return (
    <div>
      <h4 className="titre-primary">III.1 Recherche de données SIG sur internet
      </h4>
      <div>
        <ul className="text-blue-500">
          <li className="my-2">
            <a href="#donfrance" className="lien">
              Données nationales pour la France
            </a>
            <ul className="ml-8">
              <li>
                <a href="#tsukasa" className="lien">
                  Avec l'IGN
                </a>
              </li>
              <li>
                <a href="#geodatagov" className="lien">
                  Avec geo.data.gouv.fr
                </a>
              </li>
            </ul>
          </li>
          <li className="my-2">
            <a href="#dataworld" className="lien">
              Données mondiales
            </a>
            <ul className="ml-8">
              <li>
                <a href="#nateath" className="lien">
                  Avec Natural Earth
                </a>
              </li>
              <li>
                <a href="#datasrtm" className="lien">
                  Avec les données SRTM
                </a>
              </li>
            </ul>
          </li>
          <li className="my-2">
            <a href="#restwith" className="lien">
              Et tout le reste ?
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <p className="paragraphe">
          Il est possible de trouver sur internet des <span className="font-bold">données déjà géoréférencées, c'est-à-dire possédant déjà des coordonnées, donc directement utilisables dans un SIG</span> . Ces données peuvent être vecteur ou raster.
        </p>
        <p className="paragraphe">
          Dans le cas de <span className="font-bold">données vecteur</span> , le format le plus courant est sans doute le shapefile ; on trouvera aussi des données dans d'autres formats, par exemple GeoPackage, GeoJSON, KML...
        </p>
        <p className="paragraphe">
          Dans le cas de <span className="font-bold">données raster</span>, on pourra trouver par exemple des données au format geotiff (TIF géoréférencé, c'est-à-dire avec des coordonnées lui permettant de se superposer correctement à d'autres couches).
        </p>
        <p className="paragraphe">
          Parfois, on ne trouvera que des <span className="font-bold"> données non géoréférencées</span> (carte papier par exemple, ou simple image trouvée sur internet). Ce cas sera traité dans <a href="#" className="lien"> la partie 4 : géoréférencement.</a>
        </p>
        <p className="paragraphe">
          Cette partie se borne à donner quelques exemples de sites permettant le téléchargement de données SIG. Il en existe beaucoup d'autres !
        </p>
        <p className="paragraphe">
          Ne vous offusquez pas de ne pas voir ici les <span className="font-bold"> données OpenStreetMap </span> : il existe  <a href="#" className="lien">une partie qui leur est spécialement dédiée !</a>
        </p>
      </div>

      <div id="donfrance" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">Données nationales pour la France
          </h5>
        </div>

        <div className="mt-4">
          <h6 className="sous-titre-italic" id="tsukasa">
            Avec l'IGN
          </h6>
          <div className="my-4">
            <p className="paragraphe">
              L'IGN (Institut National de l'Information Géographique et Forestière) diffuse gratuitement la plupart de ses données ici : <a href="https://geoservices.ign.fr/catalogue" className="lien">https://geoservices.ign.fr/catalogue</a>.
            </p>
            <p className="paragraphe italic">
              Si vous êtes étudiant ou bien si vous travaillez dans un laboratoire de recherche, il existe peut-être entre votre structure et l'IGN une convention recherche et enseignement vous donnant accès à plus de données !
            </p>
            <p className="paragraphe">
              Nous allons ici télécharger <span className="font-bold">les communes de la Guyane</span>.
            </p>
          </div>

          <div className="bg-style-g p-2">
            <p className="paragraphe ml-4">
              Sur la page internet <a href="https://geoservices.ign.fr/catalogue" className="lien">https://geoservices.ign.fr/catalogue</a> , cliquez sur <a href="https://geoservices.ign.fr/adminexpress" className="lien">ADMIN-EXPRESS</a> .
            </p>
            <p className="paragraphe italic ml-4">
              La page listant beaucoup de données, vous pouvez faire une recherche sur le terme <span className="font-bold">admin</span> avec la fonction <span className="font-bold">rechercher</span>  de votre navigateur (ou le raccourci clavier  <span className="font-bold">ctrl + F</span>  ). Vous pouvez aussi filtrer les données sur <span className="font-bold">Données/services</span> puis <span className="font-bold">Bases de données au format vectoriel</span>
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_1_ign_telechargement.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
          </div>

          <p className="paragraphe">
            La base ADMIN EXPRESS contient des couches de régions, départements, arrondissements, EPCI, communes et chef-lieux pour la France métropolitaine et ultra-marine. Elle remplace la base GEOFLA® qui n'est plus mise à jour et dont la dernière édition est celle de 2016.
          </p>
          <div className="bg-style-g p-2">
            <p className="paragraphe italic ml-4">
              Attention, le téléchargement de ces données peut être un peu long (environ 255 Mo pour la version de juin 2022), vous pouvez également utiliser directement la couche <a href="#" className="lien">COMMUNE</a> disponible en téléchargement.
            </p>
            <p className="paragraphe">
              Téléchargez la dernière édition des données ADMIN EXPRESS par territoire (ici celle de juin 2022) :
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_1_ign_telechargement_2.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
            <p className="paragraphe italic">
              Vous pouvez également télécharger la version COG (<a href="https://geoservices.ign.fr/ressources_documentaires/Espace_documentaire/BASES_VECTORIELLES/ADMIN_EXPRESS_COG/SE_ADMIN_EXPRESS_COG.pdf" className="lien">COG (Code Officiel Géographique)
              </a> ) mais celle-ci est plus lourde.
            </p>
            <p className="paragraphe">
              Dézippez le fichier téléchargé (vous pouvez par exemple utiliser <a href="https://www.7-zip.org/" className="lien">7-zip</a> ).
            </p>

          </div>
          <p className="paragraphe itallic">
            Si le téléchargement échoue, cette couche est également accessible <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_03_RechercheDonnees.zip" className="lien"> en téléchargement.</a>
          </p>
          <div className="bg-style-g p-2">
            <p className="paragraphe">
              Une fois le fichier dézippé, vous pouvez constater qu'il contient une arborescence de dossiers complexe. Comment y voir plus clair ?
            </p>
            <p className="paragraphe">
              En commençant par les métadonnées ! Sur la page de téléchargement d'Admin Express, cliquez sur le bouton <a href="https://geoservices.ign.fr/documentation/donnees/vecteur/adminexpress" className="lien">Documentation</a> puis sur  <a href="https://geoservices.ign.fr/sites/default/files/2021-11/DC_DL_ADMIN_EXPRESS_3-1_0.pdf" className="lien">ADMIN EXPRESS - Descriptif de contenu et de livraison</a> , ce qui ouvre un fichier PDF.
            </p>
            <p className="paragraphe">
              En parcourant ce PDF, vous en saurez plus sur les données que vous venez de télécharger. Vous y trouverez notamment page 7 la liste des différents SCR utilisés pour la France métropolitaine ainsi que pour l'Outre-Mer : le SCR utilisé pour la Guyane est le <span className="font-bold">RGF95 UTM 22, code EPSG 2972</span> .
            </p>
          </div>
          <p className="paragraphe">
            Pour rappel, le but de l'exercice est ici d'afficher les communes de la Guyane, mais vous pouvez très bien décider de travailler sur un autre département !
          </p>
          <div className="bg-style-g p-2">
            <p className="paragraphe">
              La couche <span className="font-bold text-green-400">COMMUNE</span> de la Guyane est donc située dans le sous-dossier <span className="font-bold">ADE_X-X_SHP_UTM22RGFG95_D973</span> où :
            </p>
            <p className="paragraphe ml-4">
              <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} /> <span className="font-bold">X-X correspond</span> à la version d'ADMIN EXPRESS téléchargée, par exemple 3-1
                </li>
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} /> <span className="font-bold">UTM22RGF95</span> correspond au SCR des données (voir plus haut)
                </li>
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} /> <span className="font-bold">D973</span> est le code du département
                </li>
              </ul>
            </p>
            <p className="paragraphe">
              A partir de l'explorateur de fichiers de QGIS, ajoutez les communes de Guyane à la carte.
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_1_commune_guyane_explorateur.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
            <p className="paragraphe">
              Selon votre version de QGIS et votre configuration, une fenêtre peut alors s'ouvrir pour vous demander quelle transformation vous souhaitez utiliser pour passer du SCR RGFG95 (utilisé en Guyane) et WGS84. Dans ce cas, choisissez la 1ère de ces transformations, normalement sélectionnée par défaut.
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_1_choix_transformation.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
          </div>
          <p className="paragraphe italic">
            Il semblerait que les 2 transformations disponibles ici aient les mêmes paramètres. Pour ajouter ou supprimer des transformations dans un projet : Propriétés du projet → rubrique Transformations.
          </p>
          <p className="paragraphe">
            Les <a href="https://docs.qgis.org/3.10/fr/docs/user_manual/working_with_projections/working_with_projections.html#datum-transformations" className="lien">transformations</a> sont des formules mathématiques permettant la conversion des coordonnées d'un point d'un SCR à un autre. Il existe en effet parfois plusieurs transformations possibles pour passer d'un SCR à un autre !
          </p>

          <div className="bg-style-g p-2">
            <p className="paragraphe ml-2">
              Il est possible de paramétrer QGIS pour être informé ou non lorsqu'il existe plusieurs transformations disponibles entre 2 SCR :
            </p>
            <p className="paragraphe ml-2">
              <span className="font-bold"> Menu Préférences → Options → rubrique Transformations</span> : vous pouvez décocher ou cocher la case <span className="font-bold"> Demander de choisir la transformation de datum si plusieurs sont disponibles.</span>
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_1_options_transformations.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
            <p className="paragraphe">
              Si cette case est décochée, QGIS choisira la transformation la plus précise : dans la plupart des cas, ce paramétrage est adapté.
            </p>
          </div>
          <p className="paragraphe">
            Dans les données téléchargées sur le site de l'IGN se trouvent également les autres découpages administratifs pour la Guyane, ainsi que pour les autres territoires ultra-marins et la France métropolitaine.
          </p>
          <p className="paragraphe italic">
            Pour télécharger les données de l'IGN, vous pouvez également passer par <a href="https://geotribu.github.io/ign-fr-opendata-download-ui/index.html" className="lien">ign2map</a> (et profitez-en pour aller faire un tour sur l'excellent site <a href="https://static.geotribu.fr/" className="lien">Geotribu</a> !)
          </p>

        </div>
        <div className="mt-4">
          <h6 className="sous-titre-italic" id="geodatagov">
            Avec geo.data.gouv.fr

          </h6>
          <div className="my-4">
            <p className="paragraphe">
              Le site <a href="https://geo.data.gouv.fr/fr/" className="lien">https://geo.data.gouv.fr/fr/</a> recense les jeux de données géographiques en accès libre pour la France. Nous allons utiliser ce site pour rechercher des données sur les hôpitaux en Guyane.
            </p>
          </div>
          <div className="bg-style-g p-2">
            <p className="paragraphe ml-2">
              Dans la barre de recherche du site internet <a href="https://geo.data.gouv.fr/fr/" className="lien">https://geo.data.gouv.fr/fr/</a>, tapez <span className="font-bold">hôpitaux guyane puis appuyez sur Entrée</span>
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_1_geodatagouv_recherche.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
            <p className="paragraphe">
              Vous obtenez plusieurs résultats. Ici, nous allons télécharger les données <span className="font-bold">Guyane - Finess cat1100 - Etablissements Hospitaliers</span>
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_1_geodatagouv_recherche_2.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
            <p className="paragraphe">
              Les métadonnées nous apprennent que ces données proviennent de la BD Adresse, datent de 2013 et ont été mises à jour il y a 3 ans.
            </p>
            <p className="paragraphe">
              Téléchargez ces données au format <span className="font-bold">GeoJSON</span>, en cliquant sur le bouton GeoJSON en bas à gauche de la fenêtre :
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_1_geodatagouv_recherche_3.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
            <p className="paragraphe italic">
              Si le téléchargement échoue, cette couche est également accessible en <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_03_RechercheDonnees.zip.html" className="lien">téléchargement</a>.
            </p>
            <p className="paragraphe">
              Ajoutez ensuite ces données à QGIS.
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_1_guyane_communes_hopitaux.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
            <p className="paragraphe italic">
              Si vous téléchargez les autres jeux de données résultant de la recherche sur "hôpitaux guyane", vous constaterez qu'ils présentent entre eux des différences de localisation et de données attributaires. Quel jeu de données vaut-il mieux utiliser ? Cette question est celle que vous vous poserez systématiquement à chaque nouveau projet, et y répondre peut parfois prendre un temps considérable et représenter un projet en soi ! La première piste de réponse est bien sûr d'aller voir les métadonnées, si elles sont disponibles.
            </p>
          </div>
        </div>
      </div>

      <div id="dataworld" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre"> Données mondiales
          </h5>
        </div>

        <div className="mt-4">
          <h6 className="sous-titre-italic" id="nateath">
            Avec Natural Earth
          </h6>
          <div className="my-4">
            <p className="paragraphe">
              <a href="https://www.naturalearthdata.com/" className="lien">Natural Earth</a> est un jeu de données cartographiques public mondial disponible à 3 échelles différentes. De nombreuses données sont disponibles, notamment les limites administratives, routes, cours d'eau et fonds raster.
            </p>
            <p className="paragraphe">
              Nous allons télécharger ici <span className="font-bold">les limites administratives des pays à petite échelle</span> (peu de niveau de détail).
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe ml-2">
                Sur la page internet <a href="https://www.naturalearthdata.com/downloads/" className="lien">https://www.naturalearthdata.com/downloads/</a> , dans la rubrique <span className="font-bold">Small scale data 1:110m</span> , cliquez sur le bouton <span className="font-bold">Cultural</span>
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_1_naturalearth_telechargement.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Ces données sont utilisables à l'échelle mondiale mais ne seront pas assez détaillées pour travailler à l'échelle d'un pays.
              </p>
              <p className="paragraphe">
                Sur la page suivante, dans Admin 0 - Countries, cliquez sur le bouton Download countries.
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_1_naturalearth_telechargement_2.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe italic">
                Si le téléchargement échoue, cette couche est également accessible en <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_03_RechercheDonnees.zip" className="lien">téléchargement</a>.
              </p>
              <p className="paragraphe">
                Une fois le fichier téléchargé, placez-le dans votre dossier <span className="font-bold"> TutoQGIS_03_RechercheDonnees/donnees</span>.
              </p>
              <p className="paragraphe">
                Ouvrez un nouveau projet QGIS, et à partir de l'explorateur, ajoutez la couche <span className="text-green-300">ne_110m_admin_0_countries</span>. <span className="font-bold">Notez qu'il n'est pas nécessaire de dézipper le fichier pour visualiser les données dans QGIS </span> ! Ceci est très pratique quand on est par exemple à la recherche de données sur internet et évite de dézipper tous les fichiers et donc de se retrouver avec beaucoup de dossiers. Il faudra cependant décompresser les données pour pouvoir les éditer.
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_1_donnees_naturalearth.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h6 className="sous-titre-italic" id="datasrtm">
              Avec les données SRTM
            </h6>
            <div className="my-4">
              <p className="paragraphe">
                Nous avons vu jusqu'ici le téléchargement de quelques données vecteur. Les données raster seront par exemple des images satellite, des fonds de carte, <a href="http://fr.wikipedia.org/wiki/Mod%C3%A8le_num%C3%A9rique_de_terrain" className="lien">des modèles numériques de terrain (MNT)...</a>
              </p>
              <p className="paragraphe">
                Nous allons ici télécharger <span className="font-bold"> un modèle d'élévation pour le Kenya.</span>
              </p>
              <p className="paragraphe">
                Un <span className="font-bold">modèle d'élévation numérique (Digital Elevation Model ou DEM)</span> se rapproche d'un MNT, mais il ne mesure pas l'altitude au sol mais l'altitude des éléments présents au sol. Si une forêt est présente, ce sera donc l'altitude du sommet des arbres qui sera mesurée et non l'altitude du sol, idem si des bâtiments sont présents.
              </p>
              <p className="paragraphe">
                On trouve sur internet deux DEM à couverture mondiale en libre accès : le modèle <span className="font-bold">ASTER</span> issu d'une collaboration NASA/METI (Ministry of Economy, Trade and Industry of Japan) et le modèle <span className="font-bold">SRTM</span> issu d'une collaboration NASA/NGA (National Geospatial-Intelligence Agency). Nous allons voir ici le cas du SRTM.
              </p>
              <div className="bg-style-g p-2">
                <p className="paragraphe ml-2">
                  Rendez-vous sur <a href="http://dwtkns.com/srtm/" className="lien">http://dwtkns.com/srtm/</a> . Un avertissement en haut de la page indique que l'outil ne fonctionne plus, mais il semble néanmoins opérationnel.
                </p>
                <p className="paragraphe">
                  Cliquez sur une des cases recouvrant le Kenya (par exemple la dalle <span className="font-bold">srtm_44_12</span> ) :
                </p>
                <div className="bg-img">
                  <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_1_telechargement_srtm.jpg"
                    alt="pôle-ard"
                    width={500}
                  />
                </div>
                <p className="paragraphe">
                  Téléchargez la dalle au format GeoTIFF, placez le fichier dans votre dossier <span className="font-bold">TutoQGIS_03_RechercheDonnees/donnees</span> . Il n'est pas nécessaire de dézipper le fichier obtenu.
                </p>
                <p className="paragraphe">
                  Dans QGIS, ajoutez le fichier TIF téléchargé au moyen de l'explorateur.
                </p>
                <div className="bg-img">
                  <img
                    src="
                    https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_1_srtm_kenya.jpg"
                    alt="pôle-ard"
                    width={500}
                  />
                </div>
                <p className="paragraphe italic">
                  Au cas où le téléchargement échouerait, cette couche est également disponible <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_03_RechercheDonnees.zip" className="lien">avec les autres données du tutoriel.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="restwith" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">Et tout le reste ?
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              Selon la zone sur laquelle vous travaillez et votre sujet, il existe de nombreux sites avec des données géographiques en téléchargement. En voici quelques uns en vrac, qui seront ou non pertinents pour vous :
            </p>
            <p className="paragraphe">
              <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} /> Natural Earth : données à l'échelle mondiale : limites administratives, hydrographie, bathymétrie, fonds de carte raster... <br /> <a href="http://www.fao.org/geonetwork/" className="lien">http://www.fao.org/geonetwork/</a>
                </li>
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} /> FAO (Food and Agriculture Organisation) : catalogue de métadonnées donnant accès à un large éventail de données vecteur ou raster, en particulier sur les pays du Sud. <br /> <a href="http://www.fao.org/geonetwork/" className="lien">http://www.fao.org/geonetwork/</a>
                </li>
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} /> geo.data.gouv.fr : portail national français de données géographiques <br /> <a href="https://geo.data.gouv.fr/fr/" className="lien">https://geo.data.gouv.fr/fr/</a>
                </li>
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} /> OpenStreetMap : extractions de données au format SHP ou OSM, fourni par Geofabrik : <br /> <a href="http://download.geofabrik.de/" className="lien">http://download.geofabrik.de/</a>
                </li>
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} /> IGN : nombreuses données disponibles pour la France, dont un grand nombre en libre accès <br /> <a href="https://geoservices.ign.fr/catalogue" className="lien">https://geoservices.ign.fr/catalogue</a>
                </li>
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} /> cadastre.data.gouv.fr : données cadastrales françaises en opendata <br /> <a href="https://cadastre.data.gouv.fr/datasets/plan-cadastral-informatise" className="lien">https://cadastre.data.gouv.fr/datasets/plan-cadastral-informatise</a> <br /> (pour exploiter les données du cadastre au format edigeo sous QGIS : voir
                  <a href="http://atelier.adullact.org/projects/edigeo/" className="lien">ce projet</a> et sa  <a href="http://atelier.adullact.org/frs/download.php/file/8387/documentationEDIGEO-0.90.pdf" className="lien">documentation</a> )
                </li>
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} /> THEIA : structure nationale inter-organismes ayant pour vocation de faciliter l’usage des images satellite <br /> <a href="http://www.theia-land.fr/" className="lien">http://www.theia-land.fr/</a>
                </li>
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} /> GADM : limites administratives accessibles par pays <br /> <a href="http://www.gadm.org/" className="lien">http://www.gadm.org/</a>
                </li>
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} /> ASTER : modèle d'élévation, données mondiales téléchargeables par dalles <br /> <a href="https://search.earthdata.nasa.gov/" className="lien">https://search.earthdata.nasa.gov/</a>
                </li>
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} /> SRTM : modèle d'élévation, données mondiales téléchargeables par dalles <br /> <a href="http://dwtkns.com/srtm/" className="lien">http://dwtkns.com/srtm/</a>
                </li>
              </ul>
            </p>
            <p className="paragraphe">
              Vous pouvez également tester une recherche internet avec quelques mots clés, de préférence dans la langue du pays ou en anglais, ainsi que par exemple le mot clé shapefile, qui reste un format de données SIG très utilisé. De manière générale, on trouve beaucoup de données accessibles en téléchargement, mais attention à la date de ces données, à leur échelle, leur mode de fabrication... qui peuvent ne pas être en adéquation avec vos questions.
            </p>
          </div>
        </div>
      </div>





    </div >

  );
}

export default RechDonSi;
