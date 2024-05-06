import { FiberManualRecord } from "@mui/icons-material";
import React from "react";

function CalcChamp() {
  return (
    <div className="top">

      <h4 className="titre-primary">
        VII.2 Calcul de champs
      </h4>

      <div>
        <ul className="text-blue-500">
          <li className="my-2">
            <a href="#howcalculate" className="lien">
              Comment fonctionne la calculatrice de champ ?
            </a>
          </li>
          <li className="my-2">
            <a href="#calcgeo" className="lien">
              Calcul de géométrie : l'exemple de la surface
            </a>
            <ul className="ml-8">
              <li>
                <a href="#surface" className="lien">
                  Calcul de la surface
                </a>
              </li>
              <li>
                <a href="#checking" className="lien">
                  Vérification
                </a>
              </li>
            </ul>
          </li>
          <li className="my-2">
            <a href="#exemplequ" className="lien">
              Quelques exemples supplémentaires de calculs
            </a>
            <ul className="ml-8">
              <li>
                <a href="#densite" className="lien">
                  Opérations mathématiques : calcul de densité
                </a>
              </li>
              <li>
                <a href="#extraction" className="lien">
                  Opérations sur du texte : extraction
                </a>
              </li>
              <li>
                <a href="#loin" className="lien">
                  Pour aller plus loin : utiliser une expression conditionnelle avec CASE
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <p className="paragraphe">
        Il est possible de calculer automatiquement les valeurs d'un champ au moyen de la calculatrice de champ, un peu à la manière d'une formule dans un tableur.
      </p>

      <div id="howcalculate" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre"> Comment fonctionne la calculatrice de champ ?
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              Ouvrez un nouveau projet QGIS, ajoutez la couche <span className="font-bold text-green-400">communes_Bretagne_calcul</span>. Ouvrez sa table attributaire.
            </p>
            <p className="paragraphe">
              Passez en <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/05_02_points.html#V21" className="lien">mode édition</a> . Cliquez sur l'icône <span className="font-bold">Ouvrir la calculatrice de champs</span> parmi les icônes de la table attributaire :
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_2_BO_table_calc.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
            <p className="paragraphe">
              La fenêtre suivante s'ouvre :
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_2_calc_fenetre.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
            <p className="paragraphe">
              <span className="text-red-500">1 :</span> Si cette case est cochée, seules les lignes sélectionnées seront modifiées (en grisé si aucune entité n'est sélectionnée).
            </p>
            <p className="paragraphe">
              <span className="text-red-500">2 :</span> Cocher cette case pour créer un nouveau champ.
            </p>
            <p className="paragraphe">
              <span className="text-red-500">3 :</span> Cocher cette case pour mettre à jour un champ existant.
            </p>
            <p className="paragraphe">
              <span className="text-red-500">4 :</span>  Expression servant à calculer les valeurs du champ.
            </p>
            <p className="paragraphe">
              <span className="text-red-500">5 :</span> Les opérateurs les plus couramment utilisés.
            </p>
            <p className="paragraphe">
              <span className="text-red-500">6 :</span> Liste des opérateurs et fonctions disponibles pour le calcul de champ.
            </p>
            <p className="paragraphe">
              <span className="text-red-500">7 :</span> Si un opérateur ou une fonction est choisi en 6, l'aide correspondante apparaît dans cette partie.
            </p>
            <p className="paragraphe">
              <span className="text-red-500">8 :</span> Ici, une fois l'expression remplie, vous pourrez voir un aperçu du résultat du calcul pour l'entité choisie.
            </p>
            <p className="paragraphe">
              L'onglet <span className="font-bold">Editeur de fonction</span>, derrière l'onglet <span className="font-bold">Expression</span>, permet le calcul de champs à l'aide du langage Python : cette possibilité ne sera pas abordée ici.
            </p>
            <p className="paragraphe">
              Comme vous pouvez le constater, le mode de fonctionnement de la calculatrice de champ est assez similaire à celui <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/06_01_req_attrib.html" className="lien">d'une requête attributaire</a>.
            </p>
            <p className="paragraphe italic">
              Il n'est pas obligatoire de passer en mode édition pour utiliser la calculatrice de champ ; dans ce cas, cliquer sur OK dans la calculatrice enclenche le mode édition.
            </p>
          </div>
        </div>
      </div>

      <div id="calcgeo" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre"> Calcul de géométrie : l'exemple de la surface
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <h6 className="sous-titre-italic" id="surface">
              Calcul de la surface
            </h6>
            <p className="paragraphe">
              Nous allons ici calculer la surface de chaque commune en km2.
            </p>
            <div className="bg-style-g p-2">
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_2_calc_fenetre_surface.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Choisissez <span className="font-bold">Créer un nouveau champ</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />  Nommez le <span className="font-bold">SURF_KM2</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Choisissez le type <span className="font-bold">Nombre décimal</span>. Contrairement au shapefile, avec le format GeoPackage les valeurs sont toujours stockées « telles quelles » et il n'est donc pas possible de définir une longueur (nombre total de chiffres) ou une précision (nombre de chiffres après la virgule)
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />  Dans la liste des fonctions, dans la rubrique <span className="font-bold">Géométrie</span>, double-cliquez sur la fonction <span className="font-bold">$area</span> puis rajoutez à la main dans la case expression <span className="font-bold">/ 1000000</span> (par défaut, la surface est calculée en unités de la couche, donc en m² puisque cette couche est projetée en Lambert 93)
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Au final, l'expression est donc <span className="font-bold">$area / 1000000</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> cliquez sur <span className="font-bold">OK</span>
                  </li>
                </ul>
              </p>
            </div>
            <p className="paragraphe italic">
              Avez-vous noté qu'il est possible de créer des <span className="font-bold">champs virtuels</span> (case à cocher en haut à gauche sous « créer un nouveau champ» ) ? Ces champs ne sont pas permanents et ne seront pas sauvegardés (il est donc possible d'en créer sans passer en mode édition).
            </p>
            <p className="paragraphe italic">
              Si un champ virtuel est utilisé pour calculer par exemple une surface, et si les polygones sont modifiés, <span className="font-bold">la surface sera automatiquement mise à jour.</span>
            </p>

            <h6 className="sous-titre-italic" id="checking">
              Vérification
            </h6>
            <p className="paragraphe">
              Parfois, il peut arriver de se mélanger dans les unités... Il peut être utile de vérifier les calculs de géométrie. Nous allons voir 2 méthodes pour le faire ; cela vous indique aussi comment connaître par exemple la surface d'un polygone donné sans forcément créer et calculer un champ.
            </p>
            <p className="paragraphe">
              La première méthode consiste à <span className="font-bold">mesurer « à la main » la surface d'une commune et à comparer le résultat avec celui du champ SURF_KM2.</span>
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                <img src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_2_mesure_icone.jpg" alt="" />  Vous pouvez vérifier votre calcul au moyen de l'outil <span className="font-bold"> Mesurer une aire :</span>
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_2_aire_selection.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Sélectionnez une commune, mesurez son aire en faisant un clic droit sur le dernier sommet pour terminer, choisissez dans la table l'option <span className="font-bold">Ne montrer que les entités sélectionnées</span> et comparer l'aire que vous avez mesuré et l'aire du champ SURF_KM2.
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_2_verif_surf.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Les deux aires devraient être sensiblement égales.
              </p>
            </div>
            <p className="paragraphe">
              La deuxième méthode utilise l'outil Identifier des entités.
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                <img src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_2_identifier_icone.jpg" alt="" />  Cliquer sur l'icône Identifier des entités puis sur une commune.
              </p>
              <p className="paragraphe">
                Cette commune prend une transparence rouge avec une bordure rouge, et les informations relatives à cette entité apparaissent dans le panneau <span className="font-bold">Résultats de l'identification</span>. On peut y lire les données de la table attributaire pour cette commune, mais également des informations <span className="font-bold">dérivées</span> liées à sa géométrie telles que son périmètre, sa surface...
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_2_verif_surf_identifier.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Comparez la surface du champ SURF_KM2 et la surface indiquée dans les résultats de l'identification (rubrique Dérivé). Les deux aires devraient être sensiblement égales (attention à convertir les unités).
              </p>
            </div>
            <p className="paragraphe">
              Vous remarquerez qu'on peut lire 2 surfaces dans les résultats de l'identification : <span className="font-bold">la surface cartésienne, et la surface basée sur une ellipsoïde.</span> La première est basée sur des distances en ligne droite, qui ne prennent pas en compte la courbure de la Terre. La deuxième prend en compte la courbure de la Terre en se basant sur l'ellipsoïde indiquée.
            </p>
            <p className="paragraphe">
              Pour de faibles distances, les 2 résultats seront donc très proches, la différence augmentant avec la distance.
            </p>
          </div>

        </div>
      </div>

      <div id="exemplequ" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">
            Quelques exemples supplémentaires de calculs
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              La calculatrice de champs offre beaucoup de fonctions que nous ne passerons pas toutes en revue ; nous verrons simplement quelques exemples pour vous donner un aperçu des possibilités.
            </p>
            <h6 className="sous-titre-italic" id="densite">
              Opérations mathématiques : calcul de densité
            </h6>
            <p className="paragraphe">
              L'objectif sera ici de calculer la densité en habitants par km2 de chaque commune, à partir de la population et la surface.
            </p>
            <p className="paragraphe">
              Savez-vous comment calculer la densité à partir de la population et la surface ? <br /> <i> La densité se calcule en divisant la population par la surface. Si la population est en nombre d'habitants et la surface en km2, alors la densité sera en nombre d'habitants par km2.
              </i>
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Si ce n'est pas déjà fait, ouvrez la table attributaire de la couche communes_Bretagne_calcul. Ouvrez la calculatrice de champs :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_2_calc_densite.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Choisissez l'option <span className="font-bold">Créer un nouveau champ</span>, nommez-le <span className="font-bold">DENSITE</span>, type <span className="font-bold"> Nombre décimal</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Dans la liste des <span className="font-bold">fonctions</span>, rubrique <span className="font-bold">Champs et valeurs</span> , double-cliquez sur <span className="font-bold">POPULATION</span>, le diviseur <span className="font-bold">/</span> puis double-cliquez sur le champ <span className="font-bold">SURF_KM2</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> <span className="font-bold">Options des champs et enregistrements </span> : vérifiez que les cases <span className="font-bold">en-têtes de 1ère ligne, Détecter les types de champs et Virgule en sépareteur décimal</span> soient bien cochées
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Au final, l'expression est <span className="font-bold">"POPULATION" / "SURF_KM2"</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Cliquez sur <span className="font-bold">OK</span> : le champ densité est ajouté et calculé, en nombre d'habitants par km² :
                  </li>
                </ul>
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_2_densite_table.jpg"
                  alt="pôle-ard"
                  width={200}
                />
              </div>
            </div>
            <h6 className="sous-titre-italic mt-5" id="extraction">
              Opérations sur du texte : extraction
            </h6>
            <p className="paragraphe">
              La couche <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_07_Champs.zip" className="lien"> communes_Bretagne_calcul</a> comporte une colonne INSEE_COM avec le code INSEE des communes. Ce code INSEE est constitué du code du département (2 chiffres pour la Bretagne) et du code commune (3 chiffres).
            </p>
            <p className="paragraphe">
              Le but est ici <span className="font-bold">d'extraire le code commune</span> du code INSEE, donc les 3 derniers chiffres de ce dernier. Par exemple, la commune de Dirinon a comme code INSEE 29045 : le nouveau champ CODE_COM aura la valeur 045 pour cette commune.
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Si ce n'est pas déjà fait, ouvrez la table attributaire de la couche <span className="font-bold text-green-400">communes_Bretagne</span>. Ouvrez la calculatrice de champs :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_2_calcul_fenetre_right.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Vérifiez que la case <span className="font-bold">Ne mettre à jour que les x entités sélectionnées</span> soit décochée, puisque le but est de mettre à jour toutes les lignes de la table
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Choisissez <span className="font-bold">Créer un nouveau champ</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Nommez-le <span className="font-bold">CODE_COM</span>, type <span className="font-bold">Texte</span>, longueur <span cla ssName="font-bold">3</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />  Dans la liste des fonctions, allez dans la rubrique <span className="font-bold">Chaîne</span> (texte) et cliquez sur la fonction <span className="font-bold">right</span> : vous pouvez lire l'aide à droite. Cette fonction extrait les caractères les plus à droite d'un texte.
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> La fonction right nécessite deux paramètres : le texte d'où seront extraits les caractères (ici, le champ <span className="font-bold">INSEE_COM</span> ) et le nombre de caractères à extraire (ici, <span className="font-bold">3</span> puisque le code commune codé sur 3 caractères)
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> L'expression est donc <span className="font-bold">right( "INSEE_COM", 3)</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> Cliquez sur <span className="font-bold">OK</span> : le champ CODE_COM est créé et mis à jour :
                  </li>
                </ul>
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_2_table_codeinsee.jpg"
                  alt="pôle-ard"
                  width={400}
                />
              </div>
            </div>
            <h6 className="sous-titre-italic mt-5" id="loin">
              Pour aller plus loin : utiliser une expression conditionnelle avec CASE
            </h6>
            <p className="paragraphe">
              Nous allons ici voir un exemple d'expression un peu plus complexe pour écrire dans un nouveau champ le nom du département en fonction de son code.
            </p>
            <p className="paragraphe">
              Le but est ici de vous montrer que tout est possible, ou presque ! Il est possible de faire les calculs dans un tableur pour joindre ensuite les données, mais cela nécessite moins d'étapes de tout faire dans QGIS.
            </p>
            <p className="paragraphe">
              Pour cette étape, il vous faudra connaître les noms des 4 départements bretons associés à leur code ! Vous pouvez aussi consulter <a href="https://fr.wikipedia.org/wiki/Num%C3%A9rotation_des_d%C3%A9partements_fran%C3%A7ais#/media/Fichier:D%C3%A9partements_de_France_nom+num.svg" className="lien">cette carte</a> issue de Wikipedia.
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Comme d'habitude, ouvrez la calculatrice de champs.
              </p>
              <p className="paragraphe">
                Nous allons créer un nouveau champ nommé <span className="font-bold">NOM_DEP</span> de type <span className="font-bold">texte</span> et de longueur maximale <span className="font-bold">50</span>.
              </p>
              <p className="paragraphe">
                Dans la rubrique <span className="font-bold">Conditions</span> de la liste des opérateurs, cliquez sur <span className="font-bold">CASE</span> et lisez l'aide associée à cette fonction dans la partie droite de la fenêtre.
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_2_aide_case.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Cette fonction commence par <span className="font-bold">CASE</span> et se termine par <span className="font-bold">END</span>. Entre les deux, on trouve une série de clauses avec les 2 mots-clés <span className="font-bold">WHEN</span>, pour définir un critère, et <span className="font-bold">THEN</span>, pour définir comment sera calculée la valeur si le critère est rempli. Nous n'utiliserons pas <span className="font-bold">ELSE</span> ici.
              </p>
              <p className="paragraphe">
                A votre avis, combien de clauses WHEN ... THEN ... devra comporter notre expression ? <br /> Nous devrons écrire 4 clauses différentes, une pour chaque département.
              </p>
              <p className="paragraphe">
                Pour le département du Finistère, nous écrirons par exemple
              </p>
              <p className="paragraphe italic">
                WHEN "INSEE_DEP" = '29' THEN 'Finistère'
              </p>
              <p className="paragraphe">
                Pouvez-vous écrire dans son entier l'expression utilisée pour écrire le nom du département en fonction de son code ? <br /> <i>
                  CASE
                  WHEN "INSEE_DEP" = '29' THEN 'Finistère' <br />
                  WHEN "INSEE_DEP" = '22' THEN 'Côtes-d''Armor' <br />
                  WHEN "INSEE_DEP" = '35' THEN 'Ille-et-Vilaine' <br />
                  WHEN "INSEE_DEP" = '56' THEN 'Morbihan' <br />
                  END
                </i>
              </p>
              <p className="paragraphe italic">
                Attention, il y a un piège ! Pour que l'apostrophe de « Côtes-d'Armor » ne soit pas considérée comme celle de fin de la chaîne de caractères, il faut utiliser une double apostrophe : 'Côtes-d''Armor'.
              </p>
              <p className="paragraphe">
                Au final, la calculatrice doit être paramétrée comme suit :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_2_calc_case.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Et le résultat :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_2_table_nomdep.jpg"
                  alt="pôle-ard"
                  width={300}
                />
              </div>
              <p className="paragraphe">
                Avez-vous remarqué qu'il existe dans la liste des opérateurs une rubrique <span className="font-bold">Récent</span> vous permettant de retrouver en un clic les expressions que vous avez déjà utilisées dans la calculatrice de champs ?
              </p>


            </div>


          </div>
        </div>
      </div>





    </div>
  );
}

export default CalcChamp;
