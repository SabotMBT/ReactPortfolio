import React, { useState, useEffect } from "react";
import { Collapse } from "bootstrap";
import { List } from "react-bootstrap-icons";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header({ currentPage, handlePageChange }) {
  var [toggle, setToggle] = useState(false);

  useEffect(() => {
    var myCollapse = document.getElementById("collapseTarget");
    var bsCollapse = new Collapse(myCollapse, { toggle: false });
    toggle ? bsCollapse.show() : bsCollapse.hide();
  });
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#about">
          JD Rogers Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setToggle((toggle) => !toggle)}
        >
          <List />
        </button>
        <div className="collapse navbar-collapse" id="collapseTarget">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                aria-current="page"
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
