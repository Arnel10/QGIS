import {
    ArrowDropDown,
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function AvCoucheRef() {
    return (
        <div className="relative paragraphe">
            <div className="my-4" id="top">
                <h1 className="titre-primary">
                    IV.6 Points de calage : en se basant sur une couche de
                    référence
                </h1>
            </div>

            <ul className="my-4 ml-8">
                <li className="my-2 ml-4">
                    <a href="#ajout_osm" className="lien">
                        Ajout d'un fonds OpenStreetMap
                    </a>
                </li>
                <li className="my-2 ml-4">
                    <a href="#zoom" className="lien">
                        Zoom sur la zone d'étude avec l'extension Nominatim
                        Locator Filter
                    </a>
                </li>
                <li className="my-2 ml-4">
                    <a href="#creation" className="lien">
                        Création des points de calage
                    </a>
                </li>
            </ul>

            <div className="my-8">
                <p className="my-4">
                    Comme expliqué dans la partie{" "}
                    <span className="lien">IV.1.2</span>, il est également
                    possible de se baser sur une couche de référence pour
                    géoréférencer une image.
                </p>

                <p className="my-4">
                    La manipulation sera la même que décrite dans les
                    précédentes parties, sauf en ce qui concerne la création des
                    points de calage. Seule cette partie sera donc décrite ici.
                </p>

                <p className="my-4">
                    L'image que nous allons caler est une carte de Doncaster
                    East, dans la banlieue de Melbourne (source :{" "}
                    <a
                        href="https://emit-ecole-de-mit.github.io/commons.wikimedia.org/wiki/File_Doncaster_east_locality_map.PNG"
                        className="lien"
                    >
                        Wikimedia
                    </a>
                    ).
                </p>

                <div className="bg-img my-4">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_6_doncaster_east.jpg"
                        alt="doncaster_east"
                    />
                </div>

                <p className="my-4">
                    Pour caler cette carte, nous allons nous baser sur les
                    données{" "}
                    <a href="http://www.openstreetmap.org/" className="lien">
                        OpenStreetMap
                    </a>
                    . OpenStreetMap est une base de données cartographique libre
                    ; on décrit souvent ce projet comme un "wikipedia
                    cartographique". Pour en savoir plus, voir aussi ici !
                </p>
            </div>

            <div className="mt-20">
                <div className="bg-style-b" id="ajout_osm">
                    <h5 className="sous-titre">
                        Ajout d'un fonds OpenStreetMap
                    </h5>
                </div>

                <p className="my-4">
                    2 méthodes permettant d'afficher un fonds OpenStreetMap sont
                    décrites ici.
                </p>

                <div className="bg-style-g my-4 px-4 py-4">
                    <p className="my-4">
                        Vous pouvez par exemple vous rendre dans le panneau
                        Explorateur (s'il n'est pas déjà activé : menu Vue →
                        Panneaux → Explorateur), rubrique{" "}
                        <span className="font-bold">XYZ Tiles</span>, et
                        double-cliquez sur le fonds{" "}
                        <span className="font-bold">OpenStreetMap</span>.
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_6_ajout_OSM.jpg"
                            alt="ajout-OSM"
                        />
                    </div>

                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> Dans quel système de coordonnées
                            est la couche OSM ?
                        </p>
                        <p className="my-4 ml-8 italic">
                            Le SCR de le couche est le WGS84 projection Pseudo
                            Mercator, EPSG:3857.
                        </p>
                    </div>

                    <p className="my-4">
                        La couche ajoutée est projetée à la volée dans le SCR du
                        projet.
                    </p>

                    <p className="my-4">
                        Pour simplifier les choses, nous allons passer le projet
                        également en Pseudo Mercator, afin que la couche de base
                        pour le géoréférencement et le projet aient le même SCR.
                    </p>

                    <p className="my-4">
                        Pour cela, rendez-vous dans les propriétés du projet et
                        sélectionnez le SCR Pseudo Mercator, code EPSG 3857 (cf.
                        ici). Vous devez maintenant voir le SCR 3857 dans la
                        barre en bas de la fenêtre de QGIS :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_6_scr_projet_3857.jpg"
                            alt="scr-projet"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b" id="zoom">
                    <h5 className="sous-titre">
                        Zoom sur la zone d'étude avec l'extension Nominatim
                        Locator Filter
                    </h5>
                </div>

                <p className="my-4">
                    Nous cherchons ici à zoomer sur la zone qui concerne notre
                    carte, à savoir Doncaster East dans le banlieue de
                    Melbourne, en Australie. Il est bien sûr possible d'utiliser
                    les outils de zoom pour cela, mais nous allons en profiter
                    pour découvrir une autre méthode parfois bien pratique, avec
                    l'extension Nominatim Locator Filter.
                </p>

                <div className="bg-style-g my-4 px-4 py-4">
                    <p className="my-4">
                        Commençons par installer l'extension{" "}
                        <span className="font-bold">
                            Nominatim Locator Filter
                        </span>{" "}
                        : procédez comme pour QuickMapServices, via le{" "}
                        <span className="font-bold">
                            menu Extensions → Installer/Gérer les extensions
                        </span>
                        .
                    </p>

                    <div className="my-4 bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_6_install_nlf.jpg"
                            alt="install_nlf"
                        />
                    </div>

                    <p className="my-4">
                        L'extension n'est pas visible dans QGIS ; en fait, cette
                        extension ajoute une fonctionnalité à la barre de
                        recherche tout en bas à gauche de la fenêtre de QGIS.
                    </p>

                    <div className="my-4 bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_6_barre_recherche.jpg"
                            alt="barre_recherche"
                        />
                    </div>
                </div>

                <p className="my-4">
                    Cette barre de recherche permet de rechercher une couche
                    chargée dans le projet, un algorithme de traitement...
                    L'extension Nominatim Locator Filter lui ajoute la
                    fonctionnalité permettant de rechercher des noms de lieux
                    dans OpenStreetMap et de zoomer sur la zone correspondante
                    (qu'une couche OSM soit chargée dans le projet en cours ou
                    non).
                </p>

                <p className="my-4 font-bold">
                    Pour cela, il faut taper le nom du lieu à rechercher puis le
                    caractère espace.
                </p>

                <div className="bg-style-g my-4 px-4 py-4">
                    <p className="my-4">
                        Dans la barre de recherche, tapez :{" "}
                        <span className="font-bold">
                            Doncaster East, Victoria, Australia
                        </span>{" "}
                        en terminant par un espace.
                    </p>

                    <p className="my-4">
                        Appuyez sur la touche entrée pour valider la suggestion
                        qui doit normalement apparaître : la carte est
                        maintenant zoomée sur ce lieu.
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_6_osm_zoom1.jpg"
                            alt="osm_zoom1"
                        />
                    </div>

                    <p className="my-4">
                        Zoomez maintenant sur Doncaster East (pour vous aider :
                        <a
                            href="http://www.openstreetmap.org/relation/2390038#map=13/-37.7776/145.1615"
                            className="lien"
                        >
                            carte OpenStreetMap de Doncaster Est
                        </a>
                        ).
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_6_osm_doncaster_east.jpg"
                            alt="osm_doncaster_east"
                        />
                    </div>
                </div>

                <p className="img-titre my-4">
                    Savez-vous qu'il existe une version française de cette
                    extension,
                    <a
                        href="https://github.com/Oslandia/french_locator_filter"
                        className="lien"
                    >
                        French locator Filter
                    </a>
                    , basée sur l'API publique{" "}
                    <a href="https://geo.api.gouv.fr/adresse" className="lien">
                        https://geo.api.gouv.fr/adresse
                    </a>
                    ?
                </p>

                <p className="my-4">
                    Nous allons maintenant pouvoir procéder à la création des
                    points de calage.
                </p>
            </div>

            <div className="mt-20">
                <div className="bg-style-b" id="creation">
                    <h5 className="sous-titre">
                        Création des points de calage
                    </h5>
                </div>

                <div className="bg-style-g my-4 px-4 py-4">
                    <p className="my-4">
                        Ouvrez la fenêtre du géoréférenceur et ajoutez l'image à
                        caler :{" "}
                        <span className="lien">
                            Doncaster_east_locality_map.PNG
                        </span>{" "}
                        située dans le dossier{" "}
                        <span className="font-bold">
                            TutoQGIS_04_Georef/donnees
                        </span>
                        (si nécessaire, aidez-vous pour cela du début de la
                        partie IV.3.1).
                    </p>

                    <p className="my-4 img-titre">
                        Si QGIS vous demande dans quel SCR est cette image,
                        choisissez le{" "}
                        <span className="font-bold">
                            WGS84 / Pseudo-Mercator EPSG:3857
                        </span>
                        .
                    </p>

                    <p className="my-4">
                        Cliquez sur une intersection de routes, par exemple
                        entre Reynolds Road et Blackburn Road. La fenêtre de
                        saisie des coordonnées apparaît : cliquez sur le bouton
                        <span className="font-bold">
                            Depuis le canevas de la carte
                        </span>
                        .
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_6_depuis_canevas.jpg"
                            alt="depuis_canevas"
                        />
                    </div>

                    <p className="my-4">
                        Dans la fenêtre de QGIS, cliquez sur cette intersection
                        sur les données OSM : les coordonnées de la fenêtre de
                        saisie sont automatiquement remplies avec les
                        coordonnées du point sur lequel vous venez de cliquer.
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_6_coord_remplies.jpg"
                            alt="coord_remplies"
                        />
                    </div>

                    <p className="my-4">
                        Notez également que le SCR du projet est automatiquement
                        sélectionné !
                    </p>

                    <p className="my-4">
                        Cliquez sur <span className="font-bold">OK</span>.
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_6_point_0.jpg"
                            alt="points_0"
                        />
                    </div>

                    <p className="my-4 img-titre">
                        Premier point : à gauche, dans la fenêtre de QGIS
                        (données OSM) et à droite, dans la fenêtre du
                        géoréférenceur.
                    </p>

                    <p className="my-4">
                        Procédez de la même manière pour obtenir au moins six
                        points de calage.
                    </p>

                    <p className="my-4">
                        Si vous avez besoin de{" "}
                        <span className="font-bold">
                            vous déplacer dans la fenêtre de QGIS avant de
                            cliquer pour créer le point
                        </span>{" "}
                        : vous pouvez laisser la{" "}
                        <span className="font-bold">barre d'espace</span>
                        appuyée en bougeant la souris, et zoomer et dézoomer
                        avec la molette. Vous pouvez aussi sélectionner l'outil
                        <span className="font-bold">
                            {" "}
                            Se déplacer dans la cartes
                        </span>{" "}
                        (icône de main) ; dans ce cas, revenez ensuite à la
                        fenêtre du géoréférenceur et cliquez à nouveau sur le
                        bouton{" "}
                        <span className="font-bold">
                            Depuis le canevas de la carte
                        </span>{" "}
                        pour créer le point.
                    </p>

                    <p className="my-4">
                        Ensuite, choisissez les paramètres du géoréférencement :
                        vous pouvez choisir les mêmes que précédemment, mais
                        <span className="font-bold">
                            n'oubliez pas de sélectionner le SCR WGS84
                            Pseudo-Mercator EPSG:3857 au lieu du WGS84 EPSG:4326
                        </span>
                        .
                    </p>

                    <p className="my-4 lien">Lancez le calage.</p>

                    <p className="my-4">
                        Une fois le calage terminé, vous pouvez en vérifier la
                        précision en donnant de la transparence à votre image
                        calée (dans les propriétés de la couche, rubrique
                        Transparence) :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_6_superposition.jpg"
                            alt="superposition"
                        />
                    </div>
                </div>

                <p className="my-4">
                    L'image est calée, son SCR est WGS84 Pseudo-Mercator (vous
                    pouvez le vérifier en allant dans les propriétés de la
                    couche, rubrique Général). Si vous désirez modifier le SCR
                    de cette couche, comme indiqué dans la partie II.4.2,
                    utilisez l'outil{" "}
                    <span className="font-bold">Reprojeter une couche</span>.
                </p>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/georeferencement/lancer-geo"
                    >
                        <ArrowLeftOutlined sx={{ fontSize: 30 }} />{" "}
                        <span className="hidden lg:block">Précédent</span>
                    </NavLink>
                </div>

                <div className="fixed bottom-20 z-20 md:right-52 sm:right-12 right-5">
                    <a href="#top" className="btn-lien rounded-full py-4 px-4">
                        <ArrowDropUp />
                    </a>
                </div>

                <div className="py-5 fixed bottom-0 z-20 md:right-52 sm:right-12 right-5">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/numerisation/creation-couche-vide"
                    >
                        <span className="hidden lg:block">Chap V</span>{" "}
                        <ArrowRightOutlined sx={{ fontSize: 30 }} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default AvCoucheRef;
