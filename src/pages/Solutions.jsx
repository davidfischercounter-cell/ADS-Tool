import { Link } from "react-router-dom";

function Solutions() {
  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">Problemlösungen</h1>
      </div>

      <div className="dashboard">
        <div className="tile-grid">
          <Link to="/guide/raeume-verschwinden" className="tile">
            Räume verschwinden
          </Link>

          <Link to="/guide/maßketten-verschwinden" className="tile">
            Maßketten verschwinden
          </Link>

          <Link to="/guide/schnittlinien-weg" className="tile">
            Schnittlinien weg
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
