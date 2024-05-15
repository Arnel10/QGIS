import React from "react";
import { NavLink } from "react-router-dom";

import GitHubIcon from "@mui/icons-material/GitHub";
import { Close, MenuOutlined } from "@mui/icons-material";

function Header({ isOpen, handleToggle }) {
    return (
        <header
            className="flex justify-between items-center
            px-5 py-2 sm:px-10 sm:py-3 text-slate-50"
        >
            <div>
                <ul className="flex items-center gap-5">
                    <li
                        className="flex items-center justify-center gap-2 
          uppercase font-nunito font-semibold text-ms md:text-xl lg:text-2xl"
                    >
                        <NavLink
                            to="/"
                            className="flex items-center justify-center gap-4"
                        >
                            <div className="bg-green-100 py-1 px-1 rounded-md cursor-pointer">
                                <img
                                    src="https://www.madatlas.mg/_next/static/media/logo-Madatlas.384d028f.png"
                                    alt="madatlas"
                                    className="w-[45px] h-[30px] lg:w-[75px] lg:h-[50px]"
                                />
                            </div>
                            <div className="flex items-center gap-4 uppercase text-sm sm:text-xl">
                                Tutoriel-QGIS-madagascar
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div>
                <ul className="flex gap-5 items-center">
                    <li
                        onClick={handleToggle}
                        className="cursor-pointer lg:hidden hover:bg-white hover:text-green-500 
                                   flex items-center justify-center rounded-sm px-1 py-1"
                    >
                        {isOpen ? <Close /> : <MenuOutlined />}
                    </li>
                    <li
                        className="cursor-pointer hover:bg-white hover:text-green-500 
                                  flex items-center justify-center rounded-sm px-1 py-1"
                    >
                        <a
                            href="https://emit-ecole-de-mit.github.io/tutoqgis_mada"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
