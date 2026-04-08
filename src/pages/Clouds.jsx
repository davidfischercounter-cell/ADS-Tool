import { Link } from "react-router-dom";

function Clouds() {
  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">Punktwolken</h1>
      </div>

      <div className="dashboard">
        <div className="tile-grid">
          <Link to="/guide/punktwolke-recap" className="tile">
            Punktwolken in Recap
          </Link>

          <Link to="/guide/punktwolke-import-in-revit" className="tile">
            Punktwolke Import Revit
          </Link>

          <Link to="/guide/punktwolke-bereinigen" className="tile">
            Punktwolke bereinigen
          </Link>

          <Link to="/guide/punktwolke-export" className="tile">
            Punktwolke Export
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Clouds;
