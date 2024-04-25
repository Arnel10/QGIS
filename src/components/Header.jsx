import React from "react";
import { NavLink } from "react-router-dom";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

import logoMadatlas from "../assets/images/logo-Madatlas.png";

function Header() {
  return (
    <header
      className="flex justify-between items-center
     px-5 py-2 sm:px-10 sm:py-3 text-slate-50"
    >
      <div>
        <ul className="flex items-center gap-5">
          <li
            className="flex items-center justify-center gap-2 
          uppercase font-nunito font-semibold text-ms sm:text-xl lg:text-2xl"
          >
            <NavLink to="/" className="flex items-center justify-center gap-4">
              <div className="bg-green-100 py-1 px-1 rounded-md cursor-pointer">
                <img src={logoMadatlas} alt="madatlas" width={75} height={75} />
              </div>
              <div className="flex items-center gap-4">
                Tuto-QGIS-madagascar
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-5 items-center">
          <li className="cursor-pointer">
            <DescriptionOutlinedIcon />
          </li>
          <li className="cursor-pointer">
            <GitHubIcon />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
