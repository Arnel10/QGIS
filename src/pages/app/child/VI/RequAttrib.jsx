import {
    ArrowDropDown,
    ArrowDropUp,
    ArrowRightOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function RequAttrib() {
    return (
        <div className="relative paragraphe">
            <div className="my-4" id="top">
                <h1 className="titre-primary">
                    VI.1 Sélectionner des éléments en fonction de leurs données
                    attributaires : requêtes attributaires
                </h1>
            </div>

            <ul className="my-4 ml-8">
                <li className="my-2 ml-4">
                    <a href="#req_simple" className="lien">
                        Faire une requête simple
                    </a>
                </li>
                <li className="my-2 ml-4">
                    <a href="#cre_nouv" className="lien">
                        Créer une nouvelle couche à partir d'une sélection
                    </a>
                </li>
                <li className="my-2 ml-4">
                    <a href="#des_ent" className="lien">
                        Désélectionner des entitésFaire une requête simple
                    </a>
                </li>
                <li className="my-2 ml-4">
                    <a href="#qlq_op" className="lien">
                        Quelques opérateurs
                    </a>
                </li>
                <li className="my-2 ml-4">
                    <a href="#comb_plus_crit" className="lien">
                        Combiner plusieurs critères
                    </a>
                </li>
                <li className="my-2 ml-4">
                    <a href="#qlq_exemple" className="lien">
                        Quelques exemples à tester
                    </a>
                </li>
            </ul>

            <p className="mt-10">
                Nous allons voir ici comment utiliser les données de la table
                attributaire pour sélectionner des éléments d'une couche, par
                exemple comment sélectionner les départements dans le nom
                commence par « A » .
            </p>

            <p className="my-4">
                Beaucoup d'opérateurs sont disponibles pour les requêtes
                attributaires ; nous ne les passerons pas tous en revue mais
                allons simplement utiliser quelques-uns des plus courants.
            </p>

            <p className="my-4">
                Pour une description de tous les opérateurs et fonctions
                possibles : voir{" "}
                <a href="#" className="lien">
                    le manuel de QGIS
                </a>
                .
            </p>

            <div className="mt-20" id="req_simple">
                <div className="bg-style-b">
                    <h5 className="sous-titre">Faire une requête simple</h5>
                </div>

                <div className="bg-style-g py-4 px-4 my-4">
                    <p className="my-4">
                        Ajoutez la couche{" "}
                        <span className="lien font-bold">DEPARTEMENT</span>{" "}
                        située dans le dossier
                        <span className="font-bold">
                            TutoQGIS_06_Requetes/donnees
                        </span>
                        .
                    </p>
                    <p className="my-4">
                        Ouvrez la table attributaire de cette couche
                    </p>
                </div>

                <p className="my-4">
                    Pour sélectionner le département du Nord (59), vous pouvez
                    cliquer sur le numéro de la ligne correspondante ou bien
                    directement sur ce département sur la carte. Vous pouvez
                    aussi utiliser une requête attributaire.
                </p>

                <div className="bg-style-g py-4 px-4 my-4">
                    <p className="my-4">
                        Dans la barre d'outils située en haut de la table
                        attributaire, cliquez sur l'icône{" "}
                        <span className="font-bold">
                            Sélectionner les entités en utilisant une expression
                        </span>
                        .
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_1_BO_icone_selection.jpg"
                            alt="icone_selection"
                        />
                    </div>

                    <p className="my-4">
                        La fenêtre de requête attributaire s'ouvre :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_1_selection_fenetre.jpg"
                            alt="selection_fenetre"
                        />
                    </div>

                    <p className="my-4">
                        Pour faire une requête simple, par exemple pour
                        sélectionner le département du Nord :
                    </p>

                    <ul className="my-4 ml-4">
                        <li className="my-2 ml-8">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Cliquez
                            sur{" "}
                            <span className="font-bold">Champs et valeurs</span>{" "}
                            dans la colonne du milieu : la liste des champs de
                            la table apparaît
                        </li>

                        <li className="my-4 ml-8">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            Double-cliquez sur le champ{" "}
                            <span className="font-bold">NOM_DEP</span> pour le
                            faire apparaître dans la case{" "}
                            <span className="font-bold">Expression</span> à
                            gauche de la fenêtre (notez les guillemets doubles)
                        </li>

                        <li className="my-4 ml-8">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Cliquez
                            sur l'opérateur <span className="font-bold">=</span>
                        </li>

                        <li className="my-4 ml-8">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Cliquez
                            sur le bouton{" "}
                            <span className="font-bold">Tous uniques</span> pour
                            voir dans la case{" "}
                            <span className="font-bold">Valeurs</span> la liste
                            des valeurs uniques du champ sélectionné (ici,
                            NOM_DEP)
                        </li>

                        <li className="my-4 ml-8">
                            <FiberManualRecord sx={{ fontSize: 10 }} />
                            Double-cliquez sur la valeur{" "}
                            <span className="font-bold">'NORD'</span> (notez les
                            guillemets simples)
                        </li>

                        <li className="my-4 ml-8">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> A ce
                            stade, la case{" "}
                            <span className="font-bold">Expression</span> doit
                            contenir :{" "}
                            <span className="font-bold">
                                "NOM_DEP" = 'NORD'
                            </span>
                        </li>

                        <li className="my-4 ml-8">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Cliquez
                            sur le bouton{" "}
                            <span className="font-bold">
                                Sélectionner des entités
                            </span>{" "}
                            en bas de la fenêtre
                        </li>
                    </ul>

                    <p className="img-titre my-4">
                        Il est également possible de taper la requête « à la
                        main » directement dans la case Expression. Attention
                        dans ce cas à bien respecter la syntaxe utilisée par
                        QGIS : par exemple, les noms de champs sont entourés de
                        guillemets doubles et les chaînes de caractères de
                        guillemets simples.
                    </p>

                    <p className="my-4">
                        La fenêtre de requête attributaire ne se ferme pas
                        automatiquement ; vous pouvez ou la fermer en cliquant
                        sur le bouton <span className="font-bold">Fermer</span>
                        ou bien simplement la déplacer pour vérifier sur la
                        carte le résultat de votre sélection.
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_1_selection_nord.jpg"
                            alt="selection_nord"
                        />
                    </div>

                    <p className="my-4">
                        Vous pouvez lire le nombre d'éléments sélectionnés en
                        haut de la table attributaire, ou encore en bas à gauche
                        de la fenêtre de QGIS, dans la barre d'état :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_1_nb_selectionnes.jpg"
                            alt="nb_selectionne"
                        />
                    </div>
                </div>

                <p className="my-4">
                    Vous venez d'effectuer une requête attributaire simple. Il
                    est important de comprendre qu'une requête ne modifie pas
                    les données, elle les sélectionne simplement.
                </p>

                <p className="my-4">
                    Bien sûr, il est plus intéressant d'utiliser les requêtes
                    pour sélectionner plusieurs éléments en même temps!
                </p>

                <p className="img-titre">
                    Pourquoi pour cette requête l'aperçu du résultat (en bas à
                    gauche de la fenêtre de sélection) est-il égal à 0 ? Cette
                    expression est traitée pour chaque ligne de la table et est
                    évaluée par vrai ou faux, 0 ou 1 pour l'ordinateur. L'aperçu
                    donne le 1er résultat trouvé, ici 0 pour le département de
                    l'Ain.
                </p>
            </div>

            <div className="mt-20" id="cre_nouv">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Créer une nouvelle couche à partir d'une sélection
                    </h5>
                </div>

                <p className="my-4">
                    Il est possible de créer une nouvelle couche vecteur à
                    partir d'une sélection.
                </p>

                <div className="bg-style-g px-4 py-4">
                    <p className="my-4">
                        Votre département du Nord étant toujours sélectionné,
                        faites un clic droit sur la couche de départements →
                        <span className="font-bold">
                            Exporter → Sauvegarder les entités sélectionnées
                            sous...
                        </span>
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_1_sauv_selection_fenetre.jpg"
                            alt="sauv_selection_fenetre"
                        />
                    </div>

                    <ul className="my-4">
                        <li className="my-4 ml-8">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            Choisissez le format{" "}
                            <span className="font-bold">GeoPackage</span>
                        </li>

                        <li className="my-4 ml-8">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Cliquez
                            sur ... pour choisir à quel endroit sera sauvegardée
                            la nouvelle couche, et sous quel nom,{" "}
                            <span className="lien font-bold">dept59</span> par
                            exemple
                        </li>

                        <li className="my-4 ml-8">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Vérifiez
                            que la case{" "}
                            <span className="font-bold">
                                N'enregistrer que les entités sélectionnées
                            </span>
                            soit cochée
                        </li>

                        <li className="my-4 ml-8">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> et
                            cliquez sur <span className="font-bold">OK</span>
                        </li>
                    </ul>

                    <p className="my-4">
                        La nouvelle couche est automatiquement ajoutée à QGIS.
                        Elle ne contient qu'un seul département, celui du Nord.
                    </p>
                </div>
            </div>

            <div className="mt-20" id="des_ent">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Désélectionner des entitésFaire une requête simple
                    </h5>
                </div>

                <p className="my-4">
                    Par défaut, une nouvelle requête attributaire « part de zéro
                    », en ne tenant pas compte des entités déjà sélectionnées
                    (pour au contraire tenir compte d'une requête précédente,
                    cf.{" "}
                    <span className="lien">
                        partie VI.3.1 : Combiner deux requêtes attributaires
                    </span>
                    ).
                </p>

                <p className="my-4">
                    Néanmoins, pour plus de clarté, il peut être utile de
                    désélectionner des entités.
                </p>

                <div className="my-4 bg-style-g px-4 py-4">
                    <p className="my-4">
                        Pour désélectionner toutes les entités dans toutes les
                        couches : cliquez sur le bouton{" "}
                        <span className="font-bold">
                            Désélectionner toutes les entités
                        </span>{" "}
                        de la barre d'outils Sélection.
                    </p>

                    <p className="my-4">
                        Pour désélectionner les entités d'une seule couche,
                        cliquez sur la flèche à côté du même bouton, pour
                        Désélectionner les entités de la couche courante, ou
                        choisir l'option <span className="font-bold"></span>
                        bien cliquez sur le bouton{" "}
                        <span className="font-bold">
                            Désélectionner toutes les entités de la couche
                        </span>{" "}
                        en haut de la table attributaire de celle-ci.
                    </p>
                </div>
            </div>

            <div className="mt-20" id="qlq_op">
                <div className="bg-style-b">
                    <h5 className="sous-titre">Quelques opérateurs</h5>
                </div>

                <p className="my-4">
                    Dans l'exemple ci-dessus, nous avons utilisé l'opérateur =
                    pour notre requête. Il en existe d'autre, comme par exemple
                    les opérateurs mathématiques inférieur à et supérieur à,
                    multiplier, diviser...
                </p>

                <div className="bg-style-g my-4 px-4 py-4">
                    <p className="my-4">
                        Ajoutez la couche{" "}
                        <span className="lien font-bold">
                            communes_Bretagne{" "}
                        </span>
                        située dans le dossier{" "}
                        <span className="font-bold">
                            TutoQGIS_06_Requetes/donnees
                        </span>
                        .
                    </p>

                    <p className="my-4">
                        Fermez la table attributaire de la couche de
                        départements et ouvrez celle de la couche de communes.
                        Cette table comporte une colonne{" "}
                        <span className="font-bold">POPULATION</span> avec la
                        population de chaque commune en nombre d'habitants.
                    </p>

                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> Pouvez-vous dire rapidement quelle
                            est la commune la plus peuplée ?
                        </p>

                        <p className="my-4 italic">
                            En cliquant une première fois sur le nom de colonne
                            POPULATION pour classer la population par ordre
                            croissant, puis une deuxième fois pour la classer
                            par ordre décroissant, on peut lire que la commune
                            de Rennes est la plus peuplée avec 216 268
                            habitants.
                        </p>
                    </div>

                    <p className="my-4">
                        Nous allons faire une requête pour sélectionner les
                        communes de + de 10 000 habitants. Ouvrez la fenêtre de
                        requête pour la couche de communes :
                    </p>

                    <div className="my-4 bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_1_popsup10000.jpg"
                            alt="popsup10000"
                        />
                    </div>

                    <ul className="my-4">
                        <li className="my-4 ml-8">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Cliquez
                            sur{" "}
                            <span className="font-bold">Champs et valeurs</span>{" "}
                            pour voir la liste des champs, puis double-cliquez
                            sur le champ{" "}
                            <span className="font-bold">POPULATION</span>
                        </li>
                        <li className="my-4 ml-8">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Dans la
                            case <span className="font-bold">Expression</span>,
                            tapez {">"} <span className="font-size">10000</span>
                        </li>
                    </ul>

                    <p className="my-4">
                        Il est également possible d'aller chercher l'opérateur{" "}
                        {">"}
                        dans la liste des opérateurs, dans la colonne de gauche.
                        Il faut ensuite taper la valeur 10000 à la main.
                    </p>

                    <p className="my-4">
                        Une fois votre requête tapée :{" "}
                        <span className="font-bold">
                            "POPULATION" {">"} 10000
                        </span>
                        , cliquez sur le bouton{" "}
                        <span className="font-bold">
                            Sélectionner des entités
                        </span>{" "}
                        pour voir le résultat :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_1_popsup10000_res.jpg"
                            alt="popsup10000_res"
                        />
                    </div>
                </div>

                <p className="my-4">
                    Les opérateurs qu'on voit en haut à gauche de la fenêtre de
                    sélection (=, +, - ...) ne représentent qu'une petite partie
                    des opérateurs disponibles ; vous pouvez tous les retrouver
                    dans la catégorie{" "}
                    <span className="font-bold">Opérateurs</span> de la colonne
                    du milieu. En cliquant sur un opérateur, vous pouvez lire
                    l'aide dans la partie de droite :
                </p>

                <div className="bg-img my-4">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_1_liste_operateurs.jpg"
                        alt="liste_operateurs"
                    />
                </div>

                <p className="my-4">
                    Parmi ces opérateurs se trouvent par exemple{" "}
                    <span className="font-bold">LIKE</span> et{" "}
                    <span className="font-bold">ILIKE</span>. L'opérateur{" "}
                    <span className="font-bold">LIKE</span> permet de comparer
                    une chaîne de caractère à une autre chaîne qui peut utiliser
                    le caractère joker <span className="font-bold">%</span>.
                </p>

                <p className="my-4">
                    Ce caractère peut remplacer un ou plusieurs caractères : par
                    exemple, 'A%' peut correspondre à Ardèche, Allier...
                </p>

                <p className="my-4">
                    Sélectionnons les communes dont le nom commence par 'PLOU' !
                </p>

                <div className="bg-style-g px-4 py-4 my-4">
                    <p className="my-4">
                        Ouvrez la fenêtre de sélection pour la couche de
                        communes. Écrivez la requête suivante :{" "}
                        <span className="font-bold">
                            "NOM_COM_M" like 'PLOU%'
                        </span>{" "}
                        (soit en la tapant à la main soit en double-cliquant sur
                        les différents éléments).
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_1_res_plou.jpg"
                            alt="res_plou"
                        />
                    </div>

                    <p className="my-4">
                        Pour lire les noms des communes sélectionnées dans la
                        table attributaire, vous pouvez sélectionner l'option{" "}
                        <span className="font-bold">
                            Ne montrer que les entités sélectionnées
                        </span>{" "}
                        en bas de la table attributaires. N'oubliez pas de
                        revenir à{" "}
                        <span className="font-bold">
                            Montrer toutes les entités
                        </span>{" "}
                        ensuite !
                    </p>
                </div>

                <p className="my-4">
                    Notez que, pour du texte, si le caractère % n'est pas
                    utilisé, les opérateurs <span className="font-bold">=</span>{" "}
                    et <span className="font-bold">LIKE</span> sont équivalents.
                </p>

                <p className="my-4">
                    L'opérateur <span className="font-bold">ILIKE</span> est
                    équivalent à <span className="font-bold">LIKE</span> mais ne
                    tient pas compte de la casse (majuscules ou minuscules).
                </p>

                <p className="my-4">
                    Entre deux requêtes, pour être sûr de repartir à zéro,
                    utiliser l'outil{" "}
                    <span className="font-bold">tout désélectionner</span>.
                </p>
            </div>

            <div className="mt-20" id="comb_plus_crit">
                <div className="bg-style-b">
                    <h5 className="sous-titre">Combiner plusieurs critères</h5>
                </div>

                <p className="my-4">
                    Comment faire s'il l'on veut sélectionner par exemple les
                    communes de + de 10 000 habitants dont le nom commence par
                    'PLOU' ?
                </p>

                <p className="my-4">
                    Il s'agit ici de combiner deux critères. Deux opérateurs
                    permettent cela : <span className="font-bold">AND</span>
                    (et) et <span className="font-bold">OR</span> (ou).
                </p>

                <ul className="my-4">
                    <li className="my-4 ml-8">
                        <FiberManualRecord sx={{ fontSize: 10 }} /> Avec
                        l'opérateur{" "}
                        <span className="font-bold">
                            AND, tous les critères
                        </span>{" "}
                        doivent être remplis
                    </li>

                    <li className="my-4 ml-8">
                        <FiberManualRecord sx={{ fontSize: 10 }} /> Avec
                        l'opérateur <span className="font-bold">OR</span>, il
                        suffit{" "}
                        <span className="font-bold">
                            qu'un seul des critères
                        </span>{" "}
                        soit rempli
                    </li>
                </ul>

                <div className="bg-style-g my-4 px-4 py-4">
                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> Quelle requête utiliser pour
                            sélectionner les communes de plus de 10 000
                            habitants dont le nom commence par PLOU ?
                        </p>
                        <p className="my-4 italic">
                            "NOM_COM_M" like 'PLOU%' and "POPULATION" {">"}{" "}
                            10000 : cette requête sélectionne 3 communes.
                        </p>
                    </div>

                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> Quelle requête utiliser pour
                            sélectionner les communes de Brest et Plouzané ?
                        </p>
                        <p className="my-4 italic">
                            "NOM_COM_M" like 'PLOU%' and "POPULATION" {">"}{" "}
                            10000 : cette requête sélectionne 3
                            communes."NOM_COM_M" LIKE 'BREST' OR "NOM_COM_M"
                            LIKE 'PLOUZANE' : cette requête sélectionne 2
                            communes. L'opérateur OR doit être utilisé car les
                            communes ne peuvent satisfaire qu'un seul des
                            critères à la fois (une commune ne peut s'appeler
                            Brest et Plouzané en même temps).
                        </p>
                        <p className="my-4 italic">
                            Une autre possibilité, moins lourde, consiste à
                            utiliser l'opérateur IN : "NOM_COMM_M" IN ('BREST',
                            'PLOUZANE')
                        </p>
                    </div>
                </div>

                <p className="my-4">
                    Petite astuce : vous pouvez retrouver les dernières requêtes
                    utilisées dans la rubrique Récent, il suffit de
                    double-cliquer sur une requête pour qu'elle apparaisse dans
                    la case Expression :
                </p>

                <div className="bg-img my-4">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_1_requetes_recentes.jpg"
                        alt="requetes_recentes"
                    />
                </div>
            </div>

            <div className="mt-20" id="qlq_exemple">
                <div className="bg-style-b">
                    <h5 className="sous-titre">Quelques exemples à tester</h5>
                </div>

                <p className="my-4">
                    Voici quelques exemples à tester, plusieurs requêtes sont
                    parfois possibles pour un même résultat.
                </p>

                <p className="my-4">Pouvez-vous sélectionner ? ...</p>

                <div className="bg-style-g my-4 px-4 py-4">
                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> La commune de Pouldreuzic ?
                        </p>
                        <p className="my-4 italic">
                            "NOM_COM_M" like 'POULDREUZIC' : une commune
                            sélectionnée
                        </p>
                    </div>

                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> Les communes du département des
                            Côtes d'Armor (22) ?
                        </p>
                        <p className="my-4 italic">
                            "INSEE_DEP" = '22' : 348 communes sélectionnées
                        </p>
                    </div>

                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> Les communes dont le nom contient
                            'SAINT' ?
                        </p>
                        <p className="my-4 italic">
                            "NOM_COM_M" like '%SAINT%' : 189 communes
                            sélectionnées
                        </p>
                    </div>

                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> La commune de Pouldreuzic ?Les
                            communes dont le nom commence par 'PLOU' et se
                            termine par 'EC' ?
                        </p>
                        <p className="my-4 italic">
                            "NOM_COM_M" like 'PLOU%' AND "NOM_COM_M" like '%EC'
                            : 5 communes sélectionnées
                        </p>
                    </div>

                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> Les communes dont la population
                            est comprise entre 10 000 et 50 000 habitants inclus
                            ?
                        </p>
                        <p className="my-4 italic">
                            "POPULATION" {">"}= 10000 AND "POPULATION" ={"<"}{" "}
                            50000 : 32 communes sélectionnées
                        </p>
                    </div>

                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> Les communes du département du
                            Morbihan (56), dont le nom contient 'PLOU' ou 'EC',
                            et dont la population est inférieure ou égale à 10
                            000 habitants ?
                        </p>
                        <p className="my-4 italic">
                            "INSEE_DEP" LIKE '56' AND ( "NOM_COM_M" LIKE
                            '%PLOU%' OR "NOM_COM_M" LIKE '%EC%') AND
                            "POPULATION" ={"<"} 10000 : 12 communes
                            sélectionnées
                        </p>
                    </div>
                </div>

                <p className="my-4">
                    Nous avons vu ici comment sélectionner des entités en
                    fonction de leurs données attributaires. Au chapitre
                    suivant, nous verrons comment sélectionner des entités en
                    fonction de leur position par rapport aux entités d'une
                    autre couche !
                </p>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="fixed bottom-20 z-20 md:right-52 sm:right-12 right-5">
                    <a href="#top" className="btn-lien rounded-full py-4 px-4">
                        <ArrowDropUp />
                    </a>
                </div>

                <div className="py-5 fixed bottom-0 z-20 md:right-52 sm:right-12 right-5">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/requetes/requete-spati"
                    >
                        <span className="hidden lg:block">Suivant</span>{" "}
                        <ArrowRightOutlined sx={{ fontSize: 30 }} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default RequAttrib;
