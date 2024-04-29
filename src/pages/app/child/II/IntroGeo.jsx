import { ArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function IntroGeo() {
  return (
    <div>
      <h4 className="titre-primary">II.1 Introduction à la géodésie</h4>

      <div>
        <ul className="text-blue-500">
          <li className="my-2">
            <a href="#histoire" className="lien">
              Bref historique
            </a>
          </li>
          <li className="my-2">
            <a href="#notion" className="lien">
              Deux notions préliminaires : géoïde et ellipsoïde
            </a>
          </li>
        </ul>
      </div>

      <div id="histoire" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">Bref historique</h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              La géodésie est la science qui étudie la forme et les dimensions
              de la Terre, en tenant compte de son champ de pesanteur.
            </p>
          </div>

          <div className="my-4">
            <p className="paragraphe">
              La géodésie est une science ancienne ; on attribue au grec{" "}
              <a
                rel="noopener noreferrer"
                class="text-blue-500 lien"
                href="https://fr.wikipedia.org/wiki/%C3%89ratosth%C3%A8ne"
                target="_blank"
              >
                Eratosthène
              </a>{" "}
              (276 à 194 av. JC) la première mesure de la circonférence de la
              Terre, qu'il évalua à environ 39 375 km. Cette mesure s'est
              révélée proche de la réalité puisque les estimations actuelles
              sont d'environ 40 075 km.
            </p>
          </div>
        </div>
      </div>

      <div id="notion" className="mt-8 mb-4">
        <div className="bg-style-b">
          <h5 className="sous-titre">
            Deux notions préliminaires : géoïde et ellipsoïde
          </h5>
        </div>

        <div className="mt-4">
          <div className="my-4">
            <p className="paragraphe">
              La surface de la Terre est très irrégulière et complexe, on peut
              la modéliser de différentes manières.
            </p>
          </div>

          <div className="my-4">
            <p className="paragraphe">
              <span className="font-bold"> La sphère </span> est le modèle le
              plus simple.
            </p>
          </div>

          <div className="my-4">
            <p className="paragraphe">
              <span className="font-bold"> L'ellipsoïde </span> est une sphère
              aplatie, plus simple à modéliser. On le définit généralement par
              ses demis-axes (<span className="font-bold"> a , b </span> et{" "}
              <span className="font-bold"> c </span> ) et son centre ({" "}
              <span className="font-bold"> 0 </span> ).
            </p>
          </div>

          <div className="bg-img">
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_1_ellipsoide.jpg"
              alt="pôle-ard"
              width={500}
            />
            <p className="img-titre">
              Ellipsoïde (Source : Peter Mercator, Wikimedia Commons, licence
              Creative Commons Attribution-Share Alike 3.0 Unported).
            </p>
          </div>

          <div className="my-4">
            <p className="paragraphe">
              <span className="font-bold">Le géoïde</span> est une surface
              perpendiculaire en tout point à la direction de la gravité (fil à
              plomb). Cette surface passe par le niveau moyen des mers. Les
              altitudes sont mesurées par rapport au géoïde depuis les années
              1960 (altitude normale). On peut considérer le géoïde comme une
              sphère cabossée. C'est une représentation exacte mais compliquée à
              utiliser.
            </p>
          </div>

          <div className="bg-img">
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_1_geoide.jpg"
              alt="pôle-ard"
              width={500}
            />
            <p className="img-titre">
              Géoïde (Source : NASA, Wikimedia Commons, domaine public)
            </p>
          </div>

          <div className="my-4">
            <p className="paragraphe">
              Il existe une infinité d'ellipsoïdes, qui peuvent coïncider avec
              la surface de la Terre sur toute leur surface (ellipsoïde global)
              ou seulement sur une partie de leur surface (ellipsoïde local). A
              l'inverse, il n'existe qu'un seul géoïde.
            </p>
          </div>

          <div className="bg-img">
            <img
              src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/2_1_geoide_ellipsoide.svg"
              alt="pôle-ard"
              width={500}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center relative">
        <div className="py-5 fixed bottom-0 z-20 right-48">
          <NavLink
            className="btn-lien"
            to="/app/plan-detailler/geodesie/coordonnes-systeme"
          >
            Suivant <ArrowRightOutlined sx={{ fontSize: 30 }} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default IntroGeo;
