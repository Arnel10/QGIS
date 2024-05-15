import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function Execlot() {
    return (
        <div className="relative paragraphe">
            <div className="my-4">
                <h4 className="titre-primary" id="top">
                    XI.2 Exécuter un outil « par lot »
                </h4>


                <div id="txt" className="mt-8 mb-4">

                    <p className="paragraphe">
                        L'outil de découpage est accessible via la boîte à outils ; tous les outils de cette boîte peuvent être exécutés <span className="font-bold">par lot</span>.
                    </p>
                    <div className="bg-style-g p-2">
                        <p className="paragraphe">
                            Pour lancer l'outil de découpage en mode « par lot » : dans la boîte à outils, <span className="font-bold"> clic droit sur Couper → Exécuter comme processus de lot...</span>
                        </p>
                        <p className="paragraphe">
                            Dans la fenêtre qui s'ouvre,<span className="font-bold"> chaque ligne correspond à une instance de l'outil</span>. Chaque colonne correspond à un paramètre : la 1ère colonne à la couche en entrée, la 2ème à la couche de découpage (masque), la 3ème à la couche qui sera créée.
                        </p>
                        <p className="paragraphe">
                            Pour remplir chacune des colonnes :
                        </p>
                        <p className="paragraphe">
                            <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} <span className="font-bold"> Couche source </span>: sur la première ligne, cliquer sur <span className="font-bold">Auto-remplissage… → Sélectionner à partir des couches chargées</span> et cochez les 4 couches OSM à découper (si ces couches n'étaient pas chargées dans QGIS, utiliser l'option Sélectionner des fichiers).
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "}  Supprimez ensuite la ligne créée par défaut (remplie avec SAINTE_RADEGONDE pour les 2 1ères colonnes) : il faut la sélectionner en cliquant sur son numéro de ligne (2) puis cliquer sur le bouton <span className="font-bold">Supprimer la/les ligne(s)</span> (signe « - » rouge)
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} <span className="font-bold"> Couche de superposition</span> : par défaut cette colonne devrait déjà être remplie correctement avec SAINTE_RADEGONDE. Si ça n'était pas le cas, sélectionnez SAINTE_RADEGONDE sur la ligne 2, puis cliquez sur Auto-remplissage… → Remplir
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} <span className="font-bold">Découpé</span> : cliquer sur les … de la ligne 2, rendez-vous dans le dossier où vous voulez créer les nouvelles couches, tapez <span className="font-bold">decoupe_</span> et cliquez sur <span className="font-bold">Enregistrer</span>. Dans la fenêtre suivante : choisir <span className="text-green-400">Remplir avec les valeurs du paramètre, Couche source </span> , afin que le nom de chaque couche qui sera créée soit complété par le nom de la couche OSM de départ.
                                </li>
                                <div className="bg-img">
                                    <img
                                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_02_remplir_val_parametre.jpg"
                                        alt="pôle-ard"
                                        width={500}
                                    />
                                </div>
                            </ul>
                        </p>
                        <p className="paragraphe">
                            N'oubliez pas de cocher la case <span className="font-bold"> Charger les couches</span> pour que les couches résultat soient automatiquement ajoutées à QGIS.
                        </p>
                        <p className="paragraphe">
                            Au final, vous devez obtenir quelque chose de similaire à ceci (cliquez sur l'image pour la voir en plus grand) :
                        </p>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_02_lot_complet.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                        <p className="paragraphe">
                            Cliquer sur <span className="font-bold">Exécuter</span>, patienter… Les 4 couches sont créées et ajoutées à QGIS.
                        </p>
                    </div>
                    <p className="paragraphe">
                        Tous les outils de la boîte Traitements sont exécutables par lot.
                    </p>
                    <p className="paragraphe">
                        Mais comment faire maintenant si on doit répéter plusieurs fois une chaîne de traitement, par exemple découper une couche par une autre puis modifier son SCR ?
                    </p>
                </div>

            </div>






            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/automatisation-des-traitements/traitement-de-base"
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
                        to="/app/plan-detailler/automatisation-des-traitements/construire-utilise-modele"
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

export default Execlot;
