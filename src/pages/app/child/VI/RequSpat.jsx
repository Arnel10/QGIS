import {
    ArrowDropDown,
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

import tableau from "/img/6_2_operateur.png";

function RequSpat() {
    return (
        <div className="paragraphe relative">
            <div id="top" className="my-4">
                <h1 className="titre-primary">
                    VI.2 Sélectionner des éléments en fonction de leur position
                    par rapport à d'autres : requêtes spatiales
                </h1>
            </div>

            <ul className="my-8 ml-4">
                <li className="my-4 ml-8">
                    <a href="#req_spat" className="lien">
                        Faire une requête spatiale simple
                    </a>
                </li>

                <li className="my-4 ml-8">
                    <a href="#operateurs" className="lien">
                        Les opérateurs
                    </a>
                </li>

                <li className="my-4 ml-8">
                    <a href="#qlq_exp" className="lien">
                        Quelques exemples
                    </a>
                </li>
            </ul>

            <p className="mt-10">
                Nous venons de voir comment sélectionner des éléments en
                fonction des données de la table attributaire ; nous allons voir
                ici comment sélectionner des éléments en fonction de leur
                position par rapport aux éléments d'une autre couche.
            </p>

            <p className="my-4">
                Contrairement aux requêtes attributaires, les requêtes spatiales
                mettent donc le plus souvent deux couches en jeu : une couche
                dans laquelle sera faite la sélection, et une couche de
                référence.
            </p>

            <p className="my-4">
                On peut par exemple, à l'aide d'une couche de points et d'une
                couche de polygones, sélectionner tous les points situés dans
                les polygones.
            </p>

            <div className="mt-20">
                <div className="bg-style-b my-4" id="req_spat">
                    <h5 className="sous-titre">
                        Faire une requête spatiale simple
                    </h5>
                </div>

                <div className="bg-style-g my-4 px-4 py-4">
                    <p className="my-4">
                        Ouvrez un nouveau projet QGIS et ajoutez-y la couche
                        <span className="lien">communes_Bretagne</span>.
                    </p>

                    <p className="my-4">
                        En vous connectant au{" "}
                        <span className="lien">flux WFS</span>
                        <span className="font-bold">
                            https://geobretagne.fr/geoserver/dreal_b/wfs
                        </span>
                        , ajoutez également au projet la couche{" "}
                        <span className="font-bold lien">
                            Eoliennes implantations en Bretagne
                        </span>
                        .
                    </p>

                    <p className="my-4 italic text-sm">
                        Au cas où la connexion au flux échouerait, cette couche
                        est également disponible dans le dossier{" "}
                        <span className="lien text-sm">
                            TutoQGIS_06_Requetes
                        </span>
                        .
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_2_eoliennes_bretagne.jpg"
                            alt="eoliennes_bretagne"
                        />
                    </div>
                </div>

                <p className="my-4">
                    Le but va être ici de sélectionner toutes les communes de
                    Bretagne sur lesquelles sont implantées une ou plusieurs
                    éoliennes.
                </p>

                <p className="my-4 font-bold">
                    Les données provenant d'un flux, il est possible que vos
                    requêtes donnent des résultats légèrement différents de ceux
                    présentés ici, si le flux a été mis à jour !
                </p>

                <div className="bg-style-g px-4 py-4 my-4">
                    <p className="my-4">
                        Si la boîte à outils de traitements n'est pas visible,
                        activez-la en vous rendant dans le{" "}
                        <span className="font-bold">
                            menu Traitement → Boîte à outils
                        </span>
                        .
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_2_select_localisation_emplacement.jpg"
                            alt="select_localisation_emplacement"
                        />
                    </div>

                    <p className="my-4">
                        Dans la rubrique{" "}
                        <span className="font-bold">
                            Sélection dans un vecteur
                        </span>
                        , double-cliquez sur l'outil{" "}
                        <span className="font-bold">
                            Sélection par localisation
                        </span>{" "}
                        :
                    </p>

                    <div className="my-4 bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_2_select_localisation_fenetre.jpg"
                            alt="select_localisation_fenetre"
                        />
                    </div>

                    <ul className="my-4 ml-8">
                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">
                                Sélectionnez les entités depuis :
                            </span>{" "}
                            il s'agit de la couche dans laquelle sera faite la
                            sélection, sélectionnez la couche de communes
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">Où les entités :</span>{" "}
                            différents opérateurs sont disponibles. Vous pouvez
                            choisir{" "}
                            <span className="font-bold">intersecte</span>, ou
                            bien <span className="font-bold">contient</span>,
                            pour le même résultat dans ce cas
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">
                                En comparant les entités de :
                            </span>{" "}
                            cette formulation obscure vous invite à choisir la
                            couche par rapport à laquelle vous souhaitez
                            sélectionner des entités, ici la{" "}
                            <span className="font-bold">
                                couche d'éoliennes
                            </span>{" "}
                            puisque nous voulons sélectionner les communes
                            contenant des éoliennes
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Vérifiez
                            que{" "}
                            <span className="font-bold">
                                Créer une nouvelle sélection
                            </span>{" "}
                            soit bien l'option choisie, afin de ne pas partir
                            d'une sélection existante
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />
                            Cliquez sur
                            <span className="font-bold">Exécuter</span>, vous
                            pouvez ensuite fermer la fenêtre.
                        </li>
                    </ul>

                    <p className="my-4">
                        Vous devriez obtenir 256 communes sélectionnées (mais ce
                        nombre peut varier légèrement si vous chargez les
                        données via le flux WFS et qu'elles ont été mises à jour
                        depuis la rédaction de ce tutoriel) :
                    </p>

                    <div className="my-4 bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_2_select_localisation_res.jpg"
                            alt="select_localisation_res"
                        />
                    </div>

                    <p className="my-4">
                        Vous pouvez voir le nombre d'entités sélectionnées dans
                        la barre tout en bas de la fenêtre de QGIS :
                    </p>

                    <div className="my-4 bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_2_barre_nb_entites_select.jpg"
                            alt="barre_nb_entites_select"
                        />
                    </div>

                    <p className="my-4">
                        ou bien en haut de la table attributaire des communes :
                    </p>

                    <div className="my-4 bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_2_table_nb_entites_select.jpg"
                            alt="table_nb_entites_select"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b my-4" id="operateurs">
                    <h5 className="sous-titre">Les opérateurs</h5>
                </div>

                <p className="my-4">
                    Dans l'exemple ci-dessus, nous avons utilisé l'opérateur
                    <span className="font-bold">Intersecte</span>
                    ou <span className="font-bold">Contient</span>. Il en existe
                    d'autres ; les opérateurs possibles varient en fonction de
                    la nature des couches source et de référence (point, ligne,
                    polygone).
                </p>

                <div className="my-4 bg-img">
                    <img src={tableau} alt="ligne" />
                </div>

                <p className="img-titre my-4">
                    Opérateurs de requête spatiale disponibles en fonction des
                    types des couches de de départ et de référence.
                </p>

                <p className="my-4">
                    Par exemple, un point peut se trouver à l'intérieur d'un
                    polygone mais une ligne ne peut se trouver à l'intérieur
                    d'un point.
                </p>

                <p className="my-4">
                    Pour en savoir plus sur les différents opérateurs,
                    rendez-vous <span className="lien">ici</span> ou{" "}
                    <span className="lien">là</span> (en anglais, mais les
                    dessins sont parlants !).
                </p>
            </div>

            <div className="mt-20">
                <div className="bg-style-b my-4" id="qlq_exp">
                    <h5 className="sous-titre">Quelques exemples</h5>
                </div>

                <div className="bg-style-g px-4 py-4 my-4">
                    <p className="my-4">
                        <span className="lien">Connectez-vous au flux WFS</span>
                        <span className="font-bold">
                            http://services.sandre.eaufrance.fr/geo/zonage
                        </span>
                        et ajoutez la couche{" "}
                        <span className="lien font-bold">
                            Cours d'eau de plus de 100km - BD Carthage - France
                            entière
                        </span>
                        .
                    </p>

                    <p className="my-4">
                        Ajoutez également si ça n'est pas déjà fait la couche
                        <span className="lien font-bold">DEPARTEMENT</span>.
                    </p>

                    <p className="my-4">
                        Votre projet doit donc contenir les 4 couche suivantes :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_2_projet.jpg"
                            alt="projet"
                        />
                    </div>

                    <p className="my-4">
                        En utilisant différents opérateurs, pouvez-vous dire
                        ?...
                    </p>

                    <p className="img-titre my-4">
                        Entre deux requêtes, n'oubliez pas de tout
                        désélectionner :
                    </p>

                    <p className="img-titre my-4">
                        Attention, le nombre d'entités sélectionnées peut varier
                        légèrement si vous chargez des données via des flux WFS
                        et que ces données ont été mises à jour depuis la
                        rédaction de ce tutoriel.
                    </p>

                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> Combien de communes bretonnes sont
                            traversées par des cours d'eau de plus de 100 km ?
                        </p>

                        <p className="my-4 italic ml-8">
                            Sélection des communes qui intersectent les cours
                            d'eau :{" "}
                            <span className="font-bold">
                                447 communes sélectionnées
                            </span>
                            .
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_2_communes_inters_coursdeau.jpg"
                                alt="communes_inters_coursdeau"
                            />
                        </div>
                    </div>

                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> Combien de cours d'eau de plus de
                            100 km traversent la Bretagne ?
                        </p>

                        <p className="my-4 italic ml-8">
                            Sélection des cours d'eau qui intersectent les
                            communes (ou les départements bretons préalablement
                            sélectionnés) :
                            <span className="font-bold">
                                68 cours d'eau sélectionnés.
                            </span>
                            .
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_2_coursdeau_inters_communes.jpg"
                                alt="coursdeau_inters_communes"
                            />
                        </div>
                    </div>

                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> Combien de communes ne contiennent
                            pas d'éoliennes ?
                        </p>

                        <p className="my-4 italic ml-8">
                            Sélection des communes disjointes des éoliennes :
                            <span className="font-bold">
                                952 communes sélectionnées
                            </span>
                            .
                        </p>

                        <p className="italic ml-10 my-4">
                            Vous pouvez aussi repartir des communes contenant
                            des éoliennes, et{" "}
                            <span className="font-bold">
                                inverser la sélection
                            </span>{" "}
                            avec le bouton correspondant en haut de la table
                            attributaire des communes.
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_2_communes_disjoint_eoliennes.jpg"
                                alt="communes_disjoint_eoliennes"
                            />
                        </div>
                    </div>

                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> Combien le département du
                            Finistère contient-il d'éoliennes ?
                        </p>

                        <p className="my-4 italic ml-8">
                            Il faut procéder en 2 étapes : 1/ sélectionner « à
                            la main » le département du Finistère 2/ utiliser
                            l'outil de sélection par localisation pour
                            sélectionner les éoliennes à l'intérieur des
                            départements, en cochant la case
                            <span className="font-bold">
                                Entités sélectionnées uniquement.
                            </span>
                            .
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_2_eoliennes_finistere.jpg"
                                alt="eoliennes_finistere"
                            />
                        </div>
                    </div>

                    <p className="my-4">
                        Au final, on trouve{" "}
                        <span className="font-bold">
                            656 éoliennes sélectionnées
                        </span>
                        .
                    </p>
                </div>

                <p className="my-4">
                    Dans le chapitre suivant, nous verrons comment combiner une
                    ou plusieurs requêtes, spatiales ou attributaires !
                </p>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/requetes/requete-attrib"
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
                        to="/app/plan-detailler/requetes/combiner-requete"
                    >
                        <span className="hidden lg:block">Suivant</span>{" "}
                        <ArrowRightOutlined sx={{ fontSize: 30 }} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default RequSpat;
