import { Link } from "react-router-dom";
import { guides } from "../data/guides";

function RevitImport() {
  const familienGuides = guides.filter(
    (guide) => guide.category === "importexport"
  );

  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">Import und Export</h1>
      </div>

      <div className="dashboard">
        <div className="tile-grid">
          {familienGuides.map((guide) => (
            <Link key={guide.id} to={`/guide/${guide.id}`} className="tile">
              {guide.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RevitImport;
