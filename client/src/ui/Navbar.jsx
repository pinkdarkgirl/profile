// rrd import
import { Link } from "react-router-dom";

// library import for the hash links
import { NavHashLink } from "react-router-hash-link";

// Navbar component containing the navigation links
function Navbar() {
  return (
    <nav className="navbar">
      {/* logo as a link to homepage */}
      <div className="logo-container">
        <Link to="/" className="logo">
          sude tufan
        </Link>
      </div>

      {/* navigation links for different parts of the page */}
      <ul
        className="navlink-container
      "
      >
        <li>
          <NavHashLink className="navlink" smooth to="/#home">
            Home
          </NavHashLink>
        </li>
        <li>
          <NavHashLink className="navlink" smooth to="/#about">
            About
          </NavHashLink>
        </li>
        <li>
          <NavHashLink className="navlink" smooth to="/#projects">
            Projects
          </NavHashLink>
        </li>
        <li>
          <NavHashLink className="navlink" smooth to="/#contact">
            Contact
          </NavHashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
