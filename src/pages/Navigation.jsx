import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="navUl">
        <li>
          <Link to="/" className="navLink">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" className="navLink">
            About
          </Link>
        </li>

        <li>
          <Link to="/dashboard" className="navLink">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
