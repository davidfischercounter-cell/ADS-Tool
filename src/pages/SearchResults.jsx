import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";
import guides from "../data/guides";

function normalizeText(text = "") {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .trim();
}

function scoreGuide(guide, query) {
  const q = normalizeText(query);
  if (!q) return 0;

  const title = normalizeText(guide.title || "");
  const category = normalizeText(guide.category || "");
  const description = normalizeText(guide.description || "");
  const keywords = normalizeText((guide.keywords || []).join(" "));

  let score = 0;

  if (title === q) score += 100;
  if (title.startsWith(q)) score += 60;
  if (title.includes(q)) score += 40;

  if (category === q) score += 35;
  if (category.includes(q)) score += 20;

  if (keywords.includes(q)) score += 25;
  if (description.includes(q)) score += 10;

  return score;
}

export default function SearchResults() {
  const location = useLocation();

  const searchTerm = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get("q") || "";
  }, [location.search]);

  const results = useMemo(() => {
    const normalizedQuery = normalizeText(searchTerm);

    if (!normalizedQuery) return [];

    return guides
      .map((guide) => ({
        ...guide,
        score: scoreGuide(guide, normalizedQuery),
      }))
      .filter((guide) => guide.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [searchTerm]);

  return (
    <div className="page">
      <h1>Suchergebnisse</h1>

      {searchTerm ? (
        <p>
          Ergebnisse für: <strong>{searchTerm}</strong>
        </p>
      ) : (
        <p>Bitte gib einen Suchbegriff ein.</p>
      )}

      {searchTerm && results.length === 0 && (
        <p>Keine passenden Ergebnisse gefunden.</p>
      )}

      {results.length > 0 && (
        <div className="search-results-list">
          {results.map((guide) => (
            <Link
              key={guide.id}
              to={`/guide/${guide.id}`}
              className="search-result-card"
            >
              <h3>{guide.title}</h3>

              {guide.category && (
                <p className="search-result-category">{guide.category}</p>
              )}

              {guide.description && <p>{guide.description}</p>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
