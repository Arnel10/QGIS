import { NavLink } from "react-router-dom";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function PremiereLayout() {
  return (
    <div>
      {" "}
      <p className="tracking-[1px] text-gray-700 my-4">
        Cette première partie constitue une introduction aux logiciels SIG de
        manière générale et à QGIS en particulier.
      </p>
      <p className="tracking-[1px] text-gray-700 my-4">Notions abordées :</p>
      <ul className="tracking-[1px] text-gray-700 my-4 ml-10">
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
      <p className="tracking-[1px] text-gray-700 my-4">
        Les données pour cette partie ainsi qu'une version PDF du tutoriel sont
        accessibles dans la rubrique :{" "}
        <NavLink
          to="/app/telechargement"
          className="text-blue-500 hover:text-blue-600 hover:underline"
        >
          téléchargement.
        </NavLink>
      </p>
      <div className="flex justify-end items-center py-5">
        <NavLink
          className="text-white text-xl flex items-center
     transition-all duration-200 font-semibold font-nunito 
     tracking-[1px] border border-green-500 px-2 py-1 
     rounded-md bg-green-500 hover:bg-slate-50 hover:text-green-500
     "
          to="/app/plan-detailler/prise-en-main/definition-sig"
        >
          Démarrer <ArrowRightOutlinedIcon sx={{ fontSize: 30 }} />
        </NavLink>
      </div>
    </div>
  );
}

export default PremiereLayout;
