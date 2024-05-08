import { ArrowDropDown, FiberManualRecord } from "@mui/icons-material";
import React from "react";

function JoinSpat() {
    return (
        <div className="relative paragraphe">
            <div className="my-4" id="top">
                <h1 className="titre-primary">
                    VIII.2 Lier des données en fonction de leur position :
                    jointures spatiales
                </h1>
            </div>

            <ul className="my-4 ml-8">
                <li className="my-4">
                    <a href="#join_spat" className="lien">
                        Comment fonctionne une jointure spatiale ?
                    </a>
                </li>

                <li className="my-4">
                    <a href="#join_el" className="lien">
                        Joindre des éléments un à un
                    </a>

                    <ul className="my-4 ml-10">
                        <li className="my-2">
                            <a href="#premier" className="lien">
                                Premier exemple détaillé : quel chef-lieu pour
                                quel département ?
                            </a>
                        </li>

                        <li className="my-2">
                            <a href="#entrainer" className="lien">
                                Pour s'entraîner : quel comté pour quel site
                                remarquable ?
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="my-4">
                    <a href="#join_plus" className="lien">
                        Joindre plusieurs éléments à un seul
                    </a>

                    <ul className="my-4 ml-10">
                        <li className="my-2">
                            <a href="#compter" className="lien">
                                Compter le nombre de sites par comté
                            </a>
                        </li>

                        <li className="my-2">
                            <a href="#calculer" className="lien">
                                Calculer la population par département à partir
                                des communes
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="mt-20">
                <div className="bg-style-b my-4">
                    <h5 className="sous-titre" id="join_spat">
                        Comment fonctionne une jointure spatiale ?
                    </h5>
                </div>

                <p className="my-4">
                    Pour faire une jointure, il est possible de se baser sur la
                    <span className="font-bold"> position des éléments </span>et
                    non plus sur leurs données attributaires : il s'agit alors
                    d'une jointure spatiale.
                </p>

                <p className="my-4">
                    Ce type de jointure ne peut se faire qu'entre deux couches
                    SIG, de type point, ligne ou polygone. Il est possible par
                    exemple de partir d'une couche de polygones et d'une couche
                    point, et de lier à chaque polygone les données
                    attributaires du point contenu par ce polygone.
                </p>

                <p className="my-4">
                    Notez bien que comme pour une jointure attributaire, les
                    données qui seront jointes sont toujours les données
                    attributaires.
                </p>

                <div className="my-4 bg-img">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/8_2_principe_jointure_spatiale.svg"
                        alt="principe_jointure_spatiale"
                    />
                </div>

                <p className="my-4">
                    Dans l'exemple ci-dessus, les deux couches de départ sont
                    une couche de département et une couche de chefs-lieux. Les
                    données attributaires des chefs-lieux (leur nom, code et
                    coordonnées) sont jointes aux départements en se basant sur
                    leur position :{" "}
                    <span className="font-bold">
                        {" "}
                        chaque département récupère les données du chef-lieu
                        intersectant ce département{" "}
                    </span>
                    .
                </p>

                <p className="my-4">
                    Il existe plusieurs outils pour cela dans QGIS ; nous
                    utiliserons celui présentant a priori le plus de
                    possibilités.
                </p>
            </div>

            <div className="mt-20">
                <div className="bg-style-b my-4">
                    <h5 className="sous-titre" id="join_el">
                        Joindre des éléments un à un
                    </h5>
                </div>

                <div className="my-10">
                    <h6 className="sous-titre-italic" id="premier">
                        Premier exemple détaillé : quel chef-lieu pour quel
                        département ?
                    </h6>

                    <p className="my-4">
                        Voyons tout d'abord le cas où les données correspondent
                        une à une, par exemple pour joindre les données d'un
                        chef-lieu au département qui lui correspond.
                    </p>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            Ouvrez un nouveau projet QGIS, ajoutez les deux
                            couches shapefile
                            <span className="font-bold"> DEPARTEMENT </span>
                            et<span className="font-bold"> CHEF_LIEU</span>.
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/8_2_cheflieux_depts.jpg"
                                alt="cheflieux_depts"
                            />
                        </div>

                        <p className="my-4">
                            Ouvrez les tables attributaires des 2 couches : il
                            n'existe pas de champ permettant de faire une
                            jointure attributaire entre les couches (même s'il
                            serait possible de récupérer le code du département
                            à partir du code INSEE, mais nous ferons comme si
                            pour les besoins de l'exercice...).
                        </p>

                        <p className="my-4 italic text-sm">
                            Si vous avez le choix entre effectuer une jointure
                            attributaire et une jointure spatiale pour le même
                            résultat, choisissez la jointure attributaire : les
                            temps de traitements seront moins longs, et vous
                            vous affranchirez aussi d'éventuels problèmes liés
                            aux géométries, par exemple des erreurs de
                            topologie.
                        </p>

                        <p className="my-4">
                            Par contre,{" "}
                            <span className="font-bold">
                                chaque chef-lieu est situé dans un département
                            </span>{" "}
                            ; il est donc possible d'associer les 2 avec un
                            opérateur spatial comme par exemple{" "}
                            <span className="font-bold">contient</span>.
                        </p>
                    </div>

                    <p className="my-4">
                        Le but de l'opération est d'
                        <span className="font-bold">ajouter des colonnes </span>
                        dans la table attributaire de la couche de départements,
                        avec le nom du chef-lieu, son statut etc. Bien sûr,
                        l'inverse est également possible : ajouter dans la table
                        attributaire des chefs-lieux des colonnes avec le nom du
                        département, son code etc.
                    </p>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            Dans la boîte à outils de traitements, rubrique
                            <span className="font-bold">
                                {" "}
                                Outils généraux pour les vecteurs
                            </span>
                            , double-cliquez sur{" "}
                            <span className="font-bold">
                                Joindre les attributs par localisation
                            </span>
                            .
                        </p>

                        <div className="my-4 bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/8_2_join_emplacement.jpg"
                                alt="join_emplacement"
                            />
                        </div>

                        <div className="my-4 bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/8_2_join_fenetre.jpg"
                                alt="join_fenetre"
                            />
                        </div>

                        <ul className="my-4 ml-8">
                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Couche source : sélectionnez la couche
                                <span className="font-bold lien">
                                    {" "}
                                    DEPARTEMENT
                                </span>
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Joindre la couche : sélectionnez la couche
                                <span className="font-bold lien">
                                    CHEF_LIEU
                                </span>
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Prédicat géométrique : vous pouvez choisir
                                <span className="font-bold">intersecte</span>,
                                ou bien{" "}
                                <span className="font-bold">contient</span>
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Champs à ajouter : il est possible de n'ajouter
                                que certains champs de la couche à joindre.
                                Laisser vide pour ajouter tous les champs
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} /> Type
                                de jointure : dans la mesure où ici, un
                                chef-lieu correspond exactement à un
                                département, vous pouvez choisir l'une ou
                                l'autre option et le résultat sera le même
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Couche issue de la jointure spatiale : laisser
                                la valeur par défaut{" "}
                                <span className="font-bold">
                                    Créer une couche temporaire
                                </span>
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Cliquez sur{" "}
                                <span className="font-bold">Exécuter</span>
                            </li>
                        </ul>
                    </div>

                    <p className="my-4">
                        Vous pouvez fermer la fenêtre de l'outil de jointure.
                    </p>

                    <p className="my-4">
                        Une couche temporaire a été ajoutée à QGIS. Ses
                        géométries sont celles de la couche source, ici les
                        départements.
                    </p>

                    <p className="my-4">
                        les départements. Ouvrez sa table attributaire : elle
                        contient les attributs des départements et des
                        chefs-lieux.
                    </p>

                    <div className="my-4 bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/8_2_table_apres_jointure.jpg"
                            alt="table_apres_jointure"
                        />
                    </div>
                </div>

                <div className="my-10">
                    <h6 className="sous-titre-italic" id="entrainer">
                        Pour s'entraîner : quel comté pour quel site remarquable
                        ?
                    </h6>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            Ouvrez un nouveau projet QGIS, ajoutez les couches
                            <span className="font-bold lien"> Counties</span> et
                            <span className="font-bold lien"> Heritage</span>,
                            correspondant aux comtés et sites remarquables
                            irlandais.
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/8_2_irlande_carte.jpg"
                                alt="irlande_carte"
                            />
                        </div>

                        <p className="my-4">
                            <ArrowDropDown /> Prenez connaissance des données
                            attributaires de ces 2 couches. Comment ajouter aux
                            sites remarquables (données ponctuelles) les données
                            attributaires de leur comté ?
                        </p>

                        <p className="my-4 itaic text-sm">
                            Boîte à outils de traitements → Outils généraux pour
                            les vecteurs → Joindre les attributs par
                            localisation, avec en couche source{" "}
                            <span className="font-bold lien">Heritage</span> et
                            en couche à joindre{" "}
                            <span className="font-bold lien">Counties</span>.
                            Une fois la nouvelle couche créée, vérifiez sa
                            géométrie (sites remarquables) et ses données
                            attributaires :
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/8_2_heritage_join_counties_res.jpg"
                                alt="heritage_join_counties_res"
                            />
                        </div>
                    </div>

                    <p className="img-titre">
                        Il existe d'autres moyens pour faire une jointure
                        spatiale, notamment en passant par une base de données
                        relationnelle type PostgreSQL avec son extension
                        spatiale PostGIS, ou bien à l'aide du plugin mmqgis...
                    </p>
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b my-4">
                    <h5 className="sous-titre" id="join_plus">
                        Joindre plusieurs éléments à un seul
                    </h5>
                </div>

                <p className="my-4">
                    Nous avons vu le cas où l'on souhaite joindre des données
                    une à une.
                </p>

                <p className="my-4">
                    Comment faire maintenant si{" "}
                    <span className="font-bold">
                        une entité dans la couche source correspond à plusieurs
                        entités dans la couche à joindre ?
                    </span>{" "}
                    Par exemple, en reprenant l'exemple des comtés (données
                    surfaciques) et sites remarquables (données ponctuelles)
                    irlandais, on peut vouloir joindre les données des sites aux
                    comtés. Chaque comté contenant plusieurs sites, il y a 2
                    possibilités pour faire la jointure :
                </p>

                <ul className="my-4 ml-8">
                    <li className="my-4">
                        <FiberManualRecord sx={{ fontSize: 10 }} /> créer autant
                        de comtés que de sites. Les géométries des comtés seront
                        donc en double, triple etc., chacune avec les données
                        attributaire d'un site
                    </li>

                    <li className="my-4">
                        <FiberManualRecord sx={{ fontSize: 10 }} /> décider
                        d'une méthode{" "}
                        <span className="font-bold">d'agrégation</span>
                        pour joindre par exemple à chaque comté la moyenne, le
                        nombre, la concaténation... des champs de la couche de
                        sites. Cette dernière méthode est généralement la plus
                        utile.
                    </li>
                </ul>

                <p className="my-4 italic text-sm">
                    Avant de procéder à la jointure, il est important de bien
                    réfléchir aux questions que l'on voudra poser par la suite
                    aux données : que cherche-t-on à faire ? Quelle sera la
                    prochaine étape ?
                </p>

                <div className="my-10">
                    <h6 className="sous-titre-italic" id="compter">
                        Compter le nombre de sites par comté
                    </h6>

                    <p className="my-4">
                        Le but sera ici de compter le nombre de sites
                        remarquables par comté.
                    </p>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            Ouvrez un nouveau projet QGIS, ajoutez les couches
                            <span className="font-bold lien">Counties</span> et
                            <span className="font-bold lien">Heritage</span>,
                            correspondant aux comtés et sites remarquables
                            irlandais.
                        </p>

                        <p className="my-4">
                            Boîte à outils de traitement → Outils généraux pour
                            les vecteurs →{" "}
                            <span className="font-bold">
                                {" "}
                                Joindre les attributs par localisation (résumé)
                            </span>
                        </p>

                        <div className="my-4 bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/8_2_join_resume_fenetre.jpg"
                                alt="join_resume_fenetre"
                            />
                        </div>

                        <ul className="my-4 ml-8">
                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Couche source :{" "}
                                <span className="font-bold lien">Counties</span>
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Joindre la couche :{" "}
                                <span className="font-bold lien">Heritage</span>
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Prédicat géométrique :{" "}
                                <span className="font-bold">Intersecte</span>,
                                ou bien{" "}
                                <span className="font-bold">Contient</span>
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Champs à résumer : cliquez sur le bouton ... à
                                droite, et choisissez un champ d'identifiant
                                unique, ici{" "}
                                <span className="font-bold">OBJECTID</span>{" "}
                                (NAMN1 donnerait le même résultat, dans la
                                mesure où chaque site a un nom différent)
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Résumés à calculer : cliquez sur le bouton ... à
                                droite, et cochez{" "}
                                <span className="font-bold">compte</span> pour{" "}
                                compter le nombre de sites par comté
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Couche issue de la jointure spatiale : laissez
                                la valeur par défaut pour créer une couche
                                temporaire
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Cliquez sur{" "}
                                <span className="font-bold">Exécuter</span>
                            </li>
                        </ul>

                        <p className="my-4">
                            La couche créée possède les même géométries que la
                            couche Counties. Ouvrez sa table attributaire.
                        </p>

                        <div className="my-4">
                            <p className="my-4">
                                <ArrowDropDown /> Quel est le comté avec le plus
                                de sites ? Y a-t-il des comtés qui n'ont pas de
                                sites ?
                            </p>

                            <p className="my-4 italic text-sm">
                                En cliquant sur la colonne{" "}
                                <span className="font-bold">
                                    OBJECTID_count
                                </span>
                                (tout à droite), on peut classer les comtés en
                                fonction de leur nombre de sites.
                            </p>

                            <p className="my-4 italic text-sm">
                                Le comté de Galway possède 8 sites remarquables
                                ; les comtés de Offaly, Monaghan et Carlow n'en
                                possèdent aucun.
                            </p>

                            <div className="bg-img my-4">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/8_2_counties_join_heritage_table.jpg"
                                    alt="counties_join_heritage_table"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-10">
                    <h6 className="sous-titre-italic" id="calculer">
                        Calculer la population par département à partir des
                        communes
                    </h6>

                    <p className="my-4">
                        Nous allons ici partir d'une couche de communes avec un
                        champ population, et d'une couche de départements.
                        L'objectif sera de calculer pour chaque département la
                        population totale, la population moyenne par commune et
                        la population médiane par commune.
                    </p>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            Ouvrez un nouveau projet QGIS, ajoutez les couches
                            <span className="font-bold lien">COMMUNE</span> et
                            <span className="font-bold lien">DEPARTEMENT</span>.
                        </p>

                        <p className="my-4">
                            Ouvrez la table attributaire de la couche de
                            communes, vérifiez que le champ{" "}
                            <span className="font-bold">POPULATION</span> soit
                            bien présent.
                        </p>

                        <p className="my-4">
                            Boîte à outils de traitement → Outils généraux pour
                            les vecteurs →{" "}
                            <span className="font-bold">
                                Joindre les attributs par localisation (résumé)
                            </span>
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/8_2_join_resume_fenetre_2.jpg"
                                alt="join_resume_fenetre"
                            />
                        </div>

                        <ul className="my-4 ml-8">
                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Couche source :{" "}
                                <span className="font-bold lien">
                                    DEPARTEMENT
                                </span>
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Joindre la couche :{" "}
                                <span className="font-bold lien">COMMUNE</span>
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Prédicat géométrique : choisissez{" "}
                                <span className="font-bold">contient</span>.
                                Avec l'opérateur Intersecte, les communes
                                limitrophes seraient également prises en compte,
                                ce qui n'est pas souhaité ici.
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Champs à résumer : cliquez sur le bouton ... à
                                droite, et choisissez le champ{" "}
                                <span className="font-bold">POPULATION</span>
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Résumés à calculer : cliquez sur le bouton ... à
                                droite, et cochez{" "}
                                <span className="font-bold">somme</span>,
                                <span className="font-bold">moyenne</span> et
                                <span className="font-bold">médiane</span> pour
                                calculer ces valeurs pour chaque département.
                            </li>
                        </ul>

                        <div className="my-4 bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/8_2_choix_resumes.jpg"
                                alt="choix_resumes"
                            />
                        </div>

                        <ul className="my-4 ml-8">
                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Couche issue de la jointure spatiale : laissez
                                la valeur par défaut pour créer une couche
                                temporaire
                            </li>

                            <li className="my-4">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Cliquez sur{" "}
                                <span className="font-bold">Exécuter</span>.
                                Attention, le temps de traitement peut être un
                                peu long.
                            </li>
                        </ul>

                        <p className="my-4">
                            La couche temporaire est ajoutée à QGIS. Ses
                            géométries sont celles des départements. Ouvrez sa
                            table attributaire, vérifiez son contenu : on
                            connaît maintenant pour chaque département la
                            population totale (POPULATION_sum), la population
                            communale moyenne (POPULATION_mean) et la population
                            communale mediane (POPULATION_median).
                        </p>

                        <div className="my-4">
                            <p className="my-4">
                                <ArrowDropDown /> Quel est le département le
                                moins peuplé ?
                            </p>

                            <p className="my-4 italic text-sm">
                                En cliquant sur la colonne{" "}
                                <span className="font-bold">
                                    POPULATION_sum
                                </span>
                                , on peut classer les départements en fonction
                                de leur population. La Lozère est le département
                                le moins peuplé avec une population de 76422
                                habitants.
                            </p>

                            <div className="my-4 bg-img">
                                <img
                                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada//illustrations/8_2_depts_pop_communes_table.jpg"
                                    alt="depts_pop_communes_table"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <p className="my-4">
                    Il est possible d'utiliser d'autres méthodes pour réaliser
                    les jointures spatiales, par exemple avec le plugin mmqgis,
                    ou bien via une <span className="lien">requête SQL</span>.
                </p>

                <p className="my-4">
                    Concernant cette dernière méthode, avec utilisation des
                    couches virtuelles, les temps de traitement sont parfois
                    longs en particulier avec des opérateurs spatiaux.
                    L'utilisation de Postgresql/PostGIS améliore grandement ces
                    temps de traitement, mais ceci sort de l'objet de ce
                    tutoriel !
                </p>
            </div>
        </div>
    );
}

export default JoinSpat;
