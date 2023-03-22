import { Link } from "react-router-dom";
import { Layout as AntLayout } from "antd";

export function Navbar() {
  const { Header } = AntLayout;
  return (
    <Header className="nav-bar">
      <nav className="nav-bar-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
}
