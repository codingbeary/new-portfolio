import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaHome } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand abs" href="#">
          <FaHome size="2em" />
        </a>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="collapseNavbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="//codeply.com">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#myAlert" data-bs-toggle="collapse">
                Tools
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#myAlert" data-bs-toggle="collapse">
                Contact
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/kiyooteru"
                data-bs-target="#myModal"
                target="_blank"
              >
                <FaGithub size="2em" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://twitter.com/kiyooteru"
                data-bs-target="#myModal"
                target="_blank"
              >
                <FaTwitter size="2em" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/kinga-mi%C5%9Bkiewicz-3a1251258/"
                data-bs-target="#myModal"
                target="_blank"
              >
                <FaLinkedin size="2em" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
