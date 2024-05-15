import {
    ArrowDropDown,
    ArrowDropUp,
    ArrowRightOutlined,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function TraitBase() {
    return (
        <div className="relative paragraphe">
            <div className="my-4">
                <h1 className="titre-primary" id="top">
                    XI.1 Traitement de base pour une seule couche
                </h1>
            </div>

            <p className="my-4">
                Nous allons (re)voir ici une manipulation simple : comment
                <span className="lien"> découper une couche par une autre</span>
                .
            </p>

            <p className="my-4">
                Nous verrons dans les chapitres suivants comment{" "}
                <span className="font-bold">automatiser ce traitement</span>,
                pour par exemple découper rapidement 10 couches par une autre.
            </p>

            <div className="bg-style-g p-4 my-4">
                <p className="my-4">
                    Lancer QGIS et ouvrir le projet{" "}
                    <span className="font-bold lien">decoupe.qgz</span> situé
                    dans{" "}
                    <span className="font-bold">
                        TutoQGIS_11_automatisation/projets
                    </span>
                    .
                </p>

                <p className="my-4 font-bold">
                    Ce projet contient une couche correspondant aux limites
                    communales de la commune de Sainte-Radégonde, ainsi que 4
                    autres couches de lieux, routes, espaces naturels et
                    bâtiments.
                </p>

                <div className="my-4 bg-img">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/11_01_projet.jpg"
                        alt="projet"
                    />
                </div>

                <div className="my-4">
                    <p className="my-4">
                        <ArrowDropDown /> Vérifier que toutes les couches aient
                        bien le même SCR. Quel est ce SCR ?
                    </p>

                    <p className="my-4 italic text-sm">
                        En allant dans les propriétés de chaque couche, rubrique
                        Source (ou bien en survolant le nom de chaque couche et
                        en lisant l'infobulle), on peut constater qu'elles sont
                        toutes en RGF93/Lambert 93, code EPSG 2154.
                    </p>
                </div>

                <p className="my-4">
                    Pour découper la couche de routes par la commune :{" "}
                    <span className="lien">
                        Boîte à outils → Recouvrement de vecteur → Couper
                    </span>
                </p>

                <div className="my-4 bg-img">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/11_01_couper_menu.jpg"
                        alt="couper_menu"
                    />
                </div>

                <div className="my-4 bg-img">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/11_01_decouper_fenetre.jpg"
                        alt="decouper_fenetre"
                    />
                </div>

                <p className="my-4">
                    Une nouvelle couche temporaire est créée, qui ne contient
                    que les portions de routes à l'intérieur de la commune.
                </p>
            </div>

            <p className="my-4">
                Comment faire maintenant pour découper les 4 couches par la
                commune, sans répéter 4 fois cette opération ?
            </p>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    {/* <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/geodesie/introduction-geodesie"
                    >
                        <ArrowLeftOutlined sx={{ fontSize: 30 }} />{" "}
                        <span className="hidden lg:block">Précédent</span>
                    </NavLink> */}
                </div>

                <div className="fixed bottom-20 z-20 md:right-52 sm:right-12 right-5">
                    <a href="#top" className="btn-lien rounded-full py-4 px-4">
                        <ArrowDropUp />
                    </a>
                </div>

                <div>
                    <NavLink
                        to="/app/plan-detailler/automatisation-des-traitements/execution-lot"
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

export default TraitBase;
