import { useMemo, useState } from "react";
import "../styles/styles.css";

function formatNumber(value, digits = 2) {
  return new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function parseValue(value) {
  const normalized = String(value).replace(",", ".");
  const parsed = parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function getStatusText(hasLimit, exceeded) {
  if (!hasLimit) return "kein Grenzwert eingetragen";
  return exceeded ? "überschritten" : "eingehalten";
}

function GRZGFZ() {
  const [siteArea, setSiteArea] = useState("800");
  const [builtArea, setBuiltArea] = useState("240");

  const [floor1, setFloor1] = useState("240");
  const [floor2, setFloor2] = useState("180");
  const [floor3, setFloor3] = useState("0");
  const [atticFloor, setAtticFloor] = useState("0");

  const [allowedGRZ, setAllowedGRZ] = useState("0.4");
  const [allowedGFZ, setAllowedGFZ] = useState("0.8");

  const result = useMemo(() => {
    const site = parseValue(siteArea);
    const built = parseValue(builtArea);

    const g1 = parseValue(floor1);
    const g2 = parseValue(floor2);
    const g3 = parseValue(floor3);
    const ga = parseValue(atticFloor);

    const totalFloorArea = g1 + g2 + g3 + ga;

    const grz = site > 0 ? built / site : 0;
    const gfz = site > 0 ? totalFloorArea / site : 0;

    const grzLimit = parseValue(allowedGRZ);
    const gfzLimit = parseValue(allowedGFZ);

    const hasGRZLimit = grzLimit > 0;
    const hasGFZLimit = gfzLimit > 0;

    const maxBuiltArea = hasGRZLimit && site > 0 ? site * grzLimit : 0;
    const maxFloorArea = hasGFZLimit && site > 0 ? site * gfzLimit : 0;

    const grzDifference = hasGRZLimit ? maxBuiltArea - built : 0;
    const gfzDifference = hasGFZLimit ? maxFloorArea - totalFloorArea : 0;

    return {
      site,
      built,
      totalFloorArea,
      grz,
      gfz,
      grzLimit,
      gfzLimit,
      hasGRZLimit,
      hasGFZLimit,
      maxBuiltArea,
      maxFloorArea,
      grzExceeded: hasGRZLimit ? grz > grzLimit : false,
      gfzExceeded: hasGFZLimit ? gfz > gfzLimit : false,
      grzDifference,
      gfzDifference,
    };
  }, [
    siteArea,
    builtArea,
    floor1,
    floor2,
    floor3,
    atticFloor,
    allowedGRZ,
    allowedGFZ,
  ]);

  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">GRZ / GFZ</h1>
      </div>

      <div className="dashboard">
        <div className="tool-card">
          <h2 className="tool-heading">Grunddaten</h2>

          <div className="tool-grid">
            <label className="tool-field">
              <span>Grundstücksfläche (m²)</span>
              <input
                type="number"
                step="0.01"
                value={siteArea}
                onChange={(e) => setSiteArea(e.target.value)}
              />
            </label>

            <label className="tool-field">
              <span>Überbaute Fläche / anzusetzende Grundfläche (m²)</span>
              <input
                type="number"
                step="0.01"
                value={builtArea}
                onChange={(e) => setBuiltArea(e.target.value)}
              />
            </label>

            <label className="tool-field">
              <span>Zulässige GRZ</span>
              <input
                type="number"
                step="0.01"
                value={allowedGRZ}
                onChange={(e) => setAllowedGRZ(e.target.value)}
              />
            </label>

            <label className="tool-field">
              <span>Zulässige GFZ</span>
              <input
                type="number"
                step="0.01"
                value={allowedGFZ}
                onChange={(e) => setAllowedGFZ(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="tool-card">
          <h2 className="tool-heading">Geschossflächen</h2>

          <div className="tool-grid">
            <label className="tool-field">
              <span>Geschoss 1 (m²)</span>
              <input
                type="number"
                step="0.01"
                value={floor1}
                onChange={(e) => setFloor1(e.target.value)}
              />
            </label>

            <label className="tool-field">
              <span>Geschoss 2 (m²)</span>
              <input
                type="number"
                step="0.01"
                value={floor2}
                onChange={(e) => setFloor2(e.target.value)}
              />
            </label>

            <label className="tool-field">
              <span>Geschoss 3 (m²)</span>
              <input
                type="number"
                step="0.01"
                value={floor3}
                onChange={(e) => setFloor3(e.target.value)}
              />
            </label>

            <label className="tool-field">
              <span>Dach-/Staffelgeschoss (m²)</span>
              <input
                type="number"
                step="0.01"
                value={atticFloor}
                onChange={(e) => setAtticFloor(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="tool-card">
          <h2 className="tool-heading">Ergebnis</h2>

          <div className="result-card" style={{ marginBottom: "18px" }}>
            <div className="result-main">
              GRZ: <strong>{formatNumber(result.grz)}</strong>
            </div>

            <div className="result-sub">
              Rechnung: {formatNumber(result.built)} m² /{" "}
              {formatNumber(result.site)} m² = {formatNumber(result.grz)}
            </div>

            <div className="result-sub">
              Zulässige GRZ: {formatNumber(result.grzLimit)} ·{" "}
              <strong>
                {getStatusText(result.hasGRZLimit, result.grzExceeded)}
              </strong>
            </div>

            {result.hasGRZLimit && (
              <>
                <div className="result-sub">
                  Maximal zulässige Grundfläche:{" "}
                  {formatNumber(result.maxBuiltArea)} m²
                </div>

                <div className="result-sub">
                  {result.grzDifference >= 0
                    ? `Verbleibende Grundfläche: ${formatNumber(
                        result.grzDifference
                      )} m²`
                    : `Überschreitung: ${formatNumber(
                        Math.abs(result.grzDifference)
                      )} m²`}
                </div>
              </>
            )}
          </div>

          <div className="result-card">
            <div className="result-main">
              GFZ: <strong>{formatNumber(result.gfz)}</strong>
            </div>

            <div className="result-sub">
              Rechnung: {formatNumber(result.totalFloorArea)} m² /{" "}
              {formatNumber(result.site)} m² = {formatNumber(result.gfz)}
            </div>

            <div className="result-sub">
              Geschossfläche gesamt: {formatNumber(result.totalFloorArea)} m²
            </div>

            <div className="result-sub">
              Zulässige GFZ: {formatNumber(result.gfzLimit)} ·{" "}
              <strong>
                {getStatusText(result.hasGFZLimit, result.gfzExceeded)}
              </strong>
            </div>

            {result.hasGFZLimit && (
              <>
                <div className="result-sub">
                  Maximal zulässige Geschossfläche:{" "}
                  {formatNumber(result.maxFloorArea)} m²
                </div>

                <div className="result-sub">
                  {result.gfzDifference >= 0
                    ? `Verbleibende Geschossfläche: ${formatNumber(
                        result.gfzDifference
                      )} m²`
                    : `Überschreitung: ${formatNumber(
                        Math.abs(result.gfzDifference)
                      )} m²`}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="tool-card">
          <h2 className="tool-heading">Was ist anzusetzen?</h2>

          <div className="hint-box">
            <p>
              <strong>Für die GRZ:</strong> Maßgeblich ist die{" "}
              <strong>Grundfläche</strong> im Verhältnis zur{" "}
              <strong>Grundstücksfläche</strong>. Nicht maßgeblich sind
              Wohnfläche, Nettoraumfläche oder Nutzfläche.
            </p>

            <p>
              <strong>Für die GFZ:</strong> Maßgeblich ist die{" "}
              <strong>Geschossfläche</strong> im Verhältnis zur{" "}
              <strong>Grundstücksfläche</strong>. Auch hier sind Wohnfläche oder
              Nettoraumfläche nicht automatisch die richtige Grundlage.
            </p>

            <p>
              <strong>Praxistipp:</strong> Für eine schnelle Vorprüfung kannst
              du mit der geplanten Gebäudengrundfläche und den geplanten
              Geschossflächen rechnen. Für eine verbindliche Aussage müssen die
              anzusetzenden Flächen exakt nach BauNVO und Bebauungsplan geprüft
              werden.
            </p>

            <p>
              <strong>Nicht verwechseln:</strong> Wohnfläche, NRF/NUF, BGF und
              planungsrechtliche Geschossfläche sind nicht automatisch dasselbe.
            </p>
          </div>
        </div>

        <div className="tool-card">
          <h2 className="tool-heading">Hinweise</h2>

          <div className="hint-box">
            <p>
              <strong>GRZ:</strong> Die Grundflächenzahl gibt an, wie viele
              Quadratmeter Grundfläche je Quadratmeter Grundstücksfläche
              zulässig sind.
            </p>

            <p>
              <strong>GFZ:</strong> Die Geschossflächenzahl gibt an, wie viele
              Quadratmeter Geschossfläche je Quadratmeter Grundstücksfläche
              zulässig sind.
            </p>

            <p>
              Maßgeblich sind die Festsetzungen des Bebauungsplans und die
              konkrete planungsrechtliche Einordnung des Vorhabens.
            </p>

            <p>
              Dieses Tool ist ein Vorprüfungsrechner und ersetzt keine rechtlich
              verbindliche Prüfung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GRZGFZ;
