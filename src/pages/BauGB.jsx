import { useMemo, useState } from "react";
import "../styles/styles.css";

const BAUGB_DATA = [
  {
    section: "Zulässigkeit von Vorhaben",
    keywords: ["vorhaben", "zulässigkeit", "b-plan", "bebauungsplan", "innenbereich", "außenbereich", "befreiung"],
    items: [
      {
        topic: "Begriff des Vorhabens",
        paragraph: "§ 29 BauGB",
        url: "https://www.gesetze-im-internet.de/bbaug/__29.html",
        description: "Einstieg: Wann liegt überhaupt ein planungsrechtlich relevantes Vorhaben vor?",
      },
      {
        topic: "Vorhaben im Geltungsbereich eines Bebauungsplans",
        paragraph: "§ 30 BauGB",
        url: "https://www.gesetze-im-internet.de/bbaug/__30.html",
        description: "Der Klassiker bei Vorhaben im Bereich eines qualifizierten oder vorhabenbezogenen Bebauungsplans.",
      },
      {
        topic: "Ausnahmen und Befreiungen",
        paragraph: "§ 31 BauGB",
        url: "https://www.gesetze-im-internet.de/bbaug/__31.html",
        description: "Wenn ein Vorhaben nur mit Ausnahme oder Befreiung funktionieren kann.",
      },
      {
        topic: "Vorhaben während der Planaufstellung",
        paragraph: "§ 33 BauGB",
        url: "https://www.gesetze-im-internet.de/bbaug/__33.html",
        description: "Relevant, wenn ein Bebauungsplan noch nicht rechtskräftig ist.",
      },
      {
        topic: "Innenbereich",
        paragraph: "§ 34 BauGB",
        url: "https://www.gesetze-im-internet.de/bbaug/__34.html",
        description: "Der § für Vorhaben innerhalb der im Zusammenhang bebauten Ortsteile.",
      },
      {
        topic: "Außenbereich",
        paragraph: "§ 35 BauGB",
        url: "https://www.gesetze-im-internet.de/bbaug/__35.html",
        description: "Der § für privilegierte und sonstige Vorhaben im Außenbereich.",
      },
      {
        topic: "Einvernehmen der Gemeinde",
        paragraph: "§ 36 BauGB",
        url: "https://www.gesetze-im-internet.de/bbaug/__36.html",
        description: "Wann die Gemeinde beteiligt wird und ihr Einvernehmen erforderlich ist.",
      },
    ],
  },
  {
    section: "Bauleitplanung – Grundlagen",
    keywords: ["bauleitplanung", "flächennutzungsplan", "bebauungsplan", "planung", "grundsätze"],
    items: [
      {
        topic: "Aufgabe, Begriff und Grundsätze der Bauleitplanung",
        paragraph: "§ 1 BauGB",
        url: "https://www.gesetze-im-internet.de/bbaug/__1.html",
        description: "Einstieg in die Bauleitplanung und ihre Grundprinzipien.",
      },
      {
        topic: "Bebauungsplan",
        paragraph: "§ 8 BauGB",
        url: "https://www.gesetze-im-internet.de/bbaug/__8.html",
        description: "Grundregel zum Bebauungsplan.",
      },
      {
        topic: "Inhalt des Bebauungsplans",
        paragraph: "§ 9 BauGB",
        url: "https://www.gesetze-im-internet.de/bbaug/__9.html",
        description: "Welche Festsetzungen in einem Bebauungsplan getroffen werden können.",
      },
    ],
  },
  {
    section: "Spezielle Praxis-Themen",
    keywords: ["gemeinde", "wind", "windenergie", "zustimmung"],
    items: [
      {
        topic: "Zustimmung der Gemeinde",
        paragraph: "§ 36a BauGB",
        url: "https://www.gesetze-im-internet.de/bbaug/__36a.html",
        description: "Spezielle Regelung zur Zustimmung der Gemeinde.",
      },
      {
        topic: "Sonderregelungen für Windenergieanlagen an Land",
        paragraph: "§ 249 BauGB",
        url: "https://www.gesetze-im-internet.de/bbaug/__249.html",
        description: "Wichtig für aktuelle Windenergie-Themen im Außenbereich.",
      },
    ],
  },
];

function normalize(text) {
  return String(text || "").toLowerCase().trim();
}

function BauGB() {
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    const q = normalize(query);

    if (!q) return BAUGB_DATA;

    return BAUGB_DATA
      .map((section) => {
        const sectionMatch =
          normalize(section.section).includes(q) ||
          section.keywords.some((keyword) => normalize(keyword).includes(q));

        const filteredItems = section.items.filter((item) => {
          const haystack =
            `${item.topic} ${item.paragraph} ${item.description}`.toLowerCase();
          return haystack.includes(q);
        });

        if (sectionMatch) {
          return section;
        }

        if (filteredItems.length > 0) {
          return { ...section, items: filteredItems };
        }

        return null;
      })
      .filter(Boolean);
  }, [query]);

  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">BauGB</h1>
      </div>

      <div className="dashboard">
        <div className="tool-card">
          <h2 className="tool-heading">Schnell zum richtigen §</h2>

          <div className="tool-grid" style={{ gridTemplateColumns: "1fr" }}>
            <label className="tool-field">
              <span>Suche nach Thema oder Begriff</span>
              <input
                type="text"
                placeholder="z. B. Innenbereich, Außenbereich, Befreiung, B-Plan ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>

          <div className="hint-box" style={{ marginTop: "8px" }}>
            <p>
              Dieses Tool ist ein Schnellfinder für zentrale Vorschriften im BauGB.
            </p>
            <p>
              Besonders relevant in der Praxis sind oft § 30, § 31, § 34, § 35 und § 36 BauGB.
            </p>
            <p>
              Der Klick auf eine Karte öffnet direkt die offizielle Einzelnorm.
            </p>
          </div>
        </div>

        {filteredSections.map((section) => (
          <div className="tool-card" key={section.section}>
            <h2 className="tool-heading">{section.section}</h2>

            <div className="search-results-list" style={{ marginTop: 0 }}>
              {section.items.map((item) => (
                <a
                  key={`${section.section}-${item.paragraph}-${item.topic}`}
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
          </div>
        ))}

        {filteredSections.length === 0 && (
          <div className="tool-card">
            <h2 className="tool-heading">Nichts gefunden</h2>
            <div className="hint-box">
              <p>
                Versuch es mit <strong>Innenbereich</strong>, <strong>Außenbereich</strong>,{" "}
                <strong>Befreiung</strong>, <strong>Bebauungsplan</strong> oder{" "}
                <strong>Einvernehmen</strong>.
              </p>
            </div>
          </div>
        )}

        <div className="tool-card warning-card">
          <h2 className="tool-heading">Wichtig</h2>
          <p>
            Der Finder ist als schneller Einstieg gedacht. Verbindlich sind immer
            die aktuelle Gesetzesfassung, der konkrete Bebauungsplan und die
            Einordnung des Vorhabens im Zusammenspiel mit BauNVO und Landesbauordnung.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BauGB;