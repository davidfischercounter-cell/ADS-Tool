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

          <Link to="/tools/baunvo" className="tile">
            BauNVO
          </Link>

          <Link to="/tools/lbo-finder" className="tile">
            LBO Finder
          </Link>

          <Link to="/tools/baugb" className="tile">
            BauGB
          </Link>

          <Link to="/tools/bauvorlagen-darstellung" className="tile">
            Bauvorlagen & Darstellung
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tools;
