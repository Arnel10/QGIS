import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
    FolderOpenOutlined,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function PasSys() {
    return (
        <div id="top">
            <h4 className="titre-primary">
                II.4 Passer d'un système de coordonnées à un autre
            </h4>

            <div>
                <ul className="text-blue-500">
                    <li className="my-2">
                        <a href="#modifscr" className="lien">
                            Modifier le SCR du projet
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#modifscrcouche" className="lien">
                            Modifier le SCR d'une couche
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#redefscrcouche" className="lien">
                            Redéfinir le SCR d'une couche
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#notconf" className="lien">
                            Modifier et redéfinir le SCR : à ne pas confondre !
                        </a>
                    </li>
                </ul>
            </div>

            <div id="modifscr" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">Modifier le SCR du projet</h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Vous avez pu constater dans la partie{" "}
                            <a href="#" className="lien">
                                II.3 Couches et projets : à chacun son système
                            </a>{" "}
                            que les couches d'un projet sont affichées dans le
                            SCR du projet. Comment modifier le SCR du projet
                            pour afficher les couches dans le SCR de votre choix
                            ?
                        </p>
                        <p className="paragraphe">
                            Nous allons modifier le SCR du projet{" "}
                            <span className="font-bold text-green-400">
                                monde.qgz
                            </span>{" "}
                            du WGS84 vers{" "}
                            <a
                                href="http://fr.wikipedia.org/wiki/Projection_de_Robinson"
                                className="lien"
                            >
                                Robinson
                            </a>{" "}
                            (code EPSG 53030).
                        </p>
                    </div>
                </div>

                <div className="bg-style-g p-2">
                    <p className="paragraphe italic ml-4">
                        <FolderOpenOutlined /> <span> </span>A partir de QGIS,
                        ouvrez le projet{" "}
                        <a
                            href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_02_Geodesie.zip"
                            className="lien"
                        >
                            {" "}
                            monde.qgz{" "}
                        </a>
                        situé dans le dossier TutoQGIS_02_Geodesie/projets
                    </p>
                    <p className="paragraphe">
                        (Si vous avez déjà un autre projet du tutoriel ouvert,
                        il est inutile de le sauvegarder).
                    </p>
                </div>

                <p className="paragraphe">
                    Ce projet comporte une couche de pays, une couche avec les
                    indicatrices de Tissot, et une couche de graticule,
                    c'est-à-dire de méridiens et de parallèles distants ici de
                    15 degrés.
                </p>

                <div className="bg-style-g p-2">
                    <p className="paragraphe italic ml-4">
                        Dans quel SCR sont les 3 couches du projet ?
                    </p>
                    <p className="paragraphe">
                        Elles sont toutes les 3 en WGS84, code EPSG 4326 (pour
                        le vérifier, allez dans les propriétés de la couche,
                        rubrique Information).
                    </p>

                    <p className="paragraphe">
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_3_proprietes_projet_menu.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                    </p>

                    <p className="paragraphe">
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_4_modif_scr_projet.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                    </p>
                    <p className="paragraphe">
                        <span className="font-bold text-red-400">1. </span>{" "}
                        Vérifiez que la case{" "}
                        <span className="font-bold"> Aucun SCR</span> soit bien
                        décochée.
                    </p>
                    <p className="paragraphe">
                        <span className="font-bold text-red-400">2. </span>{" "}
                        Tapez <span className="font-bold">robinson</span> dans
                        cette partie, ou bien 53030 (code EPSG).
                    </p>
                    <p className="paragraphe">
                        <span className="font-bold text-red-400">3. </span> Le
                        filtre est activé dans la liste des derniers SCR
                        utilisés. Selon si vous avez déjà utilisé Robinson ou
                        non, cette partie sera donc ou vide ou avec une ou deux
                        lignes correspondant à ce système.
                    </p>
                    <p className="paragraphe">
                        <span className="font-bold text-red-400">4. </span> Le
                        filtre est également activé dans la liste de tous les
                        SCR disponibles : seuls les SCR dont le nom contient
                        "Robinson" sont affichés.{" "}
                        <span className="font-bold">
                            {" "}
                            Sélectionnez Sphere Robinson, code EPSG 53030.
                        </span>
                    </p>
                    <p className="paragraphe">
                        <span className="font-bold text-red-400">5. </span>{" "}
                        <span className="font-bold">
                            {" "}
                            Vous devez voir dans cette partie le SCR que vous
                            venez de sélectionner.
                        </span>
                    </p>
                    <p className="paragraphe">
                        Cliquez sur <span className="font-bold">OK</span>.
                    </p>
                    <p className="paragraphe">
                        Toutes les couches du projet sont désormais affichées en
                        Robinson. Leur SCR n'a cependant pas été modifié, ce que
                        vous pouvez{" "}
                        <a href="#" className="lien">
                            vérifier
                        </a>
                        . Observez les modifications apportées aux pays et aux
                        indicatrices de Tissot.
                    </p>
                    <p className="paragraphe italic">
                        Si des bugs d'affichage apparaissent, zoomez ou
                        dézoomez.
                    </p>
                    <p className="paragraphe">
                        Répétez cette manipulation pour que le SCR du projet
                        passe en :
                    </p>
                    <p className="paragraphe">
                        <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                            <li className="my-1">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Mercator, code EPSG 54004
                            </li>
                            <li className="my-1">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Projection azimutale équidistante du pôle Sud,
                                code EPSG 102019
                            </li>
                            <li className="my-1">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                RGF93 / Lambert-93, code EPSG 2154
                            </li>
                        </ul>
                    </p>
                    <p className="paragraphe">
                        Qu'observez-vous dans ce dernier cas ? A quoi cela
                        est-il dû ? <br />
                    </p>
                    <p className="paragraphe italic">
                        {" "}
                        Le RGF93 / Lambert-93 est un système adapté à l'emprise
                        de la France métropolitaine ; tout le reste du monde est
                        donc de plus en plus déformé au fur et à mesure qu'on
                        s'éloigne de la France.
                    </p>
                    <p className="paragraphe italic">
                        Nous allons maintenant repasser le projet en WGS84.
                        Puisqu'il existe dans ce projet des couches en WGS84,
                        vous pouvez utiliser un raccourci pour cela :
                    </p>
                    <p className="paragraphe">
                        <span className="font-bold">
                            {" "}
                            Clic-droit sur une couche (n'importe laquelle
                            puisqu'elles sont toutes trois en WGS84) → SCR de la
                            couche → Définir le SCR du projet depuis cette
                            couche{" "}
                        </span>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_4_def_scr_projet_couche.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                    </p>
                </div>
                <p className="paragraphe">
                    Le SCR du projet est maintenant le même que celui de la
                    couche, c'est-à-dire WGS84.
                </p>
                <p className="paragraphe font-bold text-green-400">
                    Vous avez pu constater que modifier le SCR du projet ne
                    modifie pas les données. Cette manipulation permet de
                    visualiser les données dans le SCR de votre choix, à des
                    fins cartographiques par exemple.
                </p>
            </div>
            <div id="modifscrcouche" className="mt-8 mb-4">
                <div className="border border-b-blue-500 my-2 border-t-transparent border-l-transparent border-r-transparent">
                    <h5 className="text-blue-500 font-nunito text-xl tracking-[1px]">
                        Modifier le SCR d'une couche
                    </h5>
                </div>
                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Nous avons vu que QGIS gère le cas où plusieurs
                            couches dans différents SCR sont affichés dans un
                            même projet. Cependant, certaines manipulations
                            nécessitent que toutes les couches soient dans le
                            même SCR. Par ailleurs, par souci de clarté et pour
                            éviter les erreurs, on peut vouloir travailler avec
                            des couches dans le même SCR.
                        </p>
                        <p className="paragraphe">
                            Pour toutes ces raisons, il est utile de savoir
                            modifier le SCR d'une couche.
                        </p>
                        <p className="paragraphe">
                            Cette manipulation implique de{" "}
                            <span className="font-bold">
                                {" "}
                                recalculer les coordonnées de tous les objets de
                                la couche dans un autre SCR.{" "}
                            </span>
                            .
                        </p>
                        <p className="paragraphe">
                            Par exemple, si la couche d'origine est en WGS84 et
                            contient un point correspondant à la ville de Paris,
                            et que le but est d'obtenir une couche en RGF93 /
                            Lambert-93 , les coordonnées initiales du point
                            (48,89 2,35) en WGS84 seront recalculées pour
                            devenir (652381 6862047) en RGF93 / Lambert-93.
                        </p>
                        <p className="paragraphe">
                            Cette manipulation{" "}
                            <span className="font-bold">
                                crée une nouvelle couche
                            </span>{" "}
                            . La couche d'origine et la couche résultat se
                            superposeront exactement dans QGIS, puisqu'elles
                            contiendront exactement les mêmes objets.
                        </p>
                    </div>
                </div>
                <div className="bg-style-g p-2">
                    <p className="paragraphe italic ml-4">
                        L'objectif sera ici de créer une nouvelle couche pays
                        dans la projection de Bonne (code ESRI 53024).
                    </p>
                    <p className="paragraphe">
                        Pour cela, affichez la boîte à outils de traitements :
                        menu Traitements → Boîte à outils.
                    </p>
                    <div className="bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_4_traitement_reprojeter.jpg"
                            alt="pôle-ard"
                            width={500}
                        />
                    </div>
                    <p className="paragraphe">
                        Dans la barre de recherche de cette boîte à outils,
                        tapez <span className="font-bold">projection</span> et
                        double-cliquez sur l'outil{" "}
                        <span className="font-bold">Reprojeter une couche</span>{" "}
                        .
                    </p>
                </div>
                <p className="paragraphe italic">
                    {" "}
                    Vous noterez que cet outil est improprement nommé : il peut
                    en effet être utiliser pour modifier le SCR d'une couche,
                    que les SCR de départ et d'arrivée soit projetés ou
                    géographiques !
                </p>
                <div className="bg-style-g p-2">
                    <p className="paragraphe  ml-4">
                        La fenêtre suivante apparaît :
                    </p>

                    <div className="bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_4_reprojeter_fenetre.jpg"
                            alt="pôle-ard"
                            width={500}
                        />
                    </div>
                    <p className="paragraphe">
                        <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                            <li className="my-1">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Couche source : sélectionnez{" "}
                                <span className="font-bold">
                                    ne_110m_admin_0_countries
                                </span>{" "}
                                dans la liste
                            </li>
                            <li className="my-1">
                                <FiberManualRecord sx={{ fontSize: 10 }} /> SCR
                                cible : cliquez sur l'icône à droite et
                                choisissez le{" "}
                                <span className="font-bold">
                                    SCR Sphere Bonne, code ESRI 53024
                                </span>
                            </li>
                            <li className="my-1">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Advanced Parameters : dans certains cas, pour
                                passer d'un SCR à un autre, différentes
                                transformations sont disponibles. Nous
                                n'utiliserons pas ici cette option
                            </li>
                            <li className="my-1">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Reprojeté : laissez l'option par défaut, à
                                savoir créer une couche temporaire. Le but étant
                                ici de tester la manipulation, il n'est pas
                                nécessaire de sauvegarder une nouvelle couche
                                sur votre ordinateur.
                            </li>
                        </ul>
                    </p>
                    <p className="paragraphe">
                        Cliquez sur <span className="font-bold">Exécuter</span>.
                    </p>
                    <p className="paragraphe">
                        Si vous avez bien coché la case correspondante, la
                        couche est automatiquement ajoutée à la carte. Sinon,
                        ajoutez-la dans QGIS.
                    </p>
                    <p className="paragraphe">
                        Vérifiez dans ses propriétés que son SCR soit bien
                        Sphere Bonne.
                    </p>
                    <p className="paragraphe">
                        Comment afficher cette couche dans son SCR, pour savoir
                        à quoi ressemble la projection de Bonne ?
                    </p>
                    <p className="paragraphe">
                        Clic droit sur le nom de la couche → SCR de la couche →
                        Définir le SCR du projet depuis cette couche, ou bien
                        dans les propriétés du projet, rubrique SCR, choisissez
                        le SCR Sphere Bonne.
                    </p>
                    <div className="bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_4_bonne.jpg"
                            alt="pôle-ard"
                            width={500}
                        />
                    </div>
                </div>
                <p className="paragraphe font-awesome">
                    Modifier le SCR d'une couche crée une nouvelle couche. Cette
                    manipulation est utile pour pouvoir effectuer ensuite des
                    traitements sur les données, ou pour éviter toute source de
                    confusion en ayant uniquement des données dans le même SCR.
                </p>
                <div id="syst" className="mt-8 mb-4">
                    <div className="border border-b-blue-500 my-2 border-t-transparent border-l-transparent border-r-transparent">
                        <h5 className="text-blue-500 font-nunito text-xl tracking-[1px]">
                            Modifier le SCR d'une couche
                        </h5>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Nous avons vu que QGIS gère le cas où plusieurs
                            couches dans différents SCR sont affichés dans un
                            même projet. Cependant, certaines manipulations
                            nécessitent que toutes les couches soient dans le
                            même SCR. Par ailleurs, par souci de clarté et pour
                            éviter les erreurs, on peut vouloir travailler avec
                            des couches dans le même SCR.
                        </p>
                        <p className="paragraphe">
                            Pour toutes ces raisons, il est utile de savoir
                            modifier le SCR d'une couche.
                        </p>
                        <p className="paragraphe">
                            Cette manipulation implique de{" "}
                            <span className="font-bold">
                                recalculer les coordonnées de tous les objets de
                                la couche dans un autre SCR.
                            </span>
                        </p>
                        <p className="paragraphe">
                            Par exemple, si la couche d'origine est en WGS84 et
                            contient un point correspondant à la ville de Paris,
                            et que le but est d'obtenir une couche en RGF93 /
                            Lambert-93 , les coordonnées initiales du point
                            (48,89 2,35) en WGS84 seront recalculées pour
                            devenir (652381 6862047) en RGF93 / Lambert-93.
                        </p>
                        <p className="paragraphe">
                            Cette manipulation{" "}
                            <span className="font-bold">
                                crée une nouvelle couche
                            </span>
                            . La couche d'origine et la couche résultat se
                            superposeront exactement dans QGIS, puisqu'elles
                            contiendront exactement les mêmes objets.
                        </p>
                    </div>
                </div>
                <div className="bg-style-g p-2">
                    <p className="paragraphe">
                        L'objectif sera ici de créer une nouvelle couche pays
                        dans la projection de Bonne (code ESRI 53024).
                    </p>
                    <p className="paragraphe">
                        Pour cela, affichez{" "}
                        <span className="faont-bold">
                            la boîte à outils de traitements
                        </span>{" "}
                        : menu Traitements → Boîte à outils.
                    </p>
                    <div className="bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_4_traitement_reprojeter.jpg"
                            alt="pôle-ard"
                            width={500}
                        />
                    </div>
                    <p className="paragraphe">
                        Dans la barre de recherche de cette boîte à outils,
                        tapez projection et double-cliquez sur l'outil
                        Reprojeter une couche.
                    </p>
                </div>
                <p className="paragraphe italic">
                    Vous noterez que cet outil est improprement nommé : il peut
                    en effet être utiliser pour modifier le SCR d'une couche,
                    que les SCR de départ et d'arrivée soit projetés ou
                    géographiques !
                </p>
                <div className="bg-style-g p-2">
                    <p className="paragraphe">
                        L'objectif sera ici de créer une nouvelle couche pays
                        dans la projection de Bonne (code ESRI 53024).
                    </p>
                    <div className="bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_4_reprojeter_fenetre.jpg"
                            alt="pôle-ard"
                            width={500}
                        />
                    </div>
                    <p className="paragraphe">
                        Dans la barre de recherche de cette boîte à outils,
                        tapez projection et double-cliquez sur l'outil
                        Reprojeter une couche.
                    </p>
                    <p className="paragraphe">
                        <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                            <li className="my-1">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Couche source : sélectionnez{" "}
                                <span className="font-bold">
                                    ne_110m_admin_0_countries
                                </span>{" "}
                                dans la liste
                            </li>
                            <li className="my-1">
                                <FiberManualRecord sx={{ fontSize: 10 }} /> SCR
                                cible : cliquez sur l'icône à droite et
                                choisissez{" "}
                                <span className="font-bold">
                                    le SCR Sphere Bonne, code ESRI 53024
                                </span>
                            </li>
                            <li className="my-1">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Advanced Parameters : dans certains cas, pour
                                passer d'un SCR à un autre, différentes
                                transformations sont disponibles. Nous
                                n'utiliserons pas ici cette option
                            </li>
                            <li className="my-1">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Reprojeté : laissez l'option par défaut, à
                                savoir créer une couche temporaire. Le but étant
                                ici de tester la manipulation, il n'est pas
                                nécessaire de sauvegarder une nouvelle couche
                                sur votre ordinateur.
                            </li>
                        </ul>
                    </p>
                    <p className="paragraphe">
                        Cliquez sur <span className="font-bold">Exécuter</span>.
                    </p>
                    <p className="paragraphe">
                        Si vous avez bien coché la case correspondante, la
                        couche est automatiquement ajoutée à la carte. Sinon,
                        ajoutez-la dans QGIS.
                    </p>
                    <p className="paragraphe">
                        Vérifiez dans ses propriétés que son SCR soit bien
                        Sphere Bonne.
                    </p>
                    <p className="paragraphe">
                        Comment afficher cette couche dans son SCR, pour savoir
                        à quoi ressemble la projection de Bonne ?
                    </p>
                    <p className="paragraphe italic">
                        Clic droit sur le nom de la couche → SCR de la couche →
                        Définir le SCR du projet depuis cette couche, ou bien
                        dans les propriétés du projet, rubrique SCR, choisissez
                        le SCR Sphere Bonne.
                    </p>

                    <p className="paragraphe">
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_4_bonne.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                    </p>
                </div>
                <p className="paragraphe font-bold text-green-500">
                    Modifier le SCR d'une couche crée une nouvelle couche. Cette
                    manipulation est utile pour pouvoir effectuer ensuite des
                    traitements sur les données, ou pour éviter toute source de
                    confusion en ayant uniquement des données dans le même SCR.
                </p>
                <div id="redefscrcouche" className="mt-8 mb-4">
                    <div className="border border-b-blue-500 my-2 border-t-transparent border-l-transparent border-r-transparent">
                        <h5 className="text-blue-500 font-nunito text-xl tracking-[1px]">
                            Redéfinir le SCR d'une couche
                        </h5>
                    </div>
                    <p className="paragraphe">
                        Il existe une autre manipulation souvent confondue avec
                        le fait de modifier le SCR d'une couche :{" "}
                        <span className="font-bold">
                            redéfinir le SCR d'une couche
                        </span>
                        . Dans ce cas, les coordonnées ne sont pas recalculées
                        et aucune nouvelle couche n'est créée, le SCR associé à
                        la couche est simplement modifié.
                    </p>
                    <p className="paragraphe">
                        Pour reprendre l'exemple utilisé plus haut d'une couche
                        en WGS84 contenant un point correspondant à la ville de
                        Paris de coordonnées (48,89 2,35), si le SCR de cette
                        couche est redéfini en RGF93 / Lambert-93, les
                        coordonnées du point resteront (48,89 2,35) mais ces
                        coordonnées seront renseignées comme étant mesurées dans
                        le SCR RGF93 / Lambert-93.
                    </p>
                    <p className="paragraphe">
                        Le point ne sera donc pas affiché, ou affiché à un
                        endroit aberrant, puisqu'il n'est pas possible de
                        trouver de telles coordonnées dans ce SCR (en RGF93 /
                        Lambert-93, les X varient de 100 000 à 1 200 000 et les
                        Y de 6 000 000 à 7 100 000).
                    </p>
                    <p className="paragraphe">
                        Redéfinir le SCR d'une couche n'est donc utile que dans
                        deux cas bien précis :
                    </p>
                    <p className="paragraphe">
                        <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                            <li className="my-1">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                <span className="font-bold">
                                    le SCR n'est pas défini du tout
                                </span>{" "}
                                , ce qui peut arriver par exemple pour certaine
                                couches trouvées sur internet. Il faudra alors
                                retrouver dans quel SCR a été initialement créée
                                la couche
                            </li>
                            <li className="my-1">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                <span className="font-bold">
                                    {" "}
                                    le SCR est mal défini{" "}
                                </span>{" "}
                                (quelqu'un - ou vous-même ! - a donc déjà
                                effectué cette manipulation à tort)
                            </li>
                        </ul>
                    </p>
                    <p className="paragraphe">
                        Si ça n'est pas clair,{" "}
                        <span className="text-green-300">
                            une autre tentative d'explication plus bas
                        </span>{" "}
                        !
                    </p>
                </div>
                <div className="bg-style-g p-2">
                    <p className="paragraphe  ml-4">
                        Pour être sûr de vous rendre compte si une couche n'a
                        pas de SCR défini, rendez-vous dans le menu Préférences
                        → Options , rubrique SCR :
                    </p>
                    <div className="bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_3_preferences_options_menu.jpg"
                            alt="pôle-ard"
                            width={500}
                        />
                    </div>
                    <div className="bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_4_options_sans_scr.jpg"
                            alt="pôle-ard"
                            width={500}
                        />
                    </div>
                    <p className="paragraphe">
                        Pour l'option{" "}
                        <span className="font-bold">
                            {" "}
                            Quand une nouvelle couche est créée ou quand une
                            couche est chargée sans SCR
                        </span>
                        , choisissez l'option{" "}
                        <span className="font-bold">Demander le SCR</span> .
                    </p>
                </div>
                <p className="paragraphe">
                    Ainsi, si vous chargez une couche dont le SCR n'est pas
                    défini, QGIS vous avertira et vous demandera de spécifier un
                    SCR pour cette couche (ce sera cependant à vous de retrouver
                    le SCR initial dans lequel aura été créée cette couche).
                </p>
                <p className="paragraphe">
                    Nos couches ayant un SCR correctement défini, cette manip ne
                    nous est pas utile ici, mais pour info, voici comment
                    procéder :
                </p>
                <p className="paragraphe">
                    <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                        <li className="my-1">
                            <FiberManualRecord sx={{ fontSize: 10 }} />
                            Pour redéfinir{" "}
                            <span className="font-bold">temporairement</span> le
                            SCR d'une couche : propriétés de la couche →
                            rubrique Source (utile pour tester et retrouver le
                            bon SCR)
                        </li>
                        <li className="my-1">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Pour
                            redéfinir le SCR d'une couche de manière permanente
                            (crée une nouvelle couche) : boîte à outils →
                            Assigner une projection
                        </li>
                        <li className="my-1">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Idem que
                            ci-dessus mais ne crée pas de nouvelle couche,
                            uniquement pour les shapefiles : boîte à outils →
                            Définir la projection du fichier shapefile
                        </li>
                    </ul>
                </p>
            </div>
            <div id="notconf" className="mt-8 mb-4">
                <div className="border border-b-blue-500 my-2 border-t-transparent border-l-transparent border-r-transparent">
                    <h5 className="text-blue-500 font-nunito text-xl tracking-[1px]">
                        Modifier et redéfinir le SCR : à ne pas confondre !
                    </h5>
                </div>
                <p className="paragraphe">
                    La confusion entre les 2 manipulations{" "}
                    <span className="font-bold">modifier le SCR</span> (outil
                    reprojeter) et (
                    <span className="font-bold">re)définir le SCR</span> (dans
                    les propriétés de la couche) est une source d'erreur très
                    courante !
                </p>
                <p className="paragraphe">
                    Pour y voir clair, on peut prendre l'analogie d'un livre.
                    Sur ce livre est collée une étiquette indiquant qu'il est en
                    français. Si vous voulez traduire ce livre en anglais, vous
                    allez traduire tout le contenu du livre (recalculer les
                    coordonnées dans le nouveau SCR), puis enlever l'étiquette «
                    français » pour coller à la place une étiquette « anglais »
                    ; c'est l'équivalent de l'opération consistant à modifier le
                    SCR.
                </p>
                <p className="paragraphe">
                    Redéfinir le SCR consisterait à enlever l'étiquette «
                    français » pour coller à la place une étiquette « anglais »{" "}
                    <span className="font-bold">
                        sans traduire le contenu du livre{" "}
                    </span>
                    (pas de recalcul des coordonnées). On aurait donc un livre
                    toujours en français, mais mal étiqueté.
                </p>
                <p className="paragraphe">
                    Redéfinir le SCR (changer l'étiquette) n'est donc utile que
                    si l'étiquette n'était pas la bonne, ou bien qu'il n'y avait
                    pas d'étiquette du tout (SCR mal défini ou non défini).
                </p>
                <p className="paragraphe">
                    Autrement dit :
                    <div className="bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_4_ne_pas_confondre.png"
                            alt="pôle-ard"
                            width={500}
                        />
                    </div>
                </p>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/geodesie/couche-et-projet"
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
                        to="/app/plan-detailler/recherche-et-ajout-de-donnees/recherche-donne-SIG-internet"
                        className="btn-lien fixed bottom-5 z-20 md:right-52 sm:right-12 right-5"
                    >
                        Chap III <ArrowRightOutlined sx={{ fontSize: 30 }} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default PasSys;
