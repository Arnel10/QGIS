import {
    ArrowDropUp,
    ArrowLeftOutlined,
    ArrowRightOutlined,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

function Execlot() {
    return (
        <div className="relative paragraphe">
            <div className="my-4">
                <h1 className="titre-primary" id="top">
                    11-2
                </h1>
            </div>

            <div className="flex justify-between items-center relative">
                <div className="py-5 fixed bottom-0 z-20">
                    <NavLink
                        className="btn-lien"
                        to="/app/plan-detailler/automatisation-des-traitements/traitement-de-base"
                    >
                        <ArrowLeftOutlined sx={{ fontSize: 30 }} />{" "}
                        <span className="hidden lg:block">Précédent</span>
                    </NavLink>
                </div>

                <div className="fixed bottom-20 z-20 md:right-52 sm:right-12 right-5">
                    <a href="#top" className="btn-lien rounded-full py-4 px-4">
                        <ArrowDropUp />
                    </a>
                </div>

                <div>
                    <NavLink
                        to="/app/plan-detailler/automatisation-des-traitements/construire-utilise-modele"
                        className="btn-lien fixed bottom-5 z-20 md:right-52 sm:right-12 right-5"
                    >
                        <span className="hidden lg:block">Suivant</span>{" "}
                        <ArrowRightOutlined sx={{ fontSize: 30 }} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Execlot;
