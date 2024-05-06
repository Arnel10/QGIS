import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
    FolderOpenOutlined,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function AjoutDonPon() {
    return (
        <div>
            <h4 className="titre-primary" id="top">
                III.3 Ajout de données ponctuelles à partir d'un fichier texte
            </h4>

            <div>
                <ul className="text-blue-500">
                    <li className="my-2">
                        <a href="#txt" className="lien">
                            Qu'y a-t-il dans le fichier texte ?
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#vision" className="lien">
                            Visualisation des données dans QGIS
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#shapefile" className="lien">
                            Création du shapefile de points
                        </a>
                    </li>
                </ul>
            </div>
            <p className="paragraphe">
                Nous avons vu quelques pistes pour rechercher et afficher des
                données au format SIG dans QGIS, que ce soit en les{" "}
                <a
                    href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/03_01_donnees_internet.html"
                    className="lien"
                >
                    téléchargeant
                </a>{" "}
                ou via des{" "}
                <a
                    href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/03_02_donnees_flux.html"
                    className="lien"
                >
                    flux
                </a>
                . Il arrive aussi de disposer d'un tableau avec deux colonnes X
                et Y : comment utiliser ces données dans un SIG ?
            </p>
            <p className="paragraphe">
                Nous prendrons ici l'exemple d'un fichier au{" "}
                <a
                    href="http://fr.wikipedia.org/wiki/Comma-separated_values"
                    className="lien"
                >
                    format CSV
                </a>{" "}
                . Pour information, il est possible de créer un fichier au
                format CSV à partir d'un fichier ODS (LibreOffice) ou XLS
                (Microsoft Office) par exemple.
            </p>

            <div id="txt" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Qu'y a-t-il dans le fichier texte ?
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Dans l'explorateur de votre ordinateur, ouvrez
                                le fichier{" "}
                                <a
                                    href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_03_RechercheDonnees.zip"
                                    className="lien"
                                >
                                    villes_bhutan_geonames.csv
                                </a>{" "}
                                situé dans le dossier{" "}
                                <span className="font-bold">
                                    TutoQGIS_03_RechercheDonnees/donnees
                                </span>{" "}
                                à l'aide d'un éditeur de texte simple ({" "}
                                <span className="font-bold">
                                    pas dans un tableur
                                </span>{" "}
                                ) : par exemple, WordPad dans Windows, TextEdit
                                sous Mac, gedit sous Ubuntu.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_3_apercu_csv.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            Le format CSV est un format relativement simple : il
                            contient des colonnes séparées habituellement par
                            des virgules, parfois par des points-virgules,
                            tabulations ou autre. La première ligne contient les
                            en-têtes de colonnes.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Combien de colonnes y a-t-il dans le fichier
                                villes_bhutan_geonames.csv ? <br />{" "}
                                <span className="italic">
                                    Le fichier comporte 9 colonnes : geonamesid,
                                    name, asciiname, latitude, longitude,
                                    country code, population, dem et
                                    modification date.
                                </span>
                                <div className="bg-img">
                                    <img
                                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_3_csv_colonnes.jpg"
                                        alt="pôle-ard"
                                        width={500}
                                    />
                                </div>
                            </p>
                            <p className="paragraphe">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Quelle est la latitude de la ville de Timphu?
                                <br />{" "}
                                <span className="italic">
                                    {" "}
                                    La latitude de la ville de Timphu est
                                    27.46609 (la colonne "latitude" est la 4ème
                                    colonne : la réponse se trouve donc dans la
                                    4ème colonne de la ligne correspondant à
                                    Timphu.
                                </span>
                                <div className="bg-img">
                                    <img
                                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_3_lat_timphu.jpg"
                                        alt="pôle-ard"
                                        width={500}
                                    />
                                </div>
                            </p>
                            <p className="paragraphe">
                                <FiberManualRecord sx={{ fontSize: 10 }} /> A
                                quoi correspond la colonne "dem" ? Pouvez-vous
                                trouver la réponse dans les métadonnées ? <br />{" "}
                                <span className="italic">
                                    {" "}
                                    En vous rendant sur{" "}
                                    <a
                                        href="http://download.geonames.org/export/dump/readme.txt"
                                        className="lien"
                                    >
                                        http://download.geonames.org/export/dump/readme.txt
                                    </a>{" "}
                                    dans un navigateur internet, vous pouvez
                                    lire la définition suivante pour la colonne
                                    dem (dans la partie "The main 'geoname'
                                    table has the following fields" ) :{" "}
                                    <span className="font-bold">
                                        {" "}
                                        digital elevation model, srtm3 or
                                        gtopo30, average elevation of 3''x3''
                                        (ca 90mx90m) or 30''x30'' (ca 900mx900m)
                                        area in meters, integer. srtm processed
                                        by cgiar/ciat.
                                    </span>{" "}
                                </span>
                            </p>
                            <p className="paragraphe">
                                Pour rappel, dans les données que vous avez
                                téléchargées pour chaque partie, il existe dans
                                le dossier{" "}
                                <span className="font-bold">liste_donnees</span>{" "}
                                une liste de ces données avec l'emplacement de
                                leurs métadonnées.
                            </p>
                            <p className="paragraphe">
                                Fermez le fichier sans enregistrer les
                                éventuelles modifications, quittez l'éditeur de
                                texte.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Ce fichier contient donc une liste de villes du{" "}
                            <a
                                href="http://fr.wikipedia.org/wiki/Bhoutan"
                                className="lien"
                            >
                                Bhoutan
                            </a>{" "}
                            , avec pour chaque ville différentes informations
                            telles que sa population, son élévation, sa latitude
                            et sa longitude.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                A votre avis, dans quel SCR sont mesurées la
                                latitude et la longitude? Pouvez-vous trouver
                                cette info dans les métadonnées? <br />{" "}
                                <span className="italic">
                                    {" "}
                                    Comme précisé dans le fichier de métadonnées
                                    (voir fichier pdf dans le dossier
                                    liste_donnees), les coordonnées sont
                                    mesurées en degrés décimaux dans le SCR
                                    WGS84.
                                </span>
                            </p>
                            <p className="paragraphe">
                                <span className="italic">
                                    {" "}
                                    Dans le cas d'un fichier avec des
                                    coordonnées en latitude et longitude et un
                                    SCR inconnu, il s'agit fréquemment de
                                    coordonnées en WGS84.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="vision" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Visualisation des données dans QGIS
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Ouvrez un nouveau projet vide dans QGIS.
                            </p>
                            <p className="paragraphe">
                                <FolderOpenOutlined /> Chargez la couche{" "}
                                <a
                                    href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_03_RechercheDonnees.zip"
                                    className="lien"
                                >
                                    ne_10m_admin_0_countries.shp
                                </a>{" "}
                                située dans le dossier{" "}
                                <span className="font-bold">
                                    TutoQGIS_03_RechercheDonnees/donnees
                                </span>
                                .
                            </p>
                            <p className="paragraphe">
                                <FolderOpenOutlined /> Toujours à partir du
                                gestionnaire des sources, cliquez sur{" "}
                                <span className="font-bold">
                                    {" "}
                                    Texte délimité{" "}
                                </span>
                                :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_3_ajout_csv_fenetre.jpg"
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
                                        Cliquez sur le bouton ... et
                                        sélectionnez le fichier{" "}
                                        <span className="text-green-500">
                                            villes_bhutan_geonames.csv
                                        </span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        <span className="font-bold">
                                            Format de fichier :
                                        </span>{" "}
                                        choisir{" "}
                                        <span className="font-bold">
                                            CSV (virgule)
                                        </span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        <span className="font-bold">
                                            Options des champs et
                                            enregistrements{" "}
                                        </span>{" "}
                                        : vérifiez que les cases{" "}
                                        <span className="font-bold">
                                            en-têtes de 1ère ligne, Détecter les
                                            types de champs et Virgule en
                                            sépareteur décimal
                                        </span>{" "}
                                        soient bien cochées
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        <span className="font-bold">
                                            Définition de la géométrie
                                        </span>{" "}
                                        : choisir{" "}
                                        <span className="font-bold">point</span>
                                        , puis les colonnes X et Y :{" "}
                                        <span className="font-bold">
                                            longitude et latitude
                                        </span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Vérifiez également que le SCR
                                        sélectionné soit bien{" "}
                                        <span className="font-bold">
                                            {" "}
                                            WGS84 - code EPSG 4326
                                        </span>
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Cliquez sur{" "}
                                <span className="font-bold">Ajouter</span>.
                                Faites un clic droit sur le nom de cette couche,{" "}
                                <span className="font-bold">
                                    {" "}
                                    zoomer sur la couche.
                                </span>
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_3_visu_villes_bhutan.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Les villes ont bien été ajoutées à QGIS sous la
                                forme d'une couche de points.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="shapefile" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Création du shapefile de points
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Regardez{" "}
                            <a
                                href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/01_02_info_geo.html#I23b"
                                className="lien"
                            >
                                à quel emplacement
                            </a>{" "}
                            est stockée votre couche. Vous pouvez observer que
                            cet emplacement fait référence à un fichier CSV et
                            non à un fichier SHP.
                        </p>
                        <p className="paragraphe">
                            Par ailleurs, si vous sélectionnez la couche de
                            villes dans la table des matières, vous pouvez
                            constater que l'icône pour passer en mode édition
                            est désactivée, au contraire de notre couche de
                            pays. La couche de villes n'est donc pas éditable.
                        </p>
                        <p className="paragraphe">
                            icône édition activée :{" "}
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_3_edition_icone_activee.jpg"
                                alt=""
                            />
                        </p>
                        <p className="paragraphe">
                            icône édition désactivée :{" "}
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_3_edition_icone_desactivee.jpg"
                                alt=""
                            />
                        </p>
                        <p className="paragraphe">
                            Ces indices laissent à penser que bien que nous
                            puissions visualiser les villes dans QGIS,{" "}
                            <span className="font-bold">
                                aucune couche n'a été créée sur votre ordinateur
                            </span>{" "}
                            , ce qui est d'ailleurs logique dans la mesure où
                            QGIS ne nous a demandé à aucun moment de choisir un
                            emplacement pour cette couche.
                        </p>
                        <p className="paragraphe">
                            En fait, nous avons seulement créé{" "}
                            <span className="font-bold">
                                une couche temporaire, uniquement stockée dans
                                le projet QGS en cours
                            </span>{" "}
                            . Comment faire pour sauvegarder cette couche?
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Il suffit pour cela de faire un clic-droit sur
                                la couche villes_bhutan_geonames → Exporter →
                                Sauvegarder les entités sous... , comme l'image
                                nous montre ci-dessous :
                                <div className="bg-img">
                                    <img
                                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_3_sauvegarder_villes_menu.jpg"
                                        alt="pôle-ard"
                                        width={500}
                                    />
                                </div>
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_3_sauvegarder_villes_fenetre.jpg"
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
                                        choisissez le format :{" "}
                                        <span className="font-bold">
                                            GeoPackage
                                        </span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Cliquez sur ... pour sélectionner
                                        l'emplacement où la couche sera créée et
                                        lui donner un nom
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Laissez les autres paramètres par défaut
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Cliquez sur{" "}
                                <span className="font-bold">OK</span> ; la
                                couche est ajoutée à QGIS, vous devez donc avoir
                                deux couches de villes identiques au premier
                                abord ; cependant, l'une est temporaire et
                                l'autre permanente.
                            </p>
                            <p className="paragraphe">
                                <FolderOpenOutlined /> Supprimez la couche
                                temporaire pour éviter toute confusion (en vous
                                aidant éventuellement de son emplacement pour
                                déterminer laquelle est-ce).
                                <div className="bg-img">
                                    <img
                                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/3_3_supprimer_couche_menu.jpg"
                                        alt="pôle-ard"
                                        width={500}
                                    />
                                </div>
                            </p>
                        </div>
                        <p className="paragraphe">
                            Félicitations ! L'ajout de données ponctuelles à
                            partir d'un fichier texte dans QGIS n'a désormais
                            plus de secrets pour vous !
                        </p>
                        <p className="paragraphe">
                            Notez que si vous effectuez cette manipulation avec
                            un fichier CSV « non standard » (dont le délimiteur
                            n'est pas la virgule), il vous faudra choisir
                            l'option{" "}
                            <span className="font-bold">
                                délimiteurs personnalisés
                            </span>{" "}
                            dans la fenêtre d'ajout du fichier CSV, puis votre
                            délimiteur : point-virgule, tabulation... Attention
                            aussi à la case{" "}
                            <span className="font-bold">
                                Virgule en séparateur décimal
                            </span>{" "}
                            , à cocher ou décocher suivant vos coordonnées
                            (44,192 vs 44.192).
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/recherche-et-ajout-de-donnees/ajout-donnees-via-flux"
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
                        to="/app/plan-detailler/recherche-et-ajout-de-donnees/ajout-fond-de-carte"
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

export default AjoutDonPon;
