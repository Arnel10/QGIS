import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function Coordonne() {
    return (
        <div className="top">
            <h4 className="titre-primary">
                II.2 Des coordonnées, oui mais dans quel système ?
            </h4>

            <div>
                <ul className="text-blue-500">
                    <li className="my-2">
                        <a href="#syst" className="lien">
                            Systèmes de coordonnées
                        </a>
                        <ul className="ml-8">
                            <li>
                                <a href="#questcq" className="lien">
                                    Qu'est-ce qu'un système de coordonnées ?
                                </a>
                            </li>
                            <li>
                                <a href="#example" className="lien">
                                    Quelques exemples de systèmes de coordonnées{" "}
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="my-2">
                        <a href="#dimension" className="lien">
                            Coordonnées en deux dimensions : les projections
                        </a>
                        <ul className="ml-8">
                            <li>
                                <a href="#projecta" className="lien">
                                    Qu'est-ce qu'une projection ?
                                </a>
                            </li>
                            <li>
                                <a href="#cylindre" className="lien">
                                    Trois grands types de projections :
                                    cylindriques, coniques et azimutales
                                </a>
                            </li>
                            <li>
                                <a href="#chacun" className="lien">
                                    A chaque projection ses déformations
                                </a>
                            </li>
                            <li>
                                <a href="#expro" className="lien">
                                    Quelques exemples de projections
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="my-2">
                        <a href="#retenir" className="lien">
                            A retenir
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#ress" className="lien">
                            Quelques ressources internet
                        </a>
                    </li>
                </ul>
            </div>

            <div className="mt-4">
                <div className="my-4">
                    <p className="paragraphe">
                        Les coordonnées peuvent être exprimées en degrés, en
                        mètres... et dans des référentiels différents. Un même
                        point aura des coordonnées différentes selon le système
                        de coordonnées utilisé.
                    </p>
                </div>
            </div>

            <div id="syst" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">Systèmes de coordonnées</h5>
                </div>
                <div className="mt-4">
                    <div className="my-4">
                        <h6 className="sous-titre-italic" id="questcq">
                            Qu'est-ce qu'un système de coordonnées ?
                        </h6>
                        <p className="paragraphe">
                            Un système de coordonnées est un système utilisé
                            pour mesurer des coordonnées. Il peut être défini
                            par un ellipsoïde. Un point sera alors localisé par
                            ses coordonnées géographiques, exprimées par la
                            latitude Ф, la longitude λ, et la hauteur
                            ellipsoïdale h mesurée suivant la normale à
                            l'ellipsoïde.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center my-8 bg-slate-50 py-2 shadow-md shadow-green-200">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_2_coord_geographiques.jpg"
                        alt="pôle-ard"
                        width={500}
                    />
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Longitude et latitude sont des mesures d'angles et
                            peuvent être exprimées en degrés, en grades ou en
                            radians.
                        </p>
                    </div>

                    <div className="my-4">
                        <p className="paragraphe italic">
                            Attention à ne pas confondre la hauteur
                            ellipsoïdale, mesurée par rapport à l'ellipsoïde, et
                            l'altitude normale mesurée par rapport au géoïde.
                            Avant les années 1960, les altitudes étaient
                            mesurées par rapport au niveau de la mer (altitude
                            orthométrique).
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <div className="my-4">
                    <h6 className="sous-titre-italic" id="example">
                        Quelques exemples de systèmes de coordonnées
                    </h6>
                    <p className="paragraphe">
                        Il existe de nombreux systèmes de coordonnées. Ils sont
                        recensés par l'<span className="font-bold">EPSG</span>{" "}
                        (European Petroleum Survey Group) qui a attribué un code
                        à chacun. Quelques exemples :
                    </p>
                </div>
                <div className="my-4">
                    <p className="paragraphe">
                        <span className="font-bold">
                            {" "}
                            WGS84 (World Geodetic System 1984) :
                        </span>{" "}
                        <br />
                        Système global initialement mis au point par le
                        département de la défense des États Unis en 1984, mis à
                        jour en 2004. Son exactitude est métrique, et son
                        ellipsoïde se nomme IAG-GRS80.
                    </p>
                </div>
                <div className="my-4">
                    <p className="paragraphe">
                        <span className="font-bold">
                            RGF93 (Réseau Géodésique Français 1993) :
                        </span>{" "}
                        <br />
                        Système global obtenu par densification des points du
                        réseau mondial associé ETRS89. Il s'agit du système
                        officiel français. Ce système est facilement compatible
                        avec le WGS84 par exemple.
                    </p>
                </div>
                <div className="my-4">
                    <p className="paragraphe">
                        <span className="font-bold">
                            ED50 (European Datum 1950) :
                        </span>{" "}
                        <br />
                        Système européen mis en place à la suite de la seconde
                        guerre mondiale. Son ellipsoïde associé se nomme Hayford
                        1909.
                    </p>
                </div>
                <div className="my-4">
                    <p className="paragraphe">
                        <span className="font-bold">
                            NTF (Nouvelle Triangulation de la France) :
                        </span>{" "}
                        <br />
                        Système local issu de mesures réalisées depuis la fin du
                        XIXème jusqu'en 1991. Son ellipsoïde associé est Clarke
                        1880 et son méridien d'origine Paris.
                    </p>
                </div>
                <div className="my-4">
                    <p className="paragraphe">
                        <i>
                            En France, le système NTF a été abandonné au profit
                            du système RGF93 qui présente une meilleure
                            compatibilité avec les autres systèmes mondiaux. Il
                            existe toutefois encore aujourd'hui de nombreuses
                            données utilisant le système NTF.
                        </i>
                    </p>
                </div>
                <div className="my-4">
                    <p className="paragraphe">
                        Certains systèmes seront adaptés à une zone précise,
                        d'autre à la Terre entière. Plusieurs systèmes
                        coexistent souvent pour une même zone, en raison par
                        exemple de l'avancée des techniques ou de règlements.
                    </p>
                </div>
                <div className="my-4">
                    <p className="paragraphe">
                        <span className="font-bold">
                            Un même point aura des coordonnées différentes selon
                            le système utilisé pour les mesurer.
                        </span>{" "}
                        <br />
                        Système européen mis en place à la suite de la seconde
                        guerre mondiale. Son ellipsoïde associé se nomme Hayford
                        1909.
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center my-8 bg-slate-50 py-2 shadow-md shadow-green-200">
                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg mx-5">
                        <table class="w-full text-sm text-left text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-green-500">
                                <tr>
                                    <th scope="col" class="py-3 px-6">
                                        Système de coordonnées
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Code
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Latitude (en degrés)
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Longitude (en degrés)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-green-200 border-b">
                                    <th
                                        scope="row"
                                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        WGS84
                                    </th>
                                    <td class="py-4 px-6">EPSG:4326</td>
                                    <td class="py-4 px-6">48,85700</td>
                                    <td class="py-4 px-6">2,35100</td>
                                </tr>
                                <tr class="bg-green-100 border-b">
                                    <th
                                        scope="row"
                                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        ED50
                                    </th>
                                    <td class="py-4 px-6">EPSG:4230</td>
                                    <td class="py-4 px-6">48,857615</td>
                                    <td class="py-4 px-6">2,532286</td>
                                </tr>
                                <tr class="bg-green-200 border-b">
                                    <th
                                        scope="row"
                                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        RGF93
                                    </th>
                                    <td class="py-4 px-6">EPSG:4171</td>
                                    <td class="py-4 px-6">48,85700</td>
                                    <td class="py-4 px-6">2,35100</td>
                                </tr>
                                <tr class="bg-green-100">
                                    <th
                                        scope="row"
                                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        NTF
                                    </th>
                                    <td class="py-4 px-6">EPSG:4807</td>
                                    <td class="py-4 px-6">48.85769</td>
                                    <td class="py-4 px-6">0,014944</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="sous-titre-italic">
                        Coordonnées de Paris mesurées dans différents systèmes.
                    </p>
                </div>

                <div className="my-4">
                    <p className="paragraphe">
                        On sait maintenant comment un point peut être défini par
                        3 coordonnées X, Y et Z. Comment représenter maintenant
                        la Terre en 2 dimensions, pour en faire une carte par
                        exemple ?
                    </p>
                </div>
            </div>

            <div id="dimension" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Coordonnées en deux dimensions : les projections
                    </h5>
                </div>
                <div className="mt-4">
                    <div className="my-4">
                        <h6 className="sous-titre-italic" id="projecta">
                            Qu'est-ce qu'une projection ?
                        </h6>
                        <p className="paragraphe">
                            <span className="font-bold">
                                {" "}
                                Le principe est de projeter des données 3D sur
                                une surface plane.
                            </span>
                            Il y aura donc forcément des déformations : pensez à
                            une peau d'orange qu'on écrase, et qui va se
                            déchirer.
                        </p>
                    </div>

                    <div className="my-4">
                        <p className="paragraphe">
                            On appelle projection cartographique le système de
                            correspondance entre les coordonnées géographiques
                            (donc mesurées avec un système de référence) et les
                            points du plan de projection.
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            De nombreuses méthodes de projections existent,
                            chacune adaptée à un usage différent.
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            Lorsqu'on utilise une projection, on parle de{" "}
                            <span className="font-bold">
                                coordonnées projetées
                            </span>{" "}
                            . Ces coordonnées sont par définition
                            bidimensionnelles, et seront exprimées généralement{" "}
                            <span className="font-bold">
                                en unités métriques
                            </span>{" "}
                            .
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            Une projection permet donc de représenter sur une
                            surface plane une partie d'un modèle ellipsoïdal,
                            mais aussi :
                            <ul className="ml-8 paragraphe">
                                <li className="my-1">
                                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                    d'obtenir des valeurs métriques plus
                                    facilement exploitables que les valeurs
                                    angulaires de latitude et longitude
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                    de rendre plus facile une évaluation des
                                    distances
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className="my-4">
                        <h6 className="sous-titre-italic" id="cylindre">
                            Trois grands types de projections : cylindriques,
                            coniques et azimutales
                        </h6>
                        <p className="paragraphe">
                            Dans tous les cas, on va projeter la surface de la
                            Terre sur une forme que l'on peut dérouler pour
                            obtenir une surface plane : un cylindre, un cône ou
                            un plan. On distingue ainsi{" "}
                            <span className="font-bold">
                                {" "}
                                les projections cylindriques, coniques et
                                azimutales
                            </span>{" "}
                            . Il existe d'autres types de projections.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center my-8 bg-slate-50 py-2 shadow-md shadow-green-200">
                        <table>
                            <th>
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_2_projection_cylindrique.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </th>
                            <th>
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_2_projection_conique.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </th>
                            <th>
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_2_projection_azimutale.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </th>
                        </table>

                        <p className="sous-titre-italic">
                            Projection cylindrique, conique et azimutale (Source
                            : Traroth, Wikimedia Commons, licence GFDL).
                        </p>
                    </div>

                    <div className="my-4">
                        <h6 className="sous-titre-italic" id="chacun">
                            A chaque projection ses déformations
                        </h6>
                        <p className="paragraphe">
                            On peut aussi classer les projections selon leurs
                            propriétés. On distingue ainsi :
                            <ul className="ml-8 paragraphe mt-2">
                                <li className="my-1">
                                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                    les projections{" "}
                                    <span className="font-bold">
                                        équivalentes
                                    </span>{" "}
                                    qui conservent les surfaces
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                    les projections{" "}
                                    <span className="font-bold">conformes</span>{" "}
                                    qui conservent les angles.
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                    les projections{" "}
                                    <span className="font-bold">
                                        aphylactiques
                                    </span>
                                    , ni conformes ni équivalentes. Elles
                                    peuvent être équidistantes, c'est-à-dire
                                    conserver les distances sur les méridiens.
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            Une projection ne peut être à la fois conforme et
                            équivalente.
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            Pour visualiser les déformations liées à une
                            projection, on peut utiliser les indicatrices de
                            Tissot. Ce sont des cercles identiques dessinés sur
                            la Terre avant projection, qui se retrouveront donc
                            déformés après projection. Si la projection déforme
                            les angles, les cercles seront transformés en
                            ellipses, si elle déforme les surfaces les cercles
                            auront des surfaces différentes.
                        </p>
                    </div>
                    <div className="my-4">
                        <h6 className="sous-titre-italic" id="expro">
                            Quelques exemples de projections
                        </h6>
                        <p className="paragraphe">
                            <span className="font-bold">
                                Projection cylindrique conforme de Mercator
                            </span>{" "}
                            <br /> Cette projection conserve les angles, mais
                            déforme de plus en plus les surfaces au fur et à
                            mesure qu'on se rapproche des pôles. Elle est
                            largement utilisée, notamment par Google.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center my-8 bg-slate-50 py-2 shadow-md shadow-green-200">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_2_mercator.jpg"
                            alt="pôle-ard"
                            width={500}
                        />
                        <p className="sous-titre-italic">
                            Projection de Mercator (source : Eric Gaba –
                            utilisateur Wikimedia Commons : Sting, licence
                            GFDL).
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            <span className="font-bold">
                                Projection cylindrique équivalente de Peters
                            </span>{" "}
                            <br /> Cette projection permet une vision juste des
                            proportions des surfaces des continents, mais ne
                            garde pas les bonnes formes au contraire de la carte
                            de Mercator. Elle permet notamment d'éviter de
                            sous-dimensionner les pays du Sud.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center my-8 bg-slate-50 py-2 shadow-md shadow-green-200">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Tissot_indicatrix_world_map_Gall-Peters_equal-area_proj.svg/800px-Tissot_indicatrix_world_map_Gall-Peters_equal-area_proj.svg.png?20101114185041"
                            alt="pôle-ard"
                            width={500}
                        />
                        <p className="sous-titre-italic">
                            Projection de Peters (source : Eric Gaba –
                            utilisateur Wikimedia Commons : Sting, licence
                            GFDL).
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            <span className="font-bold">
                                Projection conique conforme de Lambert
                            </span>{" "}
                            <br />
                            Contrairement aux projection de Mercator et Peters,
                            cette projection est utilisée pour représenter
                            seulement une partie du globe. Suivant ses
                            paramètres, la zone couverte sera différente.
                            L'illustration montre la projection{" "}
                            <span className="font-bold">Lambert 93</span>,
                            projection officielle française : les déformations
                            sont minimisées pour la France.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center my-8 bg-slate-50 py-2 shadow-md shadow-green-200">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_2_lambert93.jpg"
                            alt="pôle-ard"
                            width={500}
                        />
                        <p className="sous-titre-italic">
                            Projection Lambert 93 (source : pôle ARD, adess,
                            domaine public)
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            <span className="font-bold">
                                Projection azimutale équidistante du pôle sud
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center my-8 bg-slate-50 py-2 shadow-md shadow-green-200">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_2_azim.jpg"
                            alt="pôle-ard"
                            width={500}
                        />
                        <p className="sous-titre-italic">
                            Projection azimutale équidistante pôle sud (source :
                            pôle ARD, adess, domaine public)
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            <span className="font-bold">
                                Projection Transverse Universelle de Mercator
                                (UTM)
                            </span>{" "}
                            <br /> Il s'agit en fait d'une série de projections,
                            le monde étant divisé en{" "}
                            <a
                                rel="noopener noreferrer"
                                class="lien"
                                href="https://emit-ecole-de-mit.github.io/upload.wikimedia.org/wikipedia/commons/e/ed/Utm-zones.jpg"
                                target="_blank"
                            >
                                60 fuseaux
                            </a>{" "}
                            de 6° de longitude. Une projection différente est
                            utilisée pour chaque fuseau : le cylindre utilisé
                            subit à chaque fois une rotation légèrement
                            différente. Ceci permet de minimiser les
                            déformations. La France est ainsi traversée par 3
                            fuseaux : 30, 31 et 32. Cette projection peut être
                            associée au système WGS84, ou ED50 par exemple.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center my-8 bg-slate-50 py-2 shadow-md shadow-green-200">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_2_Utm_projections.jpg"
                            alt="pôle-ard"
                            width={500}
                        />
                        <p className="sous-titre-italic">
                            Projection UTM : rotation d'un cylindre autour de la
                            Terre. Par Javiersanp (Travail personnel){" "}
                            <a
                                rel="noopener noreferrer"
                                class="lien"
                                href="https://creativecommons.org/licenses/by-sa/3.0/"
                                target="_blank"
                            >
                                {" "}
                                [CC-BY-SA-3.0 ou GFDL]
                            </a>
                            , via Wikimedia Commons
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            <span className="font-bold">
                                Un même point aura des coordonnées différentes
                                selon la projection utilisée
                            </span>{" "}
                            (et le système associé à cette projection).
                            Ci-dessous, les coordonnées de Paris mesurées dans
                            différents sytèmes et projections.
                        </p>
                        <div className="flex flex-col justify-center items-center my-8 bg-slate-50 py-2 shadow-md shadow-green-200">
                            <div class="overflow-x-auto relative shadow-md sm:rounded-lg mx-5">
                                <table class="w-full text-sm text-left text-gray-500">
                                    <thead class="text-xs text-gray-700 uppercase bg-green-500">
                                        <tr>
                                            <th scope="col" class="py-3 px-6">
                                                Système et projection{" "}
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Code
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                X (en mètres){" "}
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Y (en mètres)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-green-200 border-b">
                                            <td class="py-4 px-6">Mercator</td>
                                            <th
                                                scope="row"
                                                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                                            >
                                                EPSG:54004{" "}
                                            </th>
                                            <td class="py-4 px-6">261712</td>
                                            <td class="py-4 px-6">6218386</td>
                                        </tr>
                                        <tr class="bg-green-100 border-b">
                                            <td class="py-4 px-6">Peters</td>
                                            <th
                                                scope="row"
                                                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                                            >
                                                SR-ORG:22{" "}
                                            </th>
                                            <td class="py-4 px-6">185369</td>
                                            <td class="py-4 px-6">6753027</td>
                                        </tr>
                                        <tr class="bg-green-200 border-b">
                                            <td class="py-4 px-6">
                                                RGF93 Lambert93{" "}
                                            </td>
                                            <th
                                                scope="row"
                                                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                                            >
                                                EPSG:2154{" "}
                                            </th>
                                            <td class="py-4 px-6">652381</td>
                                            <td class="py-4 px-6">6862047</td>
                                        </tr>
                                        <tr class="bg-green-100">
                                            <td class="py-4 px-6">
                                                Azimutale équidistante pôle sud{" "}
                                            </td>
                                            <th
                                                scope="row"
                                                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                                            >
                                                EPSG:102019{" "}
                                            </th>
                                            <td class="py-4 px-6">632368</td>
                                            <td class="py-4 px-6">15402681</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="sous-titre-italic">
                                Coordonnées de Paris mesurées dans différents
                                systèmes et projections.
                            </p>
                        </div>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            Il existe d'autres types de projections, ni
                            cylindriques, conformes ou azimutales.
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            <span className="font-bold">
                                En résumé, la projection parfaite n'existe pas
                            </span>{" "}
                            ; il faut essayer de faire au mieux pour l'usage
                            auquel on destine la carte (à ce sujet, vous pouvez
                            voir ce film). Par exemple, les cartes utilisées
                            pour la navigation conservent généralement les
                            angles et non les distances. L'échelle de la carte
                            influe également sur le choix de la projection.
                        </p>
                    </div>

                    <div className="my-4">
                        <h6 className="sous-titre-italic" id="expro">
                            Quelques exemples de projections
                        </h6>
                        <p className="paragraphe">
                            <span className="font-bold">
                                Projection cylindrique conforme de Mercator
                            </span>{" "}
                            <br /> Cette projection conserve les angles, mais
                            déforme de plus en plus les surfaces au fur et à
                            mesure qu'on se rapproche des pôles. Elle est
                            largement utilisée, notamment par Google.
                        </p>
                    </div>
                </div>

                <div id="retenir" className="mt-8 mb-4">
                    <div className="bg-style-b">
                        <h5 className="sous-titre">A retenir</h5>
                    </div>
                    <div className="mt-4">
                        <div className="my-4">
                            <p className="paragraphe">
                                On peut exprimer les coordonnées d'un point :
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        sous forme de coordonnées géographiques
                                        en degrés : latitude, longitude, hauteur
                                        ellipsoïdale. Ces coordonnées sont
                                        calculées{" "}
                                        <span className="font-bold">
                                            dans un système géodésique de
                                            référence, sans utilisation de
                                            projection
                                        </span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        sous forme de coordonnées en projection
                                        en mètres (représentation plane),
                                        calculées{" "}
                                        <span className="font-bold">
                                            {" "}
                                            dans un système géodésique de
                                            référence et avec une projection
                                            cartographique
                                        </span>
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="my-4">
                            <p className="tracking-[1px] text-gray-700 my-2">
                                Exemple : les coordonnées de Paris peuvent être
                                exprimées sous forme de coordonnées
                                géographiques en degrés dans le système RGF93,
                                ou bien sous forme de coordonnées projetées en
                                mètres dans le même système RGF93 avec en plus
                                utilisation de la projection Lambert 93.
                            </p>
                        </div>
                        <div className="my-4">
                            <p className="tracking-[1px] text-gray-700 my-2">
                                <i>
                                    Il est à noter que la projection Lambert 93
                                    a été conçue pour être utilisée uniquement
                                    avec le système RGF93.
                                </i>
                            </p>
                        </div>
                        <div className="my-4">
                            <p className="tracking-[1px] text-gray-700 my-2">
                                Chaque ensemble système de coordonnées et
                                projection s'il y en a une, ou simplement
                                système de coordonnées, est référencé par un
                                code, généralement défini par l'EPSG.
                            </p>
                        </div>
                        <div className="my-4">
                            <p className="tracking-[1px] text-gray-700 my-2">
                                <span className="font-bold">
                                    Pour simplifier, dans le reste de ce
                                    tutoriel, le système de coordonnées et sa
                                    projection associée s'il y en a une seront
                                    nommés SCR (Système de Coordonnées de
                                    Référence) suivant la terminologie utilisée
                                    par QGIS.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div id="ress" className="mt-8 mb-4">
                    <div className="bg-style-b">
                        <h5 className="sous-titre">
                            Quelques ressources internet
                        </h5>
                    </div>
                    <div className="mt-4">
                        <div className="my-4">
                            <p className="tracking-[1px] text-gray-700 my-2">
                                On peut exprimer les coordonnées d'un point :
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Comprendre le principe des projections :{" "}
                                        <a
                                            rel="noopener noreferrer"
                                            class="lien"
                                            href="https://www.onf.ca/film/carte_impossible/"
                                            target="_blank"
                                        >
                                            {" "}
                                            la carte impossible{" "}
                                        </a>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        « Déplier la Terre » pour mieux
                                        comprendre certaines projections :{" "}
                                        <a
                                            rel="noopener noreferrer"
                                            class="lien"
                                            href="https://philogb.github.io/page/myriahedral/"
                                            target="_blank"
                                        >
                                            {" "}
                                            Myriahedral Projections{" "}
                                        </a>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Visualiser les déformations liées à des
                                        projections :{" "}
                                        <a
                                            rel="noopener noreferrer"
                                            class="lien"
                                            href="https://mathigon.org/course/circles/spheres-cones-cylinders#sphere-maps"
                                            target="_blank"
                                        >
                                            {" "}
                                            Surface Area of a Sphere{" "}
                                        </a>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Liste des systèmes de coordonnées avec
                                        leurs codes EPSG ou autre :
                                        <a
                                            rel="noopener noreferrer"
                                            class="lien"
                                            href="http://spatialreference.org/I"
                                            target="_blank"
                                        >
                                            http://spatialreference.org/{" "}
                                        </a>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Comparaison de projections :{" "}
                                        <a
                                            rel="noopener noreferrer"
                                            class="lien"
                                            href="https://blocks.roadtolarissa.com/syntagmatic/ba569633d51ebec6ec6e"
                                            target="_blank"
                                        >
                                            {" "}
                                            https://blocks.roadtolarissa.com/syntagmatic/ba569633d51ebec6ec6e
                                        </a>{" "}
                                        et{" "}
                                        <a
                                            rel="noopener noreferrer"
                                            class="lien"
                                            href=" https://www.map-projections.net/imglist.php"
                                            target="_blank"
                                        >
                                            {" "}
                                            https://www.map-projections.net/imglist.php
                                        </a>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Aide au choix d'une projection :
                                        <a
                                            rel="noopener noreferrer"
                                            class="lien"
                                            href="http://projectionwizard.org/"
                                            target="_blank"
                                        >
                                            {" "}
                                            http://projectionwizard.org/{" "}
                                        </a>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Sur la précision des coordonnées :
                                        jusqu'où faut-il aller dans le nombre de
                                        décimales ?
                                        <a
                                            rel="noopener noreferrer"
                                            class="lien"
                                            href="https://xkcd.com/2170/"
                                            target="_blank"
                                        >
                                            {" "}
                                            https://xkcd.com/2170/{" "}
                                        </a>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/geodesie/introduction-geodesie"
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

                <div>
                    <NavLink
                        to="/app/plan-detailler/geodesie/couche-et-projet"
                        className="btn-lien fixed bottom-5 z-20 md:right-52 sm:right-12 right-5"
                    >
                        <span className="hidden lg:block">Suivant</span>{" "}
                        <ArrowRightOutlined sx={{ fontSize: 30 }} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Coordonne;
