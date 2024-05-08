import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import Presentation from "./pages/app/Presentation";

import PlanDetailler from "./pages/app/PlanDetailler";
import PriseEnMain from "./pages/app/plan/PriseEnMain";
import Geodesie from "./pages/app/plan/Geodesie";
import Recherche from "./pages/app/plan/Recherche";
import Georeferencement from "./pages/app/plan/Georeferencement";
import Numerisation from "./pages/app/plan/Numerisation";
import Requetes from "./pages/app/plan/Requetes";
import Calcul from "./pages/app/plan/Calcul";
import Jointure from "./pages/app/plan/Jointure";
import Analyse from "./pages/app/plan/Analyse";
import Representation from "./pages/app/plan/Representation";
import Automatisation from "./pages/app/plan/Automatisation";

import Telechargement from "./pages/app/Telechargement";
import NotFound from "./pages/NotFound";
import Donnees from "./pages/app/telechargement/Donnees";
import PDF from "./pages/app/telechargement/PDF";

import PremiereLayout from "./pages/app/child/I/PremiereLayout";
import DefSig from "./pages/app/child/I/DefSig";
import ManipInfoGeo from "./pages/app/child/I/ManipInfoGeo";
import FormatDoSig from "./pages/app/child/I/FormatDoSig";
import EspTrav from "./pages/app/child/I/EspTrav";

import DeuxiemeLayout from "./pages/app/child/II/DeuxiemeLayout";
import IntroGeo from "./pages/app/child/II/IntroGeo";
import Coordonne from "./pages/app/child/II/Coordonne";
import CouPro from "./pages/app/child/II/CouPro";
import PasSys from "./pages/app/child/II/PasSys";

import TroisiemeLayout from "./pages/app/child/III/TroisiemeLayout";
import RechDonSi from "./pages/app/child/III/RechDonSi";
import AjoutFluDo from "./pages/app/child/III/AjoutFluDo";
import AjoutDonPon from "./pages/app/child/III/AjoutDonPon";
import AjFonCart from "./pages/app/child/III/AjFonCart";
import QGISOSM from "./pages/app/child/III/QGISOSM";

import QuatriemeLayout from "./pages/app/child/IV/QuatriemeLayout";
import Principe from "./pages/app/child/IV/Principe";
import Preliminaire from "./pages/app/child/IV/Preliminaire";
import CarroyageTxt from "./pages/app/child/IV/CarroyageTxt";
import ParamGeoef from "./pages/app/child/IV/ParamGeoef";
import LanceGeoref from "./pages/app/child/IV/LanceGeoref";
import AvCoucheRef from "./pages/app/child/IV/AvCoucheRef";

import CinquiemeLayout from "./pages/app/child/V/CinquiemeLayout";
import CreatCouVide from "./pages/app/child/V/CreatCouVide";
import AjoutPoint from "./pages/app/child/V/AjoutPoint";
import DonAttrib from "./pages/app/child/V/DonAttrib";
import NumLign from "./pages/app/child/V/NumLign";
import NumPol from "./pages/app/child/V/NumPol";
import NotTop from "./pages/app/child/V/NotTop";

import SixiemeLayout from "./pages/app/child/VI/SixiemeLayout";
import RequAttrib from "./pages/app/child/VI/RequAttrib";
import RequSpat from "./pages/app/child/VI/RequSpat";
import CombRequ from "./pages/app/child/VI/CombRequ";
import RequSQL from "./pages/app/child/VI/RequSQL";

import SeptiemeLayout from "./pages/app/child/VII/SeptiemeLayout";
import CreSupChamp from "./pages/app/child/VII/CreSupChamp";
import CalcChamp from "./pages/app/child/VII/CalcChamp";

import HuitiemeLayout from "./pages/app/child/VIII/HuitiemeLayout";
import JoinAttrib from "./pages/app/child/VIII/JoinAttrib";
import JoinSpat from "./pages/app/child/VIII/JoinSpat";

import NeuviemeLayout from "./pages/app/child/IX/NeuviemeLayout";
import OperDoVect from "./pages/app/child/IX/OperDoVect";
import OperDoRes from "./pages/app/child/IX/OperDoRes";
import CreMaille from "./pages/app/child/IX/CreMaille";

import DitSQL from "./pages/app/child/IX/DitSQL";
import CroisVecRes from "./pages/app/child/IX/CroisVecRes";

import DixiemeLayout from "./pages/app/child/X/DixiemeLayout";
import Repres from "./pages/app/child/X/Repres";
import MisEnPage from "./pages/app/child/X/MisEnPage";

import OnziemeLayout from "./pages/app/child/XI/OnziemeLayout";
import Execlot from "./pages/app/child/XI/Execlot";
import ContUlMod from "./pages/app/child/XI/ContUlMod";
import CompLanPy from "./pages/app/child/XI/CompLanPy";
import TraitBase from "./pages/app/child/XI/TraitBase";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="app" element={<AppLayout />}>
                    <Route
                        index
                        element={<Navigate replace to="presentation" />}
                    />

                    <Route path="presentation" element={<Presentation />} />

                    <Route path="plan-detailler" element={<PlanDetailler />}>
                        {/*chap 1 */}
                        <Route path="prise-en-main" element={<PriseEnMain />}>
                            <Route index element={<PremiereLayout />} />
                            <Route path="definition-sig" element={<DefSig />} />
                            <Route
                                path="manipulation-information-geographique"
                                element={<ManipInfoGeo />}
                            />
                            <Route
                                path="format-donnees-sig"
                                element={<FormatDoSig />}
                            />
                            <Route
                                path="espace-de-travail"
                                element={<EspTrav />}
                            />
                        </Route>

                        {/*chap 2 */}
                        <Route path="geodesie" element={<Geodesie />}>
                            <Route index element={<DeuxiemeLayout />} />
                            <Route
                                path="introduction-geodesie"
                                element={<IntroGeo />}
                            />
                            <Route
                                path="coordonnes-systeme"
                                element={<Coordonne />}
                            />
                            <Route
                                path="couche-et-projet"
                                element={<CouPro />}
                            />
                            <Route
                                path="passer-un-systeme"
                                element={<PasSys />}
                            />
                        </Route>

                        {/*chap 3 */}
                        <Route
                            path="recherche-et-ajout-de-donnees"
                            element={<Recherche />}
                        >
                            <Route index element={<TroisiemeLayout />} />
                            <Route
                                path="recherche-donne-SIG-internet"
                                element={<RechDonSi />}
                            />
                            <Route
                                path="ajout-donnees-via-flux"
                                element={<AjoutFluDo />}
                            />
                            <Route
                                path="ajout-donnees-ponctuel"
                                element={<AjoutDonPon />}
                            />
                            <Route
                                path="ajout-fond-de-carte"
                                element={<AjFonCart />}
                            />
                            <Route path="qgis-osm" element={<QGISOSM />} />
                        </Route>

                        {/*chap 4 */}
                        <Route
                            path="georeferencement"
                            element={<Georeferencement />}
                        >
                            <Route index element={<QuatriemeLayout />} />
                            <Route path="principe" element={<Principe />} />
                            <Route
                                path="preliminaire"
                                element={<Preliminaire />}
                            />
                            <Route
                                path="avec-caroyage"
                                element={<CarroyageTxt />}
                            />
                            <Route
                                path="param-georef"
                                element={<ParamGeoef />}
                            />
                            <Route
                                path="lancer-geo"
                                element={<LanceGeoref />}
                            />
                            <Route
                                path="avec-couche-ref"
                                element={<AvCoucheRef />}
                            />
                        </Route>

                        {/*chap 5 */}
                        <Route path="numerisation" element={<Numerisation />}>
                            <Route index element={<CinquiemeLayout />} />
                            <Route
                                path="creation-couche-vide"
                                element={<CreatCouVide />}
                            />
                            <Route
                                path="ajout-point"
                                element={<AjoutPoint />}
                            />
                            <Route
                                path="donnees-attrib"
                                element={<DonAttrib />}
                            />
                            <Route
                                path="numeriser-ligne"
                                element={<NumLign />}
                            />
                            <Route path="numeriser-pol" element={<NumPol />} />
                            <Route path="quelque-top" element={<NotTop />} />
                        </Route>

                        {/*chap 6 */}
                        <Route path="requetes" element={<Requetes />}>
                            <Route index element={<SixiemeLayout />} />
                            <Route
                                path="requete-attrib"
                                element={<RequAttrib />}
                            />
                            <Route
                                path="requete-spati"
                                element={<RequSpat />}
                            />
                            <Route
                                path="combiner-requete"
                                element={<CombRequ />}
                            />
                            <Route path="requete-sql" element={<RequSQL />} />
                        </Route>

                        {/*chap 7 */}
                        <Route path="calcul-de-champs" element={<Calcul />}>
                            <Route index element={<SeptiemeLayout />} />
                            <Route
                                path="creer-suppre-champ"
                                element={<CreSupChamp />}
                            />
                            <Route path="calc-champ" element={<CalcChamp />} />
                        </Route>

                        {/*chap 8 */}
                        <Route path="jointures" element={<Jointure />}>
                            <Route index element={<HuitiemeLayout />} />
                            <Route
                                path="jointure-attrib"
                                element={<JoinAttrib />}
                            />
                            <Route
                                path="jointure-spat"
                                element={<JoinSpat />}
                            />
                        </Route>

                        {/*chap 9 */}
                        <Route path="analyse-spatiale" element={<Analyse />}>
                            <Route index element={<NeuviemeLayout />} />
                            <Route
                                path="operation-donnees-vect"
                                element={<OperDoVect />}
                            />
                            <Route
                                path="operation-donnees-rast"
                                element={<OperDoRes />}
                            />
                            <Route
                                path="croiser-vect-rast"
                                element={<CroisVecRes />}
                            />
                            <Route
                                path="creer-maillage"
                                element={<CreMaille />}
                            />
                            <Route path="dite-SQL" element={<DitSQL />} />
                        </Route>

                        {/*chap 10 */}
                        <Route
                            path="representation-et-mis-en-page"
                            element={<Representation />}
                        >
                            <Route index element={<DixiemeLayout />} />
                            <Route path="representation" element={<Repres />} />
                            <Route path="mis-en-page" element={<MisEnPage />} />
                        </Route>

                        {/*chap 11 */}
                        <Route
                            path="automatisation-des-traitements"
                            element={<Automatisation />}
                        >
                            <Route index element={<OnziemeLayout />} />
                            <Route
                                path="traitement-de-base"
                                element={<TraitBase />}
                            />
                            <Route path="execution-lot" element={<Execlot />} />
                            <Route
                                path="construire-utilise-modele"
                                element={<ContUlMod />}
                            />
                            <Route
                                path="comprendre-lancer-python"
                                element={<CompLanPy />}
                            />
                        </Route>
                    </Route>

                    <Route path="telechargement" element={<Telechargement />}>
                        <Route
                            index
                            element={
                                <Navigate replace to="telechargement-donnees" />
                            }
                        />
                        <Route
                            path="telechargement-donnees"
                            element={<Donnees />}
                        />
                        <Route path="telechargement-pdf" element={<PDF />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
