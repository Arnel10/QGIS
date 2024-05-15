import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function ContUlMod() {
    return (
        <div className="relative paragraphe">
            <div className="my-4">
                <h4 className="titre-primary" id="top">
                    XI.3 Construire et utiliser un modèle
                </h4>
            </div>

            <div>
                <ul className="text-blue-500">
                    <li className="my-2">
                        <a href="#createmode" className="lien">
                            Création d'un modèle
                        </a>
                        <ul className="ml-8">
                            <li>
                                <a href="#kim" className="lien">
                                    Création du premier paramètre en entrée : couche à découper
                                </a>
                            </li>
                            <li>
                                <a href="#secondeparm" className="lien">
                                    Création du deuxième paramètre en entrée : masque de découpe
                                </a>
                            </li>
                            <li>
                                <a href="#createalogo" className="lien">
                                    Création du premier algorithme : découpage
                                </a>
                            </li>
                            <li>
                                <a href="#secondalgo" className="lien">
                                    Création du second algorithme : modification du SCR
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="my-2">
                        <a href="#savedoc" className="lien">
                            Enregistrement et documentation d'un modèle
                        </a>
                        <ul className="ml-8">
                            <li>
                                <a href="#ezio" className="lien">
                                    Enregistrer un modèle
                                </a>
                            </li>
                            <li>
                                <a href="#auditore" className="lien">
                                    Documenter un modèle
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="my-2">
                        <a href="#app" className="lien">
                            Application
                        </a>
                        <ul className="ml-8">
                            <li>
                                <a href="#decoupecouch" className="lien">
                                    Découpage et reprojection d'une couche
                                </a>
                            </li>
                            <li>
                                <a href="#kenway" className="lien">
                                    Découpage et reprojection de plusieurs couches (utilisation « par lot »)
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <p className="paragraphe">
                Les modèles sont surtout utiles pour chaîner plusieurs traitements. Par exemple, imaginons que notre but soit non seulement de découper une couche par une autre, mais ensuite de changer le SCR de la couche découpée pour la passer en WGS84 par exemple.
            </p>
            <p className="paragraphe">
                Il est possible de créer un modèle enchaînant les deux outils, qui pourra être lancé facilement sur plusieurs couches, et même être exécuté par lot.
            </p>
            <div className="bg-style-g p-2">
                <p className="paragraphe">
                    Dans la boîte à outils Traitements, cliquez sur l'icône Modèles tout en haut à gauche et choisissez Créer un nouveau modèle.
                </p>
                <div className="bg-img">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_creer_modele.jpg"
                        alt="pôle-ard"
                        width={500}
                    />
                </div>
            </div>
            <p className="paragraphe">
                La fenêtre qui s'ouvre comporte une partie à gauche avec 2 onglets, Entrées et Algorithmes, qui vont vous servir à créer le modèle, et une partie vide à droite où votre modèle sera représenté.
            </p>
            <p className="paragraphe">
                Notre modèle comportera 2 paramètres en entrée : une couche vecteur qui sera découpée et une couche vecteur qui servira de masque de découpe. L'outil de découpage va utiliser ces deux paramètres en entrée pour créer une nouvelle couche temporaire. Cette couche temporaire sera utilisée comme paramètre d'entrée pour l'outil de reprojection, qui produira la couche finale.
            </p>
            <div className="bg-img">
                <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_organigramme.svg"
                    alt="pôle-ard"
                    width={500}
                />
            </div>

            <div id="createmode" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Création d'un modèle
                    </h5>
                </div>
                <div className="mt-4">
                    <div className="my-4">
                        <h6 className="sous-titre-italic" id="kim">
                            Création du premier paramètre en entrée : couche à découper
                        </h6>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Dans l'onglet <span className="font-bold">Entrées</span> dans la partie gauche de la fenêtre, <span className="font-bold">double-cliquez</span> sur Couche vecteur :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_modeleur_fenetre.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_def_parametre_fenetre.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}  Nom du paramètre : <span className="font-bold">couche à découper</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} Type de géométrie : <span className="font-bold">Tout type de géométrie</span>, puisque cette couche peut aussi bien être de type point, ligne ou polygone
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} <span className="font-bold">Obligatoire</span> : cochez la case, il ne s'agit pas d'un paramètre optionnel
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <p className="paragraphe">
                            Le paramètre est ajouté au modèle sous forme d'une boîte verte. Vous pouvez éditer ses caractéristiques en double-cliquant sur cette boîte, ou bien en cliquant sur les poinst de suspension en bas à droite de la boîte.
                        </p>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_modele_01.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                    </div>
                    <div className="bg-style-g p-2">
                        <p className="paragraphe">
                            <img src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_zoom_icone.jpg" alt="" /> Si à un moment donné vous ne voyez plus votre modèle dans la partie droite de la fenêtre, cliquez sur l'icône <span className="font-bold">Zoom complet</span>.
                        </p>
                    </div>
                    <h6 className="sous-titre-italic" id="secondeparm">
                        Création du deuxième paramètre en entrée : masque de découpe
                    </h6>
                    <div className="bg-style-g p-2">
                        <p className="paragraphe">
                            Dans l'onglet Entrées, double-cliquez à nouveau sur <span className="font-bold">Couche vecteur</span> :
                        </p>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_def_parametre2_fenetre.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                        <p className="paragraphe">
                            <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "}   Nom du paramètre : <span className="font-bold">couche masque</span>
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} Type de géométrie : <span className="font-bold">polygone</span>
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} Obligatoire
                                </li>
                            </ul>
                        </p>
                        <p className="paragraphe">
                            Une deuxième boîte apparait aux côtés de la première :
                        </p>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_modele_02.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                    </div>
                    <h6 className="sous-titre-italic" id="createalogo">
                        Création du premier algorithme : découpage
                    </h6>
                    <div className="bg-style-g p-2">
                        <p className="paragraphe">
                            Dans l'onglet <span className="font-bold">Algorithmes</span>, rubrique <span className="font-bols">Recouvrement de vecteur</span> → double-cliquez sur l'outil <span className="font-bold">Couper</span> :
                        </p>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_modeleur_fenetre_algos.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_def_algo_fenetre.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                    </div>
                    <p className="paragraphe">
                        L'algorithme apparaît sous forme d'une boîte blanche reliée aux 2 couches en entrée ; de même, vous pouvez éditer ses caractéristiques en double-cliquant sur la boîte.
                    </p>
                    <div className="bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_modele_03.jpg"
                            alt="pôle-ard"
                            width={500}
                        />
                    </div>
                    <h6 className="sous-titre-italic" id="secondalgo">
                        Création du second algorithme : modification du SCR
                    </h6>
                    <div className="bg-style-g p-2">
                        <p className="paragraphe">
                            Toujours dans la fenêtre du modeleur de traitement, <span className="font-bold text-green-400">onglet Algorithmes → Outils généraux pour les vecteur→ Reprojeter une couche</span>  :
                        </p>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_reprojeter.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_def_algo2_fenetre.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                        <p className="paragraphe">
                            <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "}   Description : <span className="font-bold">Reprojeter une couche</span>
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} Couche source : cliquez sur le bouton à gauche pour choisir <span className="font-bold">Sortie d'un algorithme</span> puis dans la liste à droite <span className="font-bold">'Découpé' créé par l'algorithme 'Couper'</span>
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "} SCR cible : laissez <span className="font-bold">EPSG:4326</span>, ce qui correspond au WGS84 (l'idée étant de passer du Lambert 93 au WGS84)
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord
                                        sx={{ fontSize: 10 }}
                                    />{" "}
                                    Reprojecté : tapez le nom de votre choix, par exemple <span className="font-bold">découpé+reprojeté</span>
                                </li>
                            </ul>
                        </p>
                    </div>
                    <p className="paragraphe">
                        Votre modèle est maintenant fini ! Il doit ressembler à ceci :
                    </p>
                    <div className="bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_modele_fini.jpg"
                            alt="pôle-ard"
                            width={500}
                        />
                    </div>
                </div>
            </div>

            <div id="savedoc" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Enregistrement et documentation d'un modèle
                    </h5>
                </div>
                <div className="mt-4">
                    <div className="my-4">
                        <h6 className="sous-titre-italic" id="ezio">
                            Enregistrer un modèle
                        </h6>
                        <p className="paragraphe">
                            Comment faire maintenant pour sauvegarder notre modèle ?
                        </p>
                        <div className="bg-style-g p-2">
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_enregistrer_modele_fenetre.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Dans l'onglet <span className="font-bold"> Propriétés du modèle</span> de la partie gauche de la fenêtre, choisissez le nom sous lequel votre modèle sera disponible dans la boîte à outils, par exemple <span className="font-bold">découper et modifier SCR</span> par exemple.
                            </p>
                            <p className="paragraphe">
                                Tapez également le nom de son groupe, c'est-à-dire la rubrique dans laquelle votre modèle apparaîtra au sein de la boîte à outils : <span className="font-bold">tests</span> par exemple.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Si le groupe n'existe pas déjà, il sera créé.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                <img src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_enregistrer_modele_icone.jpg" alt="" /> Cliquez ensuite sur l'icône <span className="font-bold">Enregistrer le modèle sous</span>. Dans la fenêtre qui s'ouvre alors, choisissez un nom pour votre modèle, par exemple <span className="font-bold">couper_modifSCR</span>.
                            </p>
                            <p className="paragraphe">
                                Notez qu'il va être enregistré dans le répertoire par défaut des modèles : processing/models dans le dossier qgis, et qu'il possède l'extension .model3 (pour QGIS 3).
                            </p>
                        </div>
                        <h6 className="sous-titre-italic" id="auditore">
                            Documenter un modèle
                        </h6>
                        <p className="paragraphe">
                            Si ce modèle est destiné à être utilisé par d'autres personnes, ou tout simplement si vous comptez vous en servir régulièrement, documenter un peu ce modèle sera très pratique. Il s'agit en fait de <span className="font-bold">rédiger l'aide de l'outil</span>, telle qu'on peut la voir dans la partie droite de la fenêtre pour les outils QGIS.
                        </p>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_aide_exemple.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                        <p className="paragraphe italic text-center">
                            Exemple d'aide : l'outil Couper.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Si vous avez fermé la fenêtre d'édition du modèle, vous pouvez y accéder à nouveau : <span className="font-bold"> boîte à outils → modèles → tests (ou le nom de votre groupe) → clic droit sur le nom de votre outil, Editer le modèle...</span>
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_emplacement_modele.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Dans la barre d'outils en haut de la fenêtre d'édition du modèle, cliquez sur l'icône <span className="font-bold"> Éditer l'aide du modèle</span> .
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_modele_aide_icone.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                La fenêtre de l'éditeur d'aide s'ouvre :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_aide_fenetre.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Cliquez par exemple sur <span className="font-bold">Description de l'algorithme</span> à gauche, puis rédigez le texte correspondant à droite.
                            </p>
                            <p className="paragraphe">
                                L'aide doit être courte et claire !
                            </p>
                            <p className="paragraphe">
                                Vous pouvez également rédiger l'aide pour d'autres parties, par exemple pour les 2 paramètres en entrée et le rendu.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Votre modèle est fini et possède même une aide... C'est le moment de le tester !
                        </p>
                    </div>
                </div>
            </div>

            <div id="app" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        Application
                    </h5>
                </div>
                <div className="mt-4">
                    <div className="my-4">
                        <h6 className="sous-titre-italic" id="decoupecouch">
                            Découpage et reprojection d'une couche
                        </h6>
                        <p className="paragraphe">
                            L'objectif est de découper la couche de routes par la commune, pour ne garder que les routes à l'intérieur de cette commune, la couche obtenue devant être en WGS84.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Si elles ne sont pas déjà chargées, ajoutez à QGIS les couches <span className="font-bold text-green-400">OSM_routes</span> et <span className="font-bold text-green-400">SAINTE_RADEGONDE</span> situées dans le dossier <span className="font-bold">TutoQGIS_11_Automatisation/donnees</span>.
                            </p>
                            <p className="paragraphe">
                                Dans quel SCR sont ces deux couches ?
                            </p>
                            <p className="paragraphe ml-4 italic">
                                Les 2 couches sont en RGF93 Lambert 93, code EPSG 2154 (cf. <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/02_03_couches_projets.html#II32" className="lien">SCR d'une couche</a> ).
                            </p>
                            <p className="paragraphe">
                                Lancez votre modèle : <span className="font-bold">boîte à outils → modèles → tests (ou le nom de votre groupe) → double clic sur le nom de votre outil</span>.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_test_modele.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} couche source : <span className="font-bold text-green-400">OSM_routes</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} couche masque : <span className="font-bold text-green-400">SAINTE_RADEGONDE</span>
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "} découpé+reprojeté : ne tapez rien, pour que le résultat soit une couche temporaire
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                <span className="font-bold">Exécutez</span>, vérifiez le SCR de la couche obtenue, ainsi que son contenu : elle ne doit comporter que les routes à l'intérieur de la commune de Sainte-Radégonde (en gris foncé dans la figure ci-dessous).
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_resultat_decoupe.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <h6 className="sous-titre-italic" id="kenway">
                            Découpage et reprojection de plusieurs couches (utilisation « par lot »)
                        </h6>
                        <p className="paragraphe">
                            Le but est ici de découper et reprojeter plusieurs couches, sans avoir à lancer plusieurs fois le modèle.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                A partir de la boîte à outils de traitements, clic droit sur le modèle, <span className="font-bold">Exécuter comme processus de lot....</span> Remplissez les différents paramètres, en vous aidant éventuellement de la <a href="#" className="lien">partie XI.2</a>.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/11_03_test_modele_lot.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Exécutez et vérifiez les couches obtenues.
                            </p>
                        </div>
                        <p className="paragraphe">
                            Les modèles permettent de créer une chaîne de traitement, en enchaînant autant d'algorithmes que vous le souhaitez, et <span className="font-bold">sont donc très pratiques si vous êtes amenés à répéter souvent la même séquence d'opérations</span>.
                        </p>
                        <p className="paragraphe">
                            Au-delà de la création du modèle, il peut être utile quand vous réfléchissez à une manipulation de dessiner au papier et crayon l'enchaînement des étapes. Et une fois finalisé de noter le tout dans un fichier texte, pour vous aider à comprendre ce que vous avez fait quand vous reprendrez ce dossier dans 6 mois !
                        </p>
                        <p className="paragraphe">
                            Dans le chapitre suivant, nous allons voir une autre méthode pour automatiser des tâches dans QGIS, plus puissante mais avec un coût d'entrée plus important, en utilisant le langage de programmation Python.
                        </p>
                    </div>
                </div>
            </div>






            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/automatisation-des-traitements/execution-lot"
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
                        to="/app/plan-detailler/automatisation-des-traitements/comprendre-lancer-python"
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

export default ContUlMod;
