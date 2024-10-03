import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img
              src="https://pediatricsmeets.com/wp-content/uploads/2024/07/Pediatrics_logo-removebg-preview.png"
              alt="Pediatrics Logo"
              className="logo"
            />
          </a>

          {/* Hamburger Menu Icon */}
          <div
            className={`menu-icon ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Navigation Links */}
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <ul className="nav-list">
              <li>
                <Link to="/HomePage" className="nav-link" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="link"
                    className="nav-link dropdown-toggle"
                  >
                    Upcoming Conferences
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={Link}
                      to="/ConfrencePage"
                      onClick={toggleMenu}
                    >
                      Pediatrics & Neonatology Conference
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/Nutrition"
                      onClick={toggleMenu}
                    >
                      Pediatric Nutrition Conference
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/Emerging"
                      onClick={toggleMenu}
                    >
                      Emerging Issues
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/Infectious"
                      onClick={toggleMenu}
                    >
                      Pediatric Infectious Diseases Conference
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/Genomics"
                      onClick={toggleMenu}
                    >
                      Pediatric Genomics Conference
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/NeonatalDevelopment"
                      onClick={toggleMenu}
                    >
                      Neonatal Development Conference
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <Link to="/Guideline" className="nav-link" onClick={toggleMenu}>
                  Speaker Guidelines
                </Link>
              </li>
              <li>
                <Link to="/Venue" className="nav-link" onClick={toggleMenu}>
                  Venue
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="nav-link" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/TravelVisa"
                  className="nav-link"
                  onClick={toggleMenu}
                >
                  Travel Visa
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional elements: Search Bar */}
          {menuOpen && (
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
              />
            </div>
          )}

          {/* Register Button */}
          <button className="btn-register">Register Now</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
