import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import "./styles.css";

import BBQTool from "./pages/BBQTool.jsx";
import BBQReport from "./pages/BBQReport.jsx";

import Home from "./pages/Home.jsx";
import Revit from "./pages/Revit.jsx";
import Solutions from "./pages/Solutions.jsx";
import Requests from "./pages/Requests.jsx";
import Clouds from "./pages/Clouds.jsx";

import RevitModellierung from "./pages/RevitModellierung.jsx";
import RevitFamilien from "./pages/RevitFamilien.jsx";
import RevitImport from "./pages/RevitImport.jsx";
import RevitZusammenarbeit from "./pages/RevitZusammenarbeit.jsx";
import RevitDarstellung from "./pages/RevitDarstellung.jsx";

import GuidePage from "./pages/GuidePage.jsx";
import SearchResults from "./pages/SearchResults.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/revit" element={<Revit />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/clouds" element={<Clouds />} />
        <Route path="/bbq" element={<BBQTool />} />
        <Route path="/bbq-report" element={<BBQReport />} />

        <Route path="/revit/modellierung" element={<RevitModellierung />} />
        <Route path="/revit/familien" element={<RevitFamilien />} />
        <Route path="/revit/import" element={<RevitImport />} />
        <Route path="/revit/zusammenarbeit" element={<RevitZusammenarbeit />} />
        <Route path="/revit/darstellung" element={<RevitDarstellung />} />

        <Route path="/guide/:id" element={<GuidePage />} />
        <Route path="/search" element={<SearchResults />} />
      </Route>
    </Routes>
  );
}

export default App;