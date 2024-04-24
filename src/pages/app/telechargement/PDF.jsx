import React from "react";
import { Link } from "react-router-dom";
import DownloadingIcon from "@mui/icons-material/Downloading";
import { ArrowRight } from "@mui/icons-material";

function PDF() {
  return (
    <div>
      {" "}
      <h4 className="tracking-[1.2px] text-2xl my-4 text-blue-500 font-normal">
        Téléchargement du tutoriel au format PDF 📑
      </h4>
      <p className="tracking-[1px] text-gray-700 my-4">
        Vous pouvez télécharger ici des PDF correspondant à la version en ligne
        du tutoriel QGIS. Ces PDF ont été générés grâce à l'outil:
        <Link
          to="#"
          className="text-blue-500 hover:text-blue-600 hover:underline flex items-center ml-4"
        >
          <ArrowRight /> wkhtmltopdf<span className="text-gray-700">.</span>
        </Link>
      </p>
      <p className="tracking-[1px] text-gray-700 my-4">
        ⚠️ Attention, ces PDF étant des exports de la version en ligne, les
        mises à jour sont moins régulières et toutes les fonctionnalités ne
        seront pas affichées.
      </p>
      <ul className="ml-4">
        <li className="my-4">
          <Link
            to="#"
            className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
          >
            <DownloadingIcon /> Tout le tutoriel au format PDF (40,1 Mo)
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="#"
            className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
          >
            <DownloadingIcon /> PDF de la partie I : prise en main (3 Mo)
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="#"
            className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
          >
            <DownloadingIcon /> PDF de la partie II : géodésie (2,3 Mo)
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="#"
            className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
          >
            <DownloadingIcon /> PDF de la partie III : recherche et ajout de
            données (5,3 Mo)
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="#"
            className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
          >
            <DownloadingIcon /> PDF de la partie IV : géoréférencement (5,1 Mo)
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="#"
            className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
          >
            <DownloadingIcon /> PDF de la partie V : numérisation (5,6 Mo)
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="#"
            className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
          >
            <DownloadingIcon /> PDF de la partie VI : requêtes (3,4 Mo)
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="#"
            className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
          >
            <DownloadingIcon /> PDF de la partie VII : calcul de champs (1,5 Mo)
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="#"
            className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
          >
            <DownloadingIcon /> PDF de la partie VIII : jointures (2,2 Mo)
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="#"
            className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
          >
            <DownloadingIcon /> PDF de la partie IX : analyse spatiale (6,9 Mo)
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="#"
            className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
          >
            <DownloadingIcon /> PDF de la partie X : représentation et mise en
            page (4,9 Mo)
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="#"
            className="text-blue-500 hover:text-blue-600 hover:underline flex items-center"
          >
            <DownloadingIcon /> PDF de la partie XI : automatisation de
            traitements (1,5 Mo)
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default PDF;
