import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import "./styles.css";
import BBQTool from "./pages/BBQTool";
import BBQReport from "./pages/BBQReport";

import Home from "./pages/Home";
import Revit from "./pages/Revit";
import Solutions from "./pages/Solutions";
import Requests from "./pages/Requests";
import Clouds from "./pages/Clouds";

import RevitModellierung from "./pages/RevitModellierung";
import RevitFamilien from "./pages/RevitFamilien";
import RevitImport from "./pages/RevitImport";
import RevitZusammenarbeit from "./pages/RevitZusammenarbeit";
import RevitDarstellung from "./pages/RevitDarstellung";

import GuidePage from "./pages/GuidePage";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Hauptseiten */}
        <Route path="/" element={<Home />} />
        <Route path="/revit" element={<Revit />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/clouds" element={<Clouds />} />
        <Route path="/bbq" element={<BBQTool />} />
        <Route path="/bbq-report" element={<BBQReport />} />

        {/* Revit Unterseiten */}
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
