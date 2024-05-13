import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function CreMaille() {
    return (
        <div className="relative paragraphe">
            <h4 className="titre-primary" id="top">
                IX.4 Un exemple d'application : créer un maillage
            </h4>

            <div>
                <ul className="text-blue-500">
                    <li className="my-2">
                        <a href="#prince" className="lien">
                            Principe
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#creategrille" className="lien">
                            Création d'une grille
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#together" className="lien">
                            Union !
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#calculsurf" className="lien">
                            Recalcul de la surface
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#mailleagrre" className="lien">
                            Agrégation des données par maille
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#rasterme" className="lien">
                            Rastérisation
                        </a>
                    </li>
                </ul>
            </div>

            <p className="paragraphe mt-4">
                Pour finir cette partie sur l'analyse spatiale, voici un exemple d'application mettant en jeu plusieurs notions. Il s'agira ici, à partir de données <a href="https://www.statistiques.developpement-durable.gouv.fr/corine-land-cover-0" className="lien">Corine Land Cover</a> d'occupation du sol, <despan className="font-bold"> créer un maillage sous forme de grille à l'échelle de la France métropolitaine, avec pour chaque case de cette grille la surface en vignes</despan>.
            </p>
            <p className="paragraphe">
                Les mailles sont beaucoup utilisées dans différents domaines, par exemple pour étudier la répartition des espèces en écologie. Cette méthode permet de créer des représentations facilement comparables, et de travailler à différentes échelles en faisant varier la taille des mailles.
            </p>
            <p className="paragraphe">
                Nous verrons d'abord comment réaliser cela avec les outils QGIS, puis dans le <a href="#" className="lien"> chapitre suivant</a> comment automatiser cette tâche avec le langage SQL, afin de pouvoir facilement reproduire ce traitement sur d'autres données, avec une autre taille de grille...
            </p>
            <p className="paragraphe">
                ...Et pour tirer partie de cette automatisation, nous finirons en <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/09_05_maillage_sql.html#IX56" className="lien">soustrayant 2 maillages</a> afin de voir l'évolution de la surface en vignes entre 2 dates.
            </p>
            <div className="bg-img">
                <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_apercu_resultatfinal.jpg"
                    alt="pôle-ard"
                    width={500}
                />
            </div>
            <p className="paragraphe italic text-center">
                Un exemple de résultat avec une taille de maille de 10km
            </p>

            <div id="prince" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Principe
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Pour bien comprendre la manip, nous allons commencer par créer un maillage en utilisant les outils QGIS.
                        </p>
                        <p className="paragraphe">
                            Nous partirons des données Corine Land Cover (CLC) d'occupation du sol, en filtrant les données pour ne garder que celles correspondant au vignoble :
                        </p>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_principe_depart.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                        <p className="paragraphe">
                            Nous passerons ensuite par 4 étapes :
                        </p>
                        <p className="paragraphe ml-5">
                            1. <span className="font-bold">Créer une grille</span> sur l'emprise de la couche de départ, avec une taille de maille définie, par exemple 50 km
                        </p>
                        <p className="paragraphe ml-5">
                            2. Réaliser une <span className="font-bold">union</span> entre la couche d'occupation du sol et la grille, pour découper les données par les cases de la grille
                        </p>
                        <p className="paragraphe ml-5">
                            3. <span className="font-bold">Agréger</span> les données par maille, en calculant pour chaque maille la surface totale en vignes
                        </p>
                        <p className="paragraphe ml-5">
                            4. <span className="font-bold">Rastériser</span> le résultat, ce qui sera utile pour par exemple soustraire 2 maillages l'un à l'autre
                        </p>
                        <p className="paragraphe">
                            Avec une grille de résolution 50 km :
                        </p>
                        <p className="paragraphe">
                            <table>
                                <tr>
                                    <td>
                                        <div className="bg-img">
                                            <img
                                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_principe_grille.jpg"
                                                alt="pôle-ard"
                                                width={200}
                                            />
                                        </div>
                                    </td>
                                    <td></td>
                                    <td>
                                        <div className="bg-img">
                                            <img
                                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_principe_union.jpg"
                                                alt="pôle-ard"
                                                width={200}
                                            />
                                        </div>
                                    </td>
                                    <td></td>
                                    <td>
                                        <div className="bg-img">
                                            <img
                                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_principe_agreg.jpg"
                                                alt="pôle-ard"
                                                width={200}
                                            />
                                        </div>
                                    </td>
                                    <td></td>
                                    <td>
                                        <div className="bg-img">
                                            <img
                                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_principe_raster.jpg"
                                                alt="pôle-ard"
                                                width={200}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="paragraphe text-center mt-0">
                                            1. Grille
                                        </p>
                                    </td>
                                    <td></td>
                                    <td>
                                        <p className="paragraphe text-center mt-0">
                                            2. Union
                                        </p>
                                    </td>
                                    <td></td>
                                    <td>
                                        <p className="paragraphe text-center mt-0">
                                            3. Agrégation
                                        </p>
                                    </td>
                                    <td></td>
                                    <td>
                                        <p className="paragraphe text-center mt-0">
                                            4. Rastérisation
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </p>
                        <p className="paragraphe">
                            Si ça n'est pas clair, ne vous inquiétez pas, tout devrait s'éclaircir par la pratique !
                        </p>
                    </div>
                </div>
            </div>

            <div id="creategrille" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Création d'une grille
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Première étape : créer une grille. Elle devra avoir la même emprise que la couche de départ, et pour que les temps de calcul soient raisonnables nous utiliserons une taille de maille de 50 km.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Ouvrez un nouveau projet QGIS, chargez la couche shapefile <a href="http://www.donnees.statistiques.developpement-durable.gouv.fr/donneesCLC/CLC/millesime/CLC00_FR_RGF_SHP.zip" className="lien">CLC00_FR_RGF</a> ou bien <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_09_AnalyseSpat.zip" className="lien">CLC00_221_FR_RGF</a> (données déjà filtrées pour ne garder que les vignes).
                            </p>
                            <p className="paragraphe">
                                Vous pouvez également chargez la couche de pays <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_09_AnalyseSpat.zip" className="lien">ne_50m_admin_0_countries</a> qui nous aidera à nous repérer.
                            </p>
                            <p className="paragraphe">
                                Pour comprendre les données CLC, ouvrez la table attributaire, qui comporte 3 champs :
                            </p>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} <span className="font-bold">CODE_00</span> correspond au type d'occupation du sol. Pour connaître la signification des codes, lisez le fichier <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_09_AnalyseSpat.zip" className="lien">CLC_nomenclature.xls</a> dans le dossier <span className="font-bold">TutoQGIS_09_AnalyseSpat/metadonnees</span>.
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}  <span className="font-bold">AREA_HA</span> correspond à la surface en hectares (1 ha = 10 000 m²)
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} et <span className="font-bold">ID</span> est un champ d'identifiant unique
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Quel est le CRS de cette couche ? (réflexe !!!)
                            </p>
                            <p className="paragraphe italic ml-5">
                                Le SCR de cette couche est <span className="font-bold"> IGNF:LAMB93</span> équivalent au RGF93/Lambert93 code EPSG 2154.
                            </p>
                            <p className="paragraphe">
                                Laissons de côté ces données pour le moment, et créons la grille. Pour cela, ouvrez la boîte à outils et faites une recherche sur le mot <span className="font-bold">grille</span> :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_toolbox_grille.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Double-cliquez sur l'outil <span className="font-bold">Créer une grille</span> dans la rubrique <span className="font-bold">Création de vecteurs</span>.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_grille_fenetre.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}  <span className="font-bold">Type de grille </span>: choisir <span className="font-bold">rectangle</span> (et notez au passage qu'on peut également créer des mailles hexagonales)
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}  <span className="font-bold"> Étendue de la grille :</span> cliquez sur le bouton ... tout à droite <span className="font-bold"> → Calculer depuis la couche → CLC00_FR_RGF</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} <span className="font-bold">Espacement horizontal et vertical :</span> puisque nous voulons une taille de maille de 50 km et que nos données sont dans un SCR projeté, donc en mètres, tapez <span className="font-bold">50 000</span> pour ces 2 paramètres
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} <span className="font-bold">Grille :</span> cliquez sur le bouton ... à droite pour spécifier l'emplacement et le nom de la grille qui sera créée → Enregistrer vers un fichier ou dans un GeoPackage, et nommez-la par exemple <span className="font-bold">grille_CLC_50km</span>
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Ciquez sur <span className="font-bold">Exécuter</span> : la grille est automatiquement ajoutée à QGIS.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_grille_resultat.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Ouvrez la table attributaire de la grille :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_grille_table.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                La table comporte un champ d'identifiant unique, et 4 champs correspondant aux coordonnées minimales et maximales de chaque case. Les cases sont numérotées de haut en bas et de gauche à droite.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Notre but est de récupérer pour chaque case la surface en vigne correspondante. Nous allons voir maintenant que pour cela, l'union fait la force ! (et l'agrégation aussi).
                        </p>
                    </div>
                </div>
            </div>

            <div id="together" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Union !
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Qu'est-ce que l'union ? Il s'agit d'une opération du même type que l'intersection, mettant en jeu 2 couches. A la différence de l'intersection où seules les parties communes aux 2 couches sont gardées, on récupère après une union les parties communes mais aussi les parties présentes dans une seule des couches.
                        </p>
                        <p className="paragraphe">
                            La couche résultat est une couche « à plat », sans superposition.
                        </p>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_union_principe.svg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                        <p className="paragraphe italic text-center">
                            Union : couche en entrée 1, couche en entrée 2 et couche résultat : elle contient 3 polygones distincts, sans superposition.
                        </p>
                        <p className="paragraphe">
                            Notre but sera ici de faire une union entre la grille et les données CLC sur la vigne. La première étape sera de ne garder que les données CLC qui nous intéressent.
                        </p>
                        <p className="paragraphe text-green-400 font-bold">
                            Cette étape n'est pas nécessaire si vous utilisez la couche CLC00_221_FR_RGF disponible en téléchargement.
                        </p>
                        <p className="paragraphe">
                            Il existe plusieurs possibilités pour cela, on pourrait par exemple sélectionner les vignes avec une requête attributaire puis exporter la sélection pour en faire une nouvelle couche.
                        </p>
                        <p className="paragraphe">
                            Pour changer un peu, nous allons ici <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/01_02_info_geo.html#I23c" className="lien">filtrer</a> les données, ce qui permet de n'afficher que les données répondant à un critère, à la fois dans la table et sur la carte.
                        </p>
                        <p className="paragraphe italic">
                            Quelle que soit la méthode choisie, l'important est de garder les données originales, pour pouvoir y revenir en cas de besoin !
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Il faut d'abord rechercher quel est le code correspondant au vignoble : ouvrez le fichier <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_09_AnalyseSpat.zip" className="lien"> CLC_nomenclature.xls </a> dans le dossier <span className="font-bold">TutoQGIS_09_AnalyseSpat/metadonnees</span> .
                            </p>
                            <p className="paragraphe">
                                Recherchez le code correspondant au vignoble :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_code_vignoble.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Il s'agit du code <span className="font-bold">2210</span>.
                            </p>
                            <p className="paragraphe">
                                Clic-droit sur la couche <span className="font-bold text-green-400">CLC00_FR_RGF</span> <span className="font-bold">→ Filtrer... :</span>
                            </p>
                            <p className="paragraphe">
                                Utilisez l'expression <span className="font-bold">"CODE_00" = '221'</span> pour ne garder que les entités ayant pour valeur 221 pour le champ CODE_00, qui correspondent donc aux vignes.
                            </p>
                            <p className="paragraphe italic">
                                Si besoin référez-vous <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/01_02_info_geo.html#I23c" className="lien">ici</a> !
                            </p>
                        </div>
                        <p className="paragraphe">
                            A ce stade, votre projet doit donc ressembler à ceci :
                        </p>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_couches.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Nous pouvons maintenant procéder à l'union. Comme d'habitude, pour trouver l'outil adéquat, utilisez la barre de recherche de la boîte à outils avec le mot <span className="font-bold">union</span> :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_union_toolbox.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Double-cliquez sur <span className="font-bold">Union</span> dans la rubrique <span className="font-bold">Recouvrement de vecteur</span> :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_union_fenetre.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Couche source et couche de superposition : choisissez <span className="font-bold">grille_CLC_50km</span> et <span className="font-bold">CLC00_FR_RGF</span>. Il est possible de choisir l'une ou l'autre des couches en premier, seul l'ordre des champs changera dans la table attributaire.
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Union : cliquez sur le bouton ... à droite, et enregistrez le résultat au format shapefile ou GeoPackage. Nommez-le par exemple <span className="font-bold">union_grille50km_CLC</span>.
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                <span className="font-bold">Exécuter</span>, patientez...
                            </p>
                            <p className="paragraphe">
                                Vous pouvez vérifiez dans le résultat que l'union a bien été exécuté, les vignobles ayant été découpés selon les cases de la grille :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_union_resultat.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Ouvrez la table attributaire :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_union_table.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Les champs des 2 couches en entrée sont présents.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="calculsurf" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Recalcul de la surface
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Notre but étant de calculer la surface en vigne par maille, nous allons mettre à jour le champ AREA_HA. En effet, les valeurs contenues dans ce champ correspondent à la surface des polygones avant découpage et ne sont donc pas à jour.
                        </p>
                        <p className="paragraphe">
                            Il faut donc recalculer la surface de chaque polygone, et mettre une surface nulle pour les polygones ne correspondant pas à la vigne (sélectionné en jaune ci-dessous par exemple) :
                        </p>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_non_vigne.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                        <p className="paragraphe">
                            Ces polygones étaient présent uniquement dans la couche de grille, ils n'ont donc pas reçu d'attributs de la couche de vignes : <span className="font-bold">les champs ID_2, CODE_00 et AREA_HA ont une valeur nulle.</span>
                        </p>
                        <p className="paragraphe italic">
                            Il serait possible de sauter cette étape et de recalculer la surface à partir de l'outil d'agrégation. Mais pour plus de clarté nous séparerons les 2 étapes !
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Passez en <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/05_02_points.html#V21" className="lien">mode édition</a> pour la couche d'union, et ouvrez <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/07_02_calculer.html" className="lien">la calculatrice de champ</a> à partir de la table attributaire :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_recalc_fenetre.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1 mt-3">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Vérifiez que la case <span className="font-bold">Ne mettre à jour que les entités sélectionnées</span> tout en haut soit décochée (elle est désactivée si aucune entité n'est sélectionnée)
                                    </li>
                                    <li className="my-1 mt-3">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Cochez la case <span className="font-bold"> Mise à jour d'un champ existant</span> en haut à droite...
                                    </li>
                                    <li className="my-1 mt-3">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}  et choisissez le champ en question dans la liste en-dessous : <span className="font-bold">AREA_HA</span>
                                    </li>
                                    <li className="my-1 mt-3">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Nous allons utiliser une fonction conditionnelle pour ne calculer la surface que pour les polygones de vignes, c'est-à-dire dont la valeur pour le champ AREA_HA n'est pas nulle. Nous utiliserons donc la fonction <span className="font-bold">if</span> (rubrique Conditions) dont vous pouvez lire l'aide.
                                    </li>
                                    <li className="my-1 mt-3">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}  L'expression est donc la suivante : <span className="font-bold">if("AREA_HA" is not null, $area/10000, 0)</span>. Cela signifie que si le champ AREA_HA n'a pas de valeur nulle, il sera recalculé selon l'expression <span className="font-bold">$area/10000</span>, c'est-à-dire la surface en hectares, et sinon il prendra la valeur zéro.
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Cliquez sur <span className="font-bold">OK</span>, vérifiez le résultat dans la table attributaire, et <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/05_02_points.html#V24" className="lien">quittez le mode édition</a> en enregistrant les modifications.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Il ne nous reste plus qu'à agréger cette surface par maille !
                        </p>
                    </div>
                </div>
            </div>

            <div id="mailleagrre" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Agrégation des données par maille
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Cette opération consiste <span className="font-bold">à additionner les surfaces en vignes par maille pour récupérer la surface totale en vigne pour chaque maille</span>. La couche résultat aura donc la même géométrie que la grille, mais avec en attribut pour chaque case la surface en vigne.
                        </p>
                        <p className="paragraphe">
                            Pour le logiciel, cette opération correspond à <span className="font-bold"> fusionner toutes les entités ayant la même valeur pour le champ id</span> (identifiant de la maille) <enspan className="font-bold"> récupérant pour les entités fusionnées la somme des valeurs du champ AREA_HA</enspan> (surface en vignes).
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                L'outil permettant cela se nomme <span className="font-bold">agrégation</span> :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_agreg_toolbox.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_agreg_fenetre.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1 mt-3">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Couche source : votre couche d'union
                                    </li>
                                    <li className="my-1 mt-3">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Grouper par expression : les entités ayant la même valeur pour le champ choisi ici seront fusionnées, choisir le champ <span className="font-bold">id</span> correspondant à l'identifiant unique des cases de la grille
                                    </li>
                                    <li className="my-1 mt-3">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Agrégats : on peut définir dans cette partie quels champs garder, et pour ceux-ci quelle fonction d'agrégation utiliser. On peut par exemple :
                                        <ul className="ml-5">
                                            <li className="mt-3">
                                                * supprimer les champs <span className="font-bold">left, top, right, bottom</span> issus de la grille, et <span className="font-bold">ID_2 et CODE_00</span> issus de la couche CLC, puisqu'ils ne nous seront pas utiles
                                            </li>
                                            <li className="mt-3">
                                                * garder le champ <span className="font-bold">id</span> (identifiant de la grille), avec la fonction d'agrégation first value : l'entité fusionnée aura la première valeur rencontrée pour ce champ (sachant que de toute manière toutes les valeurs seront égales puisqu'on fusionne selon ce champ)
                                            </li>
                                            <li className="mt-3">
                                                * garder le champ <span className="font-bold">AREA_HA</span> puisque c'est notre but, avec la fonction d'agrégation <span className="font-bold">sum</span> pour faire la somme de toutes les valeurs rencontrées pour une même case. Au passage, on en profite pour le renomme <span className="font-bold">VIGNE_HA</span> et en faire un champ de type <span className="font-bold">entier</span>, puisque les virgules à cette échelle n'auront pas vraiment de sens.
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="my-1 mt-3">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Agrégé : comme d'habitude, cliquez sur ... tout à droite pour spécifier le nom et l'emplacement du résultat, au format GeoPackage ou shapefile.
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                <span className="font-bold">Exécuter</span>, patientez... et admirez le résultat :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_agreg_resultat.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                La couche a la même géométrie que notre grille, avec un champ supplémentaire indiquant pour chaque case la surface en vignes correspondante.
                            </p>
                            <p className="paragraphe italic">
                                Selon que votre couche est au format GeoPackage ou non, un champ fid sera présent ou non.
                            </p>
                            <p className="paragraphe">
                                En modifiant le style de cette couche, on peut avoir un aperçu de la répartition des vignes en France, par exemple avec un style gradué et 7 classes selon une discrétisation de Jenks , et en filtrant pour ne garder que les valeurs différentes de zéro :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_agreg_discretisation.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                En modifiant le style de cette couche, on peut avoir un aperçu de la répartition des vignes en France, par exemple avec un style gradué et 7 classes selon une discrétisation de Jenks , et en filtrant pour ne garder que les valeurs différentes de zéro :
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div id="rasterme" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Rastérisation
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            On pourrait s'arrêter là... Mais nous allons faire une étape de plus, pour transformer notre couche de vecteur en couche raster, où 1 maille = 1 pixel.
                        </p>
                        <p className="paragraphe">
                            Pourquoi cette opération ? Les données raster sont moins lourdes, et nous n'aurons pas de perte de précision puisque chaque maille correspondra à un pixel. Nous pourrons ensuite très facilement faire des opérations telles que soustraire 2 maillages pour 2 années différentes afin de voir l'évolution entre ces 2 années.
                        </p>
                        <p className="paragraphe">
                            Un autre avantage, plus minime, est au niveau de la représentation : sur une couche vecteur, même avec aucun contour, ceux-ci sont toujours légèrement visibles, ce qui n'est pas le cas avec un raster.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Nous allons utiliser l'outil <span className="font-bold">rasteriser (vecteur vers raster)</span> de la boîte à outils :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_raster_toolbox.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_raster_fenetre.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1 mt-3">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Couche source : il s'agit de la couche à rastériser, ici notre couche issue de l'agrégation
                                    </li>
                                    <li className="my-1 mt-3">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Champ à utiliser pour la valeur fixe à créer : choisissez ici le champ qui sera utilisé pour déterminer les valeurs des pixesls, donc <span className="font-bold">VIGNE_HA</span>
                                    </li>
                                    <li className="my-1 mt-3">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Unité du raster résultat : nous allons spécifier non pas un nombre de pixels en largeur et hauteur pour le futur raster, mais une taille de pixels en mètres, choisir donc <span className="font-bold">Unités géoréférencées</span>
                                    </li>
                                    <li className="my-1 mt-3">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Largeur/Résolution horizontale et Hauteur/Résolution verticale : tapez la largeur et hauteur de chaque pixel en mètres, soit <span className="font-bold">50 000</span> puisque notre grille a une résolution de 50 km
                                    </li>
                                    <li className="my-1 mt-3">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} emprise du résultat : cliquez sur les ... à droite pour spécifier une couche modèle pour l'emprise du futur raster, par exemple la grille en entrée, ou la couche d'agrégation
                                    </li>
                                    <li className="my-1 mt-3">
                                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Rastérisé : spécifiez un nom et un emplacement pour le raster, ainsi que son format : <span className="font-bold">TIF</span>
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Par défaut, les valeurs égales à 0 ne sont pas représentées :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_raster_resultat1.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            Ce comportement peut être modifié en allant dans les propriétés de la couche → Transparence et en décochant la case <span className="font-bold">Aucune valeur de données</span> .
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Pour afficher la répartition des vignes, modifiez le style de la couche en choisissant le type de rendu <span className="font-bold">pseudo-couleur à bande unique</span>, par exemple avec une représentation en couleur continue :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_couleur_continue.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_4_raster_resultat2.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Avec cette représentation utilisant une interpolation linéaire, contrairement à ce que la fenêtre pourrait laisser croire, il n'y a pas de classes : chaque valeur correspond à une couleur unique, en étirant les couleurs de début et de fin du dégradé pour les faire correspondre aux valeurs minimales et maximales.
                            </p>
                            <p className="paragraphe">
                                Bravo ! Vous êtes arrivés au résultat final !
                            </p>
                            <p className="paragraphe">
                                Vous aurez remarqué que nous avons dû procéder en plusieurs étapes, avec pour chaque étape différents paramètres à spécifier. Si nous voulons relancer cette opération pour une autre couche en entrée, il va nous falloir tout recommencer. A moins que ?
                            </p>

                        </div>

                    </div>
                </div>
            </div>








            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/analyse-spatiale/croiser-vect-rast"
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
                        to="/app/plan-detailler/analyse-spatiale/dite-SQL"
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

export default CreMaille;
