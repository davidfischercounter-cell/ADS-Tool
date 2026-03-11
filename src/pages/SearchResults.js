import { useLocation, Link } from "react-router-dom";
import { guides } from "../data/guides";

function SearchResults() {
  const query = new URLSearchParams(useLocation().search).get("q");

  const results = guides.filter((guide) =>
    guide.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">Suchergebnisse</h1>
      </div>

      <div className="dashboard">
        <div className="tile-grid">
          {results.map((guide) => (
            <Link key={guide.id} to={`/guide/${guide.id}`} className="tile">
              {guide.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
