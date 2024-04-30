import { FiberManualRecord } from "@mui/icons-material";
import React from "react";

function AjFonCart() {
    return (
        <div>
            <h4 className="titre-primary">
                III.4 Ajouter un fonds de carte en ligne
            </h4>

            <div>
                <ul className="text-blue-500">
                    <li className="my-2">
                        <a href="#principe" className="lien">
                            Principe
                        </a>
                        <ul className="ml-8">
                            <li>
                                <a href="#defalt" className="lien">
                                    Ajouter un fonds proposé par défaut
                                </a>
                            </li>
                            <li>
                                <a href="#newfont" className="lien">
                                    Ajouter de nouveaux fonds
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="my-2">
                        <a href="#quickMap" className="lien">
                            Afficher un fonds avec l'extension QuickMapServices
                        </a>
                    </li>
                </ul>
            </div>

            <div id="principe" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">Principe</h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Il est possible d'afficher dans QGIS des fonds de
                            carte « en ligne », comme par exemple les fonds{" "}
                            <a
                                href="https://www.openstreetmap.org/"
                                className="lien"
                            >
                                OpenStreetMap
                            </a>{" "}
                            ou Google Maps.{" "}
                            <span className="font-bold">
                                {" "}
                                Ces fonds ne seront pas modifiables
                            </span>{" "}
                            , la seule possibilité étant de les rendre plus ou
                            moins transparents pour les atténuer.
                        </p>
                        <p className="paragraphe italic">
                            Pour en savoir plus sur OpenSreetMap, c'est au{" "}
                            <a href="#" className="lien">
                                chapitre suivant !
                            </a>
                        </p>
                        <p className="paragraphe">
                            Ajouter de tels fonds est utile pour se repérer
                            rapidement, ou bien pour servir de fonds pour une
                            carte ; dans ce dernier cas il faut que le fonds
                            soit adapté à l'objectif de la carte et y apporte
                            des informations utiles sans l'alourdir.
                        </p>
                        <p className="paragraphe">
                            De tels fonds sont dits « tuilés » car ils sont
                            découpés en carrés jointifs (tuiles) pour faciliter
                            l'affichage, à chaque niveau de zoom. On parle
                            également de tuiles XYZ, X et Y correspondant à la
                            position de la tuile et Z au niveau de zoom. Pour en
                            savoir plus :{" "}
                            <a
                                href="https://en.wikipedia.org/wiki/Tiled_web_map"
                                className="lien"
                            >
                                la page (en anglais) de wikipedia
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div id="donfrance" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Afficher un fonds via l'explorateur
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Depuis QGIS 3, il existe une solution pour ajouter
                            des fonds de carte sans installation d'extension.
                        </p>
                        <h6 className="sous-titre-italic" id="defalt">
                            Ajouter un fonds proposé par défaut
                        </h6>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe ml-4">
                                Ouvrez un nouveau projet QGIS.
                            </p>
                            <p className="paragraphe">
                                Rendez-vous dans le panneau{" "}
                                <span className="font-bold">Explorateur</span>{" "}
                                de QGIS. Si vous ne voyez pas ce panneau,
                                activez-le via le{" "}
                                <span className="font-bold">
                                    {" "}
                                    menu Vue → Panneaux → Explorateur
                                </span>{" "}
                                .
                            </p>
                            <p className="paragraphe">
                                Dans ce panneau Explorateur, allez dans la
                                rubrique{" "}
                                <span className="font-bold"> XYZ Tiles</span> :
                                un fonds s'y trouve par défaut : OpenStreetMap.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_4_xyz_tiles.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Double-cliquez sur ce fonds pour l'ajouter à
                                QGIS.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Beaucoup d'autres fonds sont disponibles de la même
                            manière, mais il faut d'abord créer les connexions
                            correspondantes. Cette manipulation ne devra être
                            effectuée qu'une seule fois, les fonds seront
                            ensuite accessibles dans le panneau explorateur de
                            la même manière que le fonds OpenStreetMap proposé
                            par défaut.
                        </p>
                        <h6 className="sous-titre-italic" id="newfont">
                            Ajouter de nouveaux fonds
                        </h6>
                        <p className="paragraphe">
                            Il faut tout d'abord trouver des adresses de fonds à
                            ajouter à QGIS. Vous pouvez trouver quelques
                            adresses au{" "}
                            <a
                                href="https://www.spatialbias.com/2018/02/qgis-3.0-xyz-tile-layers/"
                                className="lien"
                            >
                                bas de cette page
                            </a>{" "}
                            , qui explique par ailleurs comment en obtenir
                            d'autres. Voir aussi{" "}
                            <a
                                href="https://wiki.openstreetmap.org/wiki/Tile_servers"
                                className="lien"
                            >
                                la page Tile Servers du wiki OpenStreetMap
                            </a>{" "}
                            , comme décrit{" "}
                            <a
                                href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/03_05_donnees_osm.html#III52"
                                className="lien"
                            >
                                plus loin
                            </a>
                            .
                        </p>
                        <p className="paragraphe">
                            Ici, nous allons ajouter un fonds en niveaux de gris
                            utilisant les données OpenStreetMap, qui se nomme
                            Carto Positron.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe ml-4">
                                Copiez l'URL du serveur Carto Positron :{" "}
                                <span className="font-bold">
                                    {" "}
                                    https://cartodb-basemaps-a.global.ssl.fastly.net/
                                    {"{z}"}/{"{x}"}/{"{y}"}.jpg
                                </span>
                            </p>
                            <p className="paragraphe">
                                Dans QGIS, panneau explorateur, clic-droit sur
                                XYZ Tiles → Nouvelle connexion...
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_4_positron_connexion.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Nom : il s'agit du nom qui apparaîtra
                                        dans le panneau explorateur, vous pouvez
                                        taper par exemple{" "}
                                        <span className="font-bold">
                                            {" "}
                                            Carto Positron
                                        </span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        URL : collez l'URL que vous avez
                                        préalablement copiée
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Laissez les valeurs par défaut pour les autres
                                paramètres, cliquez sur OK.
                            </p>
                            <p className="paragraphe">
                                Le fonds Carto Positron apparaît maintenant avec
                                le fonds OpenStreetMap dans la rubrique XYZ
                                Tiles.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_4_positron_xyz.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Double-cliquez pour l'ajouter :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_4_positron_visu.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <p className="paragraphe italic">
                            Attention à ne pas utiliser le caractère / (« slash
                            ») dans le nom des connexions !
                        </p>
                        <p className="paragraphe italic">
                            Attention également, certaines url de serveurs de
                            tuiles sont sous la forme{" "}
                            <span className="font-bold">
                                http://a.tile.stamen.com/toner/${"{"}z{"}"}/$
                                {"{"}x{"}"}/${"{"}y{"}"}.jpg
                            </span>{" "}
                            : il faut alors supprimer les $ pour obtenir{" "}
                            <span className="font-bold">
                                {" "}
                                http://a.tile.stamen.com/toner/{"z"}/{"x"}/{"y"}
                                .jpg{" "}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div id="quickMap" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Afficher un fonds avec l'extension QuickMapServices
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Une autre méthode pour ajouter des fonds de carte
                            consiste à utiliser l'extension{" "}
                            <a
                                href="https://github.com/nextgis/quickmapservices"
                                className="lien"
                            >
                                QuickMapServices
                            </a>
                            , qui propose un certain nombre de fonds, notamment
                            des fonds OpenStreetMap et Google Maps.
                        </p>
                        <p className="paragraphe italic">
                            L'extension QuickMapServices est similaire à
                            l'extension{" "}
                            <span className="font-bold">OpenLayers</span> sur
                            laquelle elle est d'ailleurs basée, mais propose
                            plus de couches et utilise un serveur de tuilage, ce
                            qui semble provoquer moins d'erreur lors de
                            changements de niveau de zoom et de SCR.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe ml-4">
                                Pour installer QuickMapServices :{" "}
                                <span className="text-green-400">
                                    {" "}
                                    Menu Extension → Installer/Gérer les
                                    extensions : la fenêtre du gestionnaire
                                    d'extensions
                                </span>{" "}
                                s'ouvre.
                                <div className="bg-img">
                                    <img
                                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_6_extensions_menu.jpg"
                                        alt="pôle-ard"
                                        width={500}
                                    />
                                </div>
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_6_install_quickmapservices.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Dans la rubrique{" "}
                                <span className="font-bold">Tout</span>, tapez «
                                quickmap » dans la partie{" "}
                                <span className="font-bold">Rechercher</span>{" "}
                                pour limiter les résultats, sélectionnez{" "}
                                <span className="font-bold">
                                    QuickMapServices
                                </span>{" "}
                                puis cliquez sur{" "}
                                <span className="font-bold">
                                    Installer l'extension
                                </span>{" "}
                                en bas à droite de la fenêtre.
                            </p>
                            <p className="paragraphe">
                                Fermez la fenêtre du gestionnaire d'extensions.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Par défaut, QuickMapServices permet l'ajout de
                            quelques fonds de carte, que vous pouvez voir en
                            allant dans le menu Internet → QuickMapservices...
                            Il est possible d'en ajouter d'autres !
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe ml-4">
                                Menu Internet → QuickMapServices → Settings :
                            </p>
                            <p className="paragraphe">
                                Dans l'onglet{" "}
                                <span className="font-bold">More services</span>
                                , cliquez sur le bouton{" "}
                                <span className="font-bold">
                                    Get contributed pack
                                </span>
                                .
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_6_quickmapservices_moreservices.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Rendez-vous ensuite dans l'onglet Visibility
                                pour décocher les fonds qui ne vous semblent pas
                                à première vue utiles, pour plus de clarté.
                            </p>
                            <p className="paragraphe">
                                Pour ajouter les données OSM : le menu
                                QuickMapServices est maintenant visible dans le
                                menu Internet. Chargez la couche{" "}
                                <span className="font-bold">OSM standard</span>{" "}
                                dans la rubrique OSM.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_6_menu_quickmapservices.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <p className="paragraphe text-green-500 font-bold">
                            Quelle que soit la méthode utilisée pour charger un
                            fonds de carte OSM, il aura pour SCR
                            WGS84/Pseudo-Mercator (EPSG 3857). Il est possible
                            de modifier le SCR du projet pour afficher les fonds
                            OSM dans d'autres SCR, mais ceci peut parfois
                            provoquer des problèmes d'affichage.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AjFonCart;
