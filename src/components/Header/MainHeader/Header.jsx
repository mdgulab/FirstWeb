import { NavLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-up-color"></div>
      <div className="logo">
        <NavLink to="/">
          <img
            src="https://pediatricsmeets.com/wp-content/uploads/2024/07/Pediatrics_logo-removebg-preview.png"
            alt="Event Logo"
          />
        </NavLink>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className="nav-links-container">
        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav active-link" : "nav"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="dropdown">
            <div
              onClick={window.innerWidth <= 768 ? toggleDropdown : null}
              onMouseEnter={
                window.innerWidth > 768 ? () => setIsDropdownOpen(true) : null
              }
              onMouseLeave={
                window.innerWidth > 768 ? () => setIsDropdownOpen(false) : null
              }
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <NavLink
                to="/upcoming-event"
                className={({ isActive }) =>
                  isActive ? "nav active-link" : "nav"
                }
              >
                Upcoming Conference
              </NavLink>
              <ArrowDropDownIcon />
            </div>
            {(isDropdownOpen || window.innerWidth > 768) && (
              <ul className="dropdown-content">
                <li>
                  <NavLink className="dropdown-nav" to="/ConfrencePage">
                    Pediatrics & Neonatology Conference
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-nav" to="/Nutrition">
                    Pediatric Nutrition Conference
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-nav" to="/Emerging">
                    Emerging Issues
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-nav" to="/Infectious">
                    Pediatric Infectious Diseases Conference
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-nav"
                    to="/biodiversity-conference"
                  >
                    Pediatric Genomics Conference
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-nav"
                    to="/biodiversity-conference"
                  >
                    Neonatal Development Conference
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/Guideline"
              className={({ isActive }) =>
                isActive ? "nav active-link" : "nav"
              }
            >
              Speaker Guidelines
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Venue"
              className={({ isActive }) =>
                isActive ? "nav active-link" : "nav"
              }
            >
              Venue
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "nav active-link" : "nav"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Travelvisa"
              className={({ isActive }) =>
                isActive ? "nav active-link" : "nav"
              }
            >
              Travel Visa
            </NavLink>
          </li>
        </ul>
        <div className="nav-register-button">
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
