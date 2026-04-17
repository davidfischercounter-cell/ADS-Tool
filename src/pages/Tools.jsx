import { Link } from "react-router-dom";
import "../styles/styles.css";

function Tools() {
  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">Tools</h1>
      </div>

      <div className="dashboard">
        <div className="tile-grid">
          <Link to="/bbq" className="tile">
            BBQ Tool
          </Link>

          <Link to="/tools/abstandsflaechen" className="tile">
            Abstandsflächen
          </Link>

          <Link to="/tools/grz-gfz" className="tile">
            GRZ / GFZ
          </Link>

          <div className="tile">Wohnfläche</div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
