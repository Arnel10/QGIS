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
        <h1
          className="text-[30px] font-bold font-nunito 
          uppercase tracking-[1.5px] text-green-500"
        >
          Présentation
        </h1>
      </div>

      <div className="mt-4">
        <h4 className="tracking-[1.2px] text-2xl mb-4 text-blue-500 font-normal">
          En quelque mots
        </h4>
        <p className="tracking-[1px] text-gray-700 my-4">
          Ce tutoriel QGIS a été créé par le pôle Analyse et Représentation des
          données de l'UMR PASSAGES et est aujourd'hui maintenu par le RASTeR de
          l'UMR LETG. Son but est de permettre aux débutants en SIG de s'initier
          à ceux-ci via le logiciel libre QGIS. Pour installer QGIS, rendez-vous
          sur{" "}
          <Link
            href="http://www.qgis.org/."
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 hover:underline"
          >
            http://www.qgis.org/.
          </Link>
        </p>
        <p className="tracking-[1px] text-gray-700 my-4">
          Le tutoriel est mis à jour pour chaque version maintenue « à long
          terme » de QGIS : actuellement il s'agit de la version{" "}
          <Link
            className="text-blue-500 hover:text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            to="https://www.qgis.org/fr/site/forusers/visualchangelog322/index.html"
          >
            3.22 'Białowieża'
          </Link>
          .
        </p>
      </div>

      <div className="mt-4">
        <h4 className="tracking-[1.2px] text-2xl mb-4 text-blue-500 font-normal">
          Accès au tutoriel
        </h4>

        <p className="tracking-[1px] text-gray-700 my-4">
          Le tutoriel comporte 11 parties auxquelles vous pouvez accéder par le
          plan dans la partie droite de la page, ou bien via
          <Link
            to="/app/plan-detailler"
            className="text-blue-500 hover:text-blue-600 hover:underline"
          >
            {" "}
            le plan détaillé
          </Link>{" "}
          .
        </p>
        <p className="tracking-[1px] text-gray-700 my-4">
          Chaque partie peut être réalisée indépendamment des autres ;
          cependant, la progression présentée suit un ordre logique.
        </p>
        <p className="tracking-[1px] text-gray-700 my-4">
          Si vous recherchez une notion précise, utilisez{" "}
          <Link
            to="/app/plan-detailler"
            className="text-blue-500 hover:text-blue-600 hover:underline"
          >
            l'index
          </Link>{" "}
          .
        </p>

        <div className="mt-4">
          <h4
            className="tracking-[1.2px] text-2xl 
            mb-4 text-blue-500 font-normal"
          >
            Mode d'emploi
          </h4>

          <div>
            <h5
              className="tracking-[1.2px] text-xl 
            mb-4 text-blue-500 font-light italic"
            >
              Manipulation
            </h5>

            <p className="tracking-[1px] text-gray-700 my-4">
              Tout au long du tutoriel, les parties décrivant des manipulations
              à effectuer dans QGIS sont différenciées par une bordure bleue et
              un fond bleu-gris :
            </p>

            <div className="bg-gray-200">
              <p className="tracking-[1px] text-gray-700 my-4 flex items-center gap-3">
                <ArrowRightIcon />
                Ceci décrit une manipulation à effectuer dans QGIS.
              </p>
            </div>

            <p className="tracking-[1px] text-gray-700 my-4">
              Les données nécessaires pour effectuer ces manipulations sont
              accessibles dans la rubrique{" "}
              <Link
                className="text-blue-500 hover:text-blue-600 hover:underline"
                to="/app/telechargement"
              >
                téléchargement
              </Link>
              .
            </p>
          </div>

          <div>
            <h5
              className="tracking-[1.2px] text-xl 
            mb-4 text-blue-500 font-light italic"
            >
              Aide
            </h5>

            <p className="tracking-[1px] text-gray-700 my-4">
              Quand une partie du texte apparaît soulignée en pointillés en bleu
              foncé, si vous passez la souris dessus, une image apparaît pour
              vous aider par exemple à trouver l'emplacement d'un menu ou d'un
              bouton dans QGIS.
            </p>

            <div className="relative">
              <div className="bg-gray-200">
                <p className="tracking-[1px] text-gray-700 my-4 flex items-center gap-3">
                  <ArrowRightIcon />
                  Sauvegardez votre projet sous un nouveau nom :{" "}
                  <Link
                    to="#"
                    onClick={() => setToggleImg((prev) => !prev)}
                    className="text-blue-500 hover:text-blue-600 hover:underline"
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

          <div>
            <h5
              className="tracking-[1.2px] text-xl 
            mb-4 text-blue-500 font-light italic"
            >
              Question/réponse
            </h5>

            <p className="tracking-[1px] text-gray-700 my-4">
              Des questions vous seront posées tout au long du tutoriel ; les
              réponses sont visibles en cliquant sur le petit triangle devant la
              question.
            </p>

            <p
              className="tracking-[1px] text-gray-700 my-4 cursor-pointer"
              onClick={() => setToggleQst((prev) => !prev)}
            >
              {toggleQst ? <ArrowDropDownIcon /> : <ArrowRightIcon />} Pourquoi
              Jimi Hendrix connaît-il tous les symboles des cartes ?
            </p>

            {toggleQst && (
              <p className="ml-20 tracking-[1px] text-gray-700 my-4 italic">
                Parce-que c'est une légende !
              </p>
            )}
          </div>

          <div>
            <h5
              className="tracking-[1.2px] text-xl 
            mb-4 text-blue-500 font-light italic"
            >
              Liens
            </h5>
            <p className="tracking-[1px] text-gray-700 my-4">
              Les liens internes au{" "}
              <Link
                to="#"
                className="text-blue-500 hover:text-blue-600 hover:underline"
              >
                tutoriel
              </Link>{" "}
              sont affichés en bleu, les{" "}
              <Link
                to="https://fr.wikipedia.org/wiki/Lien"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 hover:underline"
              >
                liens
              </Link>{" "}
              externes sont en gris et s'ouvriront dans une nouvelle fenêtre ou
              onglet.
            </p>
          </div>

          <div className="flex items-center justify-center my-12">
            <Link
              to="/app/plan-detailler"
              className="bg-green-500 px-4 py-2 font-nunito text-xl
              text-white rounded-lg text-semibold border border-green-500
              hover:bg-white hover:text-green-500 transition-all duration-200"
            >
              👉 C'est parti 👉
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
