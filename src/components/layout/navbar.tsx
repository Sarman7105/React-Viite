import { Link } from "react-router-dom";
import { Layout as AntLayout } from "antd";

export function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="nav-bar">
        <ul className="nav-bar-items">
          <li className="nav-bar-item">
            <Link className="nav-bar-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-bar-item">
            <Link className="nav-bar-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-bar-item">
            <Link className="nav-bar-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-bar-item">
            <Link className="nav-bar-link" to="/nothing-here">
              Nothing Here
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
