import { Link } from "react-router-dom";
import "../styles/dashboard.css";

function Brandschutz() {
  return (
    <div className="dashboard">
      <div className="tile-grid">
        <Link to="/brandschutz/baustoffklassen" className="tile">
          Baustoffklassen
        </Link>

        <Link to="/brandschutz/klassifizierung" className="tile">
          Klassifizierung
        </Link>

        <Link to="/brandschutz/bmabwa" className="tile">
          BMA/BWA
        </Link>

        <Link to="/brandschutz/brandwand" className="tile">
          Brandwand vs. F90
        </Link>
      </div>
    </div>
  );
}

export default Brandschutz;
