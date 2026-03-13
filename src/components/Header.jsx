import BackButton from "./BackButton";
import logo from "../assets/logo.png";
import "../styles/header.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/search?q=${search}`);
    }
  };

  return (
    <div className="header">
      <div className="header-inner">
        <div className="header-top">
          <img src={logo} className="header-logo" alt="ADS Logo" />

          <div className="header-right">
            <Link to="/bbq" className="bbq-button">
              BBQ Tool
            </Link>

            {location.pathname !== "/" && <BackButton />}
          </div>
        </div>

        <input
          className="header-search"
          placeholder="Revit Problem oder Lösung suchen..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
    </div>
  );
}

export default Header;
