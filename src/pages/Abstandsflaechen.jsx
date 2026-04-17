import { useMemo, useState } from "react";
import "../styles/styles.css";

function formatNumber(value) {
  return new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/*
  Wichtig:
  - BW / Bayern / NRW sind hier gezielt angepasst.
  - Alle anderen Länder laufen in dieser Version erstmal mit einem sinnvollen Standard-Preset.
  - Wenn du willst, machen wir danach die restlichen Länder einzeln juristisch sauber.
*/

const STATE_PRESETS = {
  "Baden-Württemberg": {
    residentialFactor: 0.4,
    commercialFactor: 0.2,
    minDistance: 2.5,
    roofFactorDefault: 0.3333,
    note: "BW: allgemein 0,4 H, in bestimmten Gebieten 0,2 H, Untergrenze typischerweise 2,5 m.",
  },
  Bayern: {
    residentialFactor: 0.4,
    commercialFactor: 0.2,
    minDistance: 3,
    roofFactorDefault: 0.3333,
    note: "BayBO: 0,4 H, in Gewerbe-/Industriegebieten 0,2 H, jeweils mindestens 3 m.",
  },
  Berlin: {
    residentialFactor: 0.4,
    commercialFactor: 0.2,
    minDistance: 3,
    roofFactorDefault: 0.3333,
    note: "Standard-Preset. Landesrecht/B-Plan bitte prüfen.",
  },
  Brandenburg: {
    residentialFactor: 0.4,
    commercialFactor: 0.2,
    minDistance: 3,
    roofFactorDefault: 0.3333,
    note: "Standard-Preset. Landesrecht/B-Plan bitte prüfen.",
  },
  Bremen: {
    residentialFactor: 0.4,
    commercialFactor: 0.2,
    minDistance: 3,
    roofFactorDefault: 0.3333,
    note: "Standard-Preset. Landesrecht/B-Plan bitte prüfen.",
  },
  Hamburg: {
    residentialFactor: 0.4,
    commercialFactor: 0.2,
    minDistance: 3,
    roofFactorDefault: 0.3333,
    note: "Standard-Preset. Landesrecht/B-Plan bitte prüfen.",
  },
  Hessen: {
    residentialFactor: 0.4,
    commercialFactor: 0.2,
    minDistance: 3,
    roofFactorDefault: 0.3333,
    note: "Standard-Preset. Landesrecht/B-Plan bitte prüfen.",
  },
  "Mecklenburg-Vorpommern": {
    residentialFactor: 0.4,
    commercialFactor: 0.2,
    minDistance: 3,
    roofFactorDefault: 0.3333,
    note: "Standard-Preset. Landesrecht/B-Plan bitte prüfen.",
  },
  Niedersachsen: {
    residentialFactor: 0.4,
    commercialFactor: 0.2,
    minDistance: 3,
    roofFactorDefault: 0.3333,
    note: "Standard-Preset. Landesrecht/B-Plan bitte prüfen.",
  },
  "Nordrhein-Westfalen": {
    residentialFactor: 0.4,
    commercialFactor: 0.2,
    minDistance: 3,
    roofFactorDefault: 0.3333,
    note: "NRW: 0,4 H, in Gewerbe-/Industriegebieten 0,2 H, jeweils mindestens 3 m.",
  },
  "Rheinland-Pfalz": {
    residentialFactor: 0.4,
    commercialFactor: 0.2,
    minDistance: 3,
    roofFactorDefault: 0.3333,
    note: "Standard-Preset. Landesrecht/B-Plan bitte prüfen.",
  },
  Saarland: {
    residentialFactor: 0.4,
    commercialFactor: 0.2,
    minDistance: 3,
    roofFactorDefault: 0.3333,
    note: "Standard-Preset. Landesrecht/B-Plan bitte prüfen.",
  },
  Sachsen: {
    residentialFactor: 0.4,
    commercialFactor: 0.2,
    minDistance: 3,
    roofFactorDefault: 0.3333,
    note: "Standard-Preset. Landesrecht/B-Plan bitte prüfen.",
  },
  "Sachsen-Anhalt": {
    residentialFactor: 0.4,
    commercialFactor: 0.2,
    minDistance: 3,
    roofFactorDefault: 0.3333,
    note: "Standard-Preset. Landesrecht/B-Plan bitte prüfen.",
  },
  "Schleswig-Holstein": {
    residentialFactor: 0.4,
    commercialFactor: 0.2,
    minDistance: 3,
    roofFactorDefault: 0.3333,
    note: "Standard-Preset. Landesrecht/B-Plan bitte prüfen.",
  },
  Thüringen: {
    residentialFactor: 0.4,
    commercialFactor: 0.2,
    minDistance: 3,
    roofFactorDefault: 0.3333,
    note: "Standard-Preset. Landesrecht/B-Plan bitte prüfen.",
  },
};

function Abstandsflaechen() {
  const [stateName, setStateName] = useState("Baden-Württemberg");
  const [useCommercialRule, setUseCommercialRule] = useState(false);

  const [wallHeight, setWallHeight] = useState("7");
  const [roofHeight, setRoofHeight] = useState("3");
  const [roofFactor, setRoofFactor] = useState("0.3333");
  const [roofOver70, setRoofOver70] = useState(false);

  const [projectionDepth, setProjectionDepth] = useState("0");
  const [projectionFacadeShare, setProjectionFacadeShare] = useState("0");
  const [insulationThickness, setInsulationThickness] = useState("0");
  const [hasBPlanOverride, setHasBPlanOverride] = useState(false);

  const selectedPreset = STATE_PRESETS[stateName];

  const result = useMemo(() => {
    const H = parseFloat(wallHeight) || 0;
    const HD = parseFloat(roofHeight) || 0;

    const projDepth = parseFloat(projectionDepth) || 0;
    const projShare = parseFloat(projectionFacadeShare) || 0;
    const insulation = parseFloat(insulationThickness) || 0;

    const F = useCommercialRule
      ? selectedPreset.commercialFactor
      : selectedPreset.residentialFactor;

    const min = selectedPreset.minDistance;
    const effectiveRoofFactor = roofOver70 ? 1 : parseFloat(roofFactor) || 0;

    const rawDistance = F * (H + effectiveRoofFactor * HD);
    const finalDistance = Math.max(rawDistance, min);

    const projectionLikelyRelevant = projDepth > 1.5 || projShare > 33.3333;

    const insulationLikelyIgnored = insulation <= 25;

    return {
      H,
      HD,
      F,
      min,
      effectiveRoofFactor,
      rawDistance,
      finalDistance,
      projectionLikelyRelevant,
      insulationLikelyIgnored,
    };
  }, [
    wallHeight,
    roofHeight,
    roofFactor,
    roofOver70,
    projectionDepth,
    projectionFacadeShare,
    insulationThickness,
    useCommercialRule,
    selectedPreset,
  ]);

  const applyStateDefaults = (newStateName) => {
    const preset = STATE_PRESETS[newStateName];
    setStateName(newStateName);
    setRoofFactor(String(preset.roofFactorDefault));
    setRoofOver70(false);
  };

  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">Abstandsflächen</h1>
      </div>

      <div className="dashboard">
        <div className="tool-card">
          <h2 className="tool-heading">Schnellrechner</h2>

          <div className="tool-grid">
            <label className="tool-field">
              <span>Bundesland</span>
              <select
                value={stateName}
                onChange={(e) => applyStateDefaults(e.target.value)}
                className="tool-select"
              >
                {Object.keys(STATE_PRESETS).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </label>

            <label className="tool-field checkbox-field">
              <input
                type="checkbox"
                checked={useCommercialRule}
                onChange={(e) => setUseCommercialRule(e.target.checked)}
              />
              <span>Gewerbe-/Industriegebiet verwenden</span>
            </label>

            <label className="tool-field">
              <span>Höhe Außenwand H (m)</span>
              <input
                type="number"
                step="0.01"
                value={wallHeight}
                onChange={(e) => setWallHeight(e.target.value)}
              />
            </label>

            <label className="tool-field">
              <span>Dachhöhe HD (m)</span>
              <input
                type="number"
                step="0.01"
                value={roofHeight}
                onChange={(e) => setRoofHeight(e.target.value)}
              />
            </label>

            <label className="tool-field">
              <span>Dachfaktor FD</span>
              <input
                type="number"
                step="0.0001"
                value={roofFactor}
                onChange={(e) => setRoofFactor(e.target.value)}
                disabled={roofOver70}
              />
            </label>

            <label className="tool-field checkbox-field">
              <input
                type="checkbox"
                checked={roofOver70}
                onChange={(e) => setRoofOver70(e.target.checked)}
              />
              <span>Dachneigung über 70° → Dach voll anrechnen</span>
            </label>
          </div>

          <div className="preset-row">
            <button
              type="button"
              className="tool-btn"
              onClick={() => {
                setRoofFactor("0.3333");
                setRoofOver70(false);
              }}
            >
              Standard Dachansatz
            </button>

            <button
              type="button"
              className="tool-btn"
              onClick={() => setUseCommercialRule(false)}
            >
              Allgemeines Gebiet
            </button>

            <button
              type="button"
              className="tool-btn"
              onClick={() => setUseCommercialRule(true)}
            >
              Gewerbe / Industrie
            </button>
          </div>

          <div className="result-card">
            <div className="result-main">
              Erforderliche Abstandsfläche:{" "}
              <strong>{formatNumber(result.finalDistance)} m</strong>
            </div>

            <div className="result-sub">
              Bundesland: {stateName} · Regel:{" "}
              {useCommercialRule ? "Gewerbe / Industrie" : "Allgemein"}
            </div>

            <div className="result-sub">
              Faktor F: {formatNumber(result.F)} · Mindestabstand:{" "}
              {formatNumber(result.min)} m
            </div>

            <div className="result-sub">
              Rechenwert ohne Mindestgrenze: {formatNumber(result.rawDistance)}{" "}
              m
            </div>

            <div className="result-formula">
              TA = F × (H + FD × HD) = {formatNumber(result.F)} × (
              {formatNumber(result.H)} +{" "}
              {formatNumber(result.effectiveRoofFactor)} ×{" "}
              {formatNumber(result.HD)})
            </div>
          </div>
        </div>

        <div className="tool-card">
          <h2 className="tool-heading">Vor-/Rücksprünge und Dämmung</h2>

          <div className="tool-grid">
            <label className="tool-field">
              <span>Balkon / Erker Vorsprung (m)</span>
              <input
                type="number"
                step="0.01"
                value={projectionDepth}
                onChange={(e) => setProjectionDepth(e.target.value)}
              />
            </label>

            <label className="tool-field">
              <span>Anteil an Fassade (%)</span>
              <input
                type="number"
                step="0.01"
                value={projectionFacadeShare}
                onChange={(e) => setProjectionFacadeShare(e.target.value)}
              />
            </label>

            <label className="tool-field">
              <span>Dämmstärke (cm)</span>
              <input
                type="number"
                step="0.1"
                value={insulationThickness}
                onChange={(e) => setInsulationThickness(e.target.value)}
              />
            </label>

            <label className="tool-field checkbox-field">
              <input
                type="checkbox"
                checked={hasBPlanOverride}
                onChange={(e) => setHasBPlanOverride(e.target.checked)}
              />
              <span>Bebauungsplan mit Sonderregelung vorhanden</span>
            </label>
          </div>

          <div className="hint-box">
            <p>
              <strong>Bundesland-Hinweis:</strong> {selectedPreset.note}
            </p>

            <p>
              <strong>Hinweis Balkon / Erker:</strong>{" "}
              {result.projectionLikelyRelevant
                ? "Der Vorsprung könnte abstandsflächenrelevant sein."
                : "Kleinere Vorsprünge sind oft unschädlich, müssen aber im Einzelfall geprüft werden."}
            </p>

            <p>
              <strong>Hinweis Dämmung:</strong>{" "}
              {result.insulationLikelyIgnored
                ? "Eine übliche Dämmstärke bis 25 cm ist oft unkritisch, aber bitte örtlich prüfen."
                : "Bei größerer Dämmstärke bitte besonders genau prüfen."}
            </p>

            <p>
              <strong>Hinweis Planungsrecht:</strong>{" "}
              {hasBPlanOverride
                ? "Wenn ein Bebauungsplan Sonderregeln setzt, ist dessen Vorgabe maßgeblich."
                : "Bitte zusätzlich Landesbauordnung und ggf. Bebauungsplan prüfen."}
            </p>
          </div>
        </div>

        <div className="tool-card warning-card">
          <h2 className="tool-heading">Wichtig</h2>
          <p>
            Dieses Tool ist ein Vorprüfungsrechner für die Website. Es liefert
            eine überschlägige Orientierung und ersetzt keine verbindliche
            Prüfung nach Landesbauordnung, Bebauungsplan oder durch die
            zuständige Behörde/Fachplanung.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Abstandsflaechen;
