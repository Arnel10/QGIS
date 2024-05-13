import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function CroisVecRes() {
    return (
        <div className="relative paragraphe" id="top">
            <div className="my-4">
                <h4 className="titre-primary">
                    IX.3 Analyse spatiale : croisement de données vecteur et raster
                </h4>
            </div>

            <div>
                <ul className="text-blue-500">
                    <li className="my-2">
                        <a href="#prepare" className="lien">
                            Préparation des données : un seul SCR pour tous
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#valorelevate" className="lien">
                            Attribuer à chaque point une valeur d'élévation
                        </a>
                    </li>
                </ul>
            </div>
            <p className="paragraphe">
                Pour compléter ce chapitre, voici un exemple d'analyse mettant en jeu données vecteur et raster : en partant d'une couche de pente, et d'une couche de points représentant des échantillons, nous allons calculer la valeur de la pente pour chacun des échantillons.
            </p>

            <div id="prepare" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Préparation des données : un seul SCR pour tous
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Ouvrez un nouveau projet QGIS, ajoutez-y la couche <span className="font-bold text-green-400">srtm_21_09.tif</span>.
                            </p>
                            <p className="paragraphe">
                                Ajoutez également la couche <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_09_AnalyseSpat.zip" className="lien">echantillons_jamaique_JAD2001</a> fournie dans le dossier <span className="font-bold">TutoQGIS_09_AnalyseSpat/donnees</span>. Cette couche correspond à la localisation de points d'études imaginaires.
                            </p>
                            <p className="paragraphe">
                                Dans quel(s) SCR sont ces deux couches ?
                            </p>
                            <p className="paragraphe italic">
                                On peut lire le SCR dans les propriétés de la couche, rubrique Source :
                            </p>
                            <p className="paragraphe italic">
                                srtm_21_09.tif → WGS84 EPSG:4326
                            </p>
                            <p className="paragraphe italic">
                                echantillons_jamaique_JAD2001 → JAD2001 EPSG:3448
                            </p>
                            <p className="paragraphe">
                                Comment vous-y prendriez-vous pour passer ces deux couches dans le même SCR ?
                            </p>
                            <p className="paragraphe italic">
                                Il est possible soit de changer le SCR du raster, soit de changer le SCR du vecteur. Néanmoins, le temps de calcul est généralement moins long lorsqu'il s'agit de modifier le SCR d'une couche vecteur, en particulier pour une couche de points.
                            </p>
                            <p className="paragraphe">
                                <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/02_04_changer_systeme.html#II42" className="lien">Modifiez le SCR de la couche</a> <span className="font-bold text-green-400">echantillons_jamaique_JAD2001</span> vers le <span className="font-bold">WGS84 EPSG:4326</span> . Nommez la nouvelle couche <span className="font-bold text-green-400">echantillons_jamaique_WGS84</span>.
                            </p>
                            <p className="paragraphe">
                                Supprimez de QGIS <span className="font-bold text-green-400">echantillons_jamaique_JAD2001</span>.
                            </p>
                            <p className="paragraphe">
                                Votre projet QGIS doit contenir uniquement les 2 couches <span className="font-bold text-green-400">echantillons_jamaique_WGS84</span> et <span className="font-bold text-green-400">srtm_21_09</span>. Vérifiez qu'elles sont toutes deux en WGS84.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Nous avons vu qu'il n'est pas toujours nécessaire de travailler avec des couches dans le même SCR, certains outils acceptant de croiser 2 couches dans 2 SCR différents. Cependant, cela reste une bonne pratique et peut éviter des problèmes !
                        </p>
                    </div>
                </div>
            </div>


            <div id="valorelevate" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Attribuer à chaque point une valeur d'élévation
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Comment faire pour donner à chacun des points sa valeur d'élévation ? Il faut pour cela attribuer à chaque point la valeur du pixel qui le recouvre.
                        </p>
                        <p className="paragraphe">
                            Une recherche dans la boîte à outils, rubrique Analyse Raster, permet de découvrir l'outil <span className="font-bold">Prélèvement des valeurs rasters vers ponctuels</span> qui semble correspondre à ce que l'on cherche.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe text-green-400">
                                Boîte à outils → Analyse raster → Prélèvement des valeurs rasters vers ponctuels
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_3_prelev_raster_emplacement.jpg"
                                    alt="pôle-ard"
                                    width={300}
                                />
                            </div>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_3_prelev_raster_fenetre.jpg"
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
                                        Couche de points en entrée : <span className="font-bold text-green-400">echantillons_jamaique_WGS84</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Raster layer to sample : <span className="font-bold text-green-400">srtm_21_09</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Préfixe de la colonne en sortie : vous pouvez taper par exemple <span className="font-bold">elev</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Laissez l'option de sortie par défaut, pour créer une couche temporaire
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <p className="paragraphe">
                            Ici, notre raster ne possède qu'une seule bande. Certains raster en possèdent plusieurs, c'est le cas par exemple des images satellites qui ont différentes bandes pour le vert, le rouge, l'infrarouge etc.
                        </p>
                        <p className="paragraphe">
                            Cet outil ajoutera autant de colonnes à la table de la couche de points que de bandes dans le raster. Ces champs auront en suffixe le numéro de bande (1, 2...), auquel il est donc possible de rajouter un préfixe.
                        </p>
                        <p className="paragraphe">
                            Ici, le nouveau champ sera donc nommé elev1.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Cliquez sur <span className="font-bold">Exécuter</span>, la couche temporaire est ajoutée et se nomme <span className="font-bold">Sampled Points</span>. Elle possède les mêmes géométries que la couche de points en entrée, et une colonne de plus dans sa table.
                            </p>
                            <p className="paragraphe">
                                Ouvrez sa table attributaire pour le vérifier : une colonne <span className="font-bold">elev1</span> a été ajoutée, où l'élévation de chaque point est renseignée.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_3_table.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            Attention toutefois, la résolution des données d'élévation est de 90 mètres : si les points représentent une location précise par exemple au mètre près, l'élévation que nous leur avons attribué n'aura pas cette précision.
                        </p>
                        <p className="paragraphe">
                            Nous avons vu ici un exemple très simple montrant qu'on peut croiser données vecteur et raster. Il est également possible de <span className="font-bold">transformer des données vecteur en raster (rastérisation) et inversement (polygonisation)</span>.
                        </p>
                        <p className="paragraphe">
                            Par exemple, on peut vouloir rasteriser une série de couches vecteurs surfaciques pour pouvoir les additionner facilement, ou bien vectoriser une couche raster représentant des zones pour pouvoir y affecter des données attributaires...
                        </p>
                        <p className="paragraphe">
                            Chaque type de données a une utilisation différente, mais il est utile de garder à l'esprit que les 2 existent !
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/analyse-spatiale/operation-donnees-rast"
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
                        to="/app/plan-detailler/analyse-spatiale/creer-maillage"
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

export default CroisVecRes;
