import { FiberManualRecord } from "@mui/icons-material";
import React from "react";

function OperDoVect() {
  return (
    <div>
      <h4 className="titre-primary" id="top">
        IX.1 Analyse spatiale : quelques exemples d'opérations sur des données vecteur
      </h4>

      <div>
        <ul className="text-blue-500">
          <li className="my-2">
            <a href="#decoupe" className="lien">
              Découper des données par d'autres données
            </a>
            <ul className="ml-8">
              <li>
                <a href="#principe" className="lien">
                  Quel est le principe ?
                </a>
              </li>
              <li>
                <a href="#modeuse" className="lien">
                  Découpage, mode d'emploi
                </a>
              </li>
              <li>
                <a href="#notforget" className="lien">
                  Sans oublier de penser aux systèmes de coordonnées...
                </a>
              </li>
            </ul>
          </li>
          <li className="my-2">
            <a href="#createwater" className="lien">
              Création d'une zone tampon autour d'un cours d'eau
            </a>
            <ul className="ml-8">
              <li>
                <a href="#tampon" className="lien">
                  Qu'est-ce qu'une zone tampon ?
                </a>
              </li>
              <li>
                <a href="#selectwater" className="lien">
                  Sélection d'un cours d'eau
                </a>
              </li>
              <li>
                <a href="#tamponselect" className="lien">
                  Création d'une zone tampon autour de la sélection
                </a>
              </li>
              <li>
                <a href="#sofaraway" className="lien">
                  Pour aller plus loin : détail des autres paramètres
                </a>
              </li>
            </ul>
          </li>
          <li className="my-2">
            <a href="#intersect" className="lien">
              Données communes entre deux couches : intersection
            </a>
            <ul className="ml-8">
              <li>
                <a href="#whtinterse" className="lien">
                  Qu'est-ce qu'une intersection ?
                </a>
              </li>
              <li>
                <a href="#communetama" className="lien">
                  Intersection entre communes et zone tampon
                </a>
              </li>
              <li>
                <a href="#awayfrom" className="lien">
                  Si on voulait aller plus loin...
                </a>
              </li>
            </ul>
          </li>
          <li className="my-2">
            <a href="#lance" className="lien">
              Relancer rapidement un outil à l'aide de l'historique
            </a>
          </li>
        </ul>
      </div>

      <div id="decoupe" className="mt-8 mb-4">
        <div className="bg-style-b">
          <p className="paragraphe">
            Nous aborderons ici quelques traitements possibles sur des données vecteur. Il en existe bien sûr beaucoup d'autres !
          </p>
          <h5 className="sous-titre">
            Découper des données par d'autres données
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <h6 className="sous-titre-italic" id="principe">
              Quel est le principe ?
            </h6>
            <p className="paragraphe">
              Le but sera ici, à partir d'une couche de cours d'eau de la région Pays de la Loire et d'une couche des départements de France métropolitaine, de <span className="font-bold"> découper les cours d'eau pour ne garder que ceux dans notre zone d'étude</span>, en l'occurrence le département de la Loire-Atlantique (44).
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_decoupage_principe_1.jpg"
                alt="pôle-ard"
                width={300}
              />
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_decoupage_principe_2.jpg"
                alt="pôle-ard"
                width={300}
              />
            </div>
            <p className="paragraphe italic text-center">
              A gauche, les 2 couches de départ : cours d'eau des Pays de la Loire et départements. A droite, le résultat souhaité : les cours d'eau découpés selon le département de la Loire-Atlantique (44)
            </p>
            <p className="paragraphe">
              Une telle opération est utile pour avoir des données moins lourdes, ce qui diminue les temps de traitement. Par ailleurs, votre travail sera plus clair si vous utilisez des données adaptées à votre zone d'étude.
            </p>
            <h6 className="sous-titre-italic" id="modeuse">
              Découpage, mode d'emploi
            </h6>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Ouvrez un nouveau projet QGIS. Ajoutez les couches <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_09_AnalyseSpat.zip" className="lien">DEPARTEMENT</a> et <a href="gis_osm_waterways_free_1" className="lien">gis_osm_waterways_free_1</a>.
              </p>
              <p className="paragraphe">
                Le but sera donc de découper les cours d'eau par le département 44, pour ne garder que les cours d'eau à l'intérieur de ce département. Cette opération crée une nouvelle couche.
              </p>
              <p className="paragraphe">
                <img src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/1_1_selection_icone.jpg" alt="" />  Tout d'abord, sélectionnez le département 44 au moyen de l'outil de sélection :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_selection_44.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Puis rendez-vous dans la <span className="italic text-green-400"> boîte à outils de traitements → Recouvrement de vecteur → Couper</span>
                <div className="bg-img">
                  <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_decouper_emplacement.jpg"
                    alt="pôle-ard"
                    width={400}
                  />
                </div>
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_decouper_fenetre.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                <ul className="ml-8 paragraphe mt-2">
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Couche source : choisir la couche à découper, en l'occurrence les cours d'eau : <span className="font-bold text-green-400">gis_osm_waterways_free_1</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Couche de superposition : choisir la couche servant de masque de découpe, en l'occurrence <span className="font-bold text-green-400">DEPARTEMENT</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Entité(s) sélectionnée(s) uniquement : <span className="font-bold">cochez cette case</span> pour ne garder que les cours d'eau à l'intérieur du département sélectionné, et non à l'intérieur de tous les départements
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Découpé : cliquez sur ..., sélectionnez l'option <span className="font-bold">Enregistrer vers un fichier</span>, et choisissez l'endroit où la couche sera créée, et son nom : <span className="font-bold text-green-400">coursdeau_osm_44</span> (au format GeoPackage)
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Cliquez sur <span className="font-bold">Exécuter</span>
                  </li>
                </ul>
              </p>
              <p className="paragraphe">
                Patientez... La nouvelle couche est ajoutée :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_decoupage_resultat.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Vérifiez ses données attributaires : <span className="font-bold">elle contient les mêmes champs que la couche de cours d'eau initiale</span>. Les valeurs des champs ne sont pas recalculées (sauf dans le cas de champs virtuels) : s'il y a un champ longueur, ses valeurs seront donc erronées.
              </p>
            </div>
            <p className="paragraphe">
              Contrairement à une requête spatiale, le découpage modifie les entités en les <span className="font-bold">découpant</span> suivant les limites de la couche de découpage. Une requête se borne à <span className="font-bold">sélectionner</span> par exemple les cours d'eau à l'intérieur d'un département, ou intersectant ce département.
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_selection.jpg"
                alt="pôle-ard"
                width={300}
              />
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_decoupage.jpg"
                alt="pôle-ard"
                width={300}
              />
            </div>
            <p className="paragraphe text-center italic">
              A gauche, cours d'eau intersectant un département sélectionné par une requête spatiale (en jaune). A droite, cours d'eau découpé par un département (en rouge).
            </p>
            <h6 className="sous-titre-italic" id="notforget">
              Sans oublier de penser aux systèmes de coordonnées...
            </h6>
            <p className="paragraphe">
              Avez-vous noté que les 2 couches de départ ont <span className="font-bold">2 SCR différents</span> ? (WGS84 pour les cours d'eau, RGF93/Lambert 93 pour les départements). Pourtant, le découpage fonctionne correctement. Ce comportement n'existe que depuis la version 3 de QGIS, la version 2.18 retournait dans ce cas une couche vide.
            </p>
            <p className="paragraphe font-bold">
              Même si ça n'est plus obligatoire, cela reste une bonne pratique de travailler avec des couches dans le même SCR.
            </p>
          </div>
        </div>
      </div>

      <div id="createwater" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">
            Création d'une zone tampon autour d'un cours d'eau
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <h6 className="sous-titre-italic" id="tampon">
              Qu'est-ce qu'une zone tampon ?
            </h6>
            <p className="paragraphe">
              Une zone tampon (aussi appelée « buffer ») est une <span className="font-bold">zone épousant la forme des objets d'une couche, d'une largeur donnée</span>. Si elles sont tracées autour de points, les zones tampons seront des cercles. Autour de lignes et de polygones, ce sera des polygones de forme variable. Une zone tampon peut servir par exemple à modéliser une zone inondable, un périmètre de sécurité, une zone d'achalandage...
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_principe_tampon.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
            <p className="paragraphe">
              L'objectif est ici de créer une zone tampon de 100 mètres autour de l'Erdre. Cette zone pourra représenter par exemple une zone inondable, ou bien une zone s'interposant entre rivière et cultures.
            </p>
            <h6 className="sous-titre-italic" id="selectwater">
              Sélection d'un cours d'eau
            </h6>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Comment faire pour sélectionner le cours d'eau dont le nom est <span className="font-bold">L'Erdre</span> de la couche <span className="font-bold text-green-300">coursdeau_osm_44</span> ?
              </p>
              <p className="paragraphe italic">
                2 méthodes au choix :
                <p>
                  1/ Sélectionner à la main dans la table attributaire les lignes où la valeur du champ <span className="font-bold">name</span> est <span className="font-bold">L'Erdre</span> (pour les trouver plus facilement, cliquez sur l'intitulé de colonne <span className="font-bold">name</span> pour classer les lignes par nom)
                </p>
                <p className="mt-4">
                  2/ <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/06_01_req_attrib.html" className="lien">utiliser une requête attributaire :</a> <span className="font-bold">"name" = 'L\'Erdre'</span>. Attention, le caractère <span className="font-bold"> \ (antislash)</span> est nécessaire avant l'apostrophe, pour que ce dernier ne soit pas considéré comme la fin de la chaîne de caractères.
                </p>
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_selection_erdre.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Ce cours d'eau est donc constitué de plusieurs entités.
              </p>
            </div>
            <h6 className="sous-titre-italic" id="tamponselect">
              Création d'une zone tampon autour de la sélection
            </h6>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Pour créer la zone tampon : <span className="font-bold"> Boîte à outils de traitements → Géométrie vectorielle → Tampon</span>
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_tampon_degres.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Sélectionnez la couche source : <span className="font-bold text-green-400" >coursdeau_osm_44</span> . En-dessous, la distance permet de paramétrer la taille de la zone tampon.
              </p>
              <p className="paragraphe">
                Vous pouvez voir que <span className="font-bold">les unités de taille sont les degrés !</span> En effet, notre couche de cours d'eau étant en WGS84, il s'agit des unités de cette couche.
              </p>
            </div>
            <p className="paragraphe">
              Avant d'aller plus loin, il nous faudra donc <span className="font-bold">projeter notre couche</span> pour pouvoir fixer une taille en mètres. Nous utiliserons pour cela le système officiel français, à savoir le <span className="font-bold">RGF93/Lambert-93 (code EPSG 2154)</span>.
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Fermez la fenêtre de l'outil de zone tampon <span className="font-bold">sans créer la zone tampon.</span>
              </p>
              <p className="paragraphe">
                <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/02_04_changer_systeme.html#II42" className="lien">Modifiez le SCR</a> de la couche <span className="font-bold text-green-400">coursdeau_osm_44</span>, pour passer du WGS84 vers le <span className="font-bold"> RGF93/Lambert-93 (code EPSG 2154)</span> grâce à l'outil <span className="font-bold">Reprojeter une couche </span>(Outils généraux pour les vecteurs) de la boîte à outils.
              </p>
              <p className="paragraphe">
                Nommez la nouvelle couche <span className="font-bold text-green-400">coursdeau_osm_44_L93</span>.
              </p>
              <p className="paragraphe">
                Vérifiez dans les propriétés de cette nouvelle couche, rubrique <span className="font-bold">Source</span>, que son SCR soit bien le Lambert 93 :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_verif_l93.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
            </div>
            <p className="paragraphe">
              Attention, si le SCR n'est pas le bon, ne le modifiez pas ici ! Utilisez l'outil <span className="font-bold"> Reprojeter une couche </span> de la boîte à outils. Modifier le SCR et <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/02_04_changer_systeme.html#II43" className="lien">redéfinir le SCR</a> sont 2 manipulations différentes.
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/09_01_vecteur.html#IX12b" className="lien">Sélectionnez à nouveau l'Erdre.
                </a>
              </p>
              <p className="paragraphe">
                Vous pouvez ensuite créer la zone tampon :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_tampon_fenetre.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                <ul className="ml-8 paragraphe mt-2">
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Couche source : il s'agit de la couche autour de laquelle sera créée la ou les zones tampons, donc ici la couche de cours d'eau <span className="font-bold text-green-400">coursdeau_osm_44_L93</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Entité(s) sélectionnée(s) uniquement : <span className="font-bold">cocher cette case</span> afin de ne créer de zone tampon qu'autour de l'Erdre
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Distance tampon : la couche étant projetée en Lambert 93, son unité est le mètre. Choisissez une distance de <span className="font-bold"> 100 mètres</span>. Le bouton tout à droite permet de faire varier la largeur de la zone en fonction des valeurs d'un champ ou d'une expression ; nous ne l'utiliserons pas ici
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} <span className="font-bold">Regrouper le résultat :</span> cette case permet de fusionner toutes les zones tampon qui seront créées ; sinon, une zone tampon est créée par entité de la couche source. Cochez cette case pour cet exercice (cf. image ci-dessous)
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Mis en tampon : cliquez tout à droite sur le bouton <span className="font-bold">... → Enregistrer vers un fichier...</span> choisir le nom : <span className="font-bold text-green-400">Erdre_tampon100m.gpkg</span> par exemple et l'emplacement de la couche qui sera créée
                  </li>
                </ul>
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_tampon_nonregroupe.jpg"
                  alt="pôle-ard"
                  width={300}
                />
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_tampon_regroupe.jpg"
                  alt="pôle-ard"
                  width={300}
                />
              </div>
              <p className="paragraphe text-center italic">
                Détail du résultat de la zone tampon : à gauche sans regrouper, à droite en regroupant.
              </p>
              <p className="paragraphe">
                Cliquez sur <span className="font-bold">Exécuter</span>, observez le résultat :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_res_tampon_erdre.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
            </div>
            <h6 className="sous-titre-italic mt-4" id="sofaraway">
              Pour aller plus loin : détail des autres paramètres
            </h6>
            <p className="paragraphe">
              Les autres paramètres de l'outil de zone tampon sont moins fréquemment modifiés et vous pouvez souvent laisser les valeurs par défaut. Voici leur description pour information, que vous pouvez également retrouver dans l'aide (partie droite de la fenêtre de l'outil) ou bien <a href="https://docs.qgis.org/latest/fr/docs/user_manual/processing_algs/qgis/vectorgeometry.html#buffer" className="lien">la documentation QGIS</a> :
            </p>
            <p className="paragraphe">
              <ul className="ml-8 paragraphe mt-2">
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} />{" "} <span className="font-bold">Segments :</span> plus cette valeur est élevée, plus les contours de la zone seront « arrondis ». Il s'agit en fait du nombre de segments utilisés pour représenter un quart de cercle.
                </li>
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} />{" "} <span className="font-bold">Style d'extrémité : </span> il s'agit de la manière dont les zones tampons sont « terminées ». 3 valeurs sont possibles : rond, plat et carré
                </li>
                <div className="bg-img">
                  <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_tampon_extr_rond.jpg"
                    alt="pôle-ard"
                    width={200}
                  />
                  <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_tampon_extr_plat.jpg"
                    alt="pôle-ard"
                    width={200}
                  />
                  <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_tampon_extr_carre.jpg"
                    alt="pôle-ard"
                    width={200}
                  />
                </div>
                <p className="paragraphe italic text-center">
                  Différents types d'extrémité pour les zones tampon : de gauche à droite, rond, plat et carré.
                </p>
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} />{" "} <span className="font-bold"> Style de jointure : </span> les zones tampons sont créées en « décalant » les sommets d'une entité, ici une ligne. Il existe plusieurs manières de réaliser ce décalage, ce que contrôle ce paramètre. 3 valeurs sont possibles : rond, angle droit et oblique.
                </li>
                <div className="bg-img">
                  <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_tampon_jointure_rond.jpg"
                    alt="pôle-ard"
                    width={150}
                  />
                  <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_tampon_jointure_angledroit.jpg"
                    alt="pôle-ard"
                    width={150}
                  />
                  <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_tampon_jointure_oblique.jpg"
                    alt="pôle-ard"
                    width={150}
                  />
                  <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_tampon_jointure_tous.jpg"
                    alt="pôle-ard"
                    width={150}
                  />
                </div>
                <p className="paragraphe text-center italic">
                  Différents types de jointure pour les zones tampon : de gauche à droite, rond, angle droit, oblique et superposition des 3.
                </p>
                <li className="my-1">
                  <FiberManualRecord sx={{ fontSize: 10 }} />{" "} <span className="font-bold">Limite d'angle droite : </span>   ce paramètre n'est utilisé que pour les styles jointure à angle droit. D'après l'aide, il contrôle « la distance maximale de la courbe de décalage ». Personnellement je trouve cette définition peu claire, et d'après mes observations les différences sont minimes (on peut les observer en passant de 1 à 2 par exemple). Ecrivez-moi si vous en savez plus !
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div id="intersect" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">
            Données communes entre deux couches : intersection
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <h6 className="sous-titre-italic" id="whtinterse">
              Qu'est-ce qu'une intersection ?
            </h6>
            <p className="paragraphe">
              L'intersection entre deux couches crée une troisième couche, avec uniquement les parties communes aux deux couches.
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_inters_principe.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
            <p className="paragraphe text-center italic">
              La zone hachurée correspond à l'intersection entre le rectangle et le cercle.
            </p>
            <h6 className="sous-titre-italic" id="communetama">
              Intersection entre communes et zone tampon
            </h6>
            <p className="paragraphe">
              L'idée sera ici de créer la couche d'intersection entre les communes et la zone tampon autour de l'Erdre créée ci-dessus. Ceci pourrait permettre de visualiser par exemple pour chaque commune la partie qui se trouve en zone inondable.
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Ajoutez la couche <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_09_AnalyseSpat.zip" className="lien">COMMUNE_44</a> au projet.
              </p>
              <p className="paragraphe font-bold">
                Boîte à outils de traitements → Recouvrement de vecteur → Intersection :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_inters_fenetre.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                <ul className="ml-8 paragraphe mt-2">
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Couche source : choisir la couche <span className="font-bold text-green-400">COMMUNE_44</span>. Ne pas cocher la case « Entités sélectionnées uniquement » puisqu'il s'agit d'intersecter toutes les communes
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Couche de superposition : choisir la couche <span className="font-bold text-green-400">Erdre_tampon_100m</span>. Idem, ne pas cocher la case « Entités sélectionnées uniquement »
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Champs d'entrée à conserver : cette option permet de choisir les champs de la couche source à conserver. Ici, nous garderons tous les champs et nous n'utiliserons donc pas ce paramètre
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Champs à conserver : cette option permet de choisir les champs de la couche de superposition. Ici, nous garderons tous les champs et nous n'utiliserons donc pas ce paramètre
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />{" "} Intersection : cliquez tout à droite sur le bouton <span className="font-bold">... → Enregistrer vers un fichier... </span> choisir le nom : <span className="font-bold text-green-400">inters_communes_tampon.gpkg</span> par exemple et l'emplacement de la couche qui sera créée
                  </li>
                </ul>
              </p>
              <p className="paragraphe">
                Cliquez sur <span className="font-bold">Exécuter</span>, observez le résultat :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_inters_resultat.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Ouvrez la table attributaire de cette couche : notez que les champs des deux couches sont présents.
              </p>
            </div>
            <h6 className="sous-titre-italic mt-4" id="awayfrom">
              Si on voulait aller plus loin...
            </h6>
            <p className="paragraphe">
              A titre d'exemple d'application, comment faire pour obtenir pour chaque commune le pourcentage de sa surface en zone inondable ?
            </p>
            <p className="paragraphe">
              Plusieurs étapes seraient nécessaires : <br />
              1. Ajouter un champ Surface à la couche d'intersection, en calculant pour chaque entité sa surface par exemple en hectares <br />
              2. Joindre ce champ Surface à la couche de communes, en effectuant une jointure attributaire sur les codes INSEE <br />
              3. Ajouter un champ à la couche de communes et y calculer le pourcentage en zone inondable, en utilisant le champ Surface joint et la surface de la commune <br />
            </p>
            <p className="paragraphe">
              En combinant les outils vus dans ce tutoriel (et d'autres !), on peut essayer de répondre à des questions sur des données spatiales.
            </p>
          </div>
        </div>
      </div>


      <div id="lance" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">
            Relancer rapidement un outil à l'aide de l'historique
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              Cette astuce est valable pour tous les outils de la boîte à outils, sur les vecteurs, rasters ou autres !
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Rendez-vous dans <span className="font-bold">le menu Traitement → Historique :</span>
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/9_1_historique.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Dans cette fenêtre, chaque ligne correspond à une fois où vous avez lancé un outil de la boîte à outils, le tout classé par ordre chronologique.
              </p>
              <p className="paragraphe">
                Cliquez sur une des lignes : dans la partie basse de la fenêtre, vous pouvez voir la commande Python correspondante, que le logiciel a lancé pour exécuter l'outil (voir partie XI.4).
              </p>
              <p className="paragraphe">
                <span className="font-bold">Si vous double-cliquez sur une ligne, la fenêtre de l'outil se lance avec exactement le même paramétrage que celui utilisé cette fois-là</span>. Ce qui est très utile en particulier pour les outils avec beaucoup de paramètres, par exemple quand on fait des tests et qu'on est amené à relancer plusieurs fois un outil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OperDoVect;
