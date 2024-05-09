import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function MisEnPage() {
    return (
        <div className="paragraphe relative">
            <div className="my-4">
                <h1 className="titre-primary" id="top">
                    X.2 Mettre en page une carte
                </h1>
            </div>

            <ul className="my-8 ml-8">
                <li className="my-4">
                    <a href="#preparation" className="lien">
                        Préparation de la mise en page
                    </a>
                </li>

                <li className="my-4">
                    <a href="#mis-en-page" className="lien">
                        Mise en page : une fenêtre dédiée
                    </a>
                </li>

                <li className="my-4">
                    <a href="#modifier" className="lien">
                        Modifier les dimensions de la page
                    </a>
                </li>

                <li className="my-4">
                    <a href="#carte" className="lien">
                        Ajouter une carte
                    </a>
                </li>

                <li className="my-4">
                    <a href="#legende" className="lien">
                        Ajouter une légende
                    </a>

                    <ul className="my-4 ml-10">
                        <li className="my-2">
                            <a href="#cre_leg" className="lien">
                                Création de la légende
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#modif_leg" className="lien">
                                Modifier les éléments
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#ajout_titre" className="lien">
                                Ajouter un titre
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#parametre" className="lien">
                                Autres paramètres de la légende
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="my-4">
                    <a href="#echelle" className="lien">
                        Ajouter une échelle
                    </a>

                    <ul className="my-4 ml-10">
                        <li className="my-2">
                            <a href="#cre_ech" className="lien">
                                Création de l'échelle
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#style_ech" className="lien">
                                Création de l'échelle
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="my-4">
                    <a href="#element" className="lien">
                        Ajout d'éléments supplémentaires : titre, logo, flèche
                        nord...
                    </a>
                </li>

                <li className="my-4">
                    <a href="#situation" className="lien">
                        Ajout d'une carte de situation
                    </a>
                </li>

                <li className="my-4">
                    <a href="#exporter" className="lien">
                        Exporter la carte
                    </a>
                </li>

                <li className="my-4">
                    <a href="#sauvegarder" className="lien">
                        Sauvegarder une mise en page
                    </a>
                </li>
            </ul>

            <div className="my-4">
                <p className="my-4">
                    Une fois vos données représentées de manière satisfaisante,
                    il peut être utile d'en faire une carte.{" "}
                    <span className="font-bold">
                        Cette partie n'a pas pour but d'expliquer les bonnes et
                        mauvaises pratiques en matière de cartographie
                    </span>
                    , mais se bornera à décrire quelques fonctionnalités du mode
                    mise en page de QGIS.
                </p>

                <p className="my-4">
                    L'exemple portera ici sur une carte de la densité de
                    population par communes (carte choroplèthe) en France. Mais
                    vous pouvez choisir le sujet de votre choix, avec vos
                    données !
                </p>
            </div>

            <div className="mt-20">
                <div className="bg-style-b">
                    <h5 className="sous-titre my-4" id="preparation">
                        Préparation de la mise en page
                    </h5>
                </div>

                <div className="bg-style-g p-4 my-4">
                    <p className="my-4">
                        Commencez par ajouter toutes les couches dont vous avez
                        besoin, et supprimez toutes les couches inutiles.
                    </p>

                    <p className="my-4">
                        Choisissez le style de chacune des couches.
                    </p>

                    <p className="my-4">
                        N'oubliez pas également de choisir un SCR adapté pour
                        votre projet (projeté si vous souhaitez créer une
                        échelle en mètres par exemple) (cf.{" "}
                        <span className="lien">Modifier le SCR du projet</span>
                        ).
                    </p>

                    <p className="my-4">
                        Pour aller plus vite, vous pouvez ouvrir le projet tout
                        fait{" "}
                        <span className="lien"> misenpage_densite.qgz </span>.
                        Dans ce cas, nombre des étapes décrites ci-dessous
                        seront déjà réalisées, mais vous pourrez modifier les
                        différents paramètres.
                    </p>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b">
                    <h5 className="sous-titre my-4" id="mis-en-page">
                        Mise en page : une fenêtre dédiée
                    </h5>
                </div>

                <p className="my-4">
                    Le mode mise en page ouvre une fenêtre à part dans QGIS. On
                    peut y ajouter différents éléments : carte, légende,
                    échelle... La carte est liée à celle de la fenêtre
                    principale de QGIS et se met à jour automatiquement.
                </p>

                <p className="italic text-sm my-4">
                    Dans la version 2.18 de QGIS, le mode mise en page se
                    nommait « composeur d'impression ».
                </p>

                <div className="bg-style-g p-4 my-4">
                    <p className="my-4">
                        Si vous partez du projet tout fait
                        <span className="lien"> misenpage_densite.qgz</span>,
                        ouvrez la mise en page déjà présente dans ce projet :{" "}
                        <span className="font-bold">
                            menu Projet → Mises en page → densité de population
                        </span>
                        .
                    </p>

                    <p className="my-4">
                        Sinon, créez une nouvelle mise en page :{" "}
                        <span className="font-bold">
                            menu Projet → Nouvelle mise en page...
                        </span>{" "}
                        Tapez un titre, par exemple densité communes.
                    </p>

                    <p className="my-4">
                        La fenêtre de mise en page s'ouvre (ici pour la mise en
                        page déjà existante) :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_misenpage_general.jpg"
                            alt="misenpage_general"
                        />
                    </div>
                </div>

                <p className="my-4">On trouve dans cette fenêtre :</p>

                <ul className="my-4 ml-4">
                    <li className="my-4">
                        <span className="text-red-500">1.</span>{" "}
                        <span className="font-bold">
                            Menus et barres d'outils :{" "}
                        </span>
                        on retrouve les mêmes outils dans les menus ou via les
                        icônes.
                    </li>

                    <li className="my-4">
                        <span className="text-red-500">2.</span>{" "}
                        <span className="font-bold">Mise en page : </span> cette
                        zone correspond à une page blanche, dont vous pouvez
                        paramétrez notamment les dimensions. Vous pouvez ajouter
                        à cette page des cartes (liées à la fenêtre principale
                        de QGIS), légendes, échelles etc.
                    </li>

                    <li className="my-4">
                        <span className="text-red-500">3.</span>{" "}
                        <span className="font-bold">Onglet Eléments : </span>
                        cet onglet comporte la liste des éléments présents sur
                        la page (carte, légende etc.). Vous pouvez les rendre
                        visibles ou invisibles, verrouillés ou non, et en
                        modifier l'ordre.
                    </li>

                    <li className="my-4">
                        <span className="text-red-500">4.</span>{" "}
                        <span className="font-bold">Onglet Historique : </span>{" "}
                        retrouvez ici la liste des dernières opérations que vous
                        avez effectuées, par exemple modifier l'ordre des
                        éléments. En cliquant sur une opération, vous
                        l'effectuez à nouveau.
                    </li>

                    <li className="my-4">
                        <span className="text-red-500">5.</span>{" "}
                        <span className="font-bold">
                            Onglet Mise en page :{" "}
                        </span>{" "}
                        cet onglet permet notamment de définir une grille
                        d'accrochage, et une résolution pour l'export. Le
                        contenu de cet onglet ne change jamais.
                    </li>

                    <li className="my-4">
                        <span className="text-red-500">6.</span>{" "}
                        <span className="font-bold">
                            {" "}
                            Onglet Propriétés de l'objet :{" "}
                        </span>{" "}
                        cet onglet contient les propriétés de l'objet
                        actuellement sélectionné, son contenu varie donc en
                        fonction du type d'objet : carte, légende, texte...
                    </li>

                    <li className="my-4">
                        <span className="text-red-500">7.</span>{" "}
                        <span className="font-bold">Onglet Atlas : </span> QGIS
                        possède un mode Atlas, très pratique si vous avez une
                        série de cartes à faire sur des zones différentes. Nous
                        n'aborderons pas son fonctionnement, mais vous pouvez en
                        savoir plus par exemple ici.
                    </li>

                    <li className="my-4">
                        <span className="text-red-500">8.</span>{" "}
                        <span className="font-bold">Barre d'état : </span> vous
                        pouvez lire ici les coordonnées de votre souris dans la
                        page (il ne s'agit pas de coordonnées géographiques,
                        mais de coordonnées en mm par rapport au coin en haut à
                        gauche de la page) et vous pourrez aussi modifier le
                        niveau de zoom sur la page.
                    </li>
                </ul>
            </div>

            <div className="mt-20">
                <div className="bg-style-b">
                    <h5 className="sous-titre my-4" id="modifier">
                        Modifier les dimensions de la page
                    </h5>
                </div>

                <p className="my-4">
                    La première étape consiste à déterminer les dimensions de la
                    page. Par défaut, il s'agit d'un A4 paysage, mais s'il
                    s'agit d'une figure destinée à être intégrée dans un
                    rapport, vous pouvez très bien choisir une taille
                    personnalisée, par exemple 20 x 20 cm.
                </p>

                <div className="bg-style-g p-4 my-4">
                    <p className="my-4">
                        Faites un{" "}
                        <span className="font-bold">
                            clic droit sur la page → Propriétés de la page.
                        </span>
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_taille_page.jpg"
                            alt="taille_page"
                        />
                    </div>

                    <ul className="my-4 ml-4">
                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Taille :
                            choisissez
                            <span className="font-bold">
                                {" "}
                                Personnalisation{" "}
                            </span>
                            tout en bas de la liste
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Largeur
                            et hauteur :
                            <span className="font-bold"> 200 mm</span>
                        </li>
                    </ul>

                    <p className="my-4">
                        Pour zoomer sur votre page : cliquez sur l'icône
                        <span className="font-bold">
                            {" "}
                            Zoom complet{" "}
                        </span> (ou{" "}
                        <span className="font-bold">
                            menu Vue → Zoom sur l'emprise totale
                        </span>
                        ).
                    </p>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b">
                    <h5 className="sous-titre my-4" id="carte">
                        Ajouter une carte
                    </h5>
                </div>

                <div className="bg-style-g p-4 my-4">
                    <p className="my-4">
                        Cliquez ensuite sur l'icône{" "}
                        <span className="font-bold">Ajouter Carte</span> (ou{" "}
                        <span className="font-bold">
                            menu Ajouter un objet → Ajouter Carte
                        </span>
                        ).
                    </p>

                    <p className="my-4">
                        Dessinez un rectangle n'importe où sur la page, de la
                        taille que vous voulez. Puis rendez-vous dans l'onglet
                        <span className="font-bold">
                            {" "}
                            Propriétés de l'objet
                        </span>
                        , rubrique{" "}
                        <span className="font-bold">
                            Position et taille
                        </span>{" "}
                        (vers le bas de l'onglet).
                    </p>

                    <p className="my-4">
                        Fixez <span className="font-bold">X et Y à 0</span> et
                        la{" "}
                        <span className="font-bold">
                            largeur et hauteur à 200 mm
                        </span>{" "}
                        pour que la carte coïncide avec la page.
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_position_carte.jpg"
                            alt="position_carte"
                        />
                    </div>
                </div>

                <p className="my-4">
                    <span className="font-bold">
                        La carte ainsi créée est synchronisée avec les données
                        visibles dans QGIS :{" "}
                    </span>{" "}
                    si vous changer le style d'une des couches dans la fenêtre
                    principale de QGIS et revenez à la mise en page, la carte
                    aura été mise à jour (si besoin en cliquant sur le bouton
                    actualiser).
                </p>

                <div className="bg-style-g p-4 my-4">
                    <p className="my-4">
                        Pour <span className="font-bold">centrer la carte</span>
                        : cliquez sur l'icône{" "}
                        <span className="font-bold">
                            Déplacer le contenu de l'objet
                        </span>{" "}
                        et faites glisser le contenu de la carte.
                    </p>

                    <p className="my-4">
                        Pour{" "}
                        <span className="font-bold">zoomer et dézoomer</span>, 3
                        méthodes :
                    </p>

                    <ul className="ml-4 my-4">
                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> pour un
                            zoom « à la louche », utilisez la molette de la
                            souris après avoir sélectionné l'outil{" "}
                            <span className="font-bold">
                                Déplacer le contenu de l'objet
                            </span>
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> pour un
                            zoom plus précis : sélectionnez la carte au moyen de
                            l'
                            <span className="font-bold">
                                outil de sélection
                            </span>
                            , puis{" "}
                            <span className="font-bold">
                                modifiez l'échelle
                            </span>{" "}
                            dans l'onglet Propriétés de l'objet → Propriétés
                            principales
                        </li>
                    </ul>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_zoom.jpg"
                            alt="zoom"
                        />
                    </div>

                    <ul className="ml-4 my-4">
                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            Synchroniser la carte de la mise en page avec celle
                            de la fenêtre principale de QGIS : cliquez sur la
                            2ème icône dans la barre d'outils en haut des
                            propriétés de l'objet :
                        </li>
                    </ul>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_zoom2.jpg"
                            alt="zoom2"
                        />
                    </div>

                    <p className="my-4">
                        Il est probable que les 2 cartes ne coïncident pas
                        exactement car elles n'ont pas le même rapport
                        hauteur/largeur. Vous pouvez aussi cliquer sur la 4ème
                        icône pour donner à la carte de votre mise en page la
                        même échelle que dans la fenêtre principale QGIS.
                    </p>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b">
                    <h5 className="sous-titre my-4" id="legende">
                        Ajouter une légende
                    </h5>
                </div>

                <div className="my-4">
                    <p className="my-4">
                        Il existe de nombreuses possibilités pour paramétrer la
                        légende. Elles ne seront pas toutes passées en revue
                        ici, mais n'hésitez pas à explorer par vous-même !
                    </p>
                </div>

                <div className="my-8">
                    <h6 className="sous-titre-italic" id="cre_leg">
                        Création de la légende
                    </h6>

                    <div className="bg-style-g my-4 p-4">
                        <p className="my-4">
                            Pour ajouter une{" "}
                            <span className="font-bold">légende </span>: icône
                            <span className="font-bold"> Ajouter Légende</span>,
                            puis cliquez n’importe où sur la carte.
                        </p>

                        <p className="my-4">
                            La fenêtre{" "}
                            <span className="font-bold">
                                Propriétés de l'élément{" "}
                            </span>
                            s'ouvre : cliquez sur OK sans modifiez les
                            paramètres, ce que vous pourrez toujours faire par
                            la suite.
                        </p>

                        <p className="my-4">
                            La légende reprend celle de la couche dans QGIS : si
                            vous modifiez les étiquettes de la légende dans la
                            propriété de la couche, la légende de la mise en
                            page prendra en compte ces modifications.
                        </p>

                        <p className="my-4">
                            Dans la fenêtre principale de QGIS, ouvrez les
                            propriétés de la couche, rubrique Style. Vous pouvez
                            :
                        </p>

                        <ul className="my-4 ml-4">
                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                <span className="font-bold">
                                    Modifier les bornes des classes{" "}
                                </span>{" "}
                                en double-cliquant sur une ligne dans la colonne
                                valeur
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                <span className="font-bold">
                                    Modifier l'étiquette des classes{" "}
                                </span>{" "}
                                en double-cliquant sur une ligne dans la colonne
                                étiquette
                            </li>
                        </ul>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_style_etiquettes.jpg"
                                alt="style_etiquettes"
                            />
                        </div>

                        <p className="my-4">
                            Revenez ensuite dans la mise en page, les
                            changements que vous avez effectués sont visibles
                            dans la légende puisque la case{" "}
                            <span className="font-bold">Mise à jour auto </span>
                            est cochée par défaut.
                        </p>
                    </div>
                </div>

                <div className="my-8">
                    <h6 className="sous-titre-italic" id="modif_leg">
                        Modifier les éléments
                    </h6>

                    <p className="my-4">
                        Comment faire maintenant si vous désirez encore modifier
                        les éléments de la légende ?
                    </p>

                    <p className="my-4">
                        La case{" "}
                        <span className="font-bold">Mise à jour auto</span>{" "}
                        permet de prendre en compte directement les changements
                        effectués dans la fenêtre principale de QGIS.
                    </p>

                    <p className="my-4">
                        Cette case présente néanmoins l'inconvénient de ne pas
                        vous donner la main sur la légende ; si vous la
                        décochez, vous pourrez changer l'ordre des couches, en
                        ajouter et en supprimer... grâce aux icônes situées sous
                        la légende, et mettre à jour leur légende s'il y a eu
                        modification dans QGIS en cliquant sur le bouton{" "}
                        <span className="font-bold">Tout mettre à jour</span>.
                    </p>

                    <div className="bg-style-g my-4 p-4">
                        <p className="my-4">
                            Cliquez sur votre légende avec l'outil{" "}
                            <span className="font-bold">
                                Sélectionner / Déplacer un objet
                            </span>
                            .
                        </p>

                        <p className="my-4">
                            Décochez la case{" "}
                            <span className="font-bold">Mise à jour auto</span>.
                            Les outils sous la légende sont maintenant activés :
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_objets_legende.jpg"
                                alt="objets_legende"
                            />
                        </div>

                        <p className="my-4">
                            Vous pouvez maintenant, au moyen de ces outils :
                        </p>

                        <ul className="my-4 ml-4">
                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                <span className="font-bold">
                                    Modifier l'ordre
                                </span>{" "}
                                des éléments dans la légende : utile pour mettre
                                les éléments plus importants en premier
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                <span className="font-bold">
                                    Créer des groupes
                                </span>
                                , pour hiérarchiser l'information
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                <span className="font-bold">
                                    Ajouter des couches
                                </span>{" "}
                                présentes dans QGIS et non visibles dans la
                                légende
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                <span className="font-bold">
                                    Supprimer des couches
                                </span>{" "}
                                de la légende, par exemple ici la couche
                                ne_10m_land, qui n'apporte rien à la
                                compréhension de la carte en étant présente dans
                                la légende
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                <span className="font-bold">
                                    Modifier le texte
                                </span>{" "}
                                des éléments, si vous ne l'avez pas déjà fait
                                dans QGIS, par exemple densité de population à
                                la place de COMMUNE
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                <span className="font-bold">
                                    Afficher le nombre d'entités
                                </span>{" "}
                                dans une couche et éventuellement dans chaque
                                classe, après avoir sélectionné une couche
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                <span className="font-bold">
                                    Filtrer la légende en fonction de ce qui est
                                    visible sur la carte
                                </span>
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                <span className="font-bold">
                                    Filtrer la légende en fonction d'une
                                    expression
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="my-8">
                    <h6 className="sous-titre-italic" id="ajout_titre">
                        Ajouter un titre
                    </h6>

                    <p className="my-4">
                        Parfois, il peut être utile d'ajouter un titre à la
                        légende ; dans d'autre cas, le nom de la couche peut
                        suffire.
                    </p>

                    <p className="my-4">
                        <span className="font-bold">
                            Dans tous les cas, évitez d'écrire « Légende »
                        </span>
                        , ce qui n'apporte rien à la carte puisqu'on voit bien
                        qu'il s'agit de la légende. Préférez un titre indiquant
                        clairement le sujet de la carte.
                    </p>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            Dans les propriétés de la légende Propriétés
                            principales, vous pouvez taper un titre.
                        </p>

                        <p className="my-4">
                            Si vous voulez que ce titre soit sur plusieurs
                            lignes, vous pouvez taper un caractère utilisé
                            rarement dans la case{" "}
                            <span className="font-bold">
                                Activer le retour à la ligne après
                            </span>
                            . Ce caractère ne sera pas représenté mais
                            provoquera un retour à la ligne.
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_legende_titre.jpg"
                                alt="legende_titre"
                            />
                        </div>

                        <p className="my-4">
                            Le $ provoquera également une retour à la ligne pour
                            les autres objets de la légende (étiquettes, nom de
                            la couche...).
                        </p>
                    </div>
                </div>

                <div className="my-8">
                    <h6 className="sous-titre-italic" id="parametre">
                        Autres paramètres de la légende
                    </h6>

                    <p className="my-4">
                        Il est possible de modifier beaucoup de paramètres de la
                        légende, comme par exemple la police, l'espacement des
                        éléments...
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_legende_autreparametres.jpg"
                            alt="legende_autreparametres"
                        />
                    </div>

                    <p className="my-4">
                        Voici quelques uns de ces éléments passés en revue,
                        n'hésitez pas à tester !
                    </p>

                    <ul className="my-4 ml-4">
                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">
                                Fonts (Polices) :{" "}
                            </span>{" "}
                            vous pouvez choisir la police, la taille et le style
                            pour le titre, les groupes etc.
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">Colonnes : </span> pour
                            une légende sur plusieurs colonnes
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">Symbole : </span> pour
                            modifier la taille des symboles de légende
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">Espacement : </span>{" "}
                            pour augmenter ou diminuer l'espace entre les
                            différents éléments (par exemple sous le titre)
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">Cadre : </span> pour
                            encadrer ou non la légende
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">Arrière-plan : </span>{" "}
                            pour enlever ou choisir la couleur d'arrière-plan.
                            Cette couleur peut avoir de la transparence.
                        </li>
                    </ul>

                    <p className="my-4">Un exemple de légende :</p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_legende_visu.jpg"
                            alt="legende_visu"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b">
                    <h5 className="sous-titre my-4" id="echelle">
                        Ajouter une échelle
                    </h5>
                </div>

                <div className="my-4">
                    <p className="my-4">
                        Pour certaines cartes, une échelle peut aider le lecteur
                        à mieux comprendre le phénomène représenté.{" "}
                        <span className="font-bold">
                            Dans d'autres, elle ne sera pas nécessaire
                        </span>{" "}
                        (par exemple une carte du monde pour un public déjà
                        familier de ce type de carte).
                    </p>

                    <p className="my-4">
                        On trouve 2 types d'échelles :{" "}
                        <span className="font-bold">numérique</span>, de type
                        1/25000, ou <span className="font-bold">graphique</span>
                        , avec une barre d'échelle. La barre d'échelle est
                        généralement plus claire, et présente l'avantage d'être
                        toujours valable si votre document est imprimé à une
                        taille différente de l'original. QGIS permet la création
                        de ces 2 types d'échelles.
                    </p>

                    <p className="my-4">
                        Attention, si vous utilisez une projection ne conservant
                        pas les distances, votre échelle ne sera pas valable
                        partout. Il est dans ce cas d'usage de préciser par
                        exemple « échelle valable à l'équateur ».
                    </p>
                </div>

                <div className="my-8">
                    <h6 className="sous-titre-italic" id="cre_ech">
                        Création de l'échelle
                    </h6>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            {" "}
                            Pour ajouter une échelle : outil{" "}
                            <span className="font-bold">
                                Ajouter Barre d'échelle
                            </span>{" "}
                            puis dessinez un rectangle sur la carte.
                        </p>

                        <p className="font-bold">
                            Cliquez sur <span className="font-bold">OK </span>
                            dans la fenêtre des propriétés de l'élément qui
                            s'ouvre ensuite (vous pourrez toujours modifier ces
                            paramètres par la suite).
                        </p>

                        <p className="font-bold">
                            Modifiez ensuite éventuellement la taille du
                            rectangle de l'échelle, en cliquant sur un des bords
                            et en maintenant la souris enfoncée :
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_echelle_reduire.jpg"
                                alt="echelle_reduire"
                            />
                        </div>
                    </div>

                    <p className="my-4">
                        Comme pour la légende, il est possible de régler assez
                        finement les différents paramètres de cette échelle.
                    </p>
                </div>

                <div className="my-8">
                    <h6 className="sous-titre-italic" id="style_ech">
                        A chaque échelle son style
                    </h6>

                    <div className="bg-style-g my-4">
                        <p className="my-4">
                            Après avoir sélectionné l'échelle au moyen de
                            l'outil de sélection, vous pouvez en modifier les
                            propriétés dans l'onglet{" "}
                            <span className="font-bold">
                                Propriétés de l'objet
                            </span>
                            .
                        </p>

                        <p className="my-4">
                            Vous pouvez notamment modifier son style, ce qui
                            vous permet de choisir entre 5 styles d'échelle
                            graphique et un type d'échelle numérique, le style
                            par défaut étant{" "}
                            <span className="font-bold"> Boîte unique </span>:
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_echelle_style.jpg"
                                alt="echelle_style"
                            />
                        </div>

                        <p className="my-4">Testez les différents styles :</p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_echelle_boitedouble.jpg"
                                alt="echelle_boitedouble"
                            />
                        </div>
                    </div>

                    <p className="my-4">
                        Vous pouvez également modifier les unités de l'échelle,
                        et l'étiquette des unités :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_echelle_unites.jpg"
                            alt="echelle_unites"
                        />
                    </div>

                    <p className="my-4">
                        Ainsi que le nombre de segments, et la hauteur de la
                        barre d'échelle :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_echelle_segments.jpg"
                            alt="echelle_segments"
                        />
                    </div>

                    <p className="my-4">
                        Sans oublier les couleurs, et la police de caractères :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_echelle_police.jpg"
                            alt="echelle_police"
                        />
                    </div>

                    <p className="my-4">Et bien d'autres paramètres encore !</p>

                    <p className="my-4">
                        Vous pouvez opter pour un style épuré...
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_echelle_visu.jpg"
                            alt="echelle_visu"
                        />
                    </div>

                    <p className="my-4">
                        ...ou bien laisser parler l'artiste qui est en vous :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_echelle_coupemulet.jpg"
                            alt="echelle_coupemulet"
                        />
                    </div>

                    <p className="my-4 img-titre">
                        (Notez bien que je décline toute responsabilité dans ce
                        cas)
                    </p>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b">
                    <h5 className="sous-titre my-4" id="element">
                        Ajout d'éléments supplémentaires : titre, logo, flèche
                        nord...
                    </h5>
                </div>

                <div className="bg-style-g my-4 p-4">
                    <p className="my-4">
                        Pour ajouter du <span className="font-bold">texte</span>
                        , par exemple un titre, les sources, l'auteur... : outil
                        <span className="font-bold"> Ajouter Etiquette </span>.
                    </p>

                    <p className="my-4">
                        Dans les propriétés de cet objet, vous pouvez ensuite
                        modifier le texte, la police, la couleur...
                    </p>

                    <p className="my-4">
                        Si vous voulez ajouter une image, par exemple un logo :
                        outil <span className="font-bold"> Ajouter Image </span>
                        puis dessinez un rectangle sur la page.
                    </p>

                    <p className="my-4">
                        Dans les propriétés principales, choisissez ensuite une
                        image sur votre ordinateur. Attention, il faut choisir
                        <span className="font-bold"> image raster</span> si
                        votre image est au format JPG, PNG... ou bien{" "}
                        <span className="font-bold">image SVG</span> si elle est
                        au format vectoriel SVG.
                    </p>

                    <p className="my-4">Pour une image raster :</p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_ajout_image_raster.jpg"
                            alt="ajout_image_raster"
                        />
                    </div>

                    <p className="my-4">Pour une image SVG :</p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_ajout_image_svg.jpg"
                            alt="ajout_image_svg"
                        />
                    </div>
                </div>

                <p className="my-4">
                    Par convention, le Nord est situé en haut de votre carte.
                    Ajouter une flèche Nord si tel est bien le cas n'est donc
                    pas indispensable et peut même alourdir inutilement votre
                    carte. Par ailleurs, suivant la projection que vous
                    utilisez, la flèche Nord peut ne pas être valable pour toute
                    la carte, mais par exemple seulement le long du méridien de
                    référence.
                </p>

                <p className="my-4">
                    Peut-être avez-vous néanmoins besoin d'une flèche Nord, par
                    exemple si le Nord n'est pas en haut de votre carte ?
                </p>

                <div className="bg-style-g my-4 p-4">
                    <p className="my-4">
                        Dans ce cas, utilisez également l'outil{" "}
                        <span className="font-bold">Ajouter Image</span> et
                        choisissez comme image un symbole de flèche Nord. Pour
                        cela, vous pouvez regarder dans les groupes SVG{" "}
                        <span className="font-bold">arrows</span> ou{" "}
                        <span className="font-bold">wind roses</span>.
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_fleche_nord.jpg"
                            alt="fleche_nord"
                        />
                    </div>

                    <p className="img-titre my-4">
                        Il est possible d'ajouter de nouveaux symboles au format
                        SVG à cette bibliothèque, au moyen du bouton ... situé
                        au-dessous.
                    </p>

                    <p className="my-4">
                        Pour que cette flèche Nord soit synchronisée avec la
                        carte, si la carte présente une rotation, descendez
                        jusqu'à la rubrique rotation et cochez{" "}
                        <span className="font-bold">
                            Synchroniser avec la carte
                        </span>{" "}
                        :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_nord_rotation.jpg"
                            alt="nord_rotation"
                        />
                    </div>

                    <p className="my-4">
                        Si la carte présente une rotation (à spécifier dans ses
                        propriétés, toujours dans la mise en page), la flèche
                        aura cette même rotation.
                    </p>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b">
                    <h5 className="sous-titre my-4" id="situation">
                        Ajout d'une carte de situation
                    </h5>
                </div>

                <p className="my-4">
                    Vous pouvez également ajouter une deuxième carte à votre
                    page, qui servira par exemple de carte de situation.
                </p>

                <p className="my-4">
                    Il est possible de faire figurer dans cette deuxième carte
                    un rectangle correspondant à l'emprise de la première carte.
                </p>

                <div className="bg-img my-4">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_apercu.jpg"
                        alt="apercu"
                    />
                </div>

                <div className="bg-style-g p-4 my-4">
                    <p className="my-4">
                        Ajoutez une carte, réglez son emprise et son échelle, et
                        allez dans la rubrique{" "}
                        <span className="font-bold">Aperçu</span> des propriétés
                        de cette carte, pour visualiser l'emprise de votre
                        première carte dans cette deuxième carte :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_apercu_reglage.jpg"
                            alt="apercu_reglage"
                        />
                    </div>

                    <ul className="my-4 ml-4">
                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Cliquez
                            sur le bouton <span className="font-bold">+ </span>
                            pour ajouter un aperçu
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            Choisissez la carte dont vous voulez voir l'emprise
                            dans cette carte. Dans cet exemple, il s'agit de
                            <span className="font-bold"> Carte 1 </span>
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Modifiez
                            éventuellement le style de cadre
                        </li>
                    </ul>
                </div>

                <p className="my-4">
                    Avec plusieurs cartes, il faut gérer la visibilité des
                    couches dans chacune des cartes.
                </p>

                <div className="bg-style-g p-4 my-4">
                    <p className="my-4">
                        Pour cela, vous pouvez utiliser cette méthode :
                    </p>

                    <ul className="my-4 ml-4">
                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Dans
                            QGIS, créez autant de groupes que de cartes dans
                            votre mise en page (clic droit dans la liste des
                            couches, Ajouter un groupe), ici un groupe{" "}
                            <span className="font-bold">carte principale </span>
                            et un groupe{" "}
                            <span className="font-bold">
                                carte de situation
                            </span>
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Dans
                            QGIS, mettez dans chacun des groupes les couches que
                            vous voulez voir figurer dans la mise en page
                            correspondante, quitte à dupliquer certaines couches
                            (clic droit, Dupliquer la couche)
                        </li>
                    </ul>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_groupes_qgis.jpg"
                            alt="groupes_qgis"
                        />
                    </div>

                    <ul className="my-4 ml-4">
                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Toujours
                            dans QGIS, rendez visible uniquement les couches
                            d'un groupe
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Dans le
                            mode mise en page, sélectionnez la carte
                            correspondant au groupe visible dans QGIS, et cochez
                            la case{" "}
                            <span className="font-bold">
                                Verrouiller les couches
                            </span>
                            dans la rubrique{" "}
                            <span className="font-bold"> Couches </span>
                            des propriétés de la carte
                        </li>
                    </ul>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_verrouiller_couches.jpg"
                            alt="verrouiller_couches"
                        />
                    </div>

                    <ul className="my-4 ml-4">
                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Faites
                            de même pour les autres groupes
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b">
                    <h5 className="sous-titre my-4" id="exporter">
                        Exporter la carte
                    </h5>
                </div>

                <p className="my-4">
                    Vous êtes satisfait de votre carte ? Voici venu le moment de
                    l'exporter !
                </p>

                <p className="my-4">
                    Vous pouvez soit l'
                    <span className="font-bold">
                        {" "}
                        exporter au format image{" "}
                    </span>
                    (PNG, JPG) pour l'intégrer directement dans un rapport par
                    exemple, soit l'
                    <span className="font-bold">
                        exporter au format vectoriel
                    </span>{" "}
                    SVG ou PDF pour la retravailler dans un logiciel de dessin
                    type Inkscape ou Adobe Illustrator. Vous pouvez également
                    l'imprimer directement !
                </p>

                <div className="bg-style-g my-4 p-4">
                    <p className="my-4">
                        Pour{" "}
                        <span className="font-bold">
                            exporter au format image
                        </span>{" "}
                        : vous pouvez tout d'abord paramétrer la résolution à
                        laquelle votre carte sera exportée : onglet{" "}
                        <span className="font-bold">
                            Mise en page, Paramètres d'export
                        </span>{" "}
                        :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_export_resolution.jpg"
                            alt="export_resolution"
                        />
                    </div>

                    <p className="img-titre">
                        On considère généralement qu'une résolution de 300 dpi
                        est suffisante pour une impression. Pour en savoir plus
                        sur ce qu'est la résolution d'une image :
                        <a
                            href="http://fr.wikipedia.org/wiki/R%C3%A9solution_(imagerie_num%C3%A9rique)"
                            className="lien"
                        >
                            http://fr.wikipedia.org/wiki/R%C3%A9solution_%28imagerie_num%C3%A9rique%29
                        </a>
                    </p>

                    <p className="my-4">
                        Pour ensuite exporter votre mise en page au format image
                        : à partir de la fenêtre de mise en page,{" "}
                        <span className="font-bold">
                            menu Mise en page → Exporter au format image...
                        </span>
                    </p>

                    <p className="my-4">
                        De nombreux formats sont disponibles : PNG, JPEG,
                        TIFF...
                    </p>
                </div>

                <p className="my-4">
                    Si vous voulez pouvoir modifier votre carte dans un logiciel
                    de dessin vectoriel, il faut l'exporter dans un format
                    vectoriel, SVG ou PDF.
                </p>

                <div className="bg-style-g p-4 my-4">
                    <p className="my-4 font-bold">
                        Pour exporter au format SVG : menu mise en page →
                        Exporter au format SVG...
                    </p>
                </div>

                <p className="my-4">
                    L'export au format SVG peut poser quelques problèmes, en
                    particulier pour gérer la transparence. L'export au format
                    PDF peut parfois être plus pratique pour ensuite retoucher
                    la carte dans un logiciel de dessin.
                </p>

                <div className="bg-style-g p-4 my-4">
                    <p className="my-4 font-bold">
                        Pour exporter au format PDF : menu mise en page →
                        Exporter au format PDF...
                    </p>
                </div>

                <p className="my-4">
                    Vous pouvez également imprimer directement votre carte, par
                    exemple pour tester son rendu.
                </p>

                <div className="bg-style-g p-4 my-4">
                    <p className="my-4 font-bold">
                        Pour imprimer la carte : menu mise en page → Imprimer...
                        ou bien Ctrl + P
                    </p>
                </div>

                <p className="my-4">Un exemple de carte réalisée dans QGIS :</p>

                <div className="my-4 bg-img">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_carte_exemple.jpg"
                        alt="carte_exemple"
                    />
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b">
                    <h5 className="sous-titre my-4" id="sauvegarder">
                        Sauvegarder une mise en page
                    </h5>
                </div>

                <p className="my-4">
                    Dans QGIS, les mises en page sont sauvegardées dans les
                    projets QGZ ou QGS. Pour sauvegarder votre mise en page, il
                    vous suffit donc de sauvegarder votre projet.
                </p>

                <div className="bg-style-g my-4 p-4">
                    <p className="my-4">
                        Dans la fenêtre principale de QGIS, rendez-vous dans le{" "}
                        <span className="font-bold">
                            menu Projet → Enregistrer sous....
                        </span>
                    </p>

                    <p className="my-4">
                        Choisissez un emplacement : dossier
                        <span className="font-bold">
                            {" "}
                            TutoQGIS_10_Representation/projets{" "}
                        </span>
                        par exemple, et un nom :{" "}
                        <span className="font-bold">carte_densite_01</span> par
                        exemple.
                    </p>

                    <p className="my-4">
                        Un projet peut contenir plusieurs mises en page. Pour
                        renommer, ajouter, supprimer ou dupliquer des mises en
                        page :{" "}
                        <span className="font-bold">
                            menu Projet → Gestionnaire de mise en page....
                        </span>
                    </p>

                    <div className="my-4 bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_02_gestionnaire_misenpage.jpg"
                            alt="gestionnaire_misenpage"
                        />
                    </div>
                </div>

                <p className="my-4">
                    Vous savez maintenant présenter vos travaux de manière
                    claire, bravo ! Le chapitre suivant traitera d'un tout autre
                    sujet, à savoir l'automatisation de tâches dans QGIS...
                </p>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/representation-et-mis-en-page/representation"
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
                        to="/app/plan-detailler/automatisation-des-traitements"
                        className="btn-lien fixed bottom-5 z-20 md:right-52 sm:right-12 right-5"
                    >
                        <span className="hidden lg:block">Chap XI</span>{" "}
                        <ArrowRightOutlined sx={{ fontSize: 30 }} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default MisEnPage;
