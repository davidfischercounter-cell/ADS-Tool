import { Link } from "react-router-dom";
import { guides } from "../data/guides";

function RevitModellierung() {
  const modellierungGuides = guides.filter(
    (guide) => guide.category === "modellierung"
  );

  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">Revit Modellierung</h1>
      </div>

      <div className="dashboard">
        <div className="tile-grid">
          {modellierungGuides.map((guide) => (
            <Link key={guide.id} to={`/guide/${guide.id}`} className="tile">
              {guide.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RevitModellierung;
