import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function RequSQL() {
    return (
        <div className="relative paragraphe">
            <div className="my-4">
                <h1 className="titre-primary" id="top">
                    VI.4 Pour aller plus loin : requêtes SQL
                </h1>
            </div>

            <ul className="my-10">
                <li className="my-4 ml-8">
                    <a href="#util_SQL" className="lien">
                        Utiliser du SQL sans passer par un logiciel de bases de
                        données : le concept de couche virtuelle
                    </a>
                </li>

                <li className="my-4 ml-8">
                    <a href="#requ_simple" className="lien">
                        Effectuer une requête simple avec le gestionnaire de
                        bases de données
                    </a>

                    <ul className="my-2">
                        <li className="my-2 ml-8">
                            <a href="#gestion_bd" className="lien">
                                Activer le gestionnaire de bases de données
                            </a>
                        </li>

                        <li className="my-2 ml-8">
                            <a href="#ecrire_requ" className="lien">
                                Ecrire une requête
                            </a>
                        </li>

                        <li className="my-2 ml-8">
                            <a href="#visualiser" className="lien">
                                Visualiser le résultat d'une requête
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="my-4 ml-8">
                    <a href="#pourquoi" className="lien">
                        Pourquoi utiliser du SQL plutôt qu'une requête
                        attributaire ou spatiale ?
                    </a>

                    <ul className="my-2">
                        <li className="my-2 ml-8">
                            <a href="#col" className="lien">
                                Choisir les colonnes
                            </a>
                        </li>

                        <li className="my-2 ml-8">
                            <a href="#plus_tab" className="lien">
                                Croiser plusieurs tables
                            </a>
                        </li>

                        <li className="my-2 ml-8">
                            <a href="#spat" className="lien">
                                Un peu de spatial
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="my-4 ml-8">
                    <a href="#couche_virtuel" className="lien">
                        Effectuer une requête en ajoutant une couche virtuelle
                    </a>
                </li>
            </ul>

            <p className="my-4">
                Nous avons vu dans les chapitres précédents que QGIS offre de
                nombreux opérateurs pour les requêtes spatiales et
                attributaires. Néanmoins, ceux d'entre vous maîtrisant le
                <a
                    href="https://fr.wikipedia.org/wiki/Structured_Query_Language"
                    className="lien font-bold"
                >
                    langage SQL
                </a>
                regretteront certains manques, notamment les{" "}
                <a href="http://sql.sh/fonctions/agregation" className="lien">
                    fonctions d'agrégation
                </a>
                . En outre, l'impossibilité d'écrire une requête portant à la
                fois sur des critères spatiaux et attributaires peut être
                gênante.
            </p>

            <p className="my-4">
                Une des possibilités pour pallier ces manques est d'utiliser un
                logiciel de{" "}
                <span className="font-bold">gestion de bases de données</span>{" "}
                (SGBD) à composante spatiale, tel que{" "}
                <a
                    href="http://www.postgis.fr/chrome/site/docs/workshop-foss4g/doc/index.html"
                    className="lien"
                >
                    PostgreSQL/PostGIS
                </a>
                , ou{" "}
                <a
                    href="http://www.sigterritoires.fr/index.php/tutoriel-bases-de-donnees-spatialite-sous-qgis-2-8-wien/"
                    className="lien"
                >
                    SQLite/SpatiaLite
                </a>
                , ce dont ne traitera pas ce tutoriel.
            </p>

            <p className="my-4">
                Mais si votre but est uniquement de jouir de toutes les
                possibilités du SQL sans avoir besoin d'une base de données, il
                existe une autre possibilité consistant à utiliser des{" "}
                <a
                    href="https://docs.qgis.org/latest/en/docs/user_manual/managing_data_source/create_layers.html#creating-virtual-layers"
                    className="lien font-bold"
                >
                    couches virtuelles
                </a>
                . Pour cela, aucune installation de logiciel supplémentaire
                n'est nécessaire.
            </p>

            <p className="my-4">
                <span className="font-bold">
                    Cette partie ne constitue pas un cours de SQL
                </span>
                , se limitant à expliquer l'interface de QGIS et à montrer
                quelques exemples. Il existe sur internet de nombreuses
                ressources sur l'apprentissage du SQL, comme par exemple{" "}
                <a href="http://sql.sh/cours/select" className="lien">
                    ici
                </a>
                .
            </p>

            <div className="mt-20">
                <div className="bg-style-b my-4">
                    <h5 className="sous-titre" id="util_SQL">
                        Utiliser du SQL sans passer par un logiciel de bases de
                        données : le concept de couche virtuelle
                    </h5>
                </div>

                <p className="my-4">
                    Les <span className="font-bold">couches virtuelles</span>
                    (virtual layers) sont un type particulier de couches vecteur
                    ne contenant pas de données mais renvoyant vers d'autres
                    couches.
                </p>

                <p className="my-4">
                    Elles permettent d'utiliser le langage SQL sur une ou
                    plusieurs couches vectorielles chargées dans QGIS, au format
                    shapefile, geopackage ou autre.
                </p>

                <p className="my-4">
                    Pour information, les fonctions SQL disponibles sont celles
                    de{" "}
                    <a href="https://www.sqlite.org/lang.html" className="lien">
                        SQLite
                    </a>
                    /
                    <a
                        href="http://www.gaia-gis.it/gaia-sins/spatialite-sql-latest.html"
                        className="lien"
                    >
                        SpatiaLite
                    </a>
                    . Elles sont donc un peu moins riches que celles offertes
                    par PostgreSQL/PostGIS mais offrent tout de même beaucoup de
                    possibilités.
                </p>
            </div>

            <div className="mt-20">
                <div className="bg-style-b my-4">
                    <h5 className="sous-titre" id="requ_simple">
                        Effectuer une requête simple avec le gestionnaire de
                        bases de données
                    </h5>
                </div>

                <p className="my-4">
                    Une des manières d'utiliser les couches virtuelles dans QGIS
                    est de passer par le
                    <span className="font-bold">
                        gestionnaire de bases de données
                    </span>{" "}
                    (DB Manager). Il s'agit d'une extension installée par défaut
                    dans QGIS.
                </p>

                <div className="my-8" id="gestion_bd">
                    <h6 className="sous-titre-italic my-8">
                        Activer le gestionnaire de bases de données
                    </h6>

                    <div className="bg-style-g my-4 px-4 py-4">
                        <p className="my-4">
                            A partir du menu <span className="font-bold"></span>
                            Base de données de QGIS, vérifiez si vous avez accès
                            au sous-menu du{" "}
                            <span className="lien">
                                gestionnaire de base de données
                            </span>
                            .
                        </p>

                        <div className="my-4 bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_4_dbmanager_menu.jpg"
                                alt="dbmanager_menu"
                            />
                        </div>

                        <p className="my-4">
                            Si oui, vous pouvez passer à la partie suivante. Si
                            non :
                        </p>

                        <p className="my-4">
                            Rendez-vous dans le menu{" "}
                            <span className="font-bold">
                                Extension → Installer/Gérer les extensions
                            </span>{" "}
                            :
                        </p>

                        <div className="my-4 bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_4_dbmanager_activation.jpg"
                                alt="dbmanager_activation"
                            />
                        </div>

                        <p className="my-4">
                            Dans la rubrique{" "}
                            <span className="font-bold">Installées</span>,
                            recherchez l'extension{" "}
                            <span className="font-bold">DB Manager</span> et
                            cochez la case correspondante, puis fermez la
                            fenêtre du gestionnaire d'extensions.
                        </p>
                    </div>
                </div>

                <div className="my-8" id="ecrire_requ">
                    <h6 className="sous-titre-italic my-8">
                        Ecrire une requête
                    </h6>

                    <div className="bg-style-g px-4 py-4 my-4">
                        <p className="my-4">
                            Ouvrez un nouveau projet dans QGIS et ajoutez-y les
                            3 couches{" "}
                            <span className="lien font-bold">
                                eoliennes_bretagne
                            </span>
                            ,{" "}
                            <span className="lien font-bold">
                                communes_Bretagne et
                            </span>{" "}
                            <span className="lien font-bold">DEPARTEMENT</span>
                            situées dans le dossier
                            <span className="lien font-bold">
                                TutoQGIS_06_Requetes/donnees
                            </span>
                            .
                        </p>

                        <p className="my-4">
                            Ouvrez la fenêtre du gestionnaire de bases de
                            données : menu{" "}
                            <span className="font-bold">
                                Base de données → Gestionnaire BD...
                            </span>
                            , ou bien cliquez sur l'icône correspondante dans la
                            barre d'outils Base de données.
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_4_dbmanager_fenetre.jpg"
                                alt="dbmanager_fenetre"
                            />
                        </div>

                        <p className="my-4">
                            Dans l'arborescence située dans la partie gauche de
                            la fenêtre, allez dans{" "}
                            <span className="font-bold">
                                Couches virtuelle → Couches du projet
                            </span>{" "}
                            : vous devriez voir vos 3 couches chargées dans
                            QGIS.
                        </p>

                        <p className="my-4">
                            Cliquez sur une des couches et allez dans l'onglet
                            <span className="font-bold">Info</span>, dans la
                            partie droite de la fenêtre. Vous pouvez y lire des
                            informations générales sur la couche, un peu comme
                            dans la fenêtre des propriétés, telles que le nombre
                            d'entités, le SCR ou la liste des champs.
                        </p>

                        <p className="my-4">
                            Les onglets
                            <span className="font-bold"> Table </span>et
                            <span className="font-bold"> Aperçu </span>vous
                            donne respectivement un aperçu des données
                            attributaires et spatiales.
                        </p>

                        <p className="my-4">
                            Cliquez ensuite sur l'icône
                            <span className="font-bold"> Fenêtre SQL</span>, ou
                            bien menu
                            <span className="font-bold">
                                {" "}
                                Base de données → Fenêtre SQL
                            </span>
                            .
                        </p>

                        <div className="my-4 bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_4_dbmanager_requete.jpg"
                                alt="dbmanager_requete"
                            />
                        </div>

                        <p className="my-4">
                            Un quatrième onglet s'ajoute, permettant d'écrire
                            une requête SQL (il est possible d'ouvrir ainsi
                            plusieurs onglets de requête SQL).
                        </p>

                        <p className="my-4">
                            Dans la moitié supérieure de cet onglet, tapez la
                            requête suivante (cette requête sera explicitée en
                            détail un peu plus loin) :
                        </p>

                        <p className="my-4">
                            SELECT * FROM DEPARTEMENT WHERE NOM_DEP = 'MORBIHAN'
                        </p>

                        <p className="my-4 italic text-sm">
                            Vous pouvez utiliser ou non des retours à la ligne,
                            ou des majuscules ou minuscules pour les mots clés
                            comme Select, le résultat sera le même.
                        </p>

                        <p className="my-4">
                            et cliquez sur le bouton{" "}
                            <span className="font-bold">Exécuter</span> : le
                            résultat de la requête s'affiche dans la moitié
                            inférieure de la fenêtre.
                        </p>
                    </div>
                </div>

                <div className="my-8" id="visualiser">
                    <h6 className="sous-titre-italic my-8">
                        Visualiser le résultat d'une requête
                    </h6>

                    <p className="my-4">
                        Seule la ligne correspondante de la table attributaire
                        est affichée dans le gestionnaire de bases de données.
                        La sélection n'est pas visible dans la fenêtre
                        principale de QGIS. Comment faire pour voir les
                        géométries correspondantes dans QGIS ?
                    </p>

                    <div className="bg-style-g px-4 py-4 my-4">
                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_4_dbmanager_charger.jpg"
                                alt="dbmanager_charger"
                            />
                        </div>

                        <p className="my-4">
                            En bas de le fenêtre du gestionnaire, cochez la case
                            <span className="font-bold">
                                Charger en tant que nouvelle couche
                            </span>{" "}
                            : une nouvelle rubrique apparaît :
                        </p>

                        <ul className="my-4 ml-8">
                            <li className="my-2">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Vérifiez que la colonne de géométrie{" "}
                                <span className="font-bold">geometry</span> soit
                                bien sélectionnée
                            </li>

                            <li className="my-2">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Tapez éventuellement un nom pour la nouvelle
                                couche (par défaut, elle se nommera
                                CoucheRequête ou QueryLayer)
                            </li>

                            <li className="my-2">
                                <FiberManualRecord sx={{ fontSize: 10 }} /> Et
                                cliquez sur le bouton{" "}
                                <span className="font-bold">Charger </span> soit
                                pour voir le résultat dans QGIS :
                            </li>
                        </ul>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_4_res_selection.jpg"
                                alt="res_selection"
                            />
                        </div>
                    </div>
                </div>

                <p className="my-4">
                    Notez que la nouvelle couche est une couche temporaire, non
                    éditable. Pour la sauvegarder, il faut faire un clic droit
                    sur son nom dans QGIS, Exporter, Sauvegarder les entités
                    sous...
                </p>

                <p className="my-4">
                    Par ailleurs, si dans la fenêtre du gestionnaire de bases de
                    données vous actualisez la liste des couches virtuelles,
                    vous verrez cette nouvelle couche y apparaître.
                </p>
            </div>

            <div className="mt-20">
                <div className="bg-style-b my-4">
                    <h5 className="sous-titre" id="pourquoi">
                        Pourquoi utiliser du SQL plutôt qu'une requête
                        attributaire ou spatiale ?
                    </h5>
                </div>

                <p className="my-4">La requête utilisée était :</p>

                <p className="my-4">
                    SELECT * FROM DEPARTEMENT WHERE "NOM_DEPT" = 'MORBIHAN'
                </p>

                <p className="my-4">
                    A quoi correspond cette requête ? Regardons-la ligne par
                    ligne :
                </p>

                <p className="my-4">SELECT *</p>

                <p className="my-4">
                    signifie que nous allons sélectionner (
                    <span className="font-bold">select</span>) toutes (la
                    mention *) les colonnes de la table attributaire, ainsi que
                    la géométrie, qui est considérée comme une colonne nommée
                    geometry, comme vous pouvez le vérifier dans l'onglet{" "}
                    <span className="font-bold">Info</span>.
                </p>

                <p className="font-bold">FROM DEPARTEMENT</p>

                <p className="my-4">
                    signifie que nous allons sélectionner les colonnes de la
                    couche <span className="font-bold lien">DEPARTEMENT</span>.
                </p>

                <p className="my-4">WHERE "NOM_DEPT" = 'MORBIHAN'</p>

                <p className="my-4">
                    applique un critère à la requête : seules seront
                    sélectionnées les lignes répondant à ce critère,
                    c'est-à-dire dont la valeur pour le champ NOM_DEPT est égale
                    à « MORBIHAN ».
                </p>

                <p className="my-4">
                    Comparons avec la même requête dans la fenêtre de requête
                    attributaire, où seul le critère{" "}
                    <span className="font-bold">"NOM_DEPT" = 'MORBIHAN' </span>
                    est nécessaire, le début de la requête étant « sous-entendu
                    ».
                </p>

                <p className="my-4">
                    Par rapport à une requête attributaire, une requête SQL nous
                    offre donc la possibilité :
                </p>

                <ul className="my-4 ml-8">
                    <li className="my-2">
                        <FiberManualRecord sx={{ fontSize: 10 }} /> de choisir
                        les colonnes qui nous intéressent
                    </li>

                    <li className="my-2">
                        <FiberManualRecord sx={{ fontSize: 10 }} /> de choisir
                        d'effectuer des requêtes sur la géométrie
                    </li>

                    <li className="my-2">
                        <FiberManualRecord sx={{ fontSize: 10 }} /> de choisir
                        de croiser plusieurs tables
                    </li>
                </ul>

                <div className="my-8" id="col">
                    <h6 className="sous-titre-italic my-8">
                        Choisir les colonnes
                    </h6>

                    <p className="my-4">
                        Pour que le résultat de la requête ne comporte que les
                        colonnes voulues, il suffit de les lister dans la
                        requête.
                    </p>

                    <div className="bg-style-g my-4 px-4 py-4">
                        <div className="my-4 bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_4_colonnes.jpg"
                                alt="colonnes"
                            />
                        </div>

                        <p className="my-4">
                            Toujours dans l'onglet{" "}
                            <span className="font-bold">Requête</span> du
                            gestionnaire de bases données, remplacez l'étoile
                            par{" "}
                            <span className="font-bold">
                                INSEE_DEP, NOM_DEP, geometry
                            </span>{" "}
                            :
                        </p>

                        <p className="my-4">
                            SELECT INSEE_DEP, NOM_DEP, geometry FROM DEPARTEMENT
                            WHERE NOM_DEP = 'MORBIHAN'
                        </p>

                        <p className="my-4">
                            Et cliquez sur le bouton{" "}
                            <span className="font-bold">Exécuter</span> : seules
                            les colonnes voulues sont renvoyées par la requête.
                            Notez que vous pouvez choisir l'ordre des colonnes.
                        </p>
                    </div>

                    <p className="my-4">
                        Comme précédemment, vous pouvez si vous le désirez
                        charger ce résultat dans QGIS en tant que nouvelle
                        couche.
                    </p>
                </div>

                <div className="my-8" id="plus_tab">
                    <h6 className="sous-titre-italic my-8">
                        Croiser plusieurs tables
                    </h6>

                    <p className="my-4">
                        Comment faire si nous voulons maintenant croiser
                        plusieurs tables, par exemple obtenir pour chaque
                        commune le nom de son département ?
                    </p>

                    <p className="my-4">
                        Cette information n'existe pas dans la couche de
                        communes mais on peut la trouver dans la couche de
                        département. On peut faire le lien entre les 2 couches
                        grâce au code de département, présent dans les 2
                        couches. Il sera donc possible de « rapatrier » le nom
                        du département de la couche de départements vers la
                        couche de communes.
                    </p>

                    <p className="my-4">
                        Cette manipulation revient en fait à effectuer une
                        jointure attributaire.
                    </p>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            La première étape est de vérifier qu'il existe bien
                            un champ permettant de faire le lien entre les deux
                            couches. Ici, il s'agit du champ{" "}
                            <span className="font-bold">INSEE_DEP</span> présent
                            dans les deux couches, ce que vous pouvez vérifier
                            en ouvrant leurs tables attributaires (à noter que
                            ce champ pourrait avoir un nom différent dans
                            chacune des couches sans que cela ne pose problème).
                        </p>

                        <p className="my-4">
                            Tapez ensuite la requête suivante (vous pouvez
                            effacer la précédente) :
                        </p>

                        <p className="my-4">
                            SELECT c.INSEE_COM, c.NOM_COM, d.NOM_DEP, c.geometry
                            FROM communes_Bretagne as c, DEPARTEMENT as d WHERE
                            c.INSEE_DEP = d.INSEE_DEP
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_4_croiser_couches.jpg"
                                alt="croiser_couches"
                            />
                        </div>

                        <p className="my-4">
                            Le résultat s'affiche : une ligne par commune, avec
                            les colonnes choisies. Par rapport à la couche
                            originale de communes, une information provenant de
                            la couche de départements a été ajoutée, le nom du
                            département.
                        </p>
                    </div>

                    <p className="my-4">
                        Prenons cette requête ligne par ligne (mais dans le
                        désordre !) :
                    </p>

                    <p className="my-4">
                        from communes_Bretagne as c, DEPARTEMENT as d
                    </p>

                    <p className="my-4">
                        signifie deux choses : que les deux couches en jeu
                        seront{" "}
                        <span className="font-bold lien">
                            {" "}
                            communes_Bretagne{" "}
                        </span>
                        et <span className="font-bold lien"> DEPARTEMENT</span>,
                        et que dans le reste de la requête, les noms de ces deux
                        couches seront abrégés respectivement en{" "}
                        <span className="font-bold">c</span> et{" "}
                        <span className="font-bold">d</span>.
                    </p>

                    <p className="my-4">
                        Cette abréviation des noms de couches n'est pas
                        obligatoire ; elle permet néanmoins de taper moins de
                        texte, et de gagner en clarté. Un autre avantage est que
                        si vous deviez réutiliser cette requête pour d'autres
                        couches, vous n'auriez à modifier qu'une seule fois leur
                        nom.
                    </p>

                    <p className="my-4">
                        select c.INSEE_COM, c.NOM_COM, d.NOM_DEP, c.geometry
                    </p>

                    <p className="my-4">
                        indique quelles colonnes vont être récupérées. Comme il
                        est possible qu'une colonne existe dans les deux couches
                        (cas de <span className="font-bold">geometry</span>
                        ici), le nom abrégé de la table (
                        <span className="font-bold">c</span> ou{" "}
                        <span className="font-bold">d</span>) est indiqué
                        devant. Même si cette désambiguïsation n'est pas
                        toujours nécessaire (pour{" "}
                        <span className="font-bold">INSEE_COM</span> par
                        exemple), il est conseillé de toujours indiquer le nom
                        de la couche pour des raisons de clarté.
                    </p>

                    <p className="my-4">where c.INSEE_DEP = d.INSEE_DEP</p>

                    <p className="my-4">
                        permet au logiciel de savoir comment faire le lien entre
                        les lignes des tables des deux couches. Il s'agit de
                        l'équivalent d'une{" "}
                        <span className="lien">jointure attributaire</span>.
                    </p>

                    <p className="my-4">
                        Il est donc possible de faire intervenir dans une même
                        requête autant de couches que vous le désirez, à
                        condition de pouvoir faire le lien entre ces couches
                        (dernière ligne de la requête).
                    </p>
                </div>

                <div className="my-8" id="spat">
                    <h6 className="sous-titre-italic my-8">
                        Un peu de spatial
                    </h6>

                    <p className="my-4">
                        Comment est-il possible d'utiliser la colonne de
                        géométrie ? Essayons par exemple de sélectionner les
                        communes contenant des éoliennes, comme déjà réalisé
                        précédemment au moyen d'une{" "}
                        <span className="lien">requête spatiale</span>.
                    </p>

                    <p className="my-4">
                        Pour rappel, croiser deux couches est plus facile si
                        elles sont dans le même SCR (même s'il est possible de
                        modifier le SCR en SQL directement dans la requête !).
                    </p>

                    <div className="bg-style-g my-4 p-4">
                        <p className="my-4">
                            Nous pouvons déjà écrire les deux premières lignes
                            de notre requête, par exemple :
                        </p>

                        <p className="my-4">
                            SELECT c.INSEE_COM, c.NOM_COM, c.geometry FROM
                            communes_Bretagne as c, eoliennes_bretagne as e
                        </p>

                        <p className="my-4">
                            mais il nous manque le critère spatial indiquant que
                            les communes doivent contenir au moins une éolienne.
                        </p>

                        <p className="my-4">
                            Une recherche dans la{" "}
                            <a
                                href="http://www.gaia-gis.it/gaia-sins/spatialite-sql-latest.html"
                                className="lien"
                            >
                                liste des fonctions SpatiaLite{" "}
                            </a>
                            et plus spécifiquement dans la partie consacrée aux
                            <a
                                href="http://www.gaia-gis.it/gaia-sins/spatialite-sql-latest.html#p12"
                                className="lien"
                            >
                                fonctions testant les relations spatiales{" "}
                            </a>
                            nous permet de trouver l'opérateur{" "}
                            <span className="font-bold">Contains</span> et de
                            compléter notre requête :
                        </p>

                        <p className="my-4">
                            WHERE Contains(c.geometry, e.geometry)
                        </p>

                        <p className="my-4">
                            ce qui se traduit par : la géométrie des communes
                            doit contenir la géométrie des éoliennes.
                        </p>

                        <p className="my-4">
                            A ce stade, notre requête ressemble à ceci :
                        </p>

                        <p className="my-4">
                            SELECT c.INSEE_COM, c.NOM_COM, c.geometry FROM
                            communes_Bretagne as c, eoliennes_bretagne as e
                            WHERE contains(c.geometry, e.geometry)
                        </p>

                        <p className="my-4">
                            Cette requête fonctionne, mais mettra du temps à
                            s'exécuter. Pour accélerer les choses, nous pouvons
                            ajouter un critère avec cette ligne :
                        </p>

                        <p className="my-4">
                            AND e._search_frame_ = c.geometry
                        </p>

                        <p className="my-4">
                            Cette commande un peu obscure veut dire en réalité
                            que les éoliennes doivent être recherchées
                            uniquement dans les communes : le logiciel ne perd
                            donc pas de temps avec les éoliennes qui seraient
                            hors des communes. Pour nous autres humains, tout
                            cela est un peu obscur, mais ça marche !
                        </p>

                        <p className="my-4 italic text-sm">
                            Dans PostGIS, les index sont gérés de manière
                            transparente et cette ligne n'est donc pas
                            nécessaire.
                        </p>

                        <p className="my-4">Exécutez la requête :</p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_4_contains_1.jpg"
                                alt="contains_1"
                            />
                        </div>

                        <p className="my-4 italic text-sm">
                            Si la requête ne renvoie pas de résultat, vérifiez
                            que votre couche de communes et d'éoliennes ont bien
                            le même SCR.
                        </p>

                        <p className="my-4">
                            Dans l'aperçu des résultats, vous voyez qu'une même
                            commune peut apparaître plusieurs fois. En fait,{" "}
                            <span className="font-bold">
                                chaque commune apparaît autant de fois qu'elle
                                compte d'éoliennes.
                            </span>
                        </p>

                        <p className="my-4">
                            Pour éviter cela, nous allons grouper toutes les
                            lignes qui possèdent le même code INSEE, le même nom
                            de commune et la même géométrie avec cette ligne :
                        </p>

                        <p className="my-4">
                            GROUP BY c.INSEE_COM, c.NOM_COM, c.geometry
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_4_contains_2.jpg"
                                alt="contains_2"
                            />
                        </div>

                        <p className="my-4">
                            Cette fois, chaque commune contenant au moins une
                            éolienne n'apparaît qu'une seule fois.
                        </p>

                        <p className="my-4">
                            Il est relativement simple à partir de cette requête
                            de compter pour chaque commune le nombre d'éoliennes
                            qu'elle contient, en rajoutant un champ comptant le
                            nombre d'identifiants d'éoliennes associés à une
                            commune :
                        </p>

                        <p className="my-4">
                            SELECT c.INSEE_COM, c.NOM_COM,{" "}
                            <span className="font-bold">
                                count(e.id_mat) as nb_eoliennes,
                            </span>{" "}
                            c.geometry
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_4_contains_3.jpg"
                                alt="contains_3"
                            />
                        </div>

                        <p className="my-4">
                            La requête finale complète est donc :
                        </p>

                        <p className="my-4">
                            SELECT c.INSEE_COM, c.NOM_COM, count(e.id_mat) as
                            nb_eoliennes, c.geometry FROM communes_Bretagne as
                            c, eoliennes_bretagne as e WHERE
                            contains(c.geometry, e.geometry) AND
                            e._search_frame_ = c.geometry GROUP BY c.INSEE_COM,
                            c.NOM_COM, c.geometry
                        </p>
                    </div>

                    <p className="my-4">
                        Ceci peut servir par exemple à visualiser le nombre
                        d'éoliennes par commune au moyen d'une carte en cercles
                        proportionnels :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_4_carte_nb_eoliennes.jpg"
                            alt="carte_nb_eoliennes"
                        />
                    </div>

                    <p className="img-titre my-4">
                        Pour apprendre à créer ce type de carte, rendez-vous
                        dans la partie consacrée à la représentation des données
                        !
                    </p>

                    <p className="my-4">
                        Il existe de nombreux opérateurs spatiaux que vous
                        pouvez vous amuser à tester. Il est bien sûr possible
                        d'ajouter des critères spatiaux et attributaires dans
                        une même requête. En fait, vous pouvez à peu près
                        effectuer toutes les opérations disponibles dans un SIG
                        avec une requête SQL !
                    </p>

                    <p className="my-4">
                        Cette approche nécessite de prendre un peu de temps pour
                        apprendre le langage SQL, mais est intéressante en terme
                        de temps de traitement et de reproductibilité, toutes
                        les requêtes pouvant être gardées dans un fichier texte
                        et rejouées. Il est possible d'exécuter plusieurs
                        requêtes à la suite, en terminant chaque requête par un
                        point-virgule.
                    </p>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b my-4">
                    <h5 className="sous-titre" id="couche_virtuel">
                        Effectuer une requête en ajoutant une couche virtuelle
                    </h5>
                </div>

                <p className="my-4">
                    Nous avons vu comment écrire une requête SQL à partir du
                    gestionnaire de bases de données. Il existe une autre
                    interface possible, en passant par le gestionnaire des
                    sources de données
                </p>

                <div className="bg-style-g px-4 py-4 my-4">
                    <p className="my-4">
                        Ouvrez le gestionnaire de source de données, rubrique{" "}
                        <span className="font-bold">Couche virtuelle</span> :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/6_4_ajout_vl_fenetre.jpg"
                            alt="ajout_vl_fenetre"
                        />
                    </div>

                    <ul className="my-4 ml-8">
                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">
                                Nom de la couche :
                            </span>{" "}
                            il s'agit du nom qu'aura la couche virtuelle
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">Requête :</span> la
                            dernière requête tapée dans le gestionnaire de bases
                            de données s'affiche automatiquement. Si ce n'est
                            pas le cas, tapez une requête de votre choix
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">Géométrie :</span>{" "}
                            Autodétecter laisse au logiciel le soin de
                            déterminer quelle est la colonne de géométrie. Il
                            est également possible de spécifier{" "}
                            <span className="font-bold">Aucune géométrie</span>
                            si la couche n'en contient pas, ou bien de spécifier
                            manuellement la colonne de géométrie
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">Test :</span> ce bouton
                            permet de détecter les éventuelles erreurs présentes
                            dans la requête
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">Ajouter :</span> il
                            exécute la requête et ajoute le résultat dans QGIS.
                        </li>
                    </ul>

                    <p className="my-4">
                        Vous devriez obtenir une couche temporaire similaire à
                        celle créée précédemment.
                    </p>
                </div>

                <p className="my-4">
                    Dans cette fenêtre, la rubrique{" "}
                    <span className="font-bold">Couches intégrées</span> permet
                    de lister les couches présentes dans QGIS (bouton{" "}
                    <span className="font-bold">Importer</span>) ou bien
                    d'autres couches non chargées (bouton{" "}
                    <span className="font-bold">Ajouter</span>).
                </p>

                <p className="my-4">
                    Cette fenêtre permet donc globalement la même chose que le
                    gestionnaire de bases de données, avec une interface un peu
                    différente. A vous de choisir celle que vous préférez !
                </p>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/requetes/combiner-requete"
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
                        to="/app/plan-detailler/calcul-de-champs"
                    >
                        <span className="hidden lg:block">Chap VII</span>{" "}
                        <ArrowRightOutlined sx={{ fontSize: 30 }} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default RequSQL;
