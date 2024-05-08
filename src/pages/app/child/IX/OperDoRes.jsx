import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function OperDoRes() {
    return (
        <div>
            <h4 className="titre-primary" id="top">
                IX.2 Analyse spatiale : quelques exemples d'opérations sur des
                données raster
            </h4>

            <div>
                <ul className="text-blue-500">
                    <li className="my-2">
                        <a href="#decoupe" className="lien">
                            Préparation des données : découpage d'un raster
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#explore" className="lien">
                            Explorer les données en modifiant le mode de
                            représentation
                        </a>
                        <ul className="ml-8">
                            <li>
                                <a href="#frequence" className="lien">
                                    Répartition des valeurs : histogramme de
                                    fréquence
                                </a>
                            </li>
                            <li>
                                <a href="#pixels" className="lien">
                                    La valeur des pixels sans valeur
                                </a>
                            </li>
                            <li>
                                <a href="#exploremofi" className="lien">
                                    Modifier le style pour explorer les données
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="my-2">
                        <a href="#manip" className="lien">
                            Manipuler les données : extraction de valeurs
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#exalt" className="lien">
                            Exemples d'opérations sur des données d'altitude
                        </a>
                        <ul className="ml-8">
                            <li>
                                <a href="#createniv" className="lien">
                                    Création de courbes de niveau
                                </a>
                            </li>
                            <li>
                                <a href="#raster" className="lien">
                                    Projection d'un raster
                                </a>
                            </li>
                            <li>
                                <a href="#rastepro" className="lien">
                                    Calcul de pente à partir du raster projeté
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <p className="paragraphe">
                Vous verrez ici quelques manipulations sur un raster d'altitude,
                appliquées au{" "}
                <a
                    href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/03_01_donnees_internet.html#III12b"
                    className="lien"
                >
                    modèle d'élévation numérique (MNE)
                </a>{" "}
                de la Jamaïque.
            </p>

            <div id="decoupe" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Préparation des données : découpage d'un raster
                    </h5>
                </div>
                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Le but sera ici de découper un raster pour ne garder
                            que la zone qui nous intéresse. Cette manipulation
                            permet d'alléger les données et les futurs
                            traitements.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Ouvrez un nouveau projet QGIS.{" "}
                                <a
                                    href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/01_02_info_geo.html#I24"
                                    className="lien"
                                >
                                    Ajoutez la couche raster
                                </a>{" "}
                                <a
                                    href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_09_AnalyseSpat.zip"
                                    className="lien"
                                >
                                    srtm_21_09.tif
                                </a>{" "}
                                située dans{" "}
                                <span className="font-bold">
                                    TutoQGIS_09_AnalyseSpat/donnees
                                </span>
                                .
                            </p>
                            <p className="paragraphe">
                                Le but va être de ne garder que la partie du MNE
                                correspondant à la Jamaïque, en éliminant les
                                parties de Cuba et des îles Caïman.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_decoupage_principe.jpg"
                                    alt="pôle-ard"
                                    width={400}
                                />
                            </div>
                            <p className="paragraphe italic text-center">
                                MNE sur fond OpenStreetMap. En gris transparent,
                                l'emprise de la couche, en rouge encadré, la
                                partie à conserver.
                            </p>
                            <p className="paragraphe">
                                Rendez-vous dans la{" "}
                                <span className=" text-green-400">
                                    {" "}
                                    boîte à outils → GDAL → Extraction raster →
                                    Découper un raster selon une emprise :
                                </span>
                                <div className="bg-img">
                                    <img
                                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_raster_decouper_menu.jpg"
                                        alt="pôle-ard"
                                        width={300}
                                    />
                                </div>
                                <div className="bg-img">
                                    <img
                                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_raster_decouper_fenetre.jpg"
                                        alt="pôle-ard"
                                        width={500}
                                    />
                                </div>
                            </p>
                            <p className="paragraphe">
                                <ul className="my-4 ml-8">
                                    <li className="my-4">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Couche source : sélectionnez{" "}
                                        <span className="font-bold text-green-400">
                                            srtm_21_09
                                        </span>
                                    </li>
                                    <li className="my-4">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Etendue de découpage : cliquez sur le
                                        bouton ... tout à droite, choisissez{" "}
                                        <span className="font-bold">
                                            {" "}
                                            Dessiner sur le canevas
                                        </span>
                                        . Il faut ensuite dessiner l'emprise à
                                        garder, toujours dans l'outil de
                                        découpage. Dessinez un rectangle
                                        approximatif autour de l'île de la
                                        Jamaïque :
                                    </li>
                                    <div className="my-4 bg-img">
                                        <img
                                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_decoupe_jam.jpg"
                                            alt="select_localisation_fenetre"
                                        />
                                    </div>
                                    <li className="my-4">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Découpé (étendue) : cliquez sur le
                                        bouton à droite ... et choisissez où la
                                        nouvelle couche sera créée, et son nom :{" "}
                                        <span className="font-bold text-green-400">
                                            srtm_jamaique
                                        </span>
                                    </li>
                                    <li className="my-4">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Cliquez ensuite sur Exécuter.
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Une fois l'opération terminée, fermez la fenêtre
                                de l'outil de découpage.
                            </p>
                            <p className="paragraphe">
                                Dans la liste des couches, décochez srtm_21_09
                                pour ne voir que la couche découpée : elle ne
                                comprend que la Jamaïque.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_decoupage_avant.jpg"
                                    alt="pôle-ard"
                                    width={250}
                                />
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_decoupage_apres.jpg"
                                    alt="pôle-ard"
                                    width={250}
                                />
                            </div>
                            <p className="paragraphe text-center text-color-400">
                                SRTM avant et après découpage.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Notez qu'il est également possible de découper un
                            raster suivant l'emprise d'une couche de polygones,
                            en utilisant l'option{" "}
                            <span className="font-bold">
                                Utiliser l'emprise de la couche
                            </span>
                            . Vous pouvez aussi directement rentrer à la main
                            les coordonnées de l'emprise à conserver.
                        </p>
                    </div>
                </div>
            </div>

            <div id="explore" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Explorer les données en modifiant le mode de
                        représentation
                    </h5>
                </div>
                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Les données ne contiennent maintenant plus que la
                            zone d'étude et sont donc prêtes pour la suite...
                            Mais au fait, que contiennent-elles, ces données ?
                        </p>
                        <p className="paragraphe">
                            Avant de créer de nouvelles données à partir de ce
                            MNE, ou bien de le croiser avec d'autres couches, il
                            peut être judicieux d'explorer un peu ces données.
                            Pour cela, il est possible de faire beaucoup de
                            choses en allant simplement dans les propriétés de
                            la couche !
                        </p>
                        <h6 className="sous-titre-italic" id="frequence">
                            Répartition des valeurs : histogramme de fréquence
                        </h6>
                        <p className="paragraphe">
                            Une manière simple d'avoir un aperçu du contenu des
                            données est de visualiser l'histogramme de fréquence
                            des valeurs des pixels. Vous pourrez ainsi voir d'un
                            coup d'œil la répartition des valeurs d'élévation.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe font-bold">
                                Propriétés de la couche{" "}
                                <span className="text-green-400">
                                    srtm_jamaique
                                </span>{" "}
                                → rubrique Histogramme : cliquez sur le bouton
                                Calculer l'histogramme.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_histogramme.jpg"
                                    alt="pôle-ard"
                                    width={400}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            L'axe horizontal représente les valeurs de pixels,
                            donc ici d'élévation. L'axe vertical représente le
                            nombre de pixels ayant une valeur donnée. Il est
                            également possible de lire les valeurs minimale et
                            maximale sou l'histogramme.
                        </p>
                        <p className="paragraphe">
                            On peut voir d'un seul coup d'œil que beaucoup de
                            pixels ont une valeur inférieure à 100 mètres
                            d'élévation.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Il est possible de zoomer sur le graphique en
                                dessinant un rectangle, ou bien en modifiant les
                                valeurs min et max. Un clic droit permet de
                                revenir à la vue initiale.
                            </p>
                        </div>
                        <h6 className="sous-titre-italic" id="pixels">
                            La valeur des pixels sans valeur
                        </h6>
                        <p className="paragraphe">
                            Une information utile à savoir est{" "}
                            <span className="font-bold">
                                la valeur des pixels
                            </span>{" "}
                            « sans données ». En effet, vous ne voyez dans QGIS
                            que les pixels de la Jamaïque et non ceux de l'océan
                            les environnant, bien que nous ayons précédemment
                            découpé cette couche suivant un rectangle.
                        </p>
                        <p className="paragraphe">
                            En fait,{" "}
                            <span className="font-bold">
                                un raster étant un tableau, son emprise sera
                                toujours rectangulaire et tous les pixels auront
                                toujours une valeur
                            </span>{" "}
                            . Cependant, par commodité, on donne une valeur
                            aberrante aux pixels « sans données ». D'où ce titre
                            énigmatique !
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Pour savoir quelle est cette valeur :{" "}
                                <span className="font-bold">
                                    {" "}
                                    propriétés de la couche → rubrique
                                    Transparence :
                                </span>
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_nodata.jpg "
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Regardez la valeur à droite de{" "}
                                <span className="font-bold">
                                    Aucune valeur de données
                                </span>{" "}
                                : pour cette couche, cette valeur est de{" "}
                                <span className="font-bold">-32768</span> .
                            </p>
                        </div>
                        <p className="paragraphe">
                            Il est évident que l'élévation n'est jamais de
                            -32768 mètres : il s'agit d'une valeur aberrante
                            pour indiquer que certains pixels n'ont pas de
                            valeur d'élévation associée.
                        </p>
                        <p className="paragraphe font-bold">
                            Le logiciel gère cela en rendant ces pixels
                            transparents par défaut.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Pour tester cela, décochez la case devant{" "}
                                <span className="font-bold">
                                    Aucune valeur de données
                                </span>{" "}
                                et fermez la fenêtre des propriétés. Vous pouvez
                                voir toute l'emprise de la couche, y compris les
                                pixels sans données.
                            </p>
                            <p className="paragraphe">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_2_informations_icone.jpg"
                                    alt=""
                                />{" "}
                                Vous pouvez utiliser l'outil Identifier des
                                entités pour cliquer sur un pixel « sans données
                                » sur le bord du raster et voir que sa valeur
                                correspond bien à -32768.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_test_nodata.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Retournez dans les propriétés de la couche et
                                recochez la case{" "}
                                <span className="font-bold">
                                    {" "}
                                    Aucune valeur de données.
                                </span>
                            </p>
                            <p className="paragraphe">
                                Si vous utilisez à nouveau l'outil
                                d'identification sur un pixel du bord du raster
                                (désormais invisible), vous verrez qu'il est
                                maintenant considéré comme « sans données ». En
                                cliquant en-dehors de l'emprise du raster,
                                l'outil d'identification ne renvoie aucun
                                résultat.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Pourquoi la valeur -32768 ? Voici quelques
                            explications si vous désirez en savoir plus. Il
                            existe différents types de raster : 8 bits, 16 bits,
                            32 bits... Ce qui correspond en fait au nombre de
                            bits sur lesquels est stockée la valeur d'un pixel.
                        </p>
                        <p className="paragraphe">
                            Ici, notre raster est de type 16 bits (ce que vous
                            pouvez vérifier en allant dans les propriétés de la
                            couche, rubrique Information). Chaque valeur de
                            pixel est codée sur 16 bits, ce qui donne 216 soit
                            65536 possibilités. Les valeurs pouvant être
                            positives ou négatives, elles vont de -32768 à
                            32767, puisque 65536/2=32768.
                        </p>
                        <p className="paragraphe">
                            La valeur nulle est donc la valeur la plus aberrante
                            possible, ici -32768.
                        </p>
                        <p className="paragraphe">
                            Rendez-vous{" "}
                            <a
                                href="http://desktop.arcgis.com/fr/arcmap/10.3/manage-data/raster-and-images/bit-depth-capacity-for-raster-dataset-cells.htm"
                                className="lien"
                            >
                                ici
                            </a>{" "}
                            pour en savoir plus sur les différents types de
                            raster et les données qu'ils peuvent contenir. En
                            règle général, on choisit le type codé sur le moins
                            de bits possibles en restant compatible avec les
                            données, pour obtenir des rasters moins lourds.
                        </p>
                        <h6 className="sous-titre-italic" id="exploremofi">
                            Modifier le style pour explorer les données
                        </h6>
                        <p className="paragraphe">
                            Une manière simple d'explorer les données, aussi
                            bien pour un vecteur que pour un raster, est de
                            modifier la manière dont sont représentées les
                            données.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Rendez-vous dans les propriétés de la couche,
                                rubrique{" "}
                                <span className="font-bold">Symbologie</span>.
                            </p>
                            <p className="paragraphe">
                                A la place de{" "}
                                <span className="font-bold">
                                    Bande grise unique
                                </span>{" "}
                                , sélectionnez{" "}
                                <span className="font-bold">
                                    Pseudo-couleur à bande unique
                                </span>{" "}
                                et appliquez les changements (sans forcément
                                fermer la fenêtre des propriétés).
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_style_pseudocouleur.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_style_pseudocouleur_res.jpg"
                                    alt="pôle-ard"
                                    width={300}
                                />
                            </div>
                            <p className="paragraphe">
                                Ce style permet de choisir le degradé de couleur
                                utilisé pour étirer les valeurs.
                            </p>
                            <p className="paragraphe">
                                Choisissez maintenant un mode d'interpolation
                                discret au lieu de linéaire.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_interpol_discret.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Appliquez les changements :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_style_discret.jpg"
                                    alt="pôle-ard"
                                    width={400}
                                />
                            </div>
                            <p className="paragraphe font-bold">
                                Les valeurs sont maintenant représentées par
                                classes.
                            </p>
                            <p className="paragraphe">
                                Il est possible de modifier les classes, soit de
                                manière automatique en choisissant le mode{" "}
                                <span className="font-bold">
                                    intervalle égal
                                </span>{" "}
                                ou <span className="font-bold">quantile</span>{" "}
                                et le nombre de classes, sous le tableau des
                                valeurs, soit à la main en double-cliquant sur
                                une valeur dans le tableau.
                            </p>
                            <p className="paragraphe italic font-bold">
                                Pour en savoir plus sur les méthodes de
                                discrétisation : voir notamment{" "}
                                <a
                                    href="https://blog.m0le.net/2014/09/08/cartographie-numerique-precis-de-discretisation-pour-les-nuls/"
                                    className="lien"
                                >
                                    ici
                                </a>{" "}
                                .
                            </p>
                            <p className="paragraphe">
                                Par exemple, modifiez les classes pour faire
                                apparaître les pixels de valeur inférieure à 100
                                mètres, comprise entre 100 et 700 mètres et
                                supérieure à 700 mètres :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_style_discret_3classes.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_style_discret_3classes_res.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            En modifiant le style des données, notamment en
                            discrétisant les données et en faisant varier les
                            classes, on peut avoir une meilleure idée du sujet
                            étudié, ici l'élévation de la Jamaïque. C'est une
                            première approche !
                        </p>
                    </div>
                </div>
            </div>

            <div id="manip" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Manipuler les données : extraction de valeurs
                    </h5>
                </div>
                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Admettons maintenant que l'étape précédente nous ait
                            permis de décider qu'on souhaite s'intéresser
                            uniquement à la zone inférieure à 100 mètres
                            d'altitude.
                        </p>
                        <p className="paragraphe">
                            Comment faire pour obtenir un nouveau raster, où les
                            pixels d'élévation inférieure à 100 mètres ont une
                            valeur de 1 et les autres une valeur de 0 ? Une
                            telle couche pourra servir par exemple de masque, ou
                            bien pour ne garder que les valeurs d'un raster
                            portant sur un autre thème de la zone inférieure à
                            100 mètres.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Rendez-vous dans la{" "}
                                <span className="font-bold italic">
                                    boîte à outils → Analyse raster → Raster
                                    calculator
                                </span>{" "}
                                :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_rastercalc_fenetre.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            Cet outil permet d'effectuer des calculs sur des
                            rasters, par exemple soustraire un raster à un
                            autre. Nous l'utiliserons ici pour obtenir un raster
                            où les pixels d'élévation inférieure à 100 mètres
                            ont une valeur de 1 et les autres une valeur de 0.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Dans la partie{" "}
                                        <span className="font-bold">
                                            Couches
                                        </span>{" "}
                                        en haut à gauche, double-cliquez sur{" "}
                                        <span className="font-bold text-green-400">
                                            srtm_jamaique
                                        </span>{" "}
                                        pour faire apparaître le nom de la
                                        couche dans la partie{" "}
                                        <span className="font-bold">
                                            Expression
                                        </span>{" "}
                                        en-dessous
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Complétez l'expression en rajoutant à la
                                        main{" "}
                                        <span className="font-bold">
                                            {"<"} 100
                                        </span>{" "}
                                        : l'expression complète est donc{" "}
                                        <span className="font-bold">
                                            {" "}
                                            "srtm_jamaique@1" {"<"} 100
                                        </span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Dans la partie{" "}
                                        <span className="font-bold">
                                            Reference Layer(s)
                                        </span>{" "}
                                        , cliquez sur le bouton ... à doite et
                                        sélectionnez la couche{" "}
                                        <span className="font-bold text-green-400">
                                            srtm_jamaique
                                        </span>
                                        , pour que le raster créé ait la même
                                        emprise, résolution et CRS
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Exécutez... Le nouveau raster (temporaire) est
                                ajouté.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Comment l'expression "srtm_jamaique@1" {"<"} 100
                            nous pemet-elle d'obtenir le résultat souhaité ?
                            Cette expression est évaluée pour chaque pixel, le
                            résultat est soit vrai (1) soit faux (0).
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Contrairement à ce à quoi on aurait pu
                                s'attendre, on peut voir en noir les valeurs
                                supérieure à 100 mètres. Cependant, en
                                interrogeant le raster avec l'outil
                                d'identification on peut voir que les pixels qui
                                avaient une élévation {"<"} 100 mètres ont
                                maintenant une valeur de 1, et les autres 0.
                            </p>
                            <p className="paragraphe">
                                Il est facile de changer le mode de
                                représentation, par exemple dans{" "}
                                <span className="font-bold">
                                    les propriétés → Symbologie → Dégradé de
                                    couleur : choisir Blanc vers noir au lieu de
                                    Noir vers blanc.
                                </span>
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_blancversnoir_res.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            Cette couche pourra servir par exemple de masque,
                            telle quelle ou bien en la transformant en couche
                            vecteur au moyen de l'outil Polygoniser.
                        </p>
                    </div>
                </div>
            </div>

            <div id="exalt" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Exemples d'opérations sur des données d'altitude
                    </h5>
                </div>
                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Il existe un certain nombre d'opérations proposées
                            par les logiciels SIG sur les rasters d'altitude,
                            par exemple la création de courbes de niveaux,
                            d'ombrage, de pente... Nous verrons ici 2 exemples,
                            sur les courbes de niveau et le calcul de pente.
                        </p>
                        <h6 className="sous-titre-italic" id="createniv">
                            Création de courbes de niveau
                        </h6>
                        <p className="paragraphe">
                            Les courbes de niveaux sont des lignes imaginaires
                            joignant tous les points situés à la même altitude.
                            Nous allons créer des courbes de niveau distantes de
                            100 mètres à partir du MNE de la Jamaïque.
                        </p>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_isohypses_exemple.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                        <p className="paragraphe italic text-center">
                            Un extrait de carte avec des courbes de niveau
                            (Source :{" "}
                            <a
                                href="https://emit-ecole-de-mit.github.io/commons.wikimedia.org/wiki/File_Cntr-map-1.html"
                                className="lien"
                            >
                                Wikimedia
                            </a>{" "}
                            )
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Rendez-vous dans{" "}
                                <a href="#" className="lien">
                                    la boîte à outils → GDAL → Extraction raster
                                    → Courbe de niveau{" "}
                                </a>
                                (dans les versions pécédentes de QGIS, cet outil
                                peut se nommer contour) :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/09_02_raster.html#thumb"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_contours_fenetre.jpg"
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
                                        Couche source : sélectionnez{" "}
                                        <span className="font-bold text-green-400">
                                            srtm_jamaique
                                        </span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Intervalle entre les courbes de niveaux
                                        : tapez{" "}
                                        <span className="font-bold">100</span>{" "}
                                        pour un intervalle de 100 mètres
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        <span className="font-bold">
                                            Nom de l'attribut
                                        </span>{" "}
                                        : il s'agit du nom du champ qui
                                        contiendra l'altitude de la courbe. Vous
                                        pouvez laisser la valeur par défaut{" "}
                                        <span className="font-bold">ELEV</span>,
                                        ou bien taper le nom de votre choix
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Cliquez sur{" "}
                                <span className="font-bold">Exécuter</span> :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_courbes_carte.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_courbes_table.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            Une couche de lignes a été créée. Chaque ligne
                            possède en attribut son élévation, qui varie ici de
                            0 à 2200 mètres.
                        </p>
                        <h6 className="sous-titre-italic" id="raster">
                            Projection d'un raster
                        </h6>
                        <p className="paragraphe">
                            Il est également possible de créer à partir d'un
                            raster d'altitude un raster de pente : chaque pixel
                            aura la valeur de la pente en ce point. Pour en
                            savoir plus sur la manière dont est calculée la
                            pente, vous pouvez vous référer à l'aide{" "}
                            <a
                                href="http://resources.arcgis.com/fr/help/main/10.1/index.html#//00q90000001r000000"
                                className="lien"
                            >
                                d'ArcGIS
                            </a>{" "}
                            sur ce point.
                        </p>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_pente.svg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                        <p className="paragraphe">
                            La pente est calculée en fonction de la distance
                            horizontale et de la hauteur. Dans notre cas, la
                            hauteur est en mètres, et la distance horizontale en
                            degrés. Les deux unités étant différentes, le calcul
                            de pente donnera des valeurs aberrantes.
                        </p>
                        <p className="paragraphe">
                            La première étape est donc de{" "}
                            <span className="font-bold">
                                {" "}
                                projeter notre raster, pour obtenir des unités
                                identiques verticalement et horizontalement.
                            </span>
                        </p>
                        <p className="paragraphe">
                            Quelle projection utiliser pour notre raster ?
                        </p>
                        <p className="paragraphe">
                            En règle générale, il y a deux possibilités quand on
                            cherche une projection pour un pays : utiliser une
                            projection nationale, ou bien une{" "}
                            <a
                                href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/02_02_coord.html#II22d"
                                className="lien"
                            >
                                {" "}
                                projection UTM.
                            </a>
                        </p>
                        <p className="paragraphe">
                            Pour savoir s'il existe dans QGIS des projections
                            nationales pour la Jamaïque, vous pouvez faire une
                            recherche dans les SCR proposés.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_3_scr_projet_icone.jpg"
                                    alt=""
                                />
                                Rendez-vous dans les propriétés du projet,
                                rubrique SCR, par exemple en cliquant sur
                                l'icône de sphère tout en bas à droite de la
                                fenêtre de QGIS :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_scr_jamaica.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Tapez <span className="font-bold">jamaica</span>{" "}
                                dans la rubrique{" "}
                                <span className="font-bold">Filtre</span> :
                                plusieurs réponses sont proposées, dont 3 SCR
                                projetés. Une rapide recherche internet semble
                                indiquer que le SCR{" "}
                                <span className="font-bold">JAD2001</span> est
                                le plus récent (source :{" "}
                                <a
                                    href="http://www.jamaicancaves.org/jad2001.htm"
                                    className="lien"
                                >
                                    http://www.jamaicancaves.org/jad2001.htm{" "}
                                </a>{" "}
                                ). C'est donc ce SCR que nous utiliserons.
                            </p>
                            <p className="paragraphe">
                                Sélectionnez{" "}
                                <span className="font-bold">
                                    JAD2001 (code EPSG:3448) et cliquez sur OK
                                </span>{" "}
                                .
                            </p>
                        </div>
                        <p className="paragraphe">
                            Nous venons de changer le SCR du projet, mais pas
                            celui de notre raster (pour rappel, voir ici).
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Une étape préliminaire avant de projeter le
                                raster : ouvrez les propriétés du raster,
                                rubrique{" "}
                                <span className="font-bold">Information</span>,
                                sous-rubrique{" "}
                                <span className="font-bold">Bandes</span>,
                                recherchez{" "}
                                <span className="font-bold">
                                    Aucune valeur de données
                                </span>
                                . Vous devriez avoir -32768, notez cette valeur.
                                C'est celle utilisée pour les pixels « sans
                                valeur » (qui ont donc en réalité la valeur
                                -32768), en-dehors de l'île.
                            </p>
                            <p className="paragraphe">
                                Ensuite, pour changer le SCR du raster :{" "}
                                <span className="text-green-400">
                                    {" "}
                                    Boîte à outils → GDAL → Projections raster →
                                    Projection (warp) :
                                </span>
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_reproj_raster_menu.jpg"
                                    alt="pôle-ard"
                                    width={300}
                                />
                            </div>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_reproj_raster_fenetre.jpg"
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
                                        Couche source : sélectionnez{" "}
                                        <span className="text-green-400">
                                            srtm_jamaique
                                        </span>{" "}
                                        dans la liste
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        SCR cible : cliquez sur le bouton à
                                        droite pour rechercher le SCR{" "}
                                        <span className="font-bold">
                                            JAD2001 code EPSG:3448
                                        </span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Valeur Nodata : tapez la{" "}
                                        <a
                                            href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/09_02_raster.html#IX22b"
                                            className="lien"
                                        >
                                            valeur des pixels sans données
                                        </a>{" "}
                                        :{" "}
                                        <span className="font-bold">
                                            -32768
                                        </span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Laissez tous les autres paramètres par
                                        défaut, cliquez sur{" "}
                                        <span className="font-bold">
                                            Exécuter
                                        </span>
                                        .
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Patientez... La nouvelle couche est ajoutée,
                                vous pouvez vérifier dans ses propriétés
                                (rubrique Source) que son SCR soit bien le
                                JAD2001.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_scr_ok.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe italic">
                                Il semblerait qu'il ne soit plus utile de
                                préciser la valeur NoData, celle-ci étant
                                automatiquement lue dans les propriétés du
                                raster en entrée !
                            </p>
                            <p className="paragraphe italic">
                                Supprimez les autres couches, pour ne garder
                                dans le projet que la couche{" "}
                                <span className="font-bold text-green-400">
                                    srtm_jamaique_JAD2001
                                </span>
                                .
                            </p>
                        </div>
                        <h6 className="sous-titre-italic" id="rastepro">
                            Calcul de pente à partir du raster projeté
                        </h6>

                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Rendez-vous dans la{" "}
                                <span className="text-green-400">
                                    boîte à outils → GDAL → Analyse raster →
                                    Pente :
                                </span>
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_pente_menu.jpg"
                                    alt="pôle-ard"
                                    width={300}
                                />
                            </div>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_pente_fenetre.jpg"
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
                                        Couche source : sélectionnez{" "}
                                        <span className="font-bold text-green-400">
                                            srtm_jamaique_JAD2001
                                        </span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        Laissez les autres paramètres par défaut
                                        (pour plus d'infos sur les méthodes de
                                        Zevenberger & Thorne et Horn :{" "}
                                        <a
                                            href=" http://www.macaulay.ac.uk/LADSS/documents/DEMs-for-spatial-modelling.pdf"
                                            className="lien"
                                        >
                                            {" "}
                                            http://www.macaulay.ac.uk/LADSS/documents/DEMs-for-spatial-modelling.pdf
                                        </a>
                                        , pp. 12 et 13).
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Cliquez sur{" "}
                                <span className="font-bold">Exécuter</span>,
                                patientez... la couche s'affiche :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_pente_res.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Ici, les pixels sombres représentent des pentes
                                faibles et les pixels clairs de fortes pentes.
                            </p>
                            <p className="paragraphe">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/8_2_id_icone.jpg "
                                    alt=""
                                />{" "}
                                En cliquant sur un pixel avec l'outil Identifier
                                les entités, vous pouvez connaître la valeur de
                                la pente pour ce pixel :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_2_id_pente.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Ici, le pixel a une pente de 13,5° environ.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Il existe beaucoup d'autres traitements possibles
                            sur les données raster. Mais pourquoi toujours
                            opposer raster et vecteur ? Dans le prochain
                            chapitre, découvrez comment les faire fonctionner
                            main dans la main !
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/analyse-spatiale/operation-donnees-vect"
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
                        to="/app/plan-detailler/analyse-spatiale/croiser-vect-rast"
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

export default OperDoRes;
