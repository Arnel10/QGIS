import { FiberManualRecord } from "@mui/icons-material";
import React from "react";

function CreSupChamp() {
  return (
    <div id="top">
      <h4 className="titre-primary">
        VII.1 Manipulation de champs
      </h4>

      <div>
        <ul className="text-blue-500">
          <li className="my-2">
            <a href="champstable" className="lien">
              Quels sont les champs présents dans une table ?
            </a>
          </li>
          <li className="my-2">
            <a href="#creesuppri" className="lien">
              Créer et supprimer un champ à partir de la table attributaire
            </a>
            <ul className="ml-8">
              <li>
                <a href="#createchamp" className="lien"> Créer un champ
                </a>
              </li>
              <li>
                <a href="#modifmanu" className="lien">
                  Modifier les valeurs d'un champ manuellement
                </a>
              </li>
              <li>
                <a href="#suppri" className="lien">
                  Supprimer un champ existant
                </a>
              </li>
            </ul>
          </li>
          <li className="my-2">
            <a href="#sofar" className="lien">
              Pour aller plus loin : refactoriser les champs
            </a>
          </li>
        </ul>
      </div>

      <p className="paragraphe mt-4">
        Nous verrons ici comment ajouter et supprimer des champs dans la table attributaire d'une couche existante, et comment modifier l'ordre des champs.
      </p>

      <div id="champstable" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre"> Quels sont les champs présents dans une table ?
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Ouvrez un nouveau projet QGIS, ajoutez la couche <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/donnees/TutoQGIS_07_Champs.zip" className="lien">communes_Bretagne_calcul</a> .
              </p>
              <p className="paragraphe">
                Pour voir les champs de la table attributaire de cette couche, vous pouvez bien sûr ouvrir la table attributaire, mais vous pouvez également ouvrir les propriétés de la couche, rubrique <span className="font-bold">Champs</span> :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_1_proprietes_champs.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Cette fenêtre vous permet de voir d'un seul coup d'œil la liste des champs, leur nom et leur type : <span className="font-bold">String</span> (texte), <span className="font-bold">Integer</span> (nombre entier) ou <span className="font-bold">Real</span> (nombre décimal)...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="creesuppri" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">
            Créer et supprimer un champ à partir de la table attributaire
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <h6 className="sous-titre-italic" id="createchamp">
              Créer un champ
            </h6>
            <p className="paragraphe">
              Nous allons ajouter un champs à la couche <span className="font-bold text-green-400">communes_Bretagne_calcul</span>, nommé <span className="font-bold">NOM_DEPT</span>, destiné à contenir le nom du département de la commune.
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Ouvrez la table attributaire de la couche <span className="font-bold text-green-400">communes_Bretagne_calcul</span>.
              </p>
              <p className="paragraphe">
                <img src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_1_edition_icone.jpg" alt="" /> Passez en mode édition pour cette couche.
              </p>
              <p className="paragraphe">
                Cliquez sur l'icône <span className="font-bold">Ajouter un champ</span> en haut de la table attributaire :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_1_BO_table_ajout.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                La fenêtre suivante s'ouvre :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_1_ajout_fenetre.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> <span className="font-bold">Nom</span> : Tapez <span className="font-bold">NOM_DEPT</span>
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> <span className="font-bold">Commentaire</span> : ce champ peut contenir un commentaire, laissez-le vide
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> <span className="font-bold">Type :</span> ce champ peut contenir les valeurs suivantes : texte, nombre entier, nombre décimal et date. Choisissez texte puisque nous voulons y mettre les noms des départements
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} /> <span className="font-bold">Longueur</span> : Dans le cas d'un champ type texte, cette valeur représente le nombre maximum de caractères que pourra contenir le champ. Tapez 50, ce qui devrait suffire.
                  </li>
                </ul>
              </p>
              <p className="paragraphe">
                Cliquez sur OK ; le champ est ajouté à la table, rempli pour l'instant de valeurs nulles.
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_1_table_nouveau_champ.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Quittez le mode édition en enregistrant les modifications.
              </p>
            </div>
            <h6 className="sous-titre-italic mt-4" id="modifmanu">
              Modifier les valeurs d'un champ manuellement
            </h6>
            <p className="paragraphe">
              Il est maintenant possible de taper du texte pour remplir le champ NOM_DEPT que nous venons de créer.
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                <img src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_1_edition_icone.jpg" alt="" />  Passez à nouveau en mode édition pour la couche communes_Bretagne_calcul.
              </p>
              <p className="paragraphe">
                Ouvrez sa table attributaire si ce n'est pas déjà fait.
              </p>
              <p className="paragraphe">
                Double-cliquez dans une case du champ <span className="font-bold">NOM_DEPT</span> :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_1_table_modifier.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Et tapez-y la valeur correspondante (en vous aidant du champ INSEE_DEP qui contient <a href="https://fr.wikipedia.org/wiki/Liste_des_d%C3%A9partements_fran%C3%A7ais#Liste_des_d%C3%A9partements" className="lien">le code du département</a> ), terminez en appuyant sur la touche entrée :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_1_table_modifier_ok.jpg"
                  alt="pôle-ard"
                  width={200}
                />
              </div>
              <p className="paragraphe">
                Vous pouvez tapez ainsi quelques valeurs.
              </p>
            </div>
            <p className="paragraphe">
              Vous remarquerez qu'il serait très long de remplir ainsi toutes les lignes de la table. Nous verrons dans le <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/07_02_calculer.html#VII23c" className="lien">chapitre suivant</a> comment remplir automatiquement un champ en fonction des valeurs d'un autre (ici, remplir le nom du département en fonction du code du département).
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Quittez le mode édition en enregistrant les modifications.
              </p>
            </div>
            <h6 className="sous-titre-italic mt-4" id="suppri">
              Supprimer un champ existant
            </h6>
            <p className="paragraphe">
              Nous allons <span className="font-bold">supprimer le champ NOM_DEPT</span> que vous venez de créer (nous créerons un autre champ NOM_DEPT dans le <a href="#" className="lien">chapitre suivant</a> que nous remplirons automatiquement).
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Passez à nouveau en mode édition pour la couche <span className="font-bold text-green-400">communes_Bretagne_calcul</span>.
              </p>
              <p className="paragraphe">
                Cliquez sur l'icône <span className="font-bold">Supprimer la colonne</span> en haut de la table attributaire :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_1_BO_table_suppression.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                La fenêtre suivante apparaît :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_1_suppression_fenetre.jpg"
                  alt="pôle-ard"
                  width={300}
                />
              </div>
              <p className="paragraphe">
                Sélectionnez le champ NOM_DEPT puis cliquez sur <span className="font-bold">OK</span>.
              </p>
              <p className="paragraphe italic">
                Notez qu'il est possible de sélectionner plusieurs champs dans cette fenêtre.
              </p>
              <p className="paragraphe">
                Le champ est supprimé. Quittez le mode édition en enregistrant les modifications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="sofar" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">
            Pour aller plus loin : refactoriser les champs
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              Sous le nom un peu barbare de « refactoriser » se cache la possibilité de <span className="font-bold">renommer les champs</span>, ainsi que d'en <span className="font-bold">modifier l'ordre</span> et le type (texte, nombre...). Cet outil offre également la possibilité de créer ou supprimer des champs.
            </p>
            <p className="paragraphe">
              Notez que la couche en entrée ne sera pas directement modifiée, une nouvelle couche sera créée.
            </p>
            <p className="paragraphe">
              Nous n'utiliserons pas cet outil, mais vous trouverez ici une brève description de son fonctionnement.
            </p>
            <p className="paragraphe">
              Pour accéder à l'outil : <span className="font-bold">boîte à outils Traitement → Table vecteur → Refactoriser les champs.</span>
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_1_outil_refactoriser.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/7_1_refactoriser_fenetre.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
            <p className="paragraphe">
              Pour <span className="font-bold"> modifier l'ordre des champs</span>, sélectionnez un champ en cliquant sur le numéro de sa ligne, puis utilisez les boutons flèche haut et bas à droite de la fenêtre.
            </p>
            <p className="paragraphe">
              Pour <span className="font-bold">renommer un champ</span>, double-cliquez sur son nom (colonne Nom du champ) et tapez un nouveau nom. De même, vous pouvez changer son <span className="font-bold"> type, sa longueur et précision, et recalculer ses valeurs</span> au moyen d'une expression (comme avec la <a href="https://emit-ecole-de-mit.github.io/tutoqgis_mada/07_02_calculer.html" className="lien">calculatrice de champ</a> ).
            </p>
            <p className="paragraphe">
              Il est également possible <span className="font-bold">d'ajouter et supprimer un champ</span> , ainsi que <span className="font-bold">d'annuler toutes les modifications en cours</span> .
            </p>
            <p className="paragraphe">
              Dans le chapitre suivant, nous verrons comment calculer automatiquement les valeurs d'un champ au moyen d'une formule, à l'aide de la calculatrice de champ !
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default CreSupChamp;
