import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import aide from "../../assets/images/aide.jpg";
import Footer from "../../components/Footer";

function Presentation() {
  const [toggleImg, setToggleImg] = useState(false);
  const [toggleQst, setToggleQst] = useState(false);

  return (
    <section className="flex flex-col pb-32 pt-8 relative px-10">
      <div>
        <h1 className="titre">Présentation</h1>
      </div>
      <div>
        <h4 className="titre-primary">En quelque mots</h4>
        <p className="paragraphe">
          Ce tutoriel QGIS a été créé par le pôle Analyse et Représentation des
          données de l'UMR PASSAGES et est aujourd'hui maintenu par le RASTeR de
          l'UMR LETG. Son but est de permettre aux débutants en SIG de s'initier
          à ceux-ci via le logiciel libre QGIS. Pour installer QGIS, rendez-vous
          sur{" "}
          <Link
            href="http://www.qgis.org/."
            target="_blank"
            rel="noopener noreferrer"
            className="lien"
          >
            http://www.qgis.org/.
          </Link>
        </p>
        <p className="paragraphe">
          Le tutoriel est mis à jour pour chaque version maintenue « à long
          terme » de QGIS : actuellement il s'agit de la version{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://www.qgis.org/fr/site/forusers/visualchangelog322/index.html"
            className="lien"
          >
            3.22 'Białowieża'
          </Link>
          .
        </p>
      </div>

      <div>
        <h4 className="titre-primary">Accès au tutoriel</h4>

        <p className="paragraphe">
          Le tutoriel comporte 11 parties auxquelles vous pouvez accéder par le
          plan dans la partie droite de la page, ou bien via
          <Link to="/app/plan-detailler" className="lien">
            {" "}
            le plan détaillé
          </Link>{" "}
          .
        </p>
        <p className="paragraphe">
          Chaque partie peut être réalisée indépendamment des autres ;
          cependant, la progression présentée suit un ordre logique.
        </p>
        <p className="paragraphe">
          Si vous recherchez une notion précise, utilisez{" "}
          <Link to="/app/plan-detailler" className="lien">
            l'index
          </Link>{" "}
          .
        </p>

        <div className="mt-8">
          <h4 className="titre-secondary-italic">Mode d'emploi</h4>

          <div>
            <h5 className="sous-titre">Manipulation</h5>

            <p className="paragraphe">
              Tout au long du tutoriel, les parties décrivant des manipulations
              à effectuer dans QGIS sont différenciées par une bordure bleue et
              un fond bleu-gris :
            </p>

            <div className="bg-style-g">
              <p className="paragraphe flex items-center gap-3">
                <ArrowRightIcon />
                Ceci décrit une manipulation à effectuer dans QGIS.
              </p>
            </div>

            <p className="paragraphe">
              Les données nécessaires pour effectuer ces manipulations sont
              accessibles dans la rubrique{" "}
              <Link className="lien" to="/app/telechargement">
                téléchargement
              </Link>
              .
            </p>
          </div>

          <div>
            <h5 className="sous-titre">Aide</h5>

            <p className="paragraphe">
              Quand une partie du texte apparaît soulignée en pointillés en bleu
              foncé, si vous passez la souris dessus, une image apparaît pour
              vous aider par exemple à trouver l'emplacement d'un menu ou d'un
              bouton dans QGIS.
            </p>

            <div className="relative">
              <div className="bg-style-g">
                <p className="paragraphe flex items-center gap-3">
                  <ArrowRightIcon />
                  Sauvegardez votre projet sous un nouveau nom :{" "}
                  <Link
                    to="#"
                    onClick={() => setToggleImg((prev) => !prev)}
                    className="lien"
                  >
                    Menu Projet → Enregistrer sous...
                  </Link>
                </p>
              </div>

              <div
                className={`${
                  toggleImg ? "block" : "hidden"
                } absolute top-2 right-0 mr-4 mt-4 z-10`}
              >
                <img src={aide} alt="aide" />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h5 className="sous-titre">Question/réponse</h5>

            <p className="paragraphe">
              Des questions vous seront posées tout au long du tutoriel ; les
              réponses sont visibles en cliquant sur le petit triangle devant la
              question.
            </p>

            <p
              className="paragraphe cursor-pointer"
              onClick={() => setToggleQst((prev) => !prev)}
            >
              {toggleQst ? <ArrowDropDownIcon /> : <ArrowRightIcon />} Pourquoi
              Jimi Hendrix connaît-il tous les symboles des cartes ?
            </p>

            {toggleQst && (
              <p className="ml-20 paragraphe italic">
                Parce-que c'est une légende !
              </p>
            )}
          </div>

          <div className="mt-8">
            <h5 className="sous-titre">Liens</h5>
            <p className="paragraphe">
              Les liens internes au{" "}
              <Link to="#" className="lien">
                tutoriel
              </Link>{" "}
              sont affichés en bleu, les{" "}
              <Link
                to="https://fr.wikipedia.org/wiki/Lien"
                target="_blank"
                rel="noopener noreferrer"
                className="lien"
              >
                liens
              </Link>{" "}
              externes sont en gris et s'ouvriront dans une nouvelle fenêtre ou
              onglet.
            </p>
          </div>

          <div className="flex items-center justify-center my-12">
            <Link to="/app/plan-detailler/prise-en-main" className="btn-lien">
              C'est parti 👉
            </Link>
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
