import { NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function PremiereLayout() {
  return (
    <div className="mx-2">
      {" "}
      <p className="paragraphe">
        Cette première partie constitue une introduction aux logiciels SIG de
        manière générale et à QGIS en particulier.
      </p>
      <p className="paragraphe">Notions abordées :</p>
      <ul className="paragraphe ml-10">
        <li className="my-2">
          <PushPinOutlinedIcon />
          Qu'est-ce qu'un SIG ?
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Ajout de données vecteur et raster
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Propriétés d'une couche
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Modifier la représentation d'une couche
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          La table attributaire
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Formats de données vecteur et raster
        </li>
        <li className="my-2">
          <PushPinOutlinedIcon />
          Espace de travail : le projet QGZ
        </li>
      </ul>
      <p className="paragraphe">
        Les données pour cette partie ainsi qu'une version PDF du tutoriel sont
        accessibles dans la rubrique :{" "}
        <NavLink to="/app/telechargement" className="lien">
          téléchargement.
        </NavLink>
      </p>
      <div className="flex justify-end items-center py-5">
        <NavLink
          className="btn-lien"
          to="/app/plan-detailler/prise-en-main/definition-sig"
        >
          Démarrer <ArrowRightOutlinedIcon sx={{ fontSize: 30 }} />
        </NavLink>
      </div>
    </div>
  );
}

export default PremiereLayout;
