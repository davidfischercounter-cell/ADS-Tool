import { useMemo, useState } from "react";
import "../styles/styles.css";

const LBO_DATA = {
  "Baden-Württemberg": {
    short: "LBO BW",
    note: "Direkte Paragraphen-Links zum offiziellen Landesrecht Baden-Württemberg.",
    lawUrl: "https://www.landesrecht-bw.de/bsbw/document/jlr-BauOBW2010rahmen",
    directLinks: true,
    topics: [
      {
        topic: "Abstandsflächen",
        paragraph: "§ 5 LBO",
        url: "https://www.landesrecht-bw.de/bsbw/document/jlr-BauOBW2010V11P5",
        description:
          "Abstände vor Außenwänden und Grundregeln zu Abstandsflächen.",
      },
      {
        topic: "Brandschutz",
        paragraph: "§ 15 LBO",
        url: "https://www.landesrecht-bw.de/bsbw/document/jlr-BauOBW2010V14P15",
        description: "Allgemeine Brandschutzanforderungen und Grundpflichten.",
      },
      {
        topic: "Treppen",
        paragraph: "§ 28 LBO",
        url: "https://www.landesrecht-bw.de/bsbw/document/jlr-BauOBW2010V20P28",
        description: "Notwendige Treppen und grundlegende Anforderungen.",
      },
      {
        topic: "Sonderbauten",
        paragraph: "§ 38 LBO",
        url: "https://www.landesrecht-bw.de/bsbw/document/jlr-BauOBW2010V23P38",
        description: "Besondere Anforderungen für Sonderbauten.",
      },
      {
        topic: "Verfahrensfreie Vorhaben",
        paragraph: "§ 50 LBO",
        url: "https://www.landesrecht-bw.de/bsbw/document/jlr-BauOBW2010V25P50",
        description:
          "Welche Vorhaben ohne Baugenehmigungsverfahren möglich sind.",
      },
      {
        topic: "Kenntnisgabeverfahren",
        paragraph: "§ 51 LBO",
        url: "https://www.landesrecht-bw.de/bsbw/document/jlr-BauOBW2010V25P51",
        description: "Schneller Einstieg ins Kenntnisgabeverfahren.",
      },
    ],
  },

  Bayern: {
    short: "BayBO",
    note: "Direkte Paragraphen-Links zum offiziellen Gesetzesportal Bayern.",
    lawUrl: "https://www.gesetze-bayern.de/Content/Document/BayBO",
    directLinks: true,
    topics: [
      {
        topic: "Abstandsflächen",
        paragraph: "Art. 6 BayBO",
        url: "https://www.gesetze-bayern.de/Content/Document/BayBO-6",
        description: "Abstandsflächen, Abstände und typische Sonderfälle.",
      },
      {
        topic: "Rettungswege",
        paragraph: "Art. 31 BayBO",
        url: "https://www.gesetze-bayern.de/Content/Document/BayBO-31",
        description: "Erster und zweiter Rettungsweg.",
      },
      {
        topic: "Treppen",
        paragraph: "Art. 32 BayBO",
        url: "https://www.gesetze-bayern.de/Content/Document/BayBO-32",
        description: "Notwendige Treppen und Zugänglichkeit von Geschossen.",
      },
      {
        topic: "Notwendige Treppenräume / Ausgänge",
        paragraph: "Art. 33 BayBO",
        url: "https://www.gesetze-bayern.de/Content/Document/BayBO-33",
        description: "Treppenräume, Ausgänge und Rauchableitung.",
      },
      {
        topic: "Verfahrensfreie Bauvorhaben",
        paragraph: "Art. 57 BayBO",
        url: "https://www.gesetze-bayern.de/Content/Document/BayBO-57",
        description: "Genehmigungsfreie bzw. verfahrensfreie Vorhaben.",
      },
      {
        topic: "Genehmigungsfreistellung",
        paragraph: "Art. 58 BayBO",
        url: "https://www.gesetze-bayern.de/Content/Document/BayBO-58",
        description: "Freistellung bei bestimmten Voraussetzungen.",
      },
    ],
  },

  "Nordrhein-Westfalen": {
    short: "BauO NRW 2018",
    note: "Offizielles Landesrecht NRW. Die Karten nennen den passenden §; der Klick öffnet derzeit die offizielle Gesetzesfassung, weil kein stabiler, verifizierter Einzelparagraphen-Link vorliegt.",
    lawUrl:
      "https://recht.nrw.de/lrgv/gesetz/01012024-bauordnung-fuer-das-land-nordrhein-westfalen-landesbauordnung-2018-bauo-nrw",
    directLinks: false,
    topics: [
      {
        topic: "Abstandsflächen",
        paragraph: "§ 6 BauO NRW 2018",
        url: "https://recht.nrw.de/lrgv/gesetz/01012024-bauordnung-fuer-das-land-nordrhein-westfalen-landesbauordnung-2018-bauo-nrw",
        description: "Grundregeln zu Abstandsflächen.",
      },
      {
        topic: "Brandschutz",
        paragraph: "§ 14 BauO NRW 2018",
        url: "https://recht.nrw.de/lrgv/gesetz/01012024-bauordnung-fuer-das-land-nordrhein-westfalen-landesbauordnung-2018-bauo-nrw",
        description: "Allgemeine brandschutzrechtliche Anforderungen.",
      },
      {
        topic: "Erster und zweiter Rettungsweg",
        paragraph: "§ 33 BauO NRW 2018",
        url: "https://recht.nrw.de/lrgv/gesetz/01012024-bauordnung-fuer-das-land-nordrhein-westfalen-landesbauordnung-2018-bauo-nrw",
        description: "Zahl und Führung der Rettungswege.",
      },
      {
        topic: "Treppen",
        paragraph: "§ 34 BauO NRW 2018",
        url: "https://recht.nrw.de/lrgv/gesetz/01012024-bauordnung-fuer-das-land-nordrhein-westfalen-landesbauordnung-2018-bauo-nrw",
        description: "Notwendige Treppen und Grundanforderungen.",
      },
      {
        topic: "Aufenthaltsräume",
        paragraph: "§ 46 BauO NRW 2018",
        url: "https://recht.nrw.de/lrgv/gesetz/01012024-bauordnung-fuer-das-land-nordrhein-westfalen-landesbauordnung-2018-bauo-nrw",
        description: "Lichte Höhen und Anforderungen an Aufenthaltsräume.",
      },
      {
        topic: "Nicht überbaute Flächen",
        paragraph: "§ 8 BauO NRW 2018",
        url: "https://recht.nrw.de/lrgv/gesetz/01012024-bauordnung-fuer-das-land-nordrhein-westfalen-landesbauordnung-2018-bauo-nrw",
        description: "Regeln für nicht überbaute Flächen bebauter Grundstücke.",
      },
    ],
  },

  "Rheinland-Pfalz": {
    short: "LBauO Rheinland-Pfalz",
    note: "Direkte Paragraphen-Links zum offiziellen Landesrecht Rheinland-Pfalz.",
    lawUrl: "https://www.landesrecht.rlp.de/bsrp/document/jlr-BauORPV35IVZ",
    directLinks: true,
    topics: [
      {
        topic: "Bebauung der Grundstücke",
        paragraph: "§ 6 LBauO",
        url: "https://www.landesrecht.rlp.de/bsrp/document/jlr-BauORPV35P6",
        description: "Grundregeln zur Bebauung der Grundstücke.",
      },
      {
        topic: "Abstandsflächen",
        paragraph: "§ 8 LBauO",
        url: "https://www.landesrecht.rlp.de/bsrp/document/jlr-BauORPV35IVZ",
        description: "Abstandsflächen und typische Grenzthemen.",
      },
      {
        topic: "Brandschutz",
        paragraph: "§ 15 LBauO",
        url: "https://www.landesrecht.rlp.de/bsrp/document/jlr-BauORPV35IVZ",
        description: "Allgemeine Brandschutzanforderungen.",
      },
      {
        topic: "Treppen",
        paragraph: "§ 33 LBauO",
        url: "https://www.landesrecht.rlp.de/bsrp/document/jlr-BauORPV35IVZ",
        description: "Notwendige Treppen und Erschließung von Geschossen.",
      },
      {
        topic: "Bauantrag",
        paragraph: "§ 63 LBauO",
        url: "https://www.landesrecht.rlp.de/bsrp/document/jlr-BauORPV38P63",
        description: "Bauantrag und Einreichung.",
      },
      {
        topic: "Baugenehmigung",
        paragraph: "§ 65 LBauO",
        url: "https://www.landesrecht.rlp.de/bsrp/document/jlr-BauORPV36P65",
        description: "Baugenehmigung und Prüfungsumfang.",
      },
      {
        topic: "Freistellungsverfahren",
        paragraph: "§ 67 LBauO",
        url: "https://www.landesrecht.rlp.de/bsrp/document/jlr-BauORPV36P67",
        description: "Freistellungsverfahren und Voraussetzungen.",
      },
    ],
  },
};

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .trim();
}

function LBOFinder() {
  const [stateName, setStateName] = useState("Baden-Württemberg");
  const [query, setQuery] = useState("");

  const selectedState = LBO_DATA[stateName];

  const filteredTopics = useMemo(() => {
    const q = normalize(query);

    if (!q) return selectedState.topics;

    return selectedState.topics.filter((item) => {
      const haystack =
        `${item.topic} ${item.paragraph} ${item.description}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [query, selectedState]);

  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">LBO Finder</h1>
      </div>

      <div className="dashboard">
        <div className="tool-card">
          <h2 className="tool-heading">Schnell zum richtigen Paragraphen</h2>

          <div className="tool-grid">
            <label className="tool-field">
              <span>Bundesland</span>
              <select
                className="tool-select"
                value={stateName}
                onChange={(e) => setStateName(e.target.value)}
              >
                {Object.keys(LBO_DATA).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </label>

            <label className="tool-field">
              <span>Suche nach Thema oder Begriff</span>
              <input
                type="text"
                placeholder="z. B. Abstandsflächen, Treppen, Brandschutz ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>

          <div className="hint-box">
            <p>
              <strong>Aktives Regelwerk:</strong> {selectedState.short}
            </p>
            <p>{selectedState.note}</p>
            <p>
              {selectedState.directLinks
                ? "Der Klick auf eine Karte öffnet direkt den passenden Paragraphen im offiziellen Landesrechtsportal."
                : "Der Klick auf eine Karte öffnet die offizielle Gesetzesfassung. Der passende Paragraph steht direkt auf der Karte."}
            </p>
          </div>
        </div>

        <div className="tool-card">
          <h2 className="tool-heading">{stateName}</h2>

          <div className="search-results-list" style={{ marginTop: 0 }}>
            {filteredTopics.map((item) => (
              <a
                key={`${stateName}-${item.paragraph}-${item.topic}`}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="search-result-card"
              >
                <div className="search-result-category">{item.paragraph}</div>
                <h3>{item.topic}</h3>
                <p>{item.description}</p>
              </a>
            ))}
          </div>

          {filteredTopics.length === 0 && (
            <div className="hint-box" style={{ marginTop: "16px" }}>
              <p>
                Nichts gefunden. Versuch es mit <strong>Abstandsflächen</strong>
                , <strong>Brandschutz</strong>, <strong>Treppen</strong>,{" "}
                <strong>Rettungswege</strong>, <strong>Freistellung</strong>{" "}
                oder <strong>Kenntnisgabe</strong>.
              </p>
            </div>
          )}

          <div className="preset-row" style={{ marginTop: "18px" }}>
            <a
              href={selectedState.lawUrl}
              target="_blank"
              rel="noreferrer"
              className="tool-btn"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Gesamtes Gesetz öffnen
            </a>
          </div>
        </div>

        <div className="tool-card warning-card">
          <h2 className="tool-heading">Wichtig</h2>
          <p>
            Der Finder ist als schneller Einstieg gedacht. Verbindlich sind
            immer die aktuelle Gesetzesfassung, Sonderregelungen und die
            konkrete Einordnung des Vorhabens.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LBOFinder;
