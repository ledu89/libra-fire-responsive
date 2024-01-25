import { useState } from "react";
import "./navbar.scss";
function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const toggleNavbar = () => {
    setMobileNavOpen(!mobileNavOpen);
    setHamburgerActive(!hamburgerActive);
  };
  document.body.style.overflow = mobileNavOpen ? "hidden" : "auto";
  return (
    <header>
      <nav>
        <div className="logo-container">
          <img src="../assets/Logo.png" alt="logo" />
        </div>

        <div
          className={`hamburger ${hamburgerActive ? "hamburger-active" : ""}`}
          onClick={toggleNavbar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div
          className={`navbar-container ${
            mobileNavOpen ? "mobile-nav-open" : ""
          }`}
        >
          <div className="navbar-links">
            {" "}
            <ul className="navbar-links">
              <li>
                <a href="#Assortiment">Assortiment</a>
              </li>
              <li>
                <a href="#Vestigingen">Vestigingen</a>
              </li>
              <li>
                <a href="#Installateursnetwerk">Installateursnetwerk</a>
              </li>
            </ul>
          </div>
          <div className="navbar-icons">
            <img src="../assets/Icon feather-search.png" alt="icon" />
            <img src="../assets/Icon feather-shopping-cart.png" alt="icon" />
            <img src="../assets/profile-icon.png" alt="icon" />
          </div>
          <a href="#Contact" className="navbar-btn">
            Maak een afspraak
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
