import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function NumPol() {
    return (
        <div>
            <h4 className="titre-primary" id="top">
                V.5 Numériser des polygones
            </h4>

            <div>
                <ul className="text-blue-500">
                    <li className="my-2">
                        <a href="#createcoupoly" className="lien">
                            Création d'une couche de polygones
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#vision" className="lien">
                            Ajout d'un polygone
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#cutpoly" className="lien">
                            Découpage d'un polygone
                        </a>
                    </li>

                    <li className="my-2">
                        <a href="#frontier" className="lien">
                            Frontière commune entre 2 polygones : comment
                            est-elle gérée ?
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#accro" className="lien">
                            Ajout d'un élément en s'appuyant sur un autre :
                            l'accrochage
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#evite" className="lien">
                            Éviter les intersections entre polygones jointifs
                        </a>
                    </li>
                </ul>
            </div>

            <p className="paragraphe">
                Pour numériser des polygones, les choses se compliquent un
                peu... Nous n'allons pas ici numériser toutes les zones de
                l'île, mais passer en revue quelques techniques d'édition de
                polygones au moyen de quelques exemples.
            </p>
            <p className="paragraphe">
                Il s'agira ici de numériser des zones en fonction de leur type.
                Comme l'indique la légende, certaines zones peuvent avoir 2
                types différents, par exemple réserve forestière et réserve
                fédérale. La couche que nous allons créer contiendra 2 champs,
                type1 et type2
            </p>
            <div className="bg-img">
                <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_oahu_legende.jpg"
                    alt="pôle-ard"
                    width={500}
                />
            </div>
            <p className="paragraphe">
                Vous voyez ici la carte originale à gauche, et avec superposée
                la couche de polygones à droite.
            </p>
            <div className="bg-img">
                <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_oahu_avant.jpg"
                    alt="pôle-ard"
                    width={350}
                />
                <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_oahu_apres.jpg"
                    alt="pôle-ard"
                    width={350}
                />
            </div>
            <p className="paragraphe">
                L'idée est de numériser le polygone de la réserve forestière,
                avec des contours bleus sur la carte, puis de le découper pour
                différencier les zones de cette réserve classées comme « Public
                lands » (en vert) ou comme « Federal Reservations » (en rose).
            </p>

            <div id="createcoupoly" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        {" "}
                        Création d'une couche de polygones
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Créez une couche de polygones en vous reportant
                                si besoin à la{" "}
                                <a href="#" className="lien">
                                    partie V.1
                                </a>{" "}
                                , avec les paramètres suivants :
                            </p>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        nom :{" "}
                                        <span className="font-bold text-green-400">
                                            zones_oahu
                                        </span>
                                        .
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        type :{" "}
                                        <span className="font-bold">
                                            polygone
                                        </span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        deux champs de type texte, de longueur
                                        80, nommés{" "}
                                        <span className="font-bold">
                                            type1 et type2
                                        </span>{" "}
                                        (ils contiendront les types de zone,
                                        tels qu'indiqués dans la légende)
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Vérifiez que cette couche soit bien chargée dans
                                votre projet, ainsi que la carte{" "}
                                <a
                                    href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_05_Numerisation.zip"
                                    className="lien"
                                >
                                    Oahu_Hawaiian_Islands_1906_wgs84.tif.
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="vision" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre"> Ajout d'un polygone</h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Nous allons commencer par numériser la réserve
                            forestière de l'île (hachurée en rouge dans l'image
                            ci-dessous) :
                        </p>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_reserve_foret.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Passez en mode édition pour votre couche de
                                polygones. Zoomez sur la réserve forestière.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_zoom_reserve.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_ajout_icone.jpg"
                                    alt=""
                                />{" "}
                                Cliquez sur l'icône Ajouter une entité
                                polygonale qui a pris la forme d'un polygone.
                            </p>
                            <p className="paragraphe">
                                Cliquez sur un point du polygone, puis ajoutez
                                d'autres sommets comme pour une ligne. La forme
                                du polygone évolue au fur et à mesure.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_debut_num.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Lorsque le polygone est complet, faites un clic
                                droit n'importe où pour le terminer. Il est
                                inutile de cliquer à nouveau sur le premier
                                sommet !
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_premier_polygone.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Vous pouvez maintenant remplir les données
                                attributaires pour ce polygone, par exemple en
                                donnant la valeur{" "}
                                <span className="font-bold">
                                    {" "}
                                    Forest Reserves
                                </span>{" "}
                                en type1, et la valeur{" "}
                                <span className="font-bold">None</span> en
                                type2.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="cutpoly" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre"> Découpage d'un polygone</h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            La partie Nord de notre réserve est occupée par des
                            terres publiques (Public Lands) puis par une réserve
                            fédérale (Federal Reservation). Comment diviser
                            notre polygone pour faire apparaître ces zones ?
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Vérifiez que la barre d'outils{" "}
                                <span className="font-bold">
                                    Numérisation avancée
                                </span>{" "}
                                soit activée : Numérisation avancée doit être
                                cochée dans le{" "}
                                <span className="italic text-green-400">
                                    Menu Vue → Barres d'outils
                                </span>{" "}
                                .
                                <div className="bg-img">
                                    <img
                                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_num_avancee_menu.jpg"
                                        alt="pôle-ard"
                                        width={400}
                                    />
                                </div>
                            </p>
                            <p className="paragraphe">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_decoupe_icone.jpg"
                                    alt=""
                                />{" "}
                                Dans la barre d'outils Numérisation avancée,
                                cliquez sur l'icône Séparer les entités.
                            </p>
                            <p className="paragraphe italic">
                                Attention à ne pas confondre cet outil avec
                                celui pour{" "}
                                <span className="font-bold">
                                    Séparer les parties
                                </span>{" "}
                                juste à sa droite !
                            </p>
                            <p className="paragraphe">
                                Cliquez à l'extérieur du polygone, puis de
                                l'autre côté du polygone en suivant la ligne
                                selon laquelle le découper. Terminez par un clic
                                droit n'importe où. Il est possible de créer des
                                points à l'intérieur du polygone mais il faut
                                terminer par un point à l'extérieur du polygone.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_decoupe.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Procédez de la même manière pour découper la
                                bande de terrain public de Waimano, et la petite
                                langue de terre de Aiea.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_public_lands.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Vous pouvez ensuite mettre à jour les données
                                attributaires :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_attributs_remplis.jpg"
                                    alt="pôle-ard"
                                    width={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="frontier" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        {" "}
                        Frontière commune entre 2 polygones : comment est-elle
                        gérée ?
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_4_noeud_icone.jpg"
                                    alt=""
                                />{" "}
                                A l'aide de l'outil de nœud, déplacez un sommet
                                de la petite langue de terre d'Aiea.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_deplacement_noeud.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_1_selection_icone.jpg"
                                    alt=""
                                />{" "}
                                A l'aide de l'outil de sélection, sélectionnez
                                successivement le polygone d'Aiea, et celui qui
                                l'entoure.
                            </p>
                            <p className="paragraphe">
                                Que constatez-vous ? <br />
                                <i>
                                    Les deux polygones ne sont plus jointifs. Le
                                    déplacement d'un sommet d'un des polygones
                                    n'a pas eu d'effet sur le sommet
                                    correspondant du deuxième polygone.
                                </i>
                            </p>
                            <p className="paragraphe">
                                Rendez-vous maintenant dans le{" "}
                                <span className="font-bold">
                                    menu Projet → Options d'accrochage et
                                    activez l'édition topologique
                                </span>{" "}
                                en enclenchant le bouton correspondant si ça
                                n'est pas déjà fait.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_edition_topologique.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Déplacez à nouveau un sommet d'un des polygones
                                et sélectionnez successivement les deux
                                polygones.
                            </p>
                            <p className="paragraphe">
                                Que constatez-vous ? <br />
                                <i>
                                    {" "}
                                    Les deux polygones sont toujours jointifs.
                                    Le déplacement d'un sommet d'un des
                                    polygones a provoqué le déplacement du
                                    sommet correspondant du deuxième polygone.
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="accro" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        {" "}
                        Ajout d'un élément en s'appuyant sur un autre :
                        l'accrochage
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Pour rajouter un élément qui en touche un autre, il
                            est possible de s'aimanter sur les sommets ou les
                            segments de l'élément déjà existant. Cette propriété
                            n'est bien sûr pas propre seulement aux couches de
                            polygones mais fonctionne aussi pour les couches de
                            lignes et de points.
                        </p>
                        <p className="paragraphe">
                            Ceci permet de faire en sorte que deux polygones
                            soient parfaitement contigus, sans aucun trou ou
                            superposition.
                        </p>
                        <p className="paragraphe">
                            Par exemple, comment faire pour rajouter la partie
                            ouest de la bande de Waimano en s'aimantant aux
                            polygones déjà existants ?
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Rendez-vous dans le{" "}
                                <span className="font-bold">
                                    Menu Projet → Options d'accrochage
                                </span>{" "}
                                (cliquez sur l'image pour voir la fenêtre en
                                plus grand) :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_accrochage_fenetre.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_accrochage_icone.jpg"
                                    alt=""
                                />{" "}
                                Cliquez sur le bouton{" "}
                                <span className="font-bold">
                                    Activer l'accrochage
                                </span>{" "}
                                tout en haut à gauche de la fenêtre.
                            </p>
                            <p className="paragraphe">
                                Choisissez le mode{" "}
                                <span className="font-bold">
                                    Configuration avancée
                                </span>{" "}
                                dans la liste déroulante à droite. La liste des
                                couches présentes dans votre projet QGIS
                                s'affiche.
                            </p>
                            <p className="paragraphe">
                                Vous pouvez ici définir à quelle(s) couche(s) le
                                curseur sera aimanté, s'il sera aimanté
                                uniquement par les sommets ou également par les
                                segments, et à quelle distance d'un sommet ou
                                segment l'aimantage prend effet.
                            </p>
                            <p className="paragraphe">
                                Par exemple, pour être automatiquement aimanté à
                                votre couche de polygone dès que votre curseur
                                approche à moins de 10 pixels d'un sommet de
                                cette couche, cochez la case de{" "}
                                <span className="font-bold">zones_oahu</span>,
                                choisissez le mode{" "}
                                <span className="font-bold">sommet</span> et
                                fixe{" "}
                                <span className="font-bold">10 pixels</span>.
                            </p>
                            <p className="paragraphe">
                                Fermez la fenêtre des paramètres d'accrochage
                                (ou déplacez-là là où elle ne vous gênera pas).
                            </p>
                            <p className="paragraphe">
                                Cliquez sur l'icône{" "}
                                <span className="font-bold">
                                    Ajouter une entité
                                </span>
                                , et approchez-vous d'un sommet d'un polygone
                                déjà créé : votre curseur est aimanté par ce
                                sommet, qui apparaît alors en rose.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_curseur_aimante.jpg"
                                    alt="pôle-ard"
                                    width={400}
                                />
                            </div>
                            <p className="paragraphe">
                                Profitez-en pour numériser la partie Est de la
                                bande d'Aiea, de manière à ce que les deux
                                parties soient parfaitement jointives.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_aiea.jpg"
                                    alt="pôle-ard"
                                    width={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="evite" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        {" "}
                        Éviter les intersections entre polygones jointifs
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            L'accrochage est une propriété pratique pour
                            quelques sommets, mais si vous souhaitez créer un
                            polygone contigu à une autre sur une longue portion
                            (par exemple le polygone en pointillés bleus sur la
                            carte), cela peut être fastidieux de cliquer un à un
                            sur tous les sommets communs.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Pour éviter cela, rendez-vous à nouveau dans le
                                menu Projet → Options d'accrochage et cochez la
                                case{" "}
                                <span className="font-bold">
                                    Éviter le chevauchement
                                </span>{" "}
                                pour la couche zones_oahu.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_eviter_intersections.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Dans la barre d'outils Accrochage, il faut
                                maintenant sélectionner Suivre la configuration
                                avancée dans la liste déroulante :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_suivre_config_avancee.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe italic">
                                Vous pouvez aussi simplement choisir{" "}
                                <span className="font-bold">
                                    Eviter le chevauchement sur la couche active
                                </span>
                                , sans modifier la configuration avancée.
                            </p>
                            <p className="paragraphe">
                                Cliquez sur l'icône{" "}
                                <span className="font-bold">
                                    Ajouter une entité
                                </span>{" "}
                                , et dessinez par exemple le polygone en
                                pointillés bleu correspondant à la surface des
                                terres forestières qui ne sont pas en réserve.
                                Ce polygone est contigu sur une longue portion à
                                des polygones que vous avez déjà créés : ne
                                suivez pas les bords pour cette partie mais
                                contentez-vous de passer au milieu des polygones
                                déjà existants.
                            </p>
                            <p className="paragraphe">
                                Faites un clic droit pour terminer le polygone :
                                les parties du polygone que vous venez de
                                dessiner qui étaient superposées à des polygones
                                déjà existants ont été automatiquement
                                supprimées.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_eviter_intersections_avant.jpg"
                                    alt="pôle-ard"
                                    width={300}
                                />
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_5_eviter_intersections_apres.jpg"
                                    alt="pôle-ard"
                                    width={300}
                                />
                            </div>
                            <p className="paragraphe italic text-center">
                                À gauche, polygone en cours d'édition juste
                                avant le clic droit final, à droite après ce
                                clic droit.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Dans le chapitre suivant, découvrez ce qu'est la
                            topologie !
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/numerisation/numeriser-ligne"
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
                        to="/app/plan-detailler/numerisation/quelque-top"
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

export default NumPol;
