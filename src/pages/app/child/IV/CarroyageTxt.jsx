import {
    ArrowDropDown,
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function CarroyageTxt() {
    return (
        <div className="relative paragraphe">
            <div id="top" className="my-4">
                <h1 className="titre-primary">
                    IV.3 Points de calage : avec un carroyage
                </h1>
            </div>

            <ul className="my-4 mx-8">
                <li>
                    <a href="#creation" className="lien">
                        Création du premier point
                    </a>
                </li>
                <li>
                    <a href="#astuce" className="lien">
                        Quelques astuces pour créer les points suivants
                    </a>
                </li>
            </ul>

            <p className="mt-16">
                Nous allons créer ici des points de calage, c'est-à-dire
                attribuer leurs coordonnées à plusieurs points de l'image.
            </p>

            <p className="mt-4">
                Pour ce faire, nous utiliserons{" "}
                <a href="#" className="lien">
                    la première méthode décrite dans la partie IV.1
                </a>{" "}
                : nous nous baserons sur le carroyage de cette carte pour créer
                les points de calage (la deuxième méthode sera abordée dans la
                <a href="#" className="lien">
                    partie IV.6
                </a>
                ).
            </p>

            <div id="creation" className="mt-20">
                <div className="bg-style-b my-4">
                    <h5 className="sous-titre">Création du premier point</h5>
                </div>

                <div className="bg-style-g px-4 py-4 my-4">
                    <p className="my-4">
                        Lancez QGIS ou créez un nouveau projet, et assurez-vous
                        que le SCR de ce projet soit le{" "}
                        <span className="font-bold">WGS84 EPSG 4326</span>.
                    </p>
                    <p className="my-4">
                        <span className="font-bold">
                            Il est inutile d'ajouter la carte d'Oahu à QGIS
                        </span>{" "}
                        (si vous le faites néanmoins, profitez-en pour observer
                        qu'en l'absence d'informations de localisation pour
                        cette image, QGIS positionne son coin supérieur gauche
                        aux coordonnées (0,0)).
                    </p>
                    <p className="my-4">
                        Ouvrez la fenêtre du géoréférenceur :{" "}
                        <span className="lien">
                            Menu Raster → Géoréférencer...
                        </span>
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_3_georeferenceur_menu.jpg"
                            alt="menu"
                        />
                    </div>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_3_georeferenceur_fenetre.jpg"
                            alt="fenetre"
                        />
                    </div>

                    <p className="img-titre my-4">
                        Il est possible d'afficher le géoréferenceur comme une
                        fenêtre à part ou ancrée. Pour changer de mode, dans la
                        fenêtre du géoréférenceur,
                        <span className="font-bold">
                            {" "}
                            menu Paramètres → Configurer le géoréférenceur...
                        </span>
                        , cochez ou décochez la case{" "}
                        <span className="font-bold">
                            Afficher la fenêtre de géoréférencement dans la
                            fenêtre principale
                        </span>
                        .
                    </p>

                    <p className="my-4">
                        Dans cette fenêtre, ajoutez au géoréférenceur l'image à
                        caler en cliquant sur l'icône{" "}
                        <span className="font-bold">Ouvrir un raster</span>, ou
                        bien{" "}
                        <span className="lien">
                            menu Fichier → Ouvrir raster...
                        </span>{" "}
                        .
                    </p>

                    <div className="bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_3_ouvrir_raster_menu.jpg"
                            alt="raster-menu"
                        />
                    </div>

                    <p className="img-titre my-4">
                        Selon votre version de QGIS, une fenêtre peut s'ouvrir
                        pour demander le SCR de l'image ; puisque nous avons
                        décidé de partir du principe que les coordonnées de
                        cette carte était en WGS84,{" "}
                        <span className="lien">choisissez ce SCR</span> .
                    </p>

                    <div className="bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_3_choix_scr_wgs84.jpg"
                            alt="scr"
                        />
                    </div>

                    <p className="my-4">
                        La carte s'affiche dans la fenêtre du géoréférenceur.
                    </p>

                    <p className="my-4">
                        Il s'agit maintenant de renseigner les coordonnées de
                        plusieurs points, en se basant sur les indications de la
                        carte. Vous pouvez par exemple commencer par le point en
                        haut à gauche :
                    </p>

                    <div className="bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_3_premier_point.jpg"
                            alt="premier-point"
                        />
                    </div>

                    <p className="my-4">
                        Vérifiez que l'icône{" "}
                        <span className="font-bold">Ajouter un point</span> soit
                        bien sélectionnée et cliquez à l'intersection des deux
                        lignes du carroyage :
                    </p>

                    <div className="bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_3_ajout_point_fenetre.jpg"
                            alt="point_fenetre"
                        />
                    </div>

                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> Comment saisir les coordonnées de
                            ce point ?
                        </p>

                        <p className="my-4 italic font-sm">
                            Ce point est situé aux coordonnées -158° 15' Est
                            (longitude négative car le point est à l'ouest du
                            méridien de Greeenwich) et 21° 40' Nord (latitude
                            positive car le point est au Nord de l'équateur).
                        </p>

                        <p className="my-4 italic font-sm">
                            QGIS propose de saisir les coordonnées en degrés
                            minutes secondes sous la forme dd mm ss.ss. Ici,
                            nous avons juste des degrés et des minutes : le
                            point a donc pour coordonnées{" "}
                            <span className="font-bold">-158 15</span> Est et{" "}
                            <span className="font-bold">21 40</span> Nord.
                        </p>

                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_3_ajout_point_fenetre_rempli.jpg"
                                alt="point_fenetre_rempli"
                            />
                        </div>

                        <p className="my-4">
                            Depuis la version 3.22, le choix du SCR se fait
                            directement dans cette fenêtre de saisie d'un point.
                            Vérifiez que le SCR sélectionné soit bien le WGS84,
                            puis cliquez sur{" "}
                            <span className="font-bold">OK</span>.
                        </p>
                    </div>
                </div>

                <p className="my-4">
                    Le point apparaît sous forme d'une ligne dans la table des
                    points de contrôle, sous la carte dans la fenêtre
                    géoréférenceur :
                </p>

                <div className="bg-img">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_3_table_points.jpg"
                        alt="table_points"
                    />
                </div>

                <p className="my-4">
                    Que signifient les différentes colonnes de cette table ?
                </p>

                <ul className="my-4 ml-8">
                    <li className="my-4">
                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                        <span className="font-bold">Visible : </span>indique si
                        le point sera pris en compte ou non pour le
                        géoréférencement. Permet de ne pas prendre en compte
                        certains points qui semblent apporter trop d'erreurs,
                        tout en les gardant en mémoire.
                    </li>
                    <li className="my-4">
                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                        <span className="font-bold">ID : </span>identifiant du
                        point. Peut aider à repérer de quel point il s'agit sur
                        la carte, dans le fenêtre du géoréférenceur comme dans
                        celle de QGIS.
                    </li>
                    <li className="my-4">
                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                        <span className="font-bold">Source X et Y : </span>{" "}
                        coordonnées du point dans l'image non géoréférencée,
                        c'est-à-dire en considérant que le pixel en haut à
                        gauche de l'image a pour coordonnées 0,0.
                    </li>
                    <li className="my-4">
                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                        <span className="font-bold">Destination X et Y : </span>{" "}
                        les coordonnées que l'on souhaite faire prendre à ce
                        point, exprimées dans le SCR choisi précédemment. Ces
                        coordonnées sont en degrés décimaux (ici, -158°15' a été
                        converti en -158,25 degrés décimaux).
                    </li>
                    <li className="my-4">
                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                        <span className="font-bold">
                            dX (pixels) et dY (pixels) :{" "}
                        </span>{" "}
                        la différence entre les coordonnées qu'on souhaiterait
                        voir prendre le point (dstX et dstY) et les coordonnées
                        que prendra effectivement le point après le
                        géoréférencement. En effet, en fonction du type de
                        transformation choisi et du nombre de points de calage,
                        il n'est pas toujours possible de faire coïncider
                        exactement les points avec les coordonnées souhaitées.
                    </li>
                    <li className="my-4">
                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                        <span className="font-bold">Résidu (pixels) : </span>
                        l'erreur associée à ce point, calculée à partir de
                        dX[pixels] et dY[pixels]. Cette erreur est égale à la
                        racine de la somme des carrés de dX[pixels] et
                        dY[pixels], soit : √ ( dX[pixels] ² + dY[pixels] ² )
                    </li>
                </ul>

                <p className="my-4">
                    Dans notre table, les colonnes dX[pixels], dY[pixels] et
                    residual[pixels] ne sont pas encore remplies, car nous
                    n'avons pas encore défini le type de{" "}
                    <span className="font-bold">transformation</span> à
                    effectuer lors du géoréférencement. Cette notion sera
                    abordée dans la partie suivante. En attendant, continuons à
                    ajouter des points de calage pour en avoir par exemple six.
                </p>
            </div>

            <div id="astuce" className="mt-20">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Quelques astuces pour créer les points suivants
                    </h5>
                </div>

                <div className="bg-style-g my-4 px-4 py-4">
                    <p className="my4">
                        Procédez de la même manière pour rajouter 5 autres
                        points de calage. Faites en sorte que ces points soient
                        bien répartis sur l'image.
                    </p>

                    <p className="my-4">
                        Pour visualiser les identifiants et/ou les coordonnées
                        des points sur la carte du géoréférenceur :{" "}
                        <span className="lien">
                            Menu Paramètres → Configurer le géoréférenceur :
                        </span>
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_3_config_georeferenceur_menu.jpg"
                            alt="georef_menu"
                        />
                    </div>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_3_config_georeferenceur_fenetre.jpg"
                            alt="georef_fenetre"
                        />
                    </div>

                    <ul className="my-4 ml-8">
                        <li className="my-2">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Si vous
                            faites une erreur, vous pouvez supprimer un point en
                            cliquant sur l'icône{" "}
                            <span className="font-bold">Effacer un point</span>,
                            puis sur le point à effacer.
                        </li>
                        <li className="my-2">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Vous
                            pouvez également déplacer un point déjà créé en
                            cliquant sur l'icône{" "}
                            <span className="font-bold">
                                Deplacer les points de contrôle
                            </span>
                            , puis en faisant glisser le point à déplacer.
                        </li>
                        <li className="my-2">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Une fois
                            vos points créés, vous pouvez les sauvegarder au
                            moyen du menu{" "}
                            <span className="lien">
                                Fichier → Enregistrer les points de contrôle
                                sous...
                            </span>{" "}
                            ou bien en cliquant sur l'icône correspondante.
                        </li>
                    </ul>

                    <div className="my-4 bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_3_sauv_points_menu.jpg"
                            alt="sauve_points_menu"
                        />
                    </div>

                    <p className="my-4">
                        Cette manipulation crée un fichier avec l'extension
                        .POINTS. Par défaut, ce fichier aura le même nom et sera
                        dans le même dossier que l'image que vous êtes en train
                        de caler. Ces points de calage pourront être chargés
                        dans le géoréférenceur au moyen du{" "}
                        <span className="font-bold">
                            menu Fichier → Charger les points de contrôle...
                        </span>
                        .
                    </p>
                </div>

                <p className="my-4">
                    Voici à quoi ressemble la fenêtre du géoréférenceur une fois
                    tous les poins de calage correspondant à des intersections
                    du carroyage renseignés :
                </p>

                <div className="my-4 bg-img">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_3_avec_tous_les_points.jpg"
                        alt="tous_les_points"
                    />
                </div>

                <p className="my-4">
                    Vous n'êtes pas obligé de renseigner autant de points ! Six
                    suffiront pour notre calage.
                </p>
                <p className="my-4">
                    Les points qui serviront à caler notre image sont maintenant
                    créés. Comment faire pour utiliser ces points pour caler
                    notre image ?
                </p>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/georeferencement/preliminaire"
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
                        to="/app/plan-detailler/georeferencement/param-georef"
                    >
                        <span className="hidden lg:block">Suivant</span>{" "}
                        <ArrowRightOutlined sx={{ fontSize: 30 }} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default CarroyageTxt;
