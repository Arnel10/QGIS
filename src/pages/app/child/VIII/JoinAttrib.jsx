import { ArrowDropDown, FiberManualRecord } from "@mui/icons-material";
import React from "react";

function JoinAttrib() {
    return (
        <div className="relative paragraphe">
            <div className="my-4" id="top">
                <h1 className="titre-primary">
                    VIII.1 Lier des données en fonction de leurs attributs :
                    jointures attributaires
                </h1>
            </div>

            <ul className="my-4 ml-8">
                <li className="my-4">
                    <a href="#join_attrib" className="lien">
                        Comment fonctionne une jointure attributaire ?
                    </a>
                </li>

                <li className="my-4">
                    <a href="#app" className="lien">
                        Application : population au Bhoutan
                    </a>
                </li>

                <li className="my-4">
                    <a href="#qlq_ex" className="lien my-2">
                        Quelques exemples supplémentaires
                    </a>

                    <ul className="my-2">
                        <li className="my-4 ml-8">
                            <a href="#join_couche_tab" className="lien">
                                Jointure d'une couche et d'une table :
                                recensement de la population au Kenya
                            </a>
                        </li>

                        <li className="my-4 ml-8">
                            <a href="#join_deux_couche" className="lien">
                                Jointure de deux couches : licences sportives et
                                catégories socio-professionnelles en France
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="my-4">
                    <a href="#corres" className="lien my-2">
                        Si une entité correspond à plusieurs entités de la
                        couche à joindre
                    </a>

                    <ul className="my-2">
                        <li className="my-4 ml-8">
                            <a href="#compr" className="lien">
                                Pour bien comprendre le problème
                            </a>
                        </li>

                        <li className="my-4 ml-8">
                            <a href="#agreg" className="lien">
                                Agréger les données en 2 étapes
                            </a>
                        </li>

                        <li className="my-4 ml-8">
                            <a href="#loin" className="lien">
                                Pour aller plus loin : une deuxième méthode avec
                                une requête SQL
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="mt-20">
                <div className="bg-style-b my-4">
                    <h5 className="sous-titre" id="join_attrib">
                        Comment fonctionne une jointure attributaire ?
                    </h5>
                </div>

                <p className="my-4">
                    Dans un logiciel SIG, une jointure attributaire consiste à
                    lier à une couche des données provenant d'une table ou d'une
                    autre couche. On se base pour cela sur les données
                    attributaires.
                </p>

                <p className="my-4">
                    Un champ de la couche de départ et un champ de la table
                    contenant les données à joindre servent de{" "}
                    <span className="font-bold">champs clé</span>. Ces champs
                    doivent être de même type (texte, nombre) et contenir les
                    mêmes données. Le logiciel se base sur le contenu de ces
                    champs pour déterminer quel élément de la table est lié à
                    quel élément de la couche.
                </p>

                <div className="bg-img my-4">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/8_1_principe_jointure_attrib.jpg"
                        alt="principe_jointure_attrib"
                    />
                </div>

                <p className="my-4">
                    Dans l'illustration ci-dessus, les données de départ sont :
                </p>

                <ul className="my-4 ml-8">
                    <li className="my-4">
                        <FiberManualRecord sx={{ fontSize: 10 }} /> une couche
                        de polygone avec les régions du Bhoutan. La table
                        attributaire comporte le nom et le code de chaque
                        région, mais pas leur population.
                    </li>

                    <li className="my-4">
                        <FiberManualRecord sx={{ fontSize: 10 }} /> un tableau
                        avec le code de chaque région et sa population en 1995
                    </li>
                </ul>

                <p className="my-4">
                    Les données de la table sont jointes aux données du
                    shapefile, en se basant sur le code région : champ
                    <span className="font-bold">CODEREGION</span> pour le
                    shapefile et champ{" "}
                    <span className="font-bold">REG_CODE</span>REG_CODE pour le
                    tableau.
                </p>

                <p className="my-4">
                    Au final, on obtient une couche shapefile des régions du
                    Bhoutan,{" "}
                    <span className="font-bold">
                        avec en données attributaires les données de la couche
                        de départ et les données du tableau
                    </span>
                    , donc la population.
                </p>

                <p className="my-4">
                    Il arrive qu'un élément de la couche de départ corresponde à
                    plusieurs éléments de la table. Différentes stratégies sont
                    alors possibles selon les logiciels et le type de champ : ne
                    prendre en compte que les données du premier élément lié,
                    calculer la moyenne des données...
                </p>
            </div>

            <div className="mt-20">
                <div className="bg-style-b my-4">
                    <h5 className="sous-titre" id="app">
                        Application : population au Bhoutan
                    </h5>
                </div>

                <div className="bg-style-g p-4 my-4">
                    <p className="my-4">
                        Ouvrez un nouveau projet QGIS et ajoutez-y la couche des
                        régions du{" "}
                        <a
                            href="http://fr.wikipedia.org/wiki/Bhoutan"
                            className="lien"
                        >
                            Bhoutan
                        </a>
                        <span className="font-bold lien">
                            regions_bhutan.shp
                        </span>
                        .
                    </p>

                    <p className="my-4">
                        Ajoutez également au projet la table{" "}
                        <span className="font-bold">pop_bhutan.csv</span> : pour
                        cela, procédez comme pour ajouter une couche de texte
                        délimité en choisissant l'option{" "}
                        <span className="font-bold">Pas de géométrie</span> :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/8_1_ajout_csv.jpg"
                            alt="ajout_csv"
                        />
                    </div>

                    <p className="my-4">
                        Vous pouvez également ajouter ce fichier via le{" "}
                        <span className="lien">panneau Explorateur</span> ou en
                        procédant comme pour une couche vecteur.
                    </p>

                    <p className="my-4">
                        Cependant la méthode présentée ici permet de{" "}
                        <span className="font-bold">
                            détecter automatiquement les types des champs
                        </span>{" "}
                        (texte, entier...). En passant par une autre méthode,
                        tous les champs seront considérés comme du texte.
                    </p>

                    <p className="my-4 italic text-sm">
                        Le{" "}
                        <a
                            href="http://fr.wikipedia.org/wiki/Comma-separated_values"
                            className="lien"
                        >
                            format CSV
                        </a>{" "}
                        est un format texte contenant des colonnes séparées par
                        un caractère délimiteur, habituellement la virgule, le
                        point-virgule ou la tabulation.
                    </p>

                    <p className="my-4">
                        Vous devez donc avoir dans QGIS ces deux données (notez
                        l'icône de tableau pour le CSV) :
                    </p>

                    <div className="my-4 bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/8_1_donnees_chargees.jpg"
                            alt="donnees_chargees"
                        />
                    </div>

                    <p className="my-4">
                        Ouvrez les deux tables attributaires.
                    </p>

                    <p className="my-4">
                        <ArrowDropDown /> À votre avis, pour pouvoir effectuer
                        une jointure entre les 2 tables, quels seront les 2
                        champs clés ?
                    </p>

                    <p className="my-4">
                        Le champ clé pour regions_bhutan est{" "}
                        <span className="font-bold">CODEREGION</span> et le
                        champ clé pour pop_bhutan est{" "}
                        <span className="font-bold">REG_CODE</span>.
                    </p>

                    <p className="my-4">
                        Allez dans les propriétés de la couche{" "}
                        <span className="font_bold lien">regions_bhutan</span>,
                        rubrique <span className="font-bold">Jointure</span> :
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/8_1_proprietes_jointure.jpg"
                            alt="proprietes_jointure"
                        />
                    </div>

                    <p className="my-4">
                        Cliquez sur le symbole symbole + d'ajout de jointure
                        pour ajouter une jointure :
                    </p>

                    <div className="my-4 bg-img">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/8_1_jointure_fenetre.jpg"
                            alt="jointure_fenetre"
                        />
                    </div>

                    <ul className="ml-8 my-4">
                        <li className="">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">
                                Joindre la couche :{" "}
                            </span>
                            choisissez la couche qui sera jointe, ici le CSV{" "}
                            <span className="lien font-bold">pop_bhutan</span>
                        </li>

                        <li className="">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">
                                Champs de jointure :{" "}
                            </span>
                            choisissez le champs clé dans le CSV, à savoir
                            <span className="font-bold">REG_CODE</span>
                        </li>

                        <li className="">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">
                                Champs dans la couche cible :{" "}
                            </span>
                            choisissez le champs clé dans la couche région, à
                            savoir
                            <span className="font-bold">CODEREGION</span>
                        </li>

                        <li className="">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">
                                Mettre la couche jointe en cache dans la mémoire
                                virtuelle :{" "}
                            </span>
                            si cette case est cochée, l'affichage de la table
                            sera plus rapide, mais les données ne seront pas
                            mises à jour si des modifications sont effectuées
                            dans la couche jointe
                        </li>

                        <li className="">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">champs joints : </span>
                            ici, nous voulons joindre tous les champs donc vous
                            pouvez laisser cette case décochée
                        </li>

                        <li className="">
                            <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                            <span className="font-bold">
                                Préfixe de nom de champ personnalisé :{" "}
                            </span>
                            les champs joints peuvent avoir le préfixe de votre
                            choix, pour bien les différencier des champs
                            originaux ou issus d'autres jointures. Choisissez un
                            préfixe court, par exemple{" "}
                            <span className="font-bold">tab_</span>
                        </li>
                    </ul>

                    <p className="my-4">
                        Cliquez sur <span className="font-bold">OK</span> pour
                        créer la jointure : la ligne correspondante apparaît
                        dans la fenêtre des propriétés. Vous pouvez fermer la
                        fenêtre des propriétés.
                    </p>

                    <p className="my-4">
                        Ouvrez la table attributaire de la couche{" "}
                        <span className="lien">regions_bhutan.shp</span> : les
                        données de la table ont été ajoutées (champ
                        tab_POPEST95).
                    </p>

                    <div className="bg-img my-4">
                        <img
                            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/8_1_jointure_res.jpg"
                            alt="jointure_res"
                        />
                    </div>
                </div>

                <p className="my-4">
                    Cependant, la couche n'a pas été modifiée, la jointure n'est
                    que temporaire. Pour sauvegarder définitivement la jointure,
                    il faut sauvegarder la couche sous un autre nom (clic droit
                    sur le nom de la couche → Exporter → Sauvegarder les entités
                    sous).
                </p>
            </div>

            <div className="mt-20">
                <div className="bg-style-b my-4">
                    <h5 className="sous-titre" id="qlq_ex">
                        Quelques exemples supplémentaires
                    </h5>
                </div>

                <div className="my-4">
                    <h6 className="sous-titre-italic" id="join_couche_tab">
                        Jointure d'une couche et d'une table : recensement de la
                        population au Kenya
                    </h6>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            Ouvrez un nouveau projet QGIS. Ajoutez-y la couche{" "}
                            <span className="lien font-bold">gadm36_KEN_1</span>{" "}
                            de la base GeoPackage{" "}
                            <span className="lien font-bold">
                                gadm36_KEN.gpkg{" "}
                            </span>
                            et le fichier CSV{" "}
                            <span className="lien font-bold">
                                County_Population_2009
                            </span>
                            .
                        </p>

                        <p className="my-4">
                            La couche{" "}
                            <span className="lien font-bold">
                                gadm36_KEN_1{" "}
                            </span>
                            correspond à des sous-régions administratives du
                            Kenya, et le tableau County_Population_2009 contient
                            les populations correspondantes.
                        </p>

                        <p className="my-4 italic text-sm">
                            Notez que{" "}
                            <span className="font-bold"> gadm36_KEN.gpkg </span>
                            contient plusieurs couches correspondant aux
                            différents niveaux administratifs. En passant par
                            l'explorateur de données, vous pouvez « ouvrir » la
                            base pour ajouter directement la couche de votre
                            choix. En utilisant le gestionnaire des sources,
                            vous choisissez les couches à ajouter après avoir
                            cliqué sur le bouton Ajouter.
                        </p>

                        <p className="my-4">
                            <ArrowDropDown /> Ouvrez les deux tables
                            attributaires. A votre avis, sur quels champs faire
                            la jointure ? Quel problème va se poser ?
                        </p>

                        <p className="my-4 italic text-sm">
                            Il est possible de faire la jointure en utilisant le
                            nom du County : champ{" "}
                            <span className="font-bold">NAME_1</span> pour
                            <span className="font-bold lien">KEN_adm1</span> et
                            champ <span className="font-bold">County</span> pour
                            <span className="font-bold lien">
                                County_Population_2009.csv
                            </span>
                            .
                        </p>

                        <p className="my-4 italic text-sm">
                            Cependant, les noms sont en minuscules dans la
                            couche et en majuscule dans le CSV. Il faut donc
                            créer et calculer un nouveau champ dans la couche
                            GeoPackage, rempli à l'aide de la formule
                            <span className="font-bold">upper("NAME_1")</span>.
                        </p>

                        <p className="my-4 italic text-sm">
                            Par ailleurs, le champ étant un nom et non un code,
                            il est possible que des lignes ne soient pas jointes
                            si les noms sont orthographiés de manière légèrement
                            différente.
                        </p>

                        <p className="my-4">Faites la jointure.</p>

                        <p className="my-4">
                            <ArrowDropDown /> Combien de lignes n'ont pas été
                            jointes ? Pourquoi ?
                        </p>

                        <p className="my-4 italic text-sm">
                            Deux counties n'ont pas de données jointes :
                            <span className="font-bold">ELGEYO-MARAKWET</span>
                            et <span className="font-bold">THARAKA-NITHI</span>,
                            orthographiés sans tirets dans le fichier CSV.
                        </p>

                        <p className="my-4">
                            Pour que tous les enregistrements soient joints,
                            vous pouvez modifier à la main les noms des counties
                            qui posent problème, soit dans la couche GeoPackage
                            soit dans le fichier CSV (ces opérations peuvent
                            être effectuées dans QGIS).
                        </p>
                    </div>
                </div>

                <div className="my-4">
                    <h6 className="sous-titre-italic" id="join_deux_couche">
                        Jointure de deux couches : licences sportives et
                        catégories socio-professionnelles en France
                    </h6>

                    <div className="bg-style-g my-4 p-4">
                        <p className="my-4">
                            Ouvrez un nouveau projet QGIS. Ajoutez-y les couches
                            <span className="font-bold lien">
                                depts_licences_sportives_2016-2017{" "}
                            </span>
                            et{" "}
                            <span className="font-bold lien">
                                depts_CSP_2016
                            </span>
                            .
                        </p>

                        <p className="my-4">
                            La couche{" "}
                            <span className="font-bold lien">
                                depts_licences_sportives_2016-2017{" "}
                            </span>
                            correspond aux nombres de licences pour différents
                            sports par département, et la couche{" "}
                            <span className="font-bold lien">
                                depts_CSP_2016{" "}
                            </span>
                            aux % des différentes catégories
                            socio-professionnelles par département.
                        </p>

                        <div className="my-4">
                            <p className="my-4">
                                <ArrowDropDown /> Ouvrez les deux tables
                                attributaires. A votre avis, sur quels champs
                                faire la jointure ?
                            </p>

                            <p className="my-4 italic text-sm">
                                Il est possible de faire la jointure sur les
                                champs{" "}
                                <span className="font-bold">INSEE_DEP</span>, ou
                                <span className="font-bold">NOM_DEP</span>, ou
                                bien <span className="font-bold">NOM_DEPT</span>
                                . C'est généralement un bon réflexe de faire si
                                possible la jointure sur des identifiants
                                (INSEE_DEP) plutôt que des noms (NOM_DEP) au cas
                                où ceux-ci seraient orthographiés différemment
                                dans les 2 fichiers.
                            </p>
                        </div>

                        <p className="my-4">
                            Joignez les données attributaires d'une couche à
                            l'autre couche.
                        </p>
                    </div>
                </div>

                <p className="my-4">
                    On peut ensuite explorer la relation entre catégories
                    socio-professionnelles et sports pratiqués, par exemple en
                    utilisant l'extension <span className="lien">Plotly </span>
                    pour visualiser le nombre de licences de golf en fonction de
                    la part de cadres et professions intellectuelles supérieures
                    :
                </p>

                <div className="bg-img my-4">
                    <img
                        src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/8_1_golf_cadres.jpg"
                        alt="golf_cadres"
                    />
                </div>
            </div>

            <div className="mt-20">
                <div className="bg-style-b my-4">
                    <h5 className="sous-titre" id="corres">
                        Si une entité correspond à plusieurs entités de la
                        couche à joindre
                    </h5>
                </div>

                <div className="my-4">
                    <h6 className="sous-titre-italic" id="compr">
                        Pour bien comprendre le problème
                    </h6>

                    <div className="my-4 bg-style-g p-4">
                        <p className="my-4">
                            Ouvrez un nouveau projet QGIS. Ajoutez-y la couche
                            GeoPackage{" "}
                            <span className="font-bold">communes_oise </span>
                            et le fichier CSV{" "}
                            <span className="font-bold">
                                L_MONUMENT_HISTO_S_060
                            </span>{" "}
                            qui correspond à l'ensemble des monuments
                            historiques classés et inscrits dans le département
                            de l'Oise.
                        </p>

                        <div className="my-4">
                            <p className="my-4">
                                <ArrowDropDown /> Explorez ces données :
                                pouvez-vous joindre les données du fichier CSV à
                                la couche de communes ? Grâce à quels champs ?
                            </p>

                            <p className="my-4 italic text-sm">
                                Il est possible de joindre les couches en se
                                basant sur le code INSEE : champ INSEE_COM pour
                                la couche de communes et INSEE pour le tableau
                                des monuments historiques.
                            </p>
                        </div>

                        <p className="my-4">Faites la jointure.</p>

                        <div className="my-4">
                            <p className="my-4">
                                <ArrowDropDown /> Combien y a-t-il de communes ?
                                De monuments historiques ?
                            </p>

                            <p className="my-4 italic text-sm">
                                La couche de communes contient 679 entités, le
                                CSV 700 lignes.
                            </p>
                        </div>

                        <div className="my-4">
                            <p className="my-4">
                                <ArrowDropDown /> Comment la jointure a-t-elle
                                géré cela ?
                            </p>

                            <p className="my-4 italic text-sm">
                                A chaque commune ont été joints les attributs du
                                1er monument ayant le même code INSEE rencontré
                                dans le CSV. Si une commune possède plusieurs
                                monuments, les données d'un seul ont été
                                jointes.
                            </p>
                        </div>
                    </div>

                    <p className="my-4">
                        Certaines communes ont plusieurs monuments historiques,
                        d'autres n'en ont aucun. Comment faire la jointure dans
                        ce cas ?
                    </p>

                    <p className="my-4">
                        Il existe plusieurs possibilités, il faut ici bien se
                        poser la question de ce que l'on veut.
                    </p>

                    <p className="my-4">
                        Ici, si l'on travaille à l'échelle de la commune, les
                        informations sur les monuments devront être agrégées à
                        la commune. On peut par exemple avoir pour chaque
                        commune le nombre de monuments présents.
                    </p>

                    <p className="my-4">
                        On peut également concaténer du texte, c'est-à-dire
                        avoir dans un champ par exemple tous les intitulés des
                        monuments présents séparés par des virgules. Cependant,
                        cette manière d'organiser les informations n'est pas
                        forcément la plus pratique pour exploiter les données
                        par la suite.
                    </p>

                    <p className="my-4 italic text-sm">
                        Il importe de bien réfléchir aux questions qu'on veut
                        pouvoir poser à ses données et à les structurer en
                        conséquence, ce qui sort de l'objectif de ce tutoriel.
                        Pour cela, vous pouvez discuter avec quelqu'un ayant
                        l'habitude de travailler avec des bases de données, de
                        préférence spatiales !
                    </p>

                    <p className="my-4">
                        Nous allons ici ajouter à la couche de communes un champ
                        contenant le nombre de monuments.
                    </p>
                </div>

                <div className="my-4">
                    <h6 className="sous-titre-italic" id="agreg">
                        Agréger les données en 2 étapes
                    </h6>

                    <p className="my-4">
                        Une première possibilité consiste à procéder en 2 étapes
                        :
                    </p>

                    <p className="my-4">
                        Une première possibilité consiste à procéder en 2 étapes
                        :
                    </p>

                    <ul className="my-4 ml-8">
                        <li className="my-2">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> A partir
                            du CSV, créer un tableau avec le nombre de monuments
                            par communes{" "}
                        </li>

                        <li className="my-2">
                            <FiberManualRecord sx={{ fontSize: 10 }} /> Joindre
                            ce tableau à la couche de communes
                        </li>
                    </ul>

                    <div className="bg-style-g my-4 p-4">
                        <p className="my-4">
                            Dans la boîte à outils, rubrique{" "}
                            <span className="font-bold">
                                Analyse vectorielle
                            </span>
                            , double-cliquez sur l'outil{" "}
                            <span className="font-bold">
                                Statistiques par catégories
                            </span>
                            .
                        </p>

                        <div className="my-4 bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/8_1_stats_cats_emplacement.jpg"
                                alt="stats_cats_emplacement"
                            />
                        </div>
                    </div>

                    <p className="my-4">
                        Cet outil permet de calculer des statistiques (nombre,
                        moyenne etc.) sur des champs d'une table attributaire.
                    </p>

                    <p className="my-4">
                        Par exemple, on peut savoir pour chaque type de monument
                        (église, château...) les dates d'inscription min et max,
                        et le nombre de dates d'inscription différentes. Ainsi,
                        on compte 240 églises correspondant à 162 dates
                        d'inscription différentes, entre le 01/01/1840 et le
                        27/10/2016.
                    </p>

                    <p className="my-4">
                        Nous allons ici utiliser cet outil de manière très
                        simple, pour compter le nombre de monuments par commune
                        :
                    </p>

                    <div className="bg-style-g p-4 my-4">
                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/8_1_stats_cats_fenetre.jpg"
                                alt="stats_cats_fenetre"
                            />
                        </div>

                        <ul className="ml-8 my-4">
                            <li className="my-2">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Couche vectorielle en entrée : choisir la couche
                                de monuments{" "}
                                <span className="font-bold lien">
                                    L_MONUMENT_HISTO_S_060
                                </span>
                            </li>
                            <li className="my-2">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Champ pour calculer les statistiques : laisser
                                vide puisqu'on veut simplement compter les
                                monuments
                            </li>
                            <li className="my-2">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Champs avec catégories : cliquez sur ... et
                                cocher le champ{" "}
                                <span className="font-bold">INSEE</span> pour
                                compter le nombre de monuments par code INSEE.
                                On pourrait ici choisir commune mais ce sera
                                moins sûr pour faire la jointure par la suite
                            </li>
                            <li className="my-2">
                                <FiberManualRecord sx={{ fontSize: 10 }} />{" "}
                                Cliquez sur{" "}
                                <span className="font-bold">Exécuter</span>,
                                l'outil va créer une couche temporaire. Vous
                                pouvez ensuite fermer la fenêtre.
                            </li>
                        </ul>

                        <p className="my-4">
                            Ouvrez la table attributaire de cette couche
                            temporaire :
                        </p>

                        <div className="my-4 bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/8_1_stats_cats_res.jpg"
                                alt="stats_cats_res"
                            />
                        </div>

                        <p className="my-4">
                            Chaque ligne correspond à une commune (un code
                            INSEE) et le champ count indique combien cette
                            commune contient de monuments.
                        </p>

                        <p className="my-4">
                            Il ne reste plus qu'à joindre ce tableau à la couche
                            de communes ! Ceci vous permet par exemple de créer
                            une{" "}
                            <span className="lien">
                                carte en cercles proportionnels
                            </span>{" "}
                            du nombre de monuments par communes :
                        </p>

                        <div className="my-4 bg-img">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/8_1_carte_monuments_communes.jpg"
                                alt="carte_monuments_communes"
                            />
                        </div>
                    </div>
                </div>

                <div className="my-4">
                    <h6 className="sous-titre-italic" id="loin">
                        Pour aller plus loin : une deuxième méthode avec une
                        requête SQL
                    </h6>

                    <p className="my-4">
                        Cette autre méthode fait ici appel à une requête SQL.
                        Une <span className="lien">partie spécifique </span>
                        étant dédiée à ces requêtes, voici sans plus de détails
                        une requête répondant à notre question. Pour mieux
                        comprendre cette méthode, si vous n'êtes pas familier du
                        SQL, merci donc de vous reporter{" "}
                        <span className="lien">ici</span> avant d'aller plus
                        loin !
                    </p>

                    <p className="my-4">
                        Vous pouvez bien sûr sauter cette étape et passer
                        directement au{" "}
                        <span className="lien">
                            chapitre suivant sur les jointures spatiales
                        </span>
                        .
                    </p>

                    <div className="bg-style-g p-4 my-4">
                        <p className="my-4">
                            Ouvrez la fenêtre du gestionnaire de bases de
                            données : menu{" "}
                            <span className="font-bold">
                                Base de données → DB Manager...
                            </span>
                            , ou bien cliquez sur l'icône correspondante dans la
                            barre d'outils Base de données.
                        </p>

                        <p className="my-4">
                            Dans l'arborescence située dans la partie gauche de
                            la fenêtre, allez dans{" "}
                            <span className="font-bold">
                                Couches virtuelle → Couches du projet{" "}
                            </span>
                            : vous devriez voir vos couches chargées dans QGIS.
                        </p>

                        <p className="my-4">
                            Cliquez ensuite sur l'icône{" "}
                            <span className="font-bold">Fenêtre SQL</span>, ou
                            bien menu{" "}
                            <span className="font-bold">
                                Base de données → Fenêtre SQL
                            </span>
                            .
                        </p>

                        <div className="bg-img my-4">
                            <img
                                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/8_1_requete_sql.jpg"
                                alt="requete_sql"
                            />
                        </div>

                        <p className="my-4">Tapez la requête suivante :</p>

                        <p className="my-4">
                            SELECT c.INSEE_COM, c.NOM_COM, count(m.INSEE) as
                            nb_monuments, c.geometry FROM communes_oise as c,
                            L_MONUMENT_HISTO_S_060 as m WHERE c.INSEE_COM =
                            m.INSEE GROUP BY c.INSEE_COM, c.NOM_COM, c.geometry
                        </p>

                        <p className="my-4">
                            Vérifiez le résultat : chaque ligne correspond à une
                            commune, avec pour chacune le nombre de monuments.
                        </p>

                        <p className="my-4">
                            Cochez la case{" "}
                            <span className="font-bold">
                                Charger en tant que nouvelle couche
                            </span>
                            .
                        </p>

                        <p className="my-4">
                            Choisissez la colonne avec des valeurs uniques :{" "}
                            <span className="font-bold">INSEE_COM</span>, et la
                            colonne de géométrie :{" "}
                            <span className="font-bold">geometry</span>.
                        </p>

                        <p className="my-4">
                            Donnez un nom à la couche qui sera créée,
                            <span className="font-bold">
                                communes_monuments{" "}
                            </span>
                            par exemple, et cliquez sur le bouton{" "}
                            <span className="font-bold">Charger</span>.
                        </p>

                        <p className="my-4">
                            Le résultat est équivalent à celui obtenu avec la
                            première méthode, mis à part le fait que les
                            communes sans monuments n'existent pas dans la
                            nouvelle couche.
                        </p>

                        <p className="my-4">
                            Une autre requête utilisant{" "}
                            <span className="font-bold">left join</span> permet
                            de les conserver :
                        </p>

                        <p className="my-4">
                            SELECT c.INSEE_COM, c.NOM_COM, count(m.INSEE) as
                            nb_monuments, c.geometry FROM communes_oise as c
                            LEFT JOIN L_MONUMENT_HISTO_S_060 as m ON c.INSEE_COM
                            = m.INSEE GROUP BY c.INSEE_COM, c.NOM_COM,
                            c.geometry
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinAttrib;
