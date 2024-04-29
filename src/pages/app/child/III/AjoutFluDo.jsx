import { FiberManualRecord, FolderOpenOutlined } from "@mui/icons-material";
import React from "react";

function AjoutFluDo() {
  return (
    <div>
      <h4 className="titre-primary">III.2 Ajout de données via des flux
      </h4>

      <div>
        <ul className="text-blue-500">
          <li className="my-2">
            <a href="#whatwfswfs" className="lien">
              Qu'est-ce qu'un flux WMS ou WFS ?
            </a>
          </li>
          <li className="my-2">
            <a href="#ajoutwms" className="lien">
              Ajout de données via un flux WMS : carte géologique
            </a>
          </li>
          <li className="my-2">
            <a href="#water" className="lien">
              Ajout de données via un flux WFS : cours d'eau
            </a>
          </li>
          <li className="my-2">
            <a href="#pannexploum" className="lien">
              Ajout de données WMS ou WFS via le panneau explorateur
            </a>
          </li>
          <li className="my-2">
            <a href="#avantage" className="lien">
              Avantages et inconvénients des flux
            </a>
          </li>
          <li className="my-2">
            <a href="#adrs" className="lien">
              Quelques adresses de flux WMS et WFS
            </a>
          </li>
        </ul>
      </div>

      <div id="whatwfswfs" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">Qu'est-ce qu'un flux WMS ou WFS ?
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              Il est possible de visualiser directement dans un SIG des données accessibles sur un serveur, sans devoir préalablement les télécharger sur votre ordinateur. Ceci se fait via des flux. Les deux types de flux les plus courant permettant ceci sont les <span className="font-bold">flux WMS (Web Map Service) et WFS (Web Feature Service)</span>.
            </p>
            <p className="paragraphe">
              <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} />  <a href="http://fr.wikipedia.org/wiki/Web_Map_Service" className="lien">Les flux WMS </a> vont vous permettre d'afficher des couches raster, non modifiables.
                </li>
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} /> <a href="http://fr.wikipedia.org/wiki/Web_Feature_Service" className="lien">Les flux WFS</a> vous permettront d'afficher des couches vecteur, non directement modifiables mais que vous pourrez ensuite télécharger au format shapefile.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div id="ajoutwms" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre"> Ajout de données via un flux WMS : carte géologique
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Lancez QGIS si ce n'est pas déjà fait, ou bien créez un nouveau projet.
              </p>
              <p className="paragraphe">
                <FolderOpenOutlined /> Ajoutez-y la couche <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_03_RechercheDonnees.zip" className="lien">DEPARTEMENT_CREUSE.gpkg</a> que vous trouverez dans le dossier <span className="font-bold">TutoQGIS_03_RechercheDonnees/donnees</span>.
              </p>
            </div>
            <p className="paragraphe">
              Nous allons maintenant ajouter au projet la carte géologique de la France au 1/1 000 000è via un flux WMS.
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                <FolderOpenOutlined /> Cliquez sur l'icône du gestionnaire des sources de données, allez dans la rubrique <span className="font-bold">WMS/WMTS</span> :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_2_ajout_wms_fenetre.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Cliquez sur le bouton Nouveau pour créer une nouvelle connexion. La fenêtre suivante apparaît :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_2_wms_nouveau.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "}  <span className="font-bold">Nom</span> : tapez le nom de votre choix, par exemple BRGM
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "}  <span className="font-bold">URL</span> tapez l’URL suivante, qui correspond à l'adresse du serveur WMS du BRGM : https://geoservices.brgm.fr/geologie
                  </li>
                </ul>
              </p>
              <p className="paragraphe italic">
                Les adresses des flux produits par le <a href="https://www.brgm.fr/" className="lien"> Bureau des Recherches Géologiques et Minières (BRGM)</a> sont disponibles <a href="https://infoterre.brgm.fr/page/geoservices-ogc" className="lien">ici</a> .
              </p>
              <p className="paragraphe">
                Laissez les autres paramètres tels quels et cliquez sur <span className="font-bold">OK</span>. Vous voilà à nouveau dans la fenêtre d'ajout d'une couche WMS :
              </p>
              <p className="paragraphe">
                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "}  Après avoir vérifié que votre connexion est bien sélectionnée dans la liste déroulante en haut de la fenêtre, cliquez sur <span className="font-bold">Connexion</span>
                  </li>
                  <div className="bg-img">
                    <img
                      src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_2_wms_connexion.jpg"
                      alt="pôle-ard"
                      width={500}
                    />
                  </div>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "}  Rendez-vous dans la rubrique <span className="font-bold"> 0 GEOSERVICES_GEOLOGIE → 1 GEOLOGIE</span> et sélectionnez la couche correspondant à la <span className="font-bold">carte géologique image de la France au 1/1 000 000</span> (million).
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Vérifiez que les SCR de cette couche soit bien <span className="font-bold">RGF93 / Lambert-93 (code EPSG 2154)</span> afin que la couche ait le même SCR que notre projet : il faudra peut-être cliquer que le bouton à droite du SCR pour sélectionner le Lambert 93
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Cliquez sur <span className="font-bold">Ajouter</span>, patientez... Une fois la couche affichée, vous pouvez fermer la fenêtre du gestionnaire de sources de données
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Modifiez éventuellement votre <span className="font-bold">niveau de zoom</span> : cette carte étant au 1/1 000 000, la couche n'est visible qu'autour de cette échelle (vous pouvez lire l'échelle en cours dans la barre en bas de la fenêtre de QGIS)
                  </li>
                </ul>
              </p>
              <p className="paragraphe">
                Vous devriez obtenir quelque chose de similaire à ceci :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_2_superposition_creuse_geol.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Il peut être nécessaire de changer l'ordre des couches en les faisant glisser dans la table des matières, et de <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/01_02_info_geo.html#I23a" className="lien">modifier le style</a> de la couche du département de la Creuse (ici, pas de remplissage et une bordure blanche).
              </p>
            </div>
            <p className="paragraphe italic">
              Pour aller plus loin : le niveau de zoom auquel une couche est visible est parfois indiqué dans le résumé ; sinon, il est possible d'interroger le serveur qui propose les couches, en allant par exemple ici à l'URL <a href="http://geoservices.brgm.fr/geologie?service=wms&request=GetCapabilities" className="lien">http://geoservices.brgm.fr/geologie?service=wms&request=GetCapabilities</a> dans un navigateur internet, puis en recherchant les balises MinScaleDenominator et MaxScaleDenominator pour la couche choisie. Pour en savoir plus, rendez-vous sur <a href="https://georezo.net/wiki/main/standards/wms" className="lien">le wiki du GeoRezo</a>.
            </p>
          </div>
        </div>
      </div>
      <div id="water" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre"> Ajout de données via un flux WFS : cours d'eau
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              Le but va être ici d'ajouter une couche WFS de cours d'eau disponible via le <a href="https://www.sandre.eaufrance.fr/" className="lien">Sandre</a>(Service d'Administration Nationale des Données et Référentiels sur l'Eau). Les adresses des flux du Sandre sont disponible sur <a href="https://www.sandre.eaufrance.fr/actualite/evolution-des-services-web-g%C3%A9ographiques" className="lien">cette page</a> .
            </p>
            <p className="paragraphe">
              Cette opération est similaire à celle décrite ci-dessus pour une couche WMS.
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Cliquez sur l'icône du gestionnaire des sources de données, rubrique <span className="font-bold"> WFS / OGC API - Features</span> :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_2_ajout_wfs_fenetre.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Cliquez sur le bouton <span className="font-bold">Nouveau</span> pour créer une nouvelle connexion. La fenêtre suivante apparaît :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_2_wfs_nouveau.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Nom : tapez le nom de votre choix, par exemple Sandre
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} URL : tapez l'adresse <span className="font-bold">https://services.sandre.eaufrance.fr/geo/sandre</span>
                  </li>
                </ul>
              </p>
              <p className="paragraphe">
                Cette url est disponible sur <a href="https://www.sandre.eaufrance.fr/actualite/evolution-des-services-web-g%C3%A9ographiques" className="lien">le site du Sandre</a>.
              </p>
              <p className="paragraphe">
                Laissez les autres paramètres tels quels et cliquez sur OK. Vous voilà à nouveau dans la fenêtre d'ajout d'une couche WFS :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_2_wfs_connexion.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Après avoir vérifier que votre connexion est bien sélectionnée dans la liste déroulante en haut de la fenêtre, cliquez sur <span className="font-bold">Connexion</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} En vous aidant éventuellement d'un filtre (<span className="font-bold">plans</span> ), sélectionnez la couche correspondant aux <span className="font-bold">Plans d'eau - BD Topage - Métropole - 2022</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Vérifiez que le SCR soit bien le Lambert 93 RGF93 (code EPSG 2154) afin que toutes nos couches aient le même SCR, en cliquant éventuellement sur le bouton <span className="font-bold">Changer...</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Cliquez sur <span className="font-bold">Ajouter</span>
                  </li>
                </ul>
              </p>
              <p className="paragraphe">
                Vous devriez obtenir quelque chose de similaire à ceci :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_2_superposition_creuse_courdo.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Il peut être nécessaire de changer l'ordre des couches en les faisant glisser dans la table des matières, et de <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/01_02_info_geo.html#I23a" className="lien">modifier le style </a>de la couche du département de la Creuse. Vu qu'il s'agit ici d'un flux WFS et non WMS, il est également possible de modifier le style des cours d'eau. La carte géologique étant une couche WMS, on ne peut modifier son style mais il est possible de lui donner une <span className="font-bold">transparence</span> afin de l'atténuer.
              </p>
            </div>
            <p className="paragraphe">
              De même, s'agissant d'un flux WFS, il est possible de <span className="font-bold">sauvegarder les cours d'eau</span> au format vectoriel sur votre ordinateur : clic droit sur la couche → Exporter → Sauvegarder les entités sous...
            </p>
          </div>
        </div>
      </div>

      <div id="pannexploum" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">Ajout de données WMS ou WFS via le panneau explorateur
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              Une autre méthode, plus rapide, pour créer des connexions et ajouter des couches WMS et WFS est de passer par <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/01_02_info_geo.html#I21b" className="lien">le panneau explorateur</a>.
            </p>
            <p className="paragraphe">
              Cependant, cette méthode ne permet pas autant de paramétrage que le gestionnaire de sources de données : par exemple, il n'est pas possible de choisir le SCR d'une couche.
            </p>
            <p className="paragraphe">
              Nous allons voir ici comment ajouter une couche de mines accessible via la connexion aux flux WMS du BRGM créée <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/03_02_donnees_flux.html#III22" className="lien">plus haut</a>, en utilisant le panneau explorateur.
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/01_02_info_geo.html#I21b" className="lien">Le panneau explorateur</a> permet de charger rapidement des couches, en explorant vos dossiers sur votre ordinateur mais aussi vos connexions à des flux ou des bases de données.
              </p>
              <p className="paragraphe">
                Si vous ne le voyez pas, activez-le dans le Menu Vue → Panneaux → Panneau Explorateur.
              </p>
              <p className="paragraphe">
                Dépliez la rubrique <span className="font-bold">WMS/WMTS</span> en cliquant sur le petit triangle, puis <span className="font-bold">BRGM → Géoservices... → Mines</span> et double-cliquer sur <span className="font-bold">Mines Substances principales - Points</span> pour l'ajouter à QGIS.
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_2_explorateur_mines.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                La légende de la couche est lisible dans la liste des couches :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_2_superposition_creuse_courdo_mines.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
            </div>
            <p className="paragraphe">
              Attention, si la couche avait été par défaut dans un autre SCR que celui du projet et des autres couches (Lambert 93), il y aurait eu des problèmes d'affichage. Il vaut mieux dans ce cas passer par le gestionnaire de sources de données pour spécifier le SCR voulu, s'il est disponible.
            </p>
          </div>
        </div>
      </div>

      <div id="avantage" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">Avantages et inconvénients des flux
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              Un inconvénient d'utiliser des flux est le temps de chargement et la nécessité d'avoir une connexion internet.
            </p>
            <p className="paragraphe">
              Cependant, ils vous assurent de toujours visualiser la dernière mise à jour des données, vous évitent d'encombrer vos ordinateurs et vous permettent de transmettre des projets QGS à des collègues en étant sûr que ceux-ci puissent en visualiser les données (s'ils sont connectés à internet).
            </p>
            <p className="paragraphe">
              En résumé, c'est probablement l'usage que vous ferez des données qui vous fera opter pour l'une ou l'autre solution.
            </p>
          </div>
        </div>
      </div>

      <div id="adrs" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">Quelques adresses de flux WMS et WFS
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              Vous pouvez trouver <a href="https://github.com/igeofr/qgis2/tree/master/flux" className="lien">ici</a> une liste de flux WFS et WMS, créée par l'utilisateur github <a href="https://github.com/igeofr" className="lien">igeofr</a>, merci à lui !
            </p>
            <p className="paragraphe">
              Vous pouvez soit ajouter ces flux manuellement, un par un, comme décrit plus haut, en copiant l'url, soit tous les ajouter en même temps. Pour cela, par exemple pour les flux WFS, collez le contenu entier du fichier QGIS_WFS.xml dans un fichier texte vierge, enregistrez ce fichier sous le nom QGIS_WFS.xml. Ensuite, dans QGIS : gestionnaire de sources → WFS ou WMS → Charger → sélectionnez le fichier XML, et choisissez les flux que vous souhaitez ajouter.
            </p>
            <p className="paragraphe">
              <span className="font-bold">L'IGN</span> propose une grande quantité de <a href="https://geoservices.ign.fr/services-web" className="lien">flux WMS et WFS</a> accessibles gratuitement, n'hésitez pas à aller voir les services webs « experts » !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AjoutFluDo;
