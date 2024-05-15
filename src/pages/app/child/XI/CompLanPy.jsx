import {
    ArrowDropDown,
    ArrowDropUp,
    ArrowLeftOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function CompLanPy() {
    return (
        <div className="relative paragraphe">
            <div className="my-4">
                <h1 className="titre-primary" id="top">
                    XI.4 Comprendre et lancer un script Python
                </h1>
            </div>

            <ul className="my-4 ml-8">
                <li className="my-4">
                    <a href="#lancer" className="lien">
                        Lancer une commande Python dans QGIS
                    </a>
                </li>

                <li className="my-4">
                    <a href="#ouvrir" className="lien">
                        Ouvrir un script Python
                    </a>
                </li>

                <li className="my-4">
                    <a href="#parametre" className="lien">
                        Paramétrer le script
                    </a>
                </li>

                <li className="my-4">
                    <a href="#editer" className="lien">
                        Lancer et éditer un script
                    </a>
                </li>
            </ul>

            <div className="my-4">
                <p className="my-4">
                    Chaque manipulation que nous faisons dans QGIS via
                    l'interface graphique (ajouter une couche, découper une
                    couche etc.) peut également être faite sous forme d'une
                    ligne de commande dans le langage{" "}
                    <a
                        href="https://fr.wikipedia.org/wiki/Python_(langage)"
                        className="lien"
                    >
                        Python
                    </a>
                    .
                </p>

                <p className="my-4">
                    Par exemple, pour ajouter la couche{" "}
                    <span className="lien font-bold">
                        SAINTE_RADEGONDE.shp{" "}
                    </span>
                    , située dans le dossier /mnt/travail/temp, vous pouvez soit
                    l'ajouter comme nous l'avons fait jusqu'ici, soit taper la
                    commande Python suivante :
                </p>

                <p className="my-4">
                    qgis.utils.iface.addVectorLayer("/mnt/travail/temp/SAINTE_RADEGONDE.shp",
                    "SAINTE_RADEGONDE", "ogr")
                </p>

                <p className="my-4">
                    Ce qui revient à lancer l'outil d'ajout de couche vecteur
                    <span className="font-bold"> addVectorLayer </span>de QGIS,
                    avec 3 paramètres :
                </p>

                <ul className="my-4">
                    <li className="my-2">
                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                        l'emplacement de la couche :
                        <span className="font-bold">
                            {" "}
                            /mnt/travail/temp/SAINTE_RADEGONDE.shp{" "}
                        </span>
                        (ce chemin va bien sûr varier)
                    </li>

                    <li className="my-2">
                        <FiberManualRecord sx={{ fontSize: 10 }} /> le nom avec
                        lequel la couche sera affichée dans QGIS :
                        <span className="font-bold"> SAINTE_RADEGONDE </span>
                    </li>

                    <li className="my-2">
                        <FiberManualRecord sx={{ fontSize: 10 }} /> le nom du
                        fournisseur de données :
                        <span className="font-bold"> ogr </span>
                        car QGIS utilise en interne une{" "}
                        <a
                            href="https://fr.wikipedia.org/wiki/Biblioth%C3%A8que_logicielle"
                            className="lien"
                        >
                            bibliothèque
                        </a>{" "}
                        nommée ogr pour accéder aux shapefiles
                    </li>
                </ul>

                <p className="my-4">
                    Quel est l'intérêt ? D'abord, mieux comprendre comment
                    fonctionne le logiciel. Ensuite,{" "}
                    <span className="font-bold">
                        créer exactement l'outil dont vous avez besoin
                    </span>
                    , avec plus de souplesse et de possibilités qu'un{" "}
                    <span className="lien"> modèle </span> ! Bien sûr,{" "}
                    <span className="font-bold">
                        {" "}
                        on peut parfaitement utiliser QGIS sans jamais lire une
                        ligne de Python
                    </span>
                    . Il s'agit d'un autre mode d'utilisation de QGIS.
                </p>

                <p className="my-4">
                    Qu'allons-nous voir dans ce chapitre ? Il ne s'agit pas ici
                    d'apprendre à coder en Python, mais simplement{" "}
                    <span className="font-bold">
                        {" "}
                        d'ouvrir un script Python existant, voir comment est
                        constitué ce script, comment le paramétrer et le lancer
                    </span>
                    . En quelque sorte une introduction à cette face cachée de
                    QGIS !
                </p>
            </div>

            <div className="mt-20">
                <div className="my-8 bg-style-b">
                    <h5 className="sous-titre" id="lancer">
                        Lancer une commande Python dans QGIS
                    </h5>
                </div>

                <div className="bg-style-g p-4 my-4">
                    <p className="my-4">
                        Rendez-vous dans le menu{" "}
                        <span className="font-bold">Extension → Console</span>
                        Python.
                    </p>

                    <p className="my-4">
                        La console s'ouvre en bas de la fenêtre de QGIS. Dans
                        cette console, vous pouvez taper des commandes Python
                        qui seront exécutées une à une.
                    </p>

                    <p className="my-4">
                        Tapez{" "}
                        <span className="font-bold"> print ('hello !') </span>{" "}
                        en bas de la console :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/11_04_test_console.jpg"
                            alt="test_console"
                        />
                    </div>

                    <p className="my-4">
                        Puis appuyez sur la touche entrée. Vous devriez voir
                        votre commande, suivie du résultat, en haut de la
                        console :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/11_04_test_console_resultat.jpg"
                            alt="console_resultat"
                        />
                    </div>

                    <p className="my-4">
                        Vous venez d’utiliser la commande{" "}
                        <span className="font-bold">Print</span>, qui permet
                        d'afficher du texte dans la console. Vous pouvez
                        également tester la commande citée plus haut pour
                        ajouter une couche vecteur :
                    </p>

                    <p className="my-4">
                        qgis.utils.iface.addVectorLayer("/mnt/travail/temp/SAINTE_RADEGONDE.shp",
                        "SAINTE_RADEGONDE", "ogr")
                    </p>

                    <p className="my-4">
                        Il faut remplacer le chemin
                        ("/mnt/travail/temp/SAINTE_RADEGONDE.shp") par le chemin
                        vers la couche sur votre ordinateur.
                    </p>

                    <p className="my-4 img-titre">
                        Sur Windows, les chemins seront de la forme 'C:/…' par
                        exemple.
                    </p>
                </div>

                <p className="my-4">
                    Il est possible de travailler uniquement en lançant ainsi
                    des commandes une à une ; seulement, les commandes utilisées
                    ne seront pas sauvegardées et ne pourront donc être
                    réutilisées sans tout retaper à la main (même s'il est
                    possible de faire défiler les dernières commandes utilisées
                    en appuyant sur la touche flèche haut du clavier).
                </p>
            </div>

            <div className="mt-20">
                <div className="my-8 bg-style-b">
                    <h5 className="sous-titre" id="ouvrir">
                        Ouvrir un script Python
                    </h5>
                </div>

                <p className="my-4">
                    Pour sauvegarder et réutiliser facilement votre travail, le
                    plus simple est d'utiliser ce qu'on appelle un script. Il
                    s'agit simplement d'un fichier texte comportant une suite de
                    commandes, et qui porte l'extension PY puisqu'il s'agit d'un
                    script Python.
                </p>

                <p className="my-4">
                    Ce tutoriel n'étant pas un tutoriel Python, nous nous
                    contenterons d'ouvrir un script existant plutôt que d'en
                    créer un nous-mêmes.
                </p>

                <div className="bg-style-g p-4 my-4">
                    <p className="my-4">
                        Pour ouvrir un script : cliquez sur l'icône
                        <span className="font-bold"> Afficher l'éditeur </span>
                        de la console : l'éditeur de script s'ouvre.
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/11_04_editeur.jpg"
                            alt="editeur"
                        />
                    </div>

                    <p className="my-4">
                        Redimensionnez éventuellement la fenêtre, pour que la
                        partie éditeur, à droite, soit suffisamment large, et
                        que la hauteur soit suffisante.
                    </p>

                    <p className="my-4">
                        Dans l'éditeur, cliquez sur l'icône{" "}
                        <span className="font-bold"> Ouvrir le script... </span>
                        et allez chercher le script{" "}
                        <span className="lien"> clip_and_reproject.py </span>
                        situé dans{" "}
                        <span className="font-bold">
                            {" "}
                            TutoQGIS_11_Automatisation/scripts{" "}
                        </span>
                        .
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/11_04_ouvrir_script.jpg"
                            alt="ouvrir_script"
                        />
                    </div>

                    <p className="my-4">
                        Lisez le contenu du script.{" "}
                        <span className="font-bold">
                            {" "}
                            Les lignes commençant par un # sont des commentaires{" "}
                        </span>{" "}
                        : leur contenu ne sera pas pris en compte, ils sont
                        uniquement utiles pour mieux comprendre le script.
                    </p>
                </div>

                <p className="my-4">
                    L'objectif n'est pas de comprendre dans le détail tout ce
                    que fait ce script, mais de comprendre globalement ce qui
                    s'y passe, notamment au moyen des commentaires. Il s'agit
                    ici d'un script faisant le même travail que le modèle que
                    vous avez réalisé en{" "}
                    <span className="lien"> précédemment </span>, à savoir
                    découper plusieurs couches par une même couche et reprojeter
                    les couches obtenues en WGS84.
                </p>
            </div>

            <div className="mt-20">
                <div className="my-8 bg-style-b">
                    <h5 className="sous-titre" id="parametre">
                        Paramétrer le script
                    </h5>
                </div>

                <p className="my-4">
                    Au début du script (ligne 15), vous trouverez ces lignes :
                </p>

                <div className="bg-img my-4">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/11_04_parametres.jpg"
                        alt="parametres"
                    />
                </div>

                <p className="my-4">
                    Il s'agit des paramètres en entrée et sortie du script :
                </p>

                <ul className="my-4">
                    <li className="my-2">
                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                        <span className="font-bold"> dossier_entree : </span> le
                        dossier où sont situées les couches à découper
                    </li>

                    <li className="my-2">
                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                        <span className="font-bold"> couche_masque : </span> la
                        couche qui servira de masque de découpe
                    </li>

                    <li className="my-2">
                        <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                        <span className="font-bold"> dossier_sortie : </span> le
                        le dossier où seront enregistrées les couches créées (ce
                        dossier doit déjà exister)
                    </li>
                </ul>

                <div className="bg-style-g p-4 my-4">
                    <p className="my-4">
                        A vous de modifier ces paramètres suivant l'emplacement
                        des données sur votre ordinateur ! Attention à ce que le
                        dossier en entrée ne comporte que les couches à
                        découper.
                    </p>

                    <p className="my-4">
                        Attention à bien écrire les chemins exacts dans le
                        script, une erreur d'une seule lettre vous renverra un
                        message d'erreur quand vous voudrez l'exécuter.
                    </p>
                </div>
            </div>

            <div className="mt-20">
                <div className="my-8 bg-style-b">
                    <h5 className="sous-titre" id="editer">
                        Lancer et éditer un script
                    </h5>
                </div>

                <p className="my-4">
                    Pour savoir comment appeler un outil en python, une astuce
                    est de d'abord le lancer « normalement » puis d'aller dans
                    le{" "}
                    <span className="font-bold">
                        {" "}
                        menu Traitement → Historique{" "}
                    </span>{" "}
                    et cliquer sur la ligne correspondante. En bas de la
                    fenêtre, vous aurez la commande Python qui a été exécutée
                    cette fois-là :
                </p>

                <div className="bg-img my-4">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/11_04_historique.jpg"
                        alt="historique"
                    />
                </div>

                <p className="my-4 img-titre">
                    Comme indiqué <span className="lien"> ici </span>,
                    l'historique est aussi très utile pour relancer rapidement
                    un outil avec exactement les mêmes paramètres que la fois
                    précédente, il suffit de double-cliquer sur la ligne
                    correspondante !
                </p>

                <div className="bg-style-g p-4 my-4">
                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/11_04_executer_script_icone.jpg"
                            alt="executer_script_icone"
                        />
                    </div>

                    <p className="my-4">
                        Pour lancer le script, cliquez sur l'icône{" "}
                        <span className="font-bold"> Lancer le script </span> en
                        haut de l'éditeur. Vérifiez que tout ait bien
                        fonctionné.
                    </p>

                    <p className="my-4">
                        Quelles modifications apporter au script pour que :
                    </p>

                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> les couches soient reprojetées non
                            plus en WGS84 mais en NTF / Lambert zone II (code
                            EPSG 27572) ?
                        </p>

                        <p className="my-4 italic">
                            Ligne 64, remplacer{" "}
                            <span className="font-bold"> 'EPSG:4326' </span> par
                            <span className="font-bold"> 'EPSG:27572' </span>.
                            Vous pouvez également remplacer ligne 62
                            <span className="font-bold">
                                {" "}
                                '_wgs84.shp'{" "}
                            </span>{" "}
                            par{" "}
                            <span className="font-bold"> '_ntfl2.shp' </span>
                            (il s'agit du suffixe qui sera ajouté au nom de la
                            nouvelle couche).
                        </p>
                    </div>

                    <div className="my-4">
                        <p className="my-4">
                            <ArrowDropDown /> au lieu de l'outil Clip de
                            découpage, ce soit l'outil Intersection qui soit
                            utilisé ?
                        </p>

                        <p className="my-4 italic">
                            Ligne 46 remplacez{" "}
                            <span className="font-bold"> native:clip </span> par
                            ce nom :{" "}
                            <span className="font-bold">
                                {" "}
                                native:intersection{" "}
                            </span>
                            . Pour en savoir plus, vous pouvez voir{" "}
                            <a
                                href="https://docs.qgis.org/testing/en/docs/user_manual/processing/console.html#using-processing-algorithms-from-the-console"
                                className="lien"
                            >
                                ici
                            </a>
                            .
                        </p>
                    </div>
                </div>

                <p className="my-4">
                    Pour en savoir plus sur le sujet, vous pouvez lire par
                    exemple{" "}
                    <a
                        href="https://docs.qgis.org/latest/fr/docs/pyqgis_developer_cookbook/intro.html"
                        className="lien"
                    >
                        ici
                    </a>
                    .
                </p>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/automatisation-des-traitements/construire-utilise-modele"
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
                    <NavLink className="btn-lien fixed bottom-5 z-20 md:right-52 sm:right-12 right-5">
                        <span className="hidden lg:block">Fin 👋</span>{" "}
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default CompLanPy;
