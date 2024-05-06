import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function DonAttrib() {
    return (
        <div>
            <h4 className="titre-primary" id="top">
                V.3 Saisie des données attributaires : en savoir plus
            </h4>
            <div>
                <ul className="text-blue-500">
                    <li className="my-2">
                        <a href="#inputdata" className="lien">
                            Saisir les données : à la création de l'entité ou
                            dans la table
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#toolsedit" className="lien">
                            Pour une saisie plus facile : les outils d'édition
                        </a>
                    </li>
                </ul>
            </div>
            <div id="inputdata" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        {" "}
                        Saisir les données : à la création de l'entité ou dans
                        la table
                    </h5>
                </div>
                <p className="paragraphe">
                    Cette partie est tout à fait optionnelle pour suivre la
                    suite du chapitre. Elle pourra néanmoins vous faire gagner
                    du temps si vous vous apprêtez à saisir des données sous
                    QGIS...
                </p>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Vous avez remarqué que la saisie des données
                            attributaires se fait dans une fenêtre qui apparaît
                            directement après avoir créé une entité.
                        </p>
                        <p className="paragraphe">
                            Il est possible de modifier ce comportement :
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Rendez-vous dans le menu{" "}
                                <span className="italic text-green-400">
                                    Menu Préférences → Options :
                                </span>
                                <div className="bg-img">
                                    <img
                                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_3_options_menu.jpg"
                                        alt="pôle-ard"
                                        width={300}
                                    />
                                </div>
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_3_options_fenetre.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Dans la rubrique{" "}
                                <span className="font-bold">Numérisation</span>,
                                cochez la case{" "}
                                <span className="font-bold">
                                    Supprimer la fenêtre de saisie des attributs
                                    lors de la création de chaque entité
                                </span>
                                . Cliquez sur{" "}
                                <span className="font-bold">OK</span> pour
                                valider et fermer la fenêtre.
                            </p>
                            <p className="paragraphe">
                                Créez un nouveau point dans la couche de
                                bâtiments : aucune fenêtre ne s'affiche. Si vous
                                ouvrez la table attributaire, vous pouvez voir
                                que le point créé a un type NULL (valeur par
                                défaut).
                            </p>
                        </div>
                        <p className="paragraphe">
                            Il est ensuite possible de rentrer les données
                            attributaires directement dans la table.{" "}
                            <a
                                href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/07_02_calculer.html"
                                className="lien"
                            >
                                La calculatrice de champ
                            </a>{" "}
                            offre la possibilité de remplir plusieurs cases avec
                            une requête.
                        </p>
                    </div>
                </div>
            </div>
            <div id="toolsedit" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">
                        {" "}
                        Pour une saisie plus facile : les outils d'édition
                    </h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Il est possible de définir des règles pour la saisie
                            d'attributs : vous pouvez par exemple saisir vos
                            données en choisissant une valeur dans une liste
                            déroulante.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Ouvrez les propriétés de la couche{" "}
                                <span className="text-green-400 font-bold">
                                    batiments_oahu
                                </span>{" "}
                                créée en{" "}
                                <a
                                    href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/05_01_creation_couche.html"
                                    className="lien"
                                >
                                    V.1
                                </a>
                                , rubrique{" "}
                                <span className="font-bold">
                                    Formulaire d'attributs
                                </span>
                                .
                            </p>
                        </div>
                        <p className="paragraphe">
                            Cette fenêtre propose différents outils pour
                            faciliter la saisie. Le mode{" "}
                            <span className="font-bold">Edition de texte</span>{" "}
                            est le mode par défaut que vous avez utilisé
                            jusqu'ici.
                        </p>
                        <p className="paragraphe">
                            Par exemple, il est possible de faciliter la saisie
                            de date à l'aide d'un calendrier, de voir un champ
                            sous forme de case à cocher, de créer des listes
                            déroulantes...
                        </p>
                        <p className="paragraphe">
                            Sans passer en revue tous les outils possibles, nous
                            nous bornerons à créer une{" "}
                            <span className="font-bold">liste déroulante</span>{" "}
                            avec les deux valeurs « école » et « poste » .
                        </p>
                        <div className="bg-style-g p-2">
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_3_formulaire_fenetre.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Sélectionnez le champ{" "}
                                <span className="font-bold">type</span> dans la
                                partie gauche de la fenêtre.
                            </p>
                            <p className="paragraphe">
                                Sélectionnez ensuite{" "}
                                <span className="font-bold">
                                    Liste de valeurs
                                </span>{" "}
                                dans la partie{" "}
                                <span className="font-bold"> Type d'outil</span>{" "}
                                à droite.
                            </p>
                            <p className="paragraphe">
                                Ajoutez les valeurs{" "}
                                <span className="font-bold">école</span> et{" "}
                                <span className="font-bold">poste</span> dans la
                                colonne{" "}
                                <span className="font-bold">Valeur</span> du
                                tableau (vous pouvez laisser la colonne
                                Description vide).
                            </p>
                            <p className="paragraphe">
                                Cliquez sur{" "}
                                <span className="font-bold">OK</span> .
                            </p>
                            <p className="paragraphe">
                                Passez en mode édition si ce n'est pas déjà
                                fait. Ouvrez la table attributaire.
                            </p>
                            <p className="paragraphe">
                                Double-cliquez dans une case : une liste
                                déroulante avec les deux valeurs poste et école
                                apparaît.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_3_liste.jpg"
                                    alt="pôle-ard"
                                    width={200}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            Notez que cette liste déroulante sera également
                            utilisable dans la fenêtre de saisie des attributs,
                            si la case{" "}
                            <span className="font-bold">
                                Supprimer les fenêtres d'avertissement lors de
                                la création de chaque entité
                            </span>{" "}
                            des options de numérisation est décochée (cf. plus
                            haut).
                        </p>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_3_liste_fenetre.jpg"
                                alt="pôle-ard"
                                width={300}
                            />
                        </div>
                        <p className="paragraphe">
                            Pour en savoir plus, les différents outils d'édition
                            sont décrits dans le{" "}
                            <a
                                href="https://docs.qgis.org/3.22/fr/docs/user_manual/working_with_vector/vector_properties.html#configure-the-field-behavior"
                                className="lien"
                            >
                                manuel QGIS
                            </a>{" "}
                            .
                        </p>
                        <p className="paragraphe">
                            Dans le chapitre suivant, dessinez des lignes avec
                            QGIS !
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/numerisation/ajout-point"
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
                        to="/app/plan-detailler/numerisation/numeriser-ligne"
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

export default DonAttrib;
