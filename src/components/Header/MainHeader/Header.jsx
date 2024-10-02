// import React from 'react';
//import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Header.css";
import { Dropdown } from "react-bootstrap";
// import Link from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://pediatricsmeets.com/wp-content/uploads/2024/07/Pediatrics_logo-removebg-preview.png"
              alt="Pediatrics Logo"
              className="logo"
            />
          </a>
          <div className="nav-links">
            <ul className="nav-list">
              <li>
                <a href="/HomePage" className="nav-link">
                  Home
                </a>
              </li>

              <li>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="link"
                    className="nav-link dropdown-toggle"
                  >
                    Conferences
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/ConfrencesPage">
                      Pediatrics & Neonatology Conference
                    </Dropdown.Item>
                    <Dropdown.Item href="/Nutrition">
                      Pediatric Nutrition Conference
                    </Dropdown.Item>
                    <Dropdown.Item href="/Emerging">
                      Emerging Issues
                    </Dropdown.Item>
                    <Dropdown.Item href="/Infectious">
                      Pediatric Infectious Diseases Conference
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      Pediatric Genomics Conference
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      Neonatal Development Conference
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              {/* Correct className and Link path */}

              <li>
                <Link to="/Guideline" className="nav-link">
                  Speaker Guidelines
                </Link>
              </li>
              <li>
                <Link to="/Venue" className="nav-link">
                  Venue
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/TravelVisa" className="nav-link">
                  Travel Visa
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn-register">Register Now</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
