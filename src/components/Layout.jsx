import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div>
      <Header />

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
