import BackButton from "./BackButton.jsx";
import logo from "../assets/logo.png";
import "../styles/header.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q") || "";
    setSearch(q);
  }, [location.search]);

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedSearch = search.trim();

    if (!trimmedSearch) {
      navigate("/");
      return;
    }

    navigate(`/search?q=${encodeURIComponent(trimmedSearch)}`);
  }

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-top">
          <Link to="/" className="header-logo-link">
            <img src={logo} className="header-logo" alt="ADS Logo" />
          </Link>

          <div className="header-right">
            {location.pathname !== "/" && <BackButton />}
          </div>
        </div>

        <form className="header-search-form" onSubmit={handleSubmit}>
          <input
            className="header-search"
            placeholder="Revit Problem oder Lösung suchen..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
}

export default Header;
