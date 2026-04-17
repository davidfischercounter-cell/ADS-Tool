import { useMemo, useState } from "react";
import "../styles/styles.css";

const BAUNVO_TOPICS = [
  {
    title: "Gebietsart finden",
    keywords: ["wohnen", "gewerbe", "mischgebiet", "dorfgebiet", "industrie"],
    items: [
      {
        label: "Allgemeine Vorschriften zu Bauflächen und Baugebieten",
        paragraph: "§ 1 BauNVO",
        url: "https://www.gesetze-im-internet.de/baunvo/__1.html",
        description:
          "Einstieg in Bauflächen, Baugebiete, Gliederung und Zulässigkeit.",
      },
      {
        label: "Kleinsiedlungsgebiete",
        paragraph: "§ 2 BauNVO",
        url: "https://www.gesetze-im-internet.de/baunvo/__2.html",
        description: "Gebietstyp Kleinsiedlungsgebiet.",
      },
      {
        label: "Reine Wohngebiete",
        paragraph: "§ 3 BauNVO",
        url: "https://www.gesetze-im-internet.de/baunvo/__3.html",
        description: "Gebietstyp WR.",
      },
      {
        label: "Allgemeine Wohngebiete",
        paragraph: "§ 4 BauNVO",
        url: "https://www.gesetze-im-internet.de/baunvo/__4.html",
        description: "Gebietstyp WA.",
      },
      {
        label: "Besondere Wohngebiete",
        paragraph: "§ 4a BauNVO",
        url: "https://www.gesetze-im-internet.de/baunvo/__4a.html",
        description: "Gebietstyp WB.",
      },
      {
        label: "Dorfgebiete / dörfliche Wohngebiete",
        paragraph: "§§ 5, 5a BauNVO",
        url: "https://www.gesetze-im-internet.de/baunvo/__5.html",
        description: "Gebietstypen MD und MDW.",
      },
      {
        label: "Mischgebiete / Urbane Gebiete / Kerngebiete",
        paragraph: "§§ 6, 6a, 7 BauNVO",
        url: "https://www.gesetze-im-internet.de/baunvo/__6.html",
        description: "Gebietstypen MI, MU und MK.",
      },
      {
        label: "Gewerbegebiete / Industriegebiete / Sondergebiete",
        paragraph: "§§ 8, 9, 10, 11 BauNVO",
        url: "https://www.gesetze-im-internet.de/baunvo/__8.html",
        description: "GE, GI und Sondergebiete.",
      },
    ],
  },
  {
    title: "Maß der baulichen Nutzung",
    keywords: [
      "grz",
      "gfz",
      "höhe",
      "vollgeschosse",
      "baumassenzahl",
      "geschossfläche",
    ],
    items: [
      {
        label: "Bestimmung des Maßes der baulichen Nutzung",
        paragraph: "§ 16 BauNVO",
        url: "https://www.gesetze-im-internet.de/baunvo/__16.html",
        description:
          "Grundlage für GRZ, GFZ, Baumassenzahl, Höhe, Vollgeschosse.",
      },
      {
        label: "Zulässige Grundfläche / Zahl der Vollgeschosse",
        paragraph: "§ 17 BauNVO",
        url: "https://www.gesetze-im-internet.de/baunvo/__17.html",
        description: "Orientierungswerte und Festsetzungen.",
      },
      {
        label: "Grundflächenzahl (GRZ)",
        paragraph: "§ 19 BauNVO",
        url: "https://www.gesetze-im-internet.de/baunvo/__19.html",
        description: "Regelung zur GRZ und zulässigen Grundfläche.",
      },
      {
        label: "Geschossflächenzahl (GFZ) / Geschossfläche",
        paragraph: "§ 20 BauNVO",
        url: "https://www.gesetze-im-internet.de/baunvo/__20.html",
        description: "Regelung zur GFZ und Geschossfläche.",
      },
      {
        label: "Baumassenzahl / Baumasse",
        paragraph: "§ 21 BauNVO",
        url: "https://www.gesetze-im-internet.de/baunvo/__21.html",
        description: "Regelung zur Baumassenzahl.",
      },
    ],
  },
  {
    title: "Bauweise und Baufenster",
    keywords: [
      "baugrenze",
      "baulinie",
      "bauweise",
      "abstand",
      "baufenster",
      "überbaubar",
    ],
    items: [
      {
        label: "Bauweise",
        paragraph: "§ 22 BauNVO",
        url: "https://www.gesetze-im-internet.de/baunvo/__22.html",
        description: "Offene / geschlossene Bauweise und Hausformen.",
      },
      {
        label: "Überbaubare Grundstücksflächen",
        paragraph: "§ 23 BauNVO",
        url: "https://www.gesetze-im-internet.de/baunvo/__23.html",
        description: "Baulinien, Baugrenzen und Bebauungstiefen.",
      },
    ],
  },
  {
    title: "Garagen, Stellplätze, Nebenanlagen",
    keywords: ["garage", "stellplatz", "nebenanlage", "anlagen"],
    items: [
      {
        label: "Stellplätze, Garagen und Gemeinschaftsanlagen",
        paragraph: "§ 12 BauNVO",
        url: "https://www.gesetze-im-internet.de/baunvo/__12.html",
        description:
          "Stellplätze, Garagen und Gemeinschaftsanlagen im Baugebiet.",
      },

      {
        label: "Nebenanlagen / erneuerbare Energien",
        paragraph: "§ 14 BauNVO",
        url: "https://www.gesetze-im-internet.de/baunvo/__14.html",
        description:
          "Zulässigkeit von Nebenanlagen; dazu gehören auch Anlagen zur Erzeugung von Strom oder Wärme aus erneuerbaren Energien.",
      },
    ],
  },
];

function normalizeText(value) {
  return value.toLowerCase().trim();
}

function BauNVO() {
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    const q = normalizeText(query);

    if (!q) return BAUNVO_TOPICS;

    return BAUNVO_TOPICS.map((section) => {
      const sectionMatch =
        normalizeText(section.title).includes(q) ||
        section.keywords.some((keyword) => normalizeText(keyword).includes(q));

      const filteredItems = section.items.filter((item) => {
        const haystack =
          `${item.label} ${item.paragraph} ${item.description}`.toLowerCase();
        return haystack.includes(q);
      });

      if (sectionMatch) {
        return section;
      }

      if (filteredItems.length > 0) {
        return { ...section, items: filteredItems };
      }

      return null;
    }).filter(Boolean);
  }, [query]);

  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">BauNVO</h1>
      </div>

      <div className="dashboard">
        <div className="tool-card">
          <h2 className="tool-heading">Schnell zum richtigen §</h2>

          <div className="tool-grid" style={{ gridTemplateColumns: "1fr" }}>
            <label className="tool-field">
              <span>Suche nach Thema oder Begriff</span>
              <input
                type="text"
                placeholder="z. B. GRZ, Mischgebiet, Baugrenze, Stellplätze ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>

          <div className="hint-box" style={{ marginTop: "8px" }}>
            <p>
              Dieses Tool ist ein Themen-Finder für die BauNVO. Es hilft beim
              schnellen Einstieg in den passenden Paragraphen.
            </p>
            <p>
              Für die verbindliche Bewertung zählen immer der konkrete
              Bebauungsplan, das BauGB und die jeweilige Landesbauordnung.
            </p>
          </div>
        </div>

        {filteredSections.map((section) => (
          <div className="tool-card" key={section.title}>
            <h2 className="tool-heading">{section.title}</h2>

            <div className="search-results-list" style={{ marginTop: 0 }}>
              {section.items.map((item) => (
                <a
                  key={`${section.title}-${item.paragraph}-${item.label}`}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="search-result-card"
                >
                  <div className="search-result-category">{item.paragraph}</div>
                  <h3>{item.label}</h3>
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
                Versuch es mit Begriffen wie <strong>GRZ</strong>,{" "}
                <strong>GFZ</strong>, <strong>Mischgebiet</strong>,{" "}
                <strong>Baugrenze</strong>, <strong>Baulinie</strong> oder{" "}
                <strong>Stellplätze</strong>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BauNVO;
