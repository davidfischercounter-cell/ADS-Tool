import { Link } from "react-router-dom";

function Revit() {
  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">Revit</h1>
      </div>

      <div className="dashboard">
        <div className="tile-grid">
          <Link to="/revit/modellierung" className="tile">
            Modellierung
          </Link>

          <Link to="/revit/familien" className="tile">
            Familien
          </Link>

          <Link to="/revit/import" className="tile">
            Import / Export
          </Link>

          <Link to="/revit/zusammenarbeit" className="tile">
            Zusammenarbeit
          </Link>

          <Link to="/revit/darstellung" className="tile">
            Darstellung
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Revit;
