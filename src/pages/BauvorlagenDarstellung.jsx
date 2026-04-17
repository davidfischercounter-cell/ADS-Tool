import { useMemo, useState } from "react";
import "../styles/styles.css";

const DATA = {
  "Baden-Württemberg": {
    short: "BW",
    intro:
      "Geoportal, Bebauungspläne, Bauvorlagen und Darstellungsgrundlagen für Baden-Württemberg.",
    topics: [
      {
        category: "Geoportal / Karten",
        title: "Geoportal BW",
        subtitle: "Offizieller Karten- und Geodaten-Einstieg",
        description:
          "Praktischer Startpunkt für Grundstücke, Karten und Geodaten in Baden-Württemberg.",
        url: "https://www.geoportal-bw.de/",
      },
      {
        category: "Bebauungspläne",
        title: "Themenkarte Bebauungspläne BW",
        subtitle: "Direkter Einstieg in Bebauungspläne",
        description:
          "Sinnvoll für die schnelle Suche nach verfügbaren Bebauungsplänen in Baden-Württemberg.",
        url: "https://www.geoportal-bw.de/themenkarte-bebauungspl%C3%A4ne",
      },
      {
        category: "Bauvorlagen",
        title: "Bauvorlagen BW",
        subtitle: "Lageplan, Bauzeichnungen, Baubeschreibung",
        description:
          "Offizielle Übersicht zu Bauvorlagen. Dort steht auch, was im Lageplan und in den Bauzeichnungen enthalten sein muss.",
        url: "https://gewerbeaufsicht.baden-wuerttemberg.de/bauvorlagen1",
      },
      {
        category: "Darstellung / Maßstab",
        title: "LBOVVO BW",
        subtitle: "Landesnorm zu Bauvorlagen",
        description:
          "Offizielle Landesnorm zur Verfahrensverordnung und zu Bauvorlagen in Baden-Württemberg.",
        url: "https://www.landesrecht-bw.de/bsbw/document/jlr-BauRVfVBWrahmen",
      },
    ],
  },

  Bayern: {
    short: "BY",
    intro:
      "Geoportal, Bauleitplanung, Lageplan-Grundlage und Bauvorlagen für Bayern.",
    topics: [
      {
        category: "Geoportal / Karten",
        title: "BayernAtlas / Geoportal Bayern",
        subtitle: "Offizieller Geodaten-Einstieg",
        description:
          "Zentraler Einstieg für Karten, Grundstücke und Geodaten in Bayern.",
        url: "https://geoportal.bayern.de/geoportalbayern/",
      },
      {
        category: "Bebauungspläne",
        title: "Bauleitpläne Bayern",
        subtitle: "Zentrales Landesportal",
        description:
          "Suche nach laufenden und bereitgestellten Bauleitplanverfahren sowie Satzungen der Gemeinden.",
        url: "https://geoportal.bayern.de/bauleitplanungsportal/",
      },
      {
        category: "Lageplan / Kataster",
        title: "ALKIS-Flurkarte",
        subtitle: "Lageplan zur Bauvorlage",
        description:
          "Die ALKIS-Flurkarte wird ausdrücklich auch als Lageplan zur Bauvorlage laut BauVorlV verwendet.",
        url: "https://geoportal.bayern.de/geoportalbayern/details-suche?resId=9bc6b384-02fe-4073-aee0-16142b2bd943",
      },
      {
        category: "Darstellung / Maßstab",
        title: "BauVorlV Bayern",
        subtitle: "Rechtsgrundlage für Bauzeichnungen",
        description:
          "Die BauVorlV regelt die Bauvorlagen; für Bauzeichnungen ist grundsätzlich Maßstab 1:100 vorgesehen.",
        url: "https://www.gesetze-bayern.de/Content/Document/BayBauVorlV2008",
      },
    ],
  },

  "Nordrhein-Westfalen": {
    short: "NRW",
    intro:
      "Karten, Bauleitplanung und zeichnerische Bauvorlagen für Nordrhein-Westfalen.",
    topics: [
      {
        category: "Geoportal / Karten",
        title: "TIM-online NRW",
        subtitle: "Geobasisdaten und Katasterkarten",
        description:
          "Offizieller Einstieg für Geobasisdaten und Karten der Vermessungs- und Katasterverwaltung NRW.",
        url: "https://www.tim-online.nrw.de/tim-online2/",
      },
      {
        category: "Bebauungspläne",
        title: "Bauleitplanung.NRW",
        subtitle: "FNP und Bebauungspläne",
        description:
          "Zentraler Einstieg in Bauleitplaninformationen in Nordrhein-Westfalen.",
        url: "https://www.bauleitplanung.nrw.de/",
      },
      {
        category: "Darstellung / Bauvorlagen",
        title: "BauPrüfVO NRW",
        subtitle: "Bauvorlagen und zeichnerische Anforderungen",
        description:
          "Rechtsgrundlage für bautechnische Prüfungen und Bauvorlagen in NRW.",
        url: "https://recht.nrw.de/lrgv/rechtsverordnung/06122014-verordnung-ueber-bautechnische-pruefungen-baupruefvo-1",
      },
      {
        category: "Darstellung / Hinweise",
        title: "Hinweis zur Maßstabsleiste",
        subtitle: "Grafische Maßstabsleiste mit aufnehmen",
        description:
          "NRW weist ausdrücklich darauf hin, dass zeichnerische Bauvorlagen eine grafische Maßstabsleiste enthalten sollen.",
        url: "https://recht.nrw.de/lrgv/rechtsverordnung/06122014-verordnung-ueber-bautechnische-pruefungen-baupruefvo-1",
      },
    ],
  },

  "Rheinland-Pfalz": {
    short: "RLP",
    intro:
      "Geoportal, Bebauungspläne und naturschutzbezogene Karten für Rheinland-Pfalz.",
    topics: [
      {
        category: "Geoportal / Karten",
        title: "Geoportal RLP",
        subtitle: "Offizieller Karten-Einstieg",
        description:
          "Zentrale Karten- und Geodatenplattform für Rheinland-Pfalz.",
        url: "https://www.geoportal.rlp.de/",
      },
      {
        category: "Bebauungspläne",
        title: "Bebauungspläne im Geoportal RLP",
        subtitle: "Direkte Kartenansicht",
        description:
          "Karteneinstieg für Umringe und verfügbare Bebauungspläne in Rheinland-Pfalz.",
        url: "https://www.geoportal.rlp.de/map?LAYER%5Bquerylayer%5D=1&LAYER%5Bvisible%5D=1&WMC=21393",
      },
      {
        category: "Naturschutz / Fachkarten",
        title: "Planungsgrundlagen & Fachinformationsdienste",
        subtitle: "LANIS, Artdaten, Biotopverbund",
        description:
          "Offizieller Überblick des LfU Rheinland-Pfalz zu LANIS, Artdaten und weiteren naturschutzbezogenen Planungsgrundlagen.",
        url: "https://lfu.rlp.de/natur/planungsgrundlagen",
      },
      {
        category: "Geoportal / Viewer",
        title: "Standardkartenviewer RLP",
        subtitle: "Direkter Viewer",
        description:
          "Sinnvoll, wenn schnell mit Kartenebenen und Abfragen gearbeitet werden soll.",
        url: "https://www.geoportal.rlp.de/mapbender/php/mod_invokeApplicationFromMetadata.php?id=13489",
      },
    ],
  },
};

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .trim();
}

export default function BauvorlagenDarstellung() {
  const [stateName, setStateName] = useState("Baden-Württemberg");
  const [query, setQuery] = useState("");

  const selected = DATA[stateName];

  const filteredTopics = useMemo(() => {
    const q = normalize(query);
    if (!q) return selected.topics;

    return selected.topics.filter((item) => {
      const haystack =
        `${item.category} ${item.title} ${item.subtitle} ${item.description}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [query, selected]);

  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">Bauvorlagen & Darstellung</h1>
      </div>

      <div className="dashboard">
        <div className="tool-card">
          <h2 className="tool-heading">Schnell zum richtigen Portal</h2>

          <div className="tool-grid">
            <label className="tool-field">
              <span>Bundesland</span>
              <select
                className="tool-select"
                value={stateName}
                onChange={(e) => setStateName(e.target.value)}
              >
                {Object.keys(DATA).map((state) => (
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
                placeholder="z. B. Lageplan, Bebauungsplan, Maßstab, Kataster ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>

          <div className="hint-box">
            <p>
              <strong>Aktives Bundesland:</strong> {stateName}
            </p>
            <p>{selected.intro}</p>
            <p>
              Die Karten führen direkt zu offiziellen Portalen oder rechtlichen
              Grundlagen.
            </p>
          </div>
        </div>

        <div className="tool-card">
          <h2 className="tool-heading">{stateName}</h2>

          <div className="search-results-list" style={{ marginTop: 0 }}>
            {filteredTopics.map((item) => (
              <a
                key={`${stateName}-${item.category}-${item.title}`}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="search-result-card"
              >
                <div className="search-result-category">{item.category}</div>
                <h3>{item.title}</h3>
                <p>
                  <strong>{item.subtitle}</strong>
                </p>
                <p>{item.description}</p>
              </a>
            ))}
          </div>

          {filteredTopics.length === 0 && (
            <div className="hint-box" style={{ marginTop: "16px" }}>
              <p>
                Nichts gefunden. Versuch es mit <strong>Lageplan</strong>,{" "}
                <strong>Bebauungsplan</strong>, <strong>Kataster</strong>,{" "}
                <strong>Maßstab</strong>, <strong>Bauzeichnungen</strong> oder{" "}
                <strong>Geoportal</strong>.
              </p>
            </div>
          )}
        </div>

        <div className="tool-card warning-card">
          <h2 className="tool-heading">Wichtig</h2>
          <p>
            Das Tool ist als schneller Einstieg gedacht. Verbindlich sind immer
            die aktuellen landesrechtlichen Vorgaben, kommunalen Anforderungen
            und die jeweils zuständigen Portale oder Behörden.
          </p>
        </div>
      </div>
    </div>
  );
}
