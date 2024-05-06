import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
    FolderOpenOutlined,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function CreatCouVide() {
    return (
        <div>
            <h4 className="titre-primary" id="top">
                V.1 Création d'une couche vide
            </h4>

            <div>
                <ul className="text-blue-500">
                    <li className="my-2">
                        <a href="#createvide" className="lien">
                            Création d'une couche vide
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#checking" className="lien">
                            Vérification
                        </a>
                    </li>
                </ul>
            </div>
            <p className="paragraphe">
                Le but va être ici, à partir d'une carte déjà géoréférencée, de
                créer une couche de points qui contiendra les écoles et les
                postes de l'île d'Oahu. On passera donc d'une couche raster (la
                carte) à une couche vecteur contenant une partie des
                informations de la carte.
            </p>
            <p className="paragraphe">
                Ci-dessous, à gauche, la carte originale, et à droite, la carte
                avec par-dessus la couche vecteur contenant les bâtiments.
            </p>
            <div className="bg-img">
                <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_1_principe_numerisation.jpg"
                    alt="pôle-ard"
                    width={500}
                />
            </div>
            <p className="paragraphe">
                Il sera ensuite plus facile de manipuler des données vecteurs,
                pour par exemple visualiser la répartition spatiale des écoles,
                et si on a numérisé également les routes travailler sur
                l'accessibilité des ces écoles...
            </p>
            <p className="paragraphe">
                Ces écoles et postes sont représentées dans la carte sous forme
                de points bleus ou rouges :
            </p>
            <div className="bg-img">
                <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_1_leg_pts.jpg"
                    alt="pôle-ard"
                    width={500}
                />
                <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_1_ex_pts.jpg"
                    alt="pôle-ard"
                    width={500}
                />
            </div>

            <div id="createvide" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">Création d'une couche vide</h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            La première étape consiste à créer une couche
                            vierge, qui accueillera les données que nous allons
                            créer.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Dans QGIS, ouvrez un nouveau projet.
                            </p>
                            <p className="paragraphe">
                                <FolderOpenOutlined /> Rendez-vous dans le{" "}
                                <span className="font-bold text-green-400">
                                    {" "}
                                    Menu Couche → Créer une couche → Nouvelle
                                    couche GeoPackage...
                                </span>{" "}
                                ou bien cliquez sur l'icône correspondante (vous
                                pouvez aussi utiliser le raccourci clavier
                                Ctrl+Maj+N).
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_1_nouvellecouche_menu.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                La fenêtre suivante apparaît :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_1_nouvellecouche_fenetre.jpg"
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
                                        <span className="font-bold">
                                            Base de données
                                        </span>{" "}
                                        : un fichier GeoPackage étant en réalité
                                        une base de données, il s'agit ici de
                                        dire quelle base sera utilisée,
                                        existante ou non. Nous considérerons ici
                                        que un fichier GeoPackage = une couche,
                                        et nous allons donc créer une nouvelle
                                        base que nous utiliserons de la même
                                        manière qu'un fichier shapefile (sans
                                        utiliser la possibilité offerte par ce
                                        format de stocker plusieurs couches dans
                                        un seul fichier) : cliquer sur le bouton
                                        ... et spécifiez le nom et l'emplacement
                                        de la couche qui sera créée
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        <span className="font-bold">
                                            Nom de la table{" "}
                                        </span>{" "}
                                        ce champ est rempli automatiquement en
                                        fonction du nom spécifié ci-dessus
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        <span className="font-bold">
                                            Type de géométrie :{" "}
                                        </span>{" "}
                                        Point
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        <span className="font-bold">
                                            SCR :{" "}
                                        </span>{" "}
                                        afin que cette couche soit dans le même
                                        système que la carte, vérifier que le
                                        SCR soit bien le WGS84
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                La partie suivante de la fenêtre va nous
                                permettre de spécifier les colonnes qui seront
                                présentes dans la table attributaire. Il sera
                                toujours possible par la suite de supprimer ou
                                d'ajouter de nouvelles colonnes.
                            </p>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        <span className="font-bold">Nom</span> :
                                        tapez{" "}
                                        <span className="font-bold">type</span>{" "}
                                        : un champ nommé type contiendra les
                                        valeurs école ou poste
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        <span className="font-bold">Type</span>{" "}
                                        : choisissez{" "}
                                        <span className="font-bold">
                                            Donnée texte
                                        </span>{" "}
                                        car ce champ contiendra du texte et non
                                        des nombres
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        <span className="font-bold">
                                            Longueur maximale
                                        </span>{" "}
                                        : pour un champ de type texte, ceci
                                        correspond au nombre maximum de
                                        caractères que pourra contenir le champ.
                                        Les mot "école" et "poste" comportent
                                        tous deux 5 caractères : une largeur de
                                        5 suffirait ici. Pour avoir un peu de
                                        marge (supposons que l'on veuille par la
                                        suite ajouter un 3ème type de bâtiment),
                                        choisissons une largeur de{" "}
                                        <span className="font-bold">10</span>.
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        cliquez sur le bouton{" "}
                                        <span className="font-bold">
                                            Ajouter à la liste des champs...
                                        </span>
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                ...Et enfin sur{" "}
                                <span className="font-bold">OK</span>.
                            </p>
                            <p className="paragraphe">
                                La couche est automatiquement ajoutée à QGIS.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="checking" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre"> Vérification</h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Allez dans les propriétés de la couche, rubrique{" "}
                                <span className="font-bold">Information</span> :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_1_informations.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Vous pouvez vérifier ici l'emplacement de votre
                                couche (
                                <span className="font-bold">chemin</span> ), son{" "}
                                <span className="font-bold">
                                    SCR le nombre d'entités
                                </span>
                                , qu'elle contient (à ce stade, 0).
                            </p>
                            <p className="paragraphe">
                                Ouvrez la table attributaire :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_1_table_vide.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Cette table ne contient aucune ligne, ce qui est
                                normal car la couche ne contient aucune entité.
                            </p>
                            <p className="paragraphe">
                                Par contre, elle contient 2 champs,{" "}
                                <span className="font-bold">fid et type</span>,
                                alors qu'on se serait attendu à ne voir que le
                                champ type.
                            </p>
                        </div>
                        <p className="paragraphe">
                            <span className="font-bold">
                                A quoi correspond ce champ fid ?{" "}
                            </span>{" "}
                            Le GeoPackage étant une base de données, une colonne
                            d'identifiant unique ({" "}
                            <a
                                href="https://fr.wikipedia.org/wiki/Cl%C3%A9_primaire"
                                className="lien"
                            >
                                clé primaire
                            </a>{" "}
                            ) est créée automatiquement lors de la création de
                            la couche, afin d'identifier de manière unique
                            chaque entité.
                        </p>
                        <p className="paragraphe">
                            Cette colonne sera remplie automatiquement, mais
                            néanmoins modifiable par l'utilisateur (vous !). Si
                            2 entités ont la même valeur pour ce champ fid, un
                            message d'erreur sera affiché et il ne sera pas
                            possible d'enregistrer les modifications. Le plus
                            simple est donc de laisser le logiciel gérer ce
                            champ.
                        </p>
                        <p className="paragraphe">
                            Dans le chapitre suivant, nous allons ajouter des
                            points à cette couche.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    {/* <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/numerisation/creation-couche-vide"
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
                        to="/app/plan-detailler/numerisation/ajout-point"
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

export default CreatCouVide;
