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
          <Link to="/guide/punktwolke-verschieben" className="tile">
            Punktwolke verschieben
          </Link>

          <Link to="/guide/punktwolke Import Revit" className="tile">
            Punktwolke Import Revit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Clouds;
