import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
    FolderOpenOutlined,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function DitSQL() {
    return (
        <div className="relative paragraphe">
            <h4 className="titre-primary" id="top">
                IX.5 Un exemple d'application : dites-le avec du SQL !
            </h4>

            <div>
                <ul className="text-blue-500">
                    <li className="my-2">
                        <a href="#createbase" className="lien">
                            Création d'une nouvelle base SpatiaLite ou PostGIS
                        </a>
                        <ul className="ml-8">
                            <li>
                                <a href="#spatiate" className="lien">
                                    Création d'une base SpatiaLite
                                </a>
                            </li>
                            <li>
                                <a href="#createpost" className="lien">
                                    Création d'une base PostGIS
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="my-2">
                        <a href="#importpostspa" className="lien">
                            Import de données dans SpatiaLite ou PostGIS
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#launch" className="lien">
                            Lancer une requête simple
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#creategrille" className="lien">
                            Création d'une grille
                        </a>
                        <ul className="ml-8">
                            <li>
                                <a href="#whtspa" className="lien">
                                    Créer une grille avec SpatiaLite
                                </a>
                            </li>
                            <li>
                                <a href="#creategripost" className="lien">
                                    Créer une grille avec PostGIS
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="my-2">
                        <a href="#uniagreg" className="lien">
                            Union et agrégation
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#temporelle" className="lien">
                            Évolution temporelle : soustraction de 2 maillages
                        </a>
                        <ul className="ml-8">
                            <li>
                                <a href="#corine" className="lien">
                                    Relancer l'opération sur les données Corine Land Cover 2012
                                </a>
                            </li>
                            <li>
                                <a href="#soustraction" className="lien">
                                    Soustraire les 2 maillages 2012 et 2000
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <p className="paragraphe">
                Comment faire pour automatiser les opérations réalisées au <a href="#" className="lien">chapitre précédent</a>, afin de pouvoir rendre le processus plus reproductible ?
            </p>
            <p className="paragraphe">
                Une première solution serait d'utiliser un <span className="font-bold">modèle</span>. Nous ne verrons pas ici le pas à pas pour créer le modèle en question, mais vous pouvez essayer vous-même en vous référant <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/11_03_modeleur.html" className="lien">ici</a> !
            </p>
            <p className="paragraphe">
                Une autre solution pour automatiser ce traitement est d'utiliser des requêtes SQL. Il s'agit d'une partie « pour aller plus loin », d'un niveau plus avancé, et vous pouvez très bien décider de vous arrêter ici. Nous nous appuierons sur <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/06_04_req_sql.html" className="lien">cette partie</a>.
            </p>
            <p className="paragraphe">
                Il est possible d'utiliser 2 logiciels différents à partir de QGIS pour lancer des requêtes SQL :
            </p>
            <p className="paragraphe">
                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                    <li className="my-1">
                        <FiberManualRecord
                            sx={{ fontSize: 10 }}
                        />{" "} <span className="font-bold">SQLite et son module spatial SpatiaLite</span> ne nécessitent pas d'installation, mais les fonctions disponibles sont plus limitées que celles de Postgresql/PostGIS
                    </li>
                    <li className="my-1">
                        <FiberManualRecord
                            sx={{ fontSize: 10 }}
                        />{" "} <span className="font-bold">Postgresql et son module spatial PostGIS </span> doivent être installés en plus de QGIS, mais une fois cette opération réalisée beaucoup de possibilités s'offriront à vous !
                    </li>
                </ul>
            </p>
            <p className="paragraphe">
                Il n'y a pas une solution meilleure qu'une autre mais elles répondent à des besoins différents.
            </p>
            <p className="paragraphe">
                <span className="font-bold">Pour cet exercice les 2 logiciels peuvent être utilisés</span>. Si vous choisissez Postgresql/PostGIS, l'installation ne sera pas détaillée ici mais on trouve de nombreuses ressources sur internet. La syntaxe étant légèrement différente d'un logiciel à l'autre, les requêtes seront proposées en 2 versions.
            </p>
            <p className="paragraphe text-green-400 font-bold">
                Pour ce chapitre, vous pouvez soit télécharger les données <a href="https://www.statistiques.developpement-durable.gouv.fr/corine-land-cover-0" className="lien"> Corine Land Cover</a> : <a href="http://www.donnees.statistiques.developpement-durable.gouv.fr/donneesCLC/CLC/millesime/CLC00_FR_RGF_SHP.zip" className="lien"> Données Métropole 2000</a> et <a href="http://www.donnees.statistiques.developpement-durable.gouv.fr/donneesCLC/CLC/millesime/CLC12_FR_RGF_SHP.zip" className="lien">Données Métropole 2012</a> puis les filtrer pour ne garder que les vignes, comme détaillé dans le tutoriel, ou bien utiliser <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/telechargement.html" className="lien">les données en téléchargement</a> déjà filtrées (pour un téléchargement moins lourd).
            </p>

            <div id="createbase" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Création d'une nouvelle base SpatiaLite ou PostGIS
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            La première étape consiste à créer une base de données vides dans le logiciel choisi, et à y importer les données de départ, à savoir la couche Corine Land Cover.
                        </p>
                        <p className="paragraphe font-bold">
                            Si vous choisissez d'utiliser Postgresql/PostGIS, assurez-vous d'avoir installé ces logiciels avant de poursuivre !
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Commencez par ouvrir un nouveau projet QGIS et chargez la couche <a href="http://www.donnees.statistiques.developpement-durable.gouv.fr/donneesCLC/CLC/millesime/CLC00_FR_RGF_SHP.zip" className="lien">CLC00_FR_RGF</a> ou bien <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_09_AnalyseSpat.zip" className="lien">CLC00_221_FR_RGF</a> (données déjà filtrées pour ne garder que les vignes).
                            </p>
                        </div>
                        <h6 className="sous-titre-italic" id="spatiate">
                            Création d'une base SpatiaLite
                        </h6>
                        <p className="paragraphe">
                            Nous allons tout d'abord créer une base SpatiaLite vide.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Dans le panneau <span className="font-bold">Explorateur</span>, faites un clic droit sur <span className="font-bold">SpatiaLite → Créer une base de données... :</span>
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_creer_sl.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Naviguez jusqu'au dossier où vous souhaitez créer votre base, et nommez-la par exemple <span className="font-bold">maillage_clc</span>. Elle est maintenant visible dans l'explorateur :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_bdd_sl.jpg"
                                    alt="pôle-ard"
                                    width={200}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            Si vous naviguez dans l'explorateur de fichiers de votre ordinateur jusqu'à votre base de données, vous verrez qu'un fichier SQLite a été créé. Par rapport à un format comme le shapefile, une base de données est comme une boîte qui peut contenir plusieurs jeux de données.
                        </p>
                        <p className="paragraphe">
                            Une base SpatiaLite est une base SQLite qui peut gérer des données spatiales grâce au module SpatiaLite. Elle est constituée d'une seule fichier qu'on peut copier d'un dossier à l'autre.
                        </p>
                        <p className="paragraphe">
                            Ça n'est pas le cas des logiciels de bases de données « traditionnels » tels que PostgreSQL, qui fonctionnent selon une logique <a href="https://fr.wikipedia.org/wiki/Client-serveur" className="lien">client-serveur</a> : la base est installé sur un serveur, et des utilisateurs peuvent s'y connecter à partir d'autres ordinateurs. Bien sûr il est possible de se servir de son propre ordinateur comme de serveur, et la base ne sera accessible que depuis celui-ci : c'est ce qu'on appelle une base « en local ».
                        </p>
                        <h6 className="sous-titre-italic" id="createpost">
                            Création d'une base PostGIS
                        </h6>
                        <p className="paragraphe">
                            ...Et c'est ce que nous allons faire ici ! Si vous avez décidé de travailler avec SpatiaLite, passez directement à <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/09_05_maillage_sql.html#IX51c" className="lien">l'import des données</a>.
                        </p>
                        <p className="paragraphe text-green-400 font-bold">
                            Je pars du principe ici que vous avez déjà installé PostgreSQL et PostGIS, et que vous êtes connecté à un serveur PostgreSQL, local ou distant.
                        </p>
                        <p className="paragraphe">
                            QGIS peut uniquement se connecter à une base déjà existante,<span className="font-bold"> la création d'une nouvelle base PostgreSQL/PostGIS ne peut se faire dans QGIS</span>.
                        </p>
                        <p className="paragraphe">
                            Il existe plusieurs méthodes pour cela, qui sortent un peu de ce tutoriel : cette partie consistera surtout en des renvois vers des tutoriels existants.
                        </p>
                        <p className="paragraphe">
                            PostgreSQL en soi ne possède pas d'interface graphique mais fonctionne en lignes de commande. Si ce mot vous fait peur, pas de panique ! Il existe plusieurs logiciels qui peuvent servir d'interface graphique à PostgreSQL et vous permettre d'arriver à vos fins en quelques clics.
                        </p>
                        <p className="paragraphe">
                            Le plus connu est peut-être <a href="https://www.pgadmin.org/" className="lien">pgAdmin</a>, qui est peut-être déjà installé sur votre ordinateur selon la manière dont vous avez installé PostgreSQL. Vous pouvez également utiliser par exemple <a href="https://dbeaver.io/" className="lien">DBeaver</a>.
                        </p>
                        <p className="paragraphe">
                            Pour <span className="font-bold">créer une nouvelle base de données PostgreSQL</span>, en la nommant <span className="font-bold">maillage_clc</span> :
                        </p>
                        <p className="paragraphe">
                            <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} <a href="https://www.postgresql.org/docs/9.1/manage-ag-createdb.html" className="lien"> en ligne de commande</a> ou <a href="https://www.postgresqltutorial.com/postgresql-create-database/" className="lien">ici</a>
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} avec <a href="https://www.postgresqltutorial.com/postgresql-create-database/" className="lien">pgAdmin</a> en déroulant pour aller à la partie « 3) Creating a new database using pgAdmin »
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} avec DBeaver, le principe est le même qu'avec pgAdmin : clic droit sur le serveur postgres → Créer → Database
                                </li>
                            </ul>
                        </p>
                        <p className="paragraphe">
                            Il faut ensuite <span className="font-bold">donner les 2 extensions postgis et postgis_topology à la base</span> pour pouvoir y mettre des données géographiques. Encore une fois, vous pouvez procéder au choix :
                        </p>
                        <p className="paragraphe">
                            <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} <a href="https://postgis.net/install/" className="lien"> en ligne de commande</a> avec ces 2 commandes : <span className="font-bold">CREATE EXTENSION postgis; et CREATE EXTENSION postgis_topology</span>;
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} avec pgAdmin, en faisant un clic droit sur la base → Créer → Extension puis en choisissant postgis et postgis_topology
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} avec DBeaver, sensiblement de la même manière qu'avec pgAdmin
                                </li>
                            </ul>
                        </p>
                        <p className="paragraphe">
                            Votre base PostGIS est créée, il ne reste plus qu'à s'y connecter dans QGIS !
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                <FolderOpenOutlined /> Menu Couche → Gestionnaire des sources de données ou bien clic sur l'icône correspondante, rubrique <span className="font-bold">PostgreSQL</span> :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_nouvelle_connexion_psql.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Cliquez sur <span className="font-bold">Nouveau</span> pour créer une nouvelle connexion à notre base maillage_clc :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_nouvelle_connexion_fenetre_psql.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>

                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}  Nom : vous pouvez donner le nom de votre choix à la connexion, mais le plus simple est probablement de lui donner le même nom que la base : <span className="font-bold">maillage_clc</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Hôte : tapez <span className="font-bold">localhost</span> si votre base est en local, sinon l'adresse de votre serveur PostgreSQL
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Port : par défaut, le numéro du <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/09_05_maillage_sql.html#" className="lien">port</a> est <span className="font-bold">5432</span>, mais il peut être différent selon votre configuration
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Base de données : tapez ici le nom de la base : <span className="font-bold">maillage_clc</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Cliquez ensuite sur <span className="font-bold">Tester la connexion</span> : selon votre configuration, il sera nécessaire ou non de rentrer vos identifiants
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Si le test de connexion est réussi, vous pouvez cliquer sur OK et fermer la fenêtre. Vous pouvez également fermer la fenêtre du gestionaire de sources de données.
                            </p>
                            <p className="paragraphe">
                                Votre base est maintenant visible dans l'explorateur :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_bdd_psql.jpg"
                                    alt="pôle-ard"
                                    width={200}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            Une dernière étape consiste à créer un <span className="font-bold">schéma</span> nommé tutoqgis dans cette base. Un schéma correspond à un sous-dossier dans la base de données. Le schéma par défaut se nomme <span className="font-bold">public</span> mais c'est une bonne pratique de créer vos propres schémas.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Rien de compliqué : toujours dans l'explorateur, clic droit sur votre base <span className="font-bold">→ Nouveau schéma...</span>
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_creer_schema.jpg"
                                    alt="pôle-ard"
                                    width={200}
                                />
                            </div>
                            <p className="paragraphe">
                                Nommez-le par exemple <span className="font-bold">tutoqgis</span>. Votre base doit donc contenir 3 schémas : tutoqgis, public et topology.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_creer_schema_res.jpg"
                                    alt="pôle-ard"
                                    width={200}
                                />
                            </div>
                            <p className="paragraphe">
                                On peut aussi créer le schéma à partir du gestionnaire de bases de données.
                            </p>
                        </div>
                        <p className="paragraphe italic">
                            Vous remarquerez que cette étape est plus longue et complexe avec PostgreSQL. Néanmoins, une fois ce logiciel configuré et avec un peu d'habitude, il ne vous faudra plus que quelque secondes pour créer une nouvelle base !
                        </p>
                    </div>
                </div>
            </div>

            <div id="importpostspa" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Import de données dans SpatiaLite ou PostGIS
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Cette étape est presque équivalente pour les 2 logiciels, en passant par le gestionnaire de base de données de QGIS.
                        </p>
                        <p className="paragraphe">
                            Avant d'importer les données, nous allons sélectionner dans la couche Corine Land Cover les entités correspondant au vignoble, pour n'importer que celles-ci. Cette étape pourrait tout à fait être effectuée une fois les données importées dans la base, mais comme cela le temps d'import dans SpatiaLite ou PostGIS sera plus court.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe font-bold text-green-400">
                                Cette sélection n'est pas nécessaire si vous utilisez la couche CLC00_221_FR_RGF disponible en téléchargement.
                            </p>
                            <p className="paragraphe">
                                Utilisez une <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/06_01_req_attrib.html" className="lien">requête attributaire</a> sur la couche <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_09_AnalyseSpat.zip" className="lien">CLC00_FR_RGF</a> pour ne sélectionner que les vignes : <span className="font-bold"> "CODE_00" = '221'</span> (en jaune ci-dessous).
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_selection_vignes.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            Il ne reste plus qu'à importer les entités sélectionnes, dans SpatiaLite ou PostGIS selon votre choix.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                <img src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/6_4_dbmanager_icone.jpg" alt="" /> Dans QGIS, ouvrez la fenêtre du <span className="font-bold"> gestionnaire de bases de données</span> : menu Base de données → DB Manager... ou bien clic sur l'icône correspondante.
                            </p>
                            <p className="paragraphe">
                                Sélectionnez votre base, SpatiaLite... :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_dbmanager_sl.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                ...Ou bien PostGIS :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_dbmanager_psql.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Dans les 2 cas, <span className="font-bold">cliquez sur le petit triangle devant le nom de la base </span> pour être sûr d'y être bien connecté.
                            </p>
                            <p className="paragraphe">
                                Cliquez ensuite sur le bouton <span className="font-bold">Import de couche/fichier</span> en haut de la fenêtre du gestionnaire de bases de données :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_import_spatialite.jpg"
                                    alt="pôle-ard"
                                    width={250}
                                />
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_import_postgis.jpg"
                                    alt="pôle-ard"
                                    width={250}
                                />
                            </div>
                            <p className="paragraphe italic text-center mt-0">
                                Import de données : à gauche dans SpatiaLite, à droite dans PostGIS.
                            </p>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}   Source : choisir la couche <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_09_AnalyseSpat.zip" className="lien">CLC00_FR_RGF</a>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} N'oubliez pas de cocher la case <span className="font-bold"> Importer uniquement les entités sélectionnées</span> pour n'importer que les vignes que vous avez préalablement sélectionnées
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Table en sortie : pour PostGIS, sélectionnez le schéma <span className="font-bold">tutoqgis</span>, et dans tous les cas nommez la future table SpatiaLite ou PostGIS <span className="font-bold">clc00_vignes</span> (il est plus pratique d'éviter les majuscules)
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} <a href="https://fr.wikipedia.org/wiki/Cl%C3%A9_primaire" className="lien"> clé primaire</a> : il s'agit d'un champ d'identifiant unique qui sera créé, nommez-le <span className="font-bold">gid</span> par exemple
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} SCR cible : le SCR original IGNF:LAMB93 n'est pas reconnu par SpatiaLite ou PostGIS : sélectionnez son équivalent <span className="font-bold">RGF93/Lambert93 EPSG 2154</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Vous pouvez également cocher la case <span className="font-bold">créer un index spatial</span>, ce qui accélérera certaines opérations spatiales (mais il peut être créé par la suite)
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                <img src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_actualiser_bdd_icone.jpg" alt="" /> Cliquez sur <span className="font-bold">OK</span>, patientez... Il faut éventuellement actualiser la base pour que la nouvelle couche soit visible :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_import_spatialite_res.jpg"
                                    alt="pôle-ard"
                                    width={250}
                                />
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_import_postgis_res.jpg"
                                    alt="pôle-ard"
                                    width={250}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            Bravo ! Vous disposez maintenant d'une base de données avec une couche de données.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Pour chaque couche PostGIS ou SpatiaLite, on peut accéder à partir du gestionnaire de bases de données à 3 onglet : info, table et aperçu.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_info_couche.jpg"
                                    alt="pôle-ard"
                                    width={250}
                                />
                            </div>
                            <p className="paragraphe">
                                L'onglet <span className="font-bold">info</span> vous permet de voir le nombre d'entités (4215), le type de géométrie (multipolygone), le SCR (RGF93 Lambert93 EPSG 2154), la liste des champs...
                            </p>
                            <p className="paragraphe">
                                Les onglets <span className="font-bold">table</span> et <span className="font-bold">aperçu</span> permettent un aperçu des données attributaires et spatiales : cliquez sur chacun d'eux.
                            </p>
                            <p className="paragraphe">
                                Double-cliquez sur la couche dans la partie gauche du gestionnaire de bases de données pour l'ajouter à QGIS. Vous pouvez maintenant l'utiliser comme n'importe quelle couche shapefile ou GeoPackage.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Nous allons pouvoir rentrer dans le vif du sujet !
                        </p>
                    </div>
                </div>
            </div>

            <div id="launch" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Lancer une requête simple
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            A ce stade, si vous n'avez aucune notion de SQL, je vous conseille de d'abord suivre cette partie sur les requêtes SQL.
                        </p>
                        <p className="paragraphe">
                            Nous allons ici lancer une requête simple dans SpatiaLite ou PostGIS, en guise d'introduction.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Sélectionnez votre base dans le gestionnaire de bases de données.
                            </p>
                            <p className="paragraphe">
                                <img src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_requete_icone.jpg" alt="" /> Cliquez ensuite sur l'icône <span className="font-bold">Fenêtre SQL</span> (ou menu Base de données → Fenêtre SQL) : un nouvel onglet s'ouvre.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_requete_fenetre.jpg"
                                    alt="pôle-ard"
                                    width={250}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            Remarquez que cet onglet porte le nom de votre base : il ne sera pas possible d'y lancer une requête concernant une autre base (mais on peut très bien ouvrir plusieurs onglets de requête).
                        </p>
                        <p className="paragraphe">
                            L'onglet comporte 2 parties :
                        </p>
                        <p className="paragraphe ml-5">
                            1. en haut, vous pouvez taper une requête
                        </p>
                        <p className="paragraphe ml-5">
                            2. en bas, vous pourrez visualiser le résultat de cette requête.
                        </p>
                        <p className="paragraphe">
                            Pour tester cet outil, nous allons sélectionner les polygones ayant une surface inférieure à 25 hectares.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Tapez la requête suivante (pour une base SpatiaLite ou PostGIS) :
                            </p>
                            <p className="paragraphe font-bold">
                                SELECT * FROM clc00_vignes WHERE area_ha {"<"} 25
                            </p>
                            <p className="paragraphe">
                                Puis cliquez sur le bouton <span className="font-bold">Exécuter</span> : les 10 lignes correspondant à des polygones de surface {"<"} 25 hectares s'affichent.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_requete_exemple.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <p className="paragraphe italic">
                            Les différents mots clés (select, from, where...) peuvent être écrits indifféremment en minuscules ou majuscules. De même, la requête peut être écrite en une seule ligne ou bien avec des retours à la ligne.
                        </p>
                        <p className="paragraphe">
                            Si l'on détaille cette requête ligne par ligne :
                        </p>
                        <p className="paragraphe font-bold">
                            SELECT *
                        </p>
                        <p className="paragraphe">
                            signifie que nous allons sélectionner ( <span className="font-bold">select</span> ) toutes (la mention <span className="font-bold">*</span> ) les colonnes de la table attributaire, ainsi que la géométrie, qui est considérée comme une colonne nommée geom, comme vous pouvez le vérifier dans l'onglet <span className="font-bold">Info</span>.
                        </p>
                        <p className="paragraphe font-bold">
                            FROM clc00_vignes
                        </p>
                        <p className="paragraphe">
                            signifie que nous allons sélectionner les colonnes de la couche clc00_vignes.
                        </p>
                        <p className="paragraphe font-bold">
                            WHERE area_ha {"<"} 25
                        </p>
                        <p className="paragraphe">
                            applique un critère à la requête : seules seront sélectionnées les lignes répondant à ce critère, c'est-à-dire dont la valeur pour le champ area_ha est inférieure à 25.
                        </p>
                        <p className="paragraphe">
                            Ici, la requête ne crée pas de nouvelles couches mais renvoie les lignes sélectionnées. Comment faire pour créer une nouvelle couche à partir de cette sélection ?
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Dans PostGIS, il suffira d'ajouter devant cette requête <span className="font-bold">CREATE TABLE nouvelle_table AS</span> : la requête complète sera donc
                            </p>
                            <p className="paragraphe">
                                CREATE TABLE tutoqgis.inf25ha AS <br />
                                SELECT * FROM clc00_vignes <br />
                                WHERE area_ha {"<"} 25
                            </p>
                            <p className="paragraphe">
                                pour créer une nouvelle couche nommée inf25ha dans le schéma tutoqgis par exemple.
                            </p>
                            <p className="paragraphe">
                                Cliquez sur <span className="font-bold">Exécuter</span> : aucun résultat n'est renvoyé mais une nouvelle couche est ajoutée à la base, visible après l'avoir actualisée.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_requete_exemple2.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            Pour SpatiaLite, les choses sont se compliquent un petit peu : la même requête renvoie bien une table avec les mêmes colonnes, mais la colonne <span className="font-bold">geom</span> n'est pas reconnue comme colonne de géométrie. Il s'agit d'une simple table sans composante géographique.
                        </p>
                        <p className="paragraphe">
                            Vous pouvez d'ailleurs le voir dans l'illustration ci-dessus : l'icône de inf25ha dans la base SpatiaLite est celle d'une table, alors que c'est un polygone dans la base PostGIS.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Il faudra donc lancer une deuxième requête pour que la colonne <span className="font-bold">geom</span> soit bien reconnue comme colonne de géométrie dans SpatiaLite :
                            </p>
                            <p className="paragraphe font-bold">
                                SELECT RecoverGeometryColumn('inf25ha', 'geom', 2154, 'MULTIPOLYGON', 'XY');
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_recovergeom.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Après avoir cliqué sur le bouton <span className="font-bold">Exécuter</span>, cette requête doit renvoyer la valeur <span className="font-bold">1</span> indiquant que tout s'est bien passé. Après avoir cliqué sur le bouton <span className="font-bold">Actualiser</span> en haut à gauche, inf25ha a une icône de polygone et est maintenant une couche géographique.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Pour expliquer cette requête : <span className="font-bold">RecoverGeometryColumn</span> est la fonction permettant de transformer une colonne ordinaire en colonne de géométrie (sous réserve bien sûr que son contenu corresponde bien à des géométries). Cette fonction prend plusieurs arguments :
                        </p>
                        <p className="paragraphe">
                            <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} <span className="font-bold">inf25ha</span> est le nom de la couche

                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} <span className="font-bold">geom</span> est le nom de la colonne de géométrie
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} <span className="font-bold">2154</span> est le code EPSG du SCR de la couche
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} <span className="font-bold">'MULTIPOLYGON'</span> est le type de géométries de la couche (ici, c'est le même type que la couche clc00_vignes qui a servi a créer inf25ha)
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} <span className="font-bold">'XY'</span> correspond à la dimension de la couche
                                </li>
                            </ul>
                        </p>
                        <p className="paragraphe">
                            Une autre différence entre PostGIS et SpatiaLite : dans PostGIS, il est possible de lancer plusieurs requêtes à la suite les unes des autres, pourvu que chaque requête se termine par un point-virgule. Dans SpatiaLite, il faut lancer les requêtes une à une, en cliquant sur le bouton Exécuter entre chaque.
                        </p>
                        <p className="paragraphe">
                            Nous allons maintenant utiliser des requêtes plus complexes pour créer une grille !
                        </p>
                    </div>
                </div>
            </div>

            <div id="txcreategrillet" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Création d'une grille
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Notre première étape consiste à créer une grille ayant la même étendue que notre couche <span className="font-bold">clc00_vignes</span>, avec une maille de 50km. C'est l'équivalent de <a href="#" className="lien">cette étape</a> réalisée au chapitre précédent.
                        </p>
                        <p className="paragraphe">
                            Il existe dans SpatiaLite une fonction spécifique pour créer une grille ; la fonction équivalente n'est accessible dans PostGIS qu'à partir de la version 3.1. A moins de disposer de cette version, il faudra donc utiliser une fonction « fait maison ».
                        </p>
                        <h6 className="sous-titre-italic" id="whtspa">
                            Créer une grille avec SpatiaLite
                        </h6>
                        <p className="paragraphe">
                            Dans SpatiaLite, nous allons pouvoir utiliser la fonction ST_SquareGrid. 4 étapes seront nécessaires :
                        </p>
                        <p className="paragraphe ml-5">
                            1. Création d'une table vide
                        </p>
                        <p className="paragraphe ml-5">
                            2. Ajout d'une colonne de géométrie à cette table
                        </p>
                        <p className="paragraphe ml-5">
                            3. Mise à jour de cette colonne pour créer une grille avec une seule entité multiparties
                        </p>
                        <p className="paragraphe ml-5">
                            4. Séparation de l'entité multiparties pour que 1 case = 1 polygone
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Pour créer une table vide avec une clé primaire id, la requête est la suivante :
                            </p>
                            <p className="paragraphe font-bold">
                                CREATE TABLE grid00 (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT);
                            </p>
                            <p className="paragraphe">
                                Après avoir exécuté cette requête et actualisé la base, la table grid00 est visible. Elle ne comporte aucune ligne et une seule colonne <span className="font-bold">id</span>.
                            </p>
                            <p className="paragraphe">
                                Il faut ensuite lui ajouter une colonne de géométrie de type multipolygone :
                            </p>
                            <p className="paragraphe font-bold">
                                SELECT AddGeometryColumn('grid00','geom',2154,'MULTIPOLYGON','XY');
                            </p>
                            <p className="paragraphe">
                                La table est maintenant une couche de polygones avec une colonne de géométrie <span className="font-bold">geom</span>. Elle ne contient encore aucune entité, ce que vous pouvez vérifier dans les onglets table et aperçu.
                            </p>
                            <p className="paragraphe">
                                Il ne reste plus qu'à mettre à jour la géométrie avec la fonction <a href="http://www.gaia-gis.it/gaia-sins/spatialite-sql-5.0.0.html" className="lien">ST_SquareGrid</a> :
                            </p>
                            <p className="paragraphe font-bold">
                                INSERT INTO grid00 (geom) SELECT ST_SquareGrid(Extent(v.geom), 50000) AS geom FROM clc00_vignes AS v
                            </p>
                            <p className="paragraphe">
                                Cette dernière requête créer une grille avec la même étendue que clc00_vignes, et une maille de 50 km. La fonction <span className="font-bold">ST_SquareGrid</span> prend 2 arguments :
                            </p>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} une géométrie correspondant à l'étendue de la grille, ici l'étendue de clc00_vignes récupérée au moyen de la fonction <span className="font-bold">Extent</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} la taille de maille dans le SCR de la couche, ici 50 000 mètres
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Notez également que pour simplifier la requête, la couche clc00_vignes est appelée v : <span className="font-bold"> clc00_vignes AS v</span>. On peut donc y faire référence dans le reste de la requête par la lettre v sans taper son nom complet.
                            </p>
                            <p className="paragraphe">
                                Vous pouvez ajouter cette couche à QGIS en double-cliquant sur son nom :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_grille_res.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Cependant, cette couche ne contient qu'une seule entité multi-partie : vous ne pouvez pas sélectionner une seule case. Une dernière requête est donc nécessaire :
                            </p>
                            <p className="paragraphe font-bold">
                                SELECT ElementaryGeometries('grid00', 'geom', 'grid00_sp','gid','fid') as geom FROM grid00
                            </p>
                            <p className="paragraphe">
                                Ici, nous utilisons la fonction <span className="font-bold">ElementaryGeometries</span> pour passer d'une couche de multipolygones à une couche de polygone. Cette fonction utilise les arguments suivants :
                            </p>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}  le nom de la couche multipartie, ici <span className="font-bold">grid00</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} le nom de la colonne de géométrie de la couche en entrée, ici <span className="font-bold">geom</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} le nom de la nouvelle couche qui sera créée, ici <span className="font-bold">grid00_sp</span> (pour <span className="font-bold">s</span>ingle <span className="font-bold">p</span>art)

                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} l'identifiant de la couche en entrée, ici <span className="font-bold">gid</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} l'identifiant de la couche en sortie (à créer), ici <span className="font-bold">fid</span>
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                La couche <span className="font-bold text-green-400">grid00_sp</span> comporte maintenant autant d'entités que de cases et est de type POLYGON. Il est possible de sélectionner une seule case.
                            </p>
                        </div>
                        <h6 className="sous-titre-italic" id="creategripost">
                            Créer une grille avec PostGIS
                        </h6>
                        <p className="paragraphe">
                            Malheureusement, la fonction ST_SquareGrid permettant la génération d'une grille avec PostGIS n'est accessible qu'à partir de la version 3.1. A moins de disposer de cette version, il faudra donc utiliser notre propre fonction !
                        </p>
                        <p className="paragraphe">
                            Une <a href="https://gis.stackexchange.com/a/23541/175131" className="lien">fonction</a> est un bout de code pouvant être « appelé ». C'est en quelque sorte un raccourci qui permet d'éviter de taper une série d'instructions, en tapant seulement le nom de cette série d'instructions.
                        </p>
                        <p className="paragraphe">
                            Les fonctions peuvent prendre des arguments en entrée : par exemple, une couche, une taille de maille... Et peuvent renvoyer un résultat un sortie, par exemple une grille.
                        </p>
                        <p className="paragraphe">
                            Nous allons ici utiliser cette <a href="https://gis.stackexchange.com/a/23541/175131" className="lien">fonction</a> créée par Alexander Palamarchuk pour générer une grille.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Dans la fenêtre du gestionnaire de bases de données, après avoir sélectionné la base PostGIS, ouvrez un nouvel onglet de requête (menu Base de données → Fenêtre SQL).
                            </p>
                            <p className="paragraphe">
                                Copiez et coller le code suivant dans cet onglet, issu de <a href="https://gis.stackexchange.com/a/23541/175131" className="lien">ce post sur StackExchange</a> (la seule modification est celle du code EPSG du SCR : 2154 au lieu de 28408) :
                            </p>
                            <p className="paragraphe">
                                CREATE OR REPLACE FUNCTION public.makegrid_2d (
                            </p>
                            <p className="paragraphe">
                                bound_polygon public.geometry,
                            </p>
                            <p className="paragraphe">
                                grid_step integer,
                            </p>
                            <p className="paragraphe">
                                metric_srid integer = 2154 --metric SRID
                            </p>
                            <p className="paragraphe">
                                )
                            </p>
                            <p className="paragraphe">
                                RETURNS public.geometry AS
                            </p>
                            <p className="paragraphe">
                                $body$
                            </p>
                            <p className="paragraphe">
                                DECLARE
                            </p>
                            <p className="paragraphe">
                                BoundM public.geometry; --Bound polygon transformed to the metric projection (with metric_srid SRID)
                            </p>
                            <p className="paragraphe">
                                Xmin DOUBLE PRECISION;
                            </p>
                            <p className="paragraphe">
                                Xmax DOUBLE PRECISION;
                            </p>
                            <p className="paragraphe">
                                Ymax DOUBLE PRECISION;
                            </p>
                            <p className="paragraphe">
                                X DOUBLE PRECISION;
                            </p>
                            <p className="paragraphe">
                                Y DOUBLE PRECISION;
                            </p>
                            <p className="paragraphe">
                                sectors public.geometry[];
                            </p>
                            <p className="paragraphe">
                                i INTEGER;
                            </p>
                            <p className="paragraphe">
                                BEGIN
                            </p>
                            <p className="paragraphe">
                                BoundM := ST_Transform($1, $3); --From WGS84 (SRID 4326) to the metric projection, to operate with step in meters
                            </p>
                            <p className="paragraphe">
                                Xmin := ST_XMin(BoundM);
                            </p>
                            <p className="paragraphe">
                                Xmax := ST_XMax(BoundM);
                            </p>
                            <p className="paragraphe">
                                Ymax := ST_YMax(BoundM);
                            </p>
                            <p className="paragraphe">
                                Y := ST_YMin(BoundM); --current sector's corner coordinate

                            </p>
                            <p className="paragraphe">
                                i := -1;
                            </p>
                            <p className="paragraphe">
                                {"<<yloop>>"}
                            </p>
                            <p className="paragraphe">
                                LOOP
                            </p>
                            <p className="paragraphe">
                                IF (Y {">"}= Ymax) THEN  --Better if generating polygons exceeds the bound for one step. You always can crop the result. But if not you may get not quite correct data for outbound polygons (e.g. if you calculate frequency per sector)
                            </p>
                            <p className="paragraphe">
                                EXIT;
                            </p>
                            <p className="paragraphe">
                                END IF;
                            </p>
                            <p className="paragraphe">
                                X := Xmin;
                            </p>
                            <p className="paragraphe">
                                {"<<xloop>>"}
                            </p>
                            <p className="paragraphe">
                                LOOP
                            </p>
                            <p className="paragraphe">
                                IF (X {">"}= Xmax) THEN
                            </p>
                            <p className="paragraphe">
                                EXIT;
                            </p>
                            <p className="paragraphe">
                                END IF;
                            </p>
                            <p className="paragraphe">
                                i := i + 1;
                            </p>
                            <p className="paragraphe">
                                sectors[i] := ST_GeomFromText('POLYGON(('||X||' '||Y||', '||(X+$2)||' '||Y||', '||(X+$2)||' '||(Y+$2)||', '||X||' '||(Y+$2)||', '||X||' '||Y||'))', $3);
                            </p>
                            <p className="paragraphe">
                                X := X + $2;
                            </p>
                            <p className="paragraphe">
                                END LOOP xloop;
                            </p>
                            <p className="paragraphe">
                                Y := Y + $2;
                            </p>
                            <p className="paragraphe">
                                END LOOP yloop;
                            </p>
                            <p className="paragraphe">
                                RETURN ST_Transform(ST_Collect(sectors), ST_SRID($1));
                            </p>
                            <p className="paragraphe">
                                END;
                            </p>
                            <p className="paragraphe">
                                $body$
                            </p>
                            <p className="paragraphe">
                                LANGUAGE 'plpgsql';
                            </p>
                            <p className="paragraphe">
                                Cliquez sur <span className="font-bold">Exécuter</span> : aucun résultat n'est renvoyé.
                            </p>
                        </div>
                        <p className="paragraphe">
                            La fonction <span className="font-bold">makegrid_2d</span> est maintenant accessible dans PostGIS : vous n'aurez plus besoin de retaper ce code.
                        </p>
                        <p className="paragraphe">
                            Il ne reste plus qu'à appeler cette fonction avec en entrée :
                        </p>
                        <p className="paragraphe">
                            <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "}  l'étendue de la grille, c'est-à-dire l'étendue de <span className="font-bold text-green-400">clc00_vignes</span>
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} la taille de maille, soit 50 000 mètres
                                </li>
                            </ul>
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Lancez la requête suivante :
                            </p>
                            <p className="paragraphe">
                                CREATE TABLE tutoqgis.grid00 as
                            </p>
                            <p className="paragraphe">
                                SELECT row_number() over () as gid, geom FROM
                            </p>
                            <p className="paragraphe">
                                (SELECT (ST_Dump(makegrid_2d(
                            </p>
                            <p className="paragraphe">
                                (select st_setsrid(st_extent(geom), 2154) from tutoqgis.clc00_vignes),
                            </p>
                            <p className="paragraphe">
                                50000)
                            </p>
                            <p className="paragraphe">
                                )).geom AS geom) AS q_grid;
                            </p>
                        </div>
                        <p className="paragraphe">
                            Quelques explications, cette fois-ci nous prendrons cette requête non plus ligne par ligne, mais fonction par fonction...
                        </p>
                        <p className="paragraphe italic">
                            Une petite astuce : en cliquant sur une parenthèse ouvrante ou fermante dans l'onglet de requête du gestionnaire de bases de données, cette parenthèse et son alter ego sont surlignées en vert, ce qui permet de mieux comprendre l'emboîtement des fonctions.
                        </p>
                        <p className="paragraphe">
                            create table tutoqgis.grid00 as
                        </p>
                        <p className="paragraphe">
                            Cette première ligne veut simplement dire que cette requête va créer une nouvelle table nommée <span className="font-bold">grid00</span> dans le schéma <spn className="font-bold">tutoqgis</spn>.
                        </p>
                        <p className="paragraphe">
                            SELECT row_number() over () as gid, geom FROM (SELECT...) AS q_grid
                        </p>
                        <p className="paragraphe">
                            Cette nouvelle table contiendra 2 colonnes : une colonne <span className="font-bold">gid</span> d'identifiant unique, créée avec la fonction <a href="https://www.postgresql.org/docs/current/functions-window.html" className="lien">row_number()</a>, et une colonne de géométrie <span className="font-bold">geom</span> . Comme la table est créée à partir d'un deuxième <span className="font-bold">SELECT</span>, il faut donner un nom (alias) à cette sous-requête, ici <span className="font-bold">q_grid</span>.
                        </p>
                        <p className="paragraphe italic">
                            Vous pouvez essayer de relancer la requête en omettant la partie AS q_grid, vous obtiendrez un message d'erreur vous indiquant que la sous-requête doit avoir un alias : ERROR: subquery in FROM must have an alias.
                        </p>
                        <p className="paragraphe">
                            (SELECT (ST_Dump(...)).geom AS geom
                        </p>
                        <p className="paragraphe">
                            La sous-requête utilise la fonction <a href="https://postgis.net/docs/ST_Dump.html" className="lien">ST_Dump</a>, qui permet de créer des entités à une seule partie. Pour récupérer une géométrie en retour avec cette fonction, on a ajouté <span className="font-bold">.geom</span>, et pour nommer cette géométrie geom <span className="font-bold"> AS geom</span>.
                        </p>
                        <p className="paragraphe">
                            makegrid_2d(..., ...)
                        </p>
                        <p className="paragraphe">
                            La fonction <span className="font-bold">ST_Dump</span> prend un seul paramètre en entrée correspondant à une géométrie. Ici, cette géométrie sera celle renvoyée en sortie par la fonction <span className="font-bold">st_makegrid</span> créée précédemment, qui prend elle en entrée 2 arguments, séparés par une virgule.
                        </p>
                        <p className="paragraphe">
                            SELECT ST_SetSRID(ST_Extent(geom), 2154) FROM tutoqgis.clc00_vignes
                        </p>
                        <p className="paragraphe">
                            Le premier argument de la fonction <span className="font-bold">makegrid_2d</span> correspond à une étendue. On utilise pour la créer la fonction <a href="https://postgis.net/docs/ST_Extent.html" className="lien">ST_Extent</a> sur la couche <span className="font-bold">clc00_vignes</span>. Il faut également attribuer un système de coordonnées (SRID dans la jargon PostGIS) à cette étendue, ce qui est fait avec la fonction <a href="https://postgis.net/docs/ST_SetSRID.html" className="lien">St_SetSRID</a>, qui utilise 2 paramètres : le résultat de <span className="font-bold">ST_Extent</span>, et le code EPSG <span className="font-bold">2154</span> (RGF93 Lambert 93).
                        </p>
                        <p className="paragraphe">
                            50000
                        </p>
                        <p className="paragraphe">
                            <span className="font-bold">50000</span> est le deuxième paramètre utilisé par la fonction <span className="font-bold">makegrid_2d</span>, qui correspond à la longueur du côté d'une maille dans le SCR utilisé (ici Lambert 93, donc en mètres).
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Actualisez la base : la couche grid00 est visible, on peut l'ajouter à QGIS, mais son type de géométrie n'est pas reconnu. Pour cela, une dernière requête :
                            </p>
                            <p className="paragraphe">
                                Select populate_geometry_columns()
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_grille_postgis_res.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            A ce stade, si vous avez suivi le <a href="#" className="lien">chapitre précédent</a> et créé une grille avec l'outil <span className="font-bold">Créer une grille</span> de QGIS, l'opération paraît bien plus compliquée en SQL. Avec un peu de chance la partie suivante vous donnera l'impression inverse !
                        </p>
                    </div>
                </div>
            </div>

            <div id="uniagreg" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Union et agrégation
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Nous allons maintenant donner à chaque case de cette grille une valeur correspondant à sa surface en vignes, à partir de la couche <span className="font-bold text-green-400">clc00_vignes</span>.
                        </p>
                        <p className="paragraphe">
                            Cette opération regroupe les 3 parties du chapitre précédent : <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/09_04_maillage.html#IX43" className="lien">union</a>, <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/09_04_maillage.html#IX44" className="lien">recalcul de la surface</a> et <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/09_04_maillage.html#IX45" className="lien"> agrégation des données par maille </a> (je vous avais bien dit que le SQL avait des avantages).
                        </p>
                        <p className="paragraphe">
                            Comme d'habitude, à vous de choisir votre logiciel préféré pour cette opération, qui nécessite donc 2 couches : une grille, et une couche de polygones.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                La requête est la même pour SpatiaLite et PostGIS, il faut juste ajouter le nom du schéma <span className="font-bold">tutoqgis</span> pour PostGIS, et exécuter la requête sur <span className="font-bold">grid00_sp</span> et non <span className="font-bold">grid00</span> pour SpatiaLite.
                            </p>
                            <p className="paragraphe">
                                SpatiaLite :
                            </p>
                            <p className="paragraphe">
                                CREATE TABLE grid00_surf AS  <br />
                                SELECT g.gid, g.geom, sum(ST_Area(ST_Intersection(v.geom, g.geom)))/10000 AS surf <br />
                                FROM grid00_sp AS g, clc00_vignes AS v <br />
                                WHERE ST_Intersects(g.geom, v.geom) <br />
                                GROUP BY g.gid, g.geom <br />
                                ORDER BY g.gid
                            </p>
                            <p className="paragraphe">
                                PostGIS :
                            </p>
                            <p className="paragraphe">
                                CREATE TABLE tutoqgis.grid00_surf AS <br />
                                SELECT g.gid, g.geom, sum(ST_Area(ST_Intersection(v.geom, g.geom)))/10000 AS surf <br />
                                FROM tutoqgis.grid00 AS g, tutoqgis.clc00_vignes AS v <br />
                                WHERE ST_Intersects(g.geom, v.geom) <br />
                                GROUP BY g.gid, g.geom <br />
                                ORDER BY g.gid
                            </p>
                            <p className="paragraphe">
                                Exécutez cette requête dans SpatiaLite ou PostGIS.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Comment fonctionne cette requête ? Prenons ses lignes une à une, mais dans le désordre (ici il s'agit de la requête PostGIS, mais les explications sont les mêmes pour SpatiaLite) :
                        </p>
                        <p className="paragraphe">
                            CREATE TABLE tutoqgis.grid00_surf AS
                        </p>
                        <p className="paragraphe">
                            Pas de souci ici, il s'agit de créer une table nommée <span className="font-bold">grid00_surf</span> dans le schéma <span className="font-bold">tutoqgis</span>. On passe 2 lignes plus loin !
                        </p>
                        <p className="paragraphe">
                            FROM tutoqgis.grid00 AS g, tutoqgis.clc00_vignes AS v
                        </p>
                        <p className="paragraphe">
                            Comme prévu, cette requête va utiliser les 2 couches <span className="font-bold">grid00</span> et <span className="font-bold">clc00_vignes</span>, toutes 2 dans le schéma <span className="font-bold">tutoqgis</span>. Dans le reste de la requête, on se référera à ces tables par leur alias : <span className="font-bold">g</span> pour la grille, <span className="font-bold">v</span> pour les vignes. On remonte à la ligne du dessus...
                        </p>
                        <p className="paragraphe italic">
                            Si on veut relancer cette requête sur d'autres couches, grâce à l'alias il n'y aura besoin de modifier les noms des couches qu'à un seul endroit !
                        </p>
                        <p className="paragraphe">
                            SELECT g.gid, g.geom, sum(ST_Area(ST_Intersection(v.geom, g.geom)))/10000 AS surf
                        </p>
                        <p className="paragraphe">
                            La couche créée va comporter 3 colonnes :
                        </p>
                        <p className="paragraphe">
                            <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "}   La colonne d'identifiant unique <span className="font-bold">gid</span>
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} Une colonne de géométrie, identique à celle de la couche <span className="font-bold">grid00</span>
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} Une colonne nommée <span className="font-bold">surf</span>, correspondant à la somme (fonction <a href="https://sql.sh/fonctions/agregation/sum" className="lien">SUM</a> ) des surfaces du résultat de l'intersection entre la grille et les vignes (fonction <a href="http://www.postgis.fr/chrome/site/docs/workshop-foss4g/doc/geometry_returning.html#st-intersection" className="lien">ST_Intersection</a> ). On divise cette somme par 10 000 pour obtenir non plus des surfaces en mètres mais en hectares.
                                </li>
                            </ul>
                        </p>
                        <p className="paragraphe">
                            On descend 2 lignes plus bas...
                        </p>
                        <p className="paragraphe">
                            GROUP BY g.gid, g.geom
                        </p>
                        <p className="paragraphe">
                            La clause <a href="https://sql.sh/cours/group-by" className="lien">GROUP BY</a> permet de regrouper toutes les entités ayant la même valeur de géométrie et d'identifant. Elle implique d'utiliser une fonction d'agrégation pour les colonnes autres que <span className="font-bold">geom</span> et <span className="font-bold">gid</span>. Ici, c'est la fonction d'agrégation <span className="font-bold">SUM</span> qui est utilisée dans la deuxième ligne de la requête pour créer la colonne <span className="font-bold">surf</span>.
                        </p>
                        <p className="paragraphe">
                            La requête pourrait être lancée telle quelle. Pour qu'elle soit moins longue à s'exécuter, on a rajouté la ligne
                        </p>
                        <p className="paragraphe">
                            WHERE ST_Intersects(g.geom, v.geom)
                        </p>
                        <p className="paragraphe">
                            qui permet de ne prendre en compte que les cases de la grille qui sont superposées avec des vignes. Avec ce critère, la table créée ne contient donc que ces cases. Vous pouvez tester en supprimant cette ligne, le résultat sera un peu plus long à créer.
                        </p>
                        <p className="paragraphe">
                            ORDER BY g.gid
                        </p>
                        <p className="paragraphe">
                            Enfin, cette dernière ligne, optionnelle, permet de choisir l'ordre des lignes dans la table, ici un ordre croissant sur le champ gid.
                        </p>
                        <p className="paragraphe">
                            Si vous utilisez SpatiaLite, il reste une requête pour que la colonne géométrie soit reconnue en tant que telle.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Exécutez cette requête sur votre base SpatiaLite :
                            </p>
                            <p className="paragraphe">
                                SELECT RecoverGeometryColumn('grid00_surf', 'geom', 2154, 'POLYGON', 'XY');
                            </p>
                            <p className="paragraphe">
                                Elle doit renvoyer la valeur 1.
                            </p>
                        </div>
                        <p className="paragraphe">
                            On peut maintenant visualiser le résultat, que vous ayiez utilisé SpatiaLite ou PostGIS.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Ajoutez la couche créée à QGIS. Vous pouvez par exemple lui attribuer un style gradué pour visualiser la présence de vignes :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_vignes_jenks7.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            Avec 5 ou 6 lignes de SQL, vous avez accompli l'équivalent de 3 outils QGIS et de beaucoup de clics !
                        </p>
                        <p className="paragraphe">
                            Et surtout, il sera très facile de relancer toute cette opération sur d'autres données, comme nous allons le faire ci-dessous.
                        </p>
                    </div>
                </div>
            </div>

            <div id="temporelle" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Évolution temporelle : soustraction de 2 maillages
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <h6 className="sous-titre-italic" id="corine">
                            Relancer l'opération sur les données Corine Land Cover 2012
                        </h6>
                        <p className="paragraphe">
                            Nous avons jusqu'ici travaillé sur les données Corine Land Cover 2000. Nous allons maintenant utiliser les données équivalentes pour l'année 2012, ce qui nous permettra de visualiser l'évolution entre ces 2 années.
                        </p>
                        <p className="paragraphe">
                            Nous allons donc relancer l'opération précédente (union et agrégation) sur la couche CLC 2012.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Ajoutez à QGIS la couche <a href="http://www.donnees.statistiques.developpement-durable.gouv.fr/donneesCLC/CLC/millesime/CLC12_FR_RGF_SHP.zip" className="lien">CLC12_FR_RGF</a> ou <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_09_AnalyseSpat.zip" className="le">CLC12_221_FR_RGF</a>. Sélectionnez éventuellement les vignes ("CODE_12" = '221') et <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/09_05_maillage_sql.html#IX52" className="lien">importez-les</a> dans votre base SpatiaLite ou PostGIS sous le nom <span className="font-bold">clc12_vignes</span>.
                            </p>
                            <p className="paragraphe">
                                Il faut ensuite relancer les mêmes requêtes que précédemment, en remplaçant les noms des couches :
                            </p>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}   <span className="font-bold">clc00_vignes</span> par <span className="font-bold">clc12_vignes</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} <span className="font-bold">grid00</span> par <span className="font-bold">grid12</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} <span className="font-bold">grid00_sp</span> par <span className="font-bold">grid12_sp</span> (pour SpatiaLite)
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} <span className="font-bold">grid00_surf</span> par <span className="font-bold">grid12_surf</span>
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Attention, pour que les 2 grilles 2000 et 2012 se superposent exactement, nous allons créer la grille 2012 avec la même étendue que la couche clc00_vignes et non clc12_vignes (ce qui est possible car il n'existe pas de nouvelles vignes en 2012 hors emprise de la couche 2000).
                            </p>
                            <p className="paragraphe">
                                Pour SpatiaLite :
                            </p>
                            <p className="paragraphe">
                                CREATE TABLE grid12 (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT);
                            </p>
                            <p className="paragraphe">
                                SELECT AddGeometryColumn('grid12','geom',2154,'MULTIPOLYGON','XY');
                            </p>
                            <p className="paragraphe">
                                INSERT INTO grid12 (geom) SELECT ST_SquareGrid(Extent(v.geom), 50000) AS geom
                            </p>
                            <p className="paragraphe">
                                FROM clc00_vignes AS v;
                            </p>
                            <p className="paragraphe">
                                SELECT ElementaryGeometries('grid12', 'geom', 'grid12_sp','gid','fid') as geom
                            </p>
                            <p className="paragraphe">
                                FROM grid12;
                            </p>
                            <p className="paragraphe">
                                CREATE TABLE grid12_surf AS
                            </p>
                            <p className="paragraphe">
                                SELECT g.gid, g.geom, sum(ST_Area(ST_Intersection(v.geom, g.geom)))/10000 AS surf
                            </p>
                            <p className="paragraphe">
                                FROM grid12_sp AS g, clc12_vignes AS v
                            </p>
                            <p className="paragraphe">
                                WHERE ST_Intersects(g.geom, v.geom)
                            </p>
                            <p className="paragraphe">
                                GROUP BY g.gid, g.geom
                            </p>
                            <p className="paragraphe">
                                ORDER BY g.gid;
                            </p>
                            <p className="paragraphe">
                                SELECT RecoverGeometryColumn('grid12_surf', 'geom', 2154, 'POLYGON', 'XY');
                            </p>
                            <p className="paragraphe">
                                Pour PostGIS :
                            </p>
                            <p className="paragraphe">
                                CREATE TABLE tutoqgis.grid12 as
                            </p>
                            <p className="paragraphe">
                                SELECT row_number() over () as gid, geom FROM
                            </p>
                            <p className="paragraphe">
                                (SELECT (ST_Dump(makegrid_2d(
                            </p>
                            <p className="paragraphe">
                                (select st_setsrid(st_extent(geom), 2154) from tutoqgis.clc00_vignes),
                            </p>
                            <p className="paragraphe">
                                50000)
                            </p>
                            <p className="paragraphe">
                                )).geom AS geom) AS q_grid;
                            </p>
                            <p className="paragraphe">
                                Select populate_geometry_columns();
                            </p>
                            <p className="paragraphe">
                                CREATE TABLE tutoqgis.grid12_surf AS
                            </p>
                            <p className="paragraphe">
                                SELECT g.gid, g.geom, sum(ST_Area(ST_Intersection(v.geom, g.geom)))/10000 AS surf
                            </p>
                            <p className="paragraphe">
                                FROM tutoqgis.grid12 AS g, tutoqgis.clc12_vignes AS v
                            </p>
                            <p className="paragraphe">
                                WHERE ST_Intersects(g.geom, v.geom)
                            </p>
                            <p className="paragraphe">
                                GROUP BY g.gid, g.geom
                            </p>
                            <p className="paragraphe">
                                ORDER BY g.gid;
                            </p>
                        </div>
                        <p className="paragraphe">
                            Rapide, non ? Quand vous travaillez avec des requêtes SQL, une pratique peut être de copier les requêtes dans un fichier texte. Ainsi vous en gardez la mémoire, et si vous avez besoin de les relancer sur d'autres données, il vous suffira de faire un rechercher-remplacer sur les noms des couches, puis de recopier ces requêtes dans le gestionnaire de bases de données QGIS.
                        </p>
                        <p className="paragraphe">
                            Il est possible en SQL d'ajouter des <a href="https://sql.sh/cours/commentaires" className="lien">commentaires</a>, non pris en compte : la ligne doit alors être précédée par 2 tirets. Ceci vous permet d'expliquer vos requêtes, ce qui est toujours utile quand on reprend un travail quelques semaines/mois/années plus tard, ou pour vos collègues.
                        </p>
                        <h6 className="sous-titre-italic" id="soustraction">
                            Soustraire les 2 maillages 2012 et 2000
                        </h6>
                        <p className="paragraphe">
                            En guise de dernière application pour ce chapitre, nous allons voir 2 manières de visualiser l'évolution de la surface en vignes entre 2000 et 2012 :
                        </p>
                        <p className="paragraphe">
                            <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} Avec des requêtes SQL
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} En mode raster
                                </li>
                            </ul>
                        </p>
                        <p className="paragraphe">
                            On pourrait aussi travailler en mode raster avec des requêtes SQL ! Mais ce chapitre est déjà bien rempli.
                        </p>
                        <p className="paragraphe">
                            L'idée est donc de soustraire pour chaque case de grille les données 2000 aux données 2012, afin de visualiser une évolution, négative ou positive.
                        </p>
                        <p className="paragraphe">
                            Si on utilise le langage SQL, on va pouvoir faire une <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/08_01_jointure_attrib.html" className="lien">jointure attributaire</a> sur le champ gid entre les 2 couches <span className="font-bold text-green-400">grid00_surf</span> et <span className="font-bold text-green-400">gri12_surf</span>.
                        </p>
                        <p className="paragraphe">
                            La requête sera la même pour SpatiaLite et PostGIS, il faut simplement ajouter le nom du schéma <span className="font-bolod">tutoqgis</span> devant le nom des tables pour PostGIS, et mettre à jour la colonne de géométrie pour SpatiaLite.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                SpatiaLite :
                            </p>
                            <p className="paragraphe">
                                CREATE TABLE evol_00_12 AS <br />
                                SELECT g1.gid, (g2.surf - g1.surf) AS diff_surf, g1.geom <br />
                                FROM grid00_surf AS g1, grid12_surf AS g2 <br />
                                WHERE g1.gid = g2.gid;
                            </p>
                            <p className="paragraphe">
                                SELECT RecoverGeometryColumn('evol_00_12', 'geom', 2154, 'POLYGON', 'XY');
                            </p>
                            <p className="paragraphe">
                                PostGIS :
                            </p>
                            <p className="paragraphe">
                                CREATE TABLE tutoqgis.evol_00_12 AS <br />
                                SELECT g1.gid, (g2.surf - g1.surf) AS diff_surf, g1.geom <br />
                                FROM tutoqgis.grid00_surf AS g1, tutoqgis.grid12_surf AS g2 <br />
                                WHERE g1.gid = g2.gid;
                            </p>
                        </div>
                        <p className="paragraphe">
                            Cette requête crée une couche <span className="font-bold">evol_00_12</span> avec 3 colonnes :
                        </p>
                        <p className="paragraphe">
                            <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} <span className="font-bold">gid</span>, ici en récupérant le champ gid de la couche grid00 (mais on aurait très bien pu remplacer g1.gid par g2.gid, le résultat serait le même)
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} une colonne <span className="font-bold">diff_surf</span> correspondant à la différence de surface en vignes entre 2012 et 2000
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} la géométrie <span className="font-bold">geom</span>, idem on aurait pu remplacer g1.geom par g2.geom
                                </li>
                            </ul>
                        </p>
                        <p className="paragraphe">
                            La ligne
                        </p>
                        <p className="paragraphe">
                            WHERE g1.gid = g2.gid
                        </p>
                        <p className="paragraphe">
                            est celle qui fait la jointure entre les 2 couches, sur le champ <span className="font-bold">gid</span>.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Pour visualiser cette évolution, ajoutez la couche à QGIS, avec un style gradué :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_evol_gradue.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}  Style <span className="font-bold">gradué...</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} ...sur le champ <span className="font-bold">diff_surf</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}     Sélectionnez une palette de couleur divergente, pour représenter d'une couleur les diminutions et d'une autre les augmentations
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Choissisez une discrétisation par intervalles égaux
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Cliquez sur le bouton <span className="font-bold">Classer</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Cochez la case <span className="font-bold">Classification symétrique</span>, pour représenter avec la même intensité de couleur des variations positives et négatives de même ampleur, avec comme valeur du milieu <span className="font-bold">0</span>
                                    </li>
                                </ul>
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_evol_res.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Une taille de maille différente donnerait un résultat différent !
                            </p>
                        </div>
                        <p className="paragraphe">
                            Une autre manière de faire pour cette opération est de convertir les 2 maillages en rasters, et de soustraire ces rasters l'un à l'autre.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Ouvrez un nouveau projet QGIS, ajoutez-y vos 2 couches SpatiaLite ou PostGIS <span className="font-bold text-green-400">grid00_surf</span> et <span className="font-bold text-green-400">grid12_surf</span>.
                            </p>
                            <p className="paragraphe">
                                Dans la boîte à outils, cherchez l'outil GDAL <span className="font-bold"> Rasteriser (vecteur vers raster) </span> :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_rasteriser_emplacement.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Double-cliquez sur cet outil :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_rasteriser_fenetre.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}   Couche source : sélectionnez la couche <span className="font-bold">grid00_surf</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Champ à utiliser : sélectionnez le champ <span className="font-bold">surf</span>, chaque pixel du raster aura ainsi la valeur correspondante de ce champ
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Unité du raster résultat : afin de pouvoir fixer la taille du pixel en mètres et non le nombre de pixel du raster résultat, sélectionnez <span className="font-bold">Unités géoréférencées</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Largeur/Résolution horizontale et verticale : tapez <span className="font-bold">50 000</span> pour une taille de pixel de 50 km, identique à celle du maillage d'origine
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Emprise du résultat : cliquez sur les ... à droite et sélectionnez la couche <span className="font-bold">grid00_surf</span>, pour que le futur raster ait la même étendue que le maillage d'origine
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Vous pouvez choisir de créer un fichier temporaire ou bien d'enregistrer le résultat sur votre ordinateur.
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Lancez la rastérisation... La couche résultat est automatiquement ajoutée à QGIS, et se superpose avec la couche grid00_surf :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_rasteriser_res.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Si vous avez créé une couche temporaire, renommez-la par exemple <span className="font-bold">rast00</span> (en la sélectionnant puis en appuyant sur la touche F2) afin de ne pas la confondre avec le deuxième raster sur 2012 par la suite.
                            </p>
                            <p className="paragraphe">
                                Effectuez la même opération sur la couche <span className="font-bold">grid12_surf</span> pour créer un deuxième raster. Si c'est une couche temporaire, renommez-la par exemple <span className="font-bold">rast12</span>.
                            </p>
                            <p className="paragraphe">
                                Il ne reste plus qu'à soustraire ces 2 rasters au moyen de la calculatrice raster.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_rastercalc_emplacement.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_rastercalc_fenetre.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}   Expression : double-cliquez sur la couche <span className="font-bold">rast12</span> , tapez le signe - (ou cliquez sur ce signe dans les opérateur), puis double-cliquez sur la couche <span className="font-bold">rast00</span>. L'expression finale est <span className="font-bold">"rast12@1" - "rast00@1"</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Reference layer : cliquez sur les ... tout à droite, et sélectionnez l'une ou l'autre couche <span className="font-bold">rast00 ou rast12</span> : la couche créée aura la même emprise, résolution et SCR que cette couche de référence
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Output : vous pouvez soit créer une couche temporaire, soit enregistrer cette couche sur votre ordinateur
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Par défaut, le résultat s'affiche en niveau de gris :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_evol_raster1.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Pour une représentation similaire à celle obtenue plus haut, il faut paramétrer le style de ce raster (cliquez sur l'image pour la voir en plus grand) :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_evolraster_discretisation.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}  Type de rendu : <span className="font-bold"> pseudo-couleur à bande unique</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Interpolation : <span className="font-bold">discrète</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Palette de couleur : choisissez une gamme de couleur divergente, pour représenter d'une couleur les diminutions, et d'une autre les augmentations
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Cliquez ensuite sur <span className="font-bold">Classer</span> pour créer 5 classes
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Valeurs de classes : ici, pas de possibilité de spécifier une discrétisation symétrique autour de 0. Le plus simple est donc de recopier les limites de classes obtenues plus haut pour la couche vecteur. Attention, il s'agit des bornes supérieures des classes !
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Au final, le résultat est identique à celui obtenu en mode vecteur :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_5_evolraster_res.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            Bravo, vous êtes arrivés au bout de ce chapitre ! Vous pouvez vous reposer avec le suivant sur les modes de représentation et la mise en page de cartes.
                        </p>

                    </div>
                </div>
            </div>

            {/* if i could turn back the clock  , i'd make sure the light defeated the dark  ,  i/d spend every hour  , of every day keeping you safe  , cuz i need you */}
            {/* so wake me up when they build a time machine  ,  i wanna go back  ,  wake me up when you are sleeping next to me ,  cuz i really loved you                  */}
            {/* Meet me at the bottom of the ocean ,  where the time is frozen  ,  where all the universe is open  ,  love isn.t random we are chosen  ,  and we could wear the same crowm  , keep slowing your heart done  ,  we are the gods now  cuz i lov you for the infinity  */}

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/analyse-spatiale/creer-maillage"
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
                        to="/app/plan-detailler/representation-et-mis-en-page"
                        className="btn-lien fixed bottom-5 z-20 md:right-52 sm:right-12 right-5"
                    >
                        <span className="hidden lg:block">Chap X</span>{" "}
                        <ArrowRightOutlined sx={{ fontSize: 30 }} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default DitSQL;
