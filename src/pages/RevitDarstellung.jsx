import { Link } from "react-router-dom";
import { guides } from "../data/guides";

function RevitDarstellung() {
  const darstellungGuides = guides.filter(
    (guide) => guide.category === "darstellung"
  );

  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">Darstellung</h1>
      </div>

      <div className="dashboard">
        <div className="tile-grid">
          {darstellungGuides.map((guide) => (
            <Link key={guide.id} to={`/guide/${guide.id}`} className="tile">
              {guide.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RevitDarstellung;
