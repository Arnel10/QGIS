import React from "react";

function Sponsors() {
  return (
    <div className="w-[150px] mx-2 hidden md:block">
      <ul
        className="flex flex-col items-center 
      justify-center gap-32 py-8 rounded-md"
      >
        <li>
          <img
            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/logo_UF.png"
            alt="letg"
            width={75}
          />
        </li>
        <li>
          <img
            src="https://emit-ecole-de-mit.github.io/tutoqgis_mada/illustrations/logo_Madatlas.png"
            alt="madatlas"
            width={100}
          />
        </li>
        <li>
          <img
            src="https://www.qgis.org/fr/_static/images/trademark.png?t=23feb2018"
            alt="qgis"
            width={125}
          />
        </li>
      </ul>
    </div>
  );
}

export default Sponsors;
