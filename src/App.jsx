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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="presentation" />} />

          <Route path="presentation" element={<Presentation />} />

          <Route path="plan-detailler" element={<PlanDetailler />}>
            <Route path="prise-en-main" element={<PriseEnMain />}>
              <Route index element={<PremiereLayout />} />
              <Route path="definition-sig" element={<DefSig />} />
              <Route
                path="manipulation-information-geographique"
                element={<ManipInfoGeo />}
              />
              <Route path="format-donnees-sig" element={<FormatDoSig />} />
              <Route path="espace-de-travail" element={<EspTrav />} />
            </Route>

            <Route path="geodesie" element={<Geodesie />} />

            <Route
              path="recherche-et-ajout-de-donnees"
              element={<Recherche />}
            />

            <Route path="georeferencement" element={<Georeferencement />} />

            <Route path="numerisation" element={<Numerisation />} />

            <Route path="requetes" element={<Requetes />} />

            <Route path="calcul-de-champs" element={<Calcul />} />

            <Route path="jointures" element={<Jointure />} />

            <Route path="analyse-spatiale" element={<Analyse />} />

            <Route
              path="representation-et-mis-en-page"
              element={<Representation />}
            />

            <Route
              path="automatisation-des-traitements"
              element={<Automatisation />}
            />
          </Route>

          <Route path="telechargement" element={<Telechargement />}>
            <Route
              index
              element={<Navigate replace to="telechargement-donnees" />}
            />
            <Route path="telechargement-donnees" element={<Donnees />} />
            <Route path="telechargement-pdf" element={<PDF />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
