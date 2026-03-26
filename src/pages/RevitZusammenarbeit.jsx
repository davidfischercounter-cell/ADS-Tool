import { Link } from "react-router-dom";
import { guides } from "../data/guides";

function RevitZusammenarbeit() {
  const zusammenarbeitGuides = guides.filter(
    (guide) => guide.category === "zusammenarbeit"
  );

  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">Zusammenarbeit Lokal</h1>
      </div>

      <div className="dashboard">
        <div className="tile-grid">
          {zusammenarbeitGuides.map((guide) => (
            <Link key={guide.id} to={`/guide/${guide.id}`} className="tile">
              {guide.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RevitZusammenarbeit;
