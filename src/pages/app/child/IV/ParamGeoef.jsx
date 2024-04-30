import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function ParamGeoef() {
    return (
        <div className="relative paragraphe">
            <div className="my-4" id="top">
                <h1 className="titre-primary">
                    IV.4 Paramétrage du géoréférencement
                </h1>
            </div>

            <ul className="my-4 ml-8">
                <li className="my-2">
                    <a href="#type" className="lien">
                        Type de transformation, ou comment calculer les
                        nouvelles coordonnées des points ?
                    </a>

                    <ul className="ml-8">
                        <li className="my-2">
                            <a href="#def" className="lien">
                                Qu'est-ce qu'une transformation ?
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#transfo" className="lien">
                                Quelques types de transformations
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#choix" className="lien">
                                Choisir une transformation
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="my-2">
                    <a href="#reechant" className="lien">
                        Rééchantillonnage, ou comment calculer les valeurs des
                        pixels ?
                    </a>
                </li>

                <li className="my-2">
                    <a href="#mode" className="lien">
                        Mode de compression utilisé pour la création de la
                        nouvelle image
                    </a>
                </li>

                <li className="my-2">
                    <a href="#raster" className="lien">
                        Raster en sortie et SCR
                    </a>
                    <ul className="ml-8">
                        <li className="my-2">
                            <a href="#sortie" className="lien">
                                Raster de sortie
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#cible" className="lien">
                                SCR cible
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="my-2">
                    <a href="#autre" className="lien">
                        Les autres paramètres
                    </a>
                    <ul className="ml-8">
                        <li className="my-2">
                            <a href="#enreg" className="lien">
                                Enregistrer les points de contrôle
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#transp" className="lien">
                                Transparence
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#reso" className="lien">
                                Définir la résolution de la cible
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#carte" className="lien">
                                Carte et rapport PDF
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#charger" className="lien">
                                Charger directement le raster dans QGIS
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="my-2">
                    <a href="#fin" className="lien">
                        Une fois tous les paramètres choisis...
                    </a>
                </li>
            </ul>

            <p className="my-4">
                Avant de pouvoir procéder au géoréférencement proprement dit, il
                va nous falloir définir plusieurs paramètres.
            </p>

            <div className="bg-style-g my-4 px-4 py-4">
                <p className="my-4">
                    Ces paramètres sont accessibles dans le menu{" "}
                    <span className="lien">
                        Paramètres → Paramètres de transformation
                    </span>{" "}
                    ou bien en cliquant sur l'icône correspondante.
                </p>

                <div className="my-4 bg-img">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/04_04_parametrage.html#thumb"
                        alt="parametrage"
                    />
                </div>

                <div className="my-4 bg-img">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_4_parametres_fenetre.jpg"
                        alt="fenetre_params"
                    />
                </div>
            </div>

            <p className="my-4">
                Nous allons passer en revue ces différents paramètres.
            </p>

            <div className="mt-20">
                <div className="bg-style-b mb-8" id="type">
                    <h5 className="sous-titre">
                        Type de transformation, ou comment calculer les
                        nouvelles coordonnées des points ?
                    </h5>
                </div>

                <div className="my-8" id="def">
                    <h6 className="sous-titre-italic my-4">
                        Qu'est-ce qu'une transformation ?
                    </h6>

                    <p className="my-4">
                        Lors du calage, l'image subit une transformation, afin
                        de faire coïncider au maximum les points de départ avec
                        les coordonnées spécifiées par l'utilisateur. Une
                        transformation est en fait une formule mathématique
                        transformant les coordonnées de départ vers les
                        coordonnées voulues.
                    </p>
                    <p className="my-4">
                        Il existe divers types de transformations, adaptées à
                        des usages différents. Chaque transformation, si on
                        l'utilise avec un nombre de points de calage supérieur à
                        son minimum, renverra une erreur correspondant à la
                        différence entre les coordonnées "idéales" voulues par
                        l'utilisateur et les coordonnées effectivement calculées
                        lors de la transformation (erreur résiduelle
                        <span className="font-bold">residual[pixels]</span> de
                        la table des points de contrôle, voir plus haut).
                    </p>
                </div>

                <div className="my-8" id="transfo">
                    <h6 className="sous-titre-italic my-4">
                        Quelques types de transformations
                    </h6>

                    <p className="my-4">
                        QGIS permet les transformations suivantes :
                    </p>

                    <ul className="my-4 ml-8">
                        <li className="ml-4 my-2">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span>linéaire</span> (2 points minimum) : type le
                            plus simple, ne déforme pas le raster. Cette
                            transformation est rarement suffisante pour des
                            images scannées.
                        </li>
                        <li className="ml-4 my-2">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span>Helmert</span> (2 points minimum) : cas
                            particulier de transformation polynomiale d'ordre 1.
                        </li>
                        <li className="ml-4 my-2">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span>transformation polynomiale d'ordre 1</span>,
                            ou transformation affine (3 points minimum) : elle
                            préserve la colinéarité (3 points alignés le
                            resteront) et permet seulement changement d'échelle,
                            translation et rotation.
                        </li>
                        <li className="ml-4 my-2">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span>transformation polynomiale d'ordre 2</span> (6
                            points minimum) : permet une distorsion du raster.
                        </li>
                        <li className="ml-4 my-2">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span>transformation polynomiale d'ordre 3</span>{" "}
                            (10 points minimum) : le degré de distorsion
                            possible est plus important que pour une
                            transformation d'ordre 2.
                        </li>
                        <li className="ml-4 my-2">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span>Thin Plate Spline (TPS)</span> (1 point
                            minimum) : méthode récente, permettant de prendre en
                            compte des déformations locales. Cette
                            transformation est utile lorsqu'on dispose
                            d'originaux de très mauvaise qualité.
                        </li>
                        <li className="ml-4 my-2">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span>projective</span> (4 points minimum) : une des
                            transformations les plus complexes, qui ne conserve
                            pas le parallélisme. Un carré sera transformé en
                            quadrilatère.
                        </li>
                    </ul>
                </div>

                <div className="my-8" id="choix">
                    <h6 className="sous-titre-italic my-4">
                        Choisir une transformation
                    </h6>

                    <p className="my-4">
                        Quelques éléments vous ont été donnés dans la
                        description des types de transformation pouvant vous
                        aider à choisir l'une ou l'autre transformation. En
                        pratique, le choix est souvent difficile et requiert de
                        tester plusieurs transformations et de les comparer si
                        l'on recherche une bonne précision.
                    </p>

                    <p className="my-4">
                        Ici, nous nous bornerons à choisir une transformation
                        simple et rapide.
                    </p>

                    <div className="bg-style-g px-4 py-4 my-4">
                        <p className="my-4">
                            Sélectionnez la transformation{" "}
                            <span className="font-bold">polynomiale 1</span>{" "}
                            dans la liste déroulante de la fenêtre de
                            paramétrage.
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_4_type_transfo.jpg"
                                alt="type_transfo"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b mb-8" id="reechant">
                    <h5 className="sous-titre">
                        Rééchantillonnage, ou comment calculer les valeurs des
                        pixels ?
                    </h5>
                </div>

                <p className="my-4">
                    Si on utilise une transformation qui déforme le raster
                    d'origine (transformation polynomiale d'ordre supérieur à 1,
                    ou transformation de type Spline par exemple), la valeur
                    (couleur) de chaque pixel du nouveau raster sera déterminée
                    par un calcul en se basant sur le raster original.
                </p>

                <p className="my-4">
                    Cette valeur sera différente selon la méthode de
                    rééchantillonnage choisie. QGIS, comme d'autres logiciels
                    SIG, propose trois méthodes de rééchantillonnage :
                </p>

                <div className="bg-img my-4">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_4_resampling.svg"
                        alt="resampling"
                    />
                </div>

                <ul className="my-4 ml-8">
                    <li className="my-2 ml-4">
                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                        <span className="font-bold">Plus proche voisin :</span>{" "}
                        le nouveau pixel prend la valeur du pixel de l'ancien
                        raster le plus proche. Cette méthode est la plus rapide,
                        et est utilisée principalement pour des données
                        catégorisées (occupation du sol par exemple) puisqu'elle
                        ne crée pas de nouvelles valeurs.
                    </li>
                    <li className="my-2 ml-4">
                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                        <span className="font-bold">Linéaire :</span> la valeur
                        du nouveau pixel est déterminée à partir des valeurs des
                        4 pixels les plus proches. Cette méthode est utilisée
                        pour des données continues et permet un lissage du
                        raster.
                    </li>
                    <li className="my-2 ml-4">
                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                        <span className="font-bold">Cubique :</span> la valeur
                        du nouveau pixel est déterminée à partir des valeurs des
                        16 pixels les plus proches. Ceci provoque moins de
                        distorsion géométrique de l'image mais nécessite un
                        temps de calcul relativement long. Par ailleurs, il y a
                        plus de possibilités d'obtenir avec cette méthode de
                        nouvelles valeurs de pixel par rapport aux valeurs de
                        départ.
                    </li>
                </ul>

                <p className="img-titre my-4">
                    Il est aussi possible de choisir les méthodes{" "}
                    <span className="font-bold">Cubic Spline</span> et{" "}
                    <span className="font-bold">Lanczos</span>, mais au-delà du
                    fait que ce sont des méthodes plus complexes que les
                    précédentes, je ne saurais pas les expliquer et encore moins
                    leurs avantages et inconvénients ! A vous de tester...
                </p>

                <p className="my-4">
                    Le choix d'une méthode de rééchantillonnage a surtout une
                    influence dans le cas où la taille des pixels est importante
                    par rapport à la taille des objets qui seront étudiés sur
                    l'image, par exemple une photo aérienne où chaque maison est
                    constituée de seulement quelques pixels.
                </p>
                <p className="my-4">
                    Dans notre cas (carte scannée avec une bonne résolution), le
                    choix du type de rééchantillonnage influencera peu le
                    résultat.
                </p>

                <div className="bg-style-g my-4 px-4 py-4">
                    <p className="my-4">
                        Ici, nous allons donc choisir la méthode la plus simple
                        et la plus rapide :{" "}
                        <span className="font-bold">plus proche voisin</span>.
                    </p>
                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_4_reechantillonnage.jpg"
                            alt="reechantillonage"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b mb-8" id="mode">
                    <h5 className="sous-titre">
                        Mode de compression utilisé pour la création de la
                        nouvelle image
                    </h5>
                </div>

                <p className="my-4">
                    La compression permet d'obtenir un raster moins volumineux,
                    mais peut provoquer une perte de qualité. Une image
                    compressée peut par ailleurs être illisible par certains
                    logiciels.
                </p>
                <p className="my-4">QGIS propose les méthodes suivantes :</p>

                <ul className="my-4 ml-8">
                    <li className="my-2 ml-4">
                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                        <span className="font-bold">Aucun :</span> pas de
                        compression
                    </li>
                    <li className="my-2 ml-4">
                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                        <span className="font-bold">Aucun :</span> utilisé pour
                        les images au format GIF et TIF. Assez largement
                        utilisé, permet une compression jusqu'au 1:10
                    </li>
                    <li className="my-2 ml-4">
                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                        <span className="font-bold">PACKBITS :</span> offre une
                        compression moindre que la méthode LZW, mais ce format
                        est plus courant
                    </li>
                    <li className="my-2 ml-4">
                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                        <span className="font-bold">DEFLATE :</span> similaire à
                        LZW, mais principalement prise en charge par les
                        logiciels Adobe
                    </li>
                </ul>

                <div className="bg-style-g my-4 px-4 py-4">
                    <p className="my-4">
                        Notre image de base étant peu volumineuse, nous allons
                        choisir le type <span className="font-bold">Aucun</span>
                        .
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_4_compression.jpg"
                            alt="compression"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b mb-8" id="raster">
                    <h5 className="sous-titre">Raster en sortie et SCR</h5>
                </div>

                <div className="my-8" id="sortie">
                    <h6 className="sous-titre-italic my-4">Raster de sortie</h6>
                    <div className="bg-style-g my-4 px-4 py-4">
                        <p className="my-4">
                            Spécifiez ici le nom et l'emplacement de l'image
                            géoréférencée qui sera créée, en cliquant sur
                            l'icône à droite de la ligne{" "}
                            <span className="font-bold">Raster de sortie</span>.
                        </p>
                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_4_raster_sortie.jpg"
                                alt="raste_sortie"
                            />
                        </div>
                        <p className="my-4">
                            Choisissez à quel endroit vous souhaitez créer cette
                            couche, et donnez-lui un nom, par exemple
                            <span className="font-bold">
                                Oahu_Hawaiian_Islands_1906_pol1_wgs84.tif.
                            </span>
                            .
                        </p>
                    </div>
                </div>

                <div className="my-8" id="cible">
                    <h6 className="sous-titre-italic my-4">SCR cible</h6>
                    <p className="my-4">
                        Comme décidé en partie{" "}
                        <span className="lien">précédemment</span>, nous allons
                        partir du principe que les coordonnées de cette carte
                        sont exprimées dans un système proche du WGS84.
                    </p>
                    <div className="bg-style-g my-4 px-4 py-4">
                        <p className="my-4">
                            Cliquez sur l'icône à droite de la ligne{" "}
                            <span className="font-bold">SCR cible</span>, ou
                            bien utilisez la liste déroulante pour choisir
                            directement le SCR.
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_4_choisir_scr.jpg"
                                alt="choisir_src"
                            />
                        </div>

                        <p className="my-4">
                            Choisissez le SCR{" "}
                            <span className="font-bold">
                                WGS 84, code EPSG 4326
                            </span>
                            , ou , en vous aidant éventuellement de la partie
                            filtre.
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_4_choix_scr_fenetre.jpg"
                                alt="choix_scr_fenetre"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b mb-8" id="autre">
                    <h5 className="sous-titre">Les autres paramètres</h5>
                </div>

                <div className="my-8" id="enreg">
                    <h6 className="sous-titre-italic my-4">
                        Enregistrer les points de contrôle
                    </h6>
                    <p className="my-4">
                        Si vous n'avez pas déjà enregistré les points de
                        contrôle, ça peut être une bonne idée de cocher cette
                        case afin de sauvegarder votre travail, et de garder
                        trace des points utilisés, pour tester ensuite avec une
                        autre transformation par exemple.
                    </p>
                </div>

                <div className="my-8" id="transp">
                    <h6 className="sous-titre-italic my-4">Transparence</h6>
                    <p className="my-4">
                        Employer 0 pour la transparence : cette option est utile
                        principalement pour les photographies aériennes ou
                        satellites et permet de ne pas visualiser les pixels
                        noirs (bords de l'image), ce qui serait gênant dans
                        notre cas.
                    </p>

                    <div className="bg-style-g my-4 px-4 py-4">
                        <p className="my-4">Laissez cette case décochée.</p>
                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_4_transparence.jpg"
                                alt="transparence"
                            />
                        </div>
                    </div>
                </div>

                <div className="my-8" id="reso">
                    <h6 className="sous-titre-italic my-4">
                        Définir la résolution de la cible
                    </h6>
                    <div className="bg-style-g my-4 px-4 py-4">
                        <p className="my-4">
                            Laisser cette case décochée pour que l'image créée
                            ait la même résolution que l'image de départ.
                        </p>
                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_4_resolution.jpg"
                                alt="resolution"
                            />
                        </div>
                    </div>
                </div>

                <div className="my-8" id="carte">
                    <h6 className="sous-titre-italic my-4">
                        Carte et rapport PDF
                    </h6>
                    <p className="my-4">
                        La carte PDF permettra de visualiser le décalage qu'aura
                        subi chaque point de contrôle. Le rapport PDF comportera
                        notamment les coordonnées et erreurs pour chaque point.
                    </p>
                    <div className="bg-style-g my-4 px-4 py-4">
                        <p className="my-4">
                            Cliquez sur les icônes à droite des lignes carte PDF
                            et rapport PDF pour spécifier un nom (à votre
                            convenance) et l'emplacement (par exemple dans le
                            même dossier que l'image de départ) pour la carte et
                            le rapport qui seront créés.
                        </p>
                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_4_carte_rapport_icone.jpg"
                                alt="carte_rapport_icon"
                            />
                        </div>
                    </div>
                </div>

                <div className="my-8" id="charger">
                    <h6 className="sous-titre-italic my-4">
                        Charger directement le raster dans QGIS
                    </h6>

                    <div className="bg-style-g my-4 px-4 py-4">
                        <p className="my-4">
                            Charger dans QGIS lorsque terminé : cocher cette
                            case pour que le nouveau raster soit chargé
                            automatiquement dans QGIS une fois le
                            géoréférencement effectué.
                        </p>
                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_4_charger_dans_qgis.jpg"
                                alt="charger_dans_qgis"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b mb-8" id="fin">
                    <h5 className="sous-titre">Les autres paramètres</h5>
                </div>

                <p className="my-4">
                    ...Cliquez sur OK : les paramètres sont sauvegardés... Mais
                    rien ne semble se passer. Rendez-vous dans la partie
                    suivante pour l'étape finale !
                </p>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/georeferencement/avec-caroyage"
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
                        to="/app/plan-detailler/georeferencement/lancer-geo"
                    >
                        <span className="hidden lg:block">Suivant</span>{" "}
                        <ArrowRightOutlined sx={{ fontSize: 30 }} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default ParamGeoef;
