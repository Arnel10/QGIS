import { ArrowDropUp, ArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function Principe() {
    return (
        <div className="relative paragraphe">
            <div id="top">
                <h4 className="titre-primary" id="top">
                    IV.1 Principe du géoréférencement
                </h4>

                <ul className="my-2 mx-4">
                    <li className="my-2">
                        <a href="#georef" className="lien">
                            Qu'est-ce que le géoréférencement ?
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#comp" className="lien">
                            Géoréférencer par rapport à quoi ?
                        </a>
                        <ul className="mx-8">
                            <li className="my-2">
                                <a href="#meth-img" className="lien">
                                    Deux méthodes En se basant sur les
                                    informations contenues dans l'image
                                </a>
                            </li>
                            <li className="my-2">
                                <a href="#meth-couche" className="lien">
                                    En se basant sur des informations contenues
                                    dans une autre couche
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div id="georef" className="mt-20">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Qu'est-ce que le géoréférencement ?
                    </h5>
                </div>

                <p className="my-4">
                    Les données SIG que nous avons utilisées jusqu'ici ont
                    toutes des coordonnées, ce qui nous permet de les superposer
                    correctement dans une logiciel SIG. A l'inverse, dans le cas
                    d'une image simplement scannée, une carte ancienne par
                    exemple, le logiciel ne possède pas d'informations de
                    coordonnées ; il placera cette image simplement en
                    considérant que le coin en haut à gauche a les coordonnées
                    0,0.
                </p>

                <p className="my-4">
                    <span className="font-bold">
                        Le géoréférencement, ou calage, consiste à attribuer des
                        coordonnées à une image
                    </span>
                    . Cette image pourra ensuite être superposée à d'autres
                    couches dans un logiciel SIG, et servir par exemple de fond
                    de carte ou être numérisée. Nous traiterons uniquement du
                    cas des données raster (il existe d'autres méthodes pour les
                    données vecteur qui ne seront pas abordées ici).
                </p>

                <p className="my-4">
                    Lors du géoréférencement, il faudra aussi préciser dans quel
                    SCR est notre image.
                </p>
            </div>

            <div id="comp" className="mt-20">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Géoréférencer par rapport à quoi ? Deux méthodes
                    </h5>
                </div>

                <p className="my-4">
                    Pour donner des coordonnées à une image, il est possible de
                    se baser soit sur des informations contenues directement
                    dans l'image, par exemple si l'image est une carte avec un
                    carroyage, ou soit sur une autre couche déjà existante et
                    correctement calée (vecteur ou raster).
                </p>

                <div id="meth-img" className="my-8">
                    <h6 className="sous-titre-italic">
                        En se basant sur les informations contenues dans l'image
                    </h6>
                    <p className="my-4">
                        Si on connaît précisément les coordonnées de quelques
                        points sur l'image, grâce à un carroyage avec des
                        amorces de coordonnées, on va pouvoir se servir de ces
                        coordonnées pour géoréférencer l'image.
                    </p>
                    <p className="my-4">
                        Il faut néanmoins connaître le système de coordonnées
                        utilisé, ce qui peut nécessiter des recherches.
                    </p>
                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_1_calage_methode1.jpg"
                            alt="calage"
                        />
                    </div>
                    <p className="my-4 img-titre">
                        Calage grâce à un carroyage avec amorces de coordonnées
                        (Source de l'image : Wikimedia, domaine public)
                    </p>
                </div>

                <div id="meth-couche" className="my-8">
                    <h6 className="sous-titre-italic">
                        En se basant sur des informations contenues dans une
                        autre couche
                    </h6>
                    <p className="my-4">
                        Si l'image ne possède pas d'indications de coordonnées,
                        il va falloir utiliser une couche déjà géoréférencée
                        possédant une zone commune avec l'image à géoréférencer.
                        On pourra alors indiquer que tel point sur l'image
                        correspond à tel point sur la couche déjà géoréférencée.
                        Cette méthode sera employée pour caler des photographies
                        aériennes par exemple.
                    </p>
                    <p className="my-4">
                        La carte résultante aura le même système de coordonnées
                        que la couche de référence. La précision du calage
                        dépend alors notamment de la précision de la couche de
                        référence.
                    </p>
                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_1_calage_methode2.svg"
                            alt="calage"
                        />
                    </div>
                    <p className="my-4 img-titre">
                        calage grâce à une couche déjà calée servant de
                        référence Calage grâce à une couche de référence (Source
                        de l'image à caler : Wikimedia, domaine public, source
                        des données de référence{" "}
                        <a
                            href="http://www.openstreetmap.org/#map=14/-37.7762/145.1778"
                            className="lien text-xs"
                        >
                            OpenStreetMap
                        </a>
                        © les contributeurs d’OpenStreetMap).
                    </p>
                    <p className="my-4">
                        Dans l'illustration ci-dessus, l'image de gauche est
                        géoréférencée en utilisant le fond de carte{" "}
                        <a
                            href="http://www.openstreetmap.org/"
                            className="lien"
                        >
                            OpenStreetMap
                        </a>
                        . Des points que l'on peut facilement identifier sur les
                        deux images (par exemple des intersections de routes)
                        servent de points de calage.
                    </p>
                </div>
            </div>

            <div className="flex justify-between items-center py-5 my-4 relative">
                <div></div>
                <div className="fixed bottom-20 z-20 md:right-52 sm:right-12 right-5">
                    <a href="#top" className="btn-lien rounded-full py-4 px-4">
                        <ArrowDropUp />
                    </a>
                </div>
                <div>
                    <NavLink
                        className="btn-lien fixed bottom-5 z-20 md:right-52 sm:right-12 right-5"
                        to="/app/plan-detailler/georeferencement/preliminaire"
                    >
                        <span className="hidden lg:block">Suivant</span>{" "}
                        <ArrowRightOutlined sx={{ fontSize: 30 }} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Principe;
