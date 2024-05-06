import { FiberManualRecord } from "@mui/icons-material";
import React from "react";

function NotTop() {
  return (
    <div>
      <h4 className="titre-primary">
        V.6 Quelques notions de topologie
      </h4>

      <div>
        <ul className="text-blue-500">
          <li className="my-2">
            <a href="#whattopo" className="lien">
              Qu'est-ce que la topologie ?
            </a>
            <ul className="ml-8">
              <li>
                <a href="#defex" className="lien">
                  Définition et exemples
                </a>
              </li>
              <li>
                <a href="#attentiontopo" className="lien">
                  Pourquoi faire attention à la topologie ?
                </a>
              </li>
            </ul>
          </li>
          <li className="my-2">
            <a href="#far" className="lien">
              Pour aller plus loin : comment vérifier la topologie d'une couche ?
            </a>
            <ul className="ml-8">
              <li>
                <a href="#checksimple" className="lien">
                  Vérification simple
                </a>
              </li>
              <li>
                <a href="#checkingtopo" className="lien">
                  Utilisation du vérificateur de topologie
                </a>
              </li>
            </ul>
          </li>
          <li className="my-2">
            <a href="#pistes" className="lien">
              Corriger les erreurs de topologie : quelques pistes
            </a>
            <ul className="ml-8">
              <li>
                <a href="#errmanu" className="lien">
                  Corriger les erreurs de topologie manuellement
                </a>
              </li>
              <li>
                <a href="#georepair" className="lien">
                  Corriger les erreurs de topologie avec l'outil «  réparer les géométries »
                </a>
              </li>
              <li>
                <a href="#grass" className="lien">
                  Corriger les erreurs de topologie avec l'outil v.clean de Grass
                </a>
              </li>
              <li>
                <a href="#auto" className="lien">
                  Cas particulier des erreurs de type « auto-intersection »
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <p className="paragraphe">
        Au cours de la dernière partie notamment, nous avons vu comment éviter que deux polygones soient « presque » jointifs, au moyen de propriétés telles que l'accrochage, ou par l'utilisation d'outils de découpage par exemple. Nous avons également vu comment utiliser le mode d'édition topologique de QGIS.
      </p>
      <p className="paragraphe">
        Nous allons ici en apprendre un peu plus sur ce qu'est la topologie, et comment vérifier la topologie d'une couche.
      </p>

      <div id="whattopo" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">
            Qu'est-ce que la topologie ?
          </h5>
        </div>
        <div className="mt-4">
          <div className="my-4">
            <h6 className="sous-titre-italic" id="defex">
              Définition et exemples
            </h6>
            <p className="paragraphe">
              La <a href="http://www.cnrtl.fr/definition/topologie" className="lien">topologie</a> est la « partie de la géométrie qui considère uniquement les relations de position » (Aur.-Weil 1981).
            </p>
            <p className="paragraphe">
              En géomatique, la topologie est utilisée pour décrire les relations entre les géométries des entités. Des règles de topologie peuvent être définies, et les erreurs de topologie détectées.
            </p>
            <p className="paragraphe">
              Par exemple, on peut décider qu'il ne doit y avoir aucune superposition de polygones dans une couche (les erreurs sont en rouge) :
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_6_overlap.jpg"
                alt="pôle-ard"
                width={400}
              />
            </div>
            <p className="paragraphe">
              Ou bien qu'il ne doit pas y avoir de trous entre les polygones :
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_6_gap.jpg"
                alt="pôle-ard"
                width={400}
              />
            </div>
            <p className="paragraphe">
              Les règles de topologie peuvent aussi mettre en jeu plusieurs couches. Par exemple, tous les points d'une couche doivent être dans un polygone d'une autre couche :
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_6_pts_dans_polygones.jpg"
                alt="pôle-ard"
                width={400}
              />
            </div>
            <p className="paragraphe">
              Il est bien sûr possible de combiner plusieurs règles. Vous trouverez dans <a href="https://docs.qgis.org/testing/en/docs/gentle_gis_introduction/topology.html" className="lien">le manuel de QGIS</a> la description d'un certain nombre de règles de topologie.
            </p>
            <h6 className="sous-titre-italic" id="attentiontopo">
              Pourquoi faire attention à la topologie ?
            </h6>
            <p className="paragraphe">
              Ne pas respecter les règles de topologie peut poser des problèmes lors de l'utilisation d'outils d'analyse spatiale, qui donneront alors des résultats inattendus.
            </p>
          </div>
        </div>
      </div>

      <div id="far" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">
            Pour aller plus loin : comment vérifier la topologie d'une couche ?
          </h5>
        </div>
        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              Cette partie est pour « aller un peu plus loin » : vous pouvez donc passer directement à la partie suivante si vous le désirez !
            </p>
            <p className="paragraphe">
              Sinon, vous aurez besoin d'un projet QGIS avec une couche de polygones, par exemple <span className="font-bold text-green-400">zones_oahu</span>.
            </p>
            <h6 className="sous-titre-italic" id="checksimple">
              Vérification simple
            </h6>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Vérifiez d'abord que votre couche de polygones <span className="font-bold text-green-400">zones_oahu</span> n'est pas en mode édition.
              </p>
              <p className="paragraphe">
                Pour vérifier rapidement la topologie d'une couche, utilisez l'outil <span className="font-bold">Vérifier la validité</span>, accessible dans la boîte à outils (en tapant valid dans la barre de recherche par exemple) :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_6_verif_toolbox.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe italic">
                Si la boîte à outils n'est pas visible, allez dans le menu Traitement → Boîte à outils.
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_6_verif_fenetre.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Sélectionnez la couche <span className="font-bold text-green-400">zones_oahu</span> et cliquez sur <span className="font-bold">Exécuter</span>.
              </p>
              <p className="paragraphe">
                3 couches temporaires sont ajoutées au projet :
              </p>
              <p className="paragraphe">
                <ul className="ml-8 tracking-[1px] text-gray-700 my-2 mt-2">
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />  <span className="font-bold">sortie valide</span> liste les entités valide
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />  <span className="font-bold">sortie invalide</span> liste les entités invalides (avec une ou plusieurs erreurs de topologie )
                  </li>
                  <li className="my-1">
                    <FiberManualRecord sx={{ fontSize: 10 }} />  <span className="font-bold"> erreur de sortie </span> liste les erreurs de topologie rencontrées, un point par erreur.
                  </li>
                </ul>
              </p>
              <p className="paragraphe">
                Si vous n'avez pas d'erreur de topologie dans votre couche, la couche sortie valide contiendra autant d'entités que la couche d'origine, et les couches sortie invalide et erreur de sortie n'en contiendront aucune.
              </p>
            </div>
            <h6 className="sous-titre-italic mt-4" id="checkingtopo">
              Utilisation du vérificateur de topologie
            </h6>
            <p className="paragraphe">
              <span className="font-bold">Le vérificateur de topologie</span> est un outil plus perfectionné qui permet de spécifier un certain nombre de règles, et de voir les erreurs relatives à ces règles. Il s'agit d'une extension principale, qui ne peut pas être désinstallée.
            </p>
            <div className="bg-style-g p-2">
              <p className="paragraphe">
                Il faut tout d'abord vérifier que cette extension soit activée.
              </p>
              <p className="paragraphe">
                Pour cela, rendez-vous dans le <span className="font-bold">menu Extensions → Installer/Gérer les extensions</span>. Dans la rubrique <span className="font-bold">Installées</span>, vérifiez que la case du <span className="font-bold">Vérificateur de topologie</span> soit bien cochée, et cochez-la si ça n'est pas le cas :
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_6_veriftopo_activation.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Vous pouvez maintenant accéder au vérificateur de topologie : <span className="italic text-green-400">menu Vecteur → Vérificateur de topologie :</span>
                <div className="bg-img">
                  <img
                    src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_6_veriftopo_menu.jpg"
                    alt="pôle-ard"
                    width={400}
                  />
                </div>
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_6_regle_fenetre.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                Sélectionnez la couche <span className="font-bold">zones_oahu</span> dans la liste déroulante, puis la propriété <span className="font-bold">ne doit pas se superposer</span> et cliquez enfin sur le bouton <span className="font-bold">Ajouter une règle</span>. Cliquez sur <span className="font-bold">OK</span>.
              </p>
              <p className="paragraphe">
                Pour visualiser les erreurs à cette règle, cliquez sur le bouton <span className="font-bold">Valider tout</span> du vérificateur de topologie.
              </p>
              <div className="bg-img">
                <img
                  src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_6_veriftopo_erreurs.jpg"
                  alt="pôle-ard"
                  width={500}
                />
              </div>
              <p className="paragraphe">
                La liste des éventuelles erreurs apparaît ; il est possible de zoomer sur une erreur en double-cliquant sur la ligne correspondante.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="pistes" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">
            Corriger les erreurs de topologie : quelques pistes
          </h5>
        </div>
        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              Cette partie n'est pas très étoffée et mériterait un chapitre à part entière ! A venir ?
            </p>
            <h6 className="sous-titre-italic" id="errmanu">
              Corriger les erreurs de topologie manuellement
            </h6>
            <p className="paragraphe">
              Pour corriger les erreurs de topologie d'une couche, vous pouvez procéder « à la main », en corrigeant les erreurs une à une avec les outils d'édition de QGIS, en utilisant <span className="font-bold">les propriétés d'accrochage et l'outil de noeud</span>. Cliquer sur la ligne correspondant à une erreur dans le vérificateur de topologie zoome sur cette erreur.
            </p>
            <h6 className="sous-titre-italic" id="georepair">
              Corriger les erreurs de topologie avec l'outil «  réparer les géométries »
            </h6>
            <p className="paragraphe">
              Il existe un outil Réparer les géométries accessible dans la boîte à outils de traitement. Pour afficher (ou masquer si elle est déjà affichée) cette boîte, menu Traitement → Boîte à outils. Tapez ensuite réparer dans la partie filtre pour trouver facilement cet outil :
            </p>
            <div className="bg-img">
              <img
                src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/5_6_vclean.jpg"
                alt="pôle-ard"
                width={500}
              />
            </div>
            <p className="paragraphe">
              En double-cliquant sur cet outil, une aide est accessible dans l'onglet Help, ou bien ici : <a href="https://grass.osgeo.org/grass70/manuals/v.clean.html" className="lien">https://grass.osgeo.org/grass70/manuals/v.clean.html</a>. Regardez également <a href="http://grasswiki.osgeo.org/wiki/Vector_topology_cleaning" className="lien">ici</a> pour plus de documentation.
            </p>
            <h6 className="sous-titre-italic" id="cylindre">
              Cas particulier des erreurs de type « auto-intersection »
            </h6>
            <p className="paragraphe">
              Vous rencontrerez peut-être des erreurs de topologie de type « self-intersection » dans une couche de polygones : ces erreurs peuvent généralement être réparées en créant une zone tampon de 0 autour de la couche originale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotTop;
