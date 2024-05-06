import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function NumLign() {
    return (
        <div>
            <h4 className="titre-primary" id="top">
                V.4 Numériser des lignes
            </h4>
            <div>
                <ul className="text-blue-500">
                    <li className="my-2">
                        <a href="#createcoucheligne" className="lien">
                            Création d'une couche de lignes
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#ajoutligne" className="lien">
                            Ajout d'une ligne
                        </a>
                        <ul className="ml-8">
                            <li>
                                <a href="#firstrow" className="lien">
                                    Première ligne
                                </a>
                            </li>
                            <li>
                                <a href="#sometips" className="lien">
                                    Quelques astuces
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="my-2">
                        <a href="#modifrow" className="lien">
                            Modification du tracé d'une ligne
                        </a>
                    </li>
                </ul>
            </div>
            <p className="paragraphe">
                Nous avons vu précédemment comment numériser des points. Comment
                procéder quand le but est de numériser des lignes ? Nous allons
                numériser des fleuves de la carte de l'île d'Oahu.
            </p>
            <div id="createcoucheligne" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Création d'une couche de lignes
                    </h5>
                </div>
                <div className="mt-4">
                    <div className="my-4">
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Reportez-vous à la partie{" "}
                                <a
                                    href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/05_01_creation_couche.html"
                                    className="lien"
                                >
                                    V.1
                                </a>{" "}
                                pour créer une couche de ligne, en lui donnant :
                            </p>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        le nom{" "}
                                        <span className="font-bold text-green-400">
                                            fleuves_oahu
                                        </span>
                                        .
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        le type de géométrie{" "}
                                        <span className="font-bold">
                                            polyligne
                                        </span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        un seul champ de type texte, de longueur
                                        80, nommé{" "}
                                        <span className="font-bold">nom</span>{" "}
                                        (il contiendra le nom des fleuves)
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Vérifiez que cette couche soit bien chargée dans
                                votre projet, ainsi que la carte{" "}
                                <a
                                    href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_05_Numerisation.zip"
                                    className="lien"
                                >
                                    Oahu_Hawaiian_Islands_1906_wgs84.tif
                                </a>{" "}
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="ajoutligne" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre"> Ajout d'une ligne</h5>
                </div>
                <div className="mt-4">
                    <div className="my-4">
                        <h6 className="sous-titre-italic" id="firstrow">
                            Première ligne
                        </h6>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Zoomez sur un fleuve, par exemple dans l'ouest
                                de l'île, dans la région de Makaha :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_4_makaha.jpg"
                                    alt="pôle-ard"
                                    width={250}
                                />
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_4_makaha_zoom.jpg"
                                    alt="pôle-ard"
                                    width={250}
                                />
                            </div>
                            <p className="paragraphe">
                                Passez en mode édition pour votre couche de
                                fleuves.
                            </p>
                            <p className="paragraphe">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_4_ajout_icone.jpg"
                                    alt=""
                                />{" "}
                                Cliquez sur l'icône{" "}
                                <span className="font-bold">
                                    Ajouter une entité linéaire
                                </span>
                                . Attention, elle ressemble beaucoup à l'icône
                                pour créer une nouvelle couche shapefile !
                            </p>
                            <p className="paragraphe italic">
                                Vous remarquerez que cette icône varie en
                                fonction du type de couche éditée : point, ligne
                                ou polygone.
                            </p>
                            <p className="paragraphe">
                                Cliquez sur le début du fleuve pour créer un
                                premier sommet, puis rajoutez d'autres points à
                                votre ligne. Pour terminer, faites un clic-droit
                                n'importe où.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_4_fleuve.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <h6 className="sous-titre-italic" id="sometips">
                            Quelques astuces
                        </h6>
                        <p className="paragraphe">
                            <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                <li className="my-1">
                                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                    Si pendant la numérisation vous avez{" "}
                                    <span className="font-bold">
                                        des difficultés à voir votre ligne
                                    </span>{" "}
                                    : menu Préférences → Options → rubrique
                                    Numérisation : réglez l'épaisseur de la
                                    ligne, par exemple 2, et la couleur. Pour la{" "}
                                    <span className="font-bold text-green-400">
                                        couleur
                                    </span>{" "}
                                    , n'oubliez pas de mettre le canal alpha,
                                    c'est-à-dire la transparence, à 255 pour
                                    éliminer toute transparence (une fois la
                                    ligne terminée, elle prend le style spécifié
                                    dans les propriétés de la couche)
                                    <div className="bg-img">
                                        <img
                                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_4_num_style_couleur.jpg"
                                            alt="pôle-ard"
                                            width={400}
                                        />
                                    </div>
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                    <span className="font-bold">
                                        Supprimer le dernier point créé{" "}
                                    </span>
                                    : touche suppr ou retour arrière (backspace)
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                    <span className="font-bold">
                                        Se déplacer tout en numérisant :
                                    </span>{" "}
                                    utilisez les flèches du clavier, ou bien
                                    maintenez la molette de la souris ou la
                                    touche espace enfoncée et bougez la souris
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                    <span className="font-bold">
                                        Abandonner la ligne en cours :
                                    </span>{" "}
                                    terminez-la avec un clic droit, puis si les
                                    fenêtres de saisie d'attributs sont activées
                                    cliquez sur annuler, sinon utilisez ctrl + z
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div id="modifrow" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        {" "}
                        Modification du tracé d'une ligne
                    </h5>
                </div>
                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Il est possible de modifier le tracé d'une ligne
                            existante en déplaçant des sommets, en en rajoutant
                            ou supprimant.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_4_noeud_icone.jpg"
                                    alt=""
                                />{" "}
                                Vérifiez que vous êtes bien en mode édition pour
                                la couche de fleuves. Sélectionnez-la dans la
                                table des matières, puis cliquez sur l'icône{" "}
                                <span className="font-bold">Outil de nœud</span>
                                .
                            </p>
                            <p className="paragraphe">
                                Survolez une ligne existante : les sommets
                                prennent la forme de ronds rouges.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_4_fleuve_noeud.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Si vous survolez un sommet, il devient plus
                                gros. Vous pouvez alors :
                            </p>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        <span className="font-bold">
                                            le déplacer
                                        </span>{" "}
                                        en cliquant une première fois sur le
                                        sommet puis en cliquant à l'emplacement
                                        de votre choix
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        <span className="font-bold">
                                            {" "}
                                            le supprimer{" "}
                                        </span>{" "}
                                        en cliquant une première fois sur le
                                        sommet puis en appuyant sur la touche
                                        suppr
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        <span className="font-bold">
                                            rajouter un sommet :
                                        </span>{" "}
                                        double-cliquez sur la ligne à l'endroit
                                        où vous voulez créer un sommet puis
                                        cliquez là où vous désirez placer ce
                                        sommet.
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Une fois vos modifications terminées, n'oubliez
                                pas de{" "}
                                <span className="font-bold">
                                    quitter le mode édition en enregistrant vos
                                    modifications.
                                </span>
                            </p>
                        </div>
                        <p className="paragraphe">
                            Rendez-vous au chapitre suivant pour numériser des
                            polygones !
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/numerisation/donnees-attrib"
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
                        to="/app/plan-detailler/numerisation/numeriser-pol"
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

export default NumLign;
