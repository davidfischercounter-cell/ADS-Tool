import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
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
    <div>
      <header className="header">
        <div className="header-inner">
          <div className="header-top">
            <Link to="/" className="header-logo-link">
              <div className="header-logo">ADS Guide</div>
            </Link>

            <div className="header-right">
              <Link to="/bbq" className="bbq-button">
                BBQ Tool
              </Link>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="header-search"
              placeholder="Suche nach Guides, Themen oder Begriffen..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
