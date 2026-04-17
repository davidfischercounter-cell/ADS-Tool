import { Link } from "react-router-dom";
import "../styles/dashboard.css";

function Home() {
  return (
    <div className="dashboard">
      <div className="tile-grid">
        <Link to="/revit" className="tile">
          Revit
        </Link>

        <Link to="/clouds" className="tile">
          Punktwolken
        </Link>

        <Link to="/solutions" className="tile">
          Problemlösungen
        </Link>

        <Link to="/requests" className="tile">
          Anfragen
        </Link>
        <Link to="/tools" className="tile">
          Tools
        </Link>
      </div>
    </div>
  );
}

export default Home;
