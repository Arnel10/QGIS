import {
    ArrowDropDown,
    ArrowDropUp,
    ArrowRightOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function Repres() {
    return (
        <div className="paragraphe relative">
            <div className="my-4">
                <h1 className="titre-primary" id="top">
                    X.1 Représenter des données : différentes méthodes adaptées
                    à différents cas
                </h1>
            </div>

            <ul className="my-10 ml-8">
                <li className="my-4">
                    <a href="#symbole" className="lien">
                        Représenter des quantités ou des effectifs : carte en
                        symboles proportionnels
                    </a>

                    <ul className="my-4 ml-10">
                        <li className="my-2">
                            <a href="#poly" className="lien">
                                Créer une couche de points à partir d'une couche
                                de polygones
                            </a>
                        </li>

                        <li className="my-2">
                            <a href="#varier" className="lien">
                                Faire varier la surface de points en fonction
                                d'un champ
                            </a>
                        </li>

                        <li className="my-2">
                            <a href="#surface" className="lien">
                                Surface, rayon, Flannery... Pour en savoir plus
                                sur les différentes méthodes
                            </a>
                        </li>

                        <li className="my-2">
                            <a href="#petit" className="lien">
                                Les plus petits devant ! Modifier l'ordre
                                d'affichage des symboles
                            </a>
                        </li>

                        <li className="my-2">
                            <a href="#legende" className="lien">
                                C'est mieux avec la légende
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="my-4">
                    <a href="#var" className="lien">
                        Représenter des variables relatives à des surfaces :
                        cartes choroplèthes
                    </a>

                    <ul className="my-4 ml-10">
                        <li className="my-2">
                            <a href="#creer" className="lien">
                                Créer un champ de densité de population
                            </a>
                        </li>

                        <li className="my-2">
                            <a href="#couleur" className="lien">
                                Faire varier la couleur des communes en fonction
                                du champ densité
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="my-4">
                    <a href="#points" className="lien">
                        Représenter des quantités ou des effectifs : cartes en
                        semis de points
                    </a>
                </li>

                <li className="my-4">
                    <a href="#dist" className="lien">
                        Connaître la distribution de ses données
                    </a>

                    <ul className="my-4 ml-10">
                        <li className="my-2">
                            <a href="#simple" className="lien">
                                Histogramme simple
                            </a>
                        </li>

                        <li className="my-2">
                            <a href="#plotly" className="lien">
                                Histogramme avec l'extension Plotly
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="my-4">
                <p className="my-4">
                    Il existe de nombreuses manières de représenter les données.
                    Nous en avons abordées certaines dans les précédentes
                    parties, et nous en verrons quelques unes plus en détail
                    ici. Il en existe beaucoup d'autres !
                </p>

                <p className="my-4">
                    Le <span className="lien">chapitre suivant</span> abordera
                    quant à lui la mise en page proprement dite, dans le module
                    dédié de QGIS, qui permet d'exporter une carte avec légende,
                    titre, échelle...
                </p>

                <p className="my-4">
                    A partir d'une couche de communes et leur population, nous
                    allons voir différentes manières de visualiser cette
                    population.
                </p>

                <p className="my-4">
                    <span className="font-bold">
                        Nous ne parlerons pas ici, ou très peu, de sémiologie
                        graphique et du choix du mode de représentation
                    </span>
                    , ce qui a déjà été fait dans de nombreux ouvrages,
                    notamment :
                </p>

                <ul className="my-4">
                    <li className="my-2 italic text-sm">
                        <FiberManualRecord sx={{ fontSize: 10 }} /> Sémiologie
                        graphique: Les diagrammes - Les réseaux - Les cartes de
                        Jacques Bertin
                    </li>

                    <li className="my-2 italic text-sm">
                        <FiberManualRecord sx={{ fontSize: 10 }} /> Sémiologie
                        Manuel de cartographie de Nicolas Lambert et Christine
                        Zanin
                    </li>

                    <li className="my-2 italic text-sm">
                        <FiberManualRecord sx={{ fontSize: 10 }} /> Sémiologie
                        Pratiques de la cartographie d'Anne Le Fur
                    </li>
                </ul>
            </div>

            <div className="mt-20">
                <div className="my-4 bg-style-b">
                    <h5 className="sous-titre" id="symbole">
                        Représenter des quantités ou des effectifs : carte en
                        symboles proportionnels
                    </h5>
                </div>

                <div className="my-4">
                    <p className="my-4">
                        Les cartes en symbole proportionnels permettent la
                        représentation de quantités ou d'effectifs par des
                        symboles, généralement des cercles. La surface des
                        symboles sera proportionnelle à la quantité ou
                        l'effectif.
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_exemple_cercleprop.jpg"
                            alt="exemple_cercleprop"
                        />
                    </div>

                    <p className="my-4 img-titre">
                        Exemple d'une carte en cercles proportionnels réalisée
                        par Nicolas Lambert et Ronan Ysebaert (2018). Source :
                        carnet{" "}
                        <a
                            href="https://neocarto.hypotheses.org/5064"
                            className="lien"
                        >
                            (néo)cartographique
                        </a>
                        .
                    </p>
                </div>

                <div className="my-8">
                    <h6 className="sous-titre-italic" id="poly">
                        Créer une couche de points à partir d'une couche de
                        polygones
                    </h6>

                    <p className="my-4">
                        Dans QGIS, la visualisation de données sous forme de
                        cercles proportionnels peut se faire directement à
                        partir d'une couche de polygone (c'est alors les
                        centroïdes des polygones qui sont représentés) mais est
                        plus simple à partir d'une couche de points.
                    </p>

                    <p className="my-4 font-bold">
                        A partir de la couche de communes, nous allons créer les
                        centroïdes (barycentres) des communes.
                    </p>

                    <p className="my-4">
                        Qu'est-ce que le{" "}
                        <a
                            href="https://en.wikipedia.org/wiki/Centroid"
                            className="lien"
                        >
                            centroïde{" "}
                        </a>
                        d'un polygone ? Il s'agit du centre géométrique de ce
                        polygone. Concrètement, cela correspond au point où une
                        forme en papier du polygone tiendrait en équilibre sur
                        une épingle. Sans entrer dans le détail du calcul des
                        coordonnées d'un centroïde, l'idée est de minimiser la
                        distance au carré de ce centroïde à chacun des sommets
                        du polygone.
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_centroides_principe.jpg"
                            alt="centroides_principe"
                        />
                    </div>

                    <p className="img-titre my-4">
                        Exemple de polygones (en gris) et de leurs centroïdes
                        (en rouge).
                    </p>

                    <p className="my-4">
                        <span className="font-bold">
                            Les centroïdes peuvent se situer en-dehors des
                            polygones
                        </span>
                        , comme par exemple dans le cas de la commune de
                        Remoiville dans la Meuse :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_centroides_dehors.jpg"
                            alt="centroides_dehors"
                        />
                    </div>

                    <p className="my-4">
                        Dans notre utilisation, cela nous est égal que le
                        centroïde soit au centre exact du polygone ; par contre,
                        <span className="font-bold">
                            il sera plus lisible qu'il tombe toujours à
                            l'intérieur du polygone
                        </span>
                        . Il existe donc généralement dans les logiciels SIG une
                        variante de l'outil de centroïdes, qui crée des
                        centroïdes parfois imparfaits mais toujours dans les
                        polygones !
                    </p>

                    <p className="my-4">
                        C'est la raison pour laquelle nous allons utiliser ici
                        l'outil{" "}
                        <span className="font-bold">
                            Point dans la surface{" "}
                        </span>
                        . Il existe donc généralement dans les logiciels SIG une
                        variante de l'outil de centroïdes, qui crée des
                        <span className="font-bold">centroïdes</span> parfois
                        imparfaits mais toujours dans les polygones !
                    </p>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            Ouvrez un nouveau projet QGIS, ajoutez la couche
                            <span className="font-bold lien">
                                {" "}
                                COMMUNE.shp{" "}
                            </span>
                            située dans le dossier
                            <span className="font-bold">
                                TutoQGIS_10_representation/donnees
                            </span>
                            .
                        </p>

                        <p className="my-4">
                            Dans la barre de recherche de la boîte à outils,
                            tapez par exemple point dans pour trouver plus
                            facilement l'outil{" "}
                            <span className="font-bold">
                                point dans la surface
                            </span>{" "}
                            (rubrique Géométrie vectorielle) :
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_centroides_menu.jpg"
                                alt="centroides_menu"
                            />
                        </div>

                        <p className="my-4">Double-cliquez sur cet outil :</p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_centroides_fenetre.jpg"
                                alt="centroides_fenetre"
                            />
                        </div>

                        <ul className="my-4 ml-8">
                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Couche source : choisir la couche{" "}
                                <span className="font-bold lien">COMMUNE</span>
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Point cliquez sur le bouton à droite ..., allez
                                à l'emplacement où vous voulez créer la couche
                                de centroïdes et donnez-lui un nom :
                                <span className="font-bold lien">
                                    {" "}
                                    communes_centroides{" "}
                                </span>
                            </li>
                        </ul>

                        <p className="my-4">
                            <span className="font-bold">Exécuter</span>... La
                            couche de centroïdes est ajoutée à QGIS : un point a
                            été créé par commune.
                        </p>

                        <div className="my-4 bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_centroides_visu.jpg"
                                alt="centroides_visu"
                            />
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <h6 className="sous-titre-italic" id="varier">
                        Faire varier la surface de points en fonction d'un champ
                    </h6>

                    <p className="my-4">
                        Il est ensuite possible de faire varier la surface des
                        centroïdes des communes en fonction d'un champ, ou d'une
                        expression :
                    </p>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            Couche{" "}
                            <span className="lien font-bold">
                                communes_centroides :{" "}
                            </span>
                            <span className="font-bold">
                                Propriétés → Symbologie → bouton à droite de
                                Taille → Assistant... :
                            </span>
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_assistant_taille_acces.jpg"
                                alt="assistant_taille_acces"
                            />
                        </div>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_assistant_fenetre.jpg"
                                alt="assistant_fenetre"
                            />
                        </div>
                    </div>

                    <p className="my-4">
                        Le principe est simple : cet outil lit les valeurs
                        minimum et maximum pour un champ de la table
                        attributaire, et leur fait correspondre une surface
                        minimum et maximum. Les surfaces correspondant aux
                        valeurs intermédiaires sont interpolées.
                    </p>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            <span className="font-bold"> Partie Saisie : </span>{" "}
                            cette partie concerne les valeurs de la variable
                            utilisée.
                        </p>

                        <ul className="my-4 ml-8">
                            <li className="my-2">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Source : il s'agit du champ dont les valeurs
                                seront utilisées, ici{" "}
                                <span className="font-bold">POPULATION</span>
                            </li>

                            <li className="my-2">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Valeurs depuis... à ... : cliquez sur le bouton
                                Actualiser à droite pour lire automatiquement
                                les valeurs minimum et maximum de population,
                                ici 0 et 2190327
                            </li>
                        </ul>

                        <p className="my-4">
                            <span className="font-bold"> Partie Sortie : </span>{" "}
                            cette partie concerne la manière dont les valeurs
                            seront représentées.
                        </p>

                        <ul className="my-4 ml-8">
                            <li className="my-2">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Taille depuis... à ... : choisissez ici les
                                surfaces correspondant aux valeurs minimale et
                                maximale. Vous pouvez tester différentes
                                valeurs, le résultat dépendra de l'échelle à
                                laquelle la carte sera lue (France entière,
                                département...)
                            </li>

                            <li className="my-2">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Méthode de calcul : choisissez{" "}
                                <span className="font-bold"> Surface </span>
                                pour faire varier la surface et non le diamètre
                                des cercles
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="my-8">
                    <h6 className="sous-titre-italic" id="surface">
                        Surface, rayon, Flannery... Pour en savoir plus sur les
                        différentes méthodes
                    </h6>

                    <p className="my-4">
                        Pourquoi faire varier la surface des cercles et non leur
                        rayon ? Tout simplement parce qu'ainsi les variations de
                        forme vues par l'œil seront proportionnelles aux
                        variations de la variable représentée. En faisant varier
                        le rayon, l'œil verra un écart plus grand entre une
                        valeur moyenne et une valeur élevée qu'entre une valeur
                        faible et une valeur moyenne, même si la différence est
                        la même.
                    </p>

                    <p className="my-4">
                        La méthode de
                        <a
                            href="http://wiki.gis.com/wiki/index.php/Proportional_symbol_map#Apparent_Magnitude_.28Flannery.29_Scaling"
                            className="lien"
                        >
                            {" "}
                            Flannery{" "}
                        </a>
                        est une technique utilisée pour compenser le fait que,
                        même si l'œil lit mieux les variations de surface que de
                        taille, il ne les interprète cependant pas toujours
                        exactement. Même si cette méthode est intéressante,
                        étant donné que la méthode la plus utilisée en
                        cartographie est de faire varier la surface, il n'est
                        pas forcément recommandé de l'utiliser, à moins de bien
                        le préciser sur votre carte.
                    </p>

                    <p className="my-4">
                        La méthode exponentielle permet de surreprésenter les
                        valeurs extrêmes (en ajustant l'exposant) et peut être
                        utile à des fins d'exploration.
                    </p>

                    <div className="flex lg:flex-row flex-col">
                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_methode_flannery.jpg"
                                alt="methode_flannery"
                            />
                        </div>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_methode_surface.jpg"
                                alt="methode_surface"
                            />
                        </div>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_methode_rayon.jpg"
                                alt="methode_rayon"
                            />
                        </div>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_methode_exponentiel.jpg"
                                alt="methode_exponentiel"
                            />
                        </div>
                    </div>

                    <p className="my-4">
                        {" "}
                        Si vous ne devez retenir qu'une chose :{" "}
                        <span className="font-bold">
                            faites varier la surface de vos cercles, pas leur
                            rayon !
                        </span>{" "}
                        Cela permettra une lecture plus juste du phénomène que
                        vous représentez.
                    </p>
                </div>

                <div className="my-8">
                    <h6 className="sous-titre-italic" id="petit">
                        Les plus petits devant ! Modifier l'ordre d'affichage
                        des symboles
                    </h6>

                    <p className="my-4">
                        Comme vous l'avez peut-être remarqué, QGIS affiche les
                        cercles dans l'ordre de la table ; il peut donc arriver
                        que de petits cercles soient masqués par de plus gros
                        cercles.
                    </p>

                    <p className="my-4">
                        Nous allons voir ici comment afficher les cercles par
                        ordre de population, les plus faibles populations
                        par-dessus.
                    </p>

                    <div className="flex lg:flex-row flex-col">
                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_ordre_avant.jpg"
                                alt="ordre_avant"
                            />
                        </div>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_ordre_apres.jpg"
                                alt="ordre_apres"
                            />
                        </div>
                    </div>

                    <p className="img-titre my-4">
                        A gauche, cercles dessinés dans l'ordre de la table ; à
                        droite, cercles dessinés du plus grand au plus petit.
                    </p>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            Dans les propriétés de la couche
                            <span className="lien font-bold">
                                {" "}
                                communes_centroides
                            </span>
                            ,<span className="font-bold"> Symbologie</span>,
                            tout en bas de la fenêtre, cliquez sur
                            <span className="font-bold">
                                {" "}
                                Rendu de couche :{" "}
                            </span>
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_ordre_entites.jpg"
                                alt="ordre_entites"
                            />
                        </div>

                        <p className="my-4">
                            Cochez la case
                            <span className="font-bold">
                                {" "}
                                Contrôle de l'ordre de rendu des entités{" "}
                            </span>{" "}
                            et cliquez sur le bouton tout à droite :
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_ordre_entites_2.jpg"
                                alt="ordre_entites"
                            />
                        </div>

                        <p className="my-4">
                            Choisissez le champ
                            <span className="font-bold"> POPULATION </span>et
                            l'ordre
                            <span className="font-bold"> Descendant </span>:
                            ainsi, les cercles seront dessinés du plus peuplé au
                            moins peuplé.
                        </p>
                    </div>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_prop_visu.jpg"
                            alt="prop_visu"
                        />
                    </div>
                </div>

                <div className="my-8">
                    <h6 className="sous-titre-italic" id="legende">
                        C'est mieux avec la légende
                    </h6>

                    <p className="my-4">
                        QGIS gère normalement les légendes pour les différents
                        types de représentation, mais les cartes en cercles
                        proportionnels présentent un cas particulier où nous
                        devrons nous-même créer la légende.
                    </p>

                    <p className="my-4">
                        Cette fonctionnalité a été rajoutée récemment, ce qui
                        illustre bien le fait que les logiciels SIG ne sont pas
                        initialement pensés comme des logiciels de cartographie
                        (mais ils ont aujourd'hui tellement de possibilité en ce
                        sens que ce serait dommage de se priver !).
                    </p>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            Ouvrez la fenêtre des propriétés, rubrique
                            <span className="font-bold"> Symbologie</span>
                            <span className="font-bold"> Avancé </span>, et
                            cliquez en bas à droite sur{" "}
                            <span className="font-bold">
                                {" "}
                                Légende pour la Taille définie par des données :{" "}
                            </span>
                        </p>

                        <div className="my-4 bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_legende_symbolprop_acces.jpg"
                                alt="legende_symbolprop_acces"
                            />
                        </div>

                        <p className="my-4">
                            Sous cet intitulé un peu obscur se cache une légende
                            paramétrable pour notre carte en cercles
                            proportionnels :
                        </p>

                        <div className="my-4 bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_legende_symbolprop.jpg"
                                alt="legende_symbolprop"
                            />
                        </div>

                        <ul className="my-4 ml-8">
                            <li className="my-4">
                                Par défaut, la légende n'est pas activée. Nous
                                allons choisir ici le mode
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                <span className="font-bold">
                                    {" "}
                                    Légende repliée
                                </span>
                                , où les cercles sont superposés. Dans le mode{" "}
                                <span className="font-bold">
                                    {" "}
                                    Eléments de légende séparés
                                </span>
                                , les cercles sont au-dessous les uns des
                                autres, mais se retrouvent souvent tronqués
                            </li>

                            <li className="my-4">
                                On peut donner un titre à la légende, par
                                exemple
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                <span className="font-bold"> Population</span>,
                                par défaut il s'agit du nom de la couche
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Cochez la case{" "}
                                <span className="font-bold">
                                    {" "}
                                    Taille manuelle des classes{" "}
                                </span>{" "}
                                pour définir vous-même quelles valeurs
                                comportera la légende
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Cliquez ensuite sur le bouton{" "}
                                <span className="font-bold"> + </span> pour
                                ajouter ces valeurs. On recommande généralement
                                de mettre les valeurs minimales et maximales,
                                ainsi qu'une ou deux valeurs intermédiaires.
                                Ici, la valeur minimale étant de 1, elle n'est
                                pas montrée. Notez que vous pouvez choisir
                                quelle sera la valeur affichée dans la légende
                                en modifiant l'étiquette !
                            </li>
                        </ul>

                        <p className="my-4">
                            Cliquer ensuite sur OK, fermez la fenêtre des
                            propriétés. La légende est visible dans la liste des
                            couches, et pourra également être affichée dans une
                            <span className="lien"> mise en page </span>.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="my-4 bg-style-b">
                    <h5 className="sous-titre" id="var">
                        Représenter des variables relatives à des surfaces :
                        cartes choroplèthes
                    </h5>
                </div>

                <div className="my-4">
                    <p className="my-4">
                        Une carte choroplèthe est une carte en aplats de
                        couleurs. Les régions sont colorées selon une mesure
                        statistique telle que la densité de population ou le
                        revenu par habitant. Ce type de carte
                        <a
                            href="https://neocarto.hypotheses.org/5717"
                            className="lien"
                        >
                            {" "}
                            ne peut donc être utilisé pour représenter des
                            quantités ou des effectifs{" "}
                        </a>
                        . Les variables continues doivent être
                        <a
                            href="http://www.hypergeo.eu/spip.php?article374"
                            className="lien"
                        >
                            {" "}
                            discrétisées{" "}
                        </a>{" "}
                        pour produire des classes.
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_carte_choroplethe.jpg"
                            alt="carte_choroplethe"
                        />
                    </div>

                    <p className="my-4 img-titre">
                        Exemple de carte choroplèthe réalisée sous QGIS montrant
                        la densité de population par commune en France
                        métropolitaine, avec une discrétisation par quantiles.
                    </p>
                </div>

                <div className="my-8">
                    <h6 className="sous-titre-italic" id="creer">
                        Créer un champ de densité de population
                    </h6>

                    <p className="my-4">
                        La première étape consistera pour nous à créer un champ
                        densité de population, rempli en fonction de la
                        population et de la surface.
                    </p>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            Ouvrez la table attributaire de
                            <span className="font-bold lien"> COMMUNE</span>,
                            <span className="lien">
                                {" "}
                                passez en mode édition{" "}
                            </span>{" "}
                            et ouvrez la
                            <span className="lien"> calculatrice de champ</span>
                            .
                        </p>

                        <p className="my-4">
                            Calculez dans un nouveau champ nommé
                            <span className="font-bold"> densite </span> de type
                            <span className="font-bold"> décimal </span> la
                            densité de population en
                            <span className="font-bold">
                                {" "}
                                nombre d'habitants par km²
                            </span>
                            .
                        </p>

                        <div className="my-4">
                            <p className="my-4">
                                <ArrowDropDown /> Quelle formule utiliser pour
                                cela ?
                            </p>

                            <p className="my-4 ml-4 text-sm italic">
                                On peut utiliser{" "}
                                <span className="font-bold">$area</span> pour
                                calculer la surface. Les unités de la couche
                                étant des mètres (couche projetée en Lambert
                                93), il faut diviser $area par 1 000 000 pour
                                obtenir des km2.
                            </p>

                            <p className="my-4 ml-4 text-sm italic">
                                Au final, la formule est donc :{" "}
                                <span className="font-boldd">
                                    "POPULATION" / ($area / 1000000)
                                </span>
                            </p>

                            <p className="my-4">
                                Quittez le mode édition. Vérifiez le contenu du
                                champ densite.
                            </p>
                        </div>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_densite_res.jpg"
                                alt="densite_res"
                            />
                        </div>

                        <p className="img-titre">
                            densité des communes classées par code INSEE.
                        </p>
                    </div>
                </div>

                <div className="my-8">
                    <h6 className="sous-titre-italic" id="couleur">
                        Faire varier la couleur des communes en fonction du
                        champ densité
                    </h6>

                    <p className="my-4">
                        Maintenant que ce champ est créé et à jour, il est
                        possible de faire varier la couleur des communes en
                        fonction de la densité.
                    </p>

                    <div className="bg-style-g my-4 p-4">
                        <p className="my-4">
                            Pour faire varier la couleur des communes en
                            fonction de la densité :
                        </p>

                        <p className="my-4 font-bold">
                            Propriétés de la couche COMMUNE → rubrique
                            Symbologie
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_choroplethe_fenetre.jpg"
                                alt="choroplethe_fenetre"
                            />
                        </div>

                        <ul className="my-4 ml-8">
                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Sélectionnez le style{" "}
                                <span className="font-bold">Gradué</span> pour
                                discrétiser les valeurs
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Choisissez la colonne{" "}
                                <span className="font-bold">densite</span> créée
                                précédemment (notez que l'on pourrait aussi
                                cliquer sur le bouton Expression pour calculer
                                ici la densité, sans créer de nouveau champ)
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Choisissez éventuellement une palette de couleur
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Sélectionnez un{" "}
                                <span className="font-bold">
                                    mode de discrétisation
                                </span>{" "}
                                (quantile, intervalles égaux, Jenks) et un
                                <span className="font-bold">
                                    nombre de classes
                                </span>
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Cliquez sur{" "}
                                <span className="font-bold"> Classer </span>
                                pour voir apparaître les classes avec les
                                couleurs qui leur sont attribuées
                            </li>
                        </ul>

                        <p className="my-4">
                            Appliquez ensuite les changements. Vous pouvez
                            tester différents modes de discrétisation et nombres
                            de classes.
                        </p>

                        <p className="my-4">
                            Pour voir l'effectif de chaque classe, clic droit
                            sur le nom de la couche →{" "}
                            <span className="lien">
                                Afficher le nombre d'entités
                            </span>{" "}
                            (les nombres peuvent mettre un peu de temps à
                            s'afficher avec une couche un peu lourde comme ici).
                        </p>

                        <p className="my-4">
                            Pour un meilleur rendu, vous pouvez supprimer les
                            bordures des communes en cliquant sur le symbole
                            puis sur{" "}
                            <span className="font-bold">
                                Remplissage simple → Style de trait → Pas de
                                ligne
                            </span>
                            .
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_enlever_bordure.jpg"
                                alt="enlever_bordure"
                            />
                        </div>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_enlever_bordure_02.jpg"
                                alt="enlever_bordure_02"
                            />
                        </div>

                        <p className="img-titre my-4">
                            Toutefois, même ainsi, les limites restent un peu
                            visibles. Pour ne vraiment plus les voir, il faut
                            rendre visibles ces limites avec une épaisseur fine
                            et leur donner la même couleur que la couleur de
                            remplissage.
                        </p>
                    </div>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_choroplethe_visu.jpg"
                            alt="choroplethe_visu"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="my-4 bg-style-b">
                    <h5 className="sous-titre" id="points">
                        Représenter des quantités ou des effectifs : cartes en
                        semis de points
                    </h5>
                </div>

                <p className="my-4">
                    Une carte en semis de points permet, à partir d'un maillage
                    surfacique, de représenter des quantités ou effectifs par
                    des points placés aléatoirement au sein de chaque polygone.
                    Le nombre de ces points est proportionnel à la quantité ou
                    l'effectif lié au polygone.
                </p>

                <div className="bg-img my-4">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_chicagodots.jpg"
                        alt="chicagodots"
                    />
                </div>

                <p className="img-titre my-4">
                    Carte en semis de points de Chicago (Source : Bill Rankin
                    sur{" "}
                    <a
                        href="http://www.radicalcartography.net/index.html?chicagodots"
                        className="lien"
                    >
                        Radical Cartography
                    </a>
                    ), : 1 point représente un personne, sa couleur est fonction
                    de l'origine de cette personne. Cette carte met en lumière
                    la ségrégation qui a lieu notamment dans certains quartiers
                    des grandes villes.
                </p>

                <p className="my-4">
                    Ici, nous allons créer ces points aléatoires en fonction du
                    champ POPULATION. On pourrait créer un point par personne,
                    mais le temps de création de la couche de points serait très
                    long, et le résultat serait peu lisible.{" "}
                    <span className="font-bold">
                        Nous allons donc créer un point pour 100 personnes.
                    </span>
                </p>

                <p className="my-4">
                    Il faudra donc diviser la population par 100, et arrondir le
                    résultat à l'entier le plus proche, puisqu'on ne peut créer
                    1,2 points.
                </p>

                <div className="bg-style-g p-4 my-4">
                    <p className="my-4">
                        Pour créer les points aléatoires :
                        <span className="lien">
                            {" "}
                            Boîte à outils → Création de vecteurs → Points
                            aléatoires à l'intérieur des polygones
                        </span>
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_pts_aleatoires_menu.jpg"
                            alt="pts_aleatoires_menu"
                        />
                    </div>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_pts_aleatoires_fenetre.jpg"
                            alt="pts_aleatoires_fenetre"
                        />
                    </div>

                    <ul className="my-4 ml-8">
                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Couche
                            source : <span className="font-bold">COMMUNE</span>
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            Stratégie d'échantillonnage :{" "}
                            <span className="font-bold">Nombre de points</span>,
                            pour créer un nombre de points directement
                            proportionnel à la population
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Comptage
                            de points : cliquez sur le bouton à droite,
                            choisissez{" "}
                            <span className="font-bold">éditer </span> et tapez
                            l'expression suivante :{" "}
                            <span className="font-bold">
                                round("POPULATION"/100)
                            </span>
                            , pour diviser la population par 100 et arrondir le
                            résultat pour obtenir un nombre entier
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Laissez
                            les autres paramètres par défaut, pour créer une
                            couche temporaire
                        </li>

                        <li className="my-4">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">Exécuter</span>,
                            patientez, l'opération est un peu longue... et
                            fermez la fenêtre une fois terminé.
                        </li>
                    </ul>

                    <p className="my-4">
                        Ajustez le style de la couche, par exemple à l'échelle
                        du pays :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_style_pts_aleatoires.jpg"
                            alt="style_pts_aleatoires"
                        />
                    </div>
                </div>

                <div className="bg-img my-4">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_pts_aleatoires_visu.jpg"
                        alt="pts_aleatoires_visu"
                    />
                </div>
            </div>

            <div className="mt-20">
                <div className="my-4 bg-style-b">
                    <h5 className="sous-titre" id="dist">
                        Connaître la distribution de ses données
                    </h5>
                </div>

                <div className="my-4">
                    <p className="my-4">
                        Il peut être utile pour mieux comprendre et représenter
                        ses données de connaître leur distribution, par exemple
                        avec un histogramme de fréquence. Ceci peut aider
                        notamment à définir des classes pour une discrétisation.
                    </p>

                    <p className="my-4">
                        Il est plus logique de faire cette étape avant de
                        choisir un mode de représentation ; néanmoins,
                        parce-qu'il est plus simple de l'aborder en sachant déjà
                        discrétiser des données dans QGIS, cette partie arrive
                        en fin de chapitre.
                    </p>

                    <p className="my-4">
                        Nous allons voir 2 méthodes, une directement dans la
                        fenêtre des propriétés de la couche, et l'autre avec
                        l'extension Plotly.
                    </p>

                    <p className="my-4">
                        Ici, nous allons prendre l'exemple de la densité de
                        population pour les communes de France métropolitaine.
                    </p>

                    <div className="bg-style-g my-4 p-4">
                        <p className="my-4">
                            Si ce n'est pas déjà fait, ajoutez à votre projet la
                            couche
                            <span className="lien font-bold">
                                {" "}
                                COMMUNE.shp{" "}
                            </span>
                            située dans le dossier{" "}
                            <span className="font-bold">
                                TutoQGIS_10_representation/donnees
                            </span>
                            .
                        </p>
                    </div>
                </div>

                <div className="my-8">
                    <h6 className="sous-titre-italic" id="simple">
                        Histogramme simple
                    </h6>

                    <p className="my-4">
                        Il existe une méthode simple directement inclue dans
                        QGIS pour avoir un aperçu de la distribution de vos
                        données.
                    </p>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            Ouvrez les propriétés de la couche de communes, et
                            <span className="lien">
                                {" "}
                                choisissez le mode gradué{" "}
                            </span>
                            pour le champ densité
                            <span className="lien">
                                {" "}
                                créé précédemment{" "}
                            </span>{" "}
                            avec une discrétisation par exemple par quantiles.
                        </p>

                        <p className="my-4">
                            Cliquez ensuite sur l'onglet
                            <span className="font-bold">
                                {" "}
                                Histogramme{" "}
                            </span>{" "}
                            (toujours dans la rubrique symbologie) puis sur
                            <span className="font-bold">
                                {" "}
                                Charger les valeurs :
                            </span>
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_histogramme.jpg"
                                alt="histogramme"
                            />
                        </div>
                    </div>
                    <p className="my-4">
                        On ne voit pas grand chose... L'axe des x est créé en
                        fonction des valeurs minimales et maximales, et la
                        plupart des communes ayant une densité inférieure à 1000
                        habitants / km², elles ne sont pas visibles ici.
                    </p>

                    <p className="my-4">
                        Les axes ne sont pas paramétrables et il n'est pas
                        possible de zoomer, ce qui est une limite importante de
                        cet outil. Testons néanmoins pour un jeu de données ne
                        présentant pas de valeur maximale extrême, par exemple
                        pour les communes de densité inférieure à 300
                        habitants/km².
                    </p>

                    <p className="my-4">
                        Pour cela, nous allons{" "}
                        <span className="lien">filtrer les données</span>, ce
                        qui ne modifie pas la couche elle-même.
                    </p>

                    <div className="bg-style-g my-4 p-4">
                        <p className="my-4">
                            Toujours dans la fenêtre des propriétés, rendez-vous
                            dans l'onglet
                            <span className="font-bold"> Source </span> et
                            cliquez sur le bouton{" "}
                            <span className="font-bold">
                                Constructeur de requête
                            </span>{" "}
                            tout en bas de la fenêtre.
                        </p>

                        <p className="my-4">
                            Filtrez uniquement les communes de densité {"<"}
                            300 habitants/km² avec la requête
                            <span className="font-bold">
                                {" "}
                                "densite" {"<"} 300{" "}
                            </span>{" "}
                            . Cliquez ensuite sur
                            <span className="font-bold">OK.</span>{" "}
                        </p>

                        <p className="my-4">
                            Retournez dans la rubrique{" "}
                            <span className="font-bold"> Symbologie </span>,
                            onglet <span className="font-bold"> Classes </span>
                            et cliquez sur le bouton{" "}
                            <span className="font-bold">Classer </span>
                            pour mettre à jour les classes. Dans l'onglet
                            <span className="font-bold"> Histogramme </span>,
                            cliquez sur{" "}
                            <span className="font-bold">
                                Charger les valeurs
                            </span>{" "}
                            pour mettre à jour l'histogramme.
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_histogramme_filtre.jpg"
                                alt="histogramme_filtre"
                            />
                        </div>

                        <p className="my-4">
                            On y voit plus clair ! Au passage, profitez-en pour
                            cocher les cases{" "}
                            <span className="font-bold">moyenne</span> et
                            <span className="font-bold">écart-type</span>. Et
                            vous pouvez ainsi vous rendre compte de l'intérêt
                            principal de cet histogramme : les couleurs sont
                            celles de la discrétisation choisie, et il est
                            possible de modifier les bornes des classes
                            directement dans l'histogramme.
                        </p>

                        <p className="my-4">
                            Testez-le en faisant glisser un des traits
                            correspondant à une borne. En cliquant sur le bouton{" "}
                            <span className="font-bold">Appliquer</span>, les
                            changements sont visibles dans la fenêtre de QGIS.
                        </p>

                        <p className="my-4">
                            Ceci peut être très utile pour appliquer la méthode
                            des{" "}
                            <span className="font-bold">seuils observés</span>:
                            délimiter les classes à la main, en se basant sur
                            les ruptures visibles dans l'histogramme.
                        </p>

                        <p className="my-4">
                            N'oubliez pas de{" "}
                            <span className="font-bold">
                                {" "}
                                supprimer le filtre{" "}
                            </span>{" "}
                            pour travailler à nouveau sur l'ensemble de vos
                            données.
                        </p>
                    </div>
                </div>

                <div className="my-8">
                    <h6 className="sous-titre-italic" id="plotly">
                        Histogramme avec l'extension Plotly
                    </h6>

                    <p className="my-4">
                        Une autre méthode, permettant plus de souplesse au
                        niveau du paramétrage de l'histogramme, mais n'étant pas
                        liée à la discrétisation, consiste à utiliser
                        l'extension{" "}
                        <a
                            href="https://github.com/ghtmtt/DataPlotly"
                            className="font-bold"
                        >
                            {" "}
                            Plotly{" "}
                        </a>
                        créée par Matteo Ghetta (Faunalia).
                    </p>

                    <p className="my-4">
                        Cette extension permet la création de graphiques de
                        différents types (nuages de points, boîtes à moustaches,
                        histogramme...) à partir des données chargées dans QGIS.
                        Nous ne verrons pas ici toutes les fonctionnalités liées
                        à cette extension, mais vous aurez une petite entrevue
                        de ses riches possibilités !
                    </p>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            Il faut tout d'abord{" "}
                            <span className="lien">installer l'extension </span>
                            :{" "}
                            <span className="font-bold">
                                menu Extension → Installer/Gérer les extensions
                            </span>
                            , tapez plotly dans la barre de recherche et cliquez
                            sur{" "}
                            <span className="font-bold">
                                Installer l'extension
                            </span>
                            .
                        </p>

                        <p className="my-4">
                            Plotly est ensuite accessible via le{" "}
                            <span className="font-bold">
                                menu Extension → DataPlotly
                            </span>{" "}
                            ou bien en cliquant sur son icône.
                        </p>

                        <p className="my-4">
                            Un nouveau panneau appraît : il peut être nécessaire
                            de l'agrandir un peu.
                        </p>

                        <p className="my-4">
                            Pour affficher un histogramme de fréquence de la
                            densité de population :
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_plotly_config.jpg"
                                alt="plotly_config"
                            />
                        </div>

                        <ul className="my-4 ml-8">
                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Choisissez le type
                                <span className="font-bold"> Histogram</span>
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} /> Les
                                données à représenter proviennent de la couche
                                <span className="font-bold"> COMMUNE...</span>
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                ...et de son champ
                                <span className="font-bold"> densite</span>
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Cliquez ensuite sur le bouton
                                <span className="font-bold">
                                    {" "}
                                    Créer le graphique{" "}
                                </span>{" "}
                                tout en bas :
                            </li>
                        </ul>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_plotly_graphique_v1.jpg"
                                alt="plotly_graphique_v1"
                            />
                        </div>

                        <p className="my-4">
                            La barre d'outils en haut à droite permet de zoomer,
                            dézoomer etc. dans le graphique.
                        </p>

                        <p className="my-4">
                            Tout est ensuite paramétrable, ou presque, notamment
                            ici :
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_plotly_config1.jpg"
                                alt="plotly_config1"
                            />
                        </div>

                        <p className="my-4">Ou là :</p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_plotly_config2.jpg"
                                alt="plotly_config2"
                            />
                        </div>

                        <p className="my-4">
                            Pour appliquer les changements, il faut cliquer sur
                            <span className="font-bold">
                                {" "}
                                Mettre à jour le graphique
                            </span>{" "}
                            en bas de la fenêtre.
                        </p>

                        <p className="my-4">
                            Par exemple en diminuant la taille des barres et en
                            zoomant :
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/10_01_plotly_graphique_v2.jpg"
                                alt="plotly_graphique_v2"
                            />
                        </div>

                        <p className="my-4">
                            N'hésitez pas à tester les différents paramètres !
                        </p>

                        <p className="img-titre">
                            En-dessous du graphique, il y a 2 boutons pour
                            l'exporter au format HTML (interactif) ou PNG
                            (image).
                        </p>
                    </div>

                    <p className="my-4">
                        En conclusion de ce chapitre, nous avons vu ici trois
                        manières de représenter une même donnée : la population
                        des communes. Il en existe beaucoup d'autres !
                    </p>

                    <p className="my-4">
                        Dans le chapitre suivant, nous aborderons la{" "}
                        <span className="font-bold">
                            {" "}
                            mise en page de cartes
                        </span>{" "}
                        afin par exemple de pouvoir les intégrer dans un article
                        : ajout d'un titre, d'une légende... et export au format
                        image ou vectoriel. L'export au format vectoriel vous
                        permettra de retravailler la carte dans un logiciel de
                        dessin vectoriel.
                    </p>
                </div>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    {/* <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/geodesie/introduction-geodesie"
                    >
                        <ArrowLeftOutlined sx={{ fontSize: 30 }} />{" "}
                        <span className="hidden lg:block">Précédent</span>
                    </NavLink> */}
                </div>

                <div className="fixed bottom-20 z-20 md:right-52 sm:right-12 right-5">
                    <a href="#top" className="btn-lien rounded-full py-4 px-4">
                        <ArrowDropUp />
                    </a>
                </div>

                <div>
                    <NavLink
                        to="/app/plan-detailler/representation-et-mis-en-page/mis-en-page"
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

export default Repres;
