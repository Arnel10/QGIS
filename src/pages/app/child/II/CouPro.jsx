import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
    FolderOpenOutlined,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function CouPro() {
    return (
        <div id="top">
            <h4 className="titre-primary">
                II.3 Couches et projets : à chacun son système
            </h4>

            <div>
                <ul className="text-blue-500">
                    <li className="my-2">
                        <a href="#projet" className="lien">
                            SCR du projet
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#scrcouche" className="lien">
                            SCR d'une couche
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#provole" className="lien">
                            Projection à la volée
                        </a>
                    </li>
                </ul>
            </div>

            <div id="projet" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">SCR d'une Projet</h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <div className="bg-style-g p-2">
                            <FolderOpenOutlined /> A partir de QGIS, ouvrez le
                            projet{" "}
                            <a href="#" className="font-bold lien">
                                {" "}
                                regions_france.qgz{" "}
                            </a>{" "}
                            situé dans le dossier{" "}
                            <span className="font-bold">
                                TutoQGIS_02_geodesie/projets.
                            </span>{" "}
                            <br />
                            <p className="paragraphe">
                                Toutes les couches chargées dans ce projet
                                seront affichées dans le SCR du projet. Quel est
                                ce SCR ? Trois manières pour accéder à cette
                                information :
                            </p>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        <a
                                            href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_3_proprietes_projet_menu.jpg"
                                            className="lien"
                                        >
                                            Menu Projet → Propriétés...
                                        </a>{" "}
                                        Menu Projet, Propriétés du projet,
                                        rubrique SCR{" "}
                                        <a
                                            rel="noopener noreferrer"
                                            class="text-blue-500 hover:text-blue-600 hover:underline"
                                            href="https://www.onf.ca/film/carte_impossible/"
                                            target="_blank"
                                        >
                                            {" "}
                                            la carte impossible{" "}
                                        </a>
                                        <div className="bg-img">
                                            <img
                                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_3_proprietes_projet_menu.jpg"
                                                alt="pôle-ard"
                                                width={500}
                                            />
                                        </div>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Icône{" "}
                                        <span className="font-bold">
                                            SCR actuel
                                        </span>{" "}
                                        tout en bas à droite de la fenêtre de
                                        QGIS icône SCR actuel
                                        <a
                                            rel="noopener noreferrer"
                                            class="text-blue-500 hover:text-blue-600 hover:underline"
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
                                        <span className="font-bold">
                                            {" "}
                                            raccourci clavier Ctrl+Maj+P →
                                            rubrique SCR
                                        </span>
                                        <a
                                            rel="noopener noreferrer"
                                            class="text-blue-500 hover:text-blue-600 hover:underline"
                                            href="https://www.onf.ca/film/carte_impossible/"
                                            target="_blank"
                                        >
                                            {" "}
                                            la carte impossible{" "}
                                        </a>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            La fenêtre suivante s'ouvre :
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_3_scr_projet.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </p>
                    </div>

                    <div className="my-4">
                        <p className="paragraphe">
                            <span className="font-bold text-red-400">1.</span>{" "}
                            <span className="font-bold">Aucun SCR :</span> cette
                            case à cocher permet de visualiser facilement si les
                            différentes couches d'un projet utilisent des SCR
                            différents.
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            <span className="font-bold text-red-400">2.</span>{" "}
                            <span className="font-bold">Partie "Filtre":</span>{" "}
                            vous pouvez taper ici un code ou un nom pour
                            rechercher un SCR précis.
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            <span className="font-bold text-red-400">3.</span>{" "}
                            <span className="font-bold">
                                SCR récemment utilisés:
                            </span>{" "}
                            (cette partie peut être vide). Cette liste permet
                            d'accéder facilement aux SCR que vous utilisez
                            souvent.
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            <span className="font-bold text-red-400">4.</span>{" "}
                            <span className="font-bold">
                                Liste de tous les SCR disponibles dans QGIS.:
                            </span>{" "}
                            Ils sont classés selon 3 grandes rubriques :
                            systèmes de coordonnées géographiques, systèmes de
                            coordonnées projetés et systèmes de coordonnées
                            définis par l'utilisateur (soit qu'ils aient été
                            créés par vous-même, soit qu'ils aient été lus par
                            QGIS dans une couche).
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            <span className="font-bold text-red-400">5.</span>{" "}
                            <span className="font-bold">
                                SCR actuellement utilisé par le projet
                            </span>{" "}
                            avec sa définition dans 2 formats, WKT et Proj4, et
                            sa zone d'application (également visible dans la
                            carte à droite)
                        </p>
                    </div>
                    <div className="my-4">
                        <p className="paragraphe">
                            La rubrique SCR de la fenêtre des propriétés du
                            projet permet donc de modifier le système de
                            coordonnées du projet, ou bien simplement de
                            vérifier quel est ce système, ce que nous nous
                            bornerons à faire pour le moment.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-style-g p-2">
                A votre avis, quel est le SCR du projet ?
                <p className="paragraphe italic ml-4">
                    Le projet est en WGS84, comme indiqué dans la partie 5 de la
                    fenêtre.
                </p>
            </div>
            <div className="my-4">
                <p className="paragraphe">
                    Notez également que le{" "}
                    <span className="font-bold">code EPSG</span> du SCR du
                    projet est indiqué tout en bas à droite de la fenêtre de
                    QGIS, dans{" "}
                    <span className="font-bold">la barre d'état de QGIS</span> .
                    <div className="bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_3_barre_etat_scr.jpg"
                            alt="pôle-ard"
                            width={500}
                        />
                    </div>
                </p>
            </div>

            <div id="scrcouche" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">SCR d'une couche</h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Nous allons maintenant nous poser la question de
                                savoir dans quel SCR est la couche REGION.
                            </p>
                            <p className="paragraphe">
                                Ouvrez les propriétés de cette couche (double
                                clic sur le nom de la couche) et allez dans la
                                rubrique{" "}
                                <span className="font-bold"> Information </span>{" "}
                                .
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_3_scr_couche.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe p-2">
                                A votre avis, quel est le SCR de la couche
                                REGION ?
                            </p>
                            <p className="paragraphe p-2 italic">
                                Cette couche est en RGF93 / Lambert-93, code
                                EPSG 2154.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Vous avez donc pu constater que notre projet et la
                            couche qui y est présente ont deux SCR différents.
                            Comment cela est-il possible ?
                        </p>
                    </div>
                </div>
            </div>

            <div id="provole" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">Projection à la volée</h5>
                </div>
                <p className="paragraphe">
                    <span className="font-bold">La projection à la volée</span>{" "}
                    est une fonctionnalité qui permet d'afficher des couches
                    dans un autre SCR que le leur, le SCR du projet.
                </p>
                <p className="paragraphe">
                    Ainsi, la couche{" "}
                    <span className="font-bold text-green-500">REGION</span> est
                    affichée en WGS84 bien que son SCR soit le RGF93 Lambert93.
                    Il s'agit bien uniquement d'une question d'affichage, le SCR
                    de la couche n'est pas modifié.
                </p>
                <p className="paragraphe">
                    Depuis la version 3 de QGIS,{" "}
                    <span className="font-bold">
                        {" "}
                        il n'est plus possible de désactive la projection à la
                        volée. Toutes les couches sont donc toujours affichées
                        dans le SCR du projet.{" "}
                    </span>
                </p>
                <p className="paragraphe">
                    Il est donc possible de superposer plusieurs couches dans
                    des SCR différents. C'est ce que nous allons vérifier!
                </p>
            </div>

            <div className="mt-4">
                <div className="my-4">
                    <div className="bg-style-g p-2">
                        <p className="paragraphe">
                            Ajoutez la couche{" "}
                            <a
                                href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_02_Geodesie.zip"
                                className="lien"
                            >
                                ne_110m_admin_0_countries.shp
                            </a>{" "}
                            au projet. Vérifiez son SCR. Les deux couches
                            doivent se superposer correctement (même si elles
                            ont des niveaux de généralisation différents, elles
                            ne présentent pas de décalage l'une par rapport à
                            l'autre).
                        </p>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_3_superposition_couches.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/geodesie/coordonnes-systeme"
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
                        to="/app/plan-detailler/geodesie/passer-un-systeme"
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
export default CouPro;
