import { useState } from "react";
import "../styles/bbqReport.css";
import { useLocation } from "react-router-dom";

export default function BBQReport() {
  const location = useLocation();

  const initialPK = location.state?.pk || "E";
  const initialBK = location.state?.bk || "E";
  const initialAK = location.state?.ak || "E";

  const [pk, setPk] = useState(initialPK);
  const [bk, setBk] = useState(initialBK);
  const [ak, setAk] = useState(initialAK);

  const priority = { N: 1, E: 2, S: 3 };
  const reverse = { 1: "N", 2: "E", 3: "S" };

  const result = reverse[Math.max(priority[pk], priority[bk], priority[ak])];

  const [projectNumber, setProjectNumber] = useState("");
  const [projectName, setProjectName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");

  function exportCSV() {
    const data = [
      [
        "Projektnummer",
        "Projektbezeichnung",
        "Straße",
        "Ort",
        "Datum",
        "Planungsklasse",
        "Betonklasse",
        "Ausführungsklasse",
      ],
      [
        projectNumber,
        projectName,
        street,
        city,
        date,
        `PK-${pk}`,
        `BK-${bk}`,
        `AK-${ak}`,
      ],
    ];

    const csvRows = data.map((row) => row.join(";")).join("\n");

    /* Excel erkennt dadurch automatisch ; */

    const csv = "sep=;\n" + csvRows;

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "BBQ_Daten.csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="bbq-report">
      <h1>Festlegung Betonbauqualitätsklassen nach DIN 1045</h1>

      <p className="subtitle">
        für die Planung, Herstellung, Einbau und Nachbehandlung von Beton bzw.
        Betonbauteilen
      </p>

      <section>
        <h2>Projekt</h2>

        <div className="project-grid">
          <label>Projektnummer</label>
          <input
            value={projectNumber}
            onChange={(e) => setProjectNumber(e.target.value)}
          />

          <label>Projektbezeichnung</label>
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />

          <label>Straße</label>
          <input value={street} onChange={(e) => setStreet(e.target.value)} />

          <label>Ort</label>
          <input value={city} onChange={(e) => setCity(e.target.value)} />

          <label>Datum</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </section>

      <section>
        <h2>Festlegung der Betonbauqualitätsklasse BBQ</h2>

        <div className="class-block">
          <h3>Planungsklasse</h3>

          <select value={pk} onChange={(e) => setPk(e.target.value)}>
            <option value="N">PK-N</option>
            <option value="E">PK-E</option>
            <option value="S">PK-S</option>
          </select>

          <p className="hint">
            PK-N Standardplanung mit üblichen Anforderungen
            <br />
            PK-E Erhöhte Anforderungen: komplexe Geometrien,
            koordinationsintensive Bauabläufe
            <br />
            PK-S Höchste Anforderungen: Integrale Planung, Sichtbeton
          </p>
        </div>

        <div className="class-block">
          <h3>Betonklasse</h3>

          <select value={bk} onChange={(e) => setBk(e.target.value)}>
            <option value="N">BK-N</option>
            <option value="E">BK-E</option>
            <option value="S">BK-S</option>
          </select>

          <p className="hint">
            BK-N Standardanforderungen
            <br />
            BK-E Erhöhte Anforderungen: Dauerhaftigkeit, Sichtbeton SB-2
            <br />
            BK-S Höchste Anforderungen: Hochleistungsbeton, SB3-4
          </p>
        </div>

        <div className="class-block">
          <h3>Ausführungsklasse</h3>

          <select value={ak} onChange={(e) => setAk(e.target.value)}>
            <option value="N">AK-N</option>
            <option value="E">AK-E</option>
            <option value="S">AK-S</option>
          </select>

          <p className="hint">
            AK-N übliche Ausführung ohne besondere Auflagen
            <br />
            AK-E erhöhte Anforderungen an Toleranzen und Schalung
            <br />
            AK-S höchste Anforderungen, z. B. Sichtbeton
          </p>
        </div>

        <div className="bbq-result">
          Betonqualitätsklasse: <strong>BBQ-{result}</strong>
        </div>
      </section>

      <section>
        <h2>Typische Anwendung</h2>

        <div className="bbq-info">
          <div>
            <strong>BBQ-N</strong>
            <br />
            Standardqualität, z. B. einfache Fundamente, Bodenplatte, Innenwände
          </div>

          <div>
            <strong>BBQ-E</strong>
            <br />
            erhöhte Qualität, z. B. Stützen, Außenwände, wasserundurchlässige
            Bauteile
          </div>

          <div>
            <strong>BBQ-S</strong>
            <br />
            Sichtbeton, Brücken, hochbelastete Bauteile
          </div>
        </div>
      </section>

      <button className="bbq-report-button full" onClick={exportCSV}>
        Daten exportieren
      </button>
    </div>
  );
}
