import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function LanceGeoref() {
    return (
        <div className="relative paragraphe">
            <div className="my-4" id="top">
                <h1 className="titre-primary">
                    IV.5 Lancer le géoréférencement
                </h1>
            </div>

            <ul className="my-4 ml-8">
                <li className="my-2">
                    <a href="#verification" className="lien">
                        Vérification avant calage : les erreurs
                    </a>

                    <ul className="ml-8">
                        <li className="my-2">
                            <a href="#err_local" className="lien">
                                Erreur locale : en chaque point de contrôle
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#err_global" className="lien">
                                Erreur globale : Erreur Quadratique Moyenne
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="my-2">
                    <a href="#lancement" className="lien">
                        Lancement du géoréférencement
                    </a>
                </li>

                <li className="my-2">
                    <a href="#precision" className="lien">
                        Vérification de la précision du calage
                    </a>
                    <ul className="ml-8">
                        <li className="my-2">
                            <a href="#lecture" className="lien">
                                Lecture de la carte et du rapport PDF
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#transp" className="lien">
                                Vérification par superposition d'une autre
                                couche
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="mt-20">
                <div className="bg-style-b my-4" id="verification">
                    <h5 className="sous-titre">
                        Vérification avant calage : les erreurs
                    </h5>
                </div>

                <div className="my-8" id="err_local">
                    <h6 className="sous-titre-italic my-4">
                        Erreur locale : en chaque point de contrôle
                    </h6>

                    <p className="my-4">
                        Maintenant que le type de transformation est renseigné,
                        les erreurs pour chaque pixel ont été calculées dans la
                        table des points de contrôle :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_5_table_avec_erreurs.jpg"
                            alt="table_avec_erreur"
                        />
                    </div>

                    <p className="my-4">
                        Comme indiqué dans la partie{" "}
                        <span className="lien">IV.3.1</span> :
                    </p>

                    <ul className="ml-8 my-4">
                        <li className="my-2">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> les
                            colonnes{" "}
                            <span className="font-bold">
                                dX (pixels) et dY (pixels)
                            </span>{" "}
                            correspondent à la différence entre les coordonnées
                            qu'on souhaiterait voir prendre le point (dstX et
                            dstY) et les coordonnées que prendra effectivement
                            le point après le géoréférencement. Cette valeur
                            variera selon le type de transformation choisie.
                        </li>
                        <li className="my-2">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> La
                            colonne{" "}
                            <span className="font-bold">Résidu (pixels)</span>{" "}
                            correspond à l'erreur associée à ce point, calculée
                            à partir de dX[pixels] et dY[pixels]. Cette erreur
                            est égale à la racine de la somme des carrés de
                            dX[pixels] et dY[pixels], soit : √ ( dX[pixels] ² +
                            dY[pixels] ² )
                        </li>
                    </ul>

                    <div className="bg-style-g my-4 px-4 py-4">
                        <p className="my-4">
                            Classez les points par erreur décroissante, en
                            cliquant deux fois sur l'en-tête de colonne Résidu
                            (pixels).
                        </p>
                        <p className="my-4">
                            Avez-vous dans votre table des points avec des
                            valeurs d'erreur très importantes par rapport aux
                            autres ? Pouvez-vous en trouver la cause ? Vous
                            pouvez décocher les points aberrants dans la colonne
                            on/off.
                        </p>
                    </div>

                    <p className="my-4">
                        Observez que, quand vous décochez un point de contrôle,
                        son erreur résiduelle devient plus grande que lorsqu'il
                        était coché, ce qui traduit une moins bonne précision de
                        calage dans la zone autour de ce point. Il est fortement
                        conseillé, lorsqu'on désactive un point, de le remplacer
                        par un autre point situé dans le voisinage de matière à
                        éviter des zones non prises en compte dans le calage et
                        pour lesquelles on ne peut avoir de résidu, donc
                        d'indicateur de qualité du calage.
                    </p>

                    <div className="bg-style-g my-4 px-4 py-4">
                        <p className="my-4">
                            Vous ne devriez normalement pas obtenir des erreurs
                            résiduelles supérieures à 10 ; si nécessaire,
                            supprimez et recréez des points de calage.
                        </p>
                    </div>
                </div>

                <div className="my-8" id="err_global">
                    <h6 className="sous-titre-italic my-4">
                        Erreur globale : Erreur Quadratique Moyenne
                    </h6>

                    <p className="my-4">
                        Tout en bas de la table des points de contrôle est
                        indiqué le type de transformation utilisée (polynomiale
                        1 dans notre cas) et l'erreur moyenne :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_5_table_emq.jpg"
                            alt="table_emq"
                        />
                    </div>

                    <p className="my-4">
                        En plus de l'erreur résiduelle calculée par pixel, la
                        transformation renvoie une erreur globale appelée{" "}
                        <span className="font-bold">
                            Erreur Quadratique Moyenne (EMQ)
                        </span>{" "}
                        ou bien Root Mean Square (RMS). Cette erreur est
                        calculée de la manière suivante :
                    </p>

                    <p className="my-4">
                        EMQ = √ ( ( Somme dX[pixels] ² + Somme dY[pixels] ² ) /
                        ( nb points – nb points min ) )
                    </p>

                    <p className="my-4">
                        Vous pouvez donc constater que si le nombre de points
                        utilisés est égal au nombre de points minimum associé à
                        la transformation, l'EMQ est considérée comme nulle. Une
                        erreur nulle n'est donc pas forcément révélatrice d'un
                        calage précis...
                    </p>

                    <div className="bg-style-g my-4 px-4 py-4">
                        <p className="my-4">
                            Vérifiez que votre EMQ soit inférieure à 5. Si les
                            erreurs de chacun de vos points sont suffisamment
                            faibles, comme vérifié
                            <span className="lien">plus haut</span>, cela
                            devrait être le cas.
                        </p>
                        <p className="my-4">
                            Vérifiez ce qui se passe si vous décochez tous les
                            points (colonne on/off) sauf trois. Cochez un
                            quatrième point. Cochez à nouveau tous les points,
                            sauf ceux ayant éventuellement des valeurs d'erreur
                            aberrantes.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b my-4" id="verification">
                    <h5 className="sous-titre my-4" id="lancement">
                        Vérification avant calage : les erreurs
                    </h5>
                </div>

                <div className="bg-style-g my-4 px-4 py-4">
                    <p className="my-4">
                        Pour procéder au géoréférencement proprement dit :{" "}
                        <span className="lien">
                            Menu Fichier → Débuter le géoréférencement
                        </span>{" "}
                        ou bien cliquez sur l'icône correspondante.
                    </p>
                    <div className="my-4 bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_5_lancement_menu.jpg"
                            alt="lancement_menu"
                        />
                    </div>
                    <p className="my-4">
                        Une barre de progression d'affiche, le processus peut
                        être relativement long, patientez...
                    </p>
                </div>
                <p className="my-4">
                    Une fois le géoréférencement terminé, l'image calée
                    s'affiche dans QGIS (en plus de s'afficher dans la fenêtre
                    du géoréférenceur).
                </p>
                <div className="bg-style-g my-4 px-4 py-4">
                    <p className="my-4">Fermez la fenêtre du géoréférenceur.</p>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b my-4" id="precision">
                    <h5 className="sous-titre">
                        Vérification de la précision du calage
                    </h5>
                </div>

                <div className="my-8" id="lecture">
                    <h6 className="sous-titre-italic my-4">
                        Lecture de la carte et du rapport PDF
                    </h6>

                    <div className="bg-style-g my-4 px-4 py-4">
                        <p className="my-4">
                            Ouvrez tout d'abord la carte PDF, qui se situe à
                            l'emplacement que vous avez choisi précédemment.
                        </p>
                    </div>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_5_carte.jpg"
                            alt="carte"
                        />
                    </div>

                    <p className="my-4">
                        Cette carte montre le déplacement des différents points
                        de calage. Attention, ce déplacement n'est pas
                        représenté à l'échelle de l'image, mais selon une
                        échelle en pixels située en bas à gauche de l'image.
                    </p>

                    <p className="my-4">
                        Par exemple, le point 0 en haut à gauche s'est déplacé
                        d'environ 2 ou 3 pixels vers le bas et un peu moins d'un
                        pixel vers la gauche. Vous pouvez constater que cette
                        information coïncide avec celle de la table des points :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_5_point_0.jpg"
                            alt="points_0"
                        />
                    </div>

                    <p className="my-4">
                        En effet, les informations des cases dX[pixels] et
                        dY[pixels] indiquent un déplacement de 2,77 pixels en Y
                        (vers le bas) et -0,82 pixels en Y (vers la gauche). Ces
                        chiffres seront différents dans votre cas, mais ils
                        seront cohérents avec votre carte PDF.
                    </p>

                    <p className="my-4">
                        Le rapport PDF contient la carte, la visualisation
                        séparée des erreurs de calage en chaque point, ainsi que
                        la table des points de contrôle avec les erreurs en X,
                        en Y et totale pour chacun d'eux. Il n'indique
                        malheureusement pas la RMSE (ou l'EMQ). Il demeure
                        cependant possible de la recalculer sous un tableur en
                        important le fichier-texte des points de contrôle
                        (extension .points).
                    </p>
                </div>

                <div className="my-8" id="transp">
                    <h6 className="sous-titre-italic my-4">
                        Vérification par superposition d'une autre couche
                    </h6>
                    <p className="my-4">
                        Une bonne manière de vérifier l'exactitude du
                        géoréférencement est de superposer notre couche calée à
                        une couche déjà correctement géoréférencée.
                    </p>
                    <p className="my-4">
                        Ici, nous allons utiliser la couche de pays de{" "}
                        <a
                            href="http://www.naturalearthdata.com/"
                            className="lien"
                        >
                            NaturalEarth.
                        </a>
                    </p>

                    <div className="bg-style-g px-4 py-4 my-4">
                        <p className="my-4">
                            Si ce n'est pas déjà fait, ajoutez à QGIS votre
                            carte calée de l'île d'Oahu.
                        </p>
                        <p className="my-4">
                            Ajoutez ensuite la couche shapefile
                            <span className="lien">
                                ne_10m_admin_0_countries
                            </span>
                            , disponible dans le dossier
                            <span className="font-bold">
                                TutoQGIS_04_Georef/donnees
                            </span>
                            .
                        </p>
                    </div>

                    <p className="my-4">
                        Les deux couches doivent normalement se superposer
                        (ajustez éventuellement le style de la couche de pays).
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/4_5_superposition.jpg"
                            alt="superposition"
                        />
                    </div>

                    <p className="my-4">
                        Félicitations, votre géoréférencement a fonctionné !
                        Vous pouvez si vous le voulez découvrir l'autre méthode
                        pour géoréférencer, en se basant sur une couche déjà
                        calée, dans le chapitre suivant.
                    </p>
                </div>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/georeferencement/param-georef"
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
                        to="/app/plan-detailler/georeferencement/avec-couche-ref"
                    >
                        <span className="hidden lg:block">Suivant</span>{" "}
                        <ArrowRightOutlined sx={{ fontSize: 30 }} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default LanceGeoref;
