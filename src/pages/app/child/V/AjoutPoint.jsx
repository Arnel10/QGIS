import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    FiberManualRecord,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function AjoutPoint() {
    return (
        <div>
            <h4 className="titre-primary" id="top">
                V.2 Ajout de points dans une couche
            </h4>

            <div>
                <ul className="text-blue-500">
                    <li className="my-2">
                        <a href="#coucheedit" className="lien">
                            Rendre une couche éditable
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#ajoutpt" className="lien">
                            Ajout d'un point
                        </a>
                    </li>
                    <li className="my-2">
                        <a href="#updatepoint" className="lien">
                            Modification d'un point
                        </a>
                        <ul className="ml-8">
                            <li>
                                <a href="#deplace" className="lien">
                                    Déplacement
                                </a>
                            </li>
                            <li>
                                <a href="#datattibi" className="lien">
                                    Modification des données attributaires
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="my-2">
                        <a href="#quitedit" className="lien">
                            Quitter le mode édition
                        </a>
                    </li>
                </ul>
            </div>

            <p className="paragraphe">
                Nous allons ajouter à la couche créée dans le chapitre précédent
                les points correspondant aux postes et aux école de la carte de
                l'île d'Oahu.
            </p>

            <div className="bg-style-g p-2">
                <p className="paragraphe">
                    Créez un nouveau projet QGIS, et ajoutez-y :
                </p>
                <p className="paragraphe">
                    <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                        <li className="my-1">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> la carte
                            géoréférencée{" "}
                            <a
                                href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_05_Numerisation.zip"
                                className="lien"
                            >
                                Oahu_Hawaiian_Islands_1906_wgs84.tif
                            </a>{" "}
                            située dans le dossier{" "}
                            <span className="font-bold">
                                TutoQGIS_05_Numerisation/donnees
                            </span>
                        </li>
                        <li className="my-1">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> la
                            couche vide créée dans le chapitre précédent :{" "}
                            <span className="font-bold">
                                batiments_oahu.shp
                            </span>
                        </li>
                    </ul>
                </p>
            </div>

            <div id="coucheedit" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">Rendre une couche éditable</h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Par défaut, toutes les couches ajoutées dans QGIS
                            sont « verrouillées » donc non modifiables (modifier
                            le style ne modifie pas les données mais seulement
                            leur représentation).
                        </p>
                        <p className="paragraphe">
                            Pour rendre une couche éditable, que ce soit pour
                            modifier les données de la table attributaire ou la
                            géométrie d'un élément, il faut donc passer en mode
                            édition. Nous allons faire cette manipulation pour
                            la couche{" "}
                            <span className="font-bold text-green-400">
                                batiments_oahu
                            </span>{" "}
                            afin de pouvoir y ajouter des points.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Vérifiez tout d'abord que votre couche de
                                bâtiments soit{" "}
                                <span className="font-bold">au-dessus</span> de
                                la carte.
                            </p>
                            <p className="paragraphe">
                                Pour passer en mode édition :{" "}
                                <span className="italic text-green-400">
                                    Clic droit sur le nom de la couche →
                                    Basculer en mode édition
                                </span>
                                <div className="bg-img">
                                    <img
                                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_2_edition_clicdroit.jpg"
                                        alt="pôle-ard"
                                        width={500}
                                    />
                                </div>
                            </p>
                            <p className="paragraphe">ou bien :</p>
                            <p className="paragraphe">
                                <table>
                                    <td>
                                        <img
                                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_2_edition_icone.jpg"
                                            alt=""
                                        />
                                    </td>
                                    <td>
                                        sélectionnez la couche dans la table des
                                        matières puis cliquez sur l'icône
                                        Basculer en mode édition
                                    </td>
                                </table>
                            </p>
                            <p className="paragraphe">ou encore :</p>
                            <p className="paragraphe">
                                sélectionnez la couche dans la table des
                                matières puis{" "}
                                <span className="font-bold text-green-400">
                                    Menu Couche → Basculer en mode édition .
                                </span>
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_2_edition_menu.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            Certains outils de la barre d'outil d'édition
                            deviennent actifs, et dans la table des matières un
                            symbole de crayon apparaît à gauche du nom de la
                            couche :
                        </p>
                        <div className="bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_2_couche_editable.jpg"
                                alt="pôle-ard"
                                width={500}
                            />
                        </div>
                        <p className="paragraphe">
                            La couche est maintenant modifiable.
                        </p>
                        <p className="paragraphe">
                            Dans QGIS, le passage en mode édition est géré « par
                            couches » : certaines couches peuvent être éditables
                            et d'autres non. Il est facile de voir dans la table
                            des matières quelle couche est éditable.
                        </p>
                        <p className="paragraphe font-bold">
                            De manière générale, il vaut mieux quitter le mode
                            édition dès que vous n'en avez plus besoin, et
                            limiter le nombre de couches éditables.
                        </p>
                        <p className="paragraphe">
                            Les couches raster ne sont jamais modifiables : si
                            vous sélectionnez la carte de l'île d'Oahu, le
                            passage en mode édition n'est pas possible pour
                            cette couche.
                        </p>
                    </div>
                </div>
            </div>

            <div id="ajoutpt" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre"> Ajout d'un point</h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                Commencez par repérer une école ou une poste,
                                représentées respectivement par un point bleu ou
                                rouge, par exemple la poste de la baie de
                                Kaneohe :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_2_ecole_kaneohe.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_2_ajout_icone.jpg"
                                    alt=""
                                />{" "}
                                Assurez-vous que votre couche de bâtiments soit
                                bien sélectionnée dans la table des matières,
                                puis cliquez sur l'icône{" "}
                                <span className="font-bold">
                                    Ajouter une entité ponctuelle
                                </span>
                                .
                            </p>
                            <p className="paragraphe">
                                Cliquez sur l'école ou la poste que vous avez
                                choisie; une fenêtre s'ouvre vous demandant de
                                renseigner les attributs pour ce point. Laissez{" "}
                                <span className="font-bold">
                                    Génération automatique
                                </span>{" "}
                                pour le champ fid, et renseignez le type de
                                bâtiment :{" "}
                                <span className="font-bold">poste</span>.
                                Cliquez sur{" "}
                                <span className="font-bold">OK</span>.
                            </p>
                            <p className="paragraphe italic">
                                Si cette fenêtre ne s'ouvre pas, menu
                                Préférences → Options → rubrique Numérisation :
                                décochez la case « Supprimer la fenêtre de
                                saisie des attributs lors de la création de
                                chaque nouvelle entité » (tout en haut).
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_2_remplissage_type.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Le point s'affiche sur la carte, avec le style
                                de la couche (ici un rond turquoise) :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_2_ecole_kaneohe_pt.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                Si vous ouvrez la table attributaire de la
                                couche, vous pouvez voir une ligne correspondant
                                au point que vous venez de créer.
                            </p>
                            <p className="paragraphe">
                                Ajoutez d'autres points pour les écoles et
                                postes de l'île.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_2_tous_les_points.jpg"
                                    alt="pôle-ard"
                                    width={500}
                                />
                            </div>
                            <p className="paragraphe">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_2_sauv_icone.jpg"
                                    alt=""
                                />{" "}
                                N'oubliez pas de sauvegarder vos modifications
                                en sélectionnant la couche puis en cliquant sur
                                l’icône{" "}
                                <span className="font-bold">
                                    {" "}
                                    sauvegarder les modifications
                                </span>
                                .
                            </p>
                            <p className="paragraphe">
                                Vous pouvez{" "}
                                <a
                                    href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/01_02_info_geo.html#I23a"
                                    className="lien"
                                >
                                    modifier le style
                                </a>{" "}
                                des points dans les propriétés de la couche,
                                rubrique Symbologie.
                            </p>
                            <p className="paragraphe">
                                Comment faire pour représenter les données comme
                                dans la légende de la carte, les écoles sous
                                forme de rond bleu et les postes de rond rouge ?
                                <div className="bg-img">
                                    <img
                                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_2_style_categ.jpg"
                                        alt="pôle-ard"
                                        width={500}
                                    />
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="updatepoint" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre"> Modification d'un point</h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Il peut arriver bien sûr de vouloir modifier un
                            point déjà existant, soit que vous vouliez le
                            déplacer, soit que vous souhaitiez modifier ses
                            données attributaires.
                        </p>
                        <h6 className="sous-titre-italic" id="deplace">
                            Déplacement
                        </h6>
                        <p className="paragraphe">
                            Imaginons qu'un de vos points soit mal placé et que
                            vous vouliez le déplacer.
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                La couche doit être en mode édition.
                            </p>
                            <p className="paragraphe">
                                Il faut également{" "}
                                <span className="font-bold">
                                    activer la barre d'outils de numérisation
                                    avancée{" "}
                                </span>
                                : clic droit sur n'importe quelle barre d'outils
                                (sauf sur un outil désactivé) et cochez si ça
                                n'est pas déjà le cas la case Barre d'outils de
                                numérisation avancée. Vous pouvez également
                                passer par le menu Vue → Barres d'outils.
                            </p>
                            <p className="paragraphe">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_2_deplacer_icone.jpg"
                                    alt=""
                                />{" "}
                                Sélectionnez votre couche de bâtiments dans la
                                table des matières, puis cliquez sur l'icône{" "}
                                <span className="font-bold">
                                    {" "}
                                    Déplacer l'entité
                                </span>
                                .
                            </p>
                            <p className="paragraphe">
                                Le curseur prend la forme d'une croix. Cliquez
                                sur le point à déplacer, puis cliquez sur
                                l'endroit où vous souhaitez déplacer ce point.
                            </p>
                        </div>

                        <h6 className="sous-titre-italic" id="datattibi">
                            Modification des données attributaires
                        </h6>

                        <p className="paragraphe">
                            Que faire dans le cas où vous voulez modifier les
                            données attributaires d'un point, par exemple le
                            passer de poste à école?
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                La couche doit être en mode édition.
                            </p>
                            <p className="paragraphe">
                                Ouvrez la table attributaire de la couche.
                            </p>
                            <p className="paragraphe">
                                Double-cliquez sur la case de la table à
                                modifier. Vous pouvez ensuite modifier le texte
                                de cette case.
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_2_modif_donnees_attributaires.jpg"
                                    alt="pôle-ard"
                                    width={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="quitedit" className="mt-8 mb-4">
                <div className="bg-style-b">
                    <h5 className="sous-titre">Quitter le mode édition</h5>
                </div>

                <div className="mt-4">
                    <div className="my-4">
                        <p className="paragraphe">
                            Une fois vos ajouts et modifications terminés, il
                            est important de quitter le mode édition, pour
                            plusieurs raisons :
                        </p>
                        <p className="paragraphe">
                            <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                <li className="my-1">
                                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                    éviter de faire des modifications par erreur
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                    sauvegarder les modifications effectuées
                                </li>
                                <li className="my-1">
                                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                    certains outils SIG ne peuvent fonctionner
                                    sur une couche en cours d'édition
                                </li>
                            </ul>
                        </p>
                        <div className="bg-style-g p-2">
                            <p className="paragraphe">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_2_edition_icone.jpg "
                                    alt=""
                                />{" "}
                                Sélectionnez votre couche dans la table des
                                matières et cliquez sur l'icône{" "}
                                <span className="font-bold">
                                    basculer en mode édition
                                </span>
                                .
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_2_quitter_edition.jpg"
                                    alt="pôle-ard"
                                    width={400}
                                />
                            </div>
                            <p className="paragraphe">
                                Une fenêtre apparaît pour vous demander si vous
                                souhaitez :
                            </p>
                            <p className="paragraphe">
                                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        <span className="font-bold">
                                            Fermer sans enregistrer :
                                        </span>{" "}
                                        quitte le mode édition sans sauvegarder
                                        vos modifications
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        <span className="font-bold">
                                            {" "}
                                            Annuler :
                                        </span>{" "}
                                        ne quitte pas le mode édition
                                    </li>
                                    <li className="my-1">
                                        <FiberManualRecord
                                            sx={{ fontSize: 10 }}
                                        />{" "}
                                        <span className="font-bold">
                                            Enregistrer :
                                        </span>{" "}
                                        quitte le mode édition en enregistrant
                                        vos modifications.
                                    </li>
                                </ul>
                            </p>
                            <p className="paragraphe">
                                Cliquez sur{" "}
                                <span className="font-bold">Enregistrer</span>.
                            </p>
                            <p className="paragraphe">
                                L'icône de crayon à côté de nom de la couche
                                disparaît :
                            </p>
                            <div className="bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_2_quitter_edition_couche.jpg"
                                    alt="pôle-ard"
                                    width={400}
                                />
                            </div>
                        </div>
                        <p className="paragraphe">
                            Le chapitre suivant vous permettra d'en savoir plus
                            sur les modes de saisie des données attributaires,
                            en créant une liste de choix avec les 2 valeurs
                            école et poste.
                        </p>
                        <p className="paragraphe">
                            Vous pouvez bien sûr décider de filer directement au
                            chapitre d'après sur{" "}
                            <a
                                href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/05_04_lignes.html"
                                className="lien"
                            >
                                la numérisation des lignes !
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/numerisation/creation-couche-vide"
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
                        to="/app/plan-detailler/numerisation/donnees-attrib"
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

export default AjoutPoint;
