import { Link } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">ADS-GPT</h2>

      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/revit">Revit</Link>
        <Link to="/solutions">Problemlösungen</Link>
        <Link to="/requests">Anfragen</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
