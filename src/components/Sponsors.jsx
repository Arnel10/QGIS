import React from "react";
import letg from "../assets/images/logo_letg.png";
import qgis from "../assets/images/logo_qgis_3_22.png";
import ouvrir from "../assets/images/logo_ouvrir.png";
import passages from "../assets/images/logo_passages.png";

function Sponsors() {
  return (
    <div className="w-[150px] mx-2 hidden md:block">
      <ul
        className="flex flex-col items-center 
      justify-center gap-14 py-8 rounded-md"
      >
        <li>
          <img src={letg} alt="letg" width={100} />
        </li>
        <li>
          <img src={ouvrir} alt="letg" width={150} />
        </li>
        <li>
          <img src={passages} alt="letg" width={150} />
        </li>
        <li>
          <img src={qgis} alt="letg" width={100} />
        </li>
      </ul>
    </div>
  );
}

export default Sponsors;
