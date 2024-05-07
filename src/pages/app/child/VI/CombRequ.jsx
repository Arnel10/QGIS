import {
    ArrowDropDown,
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function CombRequ() {
    return (
        <div className="relative paragraphe">
            <div className="my-4" id="top">
                <h1 className="titre-primary">VI.3 Combiner des requêtes</h1>
            </div>

            <ul className="my-10">
                <li className="my-2 ml-8">
                    <a href="#comb_req_attr" className="lien">
                        Combiner deux requêtes attributaires
                    </a>
                </li>

                <li className="my-2 ml-8">
                    <a href="#comb_req_spat" className="lien">
                        Combiner deux requêtes spatiales
                    </a>
                </li>

                <li className="my-2 ml-8">
                    <a href="#comb_req_attr_spat" className="lien">
                        Combiner requêtes spatiales et attributaires
                    </a>
                </li>
            </ul>

            <p className="my-4">
                Comment faire quand on souhaite combiner plusieurs requêtes, par
                exemple sélectionner les communes traversées par un cours d'eau
                et ayant une population de + de 10 000 habitants ?
            </p>

            <div className="mt-20">
                <div className="my-4 bg-style-b" id="comb_req_attr">
                    <h5 className="sous-titre">
                        Combiner deux requêtes attributaires
                    </h5>
                </div>

                <p className="my-4">
                    Pour combiner deux requêtes attributaires, nous avons vu
                    dans la <span className="lien">partie VI.1.5</span> qu'il
                    est possible d'utiliser les opérateurs AND et OR.
                </p>

                <p className="my-4">
                    Il est également possible de faire deux requêtes
                    successives.
                </p>

                <p className="my-4">
                    Nous allons ici sélectionner les communes du Morbihan de +
                    de 10 000 habitants.
                </p>

                <div className="bg-style-g px-4 py-4 my-4">
                    <p className="my-4">
                        Ouvrez un nouveau projet QGIS, ajoutez-y la couche
                        <span className="lien font-bold">
                            communes_Bretagne
                        </span>
                        .
                    </p>

                    <p className="my-4">
                        Ouvrez la table attributaire de cette couche puis la
                        fenêtre de requête attributaire.
                    </p>

                    <p className="my-4">
                        Sélectionnez tout d'abord les communes de + de 10 000
                        habitants au moyen d'une requête attributaire :
                    </p>

                    <p className="my-4">"POPULATION" {">"} 10000</p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_3_sup10000hab.jpg"
                            alt="sup10000hab"
                        />
                    </div>

                    <p className="my-4">
                        Tapez ensuite la requête suivante, pour sélectionner les
                        communes du Morbihan...
                    </p>

                    <p className="my-4">"INSEE_DEP" = '56'</p>

                    <p className="my-4">
                        ...Mais cette fois-ci, au lieu de cliquer sur «
                        Sélectionner des entités », cliquez sur le{" "}
                        <span className="font-bold">
                            petit triangle à droite
                        </span>{" "}
                        et sélectionnez dans la liste{" "}
                        <span className="font-bold">
                            Filtrer la sélection courante
                        </span>{" "}
                        :
                    </p>

                    <div className="my-4 bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_3_selection_liste.jpg"
                            alt="selection_liste"
                        />
                    </div>

                    <p className="my-4">
                        Ainsi, cette deuxième requête s'appliquera uniquement
                        aux communes déjà sélectionnées : les communes du
                        Morbihan seront sélectionnées parmi les communes de + de
                        10 000 habitants.
                    </p>

                    <div className="my-4 bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_3_sup10000hab_morbihan.jpg"
                            alt="sup10000hab_morbihan"
                        />
                    </div>

                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> Pouvez-vous au moyen des mêmes 2
                            requêtes ("POPULATION" {">"} 10000 et "INSEE_DEP" =
                            '56') sélectionner les communes bretonnes de + de 10
                            000 habitants qui ne sont pas dans le département du
                            Morbihan ?
                        </p>
                        <p className="my-4 italic text-sm">
                            Utilisez cette fois pour la deuxième requête le
                            bouton{" "}
                            <span className="font-bold">
                                Supprimer de la sélection actuelle
                            </span>{" "}
                            : les communes du Morbihan seront désélectionnées et
                            il ne restera de sélectionnées que les communes de +
                            de 10 000 des autres départements.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="my-4 bg-style-b" id="comb_req_spat">
                    <h5 className="sous-titre">
                        Combiner deux requêtes spatiales
                    </h5>
                </div>

                <p className="my-4">
                    Comment faire maintenant pour combiner deux requêtes
                    spatiales, par exemple pour sélectionner les communes avec
                    éolienne et cours d'eau ?
                </p>

                <p className="my-4">
                    Attention, le nombre d'entités sélectionnées peut varier
                    légèrement par rapport à ceux indiqués ici si vous chargez
                    des données via des flux WFS et que ces données ont été
                    mises à jour depuis la rédaction de ce tutoriel.
                </p>

                <div className="bg-style-g px-4 py-4 my-4">
                    <p className="my-4">
                        <span className="lien">Connectez-vous au flux WFS</span>
                        <span className="font-bold">
                            http://services.sandre.eaufrance.fr/geo/zonage
                        </span>
                        et ajoutez la couche{" "}
                        <span className="font-bold lien">
                            Cours d'eau de plus de 100km - BD Carthage - France
                            entière
                        </span>
                        .
                    </p>

                    <p className="my-4">
                        Ajoutez également au projet la couche{" "}
                        <span className="font-bold lien">
                            Eoliennes implantations en Bretagne
                        </span>{" "}
                        issue du flux WFS
                        <span className="font-bold">
                            https://geobretagne.fr/geoserver/dreal_b/wfs
                        </span>
                        .
                    </p>

                    <p className="my-4">
                        A ce stade, votre projet contient donc ces 3 couches :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_3_couches_chargees.jpg"
                            alt="couches_chargees"
                        />
                    </div>

                    <p className="my-4">
                        Avec l'
                        <span className="lien">
                            outil de sélection par localisation
                        </span>
                        , sélectionnez tout d'abord les communes avec éoliennes.
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_2_select_localisation_fenetre.jpg"
                            alt="select_localisation_fenetre"
                        />
                    </div>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_3_communes_eoliennes.jpg"
                            alt="communes_eoliennes"
                        />
                    </div>

                    <p className="my-4">
                        A ce stade, 256 communes sont sélectionnées.
                    </p>

                    <p className="my-4">
                        Il ne reste plus ensuite qu'à sélectionner les communes
                        intersectant des cours d'eau{" "}
                        <span className="font-bold">
                            à partir de cette sélection
                        </span>{" "}
                        :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_3_communes_eoliennes_coursdeau_fenetre.jpg"
                            alt="communes_eoliennes_coursdeau_fenetre"
                        />
                    </div>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_3_communes_eoliennes_coursdeau.jpg"
                            alt="communes_eoliennes_coursdeau"
                        />
                    </div>

                    <p className="my-4">
                        Au final, 109 communes contiennent à la fois une
                        éolienne et sont traversées par un cours d'eau de + de
                        100 km.
                    </p>
                </div>

                <p className="my-4">
                    Le résultat serait le même en procédant à l'inverse,
                    c'est-à-dire en sélectionnant d'abord les communes
                    traversées par un cours d'eau puis à partir de cette
                    sélection les communes contenant une éolienne.
                </p>
            </div>

            <div className="mt-20">
                <div className="my-4 bg-style-b" id="comb_req_attr_spat">
                    <h5 className="sous-titre">
                        Combiner requêtes spatiales et attributaires
                    </h5>
                </div>

                <p className="my-4">
                    Le principe est le même que précédemment. Sélectionnons par
                    exemple les communes de + de 10 000 habitants avec éolienne.
                </p>

                <div className="bg-style-g px-4 py-4 my-4">
                    <p className="my-4">
                        Commencez par sélectionner au moyen d'une requête
                        attributaire les communes de + de 10 000 habitants :
                        <span className="font-bold">
                            "POPULATION" {">"} 10000
                        </span>
                        .
                    </p>

                    <p className="my-4">
                        <span className="font-bold">37 communes</span> sont
                        sélectionnées.
                    </p>

                    <p className="my-4">
                        Ensuite, au moyen d'une requête spatiale, sélectionnez
                        parmi ces communes celles avec une éolienne, avec
                        l'option{" "}
                        <span className="font-bold">
                            Sélection au sein de la sélection courante
                        </span>{" "}
                        :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_3_communes_sup10000_eoliennes_fenetre.jpg"
                            alt="communes_sup10000_eoliennes_fenetre"
                        />
                    </div>

                    <p className="my-4">
                        Au final, 2 communes restent sélectionnées :
                        Lamballe-Armor et Pacé.
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_3_communes_sup10000_eoliennes.jpg"
                            alt="communes_sup10000_eoliennes"
                        />
                    </div>

                    <p className="italic text-sm my-4">
                        Pour connaître le nom des communes sélectionnées, ouvrez
                        la table attributaire de la couche de communes et
                        choisir{" "}
                        <span className="font-bold">
                            Ne montrer que les entités sélectionnées
                        </span>{" "}
                        dans la liste déroulante en bas à gauche de la table.
                    </p>
                </div>

                <p className="my-4">
                    Il est aussi possible de procéder à l'inverse : sélectionner
                    d'abord les communes avec éoliennes puis parmi celles-ci
                    celles de + de 10 000 habitants.
                </p>

                <p className="my-4">
                    Dans le chapitre suivant, nous verrons comment aller encore
                    plus loin en écrivant directement des requêtes en langage
                    SQL !
                </p>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/requetes/requete-spati"
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
                        to="/app/plan-detailler/requetes/requete-sql"
                    >
                        <span className="hidden lg:block">Suivant</span>{" "}
                        <ArrowRightOutlined sx={{ fontSize: 30 }} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default CombRequ;
