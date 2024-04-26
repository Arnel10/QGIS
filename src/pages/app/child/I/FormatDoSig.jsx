import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link, NavLink } from "react-router-dom";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

function FormatDoSig() {
  return (
    <div>
      <div>
        <h1 className="titre-primary">I.3 Formats de données SIG</h1>
      </div>

      <div>
        <ul>
          <li className="my-2">
            <a href="#shp" className="lien">
              Formats vecteur : SHP, GPKG et TAB
            </a>

            <ul className="ml-8">
              <li className="my-2">
                <a href="#standard" className="lien">
                  Format Shapefile ou SHP : un "standard"
                </a>
              </li>

              <li className="my-2">
                <a href="#gpkg" className="lien">
                  Format GPKG (GeoPackage)
                </a>
              </li>

              <li className="my-2">
                <a href="#tab" className="lien">
                  Format TAB (MapInfo)
                </a>
              </li>

              <li className="my-2">
                <a href="#autre" className="lien">
                  Et bien d'autres...
                </a>
              </li>
            </ul>
          </li>

          <li className="my-2">
            <a href="#geotiff" className="lien">
              Un exemple de format raster : le GeoTIFF
            </a>
          </li>

          <li className="my-2">
            <a href="#util" className="lien">
              Quel format utiliser parmi tout ça ?
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-style-g px-4 py-4 paragraphe">
        <p>
          Réduire la fenêtre de QGIS. Ouvrir dans l'explorateur de fichiers de
          votre ordinateur le dossier{" "}
          <span className="font-bold">TutoQGIS_01_PriseEnMain/donnees</span>
        </p>
        <div className="bg-img">
          <img
            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_3_fichiers.jpg"
            alt="1_3fichiers"
          />
        </div>
      </div>

      <p className="img-titre">
        Si dans Windows, vous ne voyez pas les extensions de tous les fichiers :
        dans la fenêtre, Outils → Options des dossier, onglet Affichage,
        décocher la case "Masquer les extensions dont le type est connu".
      </p>

      <div className="py-8">
        <div className="bg-style-b" id="shp">
          <h5 className="sous-titre">Formats vecteur : SHP, GPKG et TAB</h5>
        </div>
        <div>
          <h6 className="sous-titre-italic py-2" id="standard">
            Format Shapefile ou SHP : un "standard"
          </h6>

          <div className="bg-img py-4">
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_3_fichiers_shp.jpg"
              alt="1_3_fichiers"
            />
          </div>

          <p className="paragraphe my-2">
            La couche <span className="lien">DEPARTEMENT_BRETAGNE</span> est au
            format <span className="font-bold">shapefile</span> ou{" "}
            <span className="font-bold">SHP</span>.
          </p>

          <p className="paragraphe my-2">
            Le format shapefile a été créé par ESRI, l'auteur notamment du
            logiciel ArcGIS. Ce format est aujourd'hui l'un des standards du SIG
            et est couramment utilisé par les logiciels libres de SIG.
          </p>

          <p className="paragraphe my-2">
            <span className="font-bold">
              Un fichier SHP est en fait composé de plusieurs fichiers qui
              fonctionnent ensemble
            </span>
            , dont 3 sont obligatoires :
          </p>

          <ul className="my-4 ml-8 paragraphe">
            <li>
              <FiberManualRecordIcon sx={{ fontSize: 10 }} />{" "}
              <span className="font-bold">SHP</span> : contient les informations
              spatiales
            </li>
            <li>
              <FiberManualRecordIcon sx={{ fontSize: 10 }} />{" "}
              <span className="font-bold">DBF</span> : contient les informations
              attributaires
            </li>
            <li>
              <FiberManualRecordIcon sx={{ fontSize: 10 }} />{" "}
              <span className="font-bold">SHX</span> : fichier d'index
            </li>
          </ul>

          <p className="paragraphe my-2">
            Deux autres fichiers sont aussi bien utiles :
          </p>

          <ul className="my-4 ml-8 paragraphe">
            <li>
              <FiberManualRecordIcon sx={{ fontSize: 10 }} />{" "}
              <span className="font-bold">PRJ</span> : contient le code du
              système de coordonnées et éventuellement de la projection, lisible
              par le logiciel ArcGIS
            </li>
            <li>
              <FiberManualRecordIcon sx={{ fontSize: 10 }} />{" "}
              <span className="font-bold">QPJ</span> : contient le code du
              système de coordonnées et éventuellement de la projection, lisible
              par le logiciel QGIS
            </li>
          </ul>

          <p className="my-2 paragraphe">
            Le fichier QPJ contient plus d'informations que le fichier PRJ ;
            néanmoins, QGIS crée également un fichier PRJ pour des raisons de
            compatibilité avec ArcGIS. Si les 2 fichiers sont présents, QGIS
            utilisera le QPJ.
          </p>

          <p className="my-2 paragraphe">
            Pour que le shapefile s'ouvre correctement, tous ces fichiers
            doivent avoir exactement le même nom. QGIS peut ouvrir et éditer les
            fichiers SHP.
          </p>

          <p className="my-2 paragraphe">
            Outre le fait d'être constitué de plusieurs fichiers, le format
            Shapefile possède plusieurs limitations : les noms de colonnes sont
            limités à 10 caractères et doivent éviter les accents (limites dues
            à l'utilisation du format DBF), la taille est limitée à 2Go... Pour
            en savoir plus sur ces aspects, et pour connaître des formats
            alternatifs :{" "}
            <a
              href="http://switchfromshapefile.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="lien"
            >
              Switch from Shapefile
            </a>
            .
          </p>

          <h6 className="sous-titre-italic my-4" id="gpkg">
            Format GPKG (GeoPackage)
          </h6>

          <div className="bg-img my-2">
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_3_fichiers_gpkg.jpg"
              alt="fichier_gpkg"
            />
          </div>

          <p className="paragraphe my-4">
            Les 4 couches{" "}
            <span className="font-green-500">
              LA_DEPARTEMENT, LA_LOCALITE_P, LA_REGION_S
            </span>{" "}
            et <span className="font-green-500">TR_SEGMENT_ROUTIER_L</span> sont
            au format GeoPackage ou GPKG.
          </p>

          <p className="paragraphe my-4">
            Le format <span className="font-bold">GeoPackage</span> constitue
            une alternative au Shapefile. Il est le format par défaut de QGIS
            depuis la version 3. Il est constitué d'
            <span className="font-bold">
              un seul fichier avec l'extension GPKG
            </span>
            .
          </p>

          <p className="paragraphe my-4">
            Il s'agit en réalité d'une base de données (au format SQLite) et
            peut donc{" "}
            <span className="font-bold">
              contenir plusieurs couches, aussi bien vecteur que raster
            </span>
            .
          </p>

          <p className="paragraphe my-4">
            Ce format léger est implémenté aujourd'hui dans la plupart des
            logiciels SIG.
          </p>

          <p className="paragraphe my-4">
            Pour en savoir plus :{" "}
            <a
              href="https://fr.wikipedia.org/wiki/Geopackage"
              target="_blank"
              rel="noopener noreferrer"
              className="lien"
            >
              https://fr.wikipedia.org/wiki/Geopackage
            </a>{" "}
            (en français) ou{" "}
            <a
              href="http://switchfromshapefile.org/#geopackage"
              target="_blank"
              rel="noopener noreferrer"
              className="lien"
            >
              http://switchfromshapefile.org/#geopackage
            </a>{" "}
            (en anglais).
          </p>

          <h6 className="sous-titre-italic my-4" id="tab">
            Format TAB (MapInfo)
          </h6>

          <div className="my-4">
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_3_fichiers_tab.jpg"
              alt="fichier_tab"
            />
          </div>

          <p className="my-4 paragraphe">
            La couche <span className="text-green-500">DEPARTEMENT</span> est au
            format TAB.
          </p>

          <p className="my-4 paragraphe">
            Ce format a été créé pour le logiciel{" "}
            <span className="font-bold">MapInfo</span>. Comme pour le SHP, un
            fichier au format <span className="font-bold">TAB</span> est en fait
            composé de <span className="font-bold">plusieurs fichiers</span> :
          </p>

          <ul className="ml-8 my-4 paragraphe">
            <li className="my-2">
              <FiberManualRecordIcon sx={{ fontSize: 10 }} />
              <span className="font-bold"> MAP</span> : données spatiales (avec
              le système de coordonnées)
            </li>
            <li className="my-2">
              <FiberManualRecordIcon sx={{ fontSize: 10 }} />
              <span className="font-bold"> DAT</span> : données attributaires
            </li>
            <li className="my-2">
              <FiberManualRecordIcon sx={{ fontSize: 10 }} />
              <span className="font-bold"> TAB</span> : structure de la couche
            </li>
            <li className="my-2">
              <FiberManualRecordIcon sx={{ fontSize: 10 }} />
              <span className="font-bold"> ID</span> : lien entre les fichiers
              DAT et MAP
            </li>
            <li className="my-2">
              <FiberManualRecordIcon sx={{ fontSize: 10 }} />
              <span className="font-bold"> IND</span> : fichier d'indexation
              (facultatif)
            </li>
          </ul>

          <p className="my-4 paragraphe">
            QGIS peut ouvrir et éditer les fichiers au format TAB.
          </p>

          <h6 className="sous-titre-italic my-4" id="autre">
            Et bien d'autres...
          </h6>

          <p className="paragraphe my-4">
            Il existe de nombreux autres formats de fichiers vecteur lisibles
            par QGIS. Citons par exemple le{" "}
            <span className="font-bold">GeoJSON</span>, utilisé notamment pour
            les cartes interactives en ligne, le{" "}
            <span className="font-bold">KML</span>, utilisé par Google Maps et
            Google Earth...
          </p>
        </div>
      </div>

      <div className="py-8">
        <div className="bg-style-b" id="geotiff">
          <h5 className="sous-titre">
            Un exemple de format raster : le GeoTIFF
          </h5>
        </div>

        <div className="bg-img">
          <img
            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_3_fichiers_tif.jpg"
            alt="fichiers"
          />
        </div>

        <p className="my-4 paragraphe">
          La couche <span className="lien">srtm_bretagne</span> est au format
          TIF.
        </p>

        <p className="my-4 paragraphe">
          Vous avez peut-être déjà manipulé des images au format TIF. Les TIF
          utilisés dans les logiciels SIG possèdent des informations en plus par
          rapport aux TIF "classiques" : quel type de coordonnées est utilisé,
          quelles sont les coordonnées de l'image... Il s'agit alors d'un cas
          particulier de TIF nommé <span className="font-bold">GeoTIFF</span>.
        </p>

        <p className="my-4 paragraphe">
          L'extension du fichier reste TIF. Cependant, chargé dans un logiciel
          SIG, ce TIF s'affichera directement au bon endroit ; on dit qu'il est
          <span className="font-bold">géoréférencé</span> (cf. partie 4 sur le{" "}
          <Link className="lien">géoréférencement</Link>).
        </p>

        <p className="my-4 paragraphe">
          D'autres fichiers peuvent être associés à un raster :
        </p>

        <ul className="my-4 paragraphe">
          <li className="my-2">
            <span className="font-bold">QML</span> : ce fichier facultatif
            sauvegarde le mode de représentation du raster : du noir vers le
            blanc, valeur minimum et maximum... S'il n'est pas présent, le
            raster s'affichera avec des paramètres par défaut. Il est propre à
            QGIS.
          </li>
          <li className="my-2">
            <span className="font-bold">AUX.XML</span> : ce fichier parfois
            présent sauvegarde des statistiques et parfois le système de
            coordonnées de l'image. Il permet d'accélérer l'affichage et
            certains traitements. Ce fichier est également lisible par le
            logiciel ArcGIS.
          </li>
          <li className="my-2">
            <span className="font-bold">TFW</span> : ouvent appelé{" "}
            <a
              href="http://fr.wikipedia.org/wiki/World_file"
              target="_blank"
              rel="noopener noreferrer"
              className="lien"
            >
              "World file"
            </a>
            , ce fichier stocke les coordonnées de l'image et la taille des
            pixels. Ce type de fichier existe pour plusieurs formats d'image :
            l'extension sera JGW pour un JPG, PGW pour un PNG etc. Ce fichier
            n'est pas nécessaire si les informations sont déjà contenues dans
            l'en-tête de l'image (ce qui est le cas pour notre GeoTIFF). Les
            world file sont de moins en moins utilisés dans les SIG ; ils
            peuvent cependant être utiles pour un logiciel non SIG ou pour un
            format d'image ne permettant pas le stockage d'informations de
            localisation dans son en-tête.
          </li>
        </ul>

        <p className="my-4 img-titre">
          Pour en savoir plus sur ce format, vous pouvez lire cet article (en
          anglais){" "}
          <a
            href="https://blogs.loc.gov/maps/2023/05/the-secret-life-of-geotiffs/"
            target="_blank"
            rel="noopener noreferrer"
            className="lien"
          >
            sur la vie secrète des GeoTIFFs{" "}
          </a>
          !
        </p>
      </div>

      <div className="py-8">
        <div className="bg-style-b" id="util">
          <h5 className="sous-titre">Quel format utiliser parmi tout ça ?</h5>
        </div>

        <p className="my-4 paragraphe">
          La réponse à cette question dépend de plusieurs critères :
        </p>

        <ul className="my-4 paragraphe">
          <li className="my-2">
            <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Quels formats
            utilisent les gens avec qui vous travaillez au quotidien ?
          </li>
          <li className="my-2">
            <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Quels sont les
            volumes des données que vous manipulez ?
          </li>
          <li className="my-2">
            <FiberManualRecordIcon sx={{ fontSize: 10 }} /> S'agit-il de données
            raster, vecteur ?
          </li>
          <li className="my-2">
            <FiberManualRecordIcon sx={{ fontSize: 10 }} /> Faites-vous des
            traitements sur ces données, ou bien les affichez-vous simplement ?
          </li>
        </ul>

        <p className="paragraphe my-4">
          Utiliser le même format que vos collègues simplifie généralement les
          choses.
        </p>

        <p className="paragraphe my-4">
          Dans ce tutoriel, nous utiliserons surtout des données au format
          GeoPackage, pour les avantages cités plus haut. Cependant, les
          manipulations sont exactement les mêmes avec des données au format
          Shapefile ou autre.
        </p>
      </div>

      <div className="flex justify-between items-center relative">
        <div className="py-5 fixed bottom-0 z-20">
          <NavLink
            className="btn-lien"
            to="/app/plan-detailler/prise-en-main/manipulation-information-geographique"
          >
            <ArrowLeftOutlined sx={{ fontSize: 30 }} />{" "}
            <span className="hidden sm:block">Précédent</span>
          </NavLink>
        </div>

        <div className="py-5 fixed bottom-0 z-20 sm:right-48 right-5">
          <NavLink
            className="btn-lien"
            to="/app/plan-detailler/prise-en-main/espace-de-travail"
          >
            <span className="hidden sm:block">Suivant</span>{" "}
            <ArrowRightOutlined sx={{ fontSize: 30 }} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default FormatDoSig;
